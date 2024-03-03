import './historyHeader.css'; 

function HistoryHeader() {
  return (
    <div className="Header">
      <ul
      >
        <li className="image">
          <img
            src="https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg"
            alt="react"
          />
        </li>
        <li className="text">
          <h2 >
            Welcome to the History Page
          </h2>
          <p
          >
            This is the home page of my application.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default HistoryHeader;
