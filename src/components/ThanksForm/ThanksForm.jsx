import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";

import "./style.css"

export function ThanksForm({ data }) {
    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>Sua opinião é muito importante para nós. Em breve você receberá um cupom de 10% de desconto na sua próxima compra.</p>
            <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação:</h3>

            <p className="review-data">Satisfação do produto:</p>
            <p className="review-data">Comentário:</p>
        </div>
    )
}