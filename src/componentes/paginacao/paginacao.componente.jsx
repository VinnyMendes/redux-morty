import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  return (
    <div className="paginacao">
      <button disabled={true} className="botaos primary">
        Anterior
      </button>
      <button disabled={false} className="botaos primary">
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
