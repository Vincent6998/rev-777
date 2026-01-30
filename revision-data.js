// Données de révision par ATA
const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande au poste en P5 via OPAS puis ARINC 629. 5 fonctions : Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation.</p>

<h3>🎛️ CTC (Cabin Temperature Controllers)</h3>
<p>2 CTC indépendants (DX et GX). On ne croise jamais les CTC ni les ASCPC (ETOPS). Alimentés par XFR BUS, action analogique sur les packs.</p>
<p><strong>Mode dégradé :</strong> Si CTC défaut → ASCPC prend le relais avec LOWER FLOW CONTROL VALVE. Reset : AIR COND RESET.</p>

<h3>⚙️ ASCPC (Air Supply Cabin Pressure Control)</h3>
<p>Gèrent les packs et surveillent température (Pack Trip). Calculent le Pack Flow Schedule (0 à 4) selon Pax et altitude.</p>
<p><strong>Backup CTC :</strong> 3 signaux (Digital, Analogique, Pneumatique). Backup si 2 canaux CTC HS.</p>
<p><strong>Important :</strong> Éléments interchangeables sauf tuyaux. Attendre 2 min pour déshumidifier à l'arrêt. APU au sol = 2 packs en route.</p>

<h3>🔧 ECSMC</h3>
<p>2 cartes (P85/P84). DX primaire, GX backup. Gèrent : distribution, équipement cooling, cargo heating, supplemental heating.</p>

<h3>❄️ Pack Flow Control Valves</h3>
<p>4 valves (2 par pack). Régulent débit d'air vers pack. Commandées par CTC, backup ASCPC.</p>
<p><strong>UPPER :</strong> Ouverte basse altitude, fermée à 26000 ft</p>
<p><strong>LOWER :</strong> Ouverte à partir 26000 ft, passage air dans Ozone converter</p>
<p>Les 2 ne fonctionnent jamais ensemble. 2 Torque Motors par valve (CTC + ASCPC).</p>

<h3>🌡️ Composants Pack</h3>
<p><strong>Ozone Converter :</strong> Transforme O3 en O2 haute altitude. Pas de passage moins de 26000 ft.</p>
<p><strong>ACM :</strong> 1 compresseur + 2 turbines (T1/T2) + inlet fan sur même arbre.</p>
<p><strong>Low Limit Valve :</strong> Bypass turbine T1. Ferme si T° sortie T1 moins de 1°C.</p>
<p><strong>Economy Cooling Valve :</strong> Ouverte haute altitude (25000 ft). Air bypass ACM.</p>

<h3>🌡️ Températures</h3>
<p>11 sondes totales (9 CTC + 2 ASCPC). T° critiques : sortie compresseur et sortie pack.</p>
<p><strong>Régul sortie compresseur :</strong> moins de 171° régul RAM door, plus de 232° Pack trip</p>
<p><strong>T° sortie pack :</strong> CTC 88°C maxi, ASCPC 96°C maxi</p>

<h3>🌡️ Temperature Control</h3>
<p><strong>Zones :</strong> CTC DX (B-D-F + soute AV), CTC GX (A-C-E + Flight Deck)</p>
<p>T° Master environ 24° poste, ajustement cabine plus ou moins 6°</p>
<p><strong>Protections :</strong> 71° gaine ferme modulating valve, 88° ferme TRIM AIR PRSOV</p>

<h3>🔧 TAPRSOV</h3>
<p>2 vannes (1 par côté). CTC régule pour maintenir pression sortie supérieure de 5 PSI à pression cabine.</p>
<p>Backup ASCPC peut couper si P/B Off, Stall Warning, ou Pack Flow schedule 4</p>

<h3>🌡️ TAMV (Trim Air Modulating Valve)</h3>
<p>8 vannes (1 par zone) + 1 soute AV. Régulées par CTC. TAMV poste gérée par CTC Gx, seule commandable en manuel.</p>

<h3>🌀 Distribution & Recirculation</h3>
<p>But : gagner 50% efficacité packs</p>
<p>2 Recirculating FAN Upper + 2 Lower (soute avant). Contrôle ECSMC, commande CTC Dx.</p>
<p>Si 1 fan panne : augmentation débit pack</p>

<h3>💨 Ventilation</h3>
<p><strong>Lav/Galley Vent Fan (2) :</strong> Auto dès mise sous tension. Droit permanent, gauche backup.</p>
<p><strong>Exhaust Fan :</strong> Clim soute AV. Éjection FWD OUTFLOW VALVE.</p>
<p><strong>Chiller Boost Fan :</strong> Extraction air chaud Chillers. Vol porte 2 GX, Sol Mix bay.</p>

<h3>🔥 Réchauffage</h3>
<p><strong>LLAR :</strong> CTC Gx + ELMS. 2 heaters vol uniquement. Pack left via AIR SHUTOFF VALVE (25000 ft).</p>
<p><strong>Soute AR/Bulk :</strong> Air chaud conduit pneumatique. Cargo TEMP SELECT : OFF/LOW(+7°)/HIGH(+21°)</p>

<h3>❄️ Equipment Cooling</h3>
<p>4 modes : FWD cargo A/C, FWD cargo heat, Eqpt cooling smoke, FWD cargo fire</p>
<p><strong>Mode Override :</strong> En vol si perte 2 flow sensors, fumée soute élec, panne 2 Supply Fan, ARM extinction soute AV</p>

<h3>🎈 Pressurisation</h3>
<p>2 ASCPC : GX Primary, DX Backup. 2 modes : Fixed Rate Control / Minimum Rate Control</p>
<p><strong>Limites :</strong> Cabin Altitude 8500 ft (rouge EICAS). Delta P 8,6 Psi</p>
<p><strong>Positive Relief (2) :</strong> Régulent 8,95-9,2 Psi. Full open mécanique 9,42 Psi</p>
<p><strong>Outflow Valves :</strong> Côté GX (1 avant, 1 arrière). Ouverture régulation 80% AR / 20% AV</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];
