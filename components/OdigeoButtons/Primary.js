import React from 'react'

import classes from './Primary.scss'

const Primary = props => {
    const extendedClasses = props.error ? classes.error : '';
    return (
        <button 
            className={`${classes.Primary} ${extendedClasses}`} 
            disabled={props.disabled}
            onClick={props.onClick}
            >
            {props.children}
        </button>
    )
}

export default Primary