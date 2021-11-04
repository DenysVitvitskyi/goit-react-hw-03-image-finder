import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        return this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        if (this.state.value === '') {
            return;
        }
        e.preventDefault();
        this.props.onSubmitForm(this.state.value);
        this.setState({ value: '' })
    }


    render() {

        const { value } = this.state;

        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css['searchForm-button']}>
                        <span className={css['searchForm-button-label']}>Search</span>
                    </button>

                    <input
                        value={value}
                        onInput={this.handleChange}
                        className={css['searchForm-input']}
                        type="text"
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired
}