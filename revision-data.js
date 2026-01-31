const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande et contrôle au poste en P5 via l'OPAS puis l'ARINC 629 (BUS systems)</p>
<p><strong>5 fonctions :</strong> Pack flow (Régul/Off), Pack cooling mixmanifold Temp, Trim air (Régul/Off), Zone Temp, Recirculation d'air</p>

<h3>🎛️ CTC (Cabin Temperature Controllers)</h3>
<p><strong>2 CTC :</strong> CTC DX gère et agit sur le pack Dx / CTC Gx gère et agit sur le pack Gx</p>
<p>Plusieurs fonctions, dès qu'il y a régulation du pack c'est par le CTC</p>
<p><strong>On ne croise jamais ni les CTC, ni les ASCPC entre eux (ETOPS oblige)</strong></p>
<p>Ils sont alimentés par la XFR BUS et agissent sur les packs en analogique</p>
<p><strong>Si CTC en défaut :</strong> l'ASCPC prend la commande du pack avec la LOWER FLOW CONTROL VALVE en priorité. Reset par le switch en P5 AIR COND RESET</p>

<h3>⚙️ ASCPC (Air Supply Cabin Pressure Control)</h3>
<p><strong>2 ASCPC :</strong> peuvent gérer les packs et surveiller la température (Pack Trip). <strong>Le Gx pour le pack Gx et le Dx pour le pack Dx</strong></p>
<p>Le contrôle de débit est calculé par l'ASCPC par son Manifold Flow Sensor au cas où il y a perte d'infos du Pack Flow Sensor</p>

<h4>Pack Flow Schedule (5 flow)</h4>
<p>→ 0 pas d'air (dém GTR)</p>
<p>→ 1 à 4 plus on monte, moins il y a d'air</p>
<p>→ 2 si juste 1 pack</p>
<p>→ 4 sert à maintenir la pressurisation</p>
<p>Plage flow schedule fonction du nombre de Pax, et en fonction de l'altitude</p>
<p>Si recirculating Fan en panne, on va augmenter le pack flow schedule (le débit du pack)</p>

<h4>Mode Backup</h4>
<p>L'ASCPC sert de Backup au CTC pour les fonctions importantes (2 canaux CTC HS)</p>
<p><strong>3 Signaux :</strong> Digital, Analogique, Pneumatique. Il assure le backup uniquement si lui-même n'a pas de pannes</p>
<p><strong>ASCPC Backup :</strong> flow control, T° sortie compresseur, T° sortie pack</p>

<h4>🔧 Points importants</h4>
<p><strong>Tous les éléments sont interchangeables entre le pack n°1 et 2, sauf les tuyaux</strong></p>
<p>A la coupure d'un pack au sol par le sélecteur en P5, il faut attendre 2 minutes pour l'arrêt complet du pack, ce qui sert à déshumidifier le pack</p>
<p>Si on alimente les packs par l'APU au sol, mettre les 2 packs en route</p>

<h3>🔧 ECSMC</h3>
<p>2 cartes du système Card File (P85 et P84). ECSMC Gère réchauffage soute + équipement cooling</p>
<p><strong>A chaque mise sous tension la carte DX est primaire et la GX est en Backup</strong></p>
<p>2 petits controllers pour équipement cooling</p>

<h3>❄️ COOLING - Pack Flow Control</h3>
<p>Système de régulation du débit d'air pour les packs géré par les CTC</p>
<p><strong>CTC GX pour le Pack GX et CTC DX pour le Pack DX</strong></p>
<p>Info air/sol donnée aux CTC par les PSEU</p>

