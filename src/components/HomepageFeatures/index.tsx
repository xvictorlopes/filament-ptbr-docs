import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Heroicons (v2) — escolha outline para ficar parecido com a imagem
import {
  RectangleStackIcon,
  TableCellsIcon,
  CursorArrowRaysIcon,
  PencilSquareIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon,
  BellIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

type FeatureItem = {
  title: string;
  description: string;
  href?: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FEATURE_LIST: FeatureItem[] = [
  {
    title: 'Resources',
    description: 'Crie uma interface CRUD para o seu model Eloquent.',
    href: '/docs',
    Icon: RectangleStackIcon,
  },
  {
    title: 'Table columns',
    description: 'Veja uma lista de todas as colunas de tabela disponíveis, que fornecem diferentes conteúdos de célula.',
    href: '/docs',
    Icon: TableCellsIcon,
  },
  {
    title: 'Action buttons',
    description: 'Aprenda como personalizar a aparência de um botão e abrir modals e slide-overs.',
    href: '/docs',
    Icon: CursorArrowRaysIcon,
  },
  {
    title: 'Form fields',
    description: 'Veja uma lista de todos os campos disponíveis para criar Forms interativos.',
    href: '/docs',
    Icon: PencilSquareIcon,
  },
  {
    title: 'Infolist entries',
    description: 'Veja uma lista de todas as entradas de Infolist disponíveis para exibir informações somente leitura.',
    href: '/docs',
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Schema layouts',
    description: 'Veja uma lista de todos os componentes de layout disponíveis para organizar seus Forms e Infolists.',
    href: '/docs',
    Icon: Squares2X2Icon,
  },
  {
    title: 'Notifications',
    description: 'Notifique seus usuários sobre eventos importantes, entregando mensagens em tempo real usando o Livewire.',
    href: '/docs',
    Icon: BellIcon,
  },
  {
    title: 'Widgets',
    description: 'Veja uma lista de todos os Widgets disponíveis para criar dashboards.',
    href: '/docs',
    Icon: ChartBarIcon,
  },
  {
    title: 'Panel configuration',
    description: 'Aprenda como o arquivo de configuração pode personalizar o seu Panel.',
    href: '/docs',
    Icon: WrenchScrewdriverIcon,
  },
];

function FeatureCard({title, description, href, Icon}: FeatureItem) {
  const content = (
    <>
      <span className={styles.iconWrap} aria-hidden="true">
        <Icon className={styles.icon} />
      </span>

      <span className={styles.text}>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <span className={styles.description}>{description}</span>
      </span>
    </>
  );

  return href ? (
    <Link className={styles.card} to={href}>
      {content}
    </Link>
  ) : (
    <div className={styles.card} role="group">
      {content}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} aria-label="Atalhos da documentação">
      <div className="container">
        <div className={styles.grid}>
          {FEATURE_LIST.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}