import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import  "./inicio.css";
import { GlobalState } from '../type';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemStarted, fetchPersonagemThunk } from '../store/actions/personagens.action';
import { useEffect, useState } from 'react';
/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 * @author Vinicius Mendes 
 * 
 */
const PaginaInicio = () => {

  const { personagens } = useSelector((state: GlobalState) => state.person);
  const [page, setPage] = useState(2)

  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(personagens.length === 0) {
      dispatch(fetchPersonagemStarted());
      fetchPersonagemThunk()(dispatch);
      
    }
  },[dispatch, personagens.length, personagens])

  /**
  @function prox
  @void
  @deprecated
  */
  const prox = async ()=>{
    setPage(page+1)
    fetchPersonagemThunk(page)(dispatch);
  }


  /**
  @function prev
  @void
  @deprecated
  */
  const prev = ()=>{
    setPage(page-1)
    fetchPersonagemThunk(page)(dispatch);
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>        
      </div>
      <Filtros />
      <div className="paginacao">
      <button disabled={page === 1 ? true : false} onClick={prev} className="botaos primary">
        Anterior
      </button>
      <button disabled={page === 42 ? true : false} onClick={prox} className="botaos primary">
        Próximo
      </button>
      </div>
      <GradePersonagens personagens={personagens}/>
    </div>
  );
};

export default PaginaInicio;
