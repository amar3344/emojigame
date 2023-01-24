import {useState} from 'react'

import './index.css'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'

const EmojiGame = props => {
  const {emojisList} = props
  const [topScore, setTopScore] = useState(0)
  const [emojiList, setEmojiList] = useState([])
  const [score, setScore] = useState(0)
  const [isGameRunning, setGameRunning] = useState(true)
  const len = emojisList.length

  const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  const onClickImage = id => {
    setScore(score + 1)
    const isHaveId = emojiList.includes(id)
    if (isHaveId) {
      setGameRunning(false)
    } else {
      emojiList.push(id)
    }
  }

  //   const gettingBackToGame = () =>(
  //       setGameRunning(true)
  //       setTopScore(topScore)
  //       setScore(0)

  //   )

  const getWinningCard = () => (
    <div className="win-loss-container">
      <div>
        <h1>You Win</h1>
        <h5>Best Score</h5>
        <h4>
          {score}/{len}
        </h4>
        <button
          type="button"
          className="play-again-button"
          onClick={gettingBackToGame}
        >
          play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="You Win"
        className="win-loss-image"
      />
    </div>
  )

  const getLoseCard = () => (
    <div className="win-loss-container">
      <div>
        <h1>You Lose</h1>
        <h5>Score</h5>
        <h4>
          {score}/{len}
        </h4>
        <button
          type="button"
          className="play-again-button"
          onClick={gettingBackToGame}
        >
          play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="You Lose"
        className="win-loss-image"
      />
    </div>
  )

  const getScoresContainer = () => {
    const isWinORLoss = score === len
    return (
      <>
        <Navbar />
        <div className="emoji-list-cont">
          {isWinORLoss ? getWinningCard() : getLoseCard()}
        </div>
      </>
    )
  }

  const getEmojisContainer = () => {
    const list = shuffledEmojisList()
    return (
      <>
        <Navbar score={score} topScore={topScore} isRunning={isGameRunning} />
        <div className="emoji-list-cont">
          <ul className="emoji-card">
            {list.map(item => (
              <EmojiCard
                key={item.id}
                details={item}
                onClickEmojiImage={onClickImage}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  return (
    <div className="react-app">
      <div className="emoji-app-cont">
        {isGameRunning ? getEmojisContainer() : getScoresContainer()}
      </div>
    </div>
  )
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
