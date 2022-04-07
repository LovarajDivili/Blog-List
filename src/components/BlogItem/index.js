import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li className="blog-item">
      <div className="post-date-section">
        <h1 className="post-count">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}
export default BlogItem
