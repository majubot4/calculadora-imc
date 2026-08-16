import FormularioIMC from './FormularioIMC';
import ResultadoIMC from './ResultadoIMC';

function PaginaCalculo () {
    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <FormularioIMC />
            <ResultadoIMC />
        </div>
    )
}

export default PaginaCalculo;