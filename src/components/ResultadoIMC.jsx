function ResultadoIMC ({ setPeso, setAltura, imc, setImc }) {
    function classificarIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Sobrepeso';
        } else if (imc < 35) {
            return 'Obesidade';
        } else {
            return 'Obesidade severa';
        }
    }

    function recalcular() {
        setImc(null);
        setAltura('');
        setPeso('');
    }

    return (
        <div>
            {imc !== null && (
                <>
                    <h2>Seu IMC: {imc.toFixed(2)}</h2>
                    <p>{classificarIMC(imc)}</p>

                    <button onClick={recalcular}>Recalcular</button>
                </>
            )}
        </div>
    );
}

export default ResultadoIMC;