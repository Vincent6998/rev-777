const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande</h3>
<p>Commande P5 via OPAS puis ARINC 629. 5 fonctions : Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation.</p>

<h3>🎛️ CTC</h3>
<p><strong>2 CTC indépendants.</strong> CTC DX (pack Dx), CTC Gx (pack Gx). Alimentés XFR BUS.</p>
<p><strong>ETOPS :</strong> On ne croise JAMAIS CTC ni ASCPC.</p>
<p><strong>Si CTC défaut :</strong> ASCPC prend relais avec LOWER FLOW CONTROL VALVE. Reset : AIR COND RESET.</p>

<h3>⚙️ ASCPC</h3>
<p><strong>2 ASCPC.</strong> Gx (pack Gx), Dx (pack Dx). Gèrent packs et surveillent T° (Pack Trip).</p>
<p><strong>Pack Flow Schedule :</strong> 0 (pas air) | 1-4 (moins air altitude) | 2 (1 pack) | 4 (maintien pressu)</p>
<p><strong>DISPATCH :</strong> Si recirculating Fan panne → augmente débit pack auto (OK).</p>
<p><strong>✅ INTERCHANGEABLE :</strong> Tous éléments entre pack 1 et 2 SAUF tuyaux.</p>
<p>Arrêt pack sol : attendre 2 min (déshumidification). APU sol : 2 packs en route obligatoire.</p>

<h3>❄️ Pack Flow Control Valves</h3>
<p><strong>4 valves (2 par pack).</strong> UPPER (ouverte basse altitude, fermée 26000 ft) | LOWER (ouverte 26000 ft).</p>
<p><strong>✅ IDENTIQUES INTERCHANGEABLES.</strong> Les 2 ne fonctionnent JAMAIS ensemble.</p>
<p><strong>2 Torque Motors par valve :</strong> 1 CTC, 1 ASCPC. ✅ INTERCHANGEABLES. Si pas alimentés → FULL OPEN.</p>
<p>Fermeture si : Outlet 88°C | Discharge 252°C | Pack Fail | Flow schedule 0</p>

<h3>🌡️ Composants</h3>
<p><strong>Ozone Converter :</strong> O3 en O2 haute altitude. Pas passage moins 26000 ft.</p>
<p><strong>ACM :</strong> 1 compresseur + 2 turbines (T1/T2) + inlet fan. Même arbre.</p>
<p><strong>Low Limit Valve ⟷ Bypass Valve :</strong> ✅ IDENTIQUES INTERCHANGEABLES. Ferme si T° T1 moins 1°C.</p>
<p><strong>DISPATCH :</strong> Si Low Limit HS → remplacer par Bypass.</p>

<h3>🌡️ Températures</h3>
<p>11 sondes (9 CTC + 2 ASCPC). Sortie compresseur : moins 171° (régul) | plus 232° (Pack trip). Sortie pack : CTC 88°C maxi | ASCPC 96°C maxi.</p>

<h3>🌡️ Temperature Control</h3>
<p><strong>CTC Dx :</strong> Zones B-D-F + soute AV | <strong>CTC Gx :</strong> Zones A-C-E + Flight Deck</p>
<p>Rotateurs 18-29° (F/D cabine), 4-27° (soute AV). T° Master env 24°, ajustement plus ou moins 6°.</p>
<p>Protections : 71° gaine → ferme valve | 88° → ferme TRIM AIR PRSOV</p>

<h3>🔧 TAPRSOV</h3>
<p>2 vannes (1 par côté). CTC régule : pression sortie = cabine + 5 PSI (2-8,5 PSI).</p>
<p>Backup ASCPC coupe si : P/B Off | Stall Warning | Pack Flow schedule 4</p>
<p><strong>DISPATCH :</strong> Fail safe CLOSED. OK vanne fermée.</p>

<h3>🌡️ TAMV</h3>
<p><strong>8 valves (1 par zone) + 1 soute AV.</strong> ✅ IDENTIQUES INTERCHANGEABLES.</p>
<p><strong>TAMV poste :</strong> Gérée CTC Gx. Seule commandable manuel. Seule avec synoptic EICAS.</p>

<h3>🌀 Recirculation</h3>
<p><strong>But :</strong> Gagner 50% efficacité packs.</p>
<p><strong>2 FAN Upper :</strong> ✅ IDENTIQUES INTERCHANGEABLES | <strong>2 FAN Lower :</strong> NON identiques.</p>
<p>Reset AIR COND RESET. <strong>DISPATCH :</strong> Si 1 fan panne → OK.</p>

<h3>💨 Ventilation</h3>
<p><strong>Lav/Galley Vent Fan (2) :</strong> Auto. Droit permanent, gauche backup. Soute bulk. Arrêt si ARM CARGO AFT FIRE.</p>

