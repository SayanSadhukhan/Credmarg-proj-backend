import React from 'react';
import { CircularProgress, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const CircularProgressWithLabel = ({ value, color, label }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                value={value}
                style={{ color }}
                size={isSmallScreen ? 80 : 120}
                thickness={isSmallScreen ? 4 : 5}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary" style={{ fontSize: isSmallScreen ? 12 : 16 }}>
                    {`${Math.round(value)}%`}
                </Typography>
                {label && (
                    <Typography variant="caption" component="div" color="textSecondary" style={{ fontSize: isSmallScreen ? 10 : 14 }}>
                        {label}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default CircularProgressWithLabel;
