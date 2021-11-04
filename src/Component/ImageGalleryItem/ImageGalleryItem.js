import { Component } from "react";
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalerryItem extends Component {
    render() {

        const { webformatURL, onSelectImg, largeImageURL } = this.props;

        return (
            <li className={css.imageGalleryItem} onClick={(() => onSelectImg(largeImageURL))}>
                <img src={webformatURL} alt="" className={css['imageGalleryItem-image']} />
            </li>)
    }

}

ImageGalerryItem.propTypes = {
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    onSelectImg: PropTypes.func
}