const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande en <strong>P5 via OPAS</strong> puis <strong>ARINC 629</strong>.</p>
<p><strong>5 fonctions :</strong> Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation</p>

<h3>🎛️ CTC - Cabin Temperature Controllers</h3>
<p><strong>2 CTC indépendants :</strong> CTC DX (pack Dx), CTC Gx (pack Gx)</p>
<p><strong>Règle ETOPS :</strong> On ne croise jamais les CTC ni les ASCPC</p>
<p>Alimentés par <strong>XFR BUS</strong>, action <strong>analogique</strong> sur les packs</p>
<p><strong>Si CTC défaut :</strong> ASCPC prend le relais avec <strong>LOWER FLOW CONTROL VALVE</strong></p>
<p>Reset : <strong>AIR COND RESET</strong></p>

<h3>⚙️ ASCPC - Air Supply Cabin Pressure Control</h3>
<p><strong>2 ASCPC :</strong> Gx (pack Gx), Dx (pack Dx). Gèrent les packs et surveillent T° (<strong>Pack Trip</strong>)</p>
<p>Contrôle débit via <strong>Manifold Flow Sensor</strong> (backup si perte Pack Flow Sensor)</p>

<h4>Pack Flow Schedule</h4>
<p><strong>0 :</strong> Pas d'air (dém moteur) | <strong>1-4 :</strong> Moins d'air avec altitude | <strong>2 :</strong> 1 seul pack | <strong>4 :</strong> Maintien pressurisation</p>
<p>Si recirculating Fan panne → augmentation débit pack</p>

<h4>Mode Backup</h4>
<p>ASCPC = Backup CTC si <strong>2 canaux CTC HS</strong></p>
<p><strong>3 signaux :</strong> Digital, Analogique, Pneumatique</p>
<p>Backup : flow control, T° sortie compresseur, T° sortie pack</p>

<h4>Points clés</h4>
<p>Éléments interchangeables sauf tuyaux</p>
<p>Arrêt pack : attendre <strong>2 min</strong> (déshumidification)</p>
<p>APU au sol : <strong>2 packs en route</strong></p>

<h3>🔧 ECSMC</h3>
<p>2 cartes <strong>(P85/P84)</strong>. DX primaire, GX backup</p>
<p>Gère : distribution, équipement cooling, cargo heating, supplemental heating</p>

<h3>❄️ Pack Flow Control Valves</h3>
<p><strong>4 valves (2 par pack)</strong>. Commandées par CTC, backup ASCPC</p>
<p><strong>UPPER :</strong> Ouverte basse altitude, fermée à <strong>26000 ft</strong></p>
<p><strong>LOWER :</strong> Ouverte à partir <strong>26000 ft</strong> → passage dans <strong>Ozone converter</strong></p>
<p><strong>Règle :</strong> Les 2 ne fonctionnent JAMAIS ensemble</p>
<p>Voyant <strong>pack OFF</strong> si 2 vannes fermées</p>

<h4>Torque Motors</h4>
<p><strong>2 par valve :</strong> 1 CTC (régul position), 1 ASCPC (backup)</p>
<p>Si pas alimentés → vannes <strong>FULL OPEN</strong></p>

<h4>Fermeture si</h4>
<p>Pack outlet overheat <strong>88°C</strong> | Compresseur discharge overheat <strong>252°C</strong> | Pack Fail | Flow schedule 0</p>

<h3>🌡️ Composants Pack</h3>
<p><strong>Ozone Converter :</strong> Transforme O3 en O2 haute altitude. Pas de passage < 26000 ft</p>
<p><strong>RAM Inlet Door :</strong> Ouverte sol, fermée vol. Régule T° sortie compresseur</p>
<p><strong>ACM :</strong> 1 compresseur + 2 turbines (T1/T2) + inlet fan. Même arbre, palier à air</p>
<p><strong>Condenseur/Reheater :</strong> Retire l'eau + réchauffe l'air</p>
<p><strong>Low Limit Valve :</strong> Bypass turbine T1. Ferme si T° sortie T1 < <strong>1°C</strong></p>
<p><strong>Second Stage Bypass Valve :</strong> Bypass turbine T2. Régule T° sortie pack</p>
<p><strong>Economy Cooling Valve :</strong> Ouverte haute altitude (<strong>25000 ft</strong>). Air bypass ACM. Fail safe open</p>
<p><strong>Conditioned Air Check Valve :</strong> Anti-retour sortie pack. Évite perte pressurisation</p>

