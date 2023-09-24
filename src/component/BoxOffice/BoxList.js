import React, { useState, useEffect } from "react";
import BoxItem from "./BoxItem";
import BoxImg from "./BoxImg";
import styled from "styled-components";
import "./Box.css";
import RedButton from "../Button/RedButton";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 3열로 그리드 설정
  gap: 16px; // 그리드 간격 조절
`;

const TopGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 3열로 그리드 설정
  gap: 16px; // 그리드 간격 조절
`;

const BoxList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const json = await (
        await fetch(
          `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=b03a97f2058b7d156b291ed23abcd79b&targetDt=20230917`
        )
      ).json();

      setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
      setLoading(false);
    };
    getMovies();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }
  const topMovie = movies.filter(
    (movie) => movie.rank === "1" || movie.rank === "2"
  );

  const otherMovies = movies.filter(
    (movie) => movie.rank !== "1" && movie.rank !== "2"
  );

  return (
    <div className="boxListBlock">
      {/* 그리드 컨테이너 적용 */}
      {/* movie.rank 값이 1인 영화를 1열로 배치 */}
      <TopGridContainer>
        {topMovie.map((topmovie) => (
          <div className="boxTopItem" key={topmovie.movieNm}>
            <BoxImg
              rank={topmovie.rank}
              movieNm={topmovie.movieNm}
              openDt={topmovie.openDt}
            />

            <BoxItem
              openDt={topmovie.openDt}
              movieNm={topmovie.movieNm}
              audiAcc={topmovie.audiAcc}
              rankOldAndNew={topmovie.rankOldAndNew}
            />
            <RedButton />
          </div>
        ))}
      </TopGridContainer>
      <GridContainer>
        {/* 나머지 영화를 3열로 배치 */}
        {otherMovies.map((movie) => (
          <div className="boxListItem" key={movie.movieNm}>
            <BoxImg
              rank={movie.rank}
              movieNm={movie.movieNm}
              openDt={movie.openDt}
            />

            <BoxItem
              openDt={movie.openDt}
              movieNm={movie.movieNm}
              audiAcc={movie.audiAcc}
              rankOldAndNew={movie.rankOldAndNew}
            />
            <RedButton />
          </div>
        ))}
      </GridContainer>
    </div>
  );
};

export default BoxList;
