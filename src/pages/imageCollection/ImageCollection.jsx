import React from "react";
import { useEffect, useState, useRef } from "react";
import { MainContainer } from "../../global/styles/globalStyle";
import api from "../../utils/api";
import "./ImageCollection.scss";

function ImageCollection() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const loaderDiv = useRef(null);
    useEffect(() => {
    api
      .get(`search/photos?query=office&page=${page}`)
      .then((res) => {
        setList([...list, ...res.data.results]);
      })
      .then((err) => err);
  }, [page]);

  useEffect(() => {
    if(list.length > 0){
        let obs = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if(entry.isIntersecting){
                setPage((prev) => prev + 1)
            }
        });
        obs.observe(loaderDiv.current);
    }
  }, [list.length])

  return (
    <MainContainer className="ImageCollectionContainer">
      {list.map(({ links }, index) => {
        return <img key={index} src={links?.download} alt="" />;
      })}
      <div ref={loaderDiv}></div>
    </MainContainer>
  );
}

export default ImageCollection;
