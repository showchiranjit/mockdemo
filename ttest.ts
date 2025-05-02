// src/components/AssignDropdown.js
import React, { useState } from 'react';
import { TextField, Chip, Popover, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const AssignDropdown = () => {
    const [chips, setChips] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [options, setOptions] = useState(['a0de0w', 'a0de0es', 'a0j0c4k', 'dwe8921']); // Initial options

    const handleChipDelete = (chipToDelete) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDropdownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSearchTerm('');
    };

    const handleAddChip = (option) => {
        if (!chips.includes(option)) {
            setChips([...chips, option]);
        }
        setSearchTerm('');
    };

    const handleAddNewOption = () => {
        if (searchTerm && !chips.includes(searchTerm)) {
            setChips([...chips, searchTerm]);
            setSearchTerm('');
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <TextField
                variant="outlined"
                placeholder="Search or add..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                    endAdornment: (
                        <Button onClick={handleAddNewOption}>
                            <SearchIcon />
                        </Button>
                    ),
                }}
                onClick={handleDropdownClick}
                fullWidth
            />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div style={{ padding: '16px' }}>
                    {chips.length > 0 ? (
                        <div>
                            {chips.map((chip) => (
                                <Chip
                                    key={chip}
                                    label={chip}
                                    onDelete={() => handleChipDelete(chip)}
                                    deleteIcon={<CloseIcon />}
                                    style={{ margin: '4px' }}
                                />
                            ))}
                        </div>
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            Please add agent ID
                        </Typography>
                    )}
                </div>
            </Popover>
        </div>
    );
};

export default AssignDropdown;
