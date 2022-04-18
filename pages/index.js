import { useState } from 'react';

import Image from 'next/image';
import Head from 'next/head';
//import Link from 'next/link';
//<Link rel="icon" href="/images/favicon.ico" />

import MainCarousel from '../components/mainCarousel/mainCarousel';
//<MainCarousel />

export default function Home() {
    return (
        <div id="home">
            <Head>
                <title>Twitter Oguima</title>
            </Head> 
            <MainCarousel />
            <div>Home</div>
            <Image
                src="/images/avatar.png" 
                height={144} 
                width={144} 
                alt="Rafael"
            />
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