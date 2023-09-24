import React from "react";

import "./Box.css";

function BoxItem({ movieNm, rankOldAndNew, openDt, audiAcc }) {
  return (
    <div className="boxItemContent">
      <div className="item">
        <div className="title" style={{ fontSize: "16px" }}>
          <strong>{movieNm}</strong>
        </div>
        <div className="audiAcc" style={{ fontSize: "12px", color: "#666666" }}>
          누적관객수 {audiAcc}
        </div>
        <div className="date" style={{ fontSize: "12px", color: "#666666" }}>
          {openDt} 개봉&nbsp;&nbsp;
          {rankOldAndNew === "OLD" ? (
            ""
          ) : (
            <span className="badge rounded-pill text-bg-warning">NEW!</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoxItem;
