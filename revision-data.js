const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande P5 via OPAS puis ARINC 629. <strong>5 fonctions :</strong> Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation.</p>

<h3>🎛️ CTC - Cabin Temperature Controllers</h3>
<p><strong>2 CTC indépendants :</strong> CTC DX (pack Dx), CTC Gx (pack Gx). Alimentés par <strong>XFR BUS</strong>, action <strong>analogique</strong> sur packs.</p>
<p><strong>⚠️ Règle ETOPS :</strong> On ne croise JAMAIS les CTC ni les ASCPC entre eux.</p>
<p><strong>Si CTC défaut :</strong> ASCPC prend relais avec <strong>LOWER FLOW CONTROL VALVE</strong> en priorité.</p>
<p><strong>🔧 Reset :</strong> Switch <strong>AIR COND RESET</strong> en P5.</p>

<h3>⚙️ ASCPC - Air Supply Cabin Pressure Control</h3>
<p><strong>2 ASCPC indépendants :</strong> Gx (pack Gx), Dx (pack Dx). Gèrent packs et surveillent T° (<strong>Pack Trip</strong>).</p>
<p>Contrôle débit via <strong>Manifold Flow Sensor</strong> (backup si perte Pack Flow Sensor).</p>

<h4>Pack Flow Schedule (5 niveaux)</h4>
<p><strong>0 :</strong> Pas d'air (dém moteur) | <strong>1-4 :</strong> Moins d'air avec altitude | <strong>2 :</strong> 1 seul pack | <strong>4 :</strong> Maintien pressurisation</p>
<p><strong>🔧 DISPATCH :</strong> Si recirculating Fan panne → augmentation débit pack automatique (acceptable dispatch).</p>

<h4>Mode Backup ASCPC</h4>
<p>ASCPC = Backup CTC si <strong>2 canaux CTC HS</strong>. <strong>3 signaux :</strong> Digital, Analogique, Pneumatique.</p>
<p>Backup : flow control, T° sortie compresseur, T° sortie pack.</p>

<h4>🔧 Points MAINTENANCE</h4>
<p><strong>✅ INTERCHANGEABLE :</strong> Tous les éléments entre pack n°1 et 2, SAUF les tuyaux.</p>
<p><strong>⏱️ Arrêt pack sol :</strong> Attendre <strong>2 minutes</strong> pour arrêt complet (déshumidification pack).</p>
<p><strong>⚠️ APU sol :</strong> Mettre les <strong>2 packs en route</strong> obligatoire.</p>

<h3>🔧 ECSMC - Environmental Control System Miscellaneous Cards</h3>
<p>2 cartes (P85/P84). <strong>DX primaire, GX backup</strong> à chaque mise sous tension.</p>
<p>Gère : distribution/ventilation, equipment cooling, cargo heating, supplemental heating.</p>

<h3>❄️ Pack Flow Control Valves (4 valves)</h3>
<p><strong>2 par pack.</strong> Régulent débit air vers pack. Commandées CTC, backup ASCPC.</p>
<p><strong>✅ IDENTIQUES ET INTERCHANGEABLES</strong> entre elles et entre packs.</p>

<h4>Upper Flow Control Valve</h4>
<p>Ouverte basse altitude, <strong>fermée à 26000 ft</strong>.</p>

<h4>Lower Flow Control Valve</h4>
<p>Ouverte à partir <strong>26000 ft</strong>. Passage air dans <strong>Ozone converter</strong>.</p>

<h4>⚠️ Règle importante</h4>
<p><strong>Les 2 ne fonctionnent JAMAIS ensemble.</strong> Si UPPER ouverte → LOWER fermée.</p>
<p>Info transmise par 2 proximity switchs.</p>
<p><strong>Voyant pack OFF :</strong> 2 vannes fermées détectées CLOSE par CTC.</p>

<h4>🔧 Torque Motors (2 par valve)</h4>
<p><strong>1 CTC :</strong> Régulation position | <strong>1 ASCPC :</strong> Ferme upper, régule lower en backup</p>
<p><strong>✅ INTERCHANGEABLES</strong> entre eux.</p>
<p><strong>⚠️ Si pas alimentés :</strong> Vannes <strong>FULL OPEN</strong> (fail safe).</p>
<p><strong>🔧 DISPATCH :</strong> 1 plug pour tolérance upper en fermeture.</p>

<h4>Pack Flow Sensor</h4>
<p><strong>2 differential pressure sensors :</strong> CTC / ASCPC. <strong>1 inlet pressure sensor</strong> CTC.</p>
<p><strong>✅ INTERCHANGEABLES</strong> avec autres sondes en amont.</p>
<p>Si CTC perd info T° → demande à ASCPC.</p>

<h4>Fermeture Flow Control Valve si</h4>
<p>Pack outlet overheat <strong>88°C</strong> | Compresseur discharge <strong>252°C</strong> | Pack Fail | Flow schedule 0</p>
<p><strong>⚠️ ATTENTION :</strong> Flow Control Valve <strong>ouverte</strong> si pas de jus + pression pneumatique présente.</p>

<h3>🌡️ Ozone Converter</h3>
<p>Transforme O3 en O2 haute altitude. <strong>Pas de passage < 26000 ft</strong> (passage par upper).</p>
<p>P/B P5 commande ouverture. CTC régule débit selon T° Inlet Primary Heat Exchanger.</p>
<p><strong>Si plus de débit dans Pack Flow Sensor → Pack Trip</strong></p>

<h3>🔧 Composants Pack - COOLING</h3>

<h4>RAM Inlet Door</h4>
<p>Commandée par <strong>CTC seulement</strong>. Ouverte sol, fermée vol.</p>
<p>Régulée pour T° sortie compresseur. Fermeture possible par MAT.</p>

