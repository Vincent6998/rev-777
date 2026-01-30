const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande au poste en P5 via OPAS puis ARINC 629 (BUS systems). 5 fonctions : Pack flow (Régul/Off), Pack cooling mixmanifold Temp, Trim air (Régul/Off), Zone Temp, Recirculation d'air.</p>

<h3>🎛️ CTC - Cabin Temperature Controllers</h3>
<p>2 CTC : CTC DX gère le pack Dx, CTC Gx gère le pack Gx. Plusieurs fonctions, dès qu'il y a régulation du pack c'est par le CTC.</p>
<p>On ne croise jamais ni les CTC, ni les ASCPC entre eux (ETOPS oblige). Alimentés par la XFR BUS et agissent sur les packs en analogique.</p>
<p>Si CTC en défaut, l'ASCPC prend la commande du pack avec la LOWER FLOW CONTROL VALVE en priorité. Reset par le switch en P5 AIR COND RESET.</p>

<h3>⚙️ ASCPC - Air Supply Cabin Pressure Control</h3>
<p>2 ASCPC : peuvent gérer les packs et surveiller la température (Pack Trip). Le Gx pour le pack Gx et le Dx pour le pack Dx.</p>
<p>Le contrôle de débit est calculé par l'ASCPC par son Manifold Flow Sensor au cas où il y a perte d'infos du Pack Flow Sensor.</p>
<h4>Pack Flow Schedule (5 flow)</h4>
<p>0 : pas d'air (dém GTR) | 1 à 4 : plus on monte, moins il y a d'air | 2 : si juste 1 pack | 4 : sert à maintenir la pressurisation</p>
<p>Plage flow schedule fonction du nombre de Pax et de l'altitude. Si recirculating Fan en panne, on va augmenter le pack flow schedule.</p>
<p>L'ASCPC sert de Backup au CTC pour les fonctions importantes (2 canaux CTC HS). 3 Signaux : Digital, Analogique, Pneumatique. Il assure le backup uniquement si lui-même n'a pas de pannes.</p>
<p>ASCPC Backup : flow control, T° sortie compresseur, T° sortie pack</p>
<p>Tous les éléments sont interchangeables entre le pack n°1 et 2, sauf les tuyaux. À la coupure d'un pack au sol par le sélecteur en P5, il faut attendre 2 minutes pour l'arrêt complet du pack (déshumidifier). Si on alimente les packs par l'APU au sol, mettre les 2 packs en route.</p>

<h3>🔧 ECSMC - Environmental Control System Miscellaneous Cards</h3>
<p>2 cartes du système Card File (P85 et P84). ECSMC gère réchauffage soute + équipement cooling. À chaque mise sous tension la carte DX est primaire et la GX est en Backup.</p>
<p>2 petits controllers pour équipement cooling. Gère : distribution/ventilation, equipment cooling, cargo heating, supplemental heating.</p>

<h3>🌀 APUC</h3>
<p>Pour booster APU s'il est la seule source d'air. APU en route, Flow Control Valve upper ouverte, lower fermée et c'est l'APU qui gérera l'alimentation d'air et non plus les controls valves.</p>

