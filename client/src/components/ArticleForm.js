import React, { useState, useEffect } from "react"

const ArticleForm = props => {

  const [newArticle, setNewArticle] = useState({title:"", content:""})

  const handleChange = event => {
    setNewArticle({
      ...newArticle,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewArticle(newArticle)
  }

  return (
    <form className="new-article-form callout" onSubmit={handleSubmit}>
      <label>
        Article Title:
        <input
          name="title"
          id="title"
          type="text"
          value={newArticle.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Article Content:
        <textarea
          name="content"
          id="content"
          value={newArticle.content}
          onChange={handleChange}
        />
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ArticleForm
