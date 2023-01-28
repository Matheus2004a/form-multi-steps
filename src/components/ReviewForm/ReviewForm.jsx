import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";

import "./style.css"

export function ReviewForm() {
    return (
        <div className="review-form">
            <fieldset className="form-control score">
                <label className="radio-container">
                    <input type="radio" name="review" value="unsatisfied" required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" name="review" value="neutral" required />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input type="radio" name="review" value="satisfied" required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" name="review" value="very-satisfied" required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </fieldset>

            <fieldset className="form-control">
                <label htmlFor="comment">Comentário</label>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Conte nos como foi sua experiência com o produto..." required></textarea>
            </fieldset>
        </div>
    )
}