<h3>❄️ COOLING - Pack Flow Control</h3>
<p>Système de régulation du débit d'air pour les packs géré par les CTC. CTC GX pour le Pack GX et CTC DX pour le Pack DX. Info air/sol donnée aux CTC par les PSEU.</p>
<h4>4 Pack Flow Control (2 par Pack)</h4>
<p>Régule le débit d'air qui va dans le pack. Identiques et interchangeables. Commandées par le CTC et Backup par ASCPC. Prise de la T° à l'entrée du pack.</p>
<p>1 Upper : ouverte à basse altitude (closed à 26000 Fts) | 1 Lower : ouverte à partir de 26000 Fts. Passage de l'air dans l'Ozone converter.</p>
<p>Les 2 Pack Flow Control ne fonctionnent jamais en même temps (si UPPER ouverte, LOWER fermée), il n'y a qu'à l'arrêt qu'elles sont dans la même position. Info transmise à partir de la position de 2 proximity switchs.</p>
<p>Pour l'allumage du voyant pack OFF sur le P/B, il faut que les 2 vannes soient fermées (2 switches 1 par vannes soient détectés CLOSE par le CTC).</p>
<p>Dans chaque Pack flow control 2 Torques motors : 1 pour le CTC (régul de position), 1 pour l'ASCPC (ferme la upper et régule la lower en backup). Si les torques motors ne sont pas alimentés, les vannes seront pleines OPEN. 1 plug pour le dispatch (tolérance de la upper en fermerture).</p>
<p>Pack flow sensor : 2 differential pressure sensors (CTC / ASCPC), 1 inlet pressure sensor CTC. Débit massique pour asservissement Flow Control Valve. T° entrée échangeur prise aussi en compte pour le débit massique. Si CTC n'a plus d'info de T° dispo, il la demande à L'ASCPC.</p>
<p>Augmentation du débit massique d'air (schedule 1) pour chaque recirculating en panne.</p>
<p>Flow control valve fermée : Pack outlet overheat 88°c, Compresseur discharge overheat 252°c, Pack Fail, Pack flow schedule 0.</p>
<p>ATTENTION : Flow Control Valve ouverte si pas de jus sur avion et pression pneumatique.</p>

<h3>🌡️ Ozone Converter</h3>
<p>Transforme l'ozone en O² en haute altitude. Pas de passage d'air en basse altitude, en dessous 26000 fts passage par la vanne upper. Le P/B en P5 du pack commande l'ouverture de la vanne et les CTC font la régulation de débit en fonction de la T° de l'Inlet Primary Heat Exchanger.</p>
<p>Calcul du débit Massique. Asservissement effectué par la Pack Flow Sensor qui mesure le débit volumique. Info aux CTC et ASCPC. Si plus de débit d'air dans la Pack Flow Sensor → Pack Trip.</p>

