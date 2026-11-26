import type { Locale, PackageId, RatingBracketId } from '../utils/coaching';

export const COACH_PORTRAIT =
  '/assets/aistudio/Portrait_vintage_au_troph_e_argent__c03aec52.png';

export const LOCALE_OPTIONS: Array<{ id: Locale; shortLabel: string; nativeName: string }> = [
  { id: 'en', shortLabel: 'EN', nativeName: 'English' },
  { id: 'fr', shortLabel: 'FR', nativeName: 'Français' },
  { id: 'ar', shortLabel: 'AR', nativeName: 'العربية' },
];

export interface AuthorityFeature {
  number: string;
  title: string;
  description: string;
  metric: string;
}

export interface TrainingStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface RatingBracket {
  id: RatingBracketId;
  label: string;
  range: string;
  focusTitle: string;
  focusSummary: string;
  deliverables: string[];
}

export interface CoachingPackage {
  id: PackageId;
  name: string;
  cadence: string;
  priceTag: string;
  badge?: string;
  highlighted?: boolean;
  summary: string;
  features: string[];
  whatsappPackageName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalizedContent {
  metaTitle: string;
  nav: {
    brand: string;
    eloBadge: string;
    about: string;
    methodology: string;
    packages: string;
    faq: string;
    bookNow: string;
    whatsappAction: string;
    openMenuAria: string;
    closeMenuAria: string;
    languageLabel: string;
  };
  hero: {
    trustElo: string;
    trustAnalysis: string;
    trustPlans: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    statRatingLabel: string;
    statFormatLabel: string;
    statFormatValue: string;
    statPlatformsLabel: string;
    portraitAlt: string;
    portraitFallback: string;
    portraitKicker: string;
    portraitCaption: string;
  };
  authority: {
    sectionKicker: string;
    heading: string;
    bioParagraph1: string;
    bioParagraph2: string;
    portraitAlt: string;
    portraitFallback: string;
    portraitRole: string;
    highlights: Array<{ title: string; subtitle: string }>;
    features: AuthorityFeature[];
  };
  methodology: {
    sectionKicker: string;
    heading: string;
    subheading: string;
    steps: TrainingStep[];
    showcaseAlt: string;
    showcaseFallback: string;
    showcaseKicker: string;
    showcaseCaption: string;
    selectorTitle: string;
    selectorSubtitle: string;
    selectorAria: string;
    brackets: RatingBracket[];
  };
  packages: {
    sectionKicker: string;
    heading: string;
    subheading: string;
    selectedTrackLabel: string;
    mostPopularLabel: string;
    bestMatchLabel: string;
    selectPlanLabel: string;
    items: CoachingPackage[];
  };
  faq: {
    sectionKicker: string;
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  footer: {
    kicker: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    whatsappDirectLabel: string;
    quickChatAria: string;
  };
}

export const CONTENT_BY_LOCALE: Record<Locale, LocalizedContent> = {
  en: {
    metaTitle: 'Elite Chess Coaching | 2700 Online Rated Coach',
    nav: {
      brand: 'ELITE CHESS COACHING',
      eloBadge: '2700 ELO',
      about: 'About',
      methodology: 'Methodology',
      packages: 'Packages',
      faq: 'FAQ',
      bookNow: 'Book Now',
      whatsappAction: 'Message on WhatsApp',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      languageLabel: 'Select language',
    },
    hero: {
      trustElo: '2700+ Online ELO',
      trustAnalysis: '1-on-1 Live Analysis',
      trustPlans: 'Custom Study Plans',
      headlinePrefix: 'Master Chess Strategy with a ',
      headlineHighlight: '2700 Online Rated',
      headlineSuffix: ' Coach',
      subheadline:
        'Personalized 1-on-1 coaching designed to eliminate blunders, sharpen tactical calculation, and build a winning opening repertoire.',
      primaryCta: 'Start Your Training on WhatsApp',
      secondaryCta: 'Explore Coaching Plans',
      statRatingLabel: 'Peak Rating',
      statFormatLabel: 'Format',
      statFormatValue: '1-on-1 Live',
      statPlatformsLabel: 'Platforms',
      portraitAlt: '2700 online rated chess coach in tailored black suit holding a silver championship trophy',
      portraitFallback: '2700 Online Rated Coach',
      portraitKicker: 'PRIVATE GRANDMASTER-LEVEL MENTORSHIP',
      portraitCaption:
        'Strategic depth, ruthless calculation, and tailored opening systems.',
    },
    authority: {
      sectionKicker: 'ABOUT THE COACH',
      heading: 'Why Train With a 2700 Online Rated Player',
      bioParagraph1:
        'Most chess players stall not from a lack of effort, but because they study random lines and solve isolated puzzles without fixing how they actually think at the board. Having competed at the 2700+ online tier across thousands of high-pressure games, I translate grandmaster-level decision frameworks into clear habits you can apply in every single game.',
      bioParagraph2:
        'Every lesson is built around your own Chess.com and Lichess history—isolating your exact calculation blind spots, streamlining your openings, and turning shaky positions into decisive wins.',
      portraitAlt: 'Coach close-up studio portrait',
      portraitFallback: '2700 Online ELO Coach',
      portraitRole: 'Private Strategy & Calculation Coach',
      highlights: [
        { title: '60-Min Deep Dive', subtitle: 'Focused 1-on-1 live board sessions' },
        { title: 'Zero Generic Fluff', subtitle: 'Built from your real recent games' },
        { title: 'Full PGN Archive', subtitle: 'Annotated studies saved after class' },
      ],
      features: [
        {
          number: '01',
          title: '2700 ELO Tactical & Positional Mastery',
          description:
            'Learn how high-level players evaluate imbalances, calculate forcing variations, and stay composed under severe time pressure.',
          metric: 'Calculation & Intuition',
        },
        {
          number: '02',
          title: 'Deep Game Diagnostics',
          description:
            'In-depth reviews of your Chess.com and Lichess games to pinpoint recurring blunder triggers, time-management leaks, and blind spots.',
          metric: 'Chess.com & Lichess Audits',
        },
        {
          number: '03',
          title: 'Practical Opening Repertoire',
          description:
            'Build solid, easy-to-remember opening systems tailored to your natural playing style—without memorizing endless engine lines.',
          metric: 'Custom PGN Files',
        },
        {
          number: '04',
          title: 'Endgame Precision',
          description:
            'Convert slight advantages and hold difficult positions with practical rook, minor-piece, and king-activity endgame technique.',
          metric: 'Conversion Technique',
        },
      ],
    },
    methodology: {
      sectionKicker: 'METHODOLOGY',
      heading: 'How The Training Works',
      subheading:
        'A structured 3-step coaching system built to turn scattered online games into measurable rating progress.',
      steps: [
        {
          step: '01',
          title: 'Initial Assessment & Game Review',
          subtitle: 'Pre-Session Diagnostic',
          description:
            'Before our first board session, I audit your recent rapid and classical games to map your tactical accuracy, opening phase scores, and endgame conversion.',
        },
        {
          step: '02',
          title: 'Live Interactive 1-on-1 Sessions',
          subtitle: 'Lichess / Chess.com + Voice & Video',
          description:
            'Interactive analysis boards in real time. You verbalize candidate moves while I refine your calculation tree, positional judgment, and critical decision-making.',
        },
        {
          step: '03',
          title: 'Custom Homework & WhatsApp Follow-Up',
          subtitle: 'Continuous Study Loop',
          description:
            'Receive targeted puzzle sets, annotated PGN opening files, and ongoing WhatsApp check-ins between sessions so progress compounds every week.',
        },
      ],
      showcaseAlt: 'Coach off-board strategic preparation and study lifestyle',
      showcaseFallback: 'Focused Preparation',
      showcaseKicker: 'CUSTOMIZED TO YOUR RATING',
      showcaseCaption: 'Calibrated preparation for every bracket',
      selectorTitle: 'Preview Your Training Focus by Rating',
      selectorSubtitle:
        'Select your current online rating to see what we prioritize first—and highlight the ideal coaching plan below.',
      selectorAria: 'Select your current chess rating bracket',
      brackets: [
        {
          id: 'beginner',
          label: 'Foundations',
          range: 'Under 1000 ELO',
          focusTitle: 'Blunder Elimination & Board Vision',
          focusSummary:
            'Stop hanging pieces, build a disciplined move-by-move blunder check, and master fundamental opening principles and basic checkmates.',
          deliverables: [
            'Pre-move safety checklist',
            'Core tactical motifs (pins, forks, skewers)',
            'Simple, sound 1.e4 or 1.d4 starter repertoire',
          ],
        },
        {
          id: 'intermediate',
          label: 'Club Level',
          range: '1000–1600 ELO',
          focusTitle: 'Tactical Sharpness & Middlegame Plans',
          focusSummary:
            'Bridge the gap from one-move tactics to cohesive middlegame strategy, pawn structure understanding, and clean conversion of winning positions.',
          deliverables: [
            '3-move candidate calculation discipline',
            'Punishing common online traps & sidelines',
            'Essential king-and-pawn & rook endgames',
          ],
        },
        {
          id: 'advanced',
          label: 'Tournament',
          range: '1600–2100 ELO',
          focusTitle: 'Positional Imbalances & Repertoire Depth',
          focusSummary:
            'Outplay strong club players with deep strategic plans, proactive piece maneuvering, dynamic sacrifices, and razor-sharp endgame calculation.',
          deliverables: [
            'Complete White & Black repertoire PGNs',
            'Complex middlegame structural analysis',
            'Clock management for high-stakes games',
          ],
        },
        {
          id: 'master',
          label: 'Master Track',
          range: '2100+ ELO',
          focusTitle: '2700-Level Precision & Critical Decisions',
          focusSummary:
            'Eliminate subtle positional concessions, refine high-level opening novelties, and sharpen deep calculation against titled opposition.',
          deliverables: [
            'Opponent-targeted opening preparation',
            'Grandmaster-caliber endgame nuance',
            'Priority WhatsApp review after tournament games',
          ],
        },
      ],
    },
    packages: {
      sectionKicker: 'COACHING PACKAGES',
      heading: 'Choose Your Coaching Plan',
      subheading:
        'Start with a single 60-minute diagnostic assessment or commit to structured monthly mentorship. Every plan begins with a direct WhatsApp consultation.',
      selectedTrackLabel: 'Selected track:',
      mostPopularLabel: 'MOST POPULAR',
      bestMatchLabel: 'Best Match',
      selectPlanLabel: 'Select Plan',
      items: [
        {
          id: 'starter',
          name: 'Starter Assessment',
          cadence: '1 Trial Session · 60 Minutes',
          priceTag: 'DIAGNOSTIC ENTRY',
          summary:
            'A focused 60-minute diagnostic session to uncover what is holding your rating back and leave with a clear, actionable training roadmap.',
          features: [
            '60-minute live 1-on-1 diagnostic coaching session',
            'Deep audit of 3–5 recent Chess.com or Lichess games',
            'Identification of your top 3 recurring blunder & thinking leaks',
            'Personalized 30-day rating improvement roadmap',
          ],
          whatsappPackageName: 'Starter Assessment (1 Trial Session)',
        },
        {
          id: 'growth',
          name: 'Monthly Growth Plan',
          cadence: '4 Sessions / Month · Weekly',
          priceTag: 'WEEKLY COACHING',
          badge: 'Most Popular',
          highlighted: true,
          summary:
            'Consistent weekly 1-on-1 training built to systematically raise your online and OTB rating with structured analysis and custom weekly homework.',
          features: [
            'Four 60-minute live 1-on-1 sessions every month',
            'Full review of your key rapid & classical games',
            'Custom tactical puzzle & positional study assignments',
            'Tailored opening lines with annotated PGN files',
          ],
          whatsappPackageName: 'Monthly Growth Plan (4 Sessions / Month)',
        },
        {
          id: 'intensive',
          name: 'Intensive Mastery Plan',
          cadence: '8 Sessions / Month · Twice Weekly',
          priceTag: 'ACCELERATED TRACK',
          summary:
            'High-frequency mentorship for ambitious players targeting rapid rating breakthroughs, tournament readiness, and complete repertoire mastery.',
          features: [
            'Eight 60-minute live 1-on-1 sessions per month',
            'Priority WhatsApp game review between lessons',
            'Full White & Black opening repertoire construction',
            'Endgame mastery drills & tournament prep simulations',
          ],
          whatsappPackageName: 'Intensive Mastery Plan (8 Sessions / Month)',
        },
      ],
    },
    faq: {
      sectionKicker: 'FREQUENTLY ASKED QUESTIONS',
      heading: 'Everything You Need to Know',
      subheading:
        'Clear answers on platforms, scheduling, and what happens inside your sessions.',
      items: [
        {
          question: 'What rating levels do you coach?',
          answer:
            'I coach committed players across all rating tiers—from ambitious beginners under 1000 ELO building clean tactical habits, up to 2100+ tournament competitors refining subtle positional judgment and opening preparation. Every study plan is calibrated to your exact current level.',
        },
        {
          question: 'What platforms are used for live coaching sessions?',
          answer:
            'All live 1-on-1 lessons take place on an interactive Lichess Study or Chess.com analysis board paired with crystal-clear voice/video via Discord, Zoom, or Google Meet. After each lesson, you keep the full annotated PGN study link for unlimited review.',
        },
        {
          question: 'How are sessions scheduled and what timezones do you support?',
          answer:
            'Scheduling is coordinated directly on WhatsApp with flexible slots covering Europe, North America, the Middle East, and Asia. Once you select a plan, we lock in recurring weekly times—with easy rescheduling if your schedule shifts.',
        },
        {
          question: 'What happens during the Starter Assessment trial session?',
          answer:
            'Before we meet, you share your Chess.com or Lichess handle. During the 60-minute session, we dissect your critical mistakes, test your calculation process on live positions, and map out a concrete improvement roadmap covering openings, middlegame thinking, and endgames.',
        },
        {
          question: 'Do I receive homework and follow-up between lessons?',
          answer:
            'Yes. Both the Monthly Growth Plan and Intensive Mastery Plan include curated puzzle drills, endgame exercises, and opening files tailored to your games. Intensive Mastery students also get priority WhatsApp feedback on tournament or online games throughout the week.',
        },
      ],
    },
    footer: {
      kicker: 'YOUR NEXT RATING BREAKTHROUGH',
      heading: 'Stop Guessing. Start Playing With 2700-Level Clarity.',
      subheading:
        'Message me directly on WhatsApp with your Chess.com or Lichess username and your rating goal. We will schedule your first session within 24 hours.',
      primaryCta: 'Book Your Session on WhatsApp',
      whatsappDirectLabel: 'WhatsApp & Direct:',
      quickChatAria: 'Quick chat on WhatsApp (+212 771-587686)',
    },
  },

  fr: {
    metaTitle: 'Élite Échecs Coaching | Coach Classé 2700 en Ligne',
    nav: {
      brand: 'ÉLITE ÉCHECS COACHING',
      eloBadge: '2700 ELO',
      about: 'À propos',
      methodology: 'Méthode',
      packages: 'Forfaits',
      faq: 'FAQ',
      bookNow: 'Réserver',
      whatsappAction: 'Écrire sur WhatsApp',
      openMenuAria: 'Ouvrir le menu de navigation',
      closeMenuAria: 'Fermer le menu de navigation',
      languageLabel: 'Choisir la langue',
    },
    hero: {
      trustElo: '2700+ ELO en ligne',
      trustAnalysis: 'Analyse 1-à-1 en direct',
      trustPlans: 'Plans d’étude sur mesure',
      headlinePrefix: 'Maîtrisez la Stratégie aux Échecs avec un Coach ',
      headlineHighlight: 'Classé 2700 en Ligne',
      headlineSuffix: '',
      subheadline:
        'Un coaching individuel sur mesure conçu pour éliminer les gaffes, affûter votre calcul tactique et bâtir un répertoire d’ouvertures gagnant.',
      primaryCta: 'Commencer sur WhatsApp',
      secondaryCta: 'Découvrir les forfaits',
      statRatingLabel: 'Classement Max',
      statFormatLabel: 'Format',
      statFormatValue: '1-à-1 en direct',
      statPlatformsLabel: 'Plateformes',
      portraitAlt: 'Coach d’échecs classé 2700 en ligne en costume noir tenant un trophée en argent',
      portraitFallback: 'Coach Classé 2700 en Ligne',
      portraitKicker: 'MENTORAT PRIVÉ NIVEAU GRAND MAÎTRE',
      portraitCaption:
        'Profondeur stratégique, calcul implacable et répertoires d’ouvertures sur mesure.',
    },
    authority: {
      sectionKicker: 'À PROPOS DU COACH',
      heading: 'Pourquoi s’entraîner avec un joueur classé 2700 en ligne',
      bioParagraph1:
        'La plupart des joueurs stagnent non par manque d’efforts, mais parce qu’ils mémorisent des variantes au hasard et résolvent des problèmes isolés sans corriger leur méthode de réflexion. Fort d’une expérience au niveau 2700+ sur des milliers de parties sous pression, je transforme la logique des grands maîtres en réflexes clairs et applicables dès votre prochaine partie.',
      bioParagraph2:
        'Chaque séance s’appuie directement sur votre historique Chess.com et Lichess afin d’identifier vos angles morts de calcul, simplifier vos ouvertures et convertir vos positions tendues en victoires nettes.',
      portraitAlt: 'Portrait studio du coach d’échecs',
      portraitFallback: 'Coach 2700 ELO en Ligne',
      portraitRole: 'Coach Privé en Stratégie & Calcul',
      highlights: [
        { title: 'Session de 60 min', subtitle: 'Cours individuel intensif en direct' },
        { title: 'Zéro théorie inutile', subtitle: 'Basé sur vos propres parties récentes' },
        { title: 'Archives PGN complètes', subtitle: 'Études annotées conservées après cours' },
      ],
      features: [
        {
          number: '01',
          title: 'Maîtrise Tactique & Positionnelle 2700 ELO',
          description:
            'Apprenez comment les joueurs de très haut niveau évaluent les déséquilibres, calculent les variantes forcées et gardent leur sang-froid sous pression.',
          metric: 'Calcul & Intuition',
        },
        {
          number: '02',
          title: 'Diagnostic Approfondi des Parties',
          description:
            'Analyse détaillée de vos parties Chess.com et Lichess pour repérer vos schémas d’erreurs récurrents, votre gestion du temps et vos angles morts.',
          metric: 'Audits Chess.com & Lichess',
        },
        {
          number: '03',
          title: 'Répertoire d’Ouvertures Pratique',
          description:
            'Construisez un répertoire solide et facile à retenir, adapté à votre style naturel, sans devoir mémoriser des lignes d’ordinateur interminables.',
          metric: 'Fichiers PGN sur mesure',
        },
        {
          number: '04',
          title: 'Précision en Finale',
          description:
            'Convertissez de légers avantages et défendez les positions difficiles grâce à une technique éprouvée dans les finales de tours, pièces mineures et pions.',
          metric: 'Technique de conversion',
        },
      ],
    },
    methodology: {
      sectionKicker: 'MÉTHODOLOGIE',
      heading: 'Comment se déroule l’entraînement',
      subheading:
        'Une méthode structurée en 3 étapes conçue pour transformer vos parties en ligne en progression ELO mesurable.',
      steps: [
        {
          step: '01',
          title: 'Évaluation Initiale & Audit de Parties',
          subtitle: 'Diagnostic avant séance',
          description:
            'Avant notre premier cours, j’analyse vos dernières parties rapides et classiques pour évaluer votre précision tactique, vos ouvertures et vos finales.',
        },
        {
          step: '02',
          title: 'Séances Interactives 1-à-1 en Direct',
          subtitle: 'Lichess / Chess.com + Voix & Vidéo',
          description:
            'Travail sur échiquier interactif en temps réel. Vous exprimez vos coups candidats pendant que j’affine votre arbre de calcul et votre jugement positionnel.',
        },
        {
          step: '03',
          title: 'Exercices Ciblés & Suivi WhatsApp',
          subtitle: 'Boucle de progression continue',
          description:
            'Recevez des séries tactiques ciblées, des fichiers PGN annotés et un suivi régulier sur WhatsApp entre chaque séance pour progresser chaque semaine.',
        },
      ],
      showcaseAlt: 'Préparation stratégique hors échiquier du coach',
      showcaseFallback: 'Préparation Ciblée',
      showcaseKicker: 'ADAPTÉ À VOTRE CLASSEMENT',
      showcaseCaption: 'Un programme calibré pour chaque palier',
      selectorTitle: 'Aperçu du programme selon votre classement',
      selectorSubtitle:
        'Sélectionnez votre niveau ELO actuel pour voir nos priorités de travail et repérer le forfait le plus adapté.',
      selectorAria: 'Sélectionnez votre tranche de classement ELO',
      brackets: [
        {
          id: 'beginner',
          label: 'Fondations',
          range: 'Moins de 1000 ELO',
          focusTitle: 'Élimination des Gaffes & Vision de l’Échiquier',
          focusSummary:
            'Ne laissez plus de pièces en prise, instaurez une vérification systématique avant chaque coup et maîtrisez les principes fondamentaux d’ouverture et de mat.',
          deliverables: [
            'Routine de sécurité avant de jouer',
            'Motifs tactiques clés (clouage, fourchette, enfilade)',
            'Répertoire simple et sain sur 1.e4 ou 1.d4',
          ],
        },
        {
          id: 'intermediate',
          label: 'Niveau Club',
          range: '1000–1600 ELO',
          focusTitle: 'Calcul Tactique & Plans de Milieu de Jeu',
          focusSummary:
            'Passez des tactiques en un coup à une stratégie cohérente en milieu de partie, à la lecture des structures de pions et au gain propre des positions gagnantes.',
          deliverables: [
            'Discipline de calcul sur 3 coups candidats',
            'Réfutation des pièges fréquents en ligne',
            'Finales essentielles roi-pions et tours',
          ],
        },
        {
          id: 'advanced',
          label: 'Compétition',
          range: '1600–2100 ELO',
          focusTitle: 'Déséquilibres Positionnels & Profondeur',
          focusSummary:
            'Surclassez les joueurs confirmés grâce à des plans stratégiques profonds, une coordination active des pièces, des sacrifices dynamiques et des finales précises.',
          deliverables: [
            'Répertoire complet Blancs & Noirs en PGN',
            'Analyse des structures complexes de milieu de jeu',
            'Gestion de la pendule en parties à fort enjeu',
          ],
        },
        {
          id: 'master',
          label: 'Niveau Maître',
          range: '2100+ ELO',
          focusTitle: 'Précision Niveau 2700 & Décisions Critiques',
          focusSummary:
            'Supprimez les concessions positionnelles subtiles, affinez des nouveautés d’ouverture de haut niveau et aiguisez votre calcul face aux joueurs titrés.',
          deliverables: [
            'Préparation d’ouverture ciblée par adversaire',
            'Subtilités de finales niveau Grand Maître',
            'Analyse prioritaire sur WhatsApp après tournoi',
          ],
        },
      ],
    },
    packages: {
      sectionKicker: 'FORFAITS DE COACHING',
      heading: 'Choisissez Votre Formule',
      subheading:
        'Commencez par un bilan diagnostique de 60 minutes ou engagez un accompagnement mensuel structuré. Chaque forfait démarre par un échange direct sur WhatsApp.',
      selectedTrackLabel: 'Niveau sélectionné :',
      mostPopularLabel: 'LE PLUS POPULAIRE',
      bestMatchLabel: 'Idéal pour vous',
      selectPlanLabel: 'Choisir ce forfait',
      items: [
        {
          id: 'starter',
          name: 'Bilan Initial',
          cadence: '1 Séance d’Essai · 60 Minutes',
          priceTag: 'DIAGNOSTIC',
          summary:
            'Une séance diagnostique de 60 minutes pour identifier exactement ce qui freine votre classement et repartir avec un plan d’action concret.',
          features: [
            'Séance individuelle en direct de 60 minutes',
            'Audit approfondi de 3 à 5 parties récentes (Chess.com / Lichess)',
            'Identification de vos 3 principales sources d’erreurs',
            'Feuille de route personnalisée sur 30 jours',
          ],
          whatsappPackageName: 'Bilan Initial (1 Séance d’Essai)',
        },
        {
          id: 'growth',
          name: 'Programme Croissance Mensuel',
          cadence: '4 Séances / Mois · Hebdomadaire',
          priceTag: 'COACHING HEBDOMADAIRE',
          badge: 'Le Plus Populaire',
          highlighted: true,
          summary:
            'Un entraînement hebdomadaire régulier en 1-à-1 conçu pour faire progresser durablement votre classement en ligne et en club avec des devoirs ciblés.',
          features: [
            'Quatre séances individuelles en direct de 60 minutes par mois',
            'Analyse complète de vos parties rapides et classiques clés',
            'Exercices tactiques et positionnels personnalisés',
            'Lignes d’ouvertures adaptées avec fichiers PGN annotés',
          ],
          whatsappPackageName: 'Programme Croissance Mensuel (4 Séances / Mois)',
        },
        {
          id: 'intensive',
          name: 'Programme Maîtrise Intensive',
          cadence: '8 Séances / Mois · Bi-hebdomadaire',
          priceTag: 'PARCOURS ACCÉLÉRÉ',
          summary:
            'Un mentorat haute fréquence destiné aux joueurs ambitieux visant une percée rapide de classement, la préparation aux tournois et un répertoire complet.',
          features: [
            'Huit séances individuelles en direct de 60 minutes par mois',
            'Revue prioritaire de vos parties sur WhatsApp entre les cours',
            'Construction complète du répertoire Blancs et Noirs',
            'Drills de finales et simulations de préparation en tournoi',
          ],
          whatsappPackageName: 'Programme Maîtrise Intensive (8 Séances / Mois)',
        },
      ],
    },
    faq: {
      sectionKicker: 'QUESTIONS FRÉQUENTES',
      heading: 'Tout Ce Que Vous Devez Savoir',
      subheading:
        'Des réponses claires sur les plateformes, la planification et le déroulement des séances.',
      items: [
        {
          question: 'Quels niveaux ELO accompagnez-vous ?',
          answer:
            'J’entraîne des joueurs motivés de tous niveaux : des débutants ambitieux sous les 1000 ELO souhaitant bâtir de solides bases tactiques jusqu’aux compétiteurs à 2100+ ELO cherchant à affiner leur compréhension positionnelle et leurs ouvertures.',
        },
        {
          question: 'Quelles plateformes sont utilisées pendant les cours ?',
          answer:
            'Toutes les séances se déroulent en direct sur un échiquier interactif Lichess Study ou Chess.com, accompagné d’un appel audio/vidéo haute qualité via Discord, Zoom ou Google Meet. Vous conservez le lien PGN annoté après chaque leçon.',
        },
        {
          question: 'Comment sont planifiées les séances et quels fuseaux horaires couvrez-vous ?',
          answer:
            'La planification se fait directement sur WhatsApp avec des créneaux flexibles couvrant l’Europe, l’Afrique du Nord, le Moyen-Orient, l’Amérique du Nord et l’Asie. Une fois le forfait choisi, nous fixons des horaires réguliers faciles à ajuster si besoin.',
        },
        {
          question: 'Que se passe-t-il lors de la séance d’essai (Bilan Initial) ?',
          answer:
            'Avant le cours, vous partagez votre pseudo Chess.com ou Lichess. Pendant 60 minutes, nous analysons vos erreurs critiques, testons votre méthode de calcul sur des positions clés et établissons un plan de progression clair.',
        },
        {
          question: 'Ai-je des exercices et un suivi entre les séances ?',
          answer:
            'Oui. Les formules Croissance Mensuelle et Maîtrise Intensive incluent des exercices tactiques, des études de finales et des fichiers d’ouvertures adaptés à vos parties. Les élèves en Maîtrise Intensive bénéficient en plus d’un suivi prioritaire sur WhatsApp.',
        },
      ],
    },
    footer: {
      kicker: 'VOTRE PROCHAIN PALIER ELO',
      heading: 'Ne Jouez Plus Au Hasard. Passez À La Clarté Niveau 2700.',
      subheading:
        'Envoyez-moi votre pseudo Chess.com ou Lichess ainsi que votre objectif ELO sur WhatsApp. Nous planifierons votre première séance sous 24 heures.',
      primaryCta: 'Réserver votre séance sur WhatsApp',
      whatsappDirectLabel: 'WhatsApp & Direct :',
      quickChatAria: 'Discussion rapide sur WhatsApp (+212 771-587686)',
    },
  },

  ar: {
    metaTitle: 'تدريب الشطرنج النخبوي | مدرب بتصنيف 2700 أونلاين',
    nav: {
      brand: 'تدريب الشطرنج النخبوي',
      eloBadge: '2700 ELO',
      about: 'عن المدرب',
      methodology: 'المنهجية',
      packages: 'الباقات',
      faq: 'الأسئلة',
      bookNow: 'احجز الآن',
      whatsappAction: 'تواصل عبر واتساب',
      openMenuAria: 'فتح قائمة التنقل',
      closeMenuAria: 'إغلاق قائمة التنقل',
      languageLabel: 'اختر اللغة',
    },
    hero: {
      trustElo: 'تصنيف +2700 أونلاين',
      trustAnalysis: 'تحليل مباشر 1-على-1',
      trustPlans: 'خطط دراسة مخصصة',
      headlinePrefix: 'أتقن استراتيجية الشطرنج مع مدرب ',
      headlineHighlight: 'بتصنيف 2700 أونلاين',
      headlineSuffix: '',
      subheadline:
        'تدريب فردي مخصص للقضاء على الأخطاء الفادحة، وصقل الحساب التكتيكي، وبناء ذخيرة افتتاحيات قوية تحقق لك الفوز.',
      primaryCta: 'ابدأ تدريبك عبر واتساب',
      secondaryCta: 'استكشف باقات التدريب',
      statRatingLabel: 'أعلى تصنيف',
      statFormatLabel: 'نظام التدريب',
      statFormatValue: 'مباشر فردي 1-على-1',
      statPlatformsLabel: 'المنصات',
      portraitAlt: 'مدرب الشطرنج المصنف 2700 أونلاين ببدلة سوداء فاخرة حاملاً كأس البطولة الفضي',
      portraitFallback: 'مدرب بتصنيف 2700 أونلاين',
      portraitKicker: 'إشراف خاص بمستوى الأساتذة الكبار',
      portraitCaption:
        'عمق استراتيجي، وحساب دقيق تحت الضغط، ومنظومة افتتاحيات مصممة لأسلوبك.',
    },
    authority: {
      sectionKicker: 'عن المدرب',
      heading: 'لماذا تتدرب مع لاعب مصنف 2700 أونلاين',
      bioParagraph1:
        'معظم لاعبي الشطرنج لا يتوقف تطورهم بسبب قلة المجهود، بل لأنهم يحفظون نقلات عشوائية ويحلون ألغازاً منفصلة دون إصلاح طريقة تفكيرهم الحقيقية على الرقعة. من خلال خوضي آلاف المباريات التنافسية في مستوى +2700 أونلاين، أنقل إليك منهجية اتخاذ القرار لدى الأساتذة الكبار في خطوات واضحة تطبقها فوراً في مبارياتك.',
      bioParagraph2:
        'كل حصة تُبنى انطلاقاً من سجل مبارياتك الفعلي على Chess.com و Lichess لتحديد نقاط ضعفك في الحساب، وتبسيط افتتاحياتك، وتحويل المواقف المتكافئة إلى انتصارات حاسمة.',
      portraitAlt: 'صورة مقربة لمدرب الشطرنج',
      portraitFallback: 'مدرب شطرنج بتصنيف 2700',
      portraitRole: 'مدرب خاص للاستراتيجية والحساب التكتيكي',
      highlights: [
        { title: 'جلسة مركزة 60 دقيقة', subtitle: 'تدريب مباشر 1-على-1 على الرقعة' },
        { title: 'بدون حشو نظري', subtitle: 'مبني بالكامل على مبارياتك الأخيرة' },
        { title: 'أرشيف PGN كامل', subtitle: 'ملفات تحليلية مشروحة بعد كل حصة' },
      ],
      features: [
        {
          number: '01',
          title: 'إتقان التكتيك والاستراتيجية بمستوى 2700',
          description:
            'تعلّم كيف يقيّم اللاعبون الكبار اختلالات الرقعة، ويحسبون التفرعات الإجبارية، ويحافظون على هدوئهم تحت ضغط الوقت.',
          metric: 'الحساب والحدس',
        },
        {
          number: '02',
          title: 'تشخيص عميق للمباريات',
          description:
            'مراجعة شاملة لمبارياتك على Chess.com و Lichess لاكتشاف أسباب الأخطاء المتكررة، وتسرب الوقت، والنقاط العمياء في تفكيرك.',
          metric: 'تحليل Chess.com و Lichess',
        },
        {
          number: '03',
          title: 'ذخيرة افتتاحيات عملية',
          description:
            'ابنِ منظومة افتتاحيات متينة وسهلة التذكر تناسب أسلوبك الطبيعي في اللعب، دون الحاجة لحفظ خطوط محركات لا تنتهي.',
          metric: 'ملفات PGN مخصصة',
        },
        {
          number: '04',
          title: 'دقة النهايات الحاسمة',
          description:
            'حوّل الأفضليات البسيطة إلى فوز مضمون ودافع عن المواقف الصعبة بتقنية عملية في نهايات القلاع والقطع الخفيفة والبيادق.',
          metric: 'تقنية الحسم',
        },
      ],
    },
    methodology: {
      sectionKicker: 'المنهجية',
      heading: 'كيف يسير برنامج التدريب',
      subheading:
        'منهج منظم من 3 خطوات مصمم لتحويل مبارياتك اليومية على الإنترنت إلى قفزة ملموسة في تصنيفك.',
      steps: [
        {
          step: '01',
          title: 'التقييم الأولي ومراجعة المباريات',
          subtitle: 'تشخيص ما قبل الحصة',
          description:
            'قبل لقائنا الأول، أقوم بفحص أحدث مبارياتك السريعة والكلاسيكية لقياس دقتك التكتيكية، وأداء الافتتاح، وجودة النهايات.',
        },
        {
          step: '02',
          title: 'جلسات تفاعلية مباشرة 1-على-1',
          subtitle: 'Lichess / Chess.com + صوت وفيديو',
          description:
            'تحليل مباشر على رقعة تفاعلية، حيث تشرح النقلات المرشحة بصوتك بينما أقوم بتصحيح شجرة الحساب والحكم الموقفي لديك.',
        },
        {
          step: '03',
          title: 'تمارين مخصصة ومتابعة عبر واتساب',
          subtitle: 'حلقة تطور مستمرة',
          description:
            'تحصل على مجموعات ألغاز موجهة، وملفات PGN مشروحة للافتتاحيات، ومتابعة مستمرة عبر واتساب بين الجلسات لمضاعفة تقدمك أسبوعياً.',
        },
      ],
      showcaseAlt: 'أسلوب التحضير الذهني والاستراتيجي للمدرب',
      showcaseFallback: 'تحضير استراتيجي مركز',
      showcaseKicker: 'مصمم حسب مستواك',
      showcaseCaption: 'منهج دقيق لكل فئة تصنيفية',
      selectorTitle: 'استعرض تركيز التدريب حسب تصنيفك',
      selectorSubtitle:
        'اختر فئة تصنيفك الحالية لترى ما نركز عليه أولاً، مع ترشيح الباقة الأنسب لك بالأسفل.',
      selectorAria: 'اختر فئة تصنيف الشطرنج الخاصة بك',
      brackets: [
        {
          id: 'beginner',
          label: 'الأساسيات',
          range: 'أقل من 1000 ELO',
          focusTitle: 'تجنب الأخطاء الفادحة ورؤية الرقعة',
          focusSummary:
            'توقف عن ترك القطع مجاناً، وابنِ فحص أمان منضبط قبل كل نقلة مع إتقان مبادئ الافتتاح الأساسية وكش مات الضرورية.',
          deliverables: [
            'قائمة تحقق سريع للأمان قبل النقلة',
            'الأفكار التكتيكية الأساسية (التثبيت، الشوكة، السيخ)',
            'ذخيرة افتتاحية واضحة وبسيطة بـ 1.e4 أو 1.d4',
          ],
        },
        {
          id: 'intermediate',
          label: 'مستوى الأندية',
          range: '1000–1600 ELO',
          focusTitle: 'حدة التكتيك وخطط وسط الدور',
          focusSummary:
            'الانتقال من التكتيك بنقلة واحدة إلى خطط متماسكة في وسط الدور، وفهم هياكل البيادق، وحسم المواقف الرابحة بثقة.',
          deliverables: [
            'انضباط حساب 3 نقلات مرشحة بوضوح',
            'معاقبة الفخاخ والتفرعات الشائعة أونلاين',
            'نهايات الملك والبيادق والقلاع الأساسية',
          ],
        },
        {
          id: 'advanced',
          label: 'المنافسات',
          range: '1600–2100 ELO',
          focusTitle: 'الاختلالات الموقفية وعمق الذخيرة',
          focusSummary:
            'تفوّق على لاعبي الأندية الأقوياء بخطط استراتيجية عميقة، ومناورة فعالة للقطع، وتضحيات ديناميكية، وحساب دقيق في النهايات.',
          deliverables: [
            'ملفات PGN متكاملة بالأبيض والأسود',
            'تحليل هياكل وسط الدور المعقدة',
            'إدارة الساعة في المباريات التنافسية',
          ],
        },
        {
          id: 'master',
          label: 'مسار الأساتذة',
          range: '+2100 ELO',
          focusTitle: 'دقة مستوى 2700 والقرارات الحرجة',
          focusSummary:
            'تخلّص من التنازلات الموقفية الدقيقة، وطوّر تفريعات افتتاحية عالية المستوى، واشحذ الحساب العميق أمام اللاعبين المصنفين.',
          deliverables: [
            'تحضير افتتاحيات موجه حسب الخصم',
            'دقائق النهايات بمستوى الأساتذة الكبار',
            'مراجعة أولوية عبر واتساب بعد مباريات البطولات',
          ],
        },
      ],
    },
    packages: {
      sectionKicker: 'باقات التدريب',
      heading: 'اختر خطة التدريب المناسبة لك',
      subheading:
        'ابدأ بجلسة تشخيصية واحدة لمدة 60 دقيقة أو التزم بمسار إشراف شهري متكامل. تبدأ كل باقة باستشارة مباشرة عبر واتساب.',
      selectedTrackLabel: 'المستوى المختار:',
      mostPopularLabel: 'الأكثر طلباً',
      bestMatchLabel: 'الأنسب لمستواك',
      selectPlanLabel: 'اختر الباقة',
      items: [
        {
          id: 'starter',
          name: 'جلسة التقييم الأولية',
          cadence: 'جلسة تجريبية واحدة · 60 دقيقة',
          priceTag: 'تقييم تشخيصي',
          summary:
            'جلسة تشخيصية مركزة لمدة 60 دقيقة لاكتشاف أسباب توقف تصنيفك والخروج بخريطة طريق واضحة وقابلة للتطبيق.',
          features: [
            'جلسة تدريب فردية مباشرة لمدة 60 دقيقة',
            'تدقيق عميق لـ 3 إلى 5 مباريات حديثة على Chess.com أو Lichess',
            'تحديد أبرز 3 نقاط تسرب وأخطاء متكررة في تفكيرك',
            'خطة تطوير شخصية لرفع التصنيف خلال 30 يوماً',
          ],
          whatsappPackageName: 'جلسة التقييم الأولية (جلسة تجريبية واحدة)',
        },
        {
          id: 'growth',
          name: 'باقة النمو الشهري',
          cadence: '4 جلسات شهرياً · أسبوعياً',
          priceTag: 'تدريب أسبوعي',
          badge: 'الأكثر طلباً',
          highlighted: true,
          summary:
            'تدريب أسبوعي منتظم 1-على-1 مصمم لرفع تصنيفك أونلاين وفي البطولات بشكل منهجي مع تحليل المباريات وتمارين أسبوعية مخصصة.',
          features: [
            'أربع جلسات فردية مباشرة شهرياً (60 دقيقة للجلسة)',
            'مراجعة شاملة لأهم مبارياتك السريعة والكلاسيكية',
            'تمارين تكتيكية وموقفية مخصصة حسب أخطائك',
            'خطوط افتتاحيات مصممة لك مع ملفات PGN مشروحة',
          ],
          whatsappPackageName: 'باقة النمو الشهري (4 جلسات شهرياً)',
        },
        {
          id: 'intensive',
          name: 'باقة الإتقان المكثف',
          cadence: '8 جلسات شهرياً · مرتين أسبوعياً',
          priceTag: 'مسار متسارع',
          summary:
            'إشراف مكثف للاعبين الطموحين الساعين إلى قفزة سريعة في التصنيف، والجاهزية للبطولات، وبناء ذخيرة افتتاحيات متكاملة.',
          features: [
            'ثماني جلسات فردية مباشرة شهرياً (60 دقيقة للجلسة)',
            'مراجعة أولوية لمبارياتك عبر واتساب بين الدروس',
            'بناء كامل ذخيرة الافتتاحيات باللونين الأبيض والأسود',
            'تمارين إتقان النهايات ومحاكاة تحضير البطولات',
          ],
          whatsappPackageName: 'باقة الإتقان المكثف (8 جلسات شهرياً)',
        },
      ],
    },
    faq: {
      sectionKicker: 'الأسئلة الشائعة',
      heading: 'كل ما تحتاج معرفته',
      subheading: 'إجابات واضحة حول المنصات، وجدولة الحصص، وما يحدث داخل الجلسات.',
      items: [
        {
          question: 'ما هي مستويات التصنيف التي تقوم بتدريبها؟',
          answer:
            'أقوم بتدريب اللاعبين الملتزمين من جميع المستويات: من المبتدئين الطموحين تحت 1000 ELO لبناء عادات تكتيكية سليمة، وصولاً إلى لاعبي البطولات +2100 ELO لصقل الفهم الموقفي الدقيق وتحضير الافتتاحيات.',
        },
        {
          question: 'ما هي المنصات المستخدمة في جلسات التدريب المباشر؟',
          answer:
            'تُعقد جميع الحصص الفردية المباشرة عبر رقعة تحليل تفاعلية في Lichess Study أو Chess.com مع تواصل صوتي ومرئي واضح عبر Discord أو Zoom أو Google Meet، وتحتفظ برابط الـ PGN المشروح بعد كل درس.',
        },
        {
          question: 'كيف يتم تنسيق المواعيد وما المناطق الزمنية المدعومة؟',
          answer:
            'يتم تنسيق المواعيد مباشرة عبر واتساب بمرونة تغطي المغرب والعالم العربي وأوروبا وأمريكا الشمالية وآسيا، مع تثبيت مواعيد أسبوعية مريحة وسهولة إعادة الجدولة عند الحاجة.',
        },
        {
          question: 'ماذا يحدث خلال جلسة التقييم الأولية؟',
          answer:
            'قبل الحصة تشاركني حسابك على Chess.com أو Lichess. وخلال 60 دقيقة نحلل أخطاءك الحرجة، ونختبر أسلوب حسابك على مواقف عملية، ونرسم خطة تطوير واضحة تشمل الافتتاح ووسط الدور والنهايات.',
        },
        {
          question: 'هل أحصل على واجبات ومتابعة بين الجلسات؟',
          answer:
            'نعم. تشمل باقتا النمو الشهري والإتقان المكثف تمارين ألغاز منتقاة وتدريبات نهايات وملفات افتتاح مخصصة لمبارياتك، كما يحصل مشتركو باقة الإتقان المكثف على مراجعة أولوية عبر واتساب طوال الأسبوع.',
        },
      ],
    },
    footer: {
      kicker: 'قفزتك القادمة في التصنيف',
      heading: 'توقف عن التخمين. العب بوضوح مستوى 2700.',
      subheading:
        'راسلني مباشرة عبر واتساب مع اسم حسابك على Chess.com أو Lichess وهدفك التصنيفي، وسنحدد موعد جلستك الأولى خلال 24 ساعة.',
      primaryCta: 'احجز جلستك عبر واتساب',
      whatsappDirectLabel: 'واتساب واتصال مباشر:',
      quickChatAria: 'محادثة سريعة عبر واتساب (+212 771-587686)',
    },
  },
};
