import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiPages, Page} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Pages = () => {
  const {titleId} = useParams();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      let url = '/pages.json';

      if (titleId) {
        url += `?orderBy="title"&equalTo="${titleId}"`;
      }

      const pagesResponse = await axiosApi.get<ApiPages | null>(url);
      const pages = pagesResponse.data;

      if (pages === null) {
        setPages([]);
      } else {
        setPages(Object.keys(pages).map((id) => ({
          ...pages[id],
          id,
        })));
      }
    } finally {
      setLoading(false);
    }
  }, [titleId]);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);


  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col d-flex flex-column gap-2">
          {loading ? <Spinner/> : pages.map((page) => (
            <div key={page.id} className="card">
              <div className="card-body">
                <p>{page.title}</p>
                <p>{page.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pages;