import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = (props) => {
  return (
    <div className="paginacao">
      <button disabled={true} className="botaos primary">
        Anterior
      </button>
      <button disabled={false} onClick={props.prox} className="botaos primary">
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