<h3>🔥 Réchauffages</h3>
<p><strong>LLAR :</strong> CTC Gx + ELMS. 2 heaters vol. Pack left via AIR SHUTOFF VALVE (25000 ft).</p>
<p><strong>Soute AR/Bulk :</strong> Air chaud pneumatique. Cargo TEMP SELECT : OFF | LOW (+7°) | HIGH (+21°)</p>
<p><strong>Door :</strong> 1 heater. Seul testable MAT. Vol + 1 pack.</p>

<h3>❄️ Equipment Cooling</h3>
<p>4 modes : FWD cargo A/C | FWD cargo heat | Eqpt cooling smoke | FWD cargo fire</p>

<h3>⚠️ Mode Override</h3>
<p><strong>En vol auto si :</strong> Perte 2 flow sensors | Fumée soute élec | Panne 2 Supply Fan | ARM extinction.</p>
<p>Reset : Switch EQUIP COOLING P5.</p>

<h3>🎈 Pressurisation</h3>
<p><strong>2 ASCPC :</strong> GX Primary, DX Backup. 2 modes : Fixed Rate | Minimum Rate.</p>
<p><strong>Limites :</strong> Cabin Altitude 8500 ft (rouge EICAS). Delta P 8,6 Psi (9,25 Psi rouge).</p>
<p><strong>Positive Relief (2) :</strong> Côté Gx. Régulent 8,95-9,2 Psi. Full open 9,42 Psi. Pas indication, mécaniques.</p>
<p><strong>Negative Relief (4) :</strong> 2 par côté. Ouverture -0,2 Psi, full open -0,5 Psi. Pas indication, mécaniques.</p>
<p><strong>Outflow Valves :</strong> Côté GX (1 avant, 1 arrière). 2 moteurs (1 par ASCPC). Ouverture : 80% AR / 20% AV. Si clim soute AV, feu, ou 1 OFV inop → 50/50.</p>

