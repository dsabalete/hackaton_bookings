import React from 'react'

import Button from '../OdigeoButtons/Primary'
import classes from './Popup.scss'
import Modal from 'react-modal'

class Popup extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }

    render() {
        let arrClasses = []
        arrClasses.push(classes.Popup)
        arrClasses.push(classes.Triangle)
        arrClasses.push(this.state.modalIsOpen === true ? classes.Opened: classes.Closed)

        return (
            <div>
                <Button onClick={this.openModal}>Open Modal</Button>
                <Modal
                    className={arrClasses.join(' ')}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}>
                    <div className={classes.Header}>{this.props.header}</div>
                    <div className={classes.Content}>{this.props.children}</div>                    
                </Modal>
            </div>
        )
    }
}

export default Popup
