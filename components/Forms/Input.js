import React from 'react'

import classes from './Input.scss'

const Input = props => {
    return (
        <fieldset className={classes['odf-fieldset']}>
            <input
                onChange={props.change} 
                className={classes['odf-input']} 
                id={props.id} 
                type={props.type || "text"} 
                name={props.name} />
            <label className={classes['odf-label']} htmlFor={props.id}>First Name</label>
            <div className={classes.after}></div>
        </fieldset>
    )
}

export default Input