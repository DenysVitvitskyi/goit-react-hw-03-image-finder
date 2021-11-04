import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
    render() {

        const { onClick } = this.props;

        return (
            <div className={css.wrap}>
                <button type='button' className={css.button} onClick={onClick}>Load more</button>
            </div>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}