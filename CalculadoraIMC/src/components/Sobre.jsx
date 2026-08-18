import { useState } from "react";

function Sobre() {
    const [mostrar, setMostrar] = useState(false);
    return (
        <>
            <button
                className="botao-sobre"
                onClick={() => setMostrar(true)}
            >
                Sobre
            </button>
            {mostrar && (
                <div className="fundo-sobre">
                    <div className="caixa-sobre">
                        <button
                            className="botao-fechar"
                            onClick={() => setMostrar(false)}
                        >
                            ×
                        </button>
                        <h2>Sobre a Calculadora de IMC</h2>
                        <p>
                            Esta página foi criada para calcular o
                            Índice de Massa Corporal (IMC).
                        </p>
                        <p>
                            Para realizar o cálculo, informe seu peso
                            em quilogramas e sua altura em metros.
                        </p>
                        <p>
                            <strong>Fórmula:</strong>
                        </p>

                        <p className="formula">
                            IMC = peso ÷ (altura × altura)
                        </p>

                    </div>
                </div>
            )}
        </>
    );
}

export default Sobre;