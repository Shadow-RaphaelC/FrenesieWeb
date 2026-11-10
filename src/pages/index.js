import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const etapes = [
  {
    titre: '1. Créer ou rejoindre une partie',
    texte: "L'hôte crée une partie et partage le code d'invitation à ses amis. Les autres joueurs entrent le code pour rejoindre le lobby.",
    img: null,
  },
  {
    titre: '2. Choisir son personnage',
    texte: 'Chaque joueur choisit parmi Umbris, Fleur-de-Lys, Lee Mao et Mélodieuzze. Chacun a son propre style : distance, mêlée, mobilité ou magie.',
    img: null,
  },
  {
    titre: '3. Combattre',
    texte: "Déplace-toi avec WASD, attaque avec le clic gauche et utilise tes deux capacités et ton ultime. Tes délais de récupération et tes points de vie sont affichés à l'écran.",
    img: null,
  },
  {
    titre: '4. Combiner les effets',
    texte: 'Certaines capacités appliquent des effets (Mouillé, Électrisé, Étourdi, Hémorragie...). Combiner deux effets sur une même cible déclenche une fusion encore plus puissante.',
    img: null,
  },
  {
    titre: '5. Choisir une augmentation',
    texte: "Entre les manches, les perdants choisissent une augmentation avec leur or pour devenir plus forts. Tu peux rafraîchir la sélection si aucune ne te plaît. Chaque personnage a aussi ses augmentations uniques.",
    img: null,
  },
  {
    titre: '6. Remporter la partie',
    texte: "Chaque élimination et chaque manche gagnée rapportent des points. Le premier à atteindre le total fixé par l'hôte gagne. Les gemmes gagnées servent ensuite à débloquer de nouvelles augmentations dans la boutique.",
    img: null,
  },
];

// null = placeholder. Plus tard : '/video/presentation.mp4' (fichier dans static/video/)
const video = null;

const equipe = [
  {
    nom: 'Raphaël Couturier',
    role: "Chef d'équipe · Programmeur",
    details: 'À remplir',
    courriel: 'raphc.official.business@gmail.com',
  },
  {
    nom: 'Vincent Lévesque',
    role: 'Programmeur',
    details: 'À remplir',
    courriel: 'EMAIL_VINCENT',
  },
  {
    nom: 'Mathis Teixeira',
    role: 'Programmeur',
    details: 'À remplir',
    courriel: 'EMAIL_MATHIS',
  },
  {
    nom: 'Goufril Mardini',
    role: 'Programmeur',
    details: 'À remplir',
    courriel: 'EMAIL_GOUFRIL',
  },
  {
    nom: 'NOM_ARTISTE',
    role: 'Artiste',
    details: 'À remplir',
    courriel: 'EMAIL_ARTISTE',
  },
];

function Etape({ titre, texte, img }) {
  const src = useBaseUrl(img ?? '');
  return (
    <div className="col col--4">
      <div className={clsx('card', styles.card)}>
        <div className="card__image">
          {img ? (
            <img src={src} alt={titre} />
          ) : (
            <div className={styles.placeholder}>Capture à venir</div>
          )}
        </div>
        <div className="card__body">
          <Heading as="h3">{titre}</Heading>
          <p>{texte}</p>
        </div>
      </div>
    </div>
  );
}

function CommentJouer() {
  return (
    <section className={clsx(styles.section, styles.alt)}>
      <div className="container">
        <Heading as="h2">Comment jouer</Heading>
        <div className="row">
          {etapes.map((e) => (
            <Etape key={e.titre} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Frénésie
        </Heading>
        <p className="hero__subtitle">Party-fighter PvP multijoueur entre amis</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/wiki/personnages/fleurdelys">
            Voir les personnages
          </Link>
        </div>
      </div>
    </header>
  );
}

function APropos() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">À propos du jeu</Heading>
        <p>
          <strong>Frénésie</strong> est un jeu de combat multijoueur en ligne où des amis
          s'affrontent sur plusieurs manches dans une arène remplie de murs, d'objets et
          d'obstacles. Chaque joueur incarne un personnage avec son propre kit : une attaque
          de base, deux capacités et un ultime.
        </p>
        <p>
          Chaque élimination et chaque manche gagnée rapportent des points, jusqu'au total
          choisi par l'hôte. Entre les manches, les joueurs qui ont perdu peuvent acheter une
          augmentation avec leur or pour devenir plus forts, tandis que le gagnant garde son
          point. Chaque partie se joue donc différemment selon les choix faits.
        </p>
        <p>
          En dehors des parties, les gemmes accumulées permettent de débloquer de nouvelles
          augmentations dans la boutique, ajoutant une progression à long terme. Le jeu est
          pensé pour se jouer entre proches, sur invitation, pour quelques manches rapides,
          chaotiques et compétitives.
        </p>
        <p className={styles.tech}>
          Développé avec Unity et Netcode for GameObjects · Sauvegarde avec Unity Cloud Save
        </p>
      </div>
    </section>
  );
}

function Video() {
  const src = useBaseUrl(video ?? '');
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Vidéo de présentation</Heading>
        {video ? (
          <video className={styles.video} src={src} controls />
        ) : (
          <div className={clsx(styles.placeholder, styles.videoPlaceholder)}>
            Vidéo à venir
          </div>
        )}
      </div>
    </section>
  );
}

function Membre({ nom, role, details, courriel }) {
  return (
    <div className={clsx('col', styles.memberCol)}>
      <div className={clsx('card', styles.card)}>
        <div className="card__body">
          <Heading as="h3">{nom}</Heading>
          <p className={styles.role}>{role}</p>
          <p>{details}</p>
        </div>
        <div className="card__footer">
          <a href={`mailto:${courriel}`}>{courriel}</a>
        </div>
      </div>
    </div>
  );
}

function Equipe() {
  return (
    <section className={clsx(styles.section, styles.alt)}>
      <div className="container">
        <Heading as="h2">L'équipe</Heading>
        <div className="row">
          {equipe.map((m) => (
            <Membre key={m.nom} {...m} />
          ))}
        </div>
        <div className={styles.supervision}>
          <p><strong>Superviseur du projet :</strong> François Simard</p>
          <p><strong>Enseignant :</strong> Martin Lemay</p>
          <p>420-KBH-LG · Collège Lionel-Groulx · 2026</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Accueil" description="Frénésie, un party-fighter PvP multijoueur entre amis">
      <Hero />
      <main>
        <APropos />
        <CommentJouer />
        <Video />
        <Equipe />
      </main>
    </Layout>
  );
}