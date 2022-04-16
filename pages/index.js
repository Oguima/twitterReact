import { useState } from 'react';

function Home() {
    return (
        <div> 
            <div>Home</div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1); //atualzaContador, setContador convenção... 

    //let contador = 10;

    function adicionarContador() {
        setContador(contador + 1);
        //contador = contador + 1;
        //console.log('Adicionou: ' + contador);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home 