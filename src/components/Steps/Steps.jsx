import "./Steps.css"

import { AiOutlineUser, AiOutlineStar, AiOutlineSend } from "react-icons/ai";

function Steps({ currentStep }) {
    return (
        <div className="steps">
            <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <AiOutlineSend />
                <p>Envio</p>
            </div>
        </div>
    )
}

export default Steps