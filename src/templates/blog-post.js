import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div id="main_container">
      {helmet || ''}
      <section id="main">
        <ol itemScope="" itemType="https://schema.org/BreadcrumbList" className="breadcrumb">
          <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
            <a itemType="https://schema.org/Thing" itemProp="item" href="/ja/help/">
              <span itemProp="name">ヘルプ</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
            <span itemProp="name">SocialDog とは</span>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
            <a itemType="https://schema.org/Thing" itemProp="item" href="/ja/help/article/what_is_socialdog">
              <span itemProp="name">SocialDog はどんなサービスですか？</span></a>
            <meta itemProp="position" content="3" />
          </li>
        </ol>

        <article data-wio-id="W2P0lSoAACRzpRbQ">
          <h1>
            {title}
          </h1>
          <div className="updated_at">
            更新日: 2018/12/28
          </div>
          <div className="article_body">
            <PostContent content={content} />
          </div>
        </article>
      </section>
      <aside>
        <h2>SocialDog とは</h2>
        <ul>
          <li>
            <a href="/ja/help/article/what_is_socialdog" className="active">
              SocialDog はどんなサービスですか？ </a>
          </li>
          <li>
            <a href="/ja/help/article/features" className="">
              SocialDog ではどんなことができますか？ </a>
          </li>
          <li>
            <a href="/ja/help/article/use_free" className="">
              SocialDog は無料でも使えますか？ </a>
          </li>
          <li>
            <a href="/ja/help/article/cloud" className="">
              SocialDog を開いておく必要はありますか？ </a>
          </li>
          <li>
            <a href="/ja/help/article/features_guide" className="">
              どの機能を使えばいいか知りたい </a>
          </li>
          <li>
            <a href="/ja/help/article/ui" className="">
              画面の見方 </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
