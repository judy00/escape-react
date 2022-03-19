import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const [state, setState] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}api/react/article/${articleId}`)
      .then((response) => {
        setState(response.data.article);
      });
  }, [])

  function handleChange(event) {
    const { id, value, checked } = event.target;

    setState({
        ...state,
        [id]: id === 'isPublic' ? checked : value
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章資訊</h5>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">文章名稱</label>
                  <input type="text" className="form-control" id="title" value={state.title} onChange={ handleChange } />
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="author" className="form-label">文章作者</label>
                    <input type="text" className="form-control" id="author" value={state.author} onChange={ handleChange }/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">文章描述</label>
                    <input type="text" className="form-control" id="description" value={state.description} onChange={ handleChange }/>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">文章內容</label>
                  <textarea className="form-control" id="content" value={state.content} onChange={ handleChange }/>
                </div>
                <div className="mb-3">
                  <label htmlFor="isPublic" class="form-check-label me-2">公開文章</label>
                  <input class="form-check-input" type="checkbox" id="isPublic" checked={state.isPublic} onChange={ handleChange }/>
                </div>
              </form>
            </div >
          </div >
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail;
