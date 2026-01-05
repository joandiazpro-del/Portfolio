// --- 1. DONNÉES DES PROJETS (COMPLET : NAJO + CV) ---
const projectsData = [
    {
        title: "Najo Music Studio",
        desc: "Plateforme de streaming et studio de création musicale interactif (PWA).",
        details: `Le projet le plus ambitieux de mon portfolio. Il s'agit d'une application de type "Spotify + GarageBand" dans le navigateur.
        <br><br>
        <div style="background: rgba(56, 189, 248, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">
            <h5 style="color: #38bdf8; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i data-lucide="key"></i> Identifiants Visiteur :</h5>
            <p style="margin: 0; color: white;">Email : <strong style="color: #f8fafc; font-family: monospace; background: rgba(0,0,0,0.3); padding: 2px 6px; rounded: 4px;">visiteurnajo.pro@gmail.com</strong></p>
            <p style="margin: 5px 0 0 0; color: white;">Mot de passe : <strong style="color: #f8fafc; font-family: monospace; background: rgba(0,0,0,0.3); padding: 2px 6px; rounded: 4px;">voiciunsite</strong></p>
        </div>
        <br>
        L'app gère le mixage audio en temps réel, permet l'enregistrement micro, et fonctionne hors-ligne.`,
        features: [
            "Mixage Audio Multi-Pistes & Enregistrement (Web Audio API)",
            "Backend Firebase complet (Auth, Firestore, Storage)",
            "Mode Hors-Ligne (PWA & Service Workers)",
            "Visualisation audio & Accordeur chromatique intégré"
        ],
        tags: ["React", "Firebase", "Web Audio API", "PWA"],
        icon: "music", 
        color: "linear-gradient(135deg, #8b5cf6, #3b82f6)", 
        links: [
            { text: "Accéder à l'App", url: "#", icon: "external-link" }, // Ajoute le lien Vercel/Netlify ici si tu l'as
            { text: "Voir le code", url: "#", icon: "github" }
        ]
    },
    {
        title: "Site Gestion de Données",
        desc: "Interface web de gestion BDD développée avec Oracle APEX.",
        details: "Projet universitaire de groupe visant à créer une interface ergonomique pour l'exploitation d'une base de données complexe. Le défi était de rendre accessible des requêtes SQL complexes à des utilisateurs finaux.",
        features: [
            "Modélisation BDD (MCD/MLD) relationnelle stricte",
            "Automatisation via scripts PL/SQL (Triggers, Procédures)",
            "Interface responsive et tableaux de bord dynamiques",
            "Gestion fine des droits utilisateurs (ACL)"
        ],
        tags: ["Oracle APEX", "PL/SQL", "Data Management"],
        icon: "database", 
        color: "linear-gradient(135deg, #e63946, #1e293b)",
        links: [
            { text: "Voir le schéma BDD", url: "#", icon: "file-image" }
        ]
    },
    {
        title: "Applications Java (Vente)",
        desc: "Suite logicielle de gestion de stock et vente (Java Swing/FX).",
        details: "Développement de deux applications lourdes interconnectées. Une pour la gestion des stocks (Back-office) et une pour la caisse enregistreuse (Front-office). Gros focus sur la POO et l'architecture logicielle.",
        features: [
            "Architecture MVC (Modèle-Vue-Contrôleur) robuste",
            "Programmation Orientée Objet avancée (Polymorphisme)",
            "Interface Graphique soignée (JavaFX)",
            "Tests unitaires (JUnit) pour la fiabilité"
        ],
        tags: ["Java", "POO", "MVC", "UI/UX"],
        icon: "coffee", 
        color: "linear-gradient(135deg, #ea580c, #fed7aa)",
        links: [
            { text: "Voir sur GitHub", url: "#", icon: "github" }
        ]
    },
    {
        title: "Infrastructure Cloud",
        desc: "Déploiement et administration d'un serveur OwnCloud sur Linux.",
        details: "Projet système consistant à monter un 'Dropbox' privé. De l'installation de l'OS (Debian) à la configuration du serveur web (Apache) et à la sécurisation des accès.",
        features: [
            "Administration Système Linux (Debian)",
            "Configuration Serveur Web (Apache/Nginx) & PHP",
            "Sécurisation (SSL/TLS, Firewall)",
            "Gestion du stockage et des utilisateurs"
        ],
        tags: ["SysAdmin", "Linux", "Réseau", "Sécurité"],
        icon: "server", 
        color: "linear-gradient(135deg, #0f172a, #334155)",
        links: []
    },
    {
        title: "Optimisation Algorithmique",
        desc: "Scripts Python pour la résolution de problèmes mathématiques complexes.",
        details: "Exploration de différentes structures de données et algorithmes pour optimiser le temps d'exécution sur des grands sets de données.",
        features: [
            "Analyse de complexité (Big O notation)",
            "Structures de données avancées (Arbres, Graphes)",
            "Visualisation de données avec Matplotlib",
            "Comparaison de performance empirique"
        ],
        tags: ["Python", "Algo", "Data Science"],
        icon: "terminal", 
        color: "linear-gradient(135deg, #16a34a, #4ade80)",
        links: [
            { text: "Voir le Notebook", url: "#", icon: "file-code" }
        ]
    },
    {
        title: "Atelier Accessibilité",
        desc: "Sensibilisation au handicap visuel dans le numérique (Futurs Proches).",
        details: "Conception et animation d'un atelier immersif où les participants devaient utiliser un ordinateur les yeux bandés, guidés uniquement par un lecteur d'écran. Une expérience humaine forte sur l'importance de l'accessibilité web.",
        features: [
            "Conception pédagogique & Animation de groupe",
            "Maîtrise des outils d'assistance (NVDA, VoiceOver)",
            "Sensibilisation aux normes WCAG",
            "Communication et Empathie"
        ],
        tags: ["Accessibilité", "Humain", "Soft Skills"],
        icon: "eye-off", 
        color: "linear-gradient(135deg, #9333ea, #c084fc)",
        links: []
    }
];

