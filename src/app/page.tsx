"use client";

import { PostData } from "@/domain/posts/post";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

// { data }: PostData

const getPosts = async (): Promise<PostData> => {
  const posts = await fetch("http://localhost:1337/api/posts");
  const jsonPosts = await posts.json();
  return jsonPosts;
};

export default function Home() {
  const [posts, setPosts] = useState<PostData>();

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
    console.log(posts);
  }, [posts]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header>
        <div className="container">
          <h1>Notion V2</h1>
          <h2>
            Uma aplicação feita para guardar todos os meus projetos feitos com
            Next.{" "}
          </h2>
          <p>
            {" "}
            Feito por <a href="https://moderncss.dev"> Lucas Conti</a>{" "}
          </p>
          <p>
            CodePen do <a href="https://twitter.com/5t3ph">Stephanie Eckles</a>
          </p>
          <a href="https://github.com/lucasconti888" className="link-github">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
              </svg>
            </span>{" "}
            Github
          </a>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#guidelines">Guidelines</a>
          </li>
          <li>
            <a href="#contribute">Contribute</a>
          </li>
          <li>
            <a href="#files">Files</a>
          </li>
          <li>
            <Link href="/test">Cabinete</Link>
          </li>
          <li>
            <a href="/resources/">Resources</a>
          </li>
        </ul>
      </nav>

      <main id="main" tabIndex={-1}>
        <div className="container">
          <article id="about">
            <section className="container">
              <h2>Coletando da API</h2>
              <p>
                Abaixo, os dados coletados da API são mapeados a fim de testar o
                funcionamento do fetch. Um problema que foi identificado é que o
                método funciona normalmente e deixa de funcionar de forma
                aleatória, sem um motivo aparente.
              </p>
              <blockquote>
                {posts?.data.map((post) => (
                  <p key={post.attributes.slug}>{post.attributes.title}</p>
                ))}
              </blockquote>
            </section>
            <section className="container">
              <h2>Modern CSS Under the Spotlight</h2>
              <p>
                Modern CSS has increased and improved the available CSS
                properties and layout behaviors, and browser support is nearly
                in sync for most high-touch features.
              </p>
              <p>Some examples of modern CSS include:</p>
              <ul>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>custom variables</li>
              </ul>
              <p>
                We also collectively have an improved understanding of what it
                takes to make accessible experiences.
              </p>
              <p>
                <a href="#contribute">Join Style Stage as a contributor</a> to
                refresh your CSS skills, and learn from others!
              </p>
            </section>
          </article>
          <article id="guidelines">
            <section className="container">
              <h2>Guidelines</h2>
              <p>
                Contributing a stylesheet to Style Stage means you agree to
                abide by
                <a href="/guidelines/">our full guidelines</a>.
              </p>
              <h3>TL;DR</h3>
              <p>
                All submissions will be autoprefixed and prepended with the
                <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
                  CC BY-NC-SA license
                </a>
                as well as attribution using the metadata you provide. You may
                use any build setup you prefer, but the final submission should
                be the compiled, unminified CSS.
              </p>
              <a href="/guidelines/" className="link-guidelines">
                Review full guidelines
              </a>
            </section>
          </article>
          <article id="contribute">
            <section className="container">
              <h2>Contribute</h2>
              <p>
                All who enjoy the craft of writing CSS are welcome to
                contribute!
              </p>
            </section>

            <footer id="files">
              <div className="container">
                <h3>Source Files</h3>
                <a
                  href="/source-files/style.css"
                  className="link-downloadcss"
                  download
                >
                  Download CSS
                </a>
                <a
                  href="/source-files/stylestage.html"
                  className="link-downloadhtml"
                  download
                >
                  Download HTML
                </a>
                <a
                  href="https://codepen.io/5t3ph/pen/b493845ae41e836889dd84fdbb0f5291"
                  className="link-codepen"
                  download
                >
                  Fork the CodePen
                </a>
              </div>
            </footer>
          </article>
        </div>
      </main>
      <aside className="profile" aria-labelledby="profile-title">
        <div className="container">
          <h4 id="profile-title">Currently Staged Style</h4>
          <ul>
            <li className="profile-title">
              <span>Title:</span> <span>Pipboy</span>
            </li>
            <li className="profile-author">
              <span>Author:</span> <span>Carter Lovelace</span>
            </li>
            <li className="profile-twitter">
              <span>Twitter:</span>{" "}
              <span>
                <a href="https://twitter.com/carterfromsl">carterfromsl</a>
              </span>
            </li>
            <li className="profile-website">
              <span>Website:</span>{" "}
              <span>
                <a href="https://llxi.me">llxi.me</a>
              </span>
            </li>
          </ul>
          <a href="/styles/css/pipboy.css">View Stylesheet</a>
        </div>
      </aside>
      <aside id="styles">
        <div className="container">
          <h2>Featured Styles</h2>
          <ul className="features">
            <li>
              <span>
                <a href="/styles/web-2.0-lobster-party">
                  Web 2.0 Lobster Party<span aria-hidden="true"></span>
                </a>
                <span>by Andy Bell</span>
              </span>
            </li>
            <li>
              <span>
                <a href="/styles/retroish">
                  Retroish<span aria-hidden="true"></span>
                </a>
                <span>by Jean Louise Tiston</span>
              </span>
            </li>
            <li>
              <span>
                <a href="/styles/transparency">
                  Transparency<span aria-hidden="true"></span>
                </a>
                <span>by Jens Oliver Meiert</span>
              </span>
            </li>
          </ul>

          <a href="/styles/" className="link-allstyles">
            View All Styles
          </a>
          <ul>
            <li>
              <a
                href="https://twitter.com/5t3ph"
                className="link-twittercontact"
              >
                Contact on Twitter
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <footer className="page-footer">
        <div className="container">
          <ul>
            <li>
              <a
                href="https://twitter.com/5t3ph"
                className="link-twittercontact"
              >
                Contact on Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
