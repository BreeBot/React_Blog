import React, { useState, useEffect } from "react"

import ArticleTile from "./ArticleTile"
import ArticleForm from "./ArticleForm"
//import ArticleShow from "./ArticleShow"

const ArticlesList = props => {
  const [articles, setArticles] = useState([])

  // Fetch all articles

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/v1/articles")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
        setArticles(body.articles)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const addNewArticle = async formPayload => {
    // FETCH POST LOGIC
    try {
      const response = await fetch("/api/v1/articles", {
        method:"POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body:JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error 
      }
      const body = await response.json()
      setArticles([...articles, body.article])  
    } catch (error) {

    }
  }

  const articleTiles = articles.map(article => {
    return (
      <ArticleTile
        key={article.id}
        id={article.id}
        title={article.title}
        content={article.content}
      />
    )
  })

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>My Blog!</h1>
        <hr />
        {articleTiles}
        <ArticleForm addNewArticle={addNewArticle} />
      </div>
    </div>
  )
}

export default ArticlesList