<h4>Economy Cooling Check Valve</h4>
<p>Bypass ACM au démarrage pack, panne ACM, ou en vol (air froid).</p>

<h4>Échangeur Thermique</h4>
<p>2 échangeurs AIR/AIR refroidis par ram air.</p>

<h4>ACM - Air Cycle Machine</h4>
<p>1 compresseur + 2 turbines (T1/T2) + inlet fan. Montés sur <strong>même arbre</strong>, <strong>palier à air</strong>.</p>
<p><strong>⚠️ ATTENTION au sens de rotation !</strong></p>

<h4>Condenseur/Reheater</h4>
<p><strong>2 fonctions :</strong> Retire l'eau + Réchauffe l'air (donne énergie).</p>

<h4>Water Collector & Spray Nozzle</h4>
<p>Gestion eau condensée.</p>

<h4>🌡️ Sondes température (11 totales)</h4>
<p><strong>9 pour CTC</strong> + <strong>2 pour ASCPC</strong> (sortie compresseur + sortie pack)</p>
<p>4 sondes sur Mix Manifold (2 par CTC).</p>

<h4>Low Limit Valve</h4>
<p>Bypass turbine T1. Régule vitesse rotation turbine (RVDT → info CTC).</p>
<p><strong>Ferme si T° sortie T1 < 1°C.</strong> Surveille toujours > 1° sortie turbine.</p>
<p><strong>✅ IDENTIQUE à Bypass Valve - INTERCHANGEABLES</strong></p>

<h4>Second Stage Turbine Bypass Valve</h4>
<p>Bypass turbine T2. Régule T° sortie pack (RVDT → info CTC).</p>
<p><strong>✅ INTERCHANGEABLE avec Low Limit Valve.</strong></p>
<p><strong>🔧 DISPATCH :</strong> Conseillé si Low Limit Valve HS.</p>

<h4>Economy Cooling Valve</h4>
<p>Commandée ELMS. <strong>Tout ou rien.</strong> Ouverte haute altitude (<strong>25000 ft</strong>, air sec).</p>
<p>Air ne passe plus par Condenser/Reheater et ACM.</p>
<p><strong>Vanne fail safe OPEN.</strong></p>
<p>Quand Economy open → Low Limit + Bypass open aussi.</p>

<h4>Conditioned Air Check Valve</h4>
<p>Clapet anti-retour sortie pack. <strong>Évite perte pressurisation si fuite pack.</strong></p>

<h4>Economy Cooling Check Valve - Usage</h4>
<p>Bypass compresseur si : mise en route GTR, mode economy, ACM HS, mode standby.</p>

<h3>🌡️ Indication Température</h3>

<h4>Condenser Inlet Temp Sensor (X2)</h4>
<p>Pilotage Low Limit Valve.</p>

<h4>IMMTE - Integrated Mix Manifold Temperature</h4>
<p>4 sondes (2 par CTC). Gestion T° cabine calculée par CTC DX, suivie par CTC GX.</p>
<p>T° référence sortie pack. <strong>Différence maxi 5°</strong> entre packs.</p>

<h4>2 Températures CRITIQUES</h4>
<p><strong>T° sortie compresseur :</strong></p>
<p>< 171° : régul RAM door | 171-179° : RAM full open | 179-232° : baisse débit | <strong>> 232° : PACK TRIP</strong></p>
<p><strong>T° sortie pack :</strong></p>
<p>CTC <strong>88°C maxi</strong> | ASCPC <strong>96°C maxi</strong></p>

<h4>STANDBY COOLING MODE</h4>
<p>Activé si : ACM fail, sondes condenser 1&2 fail, Economy valve failed open + TBV full open</p>
<p>→ Air passe direct par Check Valve.</p>

<h4>ECONOMY COOLING MODE</h4>
<p>Activé si : Vol haute altitude + ACM OK + T° condenser valide + <strong>TAT < 7°</strong></p>

<h3>🌡️ TEMPERATURE CONTROL</h3>
<p><strong>Régulation par CTC seulement.</strong></p>

<h4>Répartition zones</h4>
<p><strong>CTC Dx :</strong> Zones B-D-F + soute AV</p>
<p><strong>CTC Gx :</strong> Zones A-C-E + Flight Deck</p>

<h4>Commandes P5</h4>
<p>2 P/B (ON/FAULT)</p>
<p>2 Rotateurs : <strong>18-29°</strong> (F/D et cabine) | <strong>4-27°</strong> (soute AV)</p>
<p>Info OPAS → ARINC 629</p>

<h4>Température Master</h4>
<p>~24° poste. Ajustement cabine <strong>±6°</strong> via CSCP/CACP.</p>

<h4>Protections température gaine</h4>
<p><strong>71°</strong> gaine → ferme Modulating Valve correspondante</p>
<p><strong>88°</strong> gaine → ferme <strong>TRIM AIR PRSOV</strong></p>

<h4>Mode FAULT - Fermeture TAPRSOV si</h4>
<p>Surchauffe > 88° | Perte info pression Trim Air Pressure Sensor | Défaut 2 canaux CTC</p>
<p><strong>🔧 Reset :</strong> P/B P5 ou <strong>AIR COND RESET</strong></p>

<h4>🔧 MAT (Maintenance Access Terminal)</h4>
<p>Fonction spéciale : ouvrir/fermer RAM AIR INLET DOOR.</p>
<p><strong>Tests MAT = packs coupés obligatoire.</strong></p>

<h3>🔧 TAPRSOV - Trim Air Pressure Regulating and Shutoff Valve</h3>
<p><strong>2 vannes (1 par côté).</strong> CTC Gx (côté Gx), CTC Dx (côté Dx).</p>
<p>CTC régule : pression sortie = pression cabine <strong>+ 5 PSI</strong> (régulation <strong>2-8,5 PSI</strong>).</p>
<p>Info par 2 trim air pressure sensors.</p>

<h4>Backup ASCPC</h4>
<p>ASCPC coupe TAPRSOV (shutoff solenoid) si : P/B Off | Stall Warning | Pack Flow schedule 4</p>

<h4>🔧 Test automatique démarrage moteur</h4>
<p>CTC commande TAPRSOV <strong>pleine ouverte</strong>, vérifie ASCPC capable de fermer.</p>

<h4>🔧 DISPATCH</h4>
<p><strong>Fail safe CLOSED.</strong> Dispatch vanne fermée possible.</p>
<p>Si FCV fermée (pack trip) → TAPRSOV fermée automatique.</p>

<h3>🌡️ TAMV - Trim Air Modulating Valve</h3>
<p><strong>8 vannes (1 par zone) + 1 soute AV.</strong> Régulées CTC via RVDT.</p>
<p><strong>✅ IDENTIQUES ET INTERCHANGEABLES</strong> entre elles.</p>

<h4>Protection</h4>
<p>Si TAMV ouverte > <strong>10%</strong> en panne → ferme TAPRSOV + maintien 2 PSI + ouvre autres TAMV.</p>

<h4>TAMV Poste (SPÉCIALE)</h4>
<p>Gérée par <strong>CTC Gx.</strong></p>
<p><strong>Seule TAMV :</strong> Commandable en manuel | Avec synoptic EICAS</p>
<p>Si CTC Gx panne : commande manuelle via rotateur possible (ELMS).</p>

<h4>Mode dégradé (Open Loop)</h4>
<p>Si RVDT panne → régulation par <strong>Zone Duct Temp Sensor.</strong></p>

<h3>🌡️ Sondes de Température</h3>

<h4>Zone Duct Temp Sensor (anticipation)</h4>
<p><strong>2 par conduit.</strong> Anticipent variations T°.</p>
<p><strong>✅ INTERCHANGEABLES avec autres sondes en amont.</strong></p>
<p>Si 2 sondes même Duct HS → ferme TAMV zone.</p>

<h4>Zone Air Temperature Sensor (fonctionnement)</h4>
<p>Sondes cabine. Info aux 2 canaux CTC (F/D → CTC Gx et Dx).</p>
<p>Ventilation par aspiration <strong>Lav/Galley vent fans.</strong></p>
<p>Si sondes cabine panne → régulation par Zone Duct Temp Sensor.</p>

<h4>Protections gaine</h4>
<p><strong>71°</strong> duct → ferme TAMV zone</p>
<p><strong>88°</strong> duct → ferme TRIM AIR PRSOV</p>
<p>Fonctionnement manuel : plus de commande CTC de TAMV.</p>

<h4>TAMV Soute AV</h4>
<p>Ouvre si <strong>A/C SOV FWD CARGO ouverte</strong> + info CTC + lav/gly fans off.</p>
<p>Si 2 sondes T° soute AV HS → plus de clim soute AV.</p>

<h4>Autres capteurs</h4>
<p>Si différence pression cabine entre 2 ASCPC → info <strong>Remote Cabin Press Sensor</strong> pour lever doute.</p>
<p><strong>Trim Air Pressure Sensor :</strong> Info pression régulée après TAPRSOV au CTC.</p>
<p><strong>Muffler :</strong> Diminue bruit.</p>

<h3>🌀 DISTRIBUTION - Recirculation</h3>
<p><strong>But :</strong> Gagner 50% efficacité packs.</p>

<h4>Recirculating FAN Upper (2)</h4>
<p>1 avant + 1 arrière. <strong>✅ IDENTIQUES ET INTERCHANGEABLES</strong></p>

<h4>Recirculating FAN Lower (2)</h4>
<p>Soute avant. <strong>⚠️ NON IDENTIQUES</strong> (Dx plus gros car prise soute AV).</p>

<h4>Contrôle</h4>
<p>Surveillés <strong>ECSMC</strong>, commandés <strong>CTC Dx</strong> (CTC Gx backup).</p>
<p>Surveillé par : ECMCS (surchauffe) + ELMS (consommation courant).</p>

<h4>🔧 DISPATCH & Commandes</h4>
<p>Addition air recyclée : 50% efficacité+ packs.</p>
<p>Coupure si <strong>feu soute AV.</strong></p>
<p>2 Commandes P5 (1 LOWER, 1 UPPER).</p>
<p><strong>🔧 Reset :</strong> Switch <strong>AIR COND RESET</strong> P5.</p>
<p><strong>✅ DISPATCH :</strong> Si 1 fan panne → augmentation débit pack automatique (acceptable).</p>

<h3>💨 VENTILATION (Système automatique)</h3>

<h4>Lav/Galley Vent Fan (2)</h4>
<p>Auto dès mise sous tension (si pas overheat, pas feu).</p>
<p><strong>Droit permanent, gauche backup.</strong> Power Up Test Gx 20s avant Dx.</p>
<p>Situés <strong>soute bulk.</strong></p>
<p>Ventilent : galleys, lavatories, sondes T° Zone, équipements étagères cabine AR (E11, E12, E7).</p>
<p><strong>Arrêt si ARM CARGO AFT FIRE.</strong></p>

<h4>Bulk Cargo Ventilation Fan</h4>
<p>Transport animaux. Cargo TEMP Select <strong>HIGH.</strong></p>
<p><strong>Arrêt si ARM CARGO AFT FIRE.</strong></p>

