import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";

function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles />

      {/* 메뉴 */}
      <Header />

      {/* 메인이미지 */}
      <MainImage />
    </>
  );
}

export default App;
