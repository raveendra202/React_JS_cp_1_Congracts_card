const element = (
  <div className="container-bg">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Ravi A</h1>
      <p className="college">BVC Engineering College , Odalarevu</p>
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
