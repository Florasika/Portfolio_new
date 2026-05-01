
/**
 * 1. GESTION DU THÈME (Exécuté immédiatement)
 */
const applyTheme = (theme) => {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
};

applyTheme(localStorage.getItem('theme'));

/**
 * 2. INITIALISATION GÉNÉRALE
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- MENU MOBILE ---
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- SYNCHRONISATION DU THÈME ---
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            window.dispatchEvent(new Event('storage'));
        });
    });

    window.addEventListener('storage', () => {
        applyTheme(localStorage.getItem('theme'));
    });

    // ==========================================
    // BASE DE DONNÉES DES PROJETS
    // ==========================================
    const projects = [
        // FIGMA
        {
            slug: "banking-app",
            title: "Application Web Bancaire",
            category: "figma",
            tags: ["Figma", "UI/UX", "Finance"],
            shortDesc: "Gestion de transactions et paiements en ligne.",
            coverImage: "images/252shots_so.png",
            details: {
                goal: "Simplifier la gestion financière quotidienne avec une interface intuitive et sécurisée.",
                colors: ["#000000", "#ec4899", "#ffffff"],
                typography: "Inter, sans-serif"
            }
        },
        {
            slug: "real-estate-app", title: "Plateforme Immobilière", category: "figma", tags: ["Figma", "UI/UX", "Immobilier", "Web App"], shortDesc: "Application web de vente et location de maisons et appartements.", coverImage: "images/Rectangle 294.png",
            details: {
                goal: "Une application web qui permet aux utilisateurs de louer et d'achter des maisons et aussi aux propriétaires de publier leurs maisons à louer ou à vendre",
                colors: ["#D46842", "#66433F", "#ffffff", "#000000", "#E9D0BD", "#A77F73"],
                typography: "Arial, Inter, Georgia, Arvo"
            }
        },
        {
            slug: "moov-togo-platform", title: "Plateforme Moov Togo", category: "figma", tags: ["Figma", "UI/UX", "Télécom", "Web App"], shortDesc: "Plateforme de restitution de crédit et gestion de forfaits pour Moov Togo.", coverImage: "images/332shots_so.png",
            details: {
                goal: "Une plateforme web pour la restitution de crédit et la gestion des forfaits de Moov Togo, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#EA6405", "#28B446", "#ffffff", "#000000", "#335E8D", "#518EF8", "#F14336"],
                typography: "Poppins, Inter"
            }
        },
        {
            slug: "agri-tracking-app", title: "Application Agricole", category: "figma", tags: ["Figma", "UI/UX", "Agriculture", "Web App"], shortDesc: "Application web de suivi des cultures, plantations et ventes agricoles.", coverImage: "images/647shots_so.png",
            details: {
                goal: "Une application web de suivi des cultures, plantations et ventes agricoles, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#499205", "#DC0000", "#ffffff", "#000000", "#645900", "#EEC201"],
                typography: "Inter"
            }
        },
        {
            slug: "stock-management-app", title: "Application de Gestion de Stock", category: "figma", tags: ["Figma", "UI/UX", "Gestion", "Web App"], shortDesc: "Application web complète de gestion et suivi de stock en temps réel.", coverImage: "images/233shots_so.png",
            details: {
                goal: "Une application web de gestion de stock d'un mini-market qui permet de suivre les produits en stock, les ventes et les commandes, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#B82C99", "#C1B3B3", "#ffffff", "#000000", "#6C1158", "#F9E3F4", "#8A116F"],
                typography: "Kaisei Decol"
            }
        },
        {
            slug: "miss-defitech-vote", title: "Plateforme de Vote Miss DEFITECH", category: "figma", tags: ["Figma", "UI/UX", "Événementiel", "Web App"], shortDesc: "Plateforme web de vote en ligne pour l'élection Miss DEFITECH.", coverImage: "images/161shots_so.png",
            details: {
                goal: "Une application web de vote en ligne pour l'élection de Miss DEFITECH en 2025, offrant une expérience utilisateur fluide et moderne pour les votants et les organisateurs.",
                colors: ["#499205", "#DC0000", "#ffffff", "#000000", "#645900", "#EEC201"],
                typography: "Montserrat, Georgia,Gelasio, Roboto Serif"
            }
        },
        {
            slug: "taxi-mobile-app", title: "Application Mobile TAXI", category: "figma", tags: ["Figma", "UI/UX", "Transport", "Mobile App"], shortDesc: "Application mobile de taxi avec choix du véhicule, suivi du trajet et paiement mobile.", coverImage: "images/674shots_so.png",
            details: {
                goal: "Une application mobile qui permet de commander un taxi, de choisir le type de véhicule, de suivre le trajet en temps réel et de payer via mobile, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#2563EB", "#8F8F8F", "#ffffff", "#000000", "#F14336"],
                typography: "Segoe UI, Lato"
            }
        },
        {
            slug: "dtn-event-app", title: "Application DTN – Gestion d'Événements", category: "figma", tags: ["Figma", "UI/UX", "Événementiel", "Mobile App"], shortDesc: "Application mobile de gestion des événements DTN (côté utilisateur et organisateur).", coverImage: "images/841shots_so.png",
            details: {
                goal: "Une application mobile qui permet de voir les évènements de mettre sur son agenda, de voir les détails de l'évènements et de consulter le profil de celui qui organise l'évènement.",
                colors: ["#F0997A", "#BA68C8", "#ffffff", "#000000", "#263238", "#37474F"],
                typography: "Georgia, Inter, Roboto Serif, Roboto"
            }
        },
        {
            slug: "projet-secours-app", title: "Projet Secours – Application d'Urgence", category: "figma", tags: ["Figma", "UI/UX", "Urgence", "Web & Mobile App"], shortDesc: "Application d'urgence (médicale, police, panne, incendie, accident) côté user, secouriste et admin web.", coverImage: "images/990shots_so.png",
            details: {
                goal: "Une application mobile qui permet de contacter les secours en cas d'urgence (médicale, police, panne, incendie, accident) avec géolocalisation, chat et gestion côté secouriste et administrateur web.",
                colors: ["#1976D2", "#828282", "#ffffff", "#000000", "#BF0202", "#FF7900", "#00C22A"],
                typography: "Inter"
            }
        },
        {
            slug: "serigraphie-app", title: "Application Sérigraphie", category: "figma", tags: ["Figma", "UI/UX", "E-commerce", "Mobile App"], shortDesc: "Application mobile de vente de vêtements personnalisés avec paiement mobile et cours de sérigraphie.", coverImage: "images/757shots_so.png",
            details: {
                goal: "Une application mobile qui permet d'acheter des vêtements personnalisés avec paiement mobile et de suivre des cours de sérigraphie, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#CBB26A", "#D9D9D9", "#ffffff", "#000000", "#41A4F3"],
                typography: "Inter, Roboto, Georgia"
            }
        },
        {
            slug: "sotral-togo-app", title: "Application Sotral Togo", category: "figma", tags: ["Figma", "UI/UX", "Transport", "Mobile App"], shortDesc: "Application mobile pour voir l'heure du bus Sotral, suivre le trajet et donner une note.", coverImage: "images/689shots_so.png",
            details: {
                goal: "Une application mobile qui permet de voir l'heure du bus Sotral, de voir les stations aux alentours, d'obtenir son ticket et de suivre le trajet en temps réel, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#3EC3FF", "#D73028", "#ffffff", "#000000", "#7976FB", "#18A900"],
                typography: "Inter,Poppins"
            }
        },
        {
            slug: "cinema-app",
            title: "Application Cinéma",
            category: "figma",
            tags: ["Figma", "UI/UX", "Divertissement", "Web & Mobile App"],
            shortDesc: "Application web et mobile de cinéma avec sélection de siège, paiement mobile et gestion côté administrateur.",
            coverImage: "images/Rectangle 64.png",
            details: {
                goal: "Une application web et mobile de cinéma qui permet aux utilisateurs de voir les films et évènements qui sortent, de sélectionner leurs sièges, de payer et d'avoir leur ticket",
                colors: ["#071348", "#E61E26", "#ffffff", "#000000", "#F8C049"],
                typography: "Poppins, Roboto Serif, Georgia, Lalezar"
            }
        },
        {
            slug: "cuisine-app", title: "Application Mobile de Cuisine", category: "figma", tags: ["Figma", "UI/UX", "Lifestyle", "Mobile App"], shortDesc: "Application mobile de recettes de cuisine avec vidéos et ajout de recettes personnalisées.", coverImage: "images/301shots_so.png",
            details: {
                goal: "Une application mobile qui permet de voir des recettes de cuisine avec des vidéos, de suivre les étapes de préparation et d'ajouter ses propres recettes personnalisées, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#EA4799", "#DDDDDD", "#ffffff", "#000000", "#681239", "#E32180"],
                typography: "Baloo2, Quicksand"
            }
        },
        {
            slug: "colis-tracking-app", title: "Application de Suivi de Colis", category: "figma", tags: ["Figma", "UI/UX", "Logistique", "Web & Mobile App"], shortDesc: "Application web et mobile de suivi de colis avec demandes, commandes, chat et facturation.", coverImage: "images/345shots_so.png",
            details: {
                goal: "Une application web qui permet de suivre les colis, de faire des demandes de livraison, de passer des commandes, d'avoir un chat pour communiquer avec le livreur et d'avoir une facturation claire, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#FC624D", "#99406C", "#ffffff", "#000000", "#18587A", "#543F3C", "#FCA7A7"],
                typography: "Inter"
            }
        },
        {
            slug: "formation-digitale-platform", title: "Plateforme de Formation Digitale", category: "figma", tags: ["Figma", "UI/UX", "E-learning", "Web & Mobile App"], shortDesc: "Plateforme web d'e-learning avec cours, planification, communautés, certification et échange avec formateurs.", coverImage: "images/126shots_so.png",
            details: {
                goal: "Une application web qui permet de suivre des cours en ligne, de planifier ses sessions d'apprentissage, de rejoindre des communautés d'apprenants, d'obtenir des certifications et d'échanger avec les formateurs, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#FF3D00", "#4042E2", "#ffffff", "#000000", "#00FFAB", "#5F27CD"],
                typography: "Poppins, Roboto"
            }
        },
        {
            slug: "supermarket-ecommerce", title: "Plateforme E-commerce Supermarché", category: "figma", tags: ["Figma", "UI/UX", "E-commerce", "Web App"], shortDesc: "Plateforme d'achat en ligne façon supermarché avec panier, paiement et favoris.", coverImage: "images/920shots_so.png",
            details: {
                goal: "Une application web qui permet de faire ses courses en ligne façon supermarché, avec un panier d'achat, un système de paiement sécurisé et une fonctionnalité de favoris pour les produits, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#E3D399", "#BBCB8C", "#ffffff", "#000000", "#C44862", "#47BC4C", "#F6A578"],
                typography: "Inter, Roboto Serif, Inika, Poppins"
            }
        },
        {
            slug: "controle-routier-app", title: "Application Contrôle Routier", category: "figma", tags: ["Figma", "UI/UX", "Sécurité", "Web & Mobile App"], shortDesc: "Suivi du contrôle routier (assurance, permis, scan de plaque) avec gestion des agents côté admin.", coverImage: "images/551shots_so.png",
            details: {
                goal: "Une application mobile qui permet de suivre le contrôle routier, de vérifier l'assurance et le permis de conduire, de scanner les plaques d'immatriculation et d'avoir une gestion des agents côté administrateur web, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#E09A2A", "#030778", "#ffffff", "#000000", "#2668C2", "#FFD084"],
                typography: "Inter, Georama, Georgia, Roboto"
            }
        },
        {
            slug: "odoo-bostonsolux", title: "Application Mobile Odoo – BostonSolux", category: "figma", tags: ["Figma", "UI/UX", "ERP", "Mobile App"], shortDesc: "Application mobile Odoo personnalisée pour la gestion interne de BostonSolux.", coverImage: "images/474shots_so.png",
            details: {
                goal: "Une application mobile Odoo personnalisée pour la gestion interne de BostonSolux, offrant une expérience utilisateur fluide et moderne pour les employés et les administrateurs.",
                colors: ["#991B1F", "#5E5E5E", "#ffffff", "#000000", "#D9D9D9"],
                typography: "Inter, Manrope"
            }
        },
        {
            slug: "bostonsolux-website", title: "Refonte Site BostonSolux Security", category: "figma", tags: ["Figma", "UI/UX", "Sécurité", "Web App"], shortDesc: "Refonte complète du site web de BostonSolux Security pour une image plus moderne et professionnelle.", coverImage: "images/317shots_so.png",
            details: {
                goal: "Une application web qui permet de refonte complète du site web de BostonSolux Security pour une image plus moderne et professionnelle, offrant une expérience utilisateur fluide et moderne.",
                colors: ["#9C1D1E", "#053076", "#ffffff", "#000000", "#18587A", "#0076B2", "#1D9BF0"],
                typography: "Roboto, Georgia"
            }
        },

        // WORDPRESS
        {
            slug: "wordpress-gym", title: "Site Web de Gym", category: "wordpress", tags: ["WordPress", "Fitness", "Site Vitrine"], shortDesc: "Site web complet pour une salle de sport avec planning des cours, abonnements et galerie.", coverImage: "images/gym.png",
            details: {
                goal: "Un site web complet pour une salle de sport qui présente les différentes activités proposées, le planning des cours, les tarifs d'abonnement et une galerie de photos, offrant une expérience utilisateur fluide et moderne.",
                theme: "Royal Elementor Kit",
                plugins: ["Elementor", "Polylang", "Contact Form 7"]
            }
        },
        {
            slug: "wordpress-cuisine", title: "Site de Recettes de Cuisine", category: "wordpress", tags: ["WordPress", "Cuisine", "Blog"], shortDesc: "Site blog de recettes de cuisine avec catégories, recherche et partage social.", coverImage: "images/cook.png",
            details: {
                goal: "Un site web qui présente différents variétés de cuisines (cake, patisserie, cuisine africaine, etc.) avec des recettes détaillées, une fonctionnalité de recherche et de partage sur les réseaux sociaux, offrant une expérience utilisateur fluide et moderne.",
                theme: "Blocksy",
                plugins: ["Elementor", "Kadence Blocks", "UAE"]
            }
        },
        {
            slug: "wordpress-elearning", title: "Site E-learning", category: "wordpress", tags: ["WordPress", "E-learning", "Formation"], shortDesc: "Plateforme e-learning avec cours en ligne, quiz et certificats de completion.", coverImage: "images/learning.png",
            details: {
                goal: "Un site web complet pour une plateforme e-learning qui propose des cours en ligne, des quiz interactifs et des certificats de completion pour les apprenants, offrant une expérience utilisateur fluide et moderne.",
                theme: "University Institute",
                plugins: ["Elementor", "LearnPress", "WPForm Lite"]
            }
        },
        {
            slug: "wordpress-hotel", title: "Site Web d'Hôtel", category: "wordpress", tags: ["WordPress", "Hôtellerie", "WooCommerce", "Réservation"], shortDesc: "Site hôtel avec système de réservation en ligne, galerie des chambres et WooCommerce.", coverImage: "images/hotel.png",
            details: {
                goal: "Un site web complet pour un hôtel qui présente les différentes chambres disponibles, une galerie de photos, un système de réservation en ligne et une boutique WooCommerce pour les services additionnels, offrant une expérience utilisateur fluide et moderne.",
                theme: "Blocksy",
                plugins: ["Elementor", "Woocommerce", "WPForm"]
            }
        },
        {
            slug: "wordpress-clinique", title: "Site Web de Clinique", category: "wordpress", tags: ["WordPress", "Santé", "Site Vitrine"], shortDesc: "Site web de clinique médicale avec présentation des spécialistes, services et prise de rendez-vous.", coverImage: "images/clinique.png",
            details: {
                goal: "Un site web complet pour une clinique médicale qui présente les différents spécialistes, les services proposés, une galerie de photos et un système de prise de rendez-vous en ligne, offrant une expérience utilisateur fluide et moderne.",
                theme: "Legacy Medical Appointment",
                plugins: ["Elementor", "Bookly", "WPForms Lite"]
            }
        },

        // DATA ANALYSE
        { slug: "etl-talend", title: "Projet ETL avec Talend", category: "data", tags: ["Talend", "ETL", "Data Engineering"], shortDesc: "Conception et déploiement d'un pipeline ETL complet avec Talend Open Studio.", coverImage: "/images/projects/etl-talend/cover.jpg" },
        { slug: "fouille-donnees-titanic", title: "Fouille de Données – Dataset Titanic", category: "data", tags: ["Python", "Machine Learning", "Data Science"], shortDesc: "Analyse prédictive sur le dataset Titanic : régression, KNN, Random Forest et matrice de confusion.", coverImage: "/images/projects/fouille-donnees-titanic/cover.jpg" },
        { slug: "datavisualisation-orange", title: "Datavisualisation avec Orange", category: "data", tags: ["Orange", "Visualisation", "Data Mining"], shortDesc: "Analyse et visualisation de données avec l'outil Orange Data Mining.", coverImage: "/images/projects/datavisualisation-orange/cover.jpg" },
        { slug: "entrepot-donnees-powerbi", title: "Entrepôt de Données & PowerBI", category: "data", tags: ["ETL", "PowerBI", "Data Warehouse"], shortDesc: "Conception d'un entrepôt de données avec pipeline ETL et tableaux de bord PowerBI.", coverImage: "/images/projects/entrepot-donnees-powerbi/cover.jpg" },
        { slug: "powerbi-qualite", title: "PowerBI – Qualité & Visualisation", category: "data", tags: ["PowerBI", "Data Visualization", "Reporting"], shortDesc: "Nettoyage, transformation et visualisation avancée des données avec PowerBI.", coverImage: "/images/projects/powerbi-qualite/cover.jpg" },

        // DÉVELOPPEMENT WEB
        {
            slug: "exercices-javascript", title: "Projets JavaScript", category: "dev", tags: ["JavaScript", "DOM", "ES6+", "Frontend"], shortDesc: "Collection d'exercices et mini-projets en JavaScript : manipulation du DOM, APIs, ES6+.", coverImage: "images/JS.png",
            details: {
                goal: "Pratiquer les concepts avancés du JavaScript moderne à travers des cas concrets.",
                githubLink: "https://github.com/Florasika/JS_exo.git"
            }
        },
        { slug: "exercices-python", title: "Projets Python", category: "dev", tags: ["Python", "Backend", "Scripts"], shortDesc: "Exercices et scripts Python : algorithmique, traitement de fichiers, POO.", coverImage: "images/py.png",
            details: {
                goal: "Pratiquer les concepts avancés du Python à travers des cas concrets.",
                githubLink: "https://github.com/Florasika/Mini_exo_python.git"
            }
        },
        { slug: "Flow Generate", title: "Flow Generate", category: "dev", tags: ["Node JS", "React JS", "Scripts"], shortDesc: "Application web de génération de facture, de dévis, et de CV.", coverImage: "images/Facture.png",
            details: {
                goal: "Application web de génération de facture, de dévis, et de CV. Une application qui génère une lettre de motivation en fonction de votre CV et où vous pouvez faire le suivi de vos candidatures.",
                Link: "https://facture.flowkraftagency.com/"
            }
        },
        { slug: "exercices-reactjs", title: "Projets React JS", category: "dev", tags: ["React", "JavaScript", "Frontend", "Hooks"], shortDesc: "Applications React avec hooks, gestion d'état, composants réutilisables et appels API.", coverImage: "/images/projects/exercices-reactjs/cover.jpg" },
        { slug: "exercices-mongodb", title: "Projets MongoDB", category: "dev", tags: ["MongoDB", "NoSQL", "Node.js", "Backend"], shortDesc: "Exercices MongoDB : modélisation de données, requêtes CRUD, agrégation et index.", coverImage: "/images/projects/exercices-mongodb/cover.jpg" },
        { slug: "exercices-sql", title: "Projets SQL", category: "dev", tags: ["SQL", "MySQL", "PostgreSQL", "Base de données"], shortDesc: "Exercices SQL : modélisation relationnelle, requêtes complexes, jointures et procédures stockées.", coverImage: "/images/projects/exercices-sql/cover.jpg" }
    ];

    // ==========================================
    // MODALE DE DÉTAILS
    // ==========================================
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    function openProjectDetails(slug) {
        const project = projects.find(p => p.slug === slug);
        if (!project || !project.details) return;

        const isWordPress = project.category === 'wordpress';
        const isDev = project.category === 'dev';

        let designBlock = '';

        if (isWordPress) {
            const pluginsHTML = project.details.plugins
                .map(p => `<span class="modal-plugin-tag">${p}</span>`)
                .join('');
            designBlock = `
            <h3 class="modal-section-title">Stack Technique</h3>
            <div class="modal-design-block">
                <p style="margin-bottom: 0.75rem;">Thème : <strong>${project.details.theme}</strong></p>
                <p style="margin-bottom: 0.5rem;">Plugins :</p>
                <div class="modal-plugins">${pluginsHTML}</div>
            </div>`;

        } else if (isDev) {
            designBlock = `
            <h3 class="modal-section-title">Code Source</h3>
            <div class="modal-design-block">
                <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    Le code source de ce projet est disponible sur GitHub.
                </p>
                <a href="${project.details.githubLink}" target="_blank" rel="noopener noreferrer"
                    class="modal-github-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                            0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                            -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                            .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                            -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                            c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                            0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                            0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Voir sur GitHub
                </a>
            </div>`;

        } else {
            const dotsHTML = project.details.colors
                .map(c => `<span class="color-dot" style="background:${c};"></span>`)
                .join('');
            designBlock = `
            <h3 class="modal-section-title">Charte Graphique</h3>
            <div class="modal-design-block">
                <p style="margin-bottom: 0.5rem;">Palette de couleurs :</p>
                <div class="modal-color-dots">${dotsHTML}</div>
                <p>Typographie principale : <strong>${project.details.typography}</strong></p>
            </div>`;
        }

        document.getElementById('modal-body').innerHTML = `
        <h2 class="text-gradient modal-title">${project.title}</h2>
        <div class="modal-grid">
            <div class="modal-info">
                <h3 class="modal-section-title">But du projet</h3>
                <p class="modal-goal">${project.details.goal}</p>
                ${designBlock}
            </div>
            <div class="modal-media">
                <h3 class="modal-section-title">Aperçu</h3>
                <img src="${project.coverImage}" alt="Maquette" class="modal-preview-img">
            </div>
        </div>
    `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // ==========================================
    // GÉNÉRATION DES CARTES PORTFOLIO
    // ==========================================
    function renderProjects(projectsArray, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        projectsArray.forEach(project => {
            const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const card = document.createElement('div');
            card.className = 'card project-card';
            card.style.cursor = project.details ? 'pointer' : 'default';

            card.innerHTML = `
                <div class="project-cover" style="background-image: url('${project.coverImage}');"></div>
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3>${project.title}</h3>
                    <p>${project.shortDesc}</p>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                </div>
            `;

            // AU CLIC : Ouvre la modale si les détails existent
            if (project.details) {
                card.addEventListener('click', () => openProjectDetails(project.slug));
            }

            container.appendChild(card);
        });
    }

    // Rendu initial
    const homeGrid = document.getElementById('portfolio-grid-home');
    const fullGrid = document.getElementById('portfolio-grid-full');

    if (homeGrid) {
        const topProjects = [
            projects.find(p => p.slug === "banking-app"),
            projects.find(p => p.slug === "moov-togo-platform"),
            projects.find(p => p.slug === "etl-talend")
        ].filter(p => p);
        renderProjects(topProjects, 'portfolio-grid-home');
    }

    if (fullGrid) {
        renderProjects(projects, 'portfolio-grid-full');
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');
                const filtered = filterValue === 'all' ? projects : projects.filter(p => p.category === filterValue);
                renderProjects(filtered, 'portfolio-grid-full');
            });
        });

    }


    // À l'intérieur de projectsArray.forEach dans renderProjects :
    if (project.details) {
        card.style.cursor = 'pointer'; // Indique que c'est cliquable
        card.addEventListener('click', () => {
            console.log("Clic détecté sur :", project.slug); // Pour vérifier dans la console (F12)
            openProjectDetails(project.slug);
        });
    }

    // --- ACCORDEON FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (btn) {
            btn.addEventListener('click', () => {
                faqItems.forEach(i => i !== item && i.classList.remove('active'));
                item.classList.toggle('active');
            });
        }
    });
});