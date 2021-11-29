import React from 'react';
import { makeStyles } from '@mui/styles'
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles({
    page: {
        marginTop: '4rem',
        paddingTop: '2rem',
        paddingBottom: '3rem', 
    }
});

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
                <div className={classes.page}>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout
