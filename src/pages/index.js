import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const etapes = [
  {
    titre: '1. Explorer le Menu',
    texte: `Les boutons "Informations" et "Crédits" vous donneront des informations supplémentaires sur le projet. Le bouton "Boutique" vous mène à la boutique d'améliorations et le bouton "Jouer" débute le jeu.`,
    img: null,
  },
  {
    titre: '2. Créer ou rejoindre une partie',
    texte: "L'hôte crée une partie et partage le code d'invitation à ses amis. Les autres joueurs entrent le code pour rejoindre le lobby.",
    img: null,
  },
  {
    titre: '3. Choisir son nom',
    texte: "Vous devez maintenant choisir votre nom. Un nom par défaut vous sera attribué si vous souhaitez rester anonyme.",
    img: null,
  },
  {
    titre: '4. Choisir son personnage',
    texte: 'Chaque joueur choisit parmi Umbris, Fleur-de-Lys, Lee Mao et Mélodieuzze. Chacun a son propre style : distance, mêlée, mobilité ou magie.',
    img: null,
  },
  {
    titre: '5. Combattre',
    texte: "Déplace-toi avec WASD, attaque avec le clic gauche et utilise tes deux capacités (clic droit et la barre d'espace) et ton ultime (Touche E). Tes délais de récupération et tes points de vie sont affichés à l'écran.",
    img: null,
  },
  {
    titre: '6. Combiner les effets',
    texte: 'Certaines capacités appliquent des effets (Mouillé, Électrisé, Étourdi, Hémorragie...). Combiner deux effets sur une même cible déclenche une fusion encore plus puissante.',
    img: null,
  },
  {
    titre: '7. Choisir une augmentation',
    texte: "Entre les manches, les perdants choisissent une augmentation avec leur or pour devenir plus forts. Tu peux rafraîchir la sélection si aucune ne te plaît. Chaque personnage a aussi ses augmentations uniques.",
    img: null,
  },
  {
    titre: '8. Remporter la partie',
    texte: "Chaque élimination et chaque manche gagnée rapportent des points. Le premier à atteindre le total fixé par l'hôte gagne. Les gemmes gagnées servent ensuite à débloquer de nouvelles augmentations dans la boutique.",
    img: null,
  },
];

// Vidéo de fond du hero (courte, sans son). null = juste le dégradé.
// Plus tard : '/video/hero.mp4'
const heroVideo = null;

// Vidéo de présentation (1 min, avec son). null = placeholder.
// Plus tard : '/video/presentation.mp4'
const video = null;

const equipe = [
  {
    nom: 'Raphaël Couturier',
    role: "Chef d'équipe · Programmeur",
    details: 'Responsable de la jouabilité des personnages, des augmentations, du site wiki et de la sauvegarde avec UnityCloud.',
    courriel: 'raphc.official.business@gmail.com',
    github: 'Shadow-RaphaelC',
  },
  {
    nom: 'Vincent Lévesque',
    role: 'Programmeur',
    details: `Responsable du déroulement du jeu, des effets visuels (VFX) et de l'interface utilisateur.`,
    courriel: 'levvin2@outlook.fr',
    github: 'vincentLevesque2',
  },
  {
    nom: 'Mathis Teixeira',
    role: 'Programmeur',
    details: `Responsable de l'interface utilisateur, de la connexion entre les joueurs et du déroulement du jeu.`,
    courriel: 'mathis.teixeira44@gmail.com',
    github: '4EverMT',
  },
  {
    nom: 'Goufril Mardini',
    role: 'Programmeur',
    details: `Responsable de la conception des personnages, des augmentations et des menus d'optimisation.`,
    courriel: 'goufril.mardini.dev@gmail.com',
    github: 'goufff',
  },
  {
    nom: 'Julissa Ramos',
    role: 'Artiste Visuel',
    details: `Responsable de la conception des modèles de personnages et leur style visuel.`,
  },
  {
    nom: 'Colin Woon',
    role: 'Artiste Sonore',
    details: 'Responsable de la création de la trame sonore pour la boucle de jeu principale.',
  },
  {
    nom: 'Marc-Antoine Lambert',
    role: 'Artiste Sonore',
    details: 'Responsable de la création de la trame sonore pour la boutique du jeu.',
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
    <section id="comment-jouer" className={clsx(styles.section, styles.alt)}>
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
  const src = useBaseUrl(heroVideo ?? '');
  return (
    <header className={clsx('hero', styles.hero)}>
      {heroVideo && (
        <video
          className={styles.heroVideo}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          Frénésie
        </Heading>
        <p className="hero__subtitle">Party-fighter PvP multijoueur entre amis</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/wiki/personnages/umbris">
            Voir les personnages
          </Link>
        </div>
      </div>
      <a href="#a-propos" className={styles.scrollHint} aria-label="Défiler vers le bas">
        ▼
      </a>
    </header>
  );
}

function APropos() {
  return (
    <section id="a-propos" className={styles.section}>
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

function Membre({ nom, role, details, courriel, github }) {
  return (
    <div className={clsx('col', styles.memberCol)}>
      <div className={clsx('card', styles.card)}>
        <div className="card__body">
          <Heading as="h3">{nom}</Heading>
          <p className={styles.role}>{role}</p>
          <p>{details}</p>
        </div>
        {(courriel || github) && (
          <div className={clsx('card__footer', styles.contacts)}>
            {courriel && (
              <a className="contact-link" href={`mailto:${courriel}`}>
                {courriel}
              </a>
            )}
            {github && (
              <a
                className="contact-link"
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer">
                {github}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Equipe() {
  return (
    <section id="equipe" className={clsx(styles.section, styles.alt)}>
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