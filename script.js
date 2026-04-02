
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
        { slug: "real-estate-app", title: "Plateforme Immobilière", category: "figma", tags: ["Figma", "UI/UX", "Immobilier", "Web App"], shortDesc: "Application web de vente et location de maisons et appartements.", coverImage: "/images/projects/real-estate-app/cover.jpg" },
        { slug: "moov-togo-platform", title: "Plateforme Moov Togo", category: "figma", tags: ["Figma", "UI/UX", "Télécom", "Web App"], shortDesc: "Plateforme de restitution de crédit et gestion de forfaits pour Moov Togo.", coverImage: "/images/projects/moov-togo-platform/cover.jpg" },
        { slug: "agri-tracking-app", title: "Application Agricole", category: "figma", tags: ["Figma", "UI/UX", "Agriculture", "Web App"], shortDesc: "Application web de suivi des cultures, plantations et ventes agricoles.", coverImage: "/images/projects/agri-tracking-app/cover.jpg" },
        { slug: "stock-management-app", title: "Application de Gestion de Stock", category: "figma", tags: ["Figma", "UI/UX", "Gestion", "Web App"], shortDesc: "Application web complète de gestion et suivi de stock en temps réel.", coverImage: "/images/projects/stock-management-app/cover.jpg" },
        { slug: "miss-defitech-vote", title: "Plateforme de Vote Miss DEFITECH", category: "figma", tags: ["Figma", "UI/UX", "Événementiel", "Web App"], shortDesc: "Plateforme web de vote en ligne pour l'élection Miss DEFITECH.", coverImage: "/images/projects/miss-defitech-vote/cover.jpg" },
        { slug: "taxi-mobile-app", title: "Application Mobile TAXI", category: "figma", tags: ["Figma", "UI/UX", "Transport", "Mobile App"], shortDesc: "Application mobile de taxi avec choix du véhicule, suivi du trajet et paiement mobile.", coverImage: "/images/projects/taxi-mobile-app/cover.jpg" },
        { slug: "dtn-event-app", title: "Application DTN – Gestion d'Événements", category: "figma", tags: ["Figma", "UI/UX", "Événementiel", "Mobile App"], shortDesc: "Application mobile de gestion des événements DTN (côté utilisateur et organisateur).", coverImage: "/images/projects/dtn-event-app/cover.jpg" },
        { slug: "projet-secours-app", title: "Projet Secours – Application d'Urgence", category: "figma", tags: ["Figma", "UI/UX", "Urgence", "Web & Mobile App"], shortDesc: "Application d'urgence (médicale, police, panne, incendie, accident) côté user, secouriste et admin web.", coverImage: "/images/projects/projet-secours-app/cover.jpg" },
        { slug: "serigraphie-app", title: "Application Sérigraphie", category: "figma", tags: ["Figma", "UI/UX", "E-commerce", "Mobile App"], shortDesc: "Application mobile de vente de vêtements personnalisés avec paiement mobile et cours de sérigraphie.", coverImage: "/images/projects/serigraphie-app/cover.jpg" },
        { slug: "sotral-togo-app", title: "Application Sotral Togo", category: "figma", tags: ["Figma", "UI/UX", "Transport", "Mobile App"], shortDesc: "Application mobile pour voir l'heure du bus Sotral, suivre le trajet et donner une note.", coverImage: "/images/projects/sotral-togo-app/cover.jpg" },
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
        { slug: "cuisine-app", title: "Application Mobile de Cuisine", category: "figma", tags: ["Figma", "UI/UX", "Lifestyle", "Mobile App"], shortDesc: "Application mobile de recettes de cuisine avec vidéos et ajout de recettes personnalisées.", coverImage: "/images/projects/cuisine-app/cover.jpg" },
        { slug: "colis-tracking-app", title: "Application de Suivi de Colis", category: "figma", tags: ["Figma", "UI/UX", "Logistique", "Web & Mobile App"], shortDesc: "Application web et mobile de suivi de colis avec demandes, commandes, chat et facturation.", coverImage: "/images/projects/colis-tracking-app/cover.jpg" },
        { slug: "formation-digitale-platform", title: "Plateforme de Formation Digitale", category: "figma", tags: ["Figma", "UI/UX", "E-learning", "Web & Mobile App"], shortDesc: "Plateforme web d'e-learning avec cours, planification, communautés, certification et échange avec formateurs.", coverImage: "/images/projects/formation-digitale-platform/cover.jpg" },
        { slug: "supermarket-ecommerce", title: "Plateforme E-commerce Supermarché", category: "figma", tags: ["Figma", "UI/UX", "E-commerce", "Web App"], shortDesc: "Plateforme d'achat en ligne façon supermarché avec panier, paiement et favoris.", coverImage: "/images/projects/supermarket-ecommerce/cover.jpg" },
        { slug: "controle-routier-app", title: "Application Contrôle Routier", category: "figma", tags: ["Figma", "UI/UX", "Sécurité", "Web & Mobile App"], shortDesc: "Suivi du contrôle routier (assurance, permis, scan de plaque) avec gestion des agents côté admin.", coverImage: "/images/projects/controle-routier-app/cover.jpg" },
        { slug: "odoo-bostonsolux", title: "Application Mobile Odoo – BostonSolux", category: "figma", tags: ["Figma", "UI/UX", "ERP", "Mobile App"], shortDesc: "Application mobile Odoo personnalisée pour la gestion interne de BostonSolux.", coverImage: "/images/projects/odoo-bostonsolux/cover.jpg" },
        { slug: "bostonsolux-website", title: "Refonte Site BostonSolux Security", category: "figma", tags: ["Figma", "UI/UX", "Sécurité", "Web App"], shortDesc: "Refonte complète du site web de BostonSolux Security pour une image plus moderne et professionnelle.", coverImage: "/images/projects/bostonsolux-website/cover.jpg" },

        // WORDPRESS
        { slug: "wordpress-gym", title: "Site Web de Gym", category: "wordpress", tags: ["WordPress", "Fitness", "Site Vitrine"], shortDesc: "Site web complet pour une salle de sport avec planning des cours, abonnements et galerie.", coverImage: "/images/projects/wordpress-gym/cover.jpg" },
        { slug: "wordpress-cuisine", title: "Site de Recettes de Cuisine", category: "wordpress", tags: ["WordPress", "Cuisine", "Blog"], shortDesc: "Site blog de recettes de cuisine avec catégories, recherche et partage social.", coverImage: "/images/projects/wordpress-cuisine/cover.jpg" },
        { slug: "wordpress-elearning", title: "Site E-learning", category: "wordpress", tags: ["WordPress", "E-learning", "Formation"], shortDesc: "Plateforme e-learning avec cours en ligne, quiz et certificats de completion.", coverImage: "/images/projects/wordpress-elearning/cover.jpg" },
        { slug: "wordpress-hotel", title: "Site Web d'Hôtel", category: "wordpress", tags: ["WordPress", "Hôtellerie", "WooCommerce", "Réservation"], shortDesc: "Site hôtel avec système de réservation en ligne, galerie des chambres et WooCommerce.", coverImage: "/images/projects/wordpress-hotel/cover.jpg" },
        { slug: "wordpress-clinique", title: "Site Web de Clinique", category: "wordpress", tags: ["WordPress", "Santé", "Site Vitrine"], shortDesc: "Site web de clinique médicale avec présentation des spécialistes, services et prise de rendez-vous.", coverImage: "/images/projects/wordpress-clinique/cover.jpg" },

        // DATA ANALYSE
        { slug: "etl-talend", title: "Projet ETL avec Talend", category: "data", tags: ["Talend", "ETL", "Data Engineering"], shortDesc: "Conception et déploiement d'un pipeline ETL complet avec Talend Open Studio.", coverImage: "/images/projects/etl-talend/cover.jpg" },
        { slug: "fouille-donnees-titanic", title: "Fouille de Données – Dataset Titanic", category: "data", tags: ["Python", "Machine Learning", "Data Science"], shortDesc: "Analyse prédictive sur le dataset Titanic : régression, KNN, Random Forest et matrice de confusion.", coverImage: "/images/projects/fouille-donnees-titanic/cover.jpg" },
        { slug: "datavisualisation-orange", title: "Datavisualisation avec Orange", category: "data", tags: ["Orange", "Visualisation", "Data Mining"], shortDesc: "Analyse et visualisation de données avec l'outil Orange Data Mining.", coverImage: "/images/projects/datavisualisation-orange/cover.jpg" },
        { slug: "qualite-donnees-python", title: "Qualité de Données avec Python", category: "data", tags: ["Python", "Data Quality", "Pandas"], shortDesc: "Analyse et amélioration de la qualité des données avec Python : nettoyage, détection d'anomalies et normalisation.", coverImage: "/images/projects/qualite-donnees-python/cover.jpg" },
        { slug: "entrepot-donnees-powerbi", title: "Entrepôt de Données & PowerBI", category: "data", tags: ["ETL", "PowerBI", "Data Warehouse"], shortDesc: "Conception d'un entrepôt de données avec pipeline ETL et tableaux de bord PowerBI.", coverImage: "/images/projects/entrepot-donnees-powerbi/cover.jpg" },
        { slug: "powerbi-qualite", title: "PowerBI – Qualité & Visualisation", category: "data", tags: ["PowerBI", "Data Visualization", "Reporting"], shortDesc: "Nettoyage, transformation et visualisation avancée des données avec PowerBI.", coverImage: "/images/projects/powerbi-qualite/cover.jpg" },
        { slug: "deploiement-vm-ubuntu", title: "Déploiement Web sur VM Ubuntu", category: "data", tags: ["Linux", "PHP", "HTML", "DevOps"], shortDesc: "Déploiement d'une page HTML/PHP sur une machine virtuelle Ubuntu avec configuration serveur.", coverImage: "/images/projects/deploiement-vm-ubuntu/cover.jpg" },
        { slug: "datascience-dataiku", title: "Data Science & ML avec Dataiku", category: "data", tags: ["Dataiku", "Machine Learning", "Data Science"], shortDesc: "Projet de data science et machine learning avec la plateforme Dataiku DSS.", coverImage: "/images/projects/datascience-dataiku/cover.jpg" },
        { slug: "security-by-design", title: "Sécurité by Design", category: "data", tags: ["Cybersécurité", "STRIPE", "SOP", "CORS"], shortDesc: "Étude et application des principes de sécurité by design : STRIPE, SOP, CORS.", coverImage: "/images/projects/security-by-design/cover.jpg" },

        // DÉVELOPPEMENT WEB
        { slug: "exercices-javascript", title: "Projets JavaScript", category: "dev", tags: ["JavaScript", "DOM", "ES6+", "Frontend"], shortDesc: "Collection d'exercices et mini-projets en JavaScript : manipulation du DOM, APIs, ES6+.", coverImage: "/images/projects/exercices-javascript/cover.jpg" },
        { slug: "exercices-python", title: "Projets Python", category: "dev", tags: ["Python", "Backend", "Scripts"], shortDesc: "Exercices et scripts Python : algorithmique, traitement de fichiers, POO.", coverImage: "/images/projects/exercices-python/cover.jpg" },
        { slug: "exercices-html-css", title: "Projets HTML & CSS", category: "dev", tags: ["HTML", "CSS", "Responsive", "Frontend"], shortDesc: "Intégrations web en HTML/CSS avec designs responsives, animations et Flexbox/Grid.", coverImage: "/images/projects/exercices-html-css/cover.jpg" },
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
        if (!project || !project.details) {
            console.log("Détails non disponibles pour ce projet");
            return;
        }

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <h2 class="text-gradient mb-4" style="font-size: 2rem;">${project.title}</h2>
            <div class="modal-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div class="modal-info">
                    <h3 style="margin-bottom: 1rem; color: var(--primary);">But du projet</h3>
                    <p class="text-muted" style="margin-bottom: 2rem;">${project.details.goal}</p>
                    
                    <h3 style="margin-bottom: 1rem; color: var(--primary);">Charte Graphique</h3>
                    <div class="design-system" style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 1rem;">
                        <p style="margin-bottom: 0.5rem;">Palette de couleurs :</p>
                        <div class="color-dots" style="display: flex; gap: 10px; margin-bottom: 1.5rem;">
                            ${project.details.colors.map(c => `<span class="color-dot" style="background:${c}; width: 30px; height: 30px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2);"></span>`).join('')}
                        </div>
                        <p>Typographie principale : <strong>${project.details.typography}</strong></p>
                    </div>
                </div>
                <div class="modal-media">
                    <h3 style="margin-bottom: 1rem; color: var(--primary);">Aperçu</h3>
                    <img src="${project.coverImage}" alt="Maquette" style="width: 100%; border-radius: 1rem; border: 1px solid var(--border-color);">
                    
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