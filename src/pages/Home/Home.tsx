import SearchContainer from "../../components/SearchContainer/SearchContainer";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="banner">
        <div className="title">
          An official website of the &nbsp;<strong>Singapore Government</strong>
        </div>
      </div>
      <SearchContainer></SearchContainer>
    </>
  );
};

export default Home;
