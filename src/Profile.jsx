import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;

const InnerContainer = styled.div`
  width: 1000px;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const MainBox = styled.div`
  background: white;
  height: 400px;
  border-radius: 15px 0 15px 15px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  span {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
  span::after {
    content: "";
  }
`;

export default function Profile() {
  return (
    <Container>
      {/* 1000픽셀 중앙정렬 */}
      <InnerContainer>
        {/* 그리드 */}
        <GridContainer>
          {/* 박스 */}
          <MainBox>
            <div>임차인입니다</div>
            <h2>허위매물 제로!</h2>
            <div>
              전수조사 기반 압도적
              <br />
              질과 양의 매물을 제공합니다.
            </div>
            <span>사무실 구하기</span>
          </MainBox>
          <MainBox>2</MainBox>
          <MainBox>3</MainBox>
        </GridContainer>
      </InnerContainer>
    </Container>
  );
}
