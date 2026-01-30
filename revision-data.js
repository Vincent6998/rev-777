// Données de révision par catégorie ATA
const revisionData = [
    {
        code: "ATA 24",
        name: "Electrical Power",
        notes: `
            <h4>Génération électrique</h4>
            <ul>
                <li><strong>Batteries :</strong>
                    <ul>
                        <li>Main Battery (APU) : 27V</li>
                        <li>2 IDG : 120 kVA</li>
                        <li>2 Backup Gen : 20 kVA</li>
                        <li>1 APU : 120 kVA</li>
                        <li>1 RAT : 7.5 kVA</li>
                        <li>2 Ext Power : 90 kVA</li>
                    </ul>
                </li>
                <li><strong>ELMS (Electrical Load Management System) :</strong>
                    <ul>
                        <li>Contrôle 7 panneaux</li>
                        <li>3 power panels pour récupérer la puissance</li>
                        <li>3 main control panels pour les petites puissances (P110/310/210)</li>
                        <li>1 ground service panel (P320)</li>
                    </ul>
                </li>
                <li><strong>Switch GUS SVE :</strong> Protège 241, permet la recharge des batteries</li>
                <li><strong>Indications :</strong>
                    <ul>
                        <li>PEL (Primary Electrical List) : Affichage normal, non dépatchable</li>
                        <li>Shop fault : Récupération des codes de panne sur un LRU sélectionné</li>
                        <li>MEL (Minimum Equipment List) : Conditions applicables</li>
                        <li>SVC2 N/O : Pas de PEL car le message indique une condition système</li>
                    </ul>
                </li>
            </ul>

            <h4>Distribution électrique</h4>
            <ul>
                <li><strong>Ground Handling Bus :</strong> Alimenté par EXT PWR ou APU</li>
                <li><strong>XFR BUS :</strong> Alimenté par R Main AC BUS, et pas l'inverse</li>
                <li><strong>SB Primary et Secondary :</strong> EXT PWR de branchée, alimente Primary et alimentent le côté droit et la Secondary, dès que ça allume le RAT BUS</li>
                <li><strong>Switch CMS SVE :</strong> Protège 241, permet la recharge des batteries</li>
                <li><strong>BPCU (Backup Power Control Unit) :</strong> A 3 sources d'alimentation :
                    <ul>
                        <li>Right DC BUS</li>
                        <li>BAT BUS Sec 2</li>
                    </ul>
                </li>
            </ul>

            <h4>Power Management</h4>
            <ul>
                <li><strong>No Break Power Transfer (NBPT) :</strong> L'IDG et l'EXT PWR se connectent à la même bus pour permettre un transfert instantané pour éviter les microcoupures lors d'un changement de source électrique</li>
                <li><strong>Backup GEN :</strong> Fait un autostart à chaque démarrage moteur (15sec)</li>
                <li><strong>BPCU (Backup Power Control Unit) :</strong> Ventile le courant reçu et courant secondaire, et alimente la HOT RAT BUS qui alimente le BPCU. Le BPCU ventile alors le courant et autorise la Secondary</li>
                <li><strong>BPCU sources :</strong> Right DC BUS, RAT BUS Sec 2</li>
                <li><strong>Pression d'huile IDG :</strong> En dessous de 40 PSI dans le voyant "Drive" s'allume pour désceller l'IDG</li>
            </ul>
        `,
        schemas: [
            {
                url: "assets/images/ata24/aims-cabinet.jpg",
                caption: "AIMS Cabinet (2) - Schéma des modules"
            },
            {
                url: "assets/images/ata24/elms-functional.jpg",
                caption: "ELMS - Functional Description - Panels (24-09-00)"
            },
            {
                url: "assets/images/ata24/electrical-system.jpg",
                caption: "Système électrique - Distribution principale"
            }
        ]
    },
    {
        code: "ATA 21",
        name: "Air Conditioning",
        notes: `
            <h4>Système de climatisation</h4>
            <ul>
                <li><strong>Pack CLG :</strong> Conditionneur d'air pour les zones passagers et cockpit</li>
                <li><strong>Air Cycle Machine :</strong> Système de refroidissement de l'air</li>
                <li><strong>Mix Manifold :</strong> Mélange l'air chaud et froid pour la température désirée</li>
                <li><strong>Ram Air :</strong> Air extérieur pour refroidissement au sol</li>
            </ul>

            <h4>Contrôle de température</h4>
            <ul>
                <li><strong>Temperature Control System :</strong> Régule la température dans différentes zones</li>
                <li><strong>Zones de contrôle :</strong>
                    <ul>
                        <li>Flight Deck</li>
                        <li>Passenger Zones</li>
                        <li>Forward Cargo Zone</li>
                        <li>Aft Cargo Zone</li>
                    </ul>
                </li>
            </ul>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Air Conditioning - Pack CLG and Mix Manifold Temp Control - Introduction (21-52-00)"
            }
        ]
    },
    {
        code: "ATA 31",
        name: "Indicating & Recording Systems",
        notes: `
            <h4>AIMS (Airplane Information Management System)</h4>
            <ul>
                <li><strong>Fonctions principales :</strong>
                    <ul>
                        <li>Data Conversion Gateway Function</li>
                        <li>Universal Time Coordinated Function</li>
                        <li>Flight Management Computing Function</li>
                        <li>Thrust Management Computing Function</li>
                        <li>Airplane Condition Monitoring Function</li>
                    </ul>
                </li>
                <li><strong>Architecture :</strong>
                    <ul>
                        <li>CPM/COMM (M001)</li>
                        <li>CPM/STD (M002)</li>
                        <li>IOM (M003, M004, M008, M009)</li>
                        <li>CPM/GG (M010, M011)</li>
                        <li>PCM (M210, M450)</li>
                    </ul>
                </li>
            </ul>

            <h4>Systèmes d'affichage</h4>
            <ul>
                <li><strong>EICAS (Engine Indication and Crew Alerting System)</strong></li>
                <li><strong>Primary Display Function</strong></li>
                <li><strong>Digital Flight Data Acquisition Function</strong></li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 29",
        name: "Hydraulic Power",
        notes: `
            <h4>Système hydraulique</h4>
            <ul>
                <li><strong>3 systèmes indépendants :</strong>
                    <ul>
                        <li>Système Left</li>
                        <li>Système Center</li>
                        <li>Système Right</li>
                    </ul>
                </li>
                <li><strong>Pression normale :</strong> 3000 PSI</li>
                <li><strong>Pompes :</strong>
                    <ul>
                        <li>Engine-driven pumps (EDP)</li>
                        <li>Electric motor-driven pumps (EMDP)</li>
                        <li>Air-driven pump (ADP) - RAT</li>
                    </ul>
                </li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 32",
        name: "Landing Gear",
        notes: `
            <h4>Train d'atterrissage</h4>
            <ul>
                <li><strong>Configuration :</strong>
                    <ul>
                        <li>Train avant : 2 roues</li>
                        <li>Train principal : 6 roues par train (Body Gear)</li>
                        <li>Train auxiliaire : 4 roues (Wing Gear)</li>
                    </ul>
                </li>
                <li><strong>Systèmes associés :</strong>
                    <ul>
                        <li>Freinage normal et d'urgence</li>
                        <li>Steering du train avant</li>
                        <li>Extension d'urgence</li>
                    </ul>
                </li>
            </ul>
        `,
        schemas: []
    }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = revisionData;
}
