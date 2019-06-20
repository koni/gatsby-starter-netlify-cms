import React from 'react'
import Helmet from 'react-helmet'
import '../scss/all.scss'
import useSiteMetadata from './SiteMetadata'
import {Link} from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <header>
        <div className="container">
          <div id="global_header_logo_menu">
            <h1>
              <Link to="/">
                <img src="/img/help_logo.png?" alt="" width="296" height="40" />
              </Link>
            </h1>
            <nav className="hidden-xs">
              <ul>
                <li>
                  <a href="/ja">トップ</a>
                </li>
                <li>
                  <a href="/ja/plan">プラン</a>
                </li>
                <li>
                  <a id="global_header_register_button" target="_blank" href="https://web.social-dog.net/login"
                     className="hide">ログイン</a>
                  <a className="" href="https://web.social-dog.net/dashboard"
                     id="global_header_dashboard_button">ダッシュボードを開く</a>
                </li>
              </ul>
            </nav>
          </div>
          <form action="/ja/help/search" method="get">
            <input type="text" name="q" placeholder="キーワードを検索" value="" />
          </form>
        </div>
      </header>
      <div id="cv_area">
        <a href="/">SocialDog を使って Twitter アカウントの管理を効率的に</a>
      </div>
      {children}
    </div>
  );
};

export default TemplateWrapper;