<h3>🌡️ Températures & Sondes</h3>
<p><strong>11 sondes totales :</strong> 9 CTC + 2 ASCPC (sortie compresseur/pack)</p>
<p><strong>IMMTE :</strong> 4 sondes (2 par CTC). T° référence sortie pack. Diff maxi <strong>5°</strong></p>

<h4>T° critiques</h4>
<p><strong>Sortie compresseur :</strong> < 171° (régul RAM door) | 171-179° (RAM full open) | 179-232° (baisse débit) | > 232° (<strong>Pack trip</strong>)</p>
<p><strong>Sortie pack :</strong> CTC <strong>88°C</strong> maxi | ASCPC <strong>96°C</strong> maxi</p>

<h4>Modes spéciaux</h4>
<p><strong>STANDBY COOLING :</strong> ACM fail, sondes condenser fail, Economy valve open → air direct par check valve</p>
<p><strong>ECONOMY COOLING :</strong> Vol haute altitude + ACM OK + T° condenser valide + <strong>TAT < 7°</strong></p>

<h3>🌡️ Temperature Control</h3>
<p><strong>CTC Dx :</strong> Zones B-D-F + soute AV | <strong>CTC Gx :</strong> Zones A-C-E + Flight Deck</p>
<p>Commandes P5 : 2 P/B (ON/FAULT), Rotateurs <strong>18-29°</strong> (F/D et cabine), <strong>4-27°</strong> (soute AV)</p>
<p><strong>T° Master :</strong> ~24° poste, ajustement cabine <strong>±6°</strong> via CSCP/CACP</p>

<h4>Protections</h4>
<p><strong>71°</strong> gaine → ferme modulating valve</p>
<p><strong>88°</strong> gaine → ferme <strong>TRIM AIR PRSOV</strong></p>
<p><strong>Fault si :</strong> Surchauffe > 88°, perte info pression, défaut 2 canaux CTC</p>

<h3>🔧 TAPRSOV - Trim Air Pressure Regulating and Shutoff Valve</h3>
<p><strong>2 vannes (1 par côté)</strong></p>
<p>CTC régule : pression sortie = pression cabine <strong>+ 5 PSI</strong> (régulation <strong>2-8,5 PSI</strong>)</p>
<p><strong>Backup ASCPC :</strong> Coupe TAPRSOV si P/B Off, Stall Warning, Pack Flow schedule 4</p>
<p><strong>Test auto démarrage moteur :</strong> CTC commande full open, vérifie ASCPC peut fermer</p>
<p>Fail safe <strong>closed</strong>. Si FCV fermée → TAPRSOV fermée</p>

<h3>🌡️ TAMV - Trim Air Modulating Valve</h3>
<p><strong>8 valves (1 par zone) + 1 soute AV</strong>. Régulées par CTC via RVDT</p>
<p>Si TAMV ouverte > <strong>10%</strong> en panne → fermeture TAPRSOV + pression 2 PSI</p>
<p><strong>TAMV poste (spéciale) :</strong> Gérée par CTC Gx. Seule commandable en manuel. Seule avec synoptic EICAS</p>
<p><strong>Mode dégradé (Open Loop) :</strong> Si RVDT panne → régul par Zone Duct Temp Sensor</p>

<h3>🌡️ Sondes</h3>
<p><strong>Zone Duct Temp Sensor :</strong> 2 par conduit. Anticipation. Si 2 sondes HS → ferme TAMV zone</p>
<p><strong>Zone Air Temp Sensor :</strong> Sondes cabine. Ventilation par Lav/Galley vent fans</p>
<p><strong>71°</strong> duct → ferme TAMV zone | <strong>88°</strong> duct → ferme TRIM AIR PRSOV</p>
<p>TAMV soute AV ouvre si <strong>A/C SOV FWD CARGO</strong> ouverte + lav/gly fans off</p>

