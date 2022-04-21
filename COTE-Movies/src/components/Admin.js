import React from 'react'
import GetReviews from './GetReviews';
import { makeStyles } from '@material-ui/core/Styles';
import Navbar from './Navbar';
import Footer from './Footer';
import GetUsers from './Users/GetUsers';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
justify-content: even;
border-bottom: 1px solid #969696;
`;

const useStyles = makeStyles(theme => ({
    Admin:{
        marginTop: "-19px !important"
    }
  }));

function Admin() {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        
        <div className={classes.Admin}>
        <h1>Welcome to the Admin Dashboard</h1>
        
        <Container>
            <GetUsers />
            <GetReviews /> 
        </Container>
       
        
        </div>

        <Footer />
        </>
    )
}

export default Admin;