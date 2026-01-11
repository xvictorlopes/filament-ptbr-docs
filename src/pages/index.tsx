import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

/**
 * Homepage do projeto de documentação pt-BR do Filament.
 *
 * Importante:
 * - Esta é uma tradução comunitária (não-oficial).
 * - Pode haver divergências entre esta versão e a documentação oficial (EN).
 * - O objetivo é facilitar o acesso ao conteúdo, mantendo transparência e rastreabilidade via GitHub.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        {/* Tagline curta e direta. Evite texto longo aqui; deixe o alerta abaixo explicar o contexto. */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.notice}>
          <Admonition type="caution" title="Tradução comunitária (não-oficial)">
            <p>
              Esta documentação é mantida pela comunidade e pode estar desatualizada
              ou divergir do conteúdo oficial em inglês.
            </p>
            <p>
              Consulte sempre a fonte oficial quando precisar de informação “canônica”:{' '}
              <Link to="https://filamentphp.com/docs">filamentphp.com/docs</Link>.
            </p>
          </Admonition>
        </div>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Ler a documentação
          </Link>

          <Link
            className="button button--outline button--lg"
            to="https://github.com/xvictorlopes/filament-ptbr-docs"
          >
            Contribuir no GitHub
          </Link>
        </div>

        <p className={styles.helperText}>
          Encontrou algo desatualizado? Abra uma issue ou envie um PR com a correção/tradução.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      // Title aparece no title do browser/SEO
      title={siteConfig.title}
      description="Tradução comunitária (não-oficial) da documentação do Filament em pt-BR."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
