import React from 'react'

const classes = {
    color: 'white',
    backgroundColor: 'blue',
    boxShadow: '1px 2px 2px #ccc',
    display: 'inline-block',
    margin: '1rem',
    padding: '1rem',
    fontFamily: 'Verdana',
    fontSize: '1.2em',
    cursor: 'pointer'
}

const OdigeoButton = props => (
    <div style={classes} onClick={props.clicked}>
        {props.children}
    </div>
)

export default OdigeoButton