<h3>🌀 Recirculation</h3>
<p><strong>But :</strong> Gagner 50% efficacité packs</p>
<p><strong>2 FAN Upper</strong> (avant/arrière) identiques | <strong>2 FAN Lower</strong> soute AV (Dx plus gros)</p>
<p>Surveillés ECSMC, commandés <strong>CTC Dx</strong> (CTC Gx backup)</p>
<p>Coupure si feu soute AV. Reset <strong>AIR COND RESET</strong></p>
<p>Si 1 fan panne → augmente débit pack</p>

<h3>💨 Ventilation</h3>
<p><strong>Lav/Galley Vent Fan (2) :</strong> Auto dès mise sous tension. Droit permanent, gauche backup. Test Gx 20s. Soute bulk</p>
<p>Arrêt si <strong>ARM CARGO AFT FIRE</strong></p>
<p><strong>Bulk Cargo Fan :</strong> Transport animaux. Cargo TEMP Select <strong>HIGH</strong></p>
<p><strong>Exhaust Fan :</strong> Clim soute AV + AUTO. Éjection FWD OUTFLOW VALVE. Coupé si ARM CARGO FIRE</p>
<p><strong>Chiller Boost Fan :</strong> Vol (porte 2 GX), Sol (Mix bay). Si TAT < 7° → coupure. Si TAT > 7° sol → ON</p>

<h3>🔥 Climatisation Soute AV</h3>
<p>1 TAMV (comme zone cabine) + sélecteur propre</p>
<p><strong>Air Conditioning Shutoff Valve :</strong> Ouvre si Pack On + FWD CARGO A/C AUTO + FIRE not armed + TAMV ouverte</p>
<p><strong>Air Supply Shutoff Valve (LLAR) :</strong> Sol (PACK GX OFF + GRND BUS + hatch ouvert), Vol (> <strong>25000 ft</strong>)</p>

<h3>🔥 Réchauffages</h3>
<p><strong>LLAR :</strong> CTC Gx + ELMS. 2 heaters vol uniquement. Pack left via AIR SHUTOFF VALVE (<strong>25000 ft</strong>)</p>
<p><strong>CRAH :</strong> 1 heater. Pack ON sol/vol</p>
<p><strong>Soute AR/Bulk (4 vannes) :</strong> Air chaud pneumatique. 2 vannes série (Pneumatic shutoff + Heat valve T° < 10°). ELMS GX/DX</p>
<p>Cargo TEMP SELECT : <strong>OFF / LOW (+7°) / HIGH (+21°)</strong></p>
<p><strong>Shoulder/Foot :</strong> Air pack Gx. Vol uniquement. 2 épaules + 2 pieds</p>
<p><strong>Door :</strong> 1 heater électrique Girt Bar. Seul testable MAT. Vol + 1 pack</p>
<p><strong>Soute AV (ELMS) :</strong> Air équipement cooling. Si FWD CARGO A/C OFF → ouvre Diverter/Heat, ferme Vent, arrêt Exhaust</p>
<p>Si T° ext < 13° : Divert + Inboard liées électriquement, Vent + Forward Cargo inversées</p>

<h3>❄️ Equipment Cooling</h3>
<p><strong>4 modes :</strong> FWD cargo A/C (vent), FWD cargo heat (OVR), Eqpt cooling smoke, FWD cargo fire</p>
<p><strong>Inboard Valve :</strong> Sol clim auto → fermée (air Mix Bay). Vol clim auto → ouverte</p>
<p><strong>Diverter Valve :</strong> Sol clim auto → ouverte. Fermée si feu, P5 override, perte 2 Low Flow Sensors vol, clim soute AV vol</p>
<p><strong>Cargo Heat Valve :</strong> Fermée si sol T° > 13° ou clim. Ouverte si fan coupé, réchauffage soute AV</p>
<p><strong>Vent Valve :</strong> Fermée si feu, fumée, réchauffage soute Av vol</p>

