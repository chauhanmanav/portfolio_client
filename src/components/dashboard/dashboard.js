import React, { Fragment } from 'react';
import AboutUser from '../aboutUser/aboutUser';

const Dashboard = () => {
    return (
        <Fragment>
            <div>
                <h1>{"About Section"}</h1>
                <AboutUser />
            </div>
            <div>
                <h1>{"some other section"}</h1>
            </div>
        </Fragment>
    );
};

export default Dashboard;