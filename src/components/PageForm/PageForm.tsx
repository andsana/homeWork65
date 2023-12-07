import {ApiPage} from '../../types';
import React, {useState} from 'react';
import {PAGES} from '../../constants';

const initialState: ApiPage = {
  title: '',
  content: '',
};

interface Props {
  onSubmit: (page: ApiPage) => void;
  existingPage?: ApiPage;
  isEdit?: boolean;
}

const PageForm: React.FC<Props> = ({onSubmit, existingPage = initialState, isEdit = false}) => {
  const [page, setPage] = useState<ApiPage>(existingPage);

  const changePage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(page);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit Page' : 'Add new Page'}</h4>
      <div className="form-group">
        <label htmlFor="selectPage">Select page</label>
        <select
          name="title"
          id="selectPage"
          className="form-control"
          value={page.title}
          onChange={changePage}
        >
          <option value="">Select a page</option>
          {PAGES.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={page.title}
          onChange={changePage}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          className="form-control"
          value={page.content}
          onChange={changePage}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">{isEdit ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default PageForm;