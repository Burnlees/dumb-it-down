import { useState } from "react";

type StarSystemProps = {
  rating: number | null;
  setRating: (rating: number) => void;
};

const StarSystem = ({ rating, setRating }: StarSystemProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return [...Array(5)].map((star, i) => {
    const ratingValue = i + 1;

    return (
      <label key={i}>
        <input
          type="radio"
          name="rating"
          style={{ display: "none" }}
          value={ratingValue}
          onClick={() => setRating(ratingValue)}
        />
        <span
        className="text-xl"
          style={{
            color:
              ratingValue <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9",
          }}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
        >
          &#9733;
        </span>
      </label>
    );
  });
};

export default StarSystem;
