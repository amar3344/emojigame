import './index.css'

const Navbar = props => {
  const {score, topScore, isRunning} = props

  const getNavImage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h3>Emoji Game</h3>
    </div>
  )

  const getNavScores = () => (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h3>Emoji Game</h3>
      </div>
      <div className="score-cont">
        <p>Score : {score}</p>
        <p>Top Score : {topScore}</p>
      </div>
    </>
  )

  return (
    <div className="nav-container">
      {isRunning ? getNavScores() : getNavImage()}
    </div>
  )
}

export default Navbar
