import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            Feito por <a href="https://moderncss.dev"> Lucas Conti</a> {" "}
            a partir da CodePen do <a href="https://twitter.com/5t3ph">Stephanie Eckles</a>
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
            </span>
            {" "} Github
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
            <Link href="/cabinet">Cabinete</Link>
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
              <h2>Setting the Stage</h2>
              <p>
                In 2003,{" "}
                <a href="http://daveshea.com/projects/zen/">Dave Shea</a> began
                a legendary project called{" "}
                <a href="http://www.csszengarden.com/">CSS Zen Garden</a> that
                provided a demonstration of "what can be accomplished through
                CSS-based design" until submissions stopped in 2013.
              </p>
              <p>
                <strong>Style Stage</strong> seeks to rekindle that spirit by
                providing this page as the base HTML for contributors - like
                you! - to re-style by submitting an alternate stylesheet.
              </p>
              <blockquote>
                <p>
                  <strong>How it works:</strong> Visit the
                  <a href="/styles/">"All Styles"</a> directory page and select
                  a style to view. A page with identical content to this one
                  will be presented with a new design provided from a
                  contributed stylesheet. CSS practitioners of any skill level
                  are invited to
                  <a href="#contribute">submit a stylesheet</a>!
                </p>
              </blockquote>
              <p>
                The HTML for this page was created to be semantic, accessible,
                and free of nearly all other opinions. Nested sectioning
                elements with the className `.container` serve as additional
                style aids since you do not have access to alter the base HTML.
                IDs are included where needed for nav anchors or accessibility,
                and a small number of additional classNamees are provided for
                key elements without IDs. Don't forget the `.skip-link`!
              </p>
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
                <li>@supports()</li>
                <li>gradients</li>
                <li>animation</li>
                <li>3D transforms</li>
                <li>object-fit</li>
                <li>:focus-within</li>
                <li>calc()</li>
                <li>min() / max() / clamp()</li>
                <li>viewport units</li>
                <li>scroll-(margin/padding/snap)</li>
                <li>position: sticky</li>
                <li>two-value display</li>
                <li>expanded media query values</li>
                <li>variable fonts</li>
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
                be the compiled, unminified CSS. You retain the copyright to
                original graphics and must ensure all graphics used are
                appropriately licensed. All asset links, including fonts, must
                be absolute to external resources. Stylesheets will be saved
                into the Github repo, and detected changes that violate the
                guidelines are cause for removal.
              </p>
              <p>
                Ensure your design is responsive, and that it passes accessible
                contrast (we'll be using aXe to verify). Animations should be
                removed via `prefers-reduced-motion`. Cutting-edge techniques
                should come with a fallback if needed to not severely impact the
                user experience. No content may be permanently hidden, and
                hidden items must come with an accessible viewing technique.
                Page load time should not exceed 3 seconds.
              </p>
              <p>
                Most importantly - have fun and learn something new! Check out
                the
                <a href="/resources/">resources</a> for tips and inspiration.
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
              <p>
                By participating as a contributor, your work will be shared with
                your provided attribution as long as Style Stage is online, your
                stylesheet link and any asset links remain valid, and all{" "}
                <a href="/guidelines/">contributor guidelines</a> are adhered
                to.
              </p>
            </section>
            <section className="container">
              <h3>Steps to Contribute</h3>
              <ol>
                <li>
                  Download the source files listed below to use as a reference
                  to build your stylesheet.
                </li>
                <li>
                  Host your completed stylesheet at a public URL, and ensure all
                  asset links are absolute URLs to external resources.
                </li>
                <li>
                  <a href="https://github.com/5t3ph/stylestage">
                    Create a pull request
                  </a>{" "}
                  to add your information as a unique .json file to:
                  src/_data/styles. The schema is detailed in the repo README,
                  and you can review the FAQ on
                  <a href="/guidelines/#how-do-i-create-a-pull-request-pr">
                    creating a pull request
                  </a>
                  .
                </li>
                <li>
                  If your contribution abides by the previously listed
                  guidelines, your submission will be added!
                </li>
              </ol>
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
        </div>
      </aside>
      <footer className="page-footer">
        <div className="container">
          <p>
            Created and maintained by
            <a href="https://twitter.com/5t3ph">Stephanie Eckles (@5t3ph)</a>
          </p>
          <ul>
            <li>
              <a
                href="https://twitter.com/5t3ph"
                className="link-twittercontact"
              >
                Contact on Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/5t3ph/stylestage"
                className="link-github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg>
                Star on Github
              </a>
            </li>
            <li>
              <a href="/feed/" className="link-rss">
                RSS Feed
              </a>
            </li>
            <li>
              <a href="/subscribe/" className="link-support">
                Subscribe to Updates
              </a>
            </li>
          </ul>
          <p>
            Crafted with semantic, accessible HTML and CSS,{" "}
            <strong>Style Stage</strong> is generated with{" "}
            <a href="https://11ty.dev">11ty</a> and hosted on
            <a href="https://netlify.com">Netlify</a>. This project uses
            <a href="https://postcss.org/">PostCSS</a> with
            <a href="https://github.com/postcss/autoprefixer">autoprefixer</a>.
          </p>
          <p>
            Contributors retain copyright of all graphics used, and styles are
            available under
            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
              CC BY-NC-SA
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
