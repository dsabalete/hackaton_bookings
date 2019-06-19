import React from 'react'

const styles = {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    boxSizing: 'borderBox',
    userSelect: 'none',
    fontSize: '14px',
    fontWeight: '600',
    padding: '12px 16px',
    minWidth: 0,
    borderWidth: '1px',
    borderRadius: '4px',
    lineHeight: 1,
    color: 'white',
    borderStyle: 'solid',
    borderColor: '#091180',
    boxShadow: 'none',
    background: '#1E44D5',
    fontFamily: '"Open Sans", sans-serif',
    alignItems: 'flex-start',
    borderImage: 'initial',
    textRendering: 'auto',
    margin: '0em',
    font: '400 13.333px Arial'
}

const OdigeoDefaultButton = props => (
    <button style={styles} onClick={props.clicked}>
        {props.children}
    </button>
)

export default OdigeoDefaultButton