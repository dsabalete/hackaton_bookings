import React from 'react'

import classes from './OdigeoButton.module.css'

const OdigeoButton = props => (
    <div className={classes.OdigeoButton}>
        {props.children}
    </div>
)

export default OdigeoButton