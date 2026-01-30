// ==================== DONNÉES DE RÉVISION PAR ATA ====================
// Données extraites des notes manuscrites et schémas techniques B777

const revisionData = [
    {
        code: "ATA 23",
        name: "Communications",
        notes: `
            <h4>📡 Systèmes de communication</h4>
            <ul>
                <li><strong>VHF CTR et RH :</strong> Servent pour la data communication
                    <ul>
                        <li>VHF RH → CPM/Comm Droite</li>
                        <li>VHF CTR → CPM/Comm 2 LEFT</li>
                    </ul>
                </li>
                <li><strong>ACARS :</strong> Communique en ARINC 619 via la VHF RH principalement et la VHF CTR</li>
                <li><strong>FDCF et DCNF :</strong> Communiquent entre ATDS via Ethernet</li>
                <li><strong>Communication cabine :</strong> Les équipements cabine communiquent en norme ARINC 628</li>
            </ul>

            <h4>🎧 Audio et contrôle</h4>
            <ul>
                <li><strong>ACP/CI Controller :</strong> Reçoit les données de l'avion de la Left SYS ARINC 629 BUS
                    <ul>
                        <li>1 CSDU (Cab Sys Manag Unit) reçoit les données du RH SYS ARINC 629 BUS</li>
                        <li>Il sert de backup de données des BUS ARINC avec le PA/CI</li>
                        <li>Il gère également les dataload et textes sortis via le CSCP</li>
                    </ul>
                </li>
                <li><strong>ZIIU contrôle 3 colonnes d'OELU</strong></li>
                <li><strong>PA/CI gère l'adresse de Speaker Drive Module :</strong> Un par zone</li>
                <li><strong>OELU :</strong> Pour repérer un OELU, 3 chiffres sont nécessaires :
                    <ul>
                        <li>Numéro de zone</li>
                        <li>Numéro de colonne</li>
                        <li>Numéro de la place dans la colonne (1-4-1-2)</li>
                    </ul>
                </li>
                <li><strong>Pour le SDI7 seulement 2 chiffres car une seule colonne</strong></li>
            </ul>

            <h4>📻 Audio Management Unit</h4>
            <ul>
                <li><strong>Starter Call :</strong> Alerte le cockpit via les portes, contrôlé directement par les ZIIU
                    <ul>
                        <li>2 PLC (Ambient Light Controller) et l'ECE (Cab. Ctrl. P.I.P.)</li>
                    </ul>
                </li>
                <li><strong>PA/CI Controller :</strong> Est alimenté par le Sept Flight Inst BUS
                    <ul>
                        <li>Idem pour ZIIU et SDI7 pour que la porte puisse communiquer en cabine</li>
                    </ul>
                </li>
            </ul>

            <h4>🔊 Radio et navigation</h4>
            <ul>
                <li><strong>CACS (Cabin Air Quality System) :</strong> Possède une mémoire de 20 Qts</li>
                <li><strong>Dans le PA/CI :</strong> 2 calculateurs PA et 2 CI</li>
                <li><strong>Flight Deck :</strong> A la priorité pour le Passenger Address
                    <ul>
                        <li>Est la priorité 2A du PA et commandé par le "Switch Pilot Access" (handset porte 43 et CH+)</li>
                    </ul>
                </li>
                <li><strong>ZCMU (Audio Management Unit) :</strong> Allume les voyants de l'ACP (Audio Control Panel)</li>
            </ul>

            <h4>📡 Communications audio</h4>
            <ul>
                <li><strong>Pour faire un GND crew call :</strong> ODU → PA/CI → PS10 → HORN</li>
                <li><strong>En cas de problème de ventil :</strong> DEUC de delta lop de klaxon sonne</li>
                <li><strong>Voyant vert du RTP :</strong> S'allume quand on contacte la radio d'un autre côté que le RTP (ex: contrôle de la VHF RH avec RTP LH)</li>
                <li><strong>VHF et RTP LH :</strong> Alimenté par Sept Instr FLIGHTBUS</li>
                <li><strong>VHF RH :</strong> 2 cartes à RTP LH contrôlent les portes LH et CTR du VHF transceiver</li>
                <li><strong>RTP RH :</strong> Les portes de la VHF RH</li>
                <li><strong>RTP CTR :</strong> Passée par le RTP LH au RH</li>
                <li><strong>Puissance d'un VHF :</strong> Au mini 25w.6kHz</li>
                <li><strong>VHF = courte fréquence / HF = longue fréquence</strong></li>
            </ul>

            <h4>📶 Systèmes HF et SATCOM</h4>
            <ul>
                <li><strong>HF :</strong> Possède 2 émetteurs récepteurs, mais 1 seule antenne (utilisation possible de seulement HF)
                    <ul>
                        <li>Grâce à donc le coupler qui accouplent l'impédance de l'antenne par rapport à la transmission</li>
                    </ul>
                </li>
                <li><strong>HF Sens sur le RTP :</strong> Est disponible seulement sur les RTP LH and RH (console RTP)</li>
                <li><strong>Coupleurs HF :</strong> Sont pressurisés en atelier</li>
                <li><strong>SELCAL contrôle un décodeur Selcal :</strong> Pour savoir si le code reçu par l'Avco correspond à celui de l'avion
                    <ul>
                        <li>Derrière sur le même rack, le Selcal Coding Switch endans le code</li>
                    </ul>
                </li>
                <li><strong>La VHF, HF et Satcom :</strong> Reçoivent un SELCAL</li>
                <li><strong>Satcom :</strong> Contrôle un SMU, un ZNA/LCP et un Top Mount High Gain Antenna avec oscil intégré
                    <ul>
                        <li>Le BSU (Beam Steering Unit) est contrôlé par le SMU qui reçoit la position actuelle via MAIMS</li>
                        <li>Il peut ensuite diriger l'antenne en direction du satellite le plus proche</li>
                    </ul>
                </li>
                <li><strong>LNA :</strong> Amplifie le signaux reçu par l'antenne et le NTP permet d'émettre et recevoir en même temps</li>
                <li><strong>Satcom :</strong> A 3 canaux, 2 pour la voix et 1 pour la DATA</li>
            </ul>

            <h4>🎙️ CVR et DFDR</h4>
            <ul>
                <li><strong>CVR :</strong> Enregistre les 2 dernières heures
                    <ul>
                        <li>Si il ne reçoit plus de 115 VAC, la Main et OULU Batt l'alimente pendant 10 min en 28 DC</li>
                        <li>Cutoff devant être sur RUN et l'avion en vol</li>
                    </ul>
                </li>
                <li><strong>Reflex ELT :</strong> Comects sur 3 fréquences (121.5 - 243 et 406MHz)</li>
                <li><strong>ELT :</strong> Possède sa propre batterie (Battery Pack)</li>
            </ul>

            <h4>🔌 Interfaces et bus</h4>
            <ul>
                <li><strong>La BUS :</strong> Introduit forme de l'échange de données entre les boîtes (CSDU → PA/CI → ZIIU)</li>
                <li><strong>CSDU :</strong> Pour être en CSCP il faut un claque D&H d'un côté et une mémoire de 85 KI de l'autre</li>
                <li><strong>CACP lui :</strong> A seulement une mémoire de 20 Qts</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 24",
        name: "Electrical Power",
        notes: `
            <h4>⚡ Génération électrique</h4>
            <ul>
                <li><strong>Sources d'alimentation :</strong>
                    <ul>
                        <li>2 Batteries (Main et APU) : 27V/44 A</li>
                        <li>2 IDG : 120 kVA chacun</li>
                        <li>2 Backup Gen : 20 kVA chacun</li>
                        <li>1 APU : 120 kVA</li>
                        <li>1 RAT : 7.5 kVA</li>
                        <li>2 Ext Power : 90 kVA chacun</li>
                    </ul>
                </li>
                <li><strong>Shop fault :</strong> Récupère les codes de panne sur un LRU sélectionné</li>
                <li><strong>PEL :</strong> Affichage normal, non dépatchable</li>
                <li><strong>SVC2 N/O :</strong> N'a pas de PEL car le message indique une condition système</li>
            </ul>

            <h4>🔌 Système ELMS</h4>
            <ul>
                <li><strong>ELMS (Electrical Load Management System) :</strong> Contrôle 7 panneaux
                    <ul>
                        <li>3 power panels qui récupèrent la puissance</li>
                        <li>3 main control panels pour les petites puissances (P110/310/210)</li>
                        <li>1 ground service panel (P320)</li>
                    </ul>
                </li>
                <li><strong>Switch GUS SVE (porte ZH1) :</strong> Alimente le GUS SVC BUS qui permet la recharge des batteries</li>
            </ul>

            <h4>🔋 Distribution et gestion de puissance</h4>
            <ul>
                <li><strong>Ground Handling Bus :</strong> Est alimenté par Ground Handling Bus</li>
                <li><strong>XFR BUS :</strong> Alimenté par R Main AC BUS, et pas l'inverse</li>
                <li><strong>S1 Branch is et Secondaire :</strong> EXT PWR de branchée, alimente Primary et alimente côté droit et Secondary, dès que s'allume le RAT BUS qui alimente le BPCU
                    <ul>
                        <li>Le BPCU ventile alors le courant et autorise la Secondary</li>
                    </ul>
                </li>
                <li><strong>Le BPCU :</strong> Tant sur RAT PWR Primary et Secondary
                    <ul>
                        <li>En cas de Ground Handling Sec EPC, GNS HAN RCY, GNS SVE SEC (P21)</li>
                    </ul>
                </li>
            </ul>

            <h4>🔧 Contrôle et protection</h4>
            <ul>
                <li><strong>L'IDG :</strong> Est contrôlé par la GCCU et l'huile alloue 6/101 9/011</li>
                <li><strong>Le Backup :</strong> Est contrôlé par le Backup Converter: 2 huile en récit et 2 côté auto convertte N/O pour rendre l'huile moins visqueuse et éviter de casser l'entre-ground bearing de charge</li>
                <li><strong>IDU Gen :</strong> Est contrôlé par l'IDU GCU</li>
                <li><strong>Le BPCU :</strong> Van sur le BLY A+EXT PW Contactor, Sec EPC, GNS HAN RCY, GUS SVE SEC (P21)</li>
            </ul>

            <h4>⚙️ Systèmes secondaires</h4>
            <ul>
                <li><strong>Il y a 3 PMG :</strong> Par BUS, 1 excitation de SVE et 2 pour le GG GP3</li>
                <li><strong>Condition pour déscarter l'IDG :</strong> Moteur tournant et présence Curtacfe</li>
                <li><strong>Supplément Cooling Fan :</strong> S'allume pour refroidir le BUS Conv quand BUG GEN alimente les 2 BUS XFR Simultanément</li>
                <li><strong>Le P310 (Standby Power Management Panel) :</strong> Reçoit l'alim de 6 Main RAT et 2 RAT G32</li>
            </ul>

            <h4>🔌 Panneaux de puissance</h4>
            <ul>
                <li><strong>Le PPC (Power Panel Controller) :</strong> Dans P100 et P200 contrôlent les contacteurs (coupe en cas de surintensite - Il peut contrôler jusqu'à 41 CI ici (cas RCY))</li>
                <li><strong>2 STU et 1 CCU :</strong> Dans chaque Power Management Panel (P100,210)</li>
                <li><strong>Le Rectifier → AC en DC / Inverter DC en AC</strong></li>
            </ul>

            <h4>🔋 Batteries et alimentation DC</h4>
            <ul>
                <li><strong>Le STU :</strong> Fait l'interface entre CCU et relay (porte)</li>
                <li><strong>L'ELCU peut servir pour le datastrage de système</strong></li>
                <li><strong>Le CCU :</strong> Reçoit les infos on pneumonique par ARINC 629 et contrôle le PPC</li>
                <li><strong>Le CIO de 210 :</strong> Communiquent ensemble pour savoir quelles sources sont actives</li>
                <li><strong>4 sources → travaillent ensemble</strong></li>
                <li><strong>2 sources → travaillent indépendemment</strong></li>
                <li><strong>P110 :</strong> Delesse a gauche et le 210 à droite</li>
            </ul>

            <h4>⚡ Transformateurs et convertisseurs</h4>
            <ul>
                <li><strong>Système de délestage :</strong> Séquenciel sur la table logique
                    <ul>
                        <li>Configuration = Delestage un gros groupe de charges quand perte génér</li>
                        <li>Rallumage par CCCS petit à petit</li>
                    </ul>
                </li>
                <li><strong>Le Transformer :</strong> Convertit le 115AC en 28 AC. 4 au total dans l'ELMS</li>
                <li><strong>Pour un Autoland :</strong> Recontro du bus alors peut avoir 3 chaînes d'infim qu'il bon de ?
                    <ul>
                        <li>IDG LH alimente élém: crit: gauche</li>
                        <li>IDG RH alimente élém: crit: center</li>
                        <li>BUG GEN RH alimente élém: crit: droit</li>
                    </ul>
                </li>
                <li><strong>SEUL bus en 1è connexion du BUG :</strong> Fait un Nº Break Power Transfert en vol</li>
            </ul>

            <h4>🔋 Gestion RAT et secours</h4>
            <ul>
                <li><strong>Standby Power System (PSY) :</strong> Transforme le DC Batterie en AC pour alimenter avec minimum l'avion</li>
                <li><strong>Plus de jus pendant 15s :</strong> Les 2 XFR BUS = sortie RAT et allumage APU</li>
                <li><strong>BAT CHARGER :</strong> A 30mada dont le mode Transformer/Rectiver pour l'autoload</li>
                <li><strong>Touring :</strong> Down → BAT sur off, Switch ton Rev 201 RAT = alim par batterie en DC et AC via Static Inverter Touring</li>
                <li><strong>PGU (Propeller Governor Unit) :</strong> Peut varier le pas de la RAT</li>
                <li><strong>PSA LH = 3 alim (PA6 + L DC BUS + Hot RAT BUS)</strong></li>
                <li><strong>PSA center = 4 alim (2 PA6 + Hot BAT BUS + CAPT FLIGHT INST BUS)</strong></li>
                <li><strong>PSA RH = 2 alim (PA6 + R DC BUS)</strong></li>
            </ul>
        `,
        schemas: [
            {
                url: "assets/images/ata24/aims-cabinet.jpg",
                caption: "AIMS Cabinet (2) - Schéma des modules et interfaces"
            },
            {
                url: "assets/images/ata24/elms-functional.jpg",
                caption: "ELMS - Functional Description - Panels (24-09-00)"
            },
            {
                url: "assets/images/ata24/electrical-system.jpg",
                caption: "Système électrique - Distribution principale et buses"
            }
        ]
    },
    {
        code: "ATA 21",
        name: "Air Conditioning",
        notes: `
            <h4>❄️ Système de climatisation</h4>
            <ul>
                <li><strong>Pack CLG :</strong> Système de conditionnement d'air pour les zones passagers et cockpit</li>
                <li><strong>Air Cycle Machine :</strong> Compresse et refroidit l'air pour la distribution dans la cabine</li>
                <li><strong>Mix Manifold :</strong> Mélange l'air chaud et froid pour obtenir la température désirée dans chaque zone</li>
                <li><strong>Ram Air :</strong> Air extérieur utilisé pour le refroidissement au sol et en vol</li>
            </ul>

            <h4>🌡️ Contrôle de température</h4>
            <ul>
                <li><strong>Temperature Control System :</strong> Régule la température dans les différentes zones de l'avion</li>
                <li><strong>Zones de contrôle :</strong>
                    <ul>
                        <li>Flight Deck</li>
                        <li>Forward Passenger Zone</li>
                        <li>Mid Passenger Zone</li>
                        <li>Aft Passenger Zone</li>
                        <li>Forward Cargo Zone</li>
                        <li>Aft Cargo Zone</li>
                    </ul>
                </li>
                <li><strong>Conditioned Air Check Valve :</strong> Empêche le retour d'air dans le système</li>
                <li><strong>Water Spray Nozzle :</strong> Pulvérise de l'eau pour augmenter l'efficacité du refroidissement</li>
            </ul>

            <h4>💨 Distribution d'air</h4>
            <ul>
                <li><strong>Conditioned Air to Flight Deck :</strong> Air conditionné spécifiquement pour le cockpit</li>
                <li><strong>Conditioned Air to Passenger Zones :</strong> Distribution vers les différentes zones passagers</li>
                <li><strong>Recirculated Air (Upper Fans, REF) :</strong> Ventilateurs de recirculation pour optimiser l'efficacité</li>
                <li><strong>Mix Manifold (REF) :</strong> Point de mélange principal pour la distribution</li>
            </ul>

            <h4>🔧 Composants techniques</h4>
            <ul>
                <li><strong>Economy Cooling Valve :</strong> Valve de contrôle du refroidissement en mode économique</li>
                <li><strong>Water Collector :</strong> Collecte l'eau de condensation du système</li>
                <li><strong>Bypass Check Valve :</strong> Permet le bypass en cas de défaillance</li>
                <li><strong>Second Stage Turbine Bypass Valve :</strong> Contrôle le débit à travers la turbine</li>
                <li><strong>GND CONN REF :</strong> Connexion au sol pour les systèmes de refroidissement</li>
            </ul>

            <h4>🌀 Air Cycle Machine détails</h4>
            <ul>
                <li><strong>Reheater :</strong> Réchauffe l'air après compression si nécessaire</li>
                <li><strong>Condenser :</strong> Condense l'humidité de l'air comprimé</li>
                <li><strong>Low Limit Valve :</strong> Empêche une température trop basse</li>
                <li><strong>Water Overflow :</strong> Évacuation de l'excès d'eau du système</li>
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
            <h4>🖥️ AIMS (Airplane Information Management System)</h4>
            <ul>
                <li><strong>Modules AIMS Cabinet :</strong>
                    <ul>
                        <li>PCM (M210) - Power Control Module</li>
                        <li>CPM/COMM (M001) - Common Processing Module / Communication</li>
                        <li>CPM/STD (M002) - Common Processing Module / Standard</li>
                        <li>IOM (M003, M004, M008, M009) - Input/Output Module</li>
                        <li>CPM/GG (M010, M011) - Common Processing Module / Generic</li>
                        <li>PCM (M450) - Power Control Module secondaire</li>
                    </ul>
                </li>
            </ul>

            <h4>🔧 Fonctions AIMS</h4>
            <ul>
                <li><strong>Data Conversion Gateway Function :</strong> Convertit les données entre différents formats</li>
                <li><strong>Universal Time Coordinated Function :</strong> Gestion du temps universel coordonné</li>
                <li><strong>Flight Management Computing Function :</strong> Calculs de gestion de vol</li>
                <li><strong>Thrust Management Computing Function :</strong> Gestion de la poussée moteur</li>
                <li><strong>Airplane Condition Monitoring Function :</strong> Surveillance de l'état de l'avion (active en M003 seulement)</li>
            </ul>

            <h4>📊 Systèmes d'affichage</h4>
            <ul>
                <li><strong>EICAS :</strong> Engine Indication and Crew Alerting System</li>
                <li><strong>Primary Display Function :</strong> Affichage principal des informations</li>
                <li><strong>Central Maintenance Computing Function :</strong> Gestion de la maintenance centralisée (active en M003 seulement)</li>
                <li><strong>Digital Flight Data Acquisition Function :</strong> Acquisition des données de vol</li>
                <li><strong>QAR Function :</strong> Quick Access Recorder</li>
                <li><strong>Flight Deck Comm Function :</strong> Communication cockpit</li>
            </ul>

            <h4>🔌 Interfaces et communication</h4>
            <ul>
                <li><strong>Data Communication Management Function :</strong> Gestion des communications de données</li>
                <li><strong>CPM/COMM :</strong> Gère les communications entre systèmes</li>
                <li><strong>CPM/STD :</strong> Fonctions standards du système</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 29",
        name: "Hydraulic Power",
        notes: `
            <h4>💧 Système hydraulique général</h4>
            <ul>
                <li><strong>3 systèmes hydrauliques indépendants :</strong>
                    <ul>
                        <li>Left System (Gauche)</li>
                        <li>Center System (Centre)</li>
                        <li>Right System (Droit)</li>
                    </ul>
                </li>
                <li><strong>Pression de fonctionnement :</strong> 3000 PSI</li>
                <li><strong>Chaque système alimente différents équipements de l'avion</strong></li>
            </ul>

            <h4>🔧 Types de pompes</h4>
            <ul>
                <li><strong>Engine-Driven Pumps (EDP) :</strong> Pompes entraînées par les moteurs, source principale</li>
                <li><strong>Electric Motor-Driven Pumps (EMDP) :</strong> Pompes électriques de secours</li>
                <li><strong>Air-Driven Pump (ADP) :</strong> Pompe entraînée par air (RAT - Ram Air Turbine)</li>
            </ul>

            <h4>⚙️ Composants hydrauliques</h4>
            <ul>
                <li><strong>Réservoirs hydrauliques :</strong> Un par système pour stocker le fluide</li>
                <li><strong>Filtres :</strong> Filtration du fluide hydraulique</li>
                <li><strong>Heat Exchangers :</strong> Refroidissement du fluide hydraulique</li>
                <li><strong>Accumulateurs :</strong> Maintiennent la pression constante</li>
            </ul>

            <h4>🎯 Applications</h4>
            <ul>
                <li><strong>Flight Controls :</strong> Commandes de vol (ailerons, gouverne, spoilers)</li>
                <li><strong>Landing Gear :</strong> Train d'atterrissage et portes</li>
                <li><strong>Brakes :</strong> Système de freinage</li>
                <li><strong>Thrust Reversers :</strong> Inverseurs de poussée</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 32",
        name: "Landing Gear",
        notes: `
            <h4>🛬 Configuration du train d'atterrissage</h4>
            <ul>
                <li><strong>Train avant (Nose Gear) :</strong>
                    <ul>
                        <li>2 roues</li>
                        <li>Direction contrôlée (steering)</li>
                        <li>Pas de freinage</li>
                    </ul>
                </li>
                <li><strong>Train principal gauche (Left Body Gear) :</strong>
                    <ul>
                        <li>6 roues par train</li>
                        <li>Freinage sur toutes les roues</li>
                    </ul>
                </li>
                <li><strong>Train principal droit (Right Body Gear) :</strong>
                    <ul>
                        <li>6 roues par train</li>
                        <li>Freinage sur toutes les roues</li>
                    </ul>
                </li>
                <li><strong>Trains auxiliaires (Wing Gears) :</strong>
                    <ul>
                        <li>4 roues chacun (Left et Right)</li>
                        <li>Répartition de charge supplémentaire</li>
                    </ul>
                </li>
            </ul>

            <h4>🔧 Systèmes associés</h4>
            <ul>
                <li><strong>Système de freinage normal :</strong> Hydraulique, contrôlé par pédales</li>
                <li><strong>Système de freinage d'urgence :</strong> Accumulateurs hydrauliques</li>
                <li><strong>Anti-skid system :</strong> Prévention du blocage des roues</li>
                <li><strong>Autobrake :</strong> Freinage automatique programmable</li>
                <li><strong>Nose wheel steering :</strong> Direction du train avant (haute et basse vitesse)</li>
            </ul>

            <h4>⚙️ Extension et rétraction</h4>
            <ul>
                <li><strong>Extension normale :</strong> Système hydraulique</li>
                <li><strong>Extension d'urgence :</strong> Gravité et verrous mécaniques</li>
                <li><strong>Portes de train :</strong> S'ouvrent avant extension, se referment après</li>
                <li><strong>Séquence automatique :</strong> Gérée par le système de contrôle</li>
            </ul>

            <h4>📊 Indications et alertes</h4>
            <ul>
                <li><strong>Position indicators :</strong> Voyants verts (sorti et verrouillé), pas de voyant (rentré)</li>
                <li><strong>EICAS messages :</strong> Alertes en cas de problème</li>
                <li><strong>Aural warnings :</strong> Alarmes sonores (gear not down for landing)</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 71",
        name: "Powerplant",
        notes: `
            <h4>✈️ Moteurs</h4>
            <ul>
                <li><strong>Type :</strong> Turboréacteurs à double flux (High Bypass Turbofan)</li>
                <li><strong>Nombre :</strong> 2 moteurs</li>
                <li><strong>Options moteurs disponibles :</strong>
                    <ul>
                        <li>GE90 (General Electric)</li>
                        <li>Trent 800 (Rolls-Royce)</li>
                        <li>PW4000 (Pratt & Whitney)</li>
                    </ul>
                </li>
            </ul>

            <h4>🔧 Composants moteur</h4>
            <ul>
                <li><strong>Fan :</strong> Soufflante avant, génère la majorité de la poussée</li>
                <li><strong>Compressor :</strong> Compresseurs basse et haute pression</li>
                <li><strong>Combustion Chamber :</strong> Chambre de combustion</li>
                <li><strong>Turbines :</strong> Turbines haute et basse pression</li>
                <li><strong>Exhaust :</strong> Tuyère d'échappement</li>
            </ul>

            <h4>⚡ Systèmes auxiliaires</h4>
            <ul>
                <li><strong>IDG (Integrated Drive Generator) :</strong> Générateur électrique 120 kVA par moteur</li>
                <li><strong>Hydraulic Pumps :</strong> Pompes hydrauliques entraînées par moteur</li>
                <li><strong>Bleed Air :</strong> Prélèvement d'air comprimé pour systèmes avion</li>
            </ul>

            <h4>🛡️ Protections moteur</h4>
            <ul>
                <li><strong>Fire Detection :</strong> Détection incendie dans nacelle</li>
                <li><strong>Fire Extinguishing :</strong> Système d'extinction incendie</li>
                <li><strong>Overheat Protection :</strong> Protection contre surchauffe</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 34",
        name: "Navigation",
        notes: `
            <h4>🧭 Systèmes de navigation</h4>
            <ul>
                <li><strong>IRS (Inertial Reference System) :</strong> Système de référence inertielle, 3 unités indépendantes</li>
                <li><strong>GPS :</strong> Positionnement par satellite</li>
                <li><strong>FMS (Flight Management System) :</strong> Système de gestion de vol intégré</li>
                <li><strong>ADIRU :</strong> Air Data Inertial Reference Unit</li>
            </ul>

            <h4>📡 Navigation radio</h4>
            <ul>
                <li><strong>VOR/DME :</strong> VHF Omnidirectional Range / Distance Measuring Equipment</li>
                <li><strong>ILS :</strong> Instrument Landing System</li>
                <li><strong>ADF :</strong> Automatic Direction Finder</li>
                <li><strong>Radio Altimeter :</strong> Altimètre radio (hauteur sol)</li>
            </ul>

            <h4>🗺️ Affichage navigation</h4>
            <ul>
                <li><strong>ND (Navigation Display) :</strong> Écran de navigation principal</li>
                <li><strong>CDU (Control Display Unit) :</strong> Interface FMS</li>
                <li><strong>EFIS :</strong> Electronic Flight Instrument System</li>
            </ul>
        `,
        schemas: []
    },
    {
        code: "ATA 49",
        name: "Auxiliary Power Unit (APU)",
        notes: `
            <h4>⚙️ APU - Groupe auxiliaire de puissance</h4>
            <ul>
                <li><strong>Fonction :</strong> Fournit électricité et air comprimé au sol et en vol</li>
                <li><strong>Puissance électrique :</strong> Générateur 120 kVA</li>
                <li><strong>Air comprimé :</strong> Pour démarrage moteurs et climatisation</li>
            </ul>

            <h4>🔋 Systèmes APU</h4>
            <ul>
                <li><strong>Batterie APU :</strong> 27V pour démarrage autonome</li>
                <li><strong>Fuel System :</strong> Alimentation carburant depuis réservoir principal</li>
                <li><strong>Control System :</strong> APUC (APU Controller)</li>
            </ul>

            <h4>🛡️ Protections</h4>
            <ul>
                <li><strong>Fire Detection :</strong> Détection incendie APU</li>
                <li><strong>Fire Extinguishing :</strong> Extinction automatique</li>
                <li><strong>Overspeed Protection :</strong> Protection survitesse</li>
                <li><strong>Overheat Protection :</strong> Protection surchauffe</li>
            </ul>

            <h4>📊 Limitations</h4>
            <ul>
                <li><strong>Altitude max démarrage :</strong> Typiquement 41,000 ft</li>
                <li><strong>Altitude max fonctionnement :</strong> Typiquement 43,000 ft</li>
                <li><strong>APU bleed air :</strong> Disponible jusqu'à certaines altitudes</li>
            </ul>
        `,
        schemas: []
    }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = revisionData;
}
