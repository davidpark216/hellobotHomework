import React from "react";
import styled from "styled-components";

function DownsideIssue({ downData, isDetail, setIsDetail }) {
  const handlegetDetail = () => {
    setIsDetail(true);
  };
  return !isDetail ? (
    <div id="downsideWrap">
      {downData.map((data) => (
        <InputArea key={data.id} onClick={() => handlegetDetail()}>
          <div className="issuehead">
            <span>{`## ${data.number}`}</span>
            <span>{data.title}</span>
            <span className="comments">
              <span>코멘트</span>
              <span>{data.comments}</span>
            </span>
          </div>
          <div className="issueTail">
            <span>작성자 : </span>
            <span>{data.user.login}</span>
            <span>작성일 :</span>
            <span>{data.created_at}</span>
          </div>
        </InputArea>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default DownsideIssue;

const InputArea = styled.div`
  border-bottom: 1px solid;
  width: 80vw;
  min-height: 10vh;
  margin: 0 auto;
  margin-bottom: 10px;

  .comments {
    float: right;
  }
`;
