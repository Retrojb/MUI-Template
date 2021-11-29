import React, { useState } from 'react'
import { AppBar, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Stack, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Navbar = () => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderDropdownMenu = (
        <Stack>
            <Paper>
                <Popper 
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    transition
                >
                {({ TransitionProps, placement }) =>
                    <Grow 
                        {...TransitionProps} 
                        style={{ 
                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleMenuClose}>
                                <MenuList>
                                    {/* Add Menu Items here */}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                }
                </Popper>
            </Paper>
        </Stack>
    );
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <MenuItem onClick={handleMenuOpen}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="Open menu"
                            sx={{ mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </MenuItem>
                    <Box sx={{ flexGrow: 1}}></Box>
                    <Box>
                        Place holder app name
                    </Box>
                </Toolbar>
            </AppBar>
            {renderDropdownMenu}
        </Box>
    )
}

export default Navbar
