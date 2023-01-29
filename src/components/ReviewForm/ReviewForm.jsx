import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";

import "./style.css"

export function ReviewForm({ data, updateFieldHandler }) {
    return (
        <div className="review-form">
            <fieldset className="form-control score">
                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        value="unsatisfied"
                        onChange={e => updateFieldHandler("review", e.target.value)}
                        checked={data.review === "unsatisfied"}
                        required
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        value="neutral"
                        onChange={e => updateFieldHandler("review", e.target.value)}
                        checked={data.review === "neutral"}
                        required
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        value="satisfied"
                        onChange={e => updateFieldHandler("review", e.target.value)}
                        checked={data.review === "satisfied"}
                        required
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        value="very-satisfied"
                        onChange={e => updateFieldHandler("review", e.target.value)}
                        checked={data.review === "very-satisfied"}
                        required
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </fieldset>

            <fieldset className="form-control">
                <label htmlFor="comment">Comentário</label>
                <textarea
                    name="comment"
                    id="comment"
                    value={data.comment}
                    onChange={e => updateFieldHandler("comment", e.target.value)}
                    placeholder="Conte nos como foi sua experiência com o produto..."
                    required
                />
            </fieldset>
        </div>
    )
}