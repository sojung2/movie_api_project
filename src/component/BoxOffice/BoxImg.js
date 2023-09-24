import React, { useState, useEffect } from "react";
import "./Box.css";

const BoxImg = ({ movieNm, openDt, rank }) => {
  const [posters, setPoster] = useState([]);

  const getPoster = async () => {
    const json = await (
      await fetch(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey={}`
      )
    ).json();
    setPoster(json.Data[0].Result[0].posters.split("|")[0]);
  };

  useEffect(() => {
    getPoster();
  }, [posters]);

  return (
    <>
      <div
        className="boxImgRank"
        style={
          rank === "1" || rank === "2"
            ? { backgroundColor: "rgb(222, 62, 62)" }
            : { backgroundColor: "rgb(51, 51, 51)" }
        }
      >
        <strong>No.{rank}</strong>
      </div>
      <div className="boxImage">
        <img
          src={posters}
          alt="포스트이미지"
          style={
            rank === "1" || rank === "2"
              ? { width: "230px", height: "280px", paddingBottom: "10px" }
              : { width: "197px", height: "260px" }
          }
        ></img>
      </div>
    </>
  );
};

export default BoxImg;
