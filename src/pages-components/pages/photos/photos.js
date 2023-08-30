import React from "react";
import './photos.css'
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';
import four from './img/four.jpg';
import five from './img/five.jpg';
import six from './img/six.jpg';
import seven from './img/seven.jpg';
import eight from './img/eignt.jpg';
import nine from './img/nine.jpg';


function Photos() {
    return (<div className="conteiner">
        <h1>PHOTOS COLLAGE</h1>
        <div className="collage">
            <img src={one} alt="one" className="item" />
            <img src={two} alt="two" className="item" />
            <img src={three} alt="three" className="item" />
            <img src={four} alt="four" className="item" />
            <img src={five} alt="five" className="item" />
            <img src={six} alt="six" className="item" />
            <img src={seven} alt="seven" className="item" />
            <img src={eight} alt="eight" className="item" />
            <img src={nine} alt="nine" className="item"/>
        </div>
        </div>

    )
}

export default Photos