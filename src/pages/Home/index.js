import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    /* axios.get(`${usuario}`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      }); */
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log(localStorage);
    setErro(true);
    /*  setErro(false);
     history.push('/repositories');
   })
   .catch(err => {
     setErro(true);*/
    //});
  }


  return (
    <S.Body>
      <S.Title>NISI SHOP
      </S.Title>
      <S.SubTitle>A China até você!</S.SubTitle>
      <S.HomeContainer > Se prepare para a maior promoção de todos os tempos!
        <S.Img src="https://http2.mlstatic.com/D_NQ_NP_864415-MLB43751668013_102020-O.jpg" />


      </S.HomeContainer>

      <S.Content>
        Cadastre seu e-mail e não perca nenhuma promoção

        <S.Input className="usuarioInput" placeholder="e-mail" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Cadastrar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>E-mail Cadastrado com sucesso.        </S.ErrorMsg> : ''}

      <S.SectionFooter>
        <S.Text>
          <a href="https://github.com/lucianonisi" rel="noreferrer" target="_blank">By Luciano Nisi</a>
        </S.Text>
        <S.Text>Hiring Coders #2 (GAMA ACADEMY)</S.Text>
      </S.SectionFooter>
    </S.Body >
  );
}

export default App;