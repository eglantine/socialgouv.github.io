import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";

import { Section, LayoutArticle } from ".";

const articles = [
  {
    title: "Introduction",
    href: "/startups/code-du-travail-numerique"
  },
  {
    title: "La genèse du code du travail numérique",
    href: "/startups/code-du-travail-numerique/genese"
  },
  {
    title: "Lancement de la startup",
    href: "/startups/code-du-travail-numerique/kickoff"
  },
  {
    title: "Mise en place d'une démarche UX",
    href: "/startups/code-du-travail-numerique/ux"
  },
  {
    title: "Ecosystème du droit libre",
    href: "/startups/code-du-travail-numerique/droit-libre"
  },
  {
    title: "Release v-3.2.0 Fuschia Eagle",
    href: "/startups/code-du-travail-numerique/release-v3.2.0"
  },
  {
    title: "La complexité du droit",
    href: "/startups/code-du-travail-numerique/complexite",
    disabled: true
  },
  {
    title: "Les services de renseignement",
    href: "/startups/code-du-travail-numerique/sdr",
    disabled: true
  },
  {
    title: "Les sources de données",
    href: "/startups/code-du-travail-numerique/data",
    disabled: true
  },
  {
    title: "Premiers prototypes",
    href: "/startups/code-du-travail-numerique/prototype-1",
    disabled: true
  },
  {
    title: "Language naturel et Machine Learning",
    href: "/startups/code-du-travail-numerique/nlp-machine-learning",
    disabled: true
  }
];

const Links = withRouter(({ router }) => (
  <Section
    className="section-grey"
    style={{ marginTop: 50 }}
    title="Autres articles sur le code du travail numérique"
    subTitle=""
  >
    <ul>
      {articles
        .filter(a => !a.disabled)
        .map(article => {
          return (
            <li key={article.href}>
              {router.pathname === article.href ? (
                <div>{article.title}</div>
              ) : (
                <Link href={article.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>{article.title}</a>
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  </Section>
));

//

const LayoutCDTN = ({ meta, children }) => {
  if (typeof window !== "undefined" && meta.disabled) {
    throw new Error("Not found");
  }

  return (
    <LayoutArticle meta={meta} startup="code-du-travail-numerique">
      <div>{children}</div>
      <p>
        {" "}
        👉 Pour en savoir plus, contactez-nous sur{" "}
        <a href="mailto:contact@code-du-travail.beta.gouv.fr">
          contact@code-du-travail.beta.gouv.fr
        </a>
      </p>

      <Links />
    </LayoutArticle>
  );
};

LayoutCDTN.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default LayoutCDTN;
