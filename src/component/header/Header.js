import React, { useState } from 'react';
import {AppBar, Box, Grid, Link, Toolbar, Typography} from "@mui/material";
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

export default function Header() {
    const [isEditing, setIsEditing] = useState(false);
    const [textInput, setTextInput] = useState('Media management');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
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
                <Grid spacing={2} alignItems="center" gap="12px" display="flex">
                    <MobileGrid item textAlign="right">
                        <Box>
                            <Typography variant="h6" sx={{fontSize: '16px', lineHeight: '24px'}}>Jane Cooper</Typography>
                            <Link sx={{color: '#FF7DFF', fontSize: '16px', fontWeight: '300', textDecorationColor: '#FF7DFF'}} href="javascript:void(0)" rel="noopener noreferrer">
                                Change profile
                            </Link>
                        </Box>
                    </MobileGrid>
                    <img
                        src={profileImage}
                        alt="Placeholder"
                        style={{ width: '40px', height: '40px', borderRadius: '12px' }}
                    />
                </Grid>
            </CustomToolbar>
        </CustomAppBar>
    )
}