<h4>Exhaust Fan</h4>
<p>Mise en route : clim soute AV + switch AUTO.</p>
<p>Récup air fond soute → éjection <strong>FWD OUTFLOW VALVE.</strong></p>
<p><strong>FWD Cargo A/C Shutoff Valve (A/C SOV) :</strong> Contrôle air mix manifold vers soute AV.</p>
<p><strong>Coupé si :</strong> ARM CARGO FWD/AFT FIRE ou réchauffage soute AV.</p>

<h4>Chiller Boost Fan</h4>
<p>Extraction air chaud Chillers.</p>
<p><strong>Vol :</strong> Porte 2 GX | <strong>Sol :</strong> Mix bay</p>
<p>Si TAT < 7° ou ARM CARGO FIRE → coupure</p>
<p>Si TAT > 7° sol → ON</p>
<p><strong>2 vannes :</strong> Crown (vol, porte 2 GX) | Lower (sol, Mix bay)</p>

<h4>⚠️ Règle incendie</h4>
<p><strong>ARM Extinction Incendie → arrêt auto ventilation zone concernée.</strong></p>

<h3>🔥 CLIMATISATION</h3>

<h4>Soute Avant</h4>
<p>1 TAMV (fonctionne comme zone cabine) + sélecteur propre.</p>

<h4>Air Conditioning Shutoff Valve</h4>
<p>Ouvre si : Pack On + FWD CARGO A/C AUTO + FIRE not armed + TAMV ouverte</p>
<p>Située en aval. Info position surveillée <strong>ECMCS Dx.</strong></p>

<h4>Air Supply Shutoff Valve (LLAR)</h4>
<p>Alimente LLAR.</p>
<p><strong>Sol :</strong> PACK GX OFF + GRND HANDLING BUS alimentée + hatch ouvert</p>
<p><strong>Vol :</strong> > <strong>25000 ft</strong></p>

<h3>🔥 RÉCHAUFFAGES</h3>

