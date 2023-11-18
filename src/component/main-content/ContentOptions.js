import React, { useState } from 'react';
import {Box, Button, Grid, List, ListItem, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const MinTitleSpace = styled(Grid)(({ theme }) => ({
    paddingBottom: '24px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '16px',
    }
}));
const ButtonWrap = styled(List)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '0',
    marginBottom: '32px',
    [theme.breakpoints.down('sm')]: {
        gap: '2px',
    },
    'li': {
        width: 'auto',
        padding: '0',
        'button': {
            display: 'flex',
            padding: '14px 28px',
            borderRadius: '30px',
            border: '1px solid #616066',
            fontSize: '14px',
            fontWeight: '400',
            textTransform: 'capitalize',
            color: '#fff',
            '&:hover,&.active': {
                background: '#523FD7',
                borderColor: '#523FD7',
            }
        }
    }
}))
const MinTitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
        fontSize: '18px',
        lineHeight: '27px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: '24px',
    },
}));

export default function ContentOptions() {

    const [selectedCategory, setSelectedCategory] = useState('Fun'); // State to store selected category

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    const getCategoryText = () => {
        switch (selectedCategory) {
            case 'Fun':
                return '“Fun”';
            case 'Education':
                return '“Education”';
            case 'Sports':
                return '“Sports”';
            case 'News':
                return '“News”';
            case 'Investment':
                return '“Investment”';
            case 'Facts':
                return '“Facts”';
            default:
                return '';
        }
    };
    const getOptionsForCategory = () => {
        switch (selectedCategory) {
            case 'Fun':
                return [
                    { label: 'Board games revival' },
                    { label: 'Comedy trends' },
                    { label: 'Amusement parks' },
                    { label: 'Escape rooms' },
                    { label: 'Street performances' },
                    { label: 'Online challenges' },
                    { label: 'Festivals impact' },
                    { label: 'Crafting movement' },
                    { label: 'Social gaming' },
                    { label: 'Virtual reality' },
                ];
            case 'Education':
                return [
                    { label: 'Gamified learning' },
                    { label: 'Education systems' },
                    { label: 'Bilingual benefits' },
                    { label: 'Standardized testing' },
                    { label: 'Arts in schools' },
                    { label: 'Tech bootcamps' },
                    { label: 'Homeschooling dynamics' },
                    { label: 'Mentorship importance' },
                    { label: 'Educational equity' },
                    { label: 'Mobile learning' },
                ];
            case 'Sports':
                return [
                    { label: 'Sports medicine' },
                    { label: 'Team sociology' },
                    { label: 'Olympic economics' },
                    { label: 'Gender parity' },
                    { label: 'Fandom psychology' },
                    { label: 'Extreme sports' },
                    { label: 'Sports business' },
                    { label: 'Youth athletics' },
                    { label: 'Data analytics' },
                    { label: 'Doping ethics' },
                ];
            case 'News':
                return [
                    { label: 'Citizen journalism' },
                    { label: 'Whistleblower influence' },
                    { label: 'Fake news' },
                    { label: 'Print media survival' },
                    { label: 'Social media news' },
                    { label: 'Cybersecurity news' },
                    { label: 'Democratic media' },
                    { label: 'News deserts' },
                    { label: 'News economics' },
                    { label: 'Broadcast evolution' },
                ];
            case 'Investment':
                return [
                    { label: 'Robo-advising' },
                    { label: 'Geopolitical impacts' },
                    { label: 'Index funds' },
                    { label: 'Real estate trends' },
                    { label: 'Startup investing' },
                    { label: 'Social trading' },
                    { label: 'Tax strategies' },
                    { label: 'Emerging markets' },
                    { label: 'Financial literacy' },
                    { label: 'Pension futures' },
                ];
            case 'Facts':
                return [
                    { label: 'Animal oddities' },
                    { label: 'Everyday science' },
                    { label: 'Historical obscurities' },
                    { label: 'Science myths' },
                    { label: 'Human body facts' },
                    { label: 'Oceanic discoveries' },
                    { label: 'Space exploration' },
                    { label: 'Ancient tech' },
                    { label: 'World laws' },
                    { label: 'Bizarre news' },
                ];
            default:
                return [];
        }
    };

    return(
        <>
            <ButtonWrap>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('Fun')}
                        className={selectedCategory === 'Fun' ? 'active' : ''}
                    >
                        Fun
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('Education')}
                        className={selectedCategory === 'Education' ? 'active' : ''}
                    >
                        Education
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('Sports')}
                        className={selectedCategory === 'Sports' ? 'active' : ''}
                    >
                        Sports
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('News')}
                        className={selectedCategory === 'News' ? 'active' : ''}
                    >
                        News
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('Investment')}
                        className={selectedCategory === 'Investment' ? 'active' : ''}
                    >
                        Investment
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => handleCategoryChange('Facts')}
                        className={selectedCategory === 'Facts' ? 'active' : ''}
                    >
                        Facts
                    </Button>
                </ListItem>
            </ButtonWrap>
            <MinTitleSpace sx={{ flexGrow: 1 }}>
                <Grid item textAlign="left">
                    <Box>
                        <MinTitleTypography variant="h3">
                            Which type of {getCategoryText()} content do you want to create?
                        </MinTitleTypography>
                    </Box>
                </Grid>
            </MinTitleSpace>
            <div className="auto_select_wrap">
                <Autocomplete
                    options={getOptionsForCategory()}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Select"
                            variant="outlined"
                            sx={{height: '56px'}}
                        />
                    )}
                />
            </div>
        </>
    )
}