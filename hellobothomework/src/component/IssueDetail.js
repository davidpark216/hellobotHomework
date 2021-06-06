import React from "react";
import styled from "styled-components";

function IssueDetail({ isDetail, setIsDetail }) {
  const handleCloseDetail = () => {
    setIsDetail(false);
  };
  return isDetail ? (
    <DetailWrap>
      <div>여기는 디테일 영역입니다.</div>
      <button onClick={() => handleCloseDetail()}>이전으로</button>
    </DetailWrap>
  ) : (
    <div></div>
  );
}

export default IssueDetail;

const DetailWrap = styled.div``;
