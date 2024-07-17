import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Typography, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';


function Vendors() {
    const [mails, setMails] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/mails/allmails').then((response) => {
            setMails((response.data));
            console.log(response.data)
        });
    }, []);


    const handleDelete = (mail) => {
        console.log("Email id passed: ", mail);
        // const del = vendors.filter((vendor) =>{
        //     console.log(` Name: ${vendor.name}, Email: ${vendor.email}` );
        //     // if (vendor.email == mail) return vendor.name;
        //     return (vendor.email === mail);
        // })
        // console.log("Need to delete: ", del[0]);
    }

    // const handleDelete = async (mail) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:8080/mails/removeVendors${mail}`);
    //         console.log('Response:', response.data);
    //     } catch (error) {
    //         console.error('Error deleting item:', error);
    //     }
    // };



    return (
        <div>
            <Typography variant="h4" gutterBottom>Mails</Typography>
            <List>
                {mails.map((mail) => (
                    <ListItem key={mail[0]}>
                        <ListItemText
                            primary={mail[0]}
                            secondary={mail[1]}
                            /*
                            Email message
                            */
                        />
                        <ListItemSecondaryAction>

                            {/* <IconButton edge="end" aria-label="email" onClick={() => handleEmail(vendor.email)}>
                                <EmailIcon />
                            </IconButton> */}
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(mail[0])}>
                                <DeleteIcon />
                            </IconButton>


                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Vendors;
