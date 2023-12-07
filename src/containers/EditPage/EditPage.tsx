import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';
import {ApiPage} from "../../types";
import PageForm from "../../components/PageForm/PageForm";

const EditPage: React.FC = () => {
  const {id} = useParams(); //const params = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<ApiPage | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPage = useCallback(async () => {
    try {
      const pageResponse = await axiosApi.get<ApiPage | null>('/pages/admin' + id + '.json');
      setPage(pageResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);

  const onSubmit = async (page: ApiPage) => {
    await axiosApi.put('/pages/admin' + id +  '.json', page);
    navigate('/pages/' + id);
  };

  let formSection = <Spinner/>;
  const existingPage = page ? page : undefined;

  if (!loading) {
    if (page) {
      formSection = <PageForm onSubmit={onSubmit} existingPage={existingPage} isEdit/>;
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <div className="row mt-2">
      <div className="col">
        {formSection}
      </div>
    </div>
  );
};

export default EditPage;
