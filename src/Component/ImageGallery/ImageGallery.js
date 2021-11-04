import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalerryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
    render() {

        const { images, onSelectedImg } = this.props;

        return (
            <ul className={css.imageGallery}>{
                images.map(img => {
                    return (
                        <ImageGalerryItem key={img.id} largeImageURL={img.largeImageURL} webformatURL={img.webformatURL} onSelectImg={onSelectedImg} />
                    )
                })
            }</ul>
        )
    }
}

ImageGallery.propTypes = {
    images: PropTypes.array,
    onSelectedImg: PropTypes.func.isRequired
}