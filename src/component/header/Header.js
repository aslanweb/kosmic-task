import React, { useState } from 'react';
import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";
import profileImage from "../../assets/images/profile-image.png";
import editImage from "../../assets/images/edit.svg";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";

const HoverTypography = styled(Typography)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        background: '#FF7DFF',
    },
}));
const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        minHeight: 'unset',
        padding: '0',
    },
}));
const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#09090d',
    padding: '32px',
    borderBottom: '1px solid #3A3940',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        padding: '35px 4px 0',
        backgroundColor: 'transparent',
        borderBottom: 'none'
    }
}));
const MobileGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}));

const ProfileImage = styled(Typography)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    '& input' : {
        position: 'absolute',
        top: '0',
        left: '0',
        opacity: '0',
    }
}));
const ProfileImageMobile = styled(Grid)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    '& input' : {
        position: 'absolute',
        top: '0',
        left: '0',
        opacity: '0',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inherit'
        }
    }
}));

export default function Header() {
    const [isEditing, setIsEditing] = useState(false);
    const [textInput, setTextInput] = useState('Media management');
    const [selectedImage, setSelectedImage] = useState(profileImage);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <CustomAppBar position="static">
            <CustomToolbar>
                <Grid spacing={2} alignItems="center" gap="16px" display="flex" sx={{ flexGrow: 1 }}>
                    <HoverTypography sx={{cursor: 'pointer', borderRadius: '12px', background: 'rgba(58, 57, 64, 0.30)', width: '47px', height: '47px'}} display="flex" alignItems="center" justifyContent="center">
                        <KeyboardBackspaceIcon sx={{ width: '24px' }} />
                    </HoverTypography>
                    <Grid item textAlign="left">
                        <Box>
                            {isEditing ? (
                                <TextField
                                    className="edit_text"
                                    value={textInput}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    sx={{ fontSize: '16px' }}
                                />
                            ) : (
                                <Typography
                                    variant="h6"
                                    display="flex"
                                    alignItems="center"
                                    gap="10px"
                                    className="after_edit_text"
                                    sx={{ fontSize: '16px', lineHeight: '24px' }}
                                    onClick={handleEditClick}
                                >
                                    <span>{textInput}</span>
                                    <img
                                        src={editImage}
                                        style={{ cursor: 'pointer' }}
                                        alt="editImage"
                                    />
                                </Typography>
                            )}
                            <Typography sx={{ fontSize: '16px', color: '#D0CFD1' }}>
                                Draft campaign
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <ProfileImageMobile spacing={2} alignItems="center" gap="12px" display="flex">
                    <MobileGrid item textAlign="right">
                        <Box>
                            <Typography variant="h6" sx={{fontSize: '16px', lineHeight: '24px'}}>Jane Cooper</Typography>
                            <ProfileImage sx={{color: '#FF7DFF', fontSize: '16px', fontWeight: '300', textDecoration: 'underline', cursor: 'pointer', textDecorationColor: '#FF7DFF'}} rel="noopener noreferrer">
                                Change profile
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </ProfileImage>
                        </Box>
                    </MobileGrid>
                    <img
                        src={selectedImage}
                        alt="Placeholder"
                        style={{ width: '40px', height: '40px', borderRadius: '12px' }}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </ProfileImageMobile>
            </CustomToolbar>
        </CustomAppBar>
    )
}