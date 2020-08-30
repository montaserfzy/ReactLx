import React from 'react';
import './spinner.styles.scss';
import Spinner from 'react-bootstrap/Spinner'

const PageSpinner = () =>{
    return (
        <Spinner animation="border" role="status" className='page-spinner'>
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};

export default PageSpinner;