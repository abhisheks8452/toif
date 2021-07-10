import React from 'react'
import { Carousel } from "react-bootstrap"
import CarouselCaption from './CarouselCaption'
const Carousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div
                        className="d-block w-100 h-500 image1"

                        alt=""
                    />
                     <CarouselCaption />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div
                        className="d-block w-100 h-500 image2"

                        alt=""
                    />
                     <CarouselCaption />
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="d-block w-100 h-500 image3"

                        alt=""
                    />
                   
                   <CarouselCaption />
                   
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Carousels