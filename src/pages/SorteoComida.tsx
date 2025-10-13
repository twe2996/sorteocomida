import React, { useEffect } from 'react'
import { useParams,useNavigate} from 'react-router';

import * as seedrandom from 'seedrandom';
import { cyrb128, splitmix32 } from '../../utils/randomutils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
export function SorteoComida({children, ...props}:Props) {


    function getrandomindex(maxindex:number){
        return Math.floor(rand() * maxindex)
    }

    const {seed} = useParams<{seed:string}>();
    const navigate =useNavigate();
    const isNumericString = (s: string): boolean => {
        // Expresión regular: ^ (inicio de cadena) [0-9]+ (uno o más dígitos) $ (fin de cadena)
        return /^\d+$/.test(s); 
    };
    let seedNumber: number |undefined;
    if(seed){
        let conditional =!isNumericString(seed)
            useEffect(() => {
                if (conditional) {
                navigate('/error', { replace: true })
                }
            }, [conditional, navigate]);

        const rng = cyrb128(seed)

        //esta linea es para generar el numero aleatoria usado en la ruta
        

        var rand = splitmix32(rng[0])
        var randseed = Math.random().toString().slice(2)
        const nombres = ["Carlos","Fatima","Elena","Ma","Pa"]
        const colores = ["bg-red-500","bg-yellow-950","bg-yellow-400","bg-blue-400","bg-cyan-400"]
        //5 elementos
        //
        console.log(getrandomindex(nombres.length),getrandomindex(nombres.length),randseed)
        return (
          <>
                <h1>seed: {seed}</h1>
                {children}
                <div className="grid grid-cols-7 gap-4">
                    <h1>Lunes</h1>
                    <h1>Martes</h1>
                    <h1>Miercoles</h1>
                    <h1>Jueves</h1>
                    <h1>Viernes</h1>
                    <h1>Sabado</h1>
                    <h1>Domingo</h1>
                    {
                        Array.from({ length: 30 }, (_, index) => {
                            let localrand = getrandomindex(nombres.length);
                            return (
                                
                                //`
                            <div className={colores[localrand]} key={index} style={{ border: '1px dotted #fbff00ff', margin: '5px' }}>
                                {nombres[localrand]}
                            </div>
                            );

                        })
                    }
                </div>
          </>
        )
    }
    return (
        <>
        <h1>error?</h1>
        </>
    );

        
  
  
}

export default SorteoComida