<h3>⚠️ Mode Override</h3>
<p><strong>En vol, auto si :</strong> Perte 2 flow sensors, fumée soute élec, panne 2 Supply Fan, ARM extinction soute AV, P/B override</p>
<p><strong>Au sol :</strong> Flow sensor bas débit/surchauffe → MSG EQT COOLING + KLAXON → SUPPLY/VENT FAN OFF + ferme OVERRIDE + démarre CONV SUP CLG FAN</p>
<p>Reset : Switch EQUIP COOLING P5 ou ECSMC</p>
<p><strong>ECC :</strong> 2 ECC (Gx/Dx). Secours panne ECSMC vol uniquement. 6 modes changent toutes 60s</p>
<p><strong>Converter Backup Fan :</strong> Power up test, override, backup gen ON, perte 2 supply fans</p>
<p><strong>Supply fan :</strong> 2 ventilateurs. Dx primaire, Gx backup</p>

<h3>📺 Ventilation IFE</h3>
<p><strong>2 vannes :</strong> Manifold Shutoff + Overboard Shutoff (ECSMC). 1 ouverte, 1 fermée</p>
<p>Fermées + arrêt fan si feu ou fumée manifold IFE</p>
<p><strong>777-300 retrofit :</strong> Plus qu'1 ventil, extraction MIX BAY, fan permanent</p>

<h3>🔧 Différences 777-300</h3>
<p><strong>OFAR (1 zone) :</strong> CTC Gx. Heaters électriques. Air pack gauche via Air Supply SOV (<strong>25000 ft</strong>). Ferme Air Supply + ouvre Exhaust si feu</p>
<p><strong>OFCR (3 zones) :</strong> Air Supply SOV ELMS, pas condition 25000 ft. 3 heaters. Si fumée OFCR → reset chillers</p>
<p>Volets <strong>RAM AIR EXIT</strong> présents mais désactivés</p>

<h3>🎈 Pressurisation</h3>
<p><strong>2 ASCPC :</strong> GX Primary, DX Backup</p>
<p><strong>2 modes :</strong> Fixed Rate Control / Minimum Rate Control</p>
<p>Preflight Test fin mise en route (test Outflow valves)</p>
<p><strong>Remote Cabin Pressure :</strong> Mesure pression indépendamment ASCPC, info ELMS</p>

<h4>Limites</h4>
<p><strong>Cabin Altitude :</strong> Limite <strong>8500 ft</strong> (rouge EICAS)</p>
<p><strong>Delta P :</strong> <strong>8,6 Psi</strong> (<strong>9,25 Psi</strong> rouge EICAS)</p>
<p>Pression cabine = altitude terrain + 0,15 Psi (limite 8000 ft ou Delta P 8,6)</p>

<h4>Valves de sécurité</h4>
<p><strong>Positive Relief (2) :</strong> Côté Gx. Régulent <strong>8,95-9,2 Psi</strong>. Full open mécanique <strong>9,42 Psi</strong>. Pas indication poste, purement mécaniques. Témoin rouge si ouverture</p>
<p><strong>Negative Relief (4) :</strong> 2 par côté. Ouverture <strong>-0,2 Psi</strong>, full open <strong>-0,5 Psi</strong>. Pas indication, purement mécaniques</p>

<h4>Outflow Valves</h4>
<p>Volets + Vanne Control Unit. Côté GX (1 avant, 1 arrière). Gérées par 1 ASCPC. Débit fuite géré par 2 OFV</p>
<p><strong>Moteurs :</strong> 2 sur Control Unit (1 par ASCPC). Manuel → contrôle direct. 777-300 : 3 moteurs (2 ASCPC + 1 manuel)</p>
<p><strong>Ouverture régulation :</strong> <strong>80% AR / 20% AV</strong></p>
<p>Si clim soute AV, feu soute, ou 1 OFV inop → <strong>50% AR / 50% AV</strong></p>
<p><strong>Commandes P5 :</strong> AUTO (ASCPC gère), MAN (manuel), DECREASE/INCREASE (modif altitude terrain)</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];
