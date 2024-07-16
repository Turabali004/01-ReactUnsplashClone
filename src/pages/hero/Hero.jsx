import React from "react";
// import { useEffect } from "react";
import { MainContainer } from "../../global/styles/globalStyle";
import './Hero.scss'
import api from "../../utils/api";
// import { useEffect } from "react";

function Hero() {
    const [background, setBackground] = React.useState('');
    console.log(background);  

    React.useEffect(() => {
        api.get('/photos/random').then((res) => {
            setBackground(res.data.links.download)
        }).catch((err) => err);
    }, [])
  return (
    <MainContainer className="heroContainer" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 0,
    }}>
      <div>
        <h3>Unsplash</h3>
        <span>
          The internet's source for visuals.<br/> Powered by creators everywhere.
        </span>
      </div>
    </MainContainer>
  );
}

export default Hero;
