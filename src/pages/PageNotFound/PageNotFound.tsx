import "./PageNotFound.scss";


const PageNotFound: React.FC = () => {
    return (
      <div className="no-page-container" data-testid="not-found-message-container">
        <h3>Page Not Found</h3>
        <h6>The page you're looking for is not available.</h6>
      </div>
    );
  };
  
  export default PageNotFound;
  