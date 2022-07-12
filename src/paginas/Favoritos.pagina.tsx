import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Personagem, GlobalState } from '../type'
import { fetchPersonagemThunk } from "../store/actions/personagens.action";
/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const [favPersonagens, setFavPersonagens] = useState<Personagem[]>();
  const personagens = useSelector((state: GlobalState) => state.person.personagens);
  const dispatch = useDispatch()


  useEffect(() => {
    let personagensFiltrados = personagens.filter((personagem: Personagem) => personagem.favorito ?? personagem);
    setFavPersonagens(personagensFiltrados);
  },[personagens]);

  

  return (
    <div className="container">
      <div className="actions mb-5">
        <h3 >Personagens Favoritos</h3>
        <button onClick={()=> fetchPersonagemThunk()(dispatch)} className="primary" style={{backgroundColor:"#96f541", color:'black'}}>Desfavoritar</button>
      </div>
      <GradePersonagens personagens={favPersonagens}/>
    </div>
  );
};

export default PaginaFavoritos;
