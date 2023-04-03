/* 
    const root = window.document.getElementById('root');    // referenciando o elemento <div id="root"></div>, identificado como "root" no arquivo index.html
    const titulo = window.document.createElement('h1');     // criando um elemento h1;
    titulo.innerHTML = "Meu primeiro titulo em JS";        // adicionando texto no corpo da tag h1;
    root.appendChild(titulo);                               // adicionando o elemento título como filho do elemento root;
*/

const root = window.document.getElementById("root"); // referenciando o elemento <div id="root"></div>, identificado como "root" no arquivo index.html

/* 
    Criando funcao 'Titulo' que retorna um elemento h1, onde: 
    Titulo - nome da função, deve ser identificada em PascalCase para que reconheça a sintaxe de componentes React;
    (props) - indica que a função receberá um objeto de parâmetro/argumento dinâmico, que por convenção, é nomeado de "props" (propriedades);
    return () - indica o retorno da função, normalmente é um trecho JSX (sintaxe HTML dentro do código JS);
    <> </> - representam um React.Fragment, que é um elemento que serve para englobar outras tags, sem aplicar nenhuma regra adicional (o retorno deve conter somente 1 elemento);
    { xpto } - as chaves indicam que utilizaremos um JS dentro do fragmento JSX, onde conseguimos interpolar valores (funciona como o `${ xpto }` para interpolar no JS vanilla)
*/

function Titulo(props) {
  // O "return" é fundamental para os componentes React, uma vez que irão retornar o fragmento JSX com os elementos que deverão ser renderizados;
  return (
    <>
      <h1> {props.texto} </h1>
    </>
  );
}

/*
    Criando funcao 'Titulos' que retorna diversos componentes 'Titulo' (função criada acima):
    <> </> - representam um React.Fragment, que é um elemento que serve para englobar outras tags, sem aplicar nenhuma regra adicional (o retorno deve conter somente 1 elemento);
    <Titulo /> - serve para criar uma instância do componente Titulo() declarado acima, que retornará o código JSX e será interpretado;
    texto="" - é um atributo que ao ser adicionado ao componente, indica que ele utilizará props/parâmetros (neste caso, estou usando o atributo "texto", que será usado no componente Titulo através da sintaxe "props.texto");
*/

function Titulos() {
  // O "return" é fundamental para os componentes React, uma vez que irão retornar o fragmento JSX com os elementos que deverão ser renderizados;
  return (
    <>
      <Titulo texto="Eu sou o primeiro título" />
      {/* invocando o componente Titulo, passando como parâmetro o texto "Eu sou o primeiro título" */}
      <Titulo texto="Venho depois do primeiro!" />
      {/* invocando o componente Titulo, passando como parâmetro o texto "Venho depois do primeiro!" */}
      <Titulo texto="Eu sou o do meio" />
      {/* invocando o componente Titulo, passando como parâmetro o texto "Eu sou o do meio" */}
      <Titulo texto="Eu sou o penúltimo" />
      {/* invocando o componente Titulo, passando como parâmetro o texto "Eu sou o penúltimo" */}
      <Titulo texto="Eu sou o último título" />
      {/* invocando o componente Titulo, passando como parâmetro o texto "Eu sou o último título" */}
    </>
  );
}

/* 
    Utilizando a biblioteca ReactDOM para:
    - Criar uma raíz no elemento HTML identificado pelo id "root";
    - Renderizar algum componente dentro daquele elemento enraízado;
    Neste caso, renderizará o componente '<Titulos />' dentro da '<div id="root"></div>' do arquivo index.html) 
*/

ReactDOM.createRoot(root).render(<Titulos />);