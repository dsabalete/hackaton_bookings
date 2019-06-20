import React from 'react'

import classes from './Hamburguer.scss'

export default class Hamburguer extends React.Component {
    
    render() {
      return (
        <nav role="navigation">
            <div id={classes.menuToggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            
            <ul id={classes.menu}>
                {
                  this.props.list.map((item, index) => {
                    return <a href="#" key={index}><li>{item}</li></a>
                  })
                }
            </ul>
            </div>
        </nav>
      );
    }
  }