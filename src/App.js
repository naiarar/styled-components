import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: black;
text-decoration: underline;
`;

const Subtitulo = styled.h2`
color: green;
font-size: 20px;
text-aligin: ;
`;

const Artigo = styled.section`
color: #9393e2;
`;

const Titulo2 = styled.h1`
color: red;
font-size: 30px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Rosa do Deserto</Titulo>
        <Subtitulo>Saiba tudo sobre essa planta linda, porém tóxica</Subtitulo>
        <Artigo>
          Originária da África, essa planta se parece com uma árvore em miniatura, com raízes aparentes, como se fosse uma árvore frondosa de verdade. Suas flores possuem um tom rosado que pode ou não ser acompanhado de branco. Em alguns casos, as flores saem predominantemente brancas com uma borda rosada.

          Essa é uma planta que dá flores o ano inteiro, mas é na primavera que elas ficam mais exuberantes e perfumadas, sendo a espécie perfeita para enfeitar o seu jardim em qualquer época do ano.

          Suas raízes são aparentes, sendo mais externas do que internas e partem de um “tronco” central chamado de bulbo. O bulbo é o responsável pelo armazenamento de água nessa planta, o que faz com que ela consiga aguentar muito tempo de estiagem.</Artigo>
        <Titulo2>Cuidados</Titulo2>
        <Artigo>
          <b>Preparação do vaso </b>
          <br></br>
          Assim como as suculentas, as rosas do deserto gostam de água, mas não de solo encharcado; por isso, é importante que elas sejam mantidas em um vaso com alto poder de drenagem. Cubra o fundo do vaso com pedras e tela plástica ou TNT para que as raízes não saiam pelos furos.

          O substrato ideal é aquele que mistura terra preparada com areia grossa e húmus de minhoca. A proporção deve ser de 2/3 de areia para 1/3 de terra preparada. Isso porque essa planta está habituada ao clima semiárido e altas temperaturas.
        </Artigo>

      </header>
    </div>
  );
}

export default App;
