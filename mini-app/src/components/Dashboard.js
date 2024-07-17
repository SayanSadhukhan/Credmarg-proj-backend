import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Dashboard = () => {
    const attendanceData = [
        { label: 'Employees', value: 75, color: '#4caf50' }, // Green
        { label: 'Vendors', value: 15, color: '#f44336' }, // Red
        { label: 'Emails', value: 10, color: '#ff9800' }, // Orange
    ];

    return (
        <>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Attendance Dashboard</Typography>
                </Toolbar>
            </AppBar> */}
            <Container>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {attendanceData.map((data, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper style={{ padding: '20px', textAlign: 'center' }}>
                                <Typography variant="h5">{data.label}</Typography>
                                <CircularProgressWithLabel value={data.value} color={data.color} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Dashboard;
