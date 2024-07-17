import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Typography, Grid, Paper} from '@mui/material';
import PopUpForm from './PopUpForm';
import AddIcon from '@mui/icons-material/Add';

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [showData, setShowdata] = useState(false);
    const [employeeData, setEmployeeData] = useState({ name: '', designation: '', ctc: '', email: '' });

    useEffect(() => {
        axios.get('http://localhost:8080/employees/allemployees').then((response) => {
            setEmployees(response.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Employee Data");
        console.log("name: ", employeeData.name);
        console.log("ctc: ", employeeData.ctc);
        console.log("Employee Data");
        console.log("Employee Data");
        axios.post('http://localhost:8080/employees/setEmployees', employeeData).then((response) => {
            setEmployees((prevEmployees) => [...prevEmployees, response.data]);
            setEmployeeData({ name: '', designation: '', ctc: '', email: '' });
        });
    };

    const handleData = (formData) =>{
        setEmployeeData(formData);
        setShowdata(true);
        console.log("Employee data: ", employeeData);
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Employees</Typography>
            {showData  && <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={employeeData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Designation"
                    name="designation"
                    value={employeeData.designation}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="CTC"
                    name="ctc"
                    value={employeeData.ctc}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Add Employee</Button>
            </form>}
            <div>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    <AddIcon/>
                </Button>
                <PopUpForm open={open} handleClose={handleClose} onData={handleData}/>
            </div>
            <List>
                {employees.map((employee) => (
                    // <ListItem key={employee.email}>
                    //     <ListItemText primary={`${employee.name} - ${employee.designation} - ${employee.ctc} - ${employee.email}`} />
                    // </ListItem>


                    <Grid item xs={12} key={employee.email}>
                        <Paper style={{ padding: '16px', textAlign: 'center' }}>
                            <ListItemText primary={`${employee.name} - ${employee.designation} - ${employee.ctc} - ${employee.email}`} />
                        {/* <Typography variant="h6">{item.text}</Typography> */}
                        </Paper>
                 </Grid>
                ))}
            </List>
        </div>
    );
}

export default Employees;
