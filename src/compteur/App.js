import React, {useState} from 'react'
import { Compteur, CompteurBottonInit, CompteurButtonAdd, CompteurButtonSupp } from './styled'



export default function App() {
    const [compteur, setCompteur]= useState(0)
    const addCompte = ()=>{
        setCompteur(compteur + 1)
    }
    const delCompte = ()=>{
        if(compteur <= 0) {
            setCompteur(0)

        }else {
            setCompteur(compteur - 1)
        }
        
    }
    const initCompte = ()=>{
        setCompteur(0)
    }

    return(
        <>
        <Compteur>
        <CompteurButtonAdd onClick={addCompte}>
        <i className="fa-solid fa-circle-plus"></i>
        </CompteurButtonAdd>
        <CompteurButtonSupp onClick={delCompte}>
        <i class="fa-solid fa-minus"></i>
        </CompteurButtonSupp>
        <CompteurBottonInit onClick={initCompte}>
        <i class="fa-solid fa-0"></i>
        </CompteurBottonInit>
        
        </Compteur>
        <p>
            <label>Compteur n °</label>
            <input type="number" value={compteur}/>
        </p>
        
        </>



    )
}