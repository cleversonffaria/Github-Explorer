import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/34727083?v=4"
            alt="Cleverson Fernandes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição de teste</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/34727083?v=4"
            alt="Cleverson Fernandes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição de teste</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/34727083?v=4"
            alt="Cleverson Fernandes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição de teste</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