<h3>🔧 Description des composants</h3>
<p>RAM Inlet Door : commandée par CTC seulement. Ouverte au sol, pleine fermée en vol. En fonctionnement normal elle sera régulée pour réguler la T° sortie compresseur. Fermeture possible par le MAT.</p>
<p>Economy Cooling Check Valve : Permet au débit d'air de passer autour de l'ACM au démarrage du Pack ou en cas de panne de l'ACM et en vol car l'air est plus froid.</p>
<p>Échangeur Thermique : 2 échangeurs refroidis par l'air qui vient de la ram air (échangeur AIR/AIR).</p>
<p>ACM : 1 compresseur, 2 turbines T1 et T2 qui entraînent une inlet fan. Montés sur un même arbre, palier à air (attention au sens de rotation).</p>
<p>Condenseur/Reheater : 2 fonctions (Retirer l'eau, Réchauffer l'air pour lui donner de l'énergie).</p>
<p>11 sondes de température (protection et contrôle) : 9 pour le CTC, 2 pour l'ASCPC (sortie compresseur, sortie pack). 4 sondes de température sur le Mix Manifold (2 par CTC).</p>
<p>Low Limit Valve (sert à bypasser la turbine T1) : Le CTC utilise cette vanne pour limiter ou interdire une température négative en entrée condenseur en régulant la vitesse de rotation turbine (RVDT pour info au CTC). Fermeture si Air T° à la sortie de la turbine T1 est inférieure à 1°C. Elle surveille qu'on est toujours supérieur à 1° en sortie turbine. Low Limit Valve et Bypass Valve identiques.</p>
<p>Second Stage Turbine Bypass Valve : Le CTC utilise cette vanne pour réguler la température de sortie du pack. Elle sert à bypasser la turbine T2. RVDT pour info au CTC. Low limit valve et second stage turbine bypass interchangeables, conseillé si low limit valve HS.</p>
<p>Economy Cooling Valve : Commandée par l'ELMS. Elle est tout ou rien. Ouverte à haute altitude (25000feet). Donc l'air ne passe plus à travers le Condenser/Reheater et par l'ACM. Ouverture de cette vanne lorsque l'on est en mode Economy (pas de FDE) ou Standby Cooling Mode. Vanne Safe Fail open. Quand Economy Cooling Valve open : Low Limit Valve et Bypass Valve open.</p>
<p>Conditioned Air Check Valve : Clapet anti-retour à la sortie du pack. Elle sert à éviter la perte de pressurisation en cabine en cas de fuite sur le pack.</p>
<p>Economy Cooling Check Valve : pour bypasser le compresseur (en cas de mise en route GTR, en mode economy, ACM HS, en mode standby).</p>

<h3>🌡️ Indication Température</h3>
<p>Condenser Inlet Temp Sensor (X2) : Pilotage Low Limit Valve</p>
<p>IMMTE (Integrated Mix Manifold Temperature) : 4 sondes, 2 par CTC. Gestion T° cabine, sera calculée par CTC DX, et suivie par CTC GX. C'est la température de référence de sortie pack en fonction de l'autre pack (différence maxi 5°).</p>
<p>2 T° critiques : T° sortie compresseur, T° sortie pack</p>
<p>Régul T° sortie compresseur : inférieur à 171° (régulation Ram air door), 171° - 179° (Ram air door full open), 179° - 232° (Baisse de débit), supérieur à 232° (Pack trip)</p>
<p>T° sortie pack : sonde CTC 88°C maxi, sonde ASCPC 96°C maxi</p>
<p>STANDBY COOLING MODE : ACM Failure, Sondes de température d'entrée Condenser 1 et 2 Fails, Economy Cooling Valve failed Open + TBV full Open. L'air passe directement par la Check Valve.</p>
<p>ECONOMY COOLING MODE : En vol en haute altitude, Si l'ACM fonctionne, Si T° entrée condenser valide, Si TAT inférieur à 7°</p>

<h3>🌡️ TEMPERATURE CONTROL</h3>
<p>Régulation du débit d'air. Régulation par CTC seulement.</p>
<p>CTC Dx : 3 Zones B-D-F et régulation soute AV | CTC Gx : 3 Zones A-C-E et régulation Flight Deck</p>
<p>2 P/B (ON/FAULT). 2 Rotateurs de sélection (1 F/D et 1 cabine) 18° à 29°. 1 rotateur pour la soute AV 4° à 27°. Info à l'OPAS pour ARINC 629.</p>
<p>Température Master env. 24° au poste avec réglage en cabine pour ajustement par zones à partir des CSCP/CACP +/- 6°. Surchauffe de la gaine à 71° fermeture de la modulating valve qui correspond.</p>
<p>Si Fault : Fermeture de la Trim Air Pressure Regulating and Shutoff Valve (Surchauffe de la gaine supérieure à 88°, Plus d'info de pression du Trim Air Pressure Sensor, Défaut des 2 canaux du CTC). Reset possible du Pack par P/B en P5 ou par AIR COND RESET.</p>
<p>Sélecteur CABIN TEMP en P5 : IMMTE qui gère. Dans le MAT on a une fonction spéciale pour ouvrir ou fermer la RAM AIR INLET DOOR. Les tests au MAT se font packs coupés.</p>

<h3>🔧 Trim Air Pressure Regulating and Shutoff Valve (TAPRSOV)</h3>
<p>X2 (1 par côté). Le CTC régule la TAPRSOV pour maintenir la pression de sortie supérieure de 5 PSI à la pression cabine (régulation 2 à 8,5 Psi) par des info de pression donné par 2 trim air pressure sensors.</p>
<p>L'ASCPC peut couper la TAPRSOV en mode Backup commandé par un shutoff solenoid pour la fermeture (P/B Off, Stall Warning, Pack Flow schedule 4).</p>
<p>À chaque démarrage GTR, test auto Trim Air Shutoff Valve : le CTC la commande pleine ouverte et s'assure que l'ASCPC est capable de la fermer. CTC Gx pour le coté Gx et CTC Dx pour le coté Dx.</p>
<p>Fail safe closed, dispatch vanne fermée. Si FCV fermée (pack trip), TAPRSOV fermée.</p>

<h3>🌡️ Trim Air Modulating Valve (TAMV)</h3>
<p>X8 (1 par Zone) + 1 pour la soute AV. Régulée par le CTC asservi par 1 RVDT. Identiques et interchangeables.</p>
<p>En cas de panne d'une Trim air Modulating Valve ouverte à plus de 10%, fermeture de la TAPRSOV puis maintien de la pression à 2 PSI puis ouverture en plus grand des autres Trim air modulating Valve.</p>
<p>La Trim Air Modulating Valve du poste est gérée par le CTC Gx. Seule trim air pouvant être commandée en manuel, et seule qui a un synoptic à l'EICAS. Si panne du CTC gauche, grâce à la commande manuelle du rotateur, on peut ouvrir et fermer la vanne au travers de l'ELMS.</p>
<p>En cas de panne de RVDT d'une TAMV, la régulation en T° sera faite par les Zone Duct Temp Sensor (open loop).</p>

<h3>🌡️ Sondes de Température</h3>
<p>Zone Duct Temp Sensor (anticipation) : 2 sondes par conduits. Pour anticiper les variations de température. Si panne des 2 sondes du même Duct, fermeture de la TAMV de la zone concernée.</p>
<p>Sondes cabine (Zone air Temperature Sensor) fonctionnement : Info aux 2 canaux du CTC. Pour le F/D info au CTC Gx et Dx.</p>
<p>La ventilation des sondes cabines est effectuée par aspiration de l'air devant cette sonde. Aspiration par Lavatory/galley vent fans. En cas de panne des sondes cabines régulation par Zone Duct Temp Sensor.</p>
<p>À 71° dans le Duct fermeture Trim Air Modulating valve de la zone. À 88° dans le Duct Fermeture de la TRIM AIR PRSOV. En fonctionnement manuel plus de passage de commande par le CTC de la TAMV.</p>
<p>La TAMV de la soute avant ne peut s'ouvrir que si la A/C SOV FWD CARGO est ouverte, info au CTC et lav/gly vent fans off. En cas de panne des 2 sondes de température soute avant, plus de climatisation en soute avant.</p>
<p>En cas de différence de pression cabine entre les 2 ASCPC, l'info est prise sur le Remote Cabin Press Sensor pour lever le doute. Le Trim Air Pressure Sensor envoie l'info de pression régulée après la TAPRSOV au CTC. Muffler : sert à diminuer le bruit.</p>

<h3>🌀 DISTRIBUTION - Recirculation d'air cabine</h3>
<p>But : gagner 50% sur l'efficacité des packs.</p>
<p>2 recirculating FAN Upper : 1 à l'avant de l'avion et 1 à l'arrière, identique et interchangeable.</p>
<p>2 recirculating FAN Lower en soute avant non identiques (Dx + gros car prise pour la soute AV).</p>
<p>Surveillés par les cartes ECSMC et commandés par le CTC Dx en priorité, le CTC Gx en Backup. Fonctionnement surveillé par : Les cartes ECMCS en cas de surchauffe, L'ELMS pour la consommation de courant.</p>
<p>Addition d'air recyclée : 50% d'efficacité en plus sur les packs. Coupure recirculating INF si feu soute AV. 2 Commandes en P5 (1 pour les LOWER et 1 pour les UPPER). Resetables par switch en P5 : AIR COND RESET. Si 1 recirculating Fan en panne, augmentation du débit du pack.</p>

<h3>💨 Ventilation (Système automatique)</h3>
<p>Lavatory/Galley Vent Fan (X2) : fonctionnement en auto dès mise sous tension avion, si pas d'overheat, pas de feu. Arrêt si armement CARGO AFT FIRE. Ils servent à ventiler les galleys, Lavatories, les sondes de température Zone et les équipements sur les étagères de la cabine AR (E11, E12, E7). Le droit fonctionne en permanence, le gauche en backup. Power Up Test du Gx pendant 20 secondes avant la mise en route du Dx. Situés dans la soute bulk.</p>
<p>Bulk Cargo Ventilation Fan : Lors de transport d'animaux. Mise en route par Cargo TEMP Select sur HIGH. Arrêt si armement CARGO AFT FIRE.</p>
<p>Exhaust Fan : Mise en route lors de la climatisation soute AV et switch sur AUTO. Récupération de l'air en fond de soute puis éjection au niveau de la FWD OUTFLOW VALVE. La fwd cargo air conditioning shutoff valve (A/C SOV) contrôle l'air qui vient du mix manifold vers la soute avant. Il est coupé si armement CARGO FWD ou AFT FIRE, si on réchauffe la soute AV.</p>
<p>Chiller Boost Fan : Extraction air chaud des Chillers soit au niveau de la porte 2 GX (en vol) ou par la Mix bay (au sol). Si TAT inférieur à 7° ou si ARM CARGO FIRE, coupure des Chiller Boost Fan. Si TAT supérieur à 7° au sol Chiller Boost Fan ON. 2 vannes (crown : fonctionne en vol porte 2 GX, Lower : fonctionne au sol Mix bay).</p>
<p>En cas d'Armement Extinction Incendie, arrêt automatique de la ventilation de la zone concernée.</p>

<h3>🔥 Climatisation - Soute avant</h3>
<p>1 Trim Air Modulating Valve, fonctionnement identique à une zone cabine. La soute avant a son propre sélecteur.</p>
<p>Air Conditioning Shut Off Valve : Ouverture de cette vanne si Pack On FWD CARGO A/C switch AUTO et FIRE SW not Armed, et si trim air modulating valve ouverte. Elle est située en aval. Info de position surveillée par la carte ECMCS Dx.</p>
<p>Air Supply Shut Off Valve : Permet l'alimentation du LLAR. Pour fonctionnement au sol : PACK GAUCHE OFF, GRND HANDLING BUS alimentée et Hatch ouvert. Fonctionnement en vol supérieur à 25000Fts.</p>

<h3>🔥 Réchauffage</h3>
<p>Réchauffage LLAR (géré par le CTC Gx et alimenté par l'ELMS) : 2 Heaters. Ils ne fonctionnent qu'en vol et LLAR SOV Relay OPEN. Le pack left fournit directement au LLAR à travers l'AIR SHUT OFF VALVE qui s'ouvrira à 25000ft. Au sol ouverte dès que le pack est coupé. 2 sondes de température qui envoient leurs infos au CTC Gx. Trappe accès LLAR fermée ou test incendie = valve fermée. Voyant dans le LLAR à l'entrée.</p>
<p>Réchauffage CRAH : 1 heater. Pack sur on, au sol ou en vol.</p>
<p>Pour le 300 il existe une exhaust valve pour la fumée dans le OFCR et OFAR direction lavatory galley vent fans. Pour OFAR, mêmes limitation que sur 200. Pour OFCR pas de limitation altitude. OFAR, mise en route auto des heaters si T° air duct inférieure à 4°C.</p>
<p>Réchauffage soute AR et Bulk (4 vannes) : Air chaud prélevé sur conduit pneumatique, régulation par température Sensor info aux cartes ECMCS. Elles ont chacune 2 vannes en série (tout ou rien) : pneumatic system air (shut off), Heat valve si T° inférieure à 10° (Temp. CTL). Commandées par ELMS GX et DX. Sélecteur Cargo TEMP SELECT : OFF, LOW (+7°), HIGH (+21°).</p>
<p>Réchauffeur Shoulder/Foot : air provenant du pack Gx. Ne fonctionnent qu'en vol, 2 pour les épaules et 2 pour les pieds.</p>
<p>Réchauffage Door : 1 heater électrique pour la Girt Bar. Il réchauffe de l'air venant du conduit de climatisation. Seul heater que l'on peut Tester au MAT. Condition vol+1 Pack en route. Réchauffage galets : 1 Pack en route.</p>
<p>Réchauffage soute Avant (géré par l'ELMS) : Air en provenance de l'Equipement cooling de la soute électronique. Réchauffage si pas de climatisation soute Avant. Sélecteur en P5 FWD CARGO A/C OFF. Ouverture Diverter Valve, fermeture Vent Valve, ouverture Heat Valve, arrêt Exhaust Fan (ELMS). La Diverter Valve et la Cargo Heat Valve marchent ensemble. La Vent Valve et la Equip Inb Valve marchent ensemble. Si température extérieure inférieure à 13° : Divert Valve et Inboard Valve (Vannes liées électriquement), Vent valve et Forward Cargo (Fonctionnement inversé). En cas de détection de surchauffe fermeture des vannes, reset par le MAT.</p>

<h3>❄️ EQUIPEMENT COOLING</h3>
<p>4 modes : FWD cargo air conditioning mode (vent), FWD cargo heat mode (OVR), eqpt cooling smoke mode, FWD cargo fire</p>
<p>Equipment cooling inboard valve : Au sol avec climatisation sur auto, elle est fermée (enverra l'air dans la Mix Bay). En vol avec climatisation sur auto, elle est ouverte, même si perte d'un Low Flow Sensor.</p>
<p>Equipment cooling diverter valve : Au sol clim sur auto = ouverte. Fermée en cas de feu, switch P5 sur override, perte des 2 Low Flow Sensor en vol, climatisation soute AV en vol.</p>
<p>Cargo Heat Valve : Au sol T° supérieure à 13° (fermée), Si clim (fermée), Fan coupé (ouverte). Ouverte en vol si réchauffage soute AV et ouverte au sol si réchauffage soute AV et TAT inférieure à 10°.</p>
<p>Vent Valve : Fermée si feu, fumée, si réchauffage soute Av en vol, si réchauffage soute Av et TAT inférieure à 10° au sol. Override Valve : carte ECSMC Dx</p>

<h3>⚠️ MODE OVERRIDE</h3>
<p>En vol : passage AUTO en mode OVERRIDE si baisse de débit des 2 sondes (perte des 2 flow sensors, détection de fumée dans la soute électronique, panne des 2 Supply Fan, Armement extinction incendie Soute Avant, P/B en P5 sur Override). C'est la carte ECSMC right qui gère en primary à la mise sous tension.</p>
<p>Au sol : jamais Switch equipement cooling en P5 sur override. Si un flow sensor détecte un bas débit ou une surchauffe (alarme sonore TAV). Surveillance en 4 points par pressure switch. Si baisse de débit MSG ADVISORY EQT COOLING + KLAXON au TAV (SUPPLY FAN OFF, VENT FAN OFF, FERMETURE OVERRIDE VALVE, MISE EN ROUTE DU CONV SUP CLG FAN). Reset par le switch EQUIP COOLING en P5 ou par les cartes ECSMC.</p>
<p>Soute électronique : Détection fumée : mode override (1 détecteur fumée soute AV et 1 détecteur soute MEC). C'est le smoke detector Soute Avant qui récupère l'info de détection fumée, bien qu'indépendant de la Soute élec, vers ECSMC via les ASG Card.</p>
<p>Converter Supplemental Cooling Fan (converter backup) : Power up test, Override, Backup Génération ON, perte des 2 supply fans</p>
<p>Supply fan : 2 ventilateurs, le Dx fonctionne en primaire, le Gx en backup (Gx testé à la mise sous tension). Vent Fan : Arrêt à la mise en route moteur.</p>
<p>ECC (Equipment Cooling Controller) : fonctionnement uniquement en vol. 2 ECC (1 Gx et 1 Dx). C'est le secours en cas de panne des cartes ECSMC (backup latched ECSMC). Reset par info sol donnée par PSEU. Il gère uniquement le low flow : après 6 minutes sans détection de l'ECSMC, en mode override après 20 minutes.</p>
<p>Lorsque l'on climatise la soute AV, toutes les vannes se ferment sauf la Vent Valve. Si on a un feu soute, toutes les vannes se ferment. Les cartes ECSMC GX et DX gèrent la ventilation soute électronique. La commande des vannes se fait par les cartes ECSMC au travers des ECC. ECC secours en cas de panne (backup ECSMC uniquement en vol). Les ECC ont 6 modes pour tenter de récupérer la ventilation : les 6 modes changent toutes les 60s jusqu'à la récupération de la ventilation.</p>
<p>Détection de fumée : E/E Cooling Smoke Detection, Passage en mode OVERRIDE, Prélèvement d'air à 2 endroits après l'Override Valve et Vent Fan, 2 canaux par Chambre.</p>

<h3>📺 VENTILATION IFE</h3>
<p>2 vannes : 1 Manifold Shut Off Valve (commande cartes ECSMC), 1 Overboard Shut Off Valve. 1 ouverte et 1 fermée. Fermées toutes les 2 + arrêt fan si feu soute ou si détection fumée dans le manifold IFE (1 détecteur de fumée). Ventilation quand 1 GTR en route et climatisation soute Avant. Fan en panne : IFE condamné (inop).</p>
<p>Sur derniers 300 avec retrofit, il n'y a plus qu'un ventilateur (overboard supprimé) : extraction dans la MIX BAY, le fan fonctionne tout le temps.</p>

<h3>🔧 DIFFÉRENCES 777-300</h3>
<p>OFAR (1 Zone). CTC Gx qui commande. Réchauffeurs électriques régulés par régulateur de T° chauffent de l'air en provenance du pack gauche à travers l'Air Supply SOV qui s'ouvrira à 25000ft. Fermeture de l'Air Supply SOV et ouverture de l'Exhaust Valve en cas de feu.</p>
<p>OFCR (3 Zones) : 1 Air Supply SOV gérée par l'ELMS. Il n'y a pas de condition 25000ft. 3 réchauffeurs régulés par régulateur de T°. Fermeture de l'Air Supply Shut Off Valve et ouverture de l'Exhaust Valve en cas de feu. Quand détection fumée dans OFCR, il faut reseter les chillers. Sur 777-300, il y a des volets RAM AIR EXIT (désactivés).</p>

<h3>🎈 PRESSURISATION</h3>
<p>2 calculateurs : ASCPC GX (Primary), ASCPC DX (Backup). Les 2 étant capables d'assurer la gestion pressu : 2 modes de fonctionnement (Fixed Rate Control / Minimum Rate Control). ASCPC : Preflight Test à la fin de chaque mise en route. L'ASCPC va tester les Outflow valves.</p>
<p>Remote Cabin Pressure : Il mesure la pression cabine indépendamment des ASCPC, info à l'ELMS.</p>
<p>Cabin Altitude : Limite 8500 fts (rouge à l'EICAS). 8,6 Psi de delta P (9,25Psi rouge à l'EICAS). La pression cabine se met directement à l'altitude du terrain d'atterrissage plus 0,15 Psi dans la limite des 8000 Fts ou Delta P de 8,6.</p>
<p>Positive Pressure Relief Valve (X2) côté Gx avion. Elles vont réguler de 8,95 Psi à 9,2 Psi et seront pleines ouvertes mécaniquement à 9,42 Psi. Pas d'indication au poste. Pas de surveillance électrique, purement mécaniques. Un témoin rouge apparaîtra lors de leur ouverture.</p>
<p>Negative Pressure Relief Valve (X4) : 2 de chaque coté : si altitude avion tente à croiser altitude terrain. Commence à s'ouvrir à partir de -0,2 Psi. Full Open à -0,5 Psi. Pas d'indication au poste. Pas de surveillance électrique, purement mécaniques.</p>
<p>OUT FLOW VALVE : composées de volets et d'une Vanne Control Unit, situées du coté GX (une à l'avant et l'autre à l'arrière), gérées par 1 ASCPC, 1 seul suffit pour assurer la gestion. Le débit de fuite sera géré par les 2 Out Flow Valves. Il y a 2 moteurs sur la Vanne Control Unit (1 moteur par ASCPC), en manuel on ira directement contrôler l'Out Flow Valve. Sur 300, il y a 3 moteurs (2 ASCPC et 1 manuel).</p>
<p>Ouverture en régulation : 80% OFV Ar et 20% OFV Av. Ouverture à 50% AR et 50% AV quand : Climatisation de la soute Avant, Feu en soute, Quand 1 OFV inop.</p>
<p>Commandes en P5 : AUTO (c'est l'ASCPC qui gère), MAN (pour commander manuellement les outflow valves, MAN va s'allumer), SWITCH DECREASE/INCREASE (pour modifier manuellement l'altitude terrain). Sur les ASCPC il y a une prise de pression cabine (cabin pressure sense port), mais c'est le cabin pressure sensor qui va corriger la pressurisation.</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];