<h3>🔧 RÉSUMÉ MÉCANICIEN</h3>
<p><strong>INTERCHANGEABLES :</strong> Tous éléments pack sauf tuyaux | Pack Flow Valves | Torque motors | Sondes | TAMV | Recirculating fans upper | Low Limit ⟷ Bypass</p>
<p><strong>DISPATCH :</strong> TAPRSOV fail safe closed OK | Plug dispatch upper | Si upper HS → Bypass | Recirculating fan panne OK | 1 OFV inop 50/50 OK</p>
<p><strong>TESTS :</strong> Tests MAT packs COUPÉS | Test TAMV MAT | Test heater door MAT | Arrêt pack 2 min | Power up test fans</p>
<p><strong>RESET :</strong> AIR COND RESET (CTC, fans, pack) | EQUIP COOLING (override) | Reset MAT (surchauffe) | Reset chillers (fumée OFCR 777-300)</p>
<p><strong>RÈGLES :</strong> APU sol 2 packs obligatoire | Jamais override P5 sol | ARM feu → arrêt ventilation | Flow Control ouverte si pas jus + pneumatique | ETOPS jamais croiser CTC/ASCPC</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/pack-cooling.jpg",
                caption: "Pack Cooling - Système refroidissement"
            },
            {
                url: "assets/images/ata21/equipment-cooling.jpg",
                caption: "Equipment Cooling - Ventilation soute"
            },
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG Mix Manifold"
            }
        ]
    },
  {
        code: "ATA 22",
        name: "Auto Flight",
        notes: `
<h3>🎯 AFDS</h3>
<p><strong>3 calculateurs AFDC :</strong> AFDC Gx, AFDC Central, AFDC Dx (3 softs à charger).</p>
<p><strong>But :</strong> Assistance directeur vol + pilotage automatique.</p>
<p><strong>Après 60 kts :</strong> On ne peut PAS engager AP sol. Interdit phase décollage jusqu'à déjaugeage.</p>
<p>Switchs MCP pour engager directeur vol. Si AP engagé sans FD : mode latéral (cap) + vertical (vario).</p>

<h3>🔧 Engagement AP</h3>
<p><strong>B/P AP Dx ou Gx MCP :</strong> Alimente 3 AFDC connectés BUS Flight Control.</p>
<p>B/P Dx : Référence EFFIS Dx | B/P Gx : Référence EFFIS Gx</p>
<p><strong>TAC :</strong> Dans commandes vol électriques. Agit dérive pour neutraliser dissymétrie.</p>

<h3>🎮 Axes AP</h3>
<p><strong>Phases normales :</strong> 2 axes (ailerons + profondeur)</p>
<p><strong>Décollage/atterrissage :</strong> 3 axes (ailerons + profondeur + direction)</p>

<h3>🔧 Back Drives Actuators</h3>
<p><strong>6 servo-moteurs totaux :</strong> 2 par système (manche, volant, palonniers).</p>
<p>AFDC Gx : 3 servo côté Gx | AFDC Dx : 3 servo côté Dx</p>
<p><strong>Croisière (AFDC Dx) :</strong> 1 servo volant + 1 servo manche actifs (2 en vol)</p>
<p><strong>Approche/Take Off (AFDC Gx + Dx) :</strong> 2 servo volant + 2 servo manche + 2 servo palonniers (6 atterrissage)</p>
<p><strong>Rôle :</strong> Simulent mouvements. NE COMMANDENT PAS gouvernes.</p>
<p>Mise sous tension : AFDC Dx maître. Chaque désengagement AP : basculement autre AFDC.</p>
<p><strong>AP engagé 1500 ft :</strong> 3 calculateurs AFDC → 6 back drives actifs.</p>

<h3>🎛️ Commande Gouvernes</h3>
<p>AP engagé : Commandes agissent surfaces indépendamment affichage. Passage PFC.</p>
<p><strong>AFDC → PFC → ACE → Gouvernes</strong></p>
<p><strong>On ne peut engager AP que si PFC opérationnels.</strong></p>

<h3>🎛️ MCP</h3>
<p><strong>Ne passe PAS par OPAS.</strong> Interface principale : AP | FD | TM | FM</p>
<p><strong>L NAV :</strong> 50 ft | <strong>V NAV :</strong> 400 ft</p>
<p><strong>2 canaux</strong> micro-processeur, alimentation indépendante + 1 contrôleur.</p>
<p>Si 1 canal défaut : Message LANE A ou LANE B FAULT.</p>

<h3>🔧 AFDC</h3>
<p><strong>2 alimentations :</strong> 1 normale | 1 HOT BAT BUS secours (affichage pannes)</p>
<p><strong>3 microprocesseurs</strong></p>
<p><strong>B/P déconnexion AP manche :</strong> Montés série.</p>
<p><strong>Barre blanche MCP :</strong> Coupe alimentation AP + servo-moteurs. Plus protection back angle.</p>

<h3>🔧 Antennes ILS</h3>
<p><strong>Radôme :</strong> Suivi non précis glide | <strong>Portes T AV :</strong> Suivi précis glide</p>
<p><strong>Tests MAT :</strong> Fonctions spéciales ATA 22 (commutation antennes) | Ground test ATA 22 (autres tests)</p>

<h3>⚡ TMCS</h3>
<p><strong>Automanette utilisable toutes phases vol.</strong> Implanté CPM BASIC ou ACMS. Interface MCP.</p>
<p><strong>5 modes :</strong> THR REF (poussée fixe) | THR (variable) | SPEED (vitesse avion) | IDLE (ralenti) | HOLD (désengagement tempo)</p>
<p>Affichage PFD. 2 servo-moteurs (1 par manette). Données ARINC 429 via IOM.</p>
<p><strong>Condition :</strong> Système armé MCP (B/P A/T ARM)</p>
<p>Engagement auto : V NAV ou FLT LEV CHANGE | Engagement manuel : switchs TO/GA (palettes manettes)</p>
<p><strong>Déconnexion :</strong> Switchs côtés boules manettes.</p>
<p><strong>Automanette ne déclenche PAS WARNING.</strong></p>
<p><strong>Tests MAT :</strong> ATA 22 ground tests. AIMS Dx ou Gx → teste 2 servo-moteurs.</p>

<h3>🔧 RÉSUMÉ MÉCANICIEN</h3>
<p><strong>ARCHITECTURE :</strong> 3 AFDC (Gx, Central, Dx) avec 3 softs à charger | Servo-moteurs back drives (même côté uniquement)</p>
<p><strong>DISPATCH :</strong> AP pas engageable sol après 60 kts | PFC opérationnels obligatoire | Automanette pas WARNING si panne | MCP 2 canaux : 1 suffit (LANE A/B FAULT OK)</p>
<p><strong>TESTS :</strong> MAT ATA 22 fonctions spéciales (commutation antennes ILS) | MAT ground tests (AP + Autothrottle 2 servo) | Test depuis AIMS Dx ou Gx</p>
<p><strong>RÈGLES :</strong> B/P déconnexion manche série | Barre blanche MCP coupe AP + servo (plus protection) | 3 AFDC engagés 1500 ft : 6 back drives | Croisière 2 servo | Approche/TO 6 servo</p>
<p><strong>ARCHITECTURE :</strong> AFDC 3 micro + 2 alim (normale + HOT BAT BUS) | MCP 2 canaux micro + 1 contrôleur | Antennes radôme (non précis) portes T AV (précis) | Basculement AFDC chaque désengagement</p>
<p><strong>COMMANDE :</strong> AFDC → PFC → ACE → Gouvernes. Back drives simulent mais ne commandent PAS gouvernes.</p>
        `,
        schemas: [
            {
                url: "assets/images/ata22/afds-system.jpg",
                caption: "AFDS - Autopilot Flight Director System"
            }
        ]
    }
];
