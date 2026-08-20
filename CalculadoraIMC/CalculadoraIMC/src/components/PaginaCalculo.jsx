import { useState } from 'react';
import FormularioIMC from './FormularioCalculo';
import ResultadoIMC from './ResultadoIMC';
    
function PaginaCalculo () {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(null);


    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <FormularioIMC peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} imc={imc} setImc={setImc}/>
            <ResultadoIMC imc={imc} setImc={setImc} setAltura={setAltura} setPeso={setPeso}/>

        </div>
    )
}

export default PaginaCalculo;