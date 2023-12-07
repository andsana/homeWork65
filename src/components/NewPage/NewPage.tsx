import React from 'react';
import {useNavigate} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import {ApiPage} from "../../types";
import PageForm from "../PageForm/PageForm";

const NewPage: React.FC = () => {
  const navigate = useNavigate();

  const createPage = async (page: ApiPage) => {
    await axiosApi.post('/pages.json', page);
    navigate('/');
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <PageForm onSubmit={createPage}/>
      </div>
    </div>
  );
};

export default NewPage;