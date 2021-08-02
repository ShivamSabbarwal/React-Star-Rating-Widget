import { useState } from "react";
import "./styles.css";

const StarRating = ({ value, totalStars = 5 }) => {
  const [rating, setRating] = useState(value || 0);
  const [selection, setSelection] = useState(0);

  const Star = ({ marked, starId }) => {
    return marked ? (
      <span star-id={starId} className={`star ${selection && "greyStar"}`}>
        {"\u2605"}
      </span>
    ) : (
      <span star-id={starId} className="star">
        {"\u2606"}
      </span>
    );
  };

  const hoverOver = e => setSelection(e?.target?.getAttribute("star-id") || 0);

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={({ target }) => setRating(target?.getAttribute("star-id"))}
      onMouseOver={hoverOver}
    >
      {[...Array(totalStars)].map((_, i) => (
        <Star key={`star_${i + 1}`} starId={i + 1}  marked={selection ? selection >= i + 1 : rating >= i + 1} />
      ))}
    </div>
  );
};

export default StarRating;
