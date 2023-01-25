import './index.css'

const EmojiCard = props => {
  const {details, onClickEmojiImage} = props

  const {id} = details

  const onClickEmojiId = () => {
    onClickEmojiImage(id)
  }

  return (
    <li className="image-card">
      <button type="button" onClick={onClickEmojiId}>
        <img
          src={details.emojiUrl}
          alt={details.emojiName}
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard
