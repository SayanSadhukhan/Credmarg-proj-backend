import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const PopUpForm = ({ open, handleClose, onData }) => {
    const [formData, setFormData] = useState({
        name: '',
        designation:'',
        ctc:'',
        email: '',
        // Add more fields as necessary
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        onData(formData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Form Title</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="designation"
                        label="designation"
                        type="text"
                        fullWidth
                        value={formData.designation}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="ctc"
                        label="CTC"
                        type="text"
                        fullWidth
                        value={formData.ctc}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* Add more fields as necessary */}
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PopUpForm;
