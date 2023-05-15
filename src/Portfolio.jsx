import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;

const InnerContainer = styled.div`
  width: 1000px;
`;

const BoxTitle = styled.div`
  font-size: 32px;
  font-weight: 600px;
  padding: 12px 0;
`;

const BoxSubTitle = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 0;
`;

const ImageContents = styled.div`
  margin: 16px 0;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  background: rgba(0, 0, 0, 0.2);
  background-image: url("https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const ContentsText = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentsButton = styled.div`
  width: 200px;
  height: 45px;
  background: red;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default function Portfolio() {
  return (
    <Container>
      {/* 1000px 중앙정렬 */}
      <InnerContainer>
        <div>
          <BoxTitle>온·오프라인 언제 어디서든</BoxTitle>
          <BoxSubTitle>간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.</BoxSubTitle>
        </div>

        {Array(3)
          .fill("")
          .map((_, i) => (
            <ImageContents>
              <ContentsText>
                <div>카카오 비즈 채널</div>
                <div>선발된 스마트한 핵심 투자 정보를 받으세요!</div>
                <div>
                  <div>주기적으로 업데이트 되는 공실률 정보</div>
                  <div>최근 시세 정보에 기반한 투자 인사이트</div>
                  <div>시시각각 변동되는 정부 정책과 규제 소식</div>
                </div>
              </ContentsText>
              <ButtonContainer>
                <ContentsButton>채널 바로가기</ContentsButton>
              </ButtonContainer>
            </ImageContents>
          ))}
      </InnerContainer>
    </Container>
  );
}