<h4>4 Pack Flow Control (2 par Pack)</h4>
<p>Elle régule le débit d'air qui va dans le pack</p>
<p><strong>Identiques et interchangeables</strong></p>
<p><strong>Elles sont commandées par le CTC et Backup par ASCPC</strong>. Prise de la T° à l'entrée du pack</p>
<p><strong>1 Upper :</strong> ouverte à basse altitude (closed à 26000 Fts)</p>
<p><strong>1 Lower :</strong> ouverte à partir de 26000 Fts. Passage de l'air dans l'Ozone converter</p>
<p><strong>Les 2 Pack Flow Control ne fonctionnent jamais en même temps (si UPPER ouverte, LOWER fermée)</strong>, il n'y a qu'à l'arrêt qu'elles sont dans la même position. Info transmise à partir de la position de 2 proximity switchs</p>
<p>Pour l'allumage du voyant pack OFF sur le P/B, il faut que les 2 vannes soient fermées (2 switches 1 par vannes soient détectés CLOSE par le CTC)</p>

<h4>Torque Motors (2 par Pack flow control)</h4>
<p><strong>1 pour le CTC</strong> (régul de position)</p>
<p><strong>1 pour l'ASCPC.</strong> L'ASCPC ferme la upper et régule la lower en backup</p>
<p>Si les torques motors ne sont pas alimentés, les vannes seront pleines OPEN</p>
<p>1 plug pour le dispatch (Tolérance de la upper en fermerture)</p>

<h4>Pack flow sensor</h4>
<p>2 differential pressure sensor : CTC / ASCPC</p>
<p>1 inlet pressure sensor CTC</p>
<p>Débit massique pour asservissement Flow Control Valve (si un sensor HS on remplace le Pack Flow sensor)</p>
<p>T° entrée échangeur prise aussi en compte pour le débit massique. <strong>Sondes interchangeables avec les autres sondes en amont</strong></p>
<p>Si CTC n'a plus d'info de T° dispo, il la demande à L'ASCPC</p>
<p>Augmentation du débit massique d'air (schedule 1) pour chaque recirculating en panne</p>

<h4>Fermeture Flow control valve</h4>
<p>→ Pack outlet overheat 88°c</p>
<p>→ Compresseur discharge overheat 252°c</p>
<p>→ Pack Fail</p>
<p>→ Pack flow schedule 0</p>
<p><strong>ATTN :</strong> Flow Control Valve ouverte si pas de jus sur avion et pression pneumatique</p>

<h3>🌡️ Ozone Converter</h3>
<p>Transforme l'ozone en O² en haute altitude</p>
<p>Pas de passage d'air en basse altitude, en dessous 26000 fts passage par la vanne upper</p>
<p>Le P/B en P5 du pack commande l'ouverture de la vanne et les CTC font la régulation de débit en fonction de la T° de l'Inlet Primary Heat Exchanger</p>

