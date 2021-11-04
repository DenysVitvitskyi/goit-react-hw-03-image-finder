import { Component } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        disableBodyScroll(modalRoot);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        enableBodyScroll(modalRoot);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleClickModal = e => {
        if (e.target === e.currentTarget) {
            this.props.onCloseModal();
        }
    }

    render() {
        return createPortal(
            <div className={css.overlay} onClick={this.handleClickModal}>
                <div className={css.modal}>
                    <img src={this.props.largeImg} alt="img" />
                </div>
            </div>, modalRoot)
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string,
    onCloseModal: PropTypes.func
}