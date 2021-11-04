import { Component } from "react";
import Loader from "react-loader-spinner";
import css from './Spiner.module.css';

export class Spiner extends Component {
    render() {
        return (
            <div className={css.wrap}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        )
    }
}