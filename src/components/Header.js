
import React, {Component} from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Button} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.85),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.85),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#2b3d69',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 350,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    button: {
        height: '40px',
        borderRadius: theme.shape.borderRadius - 1,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    }
}));

export default function Header() {
  
  return (
    <div>
        <AppBar position="static" style={{backgroundColor: '#2b3d69'}}>            
            <Container >
                <Toolbar style={{padding: 0}}>
                    <Typography className={useStyles().title} variant="h4" noWrap>
                        DAaaS
                    </Typography>
                    <div className={useStyles().grow} />
                    <div className={useStyles().search}>
                        <div className={useStyles().searchIcon}>
                            <SearchIcon color="black"/>
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: useStyles().inputRoot,
                            input: useStyles().inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                        <Button variant="contained" color="primary" className={useStyles().button}>
                            Primary
                        </Button>
                    </div>
                    <IconButton color="inherit">
                        <HelpOutlineIcon />
                    </IconButton>
                    <div className={useStyles().grow}/>
                    <div>
                        <div>
                            <IconButton
                            aria-label="account of current user"
                            aria-controls={'primary-search-account-menu'}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                            >
                                <p style={{fontSize: '18px', margin: 0}}>First Name</p>
                                <AccountCircle />
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                {/* <Badge badgeContent={17} color="secondary"> */}
                                    <NotificationsNoneIcon />
                                {/* </Badge> */}
                            </IconButton>
                            <IconButton aria-label="show 4 new mails" color="inherit" edge="end">
                                {/* <Badge badgeContent={4} color="secondary"> */}
                                    <SettingsIcon />
                                {/* </Badge> */}
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  );
}
