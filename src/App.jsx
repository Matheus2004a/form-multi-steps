import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import { UserForm } from "./components/UserForm";
import { ReviewForm } from "./components/ReviewForm/ReviewForm";
import { ThanksForm } from "./components/ThanksForm/ThanksForm";
import Steps from "./components/Steps/Steps";

import { useForm } from "./hooks/useForm";

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate)

  function updateFieldHandler(key, value) {
    setData((prevValue) => {
      return { ...prevValue, [key]: value }
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ThanksForm data={data} />
  ]

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents)

  return (
    <div className="App">
      <header>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para nos avaliar</p>
      </header>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={e => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {!isFirstStep &&
              <button onClick={e => changeStep(currentStep - 1, e)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            }

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
