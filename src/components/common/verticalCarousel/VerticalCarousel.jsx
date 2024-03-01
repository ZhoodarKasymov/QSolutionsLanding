import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './VerticalCarousel.css';

const VerticalCarousel = ({folderPath, picturesPaths, interval}) => {

    return (
        <Carousel className='slide vertical' prevIcon={null} nextIcon={null} interval={interval} indicators={false}>
            {picturesPaths.map((path, index) => (
                <Carousel.Item key={index}>
                    {
                        path.map((path, p_index) => (
                            <img key={p_index} src={`/${folderPath}/${path}`} alt={`Slide ${p_index}`} className="d-block w-100 carousel_image" />
                        ))
                    }
                </Carousel.Item>                   
            ))}
            
        </Carousel>
    );
}

export default VerticalCarousel;