// --- 2. GÉNÉRATION DES PROJETS ---
const container = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');

// Fonction pour créer une carte
const createCard = (project, index) => {
    const tagsHtml = project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('');
    const card = document.createElement('div');
    card.classList.add('card', 'reveal'); // Ajout de la classe reveal pour l'animation
    card.onclick = () => openModal(index);
    
    card.innerHTML = `
        <div class="card-header" style="background: ${project.color}">
            <i data-lucide="${project.icon}"></i>
        </div>
        <div class="card-info">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="tags">${tagsHtml}</div>
        </div>
    `;
    return card;
};

// Injection des cartes
projectsData.forEach((project, index) => {
    container.appendChild(createCard(project, index));
});

// --- 3. LOGIQUE MODALE ---
function openModal(index) {
    const project = projectsData[index];
    const modal = document.getElementById('project-modal');
    
    // Remplissage
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-desc').innerHTML = project.details; // HTML autorisé
    document.getElementById('modal-icon-container').innerHTML = `<i data-lucide="${project.icon}"></i>`;
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
    document.getElementById('modal-features').innerHTML = project.features.map(feat => `<li>${feat}</li>`).join('');
    
    // Boutons
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    
    if (project.links && project.links.length > 0) {
        project.links.forEach(link => {
            linksContainer.innerHTML += `
                <a href="${link.url}" target="_blank" class="btn btn-outline" style="font-size: 0.9rem; padding: 10px 20px;">
                    <i data-lucide="${link.icon}"></i> ${link.text}
                </a>
            `;
        });
    } else {
        linksContainer.innerHTML = `<span style="color: #64748b; font-size: 0.9rem;">Projet interne / Code non public</span>`;
    }

    modal.classList.add('active');
    lucide.createIcons();
}

// Fermeture modale
closeModalBtn.onclick = () => modal.classList.remove('active');
window.onclick = (e) => { 
    if (e.target.classList.contains('modal-backdrop') || e.target == modal) {
        modal.classList.remove('active'); 
    }
};

// --- 4. ANIMATIONS & EFFETS ---
lucide.createIcons();

// Typewriter Effect
const textToType = "Data | Développement | Système";
const typeWriterElement = document.getElementById('typewriter');
let i = 0;
function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

// Scroll Reveal Observer (Apparition au défilement)
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // revealObserver.unobserve(entry.target); // Décommenter pour animer une seule fois
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Lancement au chargement
window.onload = function() {
    typeWriter();
    
    // Initialisation Vanta.js (Effet 3D)
    if (window.VANTA) {
        VANTA.NET({
            el: "#home",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x38bdf8,       // Cyan
            backgroundColor: 0x0f172a, // Slate 900 (Transparent via CSS si besoin, mais ici match le fond)
            points: 10.00,
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
        });
    }
};