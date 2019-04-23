import React, { Component } from 'react'
import './Projects.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Projects extends Component {
  state = {
    modalIsOpen: false
  }
  

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <div class='projects-container'>
          <div class='header'>
            <h1>Projects</h1>
            <div class='header-line'></div>
          </div>
          <div class='portfolio-container'>
            <div class='portfolio-piece'>
              <img src="" alt="" />
              <button onClick={this.openModal}>Open</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
