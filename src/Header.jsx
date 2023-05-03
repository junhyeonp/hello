import styled from "styled-components";
import Logo from "./logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GlobalNav = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      color: #555;
    }
  }
`;

export default function Header() {
  return (
    <div>
      <Container>
        <GlobalNav>
          <div>
            <img src={Logo} width="80px" alt="logo"></img>
          </div>
          <SmallNav>
            <div>업체소개</div>
            <div>포트폴리오</div>
            <div>사진</div>
            <div>게시판</div>
            <div>연락</div>
          </SmallNav>
        </GlobalNav>
      </Container>
    </div>
  );
}
