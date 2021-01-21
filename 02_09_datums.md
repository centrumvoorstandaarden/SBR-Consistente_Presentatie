## Datums

**SCP 21: De Consistente Presentatie MOET de waarde van datums in de XML notatiewijze (YYYY-MM-DD) omzetten naar de lokaal gebruikelijke notatiewijze voor datums**

De waarde van datums die in het instance document of in de taxonomie zijn opgenomen zijn genoteerd in de XML notatiewijze (YYYY-MM-DD). Deze notatiewijze moet in de rendering worden getoond als de lokaal gebruikelijke notatiewijze. Dit betekent dat wanneer het @xml:lang attribuut 'nl' is dit naar de Nederlandse notatiewijze moet worden omgezet.

De lokaal gebruikelijke notatiewijze van een datum kan op twee manieren worden toegepast. De eerste manier is het uitschrijven van de datum. De tweede manier is het gebruik van het datumformaat DD-MM-YYYY, waarbij DD staat voor de dag, MM voor de maand en YYYY voor het jaar.

_Voorbeeld_

Bij @xml:lang=&quot;nl&quot; moet '2017-01-01' worden '1 januari 2017' of '01-01-2017'

Bij @xml:lang=&quot;en&quot; moet '2017-01-01' worden '1 January 2017' of '01-01-2017'

Bij @xml:lang=&quot;fr&quot; moet '2017-01-01' worden '1er janvier 2017' of '01-01-2017'

Bij @xml:lang=&quot;de&quot; moet '2017-01-01' worden '1. Januar 2017' of '01-01-2017'

**SCP 22: VERVALLEN**

**SCP 23: De Consistente Presentatie MOET de datumaanduiding van de context periode van een kalenderjaar (YYYY-01-01 – YYYY-12-31) omzetten naar een jaartal (YYYY)**

In het geval sprake is van een periode dat een volledig kalenderjaar (YYYY-01-01 – YYYY-12-31) omvat, moet dit in de rendering worden getoond in de vorm van een heel jaartal (YYYY). Indien het geen kalenderjaar betreft, dient de periode aangeduid te worden door [begindatum] – [einddatum]

_Voorbeeld_

_Periode omvat een kalenderjaar_

Startdatum in XML notatie: '2018-01-01'

Einddatum in XML notatie: '2018-12-31'

Wijze van renderen cf. CP: '2018'

_Periode omvat geen kalenderjaar_

Startdatum in XML notatie: '2018-07-01'

Einddatum in XML notatie: '2019-06-30'

Wijze van renderen cf. CP: '1 juli 2018 – 30 juni 2019'