<h3>🔧 Description composants</h3>
<p><strong>RAM Inlet Door :</strong> commandée par CTC seulement. Ouverte au sol, pleine fermée en vol. En fonctionnement normal elle sera régulée pour réguler la T° sortie compresseur. Fermeture possible par le MAT</p>
<p><strong>Economy Cooling Check Valve :</strong> Permet au débit d'air de passer autour de l'ACM au démarrage du Pack ou en cas de panne de l'ACM et en vol car l'air est plus froid</p>
<p><strong>Échangeur Thermique :</strong> 2 échangeurs refroidis par l'air qui vient de la ram air (échangeur AIR/AIR)</p>
<p><strong>ACM :</strong> 1 compresseur, 2 turbines T1 et T2 qui entraînent une inlet fan. Montés sur un même arbre, palier à air (attn au sens de rotation)</p>
<p><strong>Condenseur/Reheater :</strong> 2 fonctions (Retirer l'eau, Réchauffer l'air pour lui donner de l'énergie)</p>
<p>11 sondes de température (protection et contrôle) : 9 pour le CTC, 2 pour l'ASCPC (sortie compresseur, sortie pack)</p>
<p>4 sondes de température sur le Mix Manifold, 2 par CTC</p>

<h4>Low Limit Valve</h4>
<p>Sert à bypasser la turbine T1. Le CTC utilise cette vanne pour limiter ou interdire une température négative en entrée condenseur en régulant la vitesse de rotation turbine (RVDT pour info au CTC)</p>
<p>Fermeture si Air T° à la sortie de la turbine T1 est < 1°C. Elle surveille qu'on est toujours > 1° en sortie turbine</p>
<p><strong>Low Limit Valve et Bypass Valve identiques</strong></p>

<h4>Second Stage Turbine Bypass Valve</h4>
<p>Le CTC utilise cette vanne pour réguler la température de sortie du pack. Elle sert à bypasser la turbine T2. RVDT pour info au CTC</p>
<p><strong>Low limit valve et second stage turbine bypass interchangeables, conseillé si low limit valve HS</strong></p>

<h4>Economy Cooling Valve</h4>
<p>Commandée par l'ELMS. Elle est tout ou rien. Ouverte à haute altitude (25000feet, air sec)</p>
<p>Donc l'air ne passe plus à travers le Condenser/Reheater et par l'ACM</p>
<p>Ouverture de cette vanne lorsque l'on est en mode Economy (pas de FDE) ou Standby Cooling Mode</p>
<p>Vanne Safe Fail open</p>
<p>Quand Economy Cooling Valve open : Low Limit Valve et Bypass Valve open</p>

<h4>Conditioned Air Check Valve</h4>
<p>Clapet anti-retour à la sortie du pack. Elle sert à éviter la perte de pressurisation en cabine en cas de fuite sur le pack</p>

<h4>Economy Cooling Check Valve - Usage</h4>
<p>Pour bypasser le compresseur : en cas de mise en route GTR, en mode economy, ACM HS, en mode standby</p>

<h3>🌡️ Indication Température</h3>
<p><strong>Condenser Inlet Temp Sensor (X2) :</strong> Pilotage Low Limit Valve</p>
<p><strong>IMMTE (Integrated Mix Manifold Temperature) :</strong> 4 sondes, 2 par CTC. Gestion T° cabine, sera calculée par CTC DX, et suivie par CTC GX. C'est la température de référence de sortie pack en fonction de l'autre pack (différence maxi 5°)</p>

<h4>2 T° critiques</h4>
<p>→ T° sortie compresseur</p>
<p>→ T° sortie pack</p>
<p><strong>Régul T° sortie compresseur :</strong> <171° régulation Ram air door / >171°<179° Ram air door full open / >179°<232° Baisse de débit / >232° Pack trip</p>
<p><strong>T° sortie pack :</strong> sonde CTC 88°C maxi / sonde ASCPC 96°C maxi</p>

<h4>STANDBY COOLING MODE</h4>
<p>ACM Failure, Sondes de température d'entrée Condenser 1&2 Fails, Economy Cooling Valve failed Open + TBV full Open</p>
<p>L'air passe directement par la Check Valve</p>

<h4>ECONOMY COOLING MODE</h4>
<p>En vol en haute altitude, Si l'ACM fonctionne, Si T° entrée condenser valide, Si TAT < 7°</p>

<h3>🌡️ TEMPERATURE CONTROL</h3>
<p>Régulation du débit d'air. Régulation par CTC seulement</p>
<p><strong>CTC Dx :</strong> 3 Zones B-D-F et régulation soute AV</p>
<p><strong>CTC Gx :</strong> 3 Zones A-C-E et régulation Flight Deck</p>
<p>2 P/B (ON/FAULT)</p>
<p><strong>2 Rotateurs de sélection (1 F/D et 1 cabine) : 18° à 29°</strong></p>
<p><strong>1 rotateur pour la soute AV : 4° à 27°</strong></p>
<p>Info à l'OPAS pour ARINC 629</p>
<p>Température Master env. 24° au poste avec réglage en cabine pour ajustement par zones à partir des CSCP/CACP +/- 6°</p>
<p>Surchauffe de la gaine à 71° fermeture de la modulating valve qui correspond</p>

<h4>Si Fault - Fermeture Trim Air Pressure Regulating and Shutoff Valve</h4>
<p>→ Surchauffe de la gaine > 88°</p>
<p>→ Plus d'info de pression du Trim Air Pressure Sensor</p>
<p>→ Défaut des 2 canaux du CTC</p>
<p><strong>Reset possible du Pack par P/B en P5 ou par AIR COND RESET</strong></p>
<p>Sélecteur CABIN TEMP en P5 : IMMTE qui gère</p>
<p>Dans le MAT on a une fonction spéciale pour ouvrir ou fermer la RAM AIR INLET DOOR</p>
<p><strong>Les tests au MAT se font packs coupés</strong></p>

<h3>🔧 Trim Air Pressure Regulating and Shutoff Valve (TAPRSOV)</h3>
<p><strong>X2 (1 par côté)</strong></p>
<p>Le CTC régule la TAPRSOV pour maintenir la pression de sortie supérieure de 5 PSI à la pression cabine (régulation 2 à 8,5 Psi) par des info de pression donné par 2 trim air pressure sensors</p>
<p><strong>L'ASCPC peut couper la TAPRSOV en mode Backup</strong> : commandé par un shutoff solenoid pour la fermeture (P/B Off, Stall Warning, Pack Flow schedule 4)</p>
<p>A chaque démarrage GTR, test auto Trim Air Shutoff Valve : le CTC la commande pleine ouverte et s'assure que l'ASCPC est capable de la fermer</p>
<p><strong>CTC Gx pour le coté Gx et CTC Dx pour le coté Dx</strong></p>
<p><strong>Fail safe closed, dispatch vanne fermée. Si FCV fermée (pack trip), TAPRSOV fermée</strong></p>

<h3>🌡️ Trim Air Modulating Valve (TAMV)</h3>
<p><strong>X8 (1 par Zone) + 1 pour la soute AV</strong></p>
<p>Régulée par le CTC asservi par 1 RVDT</p>
<p><strong>Identiques et interchangeables</strong></p>
<p>En cas de panne d'une Trim air Modulating Valve ouverte à plus de 10%, fermeture de la TAPRSOV puis maintien de la pression à 2 PSI puis ouverture en plus grand des autres Trim air modulating Valve</p>
<p><strong>La Trim Air Modulating Valve du poste est gérée par le CTC Gx. Seule trim air pouvant être commandée en manuel, et seule qui a un synoptic à l'EICAS</strong></p>
<p>Si panne du CTC gauche, grâce à la commande manuelle du rotateur, on peut ouvrir et fermer la vanne au travers de l'ELMS</p>
<p>En cas de panne de RVDT d'une TAMV, la régulation en T° sera faite par les Zone Duct Temp Sensor (open loop)</p>

<h3>🌡️ Sondes de Température</h3>
<p><strong>Zone Duct Temp Sensor :</strong> 2 sondes par conduits. Pour anticiper les variations de température. Si panne des 2 sondes du même Duct, fermeture de la TAMV de la zone concernée</p>
<p><strong>Sondes cabine (Zone air Temperature Sensor) :</strong> Info aux 2 canaux du CTC. Pour le F/D info au CTC Gx et Dx</p>
<p>La ventilation des sondes cabines est effectuée par aspiration de l'air devant cette sonde. Aspiration par Lavatory/galley vent fans</p>
<p><strong>En cas de panne des sondes cabines régulation par Zone Duct Temp Sensor</strong></p>
<p>A 71° dans le Duct fermeture Trim Air Modulating valve de la zone</p>
<p>A 88° dans le Duct Fermeture de la TRIM AIR PRSOV</p>
<p>En fonctionnement manuel plus de passage de commande par le CTC de la TAMV</p>
<p><strong>La TAMV de la soute avant ne peut s'ouvrir que si la A/C SOV FWD CARGO est ouverte</strong>, info au CTC et lav/gly vent fans off</p>
<p>En cas de panne des 2 sondes de température soute avant, plus de climatisation en soute avant</p>
<p>En cas de différence de pression cabine entre les 2 ASCPC, l'info est prise sur le Remote Cabin Press Sensor pour lever le doute</p>
<p>Le Trim Air Pressure Sensor envoie l'info de pression régulée après la TAPRSOV au CTC</p>

<h3>🌀 DISTRIBUTION - Recirculation d'air cabine</h3>
<p><strong>But : gagner 50% sur l'efficacité des packs</strong></p>
<p><strong>2 recirculating FAN Upper :</strong> 1 à l'avant de l'avion et 1 à l'arrière, identique et interchangeable</p>
<p><strong>2 recirculating FAN Lower :</strong> en soute avant non identiques (Dx + gros car prise pour la soute AV)</p>
<p>Surveillés par les cartes ECSMC et commandés par le CTC Dx en priorité, le CTC Gx en Backup</p>
<p>Fonctionnement surveillé par : Les cartes ECMCS en cas de surchauffe, L'ELMS pour la consommation de courant</p>
<p>Addition d'air recyclée : 50% d'efficacité en plus sur les packs</p>
<p>Coupure recirculating INF si feu soute AV</p>
<p>2 Commandes en P5 (1 pour les LOWER et 1 pour les UPPER)</p>
<p><strong>Resetables par switch en P5 : AIR COND RESET</strong></p>
<p>Si 1 recirculating Fan en panne, augmentation du débit du pack</p>

<h3>💨 Ventilation (Système automatique)</h3>
<p><strong>Lavatory/Galley Vent Fan (X2) :</strong> fonctionnement en auto dès mise sous tension avion, si pas d'overheat, pas de feu. Arrêt si armement CARGO AFT FIRE</p>
<p>Ils servent à ventiler les galleys, Lavatories, les sondes de température Zone et les équipements sur les étagères de la cabine AR (E11, E12, E7)</p>
<p>Le droit fonctionne en permanence, le gauche en backup. Power Up Test du Gx pendant 20 secondes avant la mise en route du Dx. Situés dans la soute bulk</p>
<p><strong>Bulk Cargo Ventilation Fan :</strong> Lors de transport d'animaux. Mise en route par Cargo TEMP Select sur HIGH. Arrêt si armement CARGO AFT FIRE</p>
<p><strong>Exhaust Fan :</strong> Mise en route lors de la climatisation soute AV et switch sur AUTO. Récupération de l'air en fond de soute puis éjection au niveau de la FWD OUTFLOW VALVE</p>
<p>La fwd cargo air conditioning shutoff valve (A/C SOV) contrôle l'air qui vient du mix manifold vers la soute avant. Il est coupé si armement CARGO FWD ou AFT FIRE, si on réchauffe la soute AV</p>
<p><strong>Chiller Boost Fan :</strong> Extraction air chaud des Chillers soit au niveau de la porte 2 GX (en vol) ou par la Mix bay (au sol)</p>
<p>Si TAT < 7° ou si ARM CARGO FIRE, coupure des Chiller Boost Fan. Si TAT > 7° au sol Chiller Boost Fan ON</p>
<p>2 vannes : crown (fonctionne en vol, porte 2 GX), Lower (fonctionne au sol, Mix bay)</p>
<p><strong>En cas d'Armement Extinction Incendie, arrêt automatique de la ventilation de la zone concernée</strong></p>

<h3>🔥 Climatisation - Soute avant</h3>
<p>1 Trim Air Modulating Valve, fonctionnement identique à une zone cabine. La soute avant a son propre sélecteur</p>
<p><strong>Air Conditioning Shut Off Valve :</strong> Ouverture de cette vanne si Pack On FWD CARGO A/C switch AUTO et FIRE SW not Armed, et si trim air modulating valve ouverte. Elle est située en aval. Info de position surveillée par la carte ECMCS Dx</p>
<p><strong>Air Supply Shut Off Valve :</strong> Permet l'alimentation du LLAR. Pour fonctionnement au sol : PACK GAUCHE OFF, GRND HANDLING BUS alimentée et Hatch ouvert. Fonctionnement en vol >25000Fts</p>

<h3>🔥 Réchauffage</h3>
<p><strong>Réchauffage LLAR (géré par le CTC Gx et alimenté par l'ELMS) :</strong> 2 Heaters. Ils ne fonctionnent qu'en vol et LLAR SOV Relay OPEN. Le pack left fournit directement au LLAR à travers l'AIR SHUT OFF VALVE qui s'ouvrira à 25000ft. Au sol ouverte dès que le pack est coupé. 2 sondes de température qui envoient leurs infos au CTC Gx. Trappe accès LLAR fermée ou test incendie = valve fermée. Voyant dans le LLAR à l'entrée</p>
<p><strong>Réchauffage CRAH :</strong> 1 heater. Pack sur on, au sol ou en vol</p>
<p>Pour le 300 il existe une exhaust valve pour la fumée dans le OFCR et OFAR direction lavatory galley vent fans. Pour OFAR, mêmes limitation que sur 200. Pour OFCR pas de limitation altitude. OFAR, mise en route auto des heaters si T° air duct <4°C</p>
<p><strong>Réchauffage soute AR et Bulk (4 vannes) :</strong> Air chaud prélevé sur conduit pneumatique, régulation par température Sensor info aux cartes ECMCS. Elles ont chacune 2 vannes en série (tout ou rien) : pneumatic system air (shut off), Heat valve si T°<10° (Temp. CTL). Commandées par ELMS GX et DX. Sélecteur Cargo TEMP SELECT : OFF, LOW (+7°), HIGH (+21°)</p>
<p><strong>Réchauffeur Shoulder/Foot :</strong> air provenant du pack Gx. Ne fonctionnent qu'en vol, 2 pour les épaules et 2 pour les pieds</p>
<p><strong>Réchauffage Door :</strong> 1 heater électrique pour la Girt Bar. Il réchauffe de l'air venant du conduit de climatisation. <strong>Seul heater que l'on peut Tester au MAT</strong>. Condition vol+1 Pack en route. Réchauffage galets : 1 Pack en route</p>
<p><strong>Réchauffage soute Avant (géré par l'ELMS) :</strong> Air en provenance de l'Equipement cooling de la soute électronique. Réchauffage si pas de climatisation soute Avant. Sélecteur en P5 FWD CARGO A/C OFF. Ouverture Diverter Valve, fermeture Vent Valve, ouverture Heat Valve, arrêt Exhaust Fan (ELMS). La Diverter Valve et la Cargo Heat Valve marchent ensemble. La Vent Valve et la Equip Inb Valve marchent ensemble. Si température extérieure < 13° : Divert Valve et Inboard Valve (Vannes liées électriquement), Vent valve et Forward Cargo (Fonctionnement inversé). <strong>En cas de détection de surchauffe fermeture des vannes, reset par le MAT</strong></p>

<h3>❄️ EQUIPEMENT COOLING</h3>
<p><strong>4 modes :</strong> FWD cargo air conditioning mode (vent), FWD cargo heat mode (OVR), eqpt cooling smoke mode, FWD cargo fire</p>
<p><strong>Equipment cooling inboard valve :</strong> Au sol avec climatisation sur auto, elle est fermée (enverra l'air dans la Mix Bay). En vol avec climatisation sur auto, elle est ouverte, même si perte d'un Low Flow Sensor</p>
<p><strong>Equipment cooling diverter valve :</strong> Au sol clim sur auto = ouverte. Fermée en cas de feu, switch P5 sur override, perte des 2 Low Flow Sensor en vol, climatisation soute AV en vol</p>
<p><strong>Cargo Heat Valve :</strong> Au sol T°>13° (fermée), Si clim (fermée), Fan coupé (ouverte). Ouverte en vol si réchauffage soute AV et ouverte au sol si réchauffage soute AV et TAT<10°</p>
<p><strong>Vent Valve :</strong> Fermée si feu, fumée, si réchauffage soute Av en vol, si réchauffage soute Av et TAT<10° au sol</p>
<p><strong>Override Valve :</strong> carte ECSMC Dx</p>

<h4>Soute Arrière</h4>
<p>Ventilation des racks E13-E14 (Rack SATCOM). Ventilation effectuée par les LAV/Galley vent fans</p>
<p>Si les 2 LAV/Galley vent fans en panne, démarrage des 2 ventilateurs "satcom backup fan" intégrés au SATCOM après un tempo de 10s</p>
<p>Cartes ECSMC : Le Dx primaire, le Gx en standby. Air rejetée au niveau de l'outflow valve Aft</p>

<h4>Soute Avant - Surveillance</h4>
<p>Détecteur de débit au nombre de 2 en vol et au sol. Surveillance de la température au sol. Duct Press : Surveillance de la présence d'air</p>

<h3>⚠️ MODE OVERRIDE</h3>
<p><strong>En vol :</strong> passage AUTO en mode OVERRIDE si baisse de débit des 2 sondes : perte des 2 flow sensors, détection de fumée dans la soute électronique, panne des 2 Supply Fan, Armement extinction incendie Soute Avant, P/B en P5 sur Override</p>
<p>C'est la carte ECSMC right qui gère en primary à la mise sous tension</p>
<p><strong>Au sol :</strong> jamais Switch equipement cooling en P5 sur override. Si un flow sensor détecte un bas débit ou une surchauffe (alarme sonore TAV). Surveillance en 4 points par pressure switch. Si baisse de débit MSG ADVISORY EQT COOLING + KLAXON au TAV (SUPPLY FAN OFF, VENT FAN OFF, FERMETURE OVERRIDE VALVE, MISE EN ROUTE DU CONV SUP CLG FAN)</p>
<p><strong>Reset par le switch EQUIP COOLING en P5 ou par les cartes ECSMC</strong></p>
<p><strong>Soute électronique :</strong> Détection fumée → mode override (1 détecteur fumée soute AV et 1 détecteur soute MEC). C'est le smoke detector Soute Avant qui récupère l'info de détection fumée, bien qu'indépendant de la Soute élec, vers ECSMC via les ASG Card</p>
<p><strong>Converter Supplemental Cooling Fan (converter backup) :</strong> Power up test, Override, Backup Génération ON, perte des 2 supply fans</p>
<p><strong>Supply fan :</strong> 2 ventilateurs, le Dx fonctionne en primaire, le Gx en backup (Gx testé à la mise sous tension). Vent Fan : Arrêt à la mise en route moteur</p>
<p><strong>ECC (Equipment Cooling Controller) :</strong> fonctionnement uniquement en vol. 2 ECC (1 Gx et 1 Dx). C'est le secours en cas de panne des cartes ECSMC (backup latched ECSMC). Reset par info sol donnée par PSEU. Il gère uniquement le low flow : après 6 minutes sans détection de l'ECSMC, en mode override après 20 minutes</p>
<p>Lorsque l'on climatise la soute AV, toutes les vannes se ferment sauf la Vent Valve. Si on a un feu soute, toutes les vannes se ferment</p>
<p>Les cartes ECSMC GX et DX gèrent la ventilation soute électronique. La commande des vannes se fait par les cartes ECSMC au travers des ECC. ECC secours en cas de panne (backup ECSMC uniquement en vol). Les ECC ont 6 modes pour tenter de récupérer la ventilation : les 6 modes changent toutes les 60s jusqu'à la récupération de la ventilation</p>
<p><strong>Détection de fumée :</strong> E/E Cooling Smoke Detection, Passage en mode OVERRIDE, Prélèvement d'air à 2 endroits après l'Override Valve et Vent Fan, 2 canaux par Chambre</p>

<h3>📺 VENTILATION IFE</h3>
<p>2 vannes : 1 Manifold Shut Off Valve (commande cartes ECSMC), 1 Overboard Shut Off Valve. 1 ouverte et 1 fermée</p>
<p>Fermées toutes les 2 + arrêt fan si feu soute ou si détection fumée dans le manifold IFE (1 détecteur de fumée)</p>
<p>Ventilation quand 1 GTR en route et climatisation soute Avant. <strong>Fan en panne : IFE condamné (inop)</strong></p>
<p>Sur derniers 300 avec retrofit, il n'y a plus qu'un ventil (overboard supprimé) : extraction dans la MIX BAY, le fan fonctionne tout le temps</p>

<h3>🔧 DIFFÉRENCES 777-300</h3>
<p><strong>OFAR (1 Zone) :</strong> CTC Gx qui commande. Réchauffeurs électriques régulés par régulateur de T° chauffent de l'air en provenance du pack gauche à travers l'Air Supply SOV qui s'ouvrira à 25000ft. Fermeture de l'Air Supply SOV et ouverture de l'Exhaust Valve en cas de feu</p>
<p><strong>OFCR (3 Zones) :</strong> 1 Air Supply SOV gérée par l'ELMS. Il n'y a pas de condition 25000ft. 3 réchauffeurs régulés par régulateur de T°. Fermeture de l'Air Supply Shut Off Valve et ouverture de l'Exhaust Valve en cas de feu. <strong>Quand détection fumée dans OFCR, il faut reseter les chillers</strong></p>
<p>Sur 777-300, il y a des volets RAM AIR EXIT (désactivés)</p>

<h3>🎈 PRESSURISATION</h3>
<p>2 calculateurs : <strong>ASCPC GX (Primary), ASCPC DX (Backup)</strong>. Les 2 étant capables d'assurer la gestion pressu : 2 modes de fonctionnement (Fixed Rate Control / Minimum Rate Control)</p>
<p><strong>ASCPC : Preflight Test à la fin de chaque mise en route. L'ASCPC va tester les Outflow valves</strong></p>
<p><strong>Remote Cabin Pressure :</strong> Il mesure la pression cabine indépendamment des ASCPC, info à l'ELMS</p>

<h4>Limites</h4>
<p><strong>Cabin Altitude :</strong> Limite 8500 fts (rouge à l'EICAS). 8,6 Psi de delta P (9,25Psi rouge à l'EICAS)</p>
<p>La pression cabine se met directement à l'altitude du terrain d'atterrissage plus 0,15 Psi dans la limite des 8000 Fts ou Delta P de 8,6</p>

<h4>Valves de sécurité</h4>
<p><strong>Positive Pressure Relief Valve (X2) côté Gx avion :</strong> Elles vont réguler de 8,95 Psi à 9,2 Psi et seront pleines ouvertes mécaniquement à 9,42 Psi. Pas d'indication au poste. Pas de surveillance électrique, purement mécaniques. Un témoin rouge apparaîtra lors de leur ouverture</p>
<p><strong>Negative Pressure Relief Valve (X4) :</strong> 2 de chaque coté : si altitude avion tente à croiser altitude terrain. Commence à s'ouvrir à partir de -0,2 Psi. Full Open à -0,5 Psi. Pas d'indication au poste. Pas de surveillance électrique, purement mécaniques</p>

<h4>OUT FLOW VALVE</h4>
<p>Composées de volets et d'une Vanne Control Unit, situées du coté GX (une à l'avant et l'autre à l'arrière), gérées par 1 ASCPC, 1 seul suffit pour assurer la gestion. Le débit de fuite sera géré par les 2 Out Flow Valves</p>
<p>Il y a 2 moteurs sur la Vanne Control Unit (1 moteur par ASCPC), en manuel on ira directement contrôler l'Out Flow Valve. Sur 300, il y a 3 moteurs (2 ASCPC et 1 manuel)</p>
<p><strong>Ouverture en régulation :</strong> 80% OFV Ar et 20% OFV Av. <strong>Ouverture à 50% AR et 50% AV quand :</strong> Climatisation de la soute Avant, Feu en soute, Quand 1 OFV inop</p>
<p><strong>Commandes en P5 :</strong> AUTO (c'est l'ASCPC qui gère), MAN (pour commander manuellement les outflow valves, MAN va s'allumer), SWITCH DECREASE/INCREASE (pour modifier manuellement l'altitude terrain)</p>
<p>Sur les ASCPC il y a une prise de pression cabine (cabin pressure sense port), mais c'est le cabin pressure sensor qui va corriger la pressurisation</p>
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
        `,
        schemas: [
            {
                url: "assets/images/ata22/afds-system.jpg",
                caption: "AFDS - Autopilot Flight Director System"
            }
        ]
    }
];
