function FormularioIMC ({ peso, setPeso, altura, setAltura, setImc }) {
    return (
        <div>
            <input type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
            <input type="number" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)} />

            <button onClick={() => {
                if (!peso || !altura) {
                    alert('Por favor, preencha todos os campos.');
                    return;
                }

                const imc = CalcularIMC(peso, altura);
                setImc(imc);
            }}>Calcular IMC</button>
        </div>
    )
}

function CalcularIMC (peso, altura,) {
    if (peso && altura) {
        const imc = peso / (altura * altura);
        return imc;
    }
}

export default FormularioIMC;