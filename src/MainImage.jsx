import styled from "styled-components";

const ContainerImage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const MainImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const MainTitle = styled.div`
  position: absolute;
  width: 1000px;
  font-weight: 900;
  font-size: 90px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 100%;
  color: white;
  z-index: 99;
`;
const SubTitle = styled.div`
  padding-left: 10px;
  font-size: 48px;
  margin-top: 20px;
  color: rgba(256, 256, 256, 0.6);
`;

export default function MainImage() {
  return (
    <ContainerImage>
      <MainImages
        src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="메인이미지"
      />
      <MainTitle>
        <div>Apple</div>
        <SubTitle>한국, 애플페이 전격 출시</SubTitle>
        <SubTitle>한국, 애플페이 전격 출시</SubTitle>
      </MainTitle>
    </ContainerImage>
  );
}
