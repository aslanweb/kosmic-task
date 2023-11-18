import React, { useState } from 'react';
import { Grid, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProgressContainer = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const CustomSlider = styled(Slider)(({ theme }) => ({
    position: 'relative',
    '& .MuiSlider-thumb': {
        zIndex: 2,
        '&::before': {
            transition: 'all 0.4s ease-in-out',
            content: 'attr(data-value)',
            position: 'absolute',
            top: '-33px',
            left: '-9px',
            fontSize: '14px',
            color: '#fff',
            padding: '0 5px',
            height: '22px',
            pointerEvents: 'none',
            background: '#523FD7',
            whiteSpace: 'nowrap',
            width: 'auto',
            borderRadius: '12px',
            opacity: '0',
        },
    },
}));

export default function ProgressBar() {
    const initialValue = 100;
    const finalValue = 1000;

    const [value, setValue] = useState(100); // Initial value within the range

    const handleChange = (event, newValue) => {
        const range = finalValue - initialValue;
        const step = range / 100; // Divide the range into 100 steps
        const currentValue = initialValue + step * newValue;
        setValue(currentValue);
        const slider = document.querySelector('.MuiSlider-thumb');
        if (slider) {
            slider.setAttribute('data-value', Math.round(currentValue).toString());
        }
    };

    return (
        <div className="progressbar-wrap">
            <ProgressContainer alignItems="center" display="flex">
                <Grid item>
                    <Typography variant="body2">{initialValue}</Typography>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                    <CustomSlider
                        value={(value - initialValue) / ((finalValue - initialValue) / 100)}
                        min={0}
                        max={100}
                        onChange={handleChange}
                        aria-labelledby="progress-slider"
                        data-value={Math.round(value).toString()} // Pass value as data attribute
                    />
                </Grid>
                <Grid item textAlign="right">
                    <Typography variant="body2">{finalValue}</Typography>
                </Grid>
            </ProgressContainer>
        </div>
    );
}
