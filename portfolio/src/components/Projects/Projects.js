import React, { Component } from "react";
import "./Projects.css";
import Modal from "react-modal";
import Slide from "./Slide";
import RightArrow from "./Right-Arrow";
import LeftArrow from "./Left-Arrow";
import reactLogo from "../../images/react-logonew.png";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  };

  goToPrevSlide = () => { };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="projects-container">
          <div className="header">
            <h1>Projects</h1>
            <div className="header-line" />
          </div>
          <div className="portfolio-container">
            <div className="portfolio-piece">
              <img src="" alt="" />
              <button onClick={this.openModal}>Open</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div className="slider">
                  <div
                    className="slider-wrapper"
                    style={{
                      transform: `translateX(${this.state.translateValue}px)`,
                      transition: "transform ease-out 0.45s"
                    }}
                  >
                    {
                      this.state.images.map((image, i) => {
                        return (
                          <Slide image={image} key={i} />
                        )
                      })
                    }
                  </div>

                  <RightArrow goToNextSlide={this.goToNextSlide} />
                  <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
