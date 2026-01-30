const revisionData = [
    {
        code: "ATA 21",
        name: "Air Conditioning & Pressurization",
        notes: `
<h3>📋 Commande et Contrôle</h3>
<p>Commande au poste en P5 via OPAS puis ARINC 629. 5 fonctions : Pack flow, Pack cooling, Trim air, Zone Temp, Recirculation.</p>

<h3>🎛️ CTC</h3>
<p>2 CTC indépendants (DX et GX). On ne croise jamais les CTC ni les ASCPC (ETOPS).</p>
<p>Si CTC défaut : ASCPC prend le relais avec LOWER FLOW CONTROL VALVE. Reset : AIR COND RESET.</p>

<h3>⚙️ ASCPC</h3>
<p>Gèrent les packs et surveillent température. Pack Flow Schedule (0 à 4) selon Pax et altitude.</p>
<p>Backup CTC : 3 signaux (Digital, Analogique, Pneumatique).</p>

<h3>❄️ Pack Flow Control Valves</h3>
<p>4 valves (2 par pack). UPPER : ouverte basse altitude, fermée à 26000 ft. LOWER : ouverte à partir 26000 ft.</p>

<h3>🌡️ Températures</h3>
<p>11 sondes totales. T° critiques : sortie compresseur et sortie pack. CTC 88°C maxi, ASCPC 96°C maxi.</p>

<h3>🎈 Pressurisation</h3>
<p>2 ASCPC : GX Primary, DX Backup. Limites : Cabin Altitude 8500 ft. Delta P 8,6 Psi.</p>
        `,
        schemas: [
            {
                url: "assets/images/ata21/ac-pack-clg.jpg",
                caption: "Pack CLG and Mix Manifold Temp Control"
            }
        ]
    }
];