<h4>Réchauffage LLAR</h4>
<p>Géré <strong>CTC Gx</strong> + alimenté <strong>ELMS.</strong></p>
<p><strong>2 heaters vol uniquement</strong> + LLAR SOV Relay OPEN.</p>
<p>Pack left via AIR SHUTOFF VALVE (s'ouvre <strong>25000 ft</strong>).</p>
<p>Sol : ouverte dès pack coupé.</p>
<p>2 sondes T° → info CTC Gx.</p>
<p>Trappe accès LLAR fermée ou test incendie = valve fermée.</p>
<p>Voyant dans LLAR à l'entrée.</p>

<h4>Réchauffage CRAH</h4>
<p>1 heater. Pack ON sol ou vol.</p>

<h4>🔧 777-300 spécifique</h4>
<p>Exhaust valve fumée OFCR/OFAR → lav/gly vent fans.</p>
<p><strong>OFAR :</strong> Mêmes limitations 200. Heaters auto si T° air duct < 4°C.</p>
<p><strong>OFCR :</strong> Pas limitation altitude.</p>

<h4>Réchauffage Soute AR & Bulk (4 vannes)</h4>
<p>Air chaud conduit pneumatique. Régulation par T° Sensor → info ECMCS.</p>
<p><strong>2 vannes série (tout ou rien) :</strong></p>
<p>Pneumatic system air (shutoff) | Heat valve si T° < 10° (Temp CTL)</p>
<p>Commandées <strong>ELMS GX/DX.</strong></p>
<p>Sélecteur Cargo TEMP SELECT : <strong>OFF | LOW (+7°) | HIGH (+21°)</strong></p>

<h4>Réchauffeur Shoulder/Foot</h4>
<p>Air pack Gx. <strong>Vol uniquement.</strong> 2 épaules + 2 pieds.</p>

<h4>Réchauffage Door</h4>
<p>1 heater électrique Girt Bar. Réchauffe air conduit clim.</p>
<p><strong>🔧 Seul heater testable MAT.</strong> Condition : vol + 1 pack route.</p>

<h4>Réchauffage Galets</h4>
<p>1 Pack en route.</p>

<h4>Réchauffage Soute AV (géré ELMS)</h4>
<p>Air equipement cooling soute électronique.</p>
<p>Réchauffage si <strong>pas clim soute AV.</strong></p>
<p>Sélecteur P5 <strong>FWD CARGO A/C OFF.</strong></p>
<p>Ouvre Diverter + Heat Valve | Ferme Vent Valve | Arrêt Exhaust Fan (ELMS)</p>
<p>Diverter Valve et Cargo Heat Valve marchent ensemble.</p>
<p>Vent Valve et Equip Inb Valve marchent ensemble.</p>

<h4>Si T° extérieure < 13°</h4>
<p><strong>Divert Valve et Inboard Valve :</strong> Liées électriquement</p>
<p><strong>Vent valve et Forward Cargo :</strong> Fonctionnement inversé</p>
<p><strong>🔧 Surchauffe détectée :</strong> Fermeture vannes → <strong>reset par MAT</strong></p>

<h3>❄️ EQUIPMENT COOLING</h3>

<h4>4 modes fonctionnement</h4>
<p>FWD cargo A/C mode (vent) | FWD cargo heat mode (OVR) | Eqpt cooling smoke mode | FWD cargo fire</p>

<h4>Equipment Cooling Inboard Valve</h4>
<p><strong>Sol clim auto :</strong> Fermée (air → Mix Bay)</p>
<p><strong>Vol clim auto :</strong> Ouverte (même si perte 1 Low Flow Sensor)</p>

<h4>Equipment Cooling Diverter Valve</h4>
<p><strong>Sol clim auto :</strong> Ouverte</p>
<p><strong>Fermée si :</strong> Feu | Switch P5 override | Perte 2 Low Flow Sensor vol | Clim soute AV vol</p>

<h4>Cargo Heat Valve</h4>
<p><strong>Fermée si :</strong> Sol T° > 13° | Clim active</p>
<p><strong>Ouverte si :</strong> Fan coupé | Réchauffage soute AV vol | Réchauffage soute AV + TAT < 10° sol</p>

<h4>Vent Valve</h4>
<p><strong>Fermée si :</strong> Feu | Fumée | Réchauffage soute Av vol | Réchauffage soute Av + TAT < 10° sol</p>

<h4>Override Valve</h4>
<p>Carte <strong>ECSMC Dx.</strong></p>

<h4>Soute Arrière</h4>
<p>Ventilation racks E13-E14 (Rack SATCOM) par Lav/Galley vent fans.</p>
<p>Si 2 Lav/Galley fans HS → démarrage <strong>2 SATCOM backup fans</strong> intégrés (tempo 10s).</p>
<p>Cartes ECSMC : Dx primaire, Gx standby.</p>
<p>Air rejetée <strong>Outflow valve Aft.</strong></p>

<h4>Soute Avant - Surveillance</h4>
<p>Détecteur débit : 2 en vol et sol. Surveillance T° sol.</p>
<p>Duct Press : surveillance présence air.</p>

<h3>⚠️ MODE OVERRIDE</h3>

<h4>En vol - Passage AUTO si</h4>
<p>Baisse débit 2 sondes : Perte 2 flow sensors | Fumée soute élec | Panne 2 Supply Fan | ARM extinction soute AV | P/B P5 override</p>
<p>Carte <strong>ECSMC right primaire</strong> à mise sous tension.</p>

<h4>Au sol</h4>
<p><strong>⚠️ Jamais Switch equipment cooling P5 sur override !</strong></p>
<p>Si flow sensor bas débit ou surchauffe → alarme sonore TAV</p>
<p>Surveillance 4 points par pressure switch.</p>
<p>Si baisse débit : <strong>MSG ADVISORY EQT COOLING + KLAXON TAV</strong></p>
<p>→ SUPPLY FAN OFF | VENT FAN OFF | FERME OVERRIDE VALVE | DÉMARRE CONV SUP CLG FAN</p>
<p><strong>🔧 Reset :</strong> Switch <strong>EQUIP COOLING P5</strong> ou cartes ECSMC.</p>

<h4>Soute Électronique</h4>
<p><strong>Fumée détectée → mode override</strong> (1 détecteur soute AV + 1 détecteur soute MEC)</p>
<p>Smoke detector Soute Avant récupère info fumée (indépendant Soute élec) → ECSMC via ASG Card.</p>

<h4>Converter Supplemental Cooling Fan (backup)</h4>
<p>Fonctionne si : Power up test | Override | Backup gen ON | Perte 2 supply fans</p>

<h4>Supply Fan (2 ventilateurs)</h4>
<p><strong>Dx primaire, Gx backup</strong> (Gx testé mise sous tension).</p>

<h4>Vent Fan</h4>
<p><strong>Arrêt à mise en route moteur.</strong></p>

<h4>ECC - Equipment Cooling Controller</h4>
<p>Fonctionnement <strong>vol uniquement.</strong></p>
<p><strong>2 ECC</strong> (Gx/Dx). Secours panne ECSMC (backup latched ECSMC).</p>
<p><strong>🔧 Reset :</strong> Info sol par PSEU.</p>
<p>Gère low flow uniquement : après 6 min sans détection ECSMC → mode override après 20 min.</p>

<h4>Règles importantes</h4>
<p><strong>Clim soute AV :</strong> Toutes vannes fermées SAUF Vent Valve</p>
<p><strong>Feu soute :</strong> Toutes vannes fermées</p>
<p>Cartes ECSMC GX/DX gèrent ventilation soute électronique.</p>
<p>Commande vannes par ECSMC au travers ECC.</p>
<p>ECC secours panne (backup ECSMC vol uniquement).</p>
<p><strong>ECC : 6 modes</strong> pour récup ventilation. Changent toutes 60s jusqu'à récup.</p>

<h4>Détection Fumée</h4>
<p>E/E Cooling Smoke Detection → passage OVERRIDE</p>
<p>Prélèvement air 2 endroits après Override Valve et Vent Fan.</p>
<p>2 canaux par Chambre.</p>

<h3>📺 VENTILATION IFE</h3>
<p><strong>2 vannes :</strong> Manifold Shutoff + Overboard Shutoff (ECSMC). 1 ouverte, 1 fermée.</p>
<p>Fermées + arrêt fan si feu soute ou fumée manifold IFE (1 détecteur fumée).</p>
<p>Ventilation : 1 GTR route + clim soute AV.</p>
<p><strong>🔧 DISPATCH :</strong> Fan panne → IFE <strong>INOP</strong> (condamné).</p>

<h4>777-300 avec retrofit</h4>
<p>Plus qu'1 ventilateur (overboard supprimé). Extraction MIX BAY. Fan permanent.</p>

<h3>🔧 DIFFÉRENCES 777-300</h3>

<h4>OFAR (1 Zone)</h4>
<p><strong>CTC Gx</strong> commande. Heaters électriques régulés T°.</p>
<p>Air pack gauche via Air Supply SOV (s'ouvre <strong>25000 ft</strong>).</p>
<p>Feu : Ferme Air Supply SOV + Ouvre Exhaust Valve.</p>

<h4>OFCR (3 Zones)</h4>
<p>Air Supply SOV gérée <strong>ELMS.</strong> Pas condition 25000 ft.</p>
<p>3 heaters régulés T°.</p>
<p>Feu : Ferme Air Supply + Ouvre Exhaust Valve.</p>
<p><strong>🔧 Fumée OFCR détectée :</strong> Reset chillers obligatoire.</p>

<h4>Volets RAM AIR EXIT</h4>
<p>Présents mais <strong>désactivés.</strong></p>

<h3>🎈 PRESSURISATION</h3>

<h4>2 Calculateurs ASCPC</h4>
<p><strong>GX Primary | DX Backup</strong></p>
<p>Les 2 capables assurer gestion pressu.</p>
<p><strong>2 modes :</strong> Fixed Rate Control | Minimum Rate Control</p>
<p><strong>🔧 Preflight Test :</strong> Fin chaque mise en route. ASCPC teste Outflow valves.</p>

<h4>Remote Cabin Pressure</h4>
<p>Mesure pression cabine indépendamment ASCPC. Info <strong>ELMS.</strong></p>

<h4>Limites</h4>
<p><strong>Cabin Altitude :</strong> Limite <strong>8500 ft</strong> (rouge EICAS)</p>
<p><strong>Delta P :</strong> <strong>8,6 Psi</strong> (9,25 Psi rouge EICAS)</p>
<p>Pression cabine = altitude terrain + 0,15 Psi (limite 8000 ft ou Delta P 8,6)</p>

<h4>Positive Pressure Relief Valve (2)</h4>
<p>Côté <strong>Gx avion.</strong></p>
<p>Régulent <strong>8,95 Psi → 9,2 Psi</strong></p>
<p><strong>Full open mécanique : 9,42 Psi</strong></p>
<p><strong>⚠️ Pas indication poste. Purement mécaniques.</strong></p>
<p><strong>Témoin rouge</strong> apparaît lors ouverture.</p>

<h4>Negative Pressure Relief Valve (4)</h4>
<p><strong>2 par côté.</strong> Si altitude avion croise altitude terrain.</p>
<p>Ouverture : <strong>-0,2 Psi</strong> | Full open : <strong>-0,5 Psi</strong></p>
<p><strong>⚠️ Pas indication poste. Purement mécaniques.</strong></p>

<h4>OUTFLOW VALVES</h4>
<p>Volets + Vanne Control Unit. <strong>Côté GX</strong> (1 avant, 1 arrière).</p>
<p>Gérées par <strong>1 ASCPC.</strong> 1 seul suffit assurer gestion.</p>
<p>Débit fuite géré par <strong>2 Out Flow Valves.</strong></p>

<h4>Moteurs</h4>
<p><strong>2 moteurs</strong> sur Vanne Control Unit (1 par ASCPC).</p>
<p><strong>Manuel :</strong> Contrôle direct Out Flow Valve.</p>
<p><strong>777-300 :</strong> 3 moteurs (2 ASCPC + 1 manuel).</p>

<h4>Ouverture en régulation</h4>
<p><strong>Normal :</strong> 80% OFV AR | 20% OFV AV</p>
<p><strong>Ouverture 50% AR / 50% AV si :</strong></p>
<p>Clim soute AV | Feu soute | <strong>🔧 1 OFV INOP</strong></p>

<h4>Commandes P5</h4>
<p><strong>AUTO :</strong> ASCPC gère</p>
<p><strong>MAN :</strong> Commande manuelle outflow valves (allume MAN)</p>
<p><strong>DECREASE/INCREASE :</strong> Modif altitude terrain manuelle</p>

<h4>Capteur pression</h4>
<p>ASCPC : prise pression cabine (cabin pressure sense port)</p>
<p><strong>Cabin pressure sensor</strong> corrige pressurisation.</p>

<h3>🔧 RÉSUMÉ MÉCANICIEN PISTE</h3>

<h4>✅ ÉLÉMENTS INTERCHANGEABLES</h4>
<p><strong>Tous éléments pack 1 ⟷ pack 2 SAUF tuyaux</strong></p>
<p>Pack Flow Control Valves (upper/lower)</p>
<p>Torque motors</p>
<p>Pack flow sensors</p>
<p>Sondes température (entre elles et en amont)</p>
<p>TAMV (8 zones + soute)</p>
<p>Recirculating fans upper (2)</p>
<p>Low Limit Valve ⟷ Second Stage Bypass Valve</p>

<h4>🔧 INFOS DISPATCH CRITIQUES</h4>
<p><strong>TAPRSOV fail safe CLOSED :</strong> Dispatch vanne fermée OK</p>
<p><strong>Plug dispatch :</strong> Upper valve (tolérance fermeture)</p>
<p><strong>Si upper HS :</strong> Remplacer par bypass valve (interchangeable)</p>
<p><strong>Recirculating fan panne :</strong> Augmente débit pack auto (dispatch OK)</p>
<p><strong>1 OFV inop :</strong> Ouverture 50/50 AR/AV (dispatch OK)</p>
<p><strong>IFE fan panne :</strong> IFE INOP (condamné)</p>

<h4>🔧 TESTS & CHECKS TERRAIN</h4>
<p><strong>Tests MAT :</strong> Packs COUPÉS obligatoire</p>
<p><strong>Test TAMV au MAT</strong></p>
<p><strong>Test heater door :</strong> Seul testable MAT (vol + 1 pack)</p>
<p><strong>Arrêt pack sol :</strong> Attendre 2 min (déshumidification)</p>
<p><strong>Power up test :</strong> Fans, ASCPC (outflow valves)</p>
<p><strong>Test auto démarrage moteur :</strong> TAPRSOV (CTC full open, vérifie ASCPC ferme)</p>

<h4>🔧 RESET POSSIBLES</h4>
<p><strong>AIR COND RESET (P5) :</strong> CTC, recirculating fans, pack, TAMV</p>
<p><strong>EQUIP COOLING switch (P5) :</strong> Override, surchauffe</p>
<p><strong>Reset MAT :</strong> Surchauffe vannes réchauffage soute</p>
<p><strong>Reset chillers :</strong> Si fumée OFCR (777-300)</p>

<h4>⚠️ RÈGLES SÉCURITÉ</h4>
<p><strong>APU sol :</strong> 2 packs en route OBLIGATOIRE</p>
<p><strong>Jamais override P5 au sol</strong></p>
<p><strong>ARM feu :</strong> Arrêt auto ventilation zone</p>
<p><strong>Flow Control Valve ouverte :</strong> Si pas jus + pression pneumatique</p>
<p><strong>ETOPS :</strong> Jamais croiser CTC/ASCPC</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/pack-cooling.jpg",
                caption: "Pack Cooling - Fonctionnement détaillé du système de refroidissement"
            },
            {
                url: "assets/images/ata21/equipment-cooling.jpg",
                caption: "Equipment Cooling - Schéma de ventilation soute électronique"
            },
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            },
    {
        code: "ATA 22",
        name: "Auto Flight",
        notes: `
<h3>🎯 AFDS - Autopilot Flight Director System</h3>

<h4>Composition</h4>
<p><strong>3 calculateurs AFDC :</strong> AFDC Gx, AFDC Central, AFDC Dx (<strong>3 softs à charger</strong>)</p>
<p><strong>But :</strong> Assistance directeur de vol + pilotage automatique</p>

<h4>⚠️ Règles engagement AP</h4>
<p><strong>Après 60 kts :</strong> On ne peut PAS engager AP au sol</p>
<p><strong>Interdit phase décollage</strong> jusqu'à déjaugeage</p>
<p>AP peut être engagé toutes phases vol sauf décollage jusqu'à déjaugeage</p>

<h4>Engagement Directeur de Vol</h4>
<p>Switchs chaque côté <strong>MCP</strong> pour engager directeur vol</p>
<p><strong>Si AP engagé sans FD :</strong> Engagement mode latéral (cap) + vertical (vario)</p>
<p><strong>2 cibles :</strong> Latérale (cap) | Verticale (vario)</p>

<h4>🔧 Engagement AP (P/B MCP)</h4>
<p><strong>B/P AP Dx ou Gx</strong> du MCP :</p>
<p>→ Alimentation <strong>3 AFDC</strong> connectés aux <strong>BUS Flight Control</strong></p>
<p>→ <strong>B/P Dx :</strong> Référence barométrique <strong>EFFIS Dx</strong></p>
<p>→ <strong>B/P Gx :</strong> Référence barométrique <strong>EFFIS Gx</strong></p>

<h4>TAC - Thrust Assymetry Compensation</h4>
<p>Dans commandes vol électriques. Agit sur <strong>dérive</strong> pour neutraliser dissymétrie.</p>

<h3>🎮 Axes AP & Back Drives Actuators</h3>

<h4>AP 2 axes (phases normales)</h4>
<p><strong>Toutes phases vol sauf décollage/atterrissage :</strong> 2 axes (ailerons + profondeur)</p>

<h4>AP 3 axes (décollage/atterrissage)</h4>
<p><strong>Décollage et atterrissage :</strong> 3 axes (ailerons + profondeur + direction)</p>

<h4>🔧 Servo-moteurs (Back Drives Actuators)</h4>
<p><strong>6 servo-moteurs totaux :</strong> 2 par système (manche, volant, palonniers)</p>
<p><strong>AFDC Gx :</strong> Utilise 3 servo-moteurs côté Gx</p>
<p><strong>AFDC Dx :</strong> Utilise 3 servo-moteurs côté Dx</p>

<h4>Fonctionnement servo-moteurs</h4>
<p><strong>En croisière (AFDC Dx) :</strong> 1 servo volant + 1 servo manche actifs (<strong>2 en vol</strong>)</p>
<p><strong>En approche/Take Off (AFDC Gx + Dx) :</strong> 2 servo volant + 2 servo manche + 2 servo palonniers actifs (<strong>6 à l'atterrissage</strong>)</p>

<h4>🔧 Rôle Back Drives</h4>
<p>AP engagé → volant, manche, palonniers se déplacent pour <strong>simuler</strong> ce que fait AP</p>
<p><strong>⚠️ Donnent image déplacement gouvernes mais NE LES COMMANDENT PAS</strong></p>

<h4>Basculement AFDC</h4>
<p><strong>Mise sous tension :</strong> AFDC Dx maître</p>
<p><strong>À chaque désengagement AP :</strong> Basculement sur autre AFDC</p>
<p><strong>AP engagé à 1500 ft :</strong> Engagement 3 calculateurs AFDC → 6 back drives actuators actifs</p>

<h3>🎛️ Commande Gouvernes</h3>
<p><strong>AP engagé :</strong> Commandes vol agissent sur surfaces <strong>indépendamment de ce qui est affiché</strong></p>
<p>Passage par <strong>PFC (Primary Flight Control)</strong></p>
<p><strong>AFDC donnent ordres aux PFC</strong></p>
<p>Calculateurs qui commandent gouvernes : <strong>ACE (Actuator Control Electronic)</strong></p>
<p><strong>⚠️ On ne peut engager AP que si PFC opérationnels</strong></p>

<h3>🎛️ MCP - Mode Control Panel</h3>
<p><strong>Ne passe PAS par OPAS</strong></p>
<p><strong>Interface principale</strong> entre équipage et :</p>
<p>AP (autopilot) | FD (flight director) | TM (thrust management) | FM (flight management)</p>

<h4>L NAV & V NAV</h4>
<p><strong>L NAV :</strong> S'engage à <strong>50 ft</strong></p>
<p><strong>V NAV :</strong> S'engage à <strong>400 ft</strong></p>

<h4>Architecture MCP</h4>
<p><strong>2 canaux</strong> (micro-processeur), alimentation indépendante + 1 contrôleur</p>
<p><strong>Si 1 canal défaut :</strong> Message <strong>LANE A</strong> ou <strong>LANE B FAULT</strong></p>

<h3>🔧 AFDC - Détails techniques</h3>

<h4>Alimentation</h4>
<p><strong>2 alimentations :</strong></p>
<p>1 normale | 1 <strong>HOT BAT BUS</strong> secours (affichage pannes)</p>

<h4>Architecture</h4>
<p><strong>3 microprocesseurs</strong></p>

<h4>🔧 Déconnexion AP</h4>
<p><strong>B/P déconnexion AP sur manche :</strong> Montés en <strong>série</strong></p>
<p><strong>Barre blanche MCP :</strong> Coupe alimentation AP + alimentation servo-moteurs</p>
<p><strong>⚠️ Plus de protection back angle</strong></p>

<h4>🔧 Antennes ILS</h4>
<p><strong>Antenne radôme :</strong> Suivi <strong>non précis</strong> du glide</p>
<p><strong>Antenne portes T AV :</strong> Suivi <strong>précis</strong> du glide</p>

<h4>🔧 Tests MAT</h4>
<p><strong>Fonctions spéciales ATA 22 :</strong> Commutation antennes dans AFDC</p>
<p><strong>Ground test ATA 22 :</strong> Autres tests</p>

<h3>⚡ TMCS - Thrust Management Computing System</h3>

<h4>Vue d'ensemble</h4>
<p><strong>Automanette utilisable toutes phases vol</strong></p>
<p><strong>Implanté dans :</strong> CPM BASIC ou ACMS</p>
<p><strong>Interface utilisateur :</strong> MCP</p>

<h4>5 modes Autothrottle</h4>
<p><strong>THR REF :</strong> Poussée fixe</p>
<p><strong>THR :</strong> Poussée variable</p>
<p><strong>SPEED :</strong> Automanette gère vitesse avion</p>
<p><strong>IDLE :</strong> Ralenti vol</p>
<p><strong>HOLD :</strong> Désengagement temporaire</p>
<p>Les 5 modes s'affichent dans <strong>PFD</strong></p>

<h4>Architecture servo-moteurs</h4>
<p><strong>2 servo-moteurs (1 par manette)</strong></p>
<p>Données en <strong>ARINC 429</strong> via <strong>IOM</strong></p>

<h4>🔧 Engagement système</h4>
<p><strong>Condition :</strong> Système armé au MCP (<strong>B/P A/T ARM</strong>)</p>

<h4>Engagement auto</h4>
<p><strong>V NAV</strong> ou <strong>FLT LEV CHANGE</strong></p>

<h4>Engagement manuel</h4>
<p>Par switchs <strong>TO/GA</strong> (palettes sur manettes)</p>

<h4>🔧 Déconnexion</h4>
<p>Switchs sur <strong>côtés boules manettes</strong> de poussée</p>

<h4>⚠️ Points importants</h4>
<p><strong>Automanette ne déclenche PAS message WARNING</strong></p>

<h4>🔧 Tests MAT</h4>
<p><strong>MAT ATA 22 menu ground tests</strong></p>
<p>Depuis armoire AIMS Dx ou Gx → teste <strong>2 servo-moteurs</strong></p>

<h3>🔧 RÉSUMÉ MÉCANICIEN ATA 22</h3>

<h4>✅ INTERCHANGEABLES</h4>
<p><strong>AFDC Gx ⟷ AFDC Dx</strong> (3 softs à charger)</p>
<p><strong>Servo-moteurs back drives</strong> (même côté uniquement)</p>

<h4>🔧 INFOS DISPATCH</h4>
<p><strong>AP pas engageable sol après 60 kts</strong></p>
<p><strong>PFC opérationnels obligatoire</strong> pour engagement AP</p>
<p><strong>Automanette pas de WARNING</strong> si panne</p>
<p><strong>MCP 2 canaux :</strong> 1 canal suffit (LANE A ou B FAULT acceptable dispatch)</p>

<h4>🔧 TESTS TERRAIN</h4>
<p><strong>MAT ATA 22 fonctions spéciales :</strong> Commutation antennes ILS</p>
<p><strong>MAT ATA 22 ground tests :</strong> Tests AP + Autothrottle (2 servo-moteurs)</p>
<p><strong>Test depuis AIMS Dx ou Gx</strong></p>

<h4>⚠️ RÈGLES SÉCURITÉ</h4>
<p><strong>B/P déconnexion AP manche :</strong> Montés série</p>
<p><strong>Barre blanche MCP :</strong> Coupe alimentation AP + servo-moteurs (plus protection back angle)</p>
<p><strong>3 AFDC engagés à 1500 ft :</strong> 6 back drives actifs</p>
<p><strong>Croisière :</strong> 2 servo-moteurs | <strong>Approche/TO :</strong> 6 servo-moteurs</p>

<h4>🔧 ARCHITECTURE CLÉS</h4>
<p><strong>AFDC :</strong> 3 microprocesseurs + 2 alimentations (normale + HOT BAT BUS)</p>
<p><strong>MCP :</strong> 2 canaux micro-processeur + 1 contrôleur</p>
<p><strong>Antennes ILS :</strong> Radôme (non précis) | Portes T AV (précis)</p>
<p><strong>Basculement AFDC :</strong> À chaque désengagement AP</p>

<h4>🔧 COMMANDES GOUVERNES</h4>
<p><strong>AFDC → PFC → ACE → Gouvernes</strong></p>
<p>Back drives actuators simulent mouvements mais <strong>ne commandent PAS gouvernes</strong></p>
        `,
        schemas: [
            {
                url: "assets/images/ata22/afds-system.jpg",
                caption: "AFDS - Autopilot Flight Director System Architecture"
            }
        ]
    }
]; 

