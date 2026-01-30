// ==================== DONNÉES DE RÉVISION PAR ATA ====================
// Source : PDFs de révision Boeing 777

const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
            <h3>📋 Commande et Contrôle</h3>
            <p>Commande en P5 via OPAS puis ARINC 629. 5 fonctions : Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation.</p>

            <h3>🎛️ CTC (Cabin Temperature Controllers)</h3>
            <p>2 CTC indépendants (DX et GX). On ne croise jamais les CTC ni les ASCPC (ETOPS). Alimentés par XFR BUS, action analogique sur les packs.</p>
            <p><strong>Mode dégradé :</strong> Si CTC défaut → ASCPC prend le relais avec LOWER FLOW CONTROL VALVE. Reset : AIR COND RESET.</p>

            <h3>⚙️ ASCPC (Air Supply Cabin Pressure Control)</h3>
            <p>Gèrent les packs et surveillent température (Pack Trip). Calculent le Pack Flow Schedule (0 à 4) selon Pax et altitude.</p>
            <p><strong>Backup CTC :</strong> 3 signaux (Digital, Analogique, Pneumatique). Backup si 2 canaux CTC HS.</p>
            <p><strong>Important :</strong> Éléments interchangeables sauf tuyaux. Attendre 2 min pour déshumidifier à l'arrêt. APU au sol = 2 packs en route.</p>

            <h3>🔧 ECSMC (Environmental Control System Miscellaneous Cards)</h3>
            <p>2 cartes (P85/P84). DX primaire, GX backup. Gèrent : distribution, équipement cooling, cargo heating, supplemental heating.</p>

            <h3>❄️ Pack Flow Control Valves (4 valves - 2 par pack)</h3>
            <p>Régulent débit d'air vers pack. Identiques, interchangeables. Commandées par CTC, backup ASCPC.</p>
            <p><strong>UPPER :</strong> Ouverte basse altitude, fermée à 26000 ft</p>
            <p><strong>LOWER :</strong> Ouverte à partir 26000 ft, passage air dans Ozone converter</p>
            <p><strong>Règle :</strong> Les 2 ne fonctionnent jamais ensemble. Voyant pack OFF si 2 vannes fermées.</p>
            <p><strong>2 Torque Motors par valve :</strong> 1 CTC (régul position), 1 ASCPC (backup). Si pas alimentés → vannes OPEN.</p>
            <p><strong>Fermeture si :</strong> Outlet overheat 88°C, discharge overheat 252°C, Pack Fail, flow schedule 0.</p>

            <h3>🌡️ Composants Pack</h3>
            <p><strong>Ozone Converter :</strong> Transforme O3 en O2 haute altitude. Pas de passage < 26000 ft.</p>
            <p><strong>RAM Inlet Door :</strong> Ouverte sol, fermée vol. Régulée pour T° sortie compresseur.</p>
            <p><strong>ACM :</strong> 1 compresseur + 2 turbines (T1/T2) + inlet fan. Montés sur même arbre, palier à air.</p>
            <p><strong>Condenseur/Reheater :</strong> Retire l'eau et réchauffe l'air.</p>
            <p><strong>Low Limit Valve :</strong> Bypass turbine T1. Ferme si T° sortie T1 < 1°C.</p>
            <p><strong>Second Stage Bypass Valve :</strong> Bypass turbine T2. Régule T° sortie pack.</p>
            <p><strong>Economy Cooling Valve :</strong> ELMS. Tout ou rien. Ouverte haute altitude (25000 ft). Air bypass ACM.</p>
            <p><strong>Conditioned Air Check Valve :</strong> Anti-retour sortie pack. Évite perte pressurisation.</p>

            <h3>🌡️ Températures & Sondes</h3>
            <p><strong>11 sondes totales :</strong> 9 CTC + 2 ASCPC (sortie compresseur/pack)</p>
            <p><strong>IMMTE :</strong> 4 sondes (2 par CTC). T° référence sortie pack. Différence maxi 5°.</p>
            <p><strong>T° critiques :</strong> Sortie compresseur et sortie pack</p>
            <p><strong>Régul sortie compresseur :</strong> < 171° régul RAM door | 171-179° RAM full open | 179-232° baisse débit | > 232° Pack trip</p>
            <p><strong>T° sortie pack :</strong> CTC 88°C maxi, ASCPC 96°C maxi</p>

            <h3>❄️ Modes Spéciaux</h3>
            <p><strong>STANDBY COOLING :</strong> ACM fail, sondes condenser fail, Economy valve open. Air passe direct par check valve.</p>
            <p><strong>ECONOMY COOLING :</strong> Vol haute altitude + ACM OK + T° condenser valide + TAT < 7°</p>

            <h3>🌡️ Temperature Control</h3>
            <p><strong>Zones :</strong> CTC DX (B-D-F + soute AV) | CTC GX (A-C-E + Flight Deck)</p>
            <p><strong>P5 :</strong> 2 P/B ON/FAULT. Rotateurs 18-29° (F/D et cabine), 4-27° (soute AV)</p>
            <p><strong>T° Master :</strong> ~24° poste, ajustement cabine ±6° via CSCP/CACP</p>
            <p><strong>Protections :</strong> 71° gaine → ferme modulating valve | 88° → ferme TRIM AIR PRSOV</p>
            <p><strong>Fault si :</strong> Surchauffe > 88°, perte info pression, défaut 2 canaux CTC</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = revisionData;
}

            <h3>🔧 Trim Air Pressure Regulating and Shutoff Valve (TAPRSOV)</h3>
            <p><strong>2 vannes (1 par côté).</strong> CTC régule pour maintenir pression sortie supérieure de 5 PSI à pression cabine (régulation 2-8,5 PSI).</p>
            <p><strong>Backup ASCPC :</strong> Peut couper TAPRSOV si P/B Off, Stall Warning, ou Pack Flow schedule 4</p>
            <p><strong>Test auto démarrage moteur :</strong> CTC commande pleine ouverte, vérifie que ASCPC peut fermer</p>
            <p><strong>Fail safe closed.</strong> Si FCV fermée (pack trip) → TAPRSOV fermée.</p>

            <h3>🌡️ Trim Air Modulating Valve (TAMV)</h3>
            <p><strong>8 vannes (1 par zone) + 1 soute AV.</strong> Régulées par CTC, asservies par RVDT. Identiques, interchangeables.</p>
            <p><strong>Protection :</strong> Si TAMV ouverte > 10% en panne → fermeture TAPRSOV + pression 2 PSI + ouverture autres TAMV</p>
            <p><strong>TAMV poste (spéciale) :</strong> Gérée par CTC Gx. Seule commandable en manuel. Seule avec synoptic EICAS.</p>
            <p><strong>Mode dégradé (Open Loop) :</strong> Si RVDT panne → régulation par Zone Duct Temp Sensor</p>

            <h3>🌡️ Sondes de Température</h3>
            <p><strong>Zone Duct Temp Sensor :</strong> 2 par conduit. Anticipation variations T°. Si 2 sondes HS → fermeture TAMV zone</p>
            <p><strong>Zone Air Temp Sensor :</strong> Sondes cabine, info aux 2 canaux CTC. Ventilation par Lav/Galley vent fans</p>
            <p><strong>Protections :</strong> 71° duct → ferme TAMV zone | 88° duct → ferme TRIM AIR PRSOV</p>
            <p><strong>Soute AV :</strong> TAMV ouvre si A/C SOV FWD CARGO ouverte + lav/gly fans off. Si 2 sondes T° HS → plus de clim soute AV</p>

            <h3>🌀 Distribution & Recirculation</h3>
            <p><strong>But :</strong> Gagner 50% efficacité packs</p>
            <p><strong>2 Recirculating FAN Upper :</strong> 1 avant + 1 arrière. Identiques, interchangeables</p>
            <p><strong>2 Recirculating FAN Lower :</strong> Soute avant. Non identiques (Dx plus gros pour soute AV)</p>
            <p><strong>Contrôle :</strong> ECSMC surveillent, CTC Dx commande (CTC Gx backup). ELMS surveille consommation</p>
            <p><strong>Coupure :</strong> Feu soute AV. Commandes en P5 (1 LOWER, 1 UPPER). Reset AIR COND RESET</p>
            <p><strong>Si 1 fan panne :</strong> Augmentation débit pack</p>

            <h3>💨 Ventilation</h3>
            <p><strong>Lav/Galley Vent Fan (2) :</strong> Auto dès mise sous tension. Droit permanent, gauche backup. Power Up Test Gx 20s. Situés soute bulk. Arrêt si ARM CARGO AFT FIRE</p>
            <p><strong>Bulk Cargo Vent Fan :</strong> Transport animaux. Cargo TEMP Select HIGH. Arrêt si ARM CARGO AFT FIRE</p>
            <p><strong>Exhaust Fan :</strong> Clim soute AV + switch AUTO. Récup air fond soute, éjection FWD OUTFLOW VALVE. Coupé si ARM CARGO FWD/AFT FIRE ou réchauffage soute AV</p>
            <p><strong>Chiller Boost Fan :</strong> Extraction air chaud Chillers. Vol → porte 2 GX | Sol → Mix bay. Si TAT < 7° ou ARM CARGO FIRE → coupure. Si TAT > 7° sol → ON</p>

            <h3>🔥 Climatisation & Réchauffage</h3>
            <p><strong>Soute AV :</strong> 1 TAMV (fonctionne comme zone cabine) + sélecteur propre</p>
            <p><strong>Air Conditioning Shutoff Valve :</strong> Ouvre si Pack On + FWD CARGO A/C AUTO + FIRE SW not armed + TAMV ouverte</p>
            <p><strong>Air Supply Shutoff Valve :</strong> Alimente LLAR. Sol : PACK GX OFF + GRND BUS alimentée + hatch ouvert. Vol : > 25000 ft</p>

            <h4>Réchauffages</h4>
            <p><strong>LLAR :</strong> CTC Gx + ELMS. 2 heaters vol uniquement. Pack left via AIR SHUTOFF VALVE (25000 ft). 2 sondes T° → CTC Gx</p>
            <p><strong>CRAH :</strong> 1 heater. Pack ON sol ou vol</p>
            <p><strong>Soute AR/Bulk (4 vannes) :</strong> Air chaud conduit pneumatique. 2 vannes série : Pneumatic shutoff + Heat valve (T° < 10°). ELMS GX/DX. Cargo TEMP SELECT : OFF/LOW(+7°)/HIGH(+21°)</p>
            <p><strong>Shoulder/Foot :</strong> Air pack Gx. Vol uniquement. 2 épaules + 2 pieds</p>
            <p><strong>Door :</strong> 1 heater électrique Girt Bar. Seul testable MAT. Vol + 1 pack</p>
            <p><strong>Soute AV (ELMS) :</strong> Air equipement cooling soute électronique. Si FWD CARGO A/C OFF → ouverture Diverter + Heat Valve, fermeture Vent Valve, arrêt Exhaust Fan</p>

            <h3>❄️ Equipment Cooling</h3>
            <p><strong>4 modes :</strong> FWD cargo A/C (vent) | FWD cargo heat (OVR) | Eqpt cooling smoke | FWD cargo fire</p>
            <p><strong>Inboard Valve :</strong> Sol clim auto → fermée (air Mix Bay). Vol clim auto → ouverte</p>
            <p><strong>Diverter Valve :</strong> Sol clim auto → ouverte. Fermée si feu, P5 override, perte 2 Low Flow Sensors vol, clim soute AV vol</p>
            <p><strong>Cargo Heat Valve :</strong> Fermée si sol T° > 13° ou clim. Ouverte si fan coupé, ou réchauffage soute AV (vol ou sol TAT < 10°)</p>
            <p><strong>Vent Valve :</strong> Fermée si feu, fumée, réchauffage soute Av vol, ou réchauffage + TAT < 10° sol</p>

            <h3>⚠️ Mode Override</h3>
            <p><strong>En vol, passage auto si :</strong> Perte 2 flow sensors, fumée soute élec, panne 2 Supply Fan, ARM extinction soute AV, P/B P5 override</p>
            <p><strong>Au sol :</strong> Si flow sensor bas débit ou surchauffe → MSG EQT COOLING + KLAXON TAV → SUPPLY/VENT FAN OFF + ferme OVERRIDE VALVE + démarre CONV SUP CLG FAN</p>
            <p><strong>Reset :</strong> Switch EQUIP COOLING P5 ou cartes ECSMC</p>
            <p><strong>Converter Backup Fan :</strong> Power up test, override, backup gen ON, perte 2 supply fans</p>
            <p><strong>ECC :</strong> 2 ECC (Gx/Dx). Secours panne ECSMC, vol uniquement. 6 modes changent toutes 60s pour récup ventilation</p>

            <h3>📺 Ventilation IFE</h3>
            <p><strong>2 vannes :</strong> Manifold Shutoff + Overboard Shutoff (ECSMC). 1 ouverte, 1 fermée. Fermées + arrêt fan si feu ou fumée manifold IFE</p>
            <p><strong>777-300 retrofit :</strong> Plus qu'1 ventil (overboard supprimé), extraction MIX BAY, fan permanent</p>

            <h3>🔧 Différences 777-300</h3>
            <p><strong>OFAR (1 zone) :</strong> CTC Gx. Heaters électriques. Air pack gauche via Air Supply SOV (25000 ft). Ferme Air Supply + ouvre Exhaust si feu</p>
            <p><strong>OFCR (3 zones) :</strong> Air Supply SOV ELMS, pas condition 25000 ft. 3 heaters. Ferme Air Supply + ouvre Exhaust si feu. Si fumée OFCR → reset chillers</p>
            <p><strong>Volets RAM AIR EXIT :</strong> Présents mais désactivés</p>

            <h3>🎈 Pressurisation</h3>
            <p><strong>2 ASCPC :</strong> GX Primary, DX Backup. 2 modes : Fixed Rate Control / Minimum Rate Control. Preflight Test fin mise en route (test Outflow valves)</p>
            <p><strong>Remote Cabin Pressure :</strong> Mesure pression cabine indépendamment ASCPC, info ELMS</p>

            <h4>Limites</h4>
            <p><strong>Cabin Altitude :</strong> Limite 8500 ft (rouge EICAS). Delta P 8,6 Psi (9,25 Psi rouge EICAS)</p>
            <p><strong>Pression cabine :</strong> Altitude terrain + 0,15 Psi (limite 8000 ft ou Delta P 8,6)</p>

            <h4>Valves de sécurité</h4>
            <p><strong>Positive Relief (2) :</strong> Côté Gx. Régulent 8,95-9,2 Psi. Full open mécanique 9,42 Psi. Pas indication poste, purement mécaniques. Témoin rouge si ouverture</p>
            <p><strong>Negative Relief (4) :</strong> 2 par côté. Si altitude avion croise altitude terrain. Ouverture -0,2 Psi, full open -0,5 Psi. Pas indication, purement mécaniques</p>

            <h4>Outflow Valves</h4>
            <p><strong>Composition :</strong> Volets + Vanne Control Unit. Côté GX (1 avant, 1 arrière). Gérées par 1 ASCPC. Débit fuite géré par 2 OFV</p>
            <p><strong>Moteurs :</strong> 2 sur Control Unit (1 par ASCPC). Manuel → contrôle direct OFV. 777-300 : 3 moteurs (2 ASCPC + 1 manuel)</p>
            <p><strong>Ouverture régulation :</strong> 80% AR / 20% AV. Si clim soute AV, feu soute, ou 1 OFV inop → 50% AR / 50% AV</p>
            <p><strong>Commandes P5 :</strong> AUTO (ASCPC gère) | MAN (manuel, allume MAN) | DECREASE/INCREASE (modif altitude terrain)</p>
            <p><strong>Cabin pressure sensor :</strong> Corrige pressurisation (ASCPC a prise pression mais sensor corrige)</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = revisionData;
}
