import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Advertisement,
  UpsideIssues,
  DownsideIssues,
  IssueDetail,
} from "./component/index";

function App() {
  const [upData, setUpData] = useState([]);
  const [downData, setDownData] = useState([]);

  const handleGetData = async () => {
    let data = await axios.get(
      "https://api.github.com/repos/angular/angular-cli/issues"
    );
    let sorted = data.data.sort((a, b) => b.comments - a.comments);
    let upData = sorted.slice(0, 4);
    let downData = sorted.slice(4, sorted.length);
    setUpData(upData);
    setDownData(downData);
  };

  const [isDetail, setIsDetail] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  return upData.length === 0 ? (
    <div>now loading</div>
  ) : (
    <Wrap>
      <div className="wrap">
        <h2 className="mainHead">Angular/Angular.cli</h2>
        <UpsideIssues
          upData={upData}
          isDetail={isDetail}
          setIsDetail={setIsDetail}
        />
        <Advertisement isDetail={isDetail} />
        <DownsideIssues
          downData={downData}
          isDetail={isDetail}
          setIsDetail={setIsDetail}
        />
        <IssueDetail isDetail={isDetail} setIsDetail={setIsDetail} />
      </div>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  .mainHead {
    text-align: center;
  }
`;
