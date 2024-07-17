import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Typography, ListItemSecondaryAction, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';

function Vendors() {
    const [vendors, setVendors] = useState([]);
    const [vendorData, setVendorData] = useState({ name: '', email: '', upi: '' });

    useEffect(() => {
        axios.get('http://localhost:8080/vendors/allvendors').then((response) => {
            setVendors(response.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendorData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/vendors/setVendors', vendorData).then((response) => {
            setVendors((prevVendors) => [...prevVendors, response.data]);
            setVendorData({ name: '', email: '', upi: '' });
        });
    };
    const handleEmail = (email) => {
        const list = [];
        list.push(email);
        axios.post('http://localhost:8080/vendors/sendEmails', list).then((response) => {
            console.log('Response: ',response.data[0].message);
            alert(response.data[0].message);
        });
    };
    // const handleDelete = (mail) => {
    //     console.log("Email id passed: ", mail);
    //     const del = vendors.filter((vendor) =>{
    //         console.log(` Name: ${vendor.name}, Email: ${vendor.email}` );
    //         // if (vendor.email == mail) return vendor.name;
    //         return (vendor.email === mail);
    //     })
    //     console.log("Need to delete: ", del[0]);
    // }

    const handleDelete = async (mail) => {
        try {
            const response = await axios.delete(`http://localhost:8080/vendors/${mail}`);
            console.log('Response:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };



    return (
        <div>
            <Typography variant="h4" gutterBottom>Vendors</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={vendorData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    value={vendorData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="UPI"
                    name="upi"
                    value={vendorData.upi}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Add Vendor</Button>
            </form>
            <List>
                {vendors.map((vendor) => (
                    <ListItem key={vendor.email}>
                        <ListItemText
                            primary={vendor.name}
                            secondary={` ${vendor.email}`}
                        />
                        <ListItemSecondaryAction>

                            <IconButton edge="end" aria-label="email" onClick={() => handleEmail(vendor.email)}>
                                <EmailIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(vendor.email)}>
                                <DeleteIcon />
                            </IconButton>


                        </ListItemSecondaryAction>
                    </ListItem>
                    // <ListItem key={vendor.email}>
                    //     <ListItemText primary={`${vendor.name} - ${vendor.email} - ${vendor.upi}`} />
                    // </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Vendors;
