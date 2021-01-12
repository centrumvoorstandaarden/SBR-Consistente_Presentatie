# SBR Consistente Presentatie regels

## Tabellen

**SCP 01: De Consistente Presentatie MOET de tabellen toepassen zoals opgenomen in de table linkbases binnen de DTS**

In de DTS zijn door de taxonomie auteur tabellen opgenomen in de vorm van table linkbases die de basis vormen van de Consistente Presentatie. Deze tabellen moeten worden toegepast zoals ze zijn opgenomen in de table linkbase.

De toepassing van de table linkbase is essentieel gebleken om veel van de presentatievereisten mogelijk te maken in een taxonomie. Dit betekent concreet het volgende:

- De x-as van een gerenderde tabel moet de elementen in dezelfde volgorde tonen als de volgorde van elementen op de x-as van een tabel in de table linkbase;
- De y-as van een gerenderde tabel moet de elementen in dezelfde volgorde tonen als de volgorde van elementen op de y-as van een tabel in de table linkbase;
- De x-as en y-as van een gerenderde tabel moeten niet omgedraaid worden ten opzichte van de x-as en y-as van een tabel in de table linkbase;
- De (generic) preferred labels die zijn opgegeven in de presentation en definition linkbase die de input vormen van de betreffende tabel moeten gehanteerd worden;
- De hiërarchie van elementen op de x-as of y-as van een tabel in de table linkbase mag worden getoond in de rendering van de tabel;
- De tabel filters van een tabel in de table linkbase moeten niet worden getoond in de rendering van een tabel.

Zoals hierboven aangegeven moet de x-as van een gerenderde tabel moet de elementen in dezelfde volgorde tonen als de volgorde van elementen op de x-as van een tabel in de table linkbase. Dit betekent dus ook dat het niet toegestaan is om zogenaamde 'split columns' te hanteren als dit niet in de taxonomie is opgenomen. Bij split columns worden de totalen in een andere kolom weergegeven dan de bedragen die optellen naar dit totaal. Hetzelfde is van toepassing voor de y-as. Ook hier moet de y gerenderde tabel de elementen in dezelfde volgorde tonen als de volgorde van elementen op de y-as van een tabel in de table linkbase.

In de tabel in table linkbase zijn op de x-as de verschillende kolommen opgenomen en op de y-as de verschillende rijen. De x-as en de y-as kunnen in theorie omgedraaid worden, maar dit is niet toegestaan. Beide assen moeten in de gerenderde tabel op dezelfde wijze gebruikt worden als in de tabel in table linkbase.

De tabel in de table linkbase wordt nagenoeg altijd gevoed door de inhoud van de presentation linkbase en/of definition linkbase. De tabel importeert de relaties uit de linkbases voor het genereren van de x-as en/of y-as. In deze linkbases kunnen ook preferred labels worden gebruikt, bijvoorbeeld om een totaaltelling aan te geven. Deze preferred labels moeten meegenomen worden in de rendering van de tabel.

In de tabel in de table linkbase is ook een bepaalde hiërarchie te zien tussen ouders en kinderen. Dit is in een soort L-vorm hiërarchisch weergegeven. Deze L-vorm kenmerkt zich doordat de kinderen van een element inspringen om deze L-vorm te creëren. Dit is een feature die de table linkbase standaard biedt om optellingen te visualiseren. In de rendering van de tabel mag deze L-vormige hiërarchie ook terugkomen. Het is echter ook toegestaan om deze inspringing niet mee te nemen.

De tabel filters zijn filters die veelvuldig worden gebruikt om de relevante aspecten van het in te vullen feit mee te geven in de tabel zoals opgenomen in de table linkbase. De tabel filters hebben tot doel om de juiste feiten in het instance document op te nemen. Ze moeten echter niet worden getoond in de rendering van een tabel.

**SCP 02: De Consistente Presentatie MOET lege tabellen wegfilteren**

Een tabel is leeg wanneer er geen feiten in het instance document staan die in een tabel getoond worden. Lege tabellen voegen niets toe en moeten zodoende weg gefilterd (geëlimineerd) worden uit de presentatie.

**SCP-02.1: De Consistente Presentatie MOET tabellen met de string &quot;PeriodeVoorgaandTypeJaarrekeningVerloopoverzicht&quot; in de table id wegfilteren waarin uitsluitend feiten met contexten met identieke datum van het periodetype instant zijn opgenomen, waarbij de datum gelijk is aan de FinancialReportingPeriodPreviousEndDate.**

Dit betreft verloopoverzichten voorgaande perioden waarbij uitsluitend de waarden voor het einde van de periode worden getoond en er geen waarden aan het begin van de periode en mutaties gedurende de periode (het verloop) worden getoond.

De waarden aan het einde van de (voorgaande) periode worden in zo'n situatie ook al als waarden aan het begin van de huidige periode in het verloopoverzicht huidige periode gepresenteerd.

De verloopoverzichten huidige periode en voorgaande periode zijn in separate table linkbases gedefinieerd. Deze regel is alleen van toepassing op de tabel zoals gedefinieerd in de table linkbase van verloopoverzichten voorgaande periode.

## Presentatie hiërarchie

**SCP 03: De Consistente Presentatie MOET gebruik maken van de in het entrypoint opgenomen**

**presentatie hiërarchie linkbase voor het bepalen van de volgorde en indeling van de tabellen**

In het entrypoint is een presentatie hiërarchie linkbase opgenomen waarin de volgorde van de tabellen en de indeling in een boomstructuur zijn opgenomen. De presentatie hiërarchie maakt gebruik van abstracte elementen (sbr:presentationItem) die middels een parent-child relatie een boomstructuur vormen op een vergelijkbare manier als de presentation linkbase binnen de XBRL 2.1 specificatie. De (uiteindelijke) kinderen van de parent-child relatie zijn echter geen concepten zoals in de presentation linkbase, maar ELRs die de betreffende tabellen bevatten. Hierdoor is de presentatie hiërarchie bedoeld om weer te geven hoe de tabellen zich tot elkaar verhouden en hoe dit getoond dient te worden.

<aside class="note">
Hier wordt een hierarchie beschreven. Zou dit in MD kunnen?
</aside>

Uit het bovenstaande voorbeeld blijkt dat het mogelijk is dat er een of meer tabellen onder één titel kunnen worden opgenomen. Het opnemen van meerdere tabellen onder één titel zal vooral van toepassing zijn in de situatie waar verschillende tabellen deel uitmaken van hetzelfde onderdeel.

In het bovenstaande voorbeeld worden drie verschillende ELRs genoemd onder de titel 'Materiële vaste activa'. Elk van deze ELRs bevat één tabel. Er zijn dus drie tabellen te onderkennen onder het kopje 'Materiële vaste activa'. Een tabel voor het verloopoverzicht, een tabel voor de uitsplitsing en een tabel met tekstuele toelichtingen. Deze regel stelt dat in de rendering deze tabellen in de volgorde moeten worden getoond zoals de presentatie hiërarchie aangeeft. Het is niet toegestaan om af te wijken van de volgorde in de presentatie hiërarchie. Het is wel mogelijk om deze volgorde te veranderen door het aanpassen van de inhoud van de presentatie hiërarchie met behulp van een preparer extension.

**SCP 04: De Consistente Presentatie MOET uitsluitend de titels in de presentatie hiërarchie linkbase**

**gebruiken**

Voor het genereren van de rendering moet gebruik gemaakt worden van de titels zoals opgenomen in de presentatie hiërarchie. Deze titels kenmerken zich doordat dit elementen in de substitution group sbr:presentationItem zijn. Het standaard label van deze elementen eindigt op ' [titel]'. Deze titels zijn in verschillende talen beschikbaar en zullen ook zonder de tekst ' [titel]' als terseLabel worden aangeroepen in de presentatie hiërarchie.

Het zijn uitsluitend de titels die als kopjes in de rendering voor moeten komen. De root-parent moet dus ook opgenomen worden als dit een titel betreft. Op basis van SCP 05 mogen de ELR labels niet gebruikt worden in de rendering. Dit betekent dat wanneer in de presentatie hiërarchie sprake is van meerdere ELRs die zijn opgenomen onder één titel, er geen sub-kopjes getoond mogen worden voor elke tabel. Het is nadrukkelijk de bedoeling om deze tabellen onder elkaar op te nemen onder hetzelfde kopje. In het voorbeeld van SCP-03 betekent dit dus dat er onder het kopje 'Materiële vaste activa' drie verschillende tabellen kunnen worden opgenomen, namelijk een voor het verloopoverzicht, een voor de uitsplitsing en een met tekstuele toelichtingen.

Het is niet toegestaan om andere dan de in de presentatie hiërarchie opgenomen titels te hanteren in de rendering. Het is mogelijk om de tekst van deze titels te veranderen door het aanpassen van de inhoud van de presentation hiërarchie met behulp van een preparer extension.

## Individuele tabel
**SCP 05: De Consistente Presentatie MAG NIET gebruik maken van de tabel label of ELR label**

Een tabel in de NT bevat altijd een zogenaamde tabel label; een label die gekoppeld is aan de @id van het <table:table> element. Dit label geeft een beschrijving van de inhoud van een tabel. Een tabel is daarnaast altijd opgenomen in een Extended Linkrole (ELR). Een ELR heeft ook een label die de inhoud van de ELR beschrijft. In de rendering op basis van de CP moeten deze labels niet worden toegepast, maar dient uitsluitend gebruik gemaakt te worden van de labels van de elementen in de presentatie hiërarchie in de substitution group sbr:presentationItem.

**SCP 06: De Consistente Presentatie MOET lege kolommen of rijen binnen een tabel wegfilteren**

In een tabel zullen in de meeste gevallen niet altijd alle kolommen of rijen worden gevuld met de waardes van feiten. Indien een rij en/of kolom leeg is, terwijl er wel waardes ingevuld zouden kunnen worden, voegt dit niets toe aan een tabel en moeten zodoende weggefilterd (geëlimineerd) worden uit de rendering. Als er sprake is van een abstract met bijbehorende kinderen die leeg zijn, dan wordt het geheel abstract en kinderen niet getoond.

**SCP 07: De Consistente Presentatie MOET de header vullen met een dynamisch label (indien**

**aanwezig)**

De headers van een kolom of rij in een tabel bevatten altijd een (statisch) label. In sommige gevallen moet de header gevuld worden met een label die afhankelijk is van de inhoud van het instance document zelf. Dit is vooral het geval wanneer een header van een tabel de datum(s) dient te bevatten van de huidige of voorgaande rapportageperiode(s).

Om een header te vullen met de relevante datums worden zogenaamde dynamische labels gehanteerd. In technische zin wordt hierbij een specifieke message uit de XBRL Formula 1.0 specificatie middels een SBR specifieke arc (dynamic-label-arc) gekoppeld aan de header van een tabel. Wanneer een dynamisch label beschikbaar is moet deze worden gebruikt in plaats van het statische label. Dit is het geval bij de tabellen van de financiële overzichten als de balans, de winst en- verliesrekening en het kasstroomoverzicht en de uitsplitsingen (breakdowns) van de bedragen op de financiële overzichten in de toelichting.

_Voorbeeld_

In de tabel van de balans worden de kolommen voor de huidige periode aangeduid met de headers 'Huidig' en 'Voorgaand'. Dit zijn de statische labels. In de taxonomie zijn hiervoor ook dynamische labels opgenomen. Deze verwijzen naar de einddatums van de huidige en voorgaande rapportageperiode die als feit zijn opgenomen in het instance document.

<aside class="note">
Hier wordt een voorbeeld getoond. Dit zou misschien als tabel moeten
</aside>

_Statisch label Dynamisch label_

Huidig 2017-12-31

Voorgaand 2016-12-31

De statische labels 'Huidig' en 'Voorgaand' moeten worden vervangen door respectievelijk '2017-12-31' en '2016-12-31'.

Dit zijn de opgegeven einddatums van de huidige en voorgaande rapportageperiode in de XML datumnotatie.

## typed dimensies

**SCP 08: De Consistente Presentatie MOET de volgorde van typed members bepalen op basis van het nl-cd:PresentationOrder concept, als dat opgenomen is in de instance**

Het is mogelijk om de volgorde van typed members in een tabel op te geven door het invullen van een waarde voor het concept nl-cd:PresentationOrder. De tabel definitie van elke tabel waarbinnen typed members worden toegepast bevat dit concept om hiermee de presentatievolgorde aan te geven. De waardes die kunnen worden toegepast dienen numeriek te zijn. Deze waardes worden opgenomen in het instance document.

**SCP 09: De Consistente Presentatie MOET de volgorde van typed member inhoud bepalen op basis**

**van alfabetische volgorde wanneer de waarde van het nl-cd:PresentationOrder concept niet is**

**ingevuld of niet uniek is**

Wanneer er geen waarde is opgenomen of wanneer de waarde van het nl-cd:PresentationOrder concept niet uniek is binnen een tabel, dienen de typed members geordend te worden op alfabetische volgorde.

**SCP 09.5: De Consistente Presentatie KAN de waardes van het nl-cd:PresentationOrder concept**

**Wegfilteren**

De waardes in het instance document van het nl-cd:PresentationOrder concept zijn uitsluitend bedoeld om de volgorde van typed members in een tabel te bepalen. Ze hebben geen semantisch inhoudelijk nut. Zodoende is het toegestaan dat deze waardes weg gefilterd worden uit de presentatie van de betreffende tabel.

## Taal en labels

**SCP 10: De Consistente Presentatie MOET de taal hanteren voor het weergeven van de labels van**

**alle elementen op basis van de waarde van het xml:lang attribuut in de root van het instance**

**document**

In het @xml:lang in de root van het instance document staat aangegeven in welke taal de rapportage is opgesteld. De waarde van het @xml:lang bepaalt ook de taal van de labels welke gehanteerd worden voor het renderen van de gegevens.

**SCP 11: De Consistente Presentatie MOET de generic labels uit de taxonomie hanteren voor**

**enumeratiewaardes**

Voor het tonen van enumeratiewaardes dient gebruik te worden gemaakt van de generic labels die in de taxonomie zijn opgenomen. Hierdoor worden de technische waardes in het instance document dus omgezet naar een bepaalde taal op basis van de generic labels uit de taxonomie. Het is niet gewenst dat de ingevoerde waarde wordt getoond, aangezien dit een technische benaming is voor hetgeen is opgenomen in de relevante generic labels.

**SCP-11.5: De Consistente Presentatie MAG NIET labels afkorten**

De labels van elementen in een taxonomie kunnen behoorlijk lang zijn. In het kader van rendering kan het soms wenselijk zijn om labels af te korten. In het kader van eenduidigheid is dit echter niet toegestaan. Waar mogelijk zullen terseLabels worden toegepast in de taxonomie om de lengte van labels te verminderen.

**SCP-11.6: De Consistente Presentatie MOET labels afbreken**

Het is verplicht om labels af te breken om hiermee op een volgende regel verder te gaan in het geval het label te lang is voor de beschikbare ruimte in een rendering. Het afbreken van labels kan naar eigen inzicht plaatsvinden.

## Eenheden

**SCP 12: De Consistente Presentatie MOET de eenheid van alle numerieke feiten weergeven**

De numerieke feiten in een instance document verwijzen altijd naar een bepaalde eenheid, zoals valuta, percentage, etc. Deze eenheden zijn van groot belang om de semantiek van de waarde van het numerieke feit te begrijpen.

De uitzondering hierop is bij het gebruik van de eenheid 'xbrli:pure'. Wanneer de in het instance document opgenomen eenheid 'xbrli:pure' betreft en het datatype van het betreffende concept is geen 'num:percentItemType' hoeft de eenheid niet te worden weergegeven. De labels van deze concepten zouden voldoende verklarend moeten zijn om de eenheid duidelijk te maken.

_Voorbeeld_

| **Concept** | **Datatype** | **Eenheid** | **Weergave in rendering** |
| --- | --- | --- | --- |
| A | monetaryItemType | iso4212:EUR (in geval van Euro's) | 'EUR' |
| B | percentItemType | xbrli:pure | 'procent' |
| C | decimalItemType | xbrli:pure | <niet van toepassing> |

**SCP 13: De Consistente Presentatie MOET de naam voor eenheden renderen op basis van de**

**unitName in de UTR**

De eenheden van numerieke feiten moeten worden gebaseerd op de Unit Type Registry1 (UTR) van XBRL International.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid volgens UTR** |
| --- | --- |
| iso4212:EUR | 'EUR' |
| iso4212: | USD 'USD' |
| xbrli:shares | 'Shares' |

**SCP 14: De Consistente Presentatie MOET de naam voor eenheden renderen op basis van de**

**relevante lokale naam indien er geen naam beschikbaar is in de UTR**

In de rendering dient gebruik gemaakt te worden van de unitName in de UTR of een vertaling hiervan in de betreffende taal.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid volgens UTR** | **Vertaling naar het Nederlands**
 |
| --- | --- | --- |
| iso4212:EUR | 'EUR' | <niet van toepassing> |
| iso4212:USD | 'USD' | <niet van toepassing> |
| xbrli:shares | 'Shares' | 'Aandelen' |

**SCP 15: De Consistente Presentatie KAN de naam of het symbool van de valuta voorafgaand aan**

**elk feit tonen en/of KAN de naam of het symbool van de valuta in de header van elke tabel**

**(kolom/rij) tonen**

Wanneer alle feiten in een tabel dezelfde eenheid hebben is het toegestaan om de eenheid niet per feit op te nemen, maar om dit aan de bovenkant van de betreffende tabel of pagina te vermelden.

**SCP 16: De Consistente Presentatie MAG NIET de naam of het symbool van de valuta in de header**

**van de tabel tonen wanneer de valuta's van de feiten in een tabel verschillend zijn**

Wanneer een tabel feiten bevat met verschillende valuta's, moeten deze niet in de header van de tabel worden opgenomen om verwarring te voorkomen.

**SCP 17: De Consistente Presentatie KAN eenheden ook weergeven in symbolen wanneer deze**

**opgenomen zijn in de UTR**

In het geval in de UTR ook symbolen zijn opgenomen voor een eenheid, mogen deze symbolen ook gebruikt worden om de eenheid weer te geven. In aanvulling op de UTR mag ook het symbool van procent gehanteerd worden.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid** | **Symbool** |
| --- | --- | --- |
| iso4212:EUR | 'EUR' | € |
| iso4212:USD | 'USD' | $ |
| xbrli:pure | 'procent' | % |

_1 Zie_ _http://www.xbrl.org/utr/utr.xml_

## Afronding

In veel rapportages worden bedragen afgerond en afgekort opgenomen. Het afronden van bedragen gebeurd vaak naar hele eenheden, naar duizendtallen of naar miljoenen.

De afgeronde bedragen in duizendtallen en miljoenen worden op papier vaak afgekort opgenomen.

Hierdoor is soms het verschil tussen afronden en afkorten niet meer duidelijk voor opstellers. Het afkorten van bedragen vergroot de leesbaarheid op papier, maar levert problemen op bij de toepassing van XBRL. Het afkorten van bedragen is in een XBRL instance document technisch niet mogelijk. In het instance document moet dus altijd een heel bedrag worden opgenomen. Dit bedrag zal altijd enige mate van afronding bevatten.

_Voorbeeld_

Stel een post bedraagt € 5.999.985. De opsteller wil dit bedrag afgerond rapporteren in de jaarrekening als € 6 miljoen.

| **Afgerond bedrag** | **Afgekort bedrag** | **Bedrag in XBRL instance document**
 |
| --- | --- | --- |
| € 6.000.000 | 6.000 (x € '000') | 6000000 |
| € 6.000.000 | 6 (x € '000.000') | 6000000 |

De bedragen in een consistente rendering zijn altijd in hele eenheden. Een gebruiker kan door middel van het @decimals attribuut in de instance aangeven wat de mate van nauwkeurigheid van de bedragen is. Deze informatie komt echter niet tot uitdrukking in de rendering. De bedragen worden dus altijd getoond in de rendering zoals ze zijn opgenomen in het XBRL instance document.

_Voorbeeld_

Stel een bedrag is EUR 1.329.912 en de opsteller wil dit afgerond opnemen in een verantwoordingsrapportage. De opsteller kan dit bedrag dan als volgt opnemen in het instance document:

- _Afgerond op hele eenheden : EUR 1329912 met @decimal=&quot;0&quot;_
- _Afgerond op duizendtallen : EUR 1330000 met @decimal=&quot;-3&quot;_
- _Afgerond op miljoenen : EUR 1000000 met @decimal=&quot;-6&quot;_

## Scheidingstekens

**SCP 18: De Consistente Presentatie MOET een scheidingsteken voor decimalen hanteren voor alle**

**feiten waar de waarde van @decimals hoger is dan '0'**

Een scheidingsteken voor decimalen (of decimaalteken) is een symbool dat gehanteerd wordt om het gehele deel te onderscheiden van de breuk van een getal dat is genoteerd in decimalen. Voor alle feiten met een @decimals hoger dan de waarde '0' (nul) dient een scheidingsteken voor decimalen gehanteerd te worden in de rendering.

**SCP 19: De Consistente Presentatie MOET een scheidingsteken voor duizendtallen toepassen**

Een scheidingsteken voor duizendtallen is een symbool dat gehanteerd wordt om getallen die uit vier of meer cijfers bestaan te groeperen per drie cijfers om het lezen ervan te vergemakkelijken. Deze groepering per drie cijfers loopt van rechts naar links vanaf het eventuele decimaalteken van een getal. Voor alle numerieke feiten moet een scheidingsteken voor duizendtallen gehanteerd worden.

**SCP 20: De Consistente Presentatie MOET de Nederlandse notatiewijze voor scheidingstekens**

**toepassen als het @xml:lang de waarde &quot;nl&quot; heeft**

In Nederland is het scheidingsteken voor decimalen een ',' (komma), terwijl het scheidingsteken voor duizendtallen een '.' (punt) is. Deze notatiewijze moet gebruikt worden wanneer het @xml:lang attribuut in het instance document de waarde &quot;nl&quot; heeft. In het geval de waarde van @xml:lang attribuut &quot;en&quot; is, moet de Engelse notatiewijze worden gehanteerd. In de Engelse notatie wijze is het scheidingsteken voor decimalen een '.' (punt) en het scheidingsteken voor duizendtallen een ',' (komma).

## Datums

**SCP 21: De Consistente Presentatie MOET de waarde van datums in de XML notatiewijze (YYYYMM-**

**DD) omzetten naar de lokaal gebruikelijke notatiewijze voor datums**

De waarde van datums die in het instance document of in de taxonomie zijn opgenomen zijn genoteerd in de XML notatiewijze (YYYY-MM-DD). Deze notatiewijze moet in de rendering worden getoond als de lokaal gebruikelijke notatiewijze. Dit betekent dat wanneer het @xml:lang attribuut 'nl' is dit naar de Nederlandse notatiewijze moet worden omgezet.

De lokaal gebruikelijke notatiewijze van een datum kan op twee manieren worden toegepast. De eerste manier is het uitschrijven van de datum. De tweede manier is het gebruik van het datumformaat DD-MM-YYYY, waarbij DD staat voor de dag, MM voor de maand en YYYY voor het jaar.

_Voorbeeld_

Bij @xml:lang=&quot;nl&quot; moet '2017-01-01' worden '1 januari 2017' of '01-01-2017'

Bij @xml:lang=&quot;en&quot; moet '2017-01-01' worden '1 January 2017' of '01-01-2017'

Bij @xml:lang=&quot;fr&quot; moet '2017-01-01' worden '1er janvier 2017' of '01-01-2017'

Bij @xml:lang=&quot;de&quot; moet '2017-01-01' worden '1. Januar 2017' of '01-01-2017'

**SCP 22: VERVALLEN**

**SCP 23: De Consistente Presentatie MOET de datumaanduiding van de context periode van een**

**kalenderjaar (YYYY-01-01 – YYYY-12-31) omzetten naar een jaartal (YYYY)**

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

2.10 Paginering

Paginering is het proces om gegevens op één of meer verschillende pagina's weer te geven. Dit proces speelt een belangrijke rol om de rendering in een papier-georiënteerd formaat op te leveren.

**SCP-23.5: De Consistente Presentatie MOET de titel boven de tekst plaatsen als het datatype van**

**het concept een nl-types:formattedExplanationItemType of nl-types:string100000ItemType betreft**

Een feit kan bestaan uit een grote hoeveelheid tekst. In het kader van het waarborgen van de leesbaarheid van het document is het verplicht om de titel boven de teksten te plaatsen in plaats van ernaast. Hierbij dienen de datatypes nl-types:formattedExplanationItemType of nltypes: string100000ItemType als de kenmerken in de taxonomie die aangeven of een titel boven de tekst geplaatst dient te worden.

**SCP-23.6: De Consistente Presentatie MOET voor een specificatie tabel dat concepten bevat met**

**een datatype dat is afgeleid van een xbrli:stringItemType, elke regel splitsen en deze regel**

**gekanteld weergeven.**

Een specificatie tabel is een tabel die gebruik maakt van typed dimensions. Een dergelijke tabel kan een grote hoeveelheid tekst bevatten waardoor het niet meer leesbaar is. In het kader van het waarborgen van de leesbaarheid is het van belang om elke regel van de tabel te kantelen. Dit is alleen van toepassing voor specificatie tabellen die bestaan uit concepten met een datatype dat is afgeleid van een xbrli:stringItemType. Tussen elke gekantelde regel dient een witregel opgenomen te worden.

_Voorbeeld_

Een specificatie tabel op basis van de table linkbase:

Woonplaats van Aandeel in geplaatst Aandeel in stemrecht Presentatie

de rechtspersoon kapitaal van de van de rechtspersoon volgorde

rechtspersoon

Dochter B Den Haag 100% 100% 1

Dochter A Rotterdam 100% 100% 2

Een specificatie tabel na toepassing van regel SCP-23.6:

Dochter B

Woonplaats van de rechtspersoon Den Haag

Aandeel in geplaatst kapitaal van de rechtspersoon 100%

Aandeel in stemrecht van de rechtspersoon 100%

Dochter A

Woonplaats van de rechtspersoon Rotterdam

Aandeel in geplaatst kapitaal van de rechtspersoon 100%

Aandeel in stemrecht van de rechtspersoon 100%

**SCP 24: De Consistente Presentatie MAG meerdere kolommen van één tabel afbreken naar eigen**

**Inzicht**

In een tabel kunnen meerdere kolommen voorkomen die waardes bevatten. Om deze tabel op een overzichtelijke wijze op een pagina te tonen kan de tabel afgebroken worden als er meerdere(gevulde) kolommen naast elkaar getoond worden. Deze afbreking kan plaatsvinden naar eigeninzicht.

**SCP 25: De Consistente Presentatie MOET kolom headers verticaal herhalen en/of rij headers horizontaal herhalen op iedere pagina indien de weergave van een tabel meerdere pagina's beslaat**

In het geval een tabel wordt weergegeven in een gepagineerde weergave waarbij de tabel wordt afgebroken, moeten de titels van een rij herhaald worden zodat voor iedere kolom van de tabel duidelijk is in welke rij de gegevens worden weergegeven. Hetzelfde is van toepassing voor de titels van de kolommen. Deze moeten herhaald worden zodat voor iedere rij duidelijk is welke kolom de gegevens worden weergegeven.

**SCP-25.5: De Consistente Presentatie MAG NIET tabellen transponeren, met uitzondering van specificatie tabellen.**

Het is nadrukkelijk niet toegestaan om een tabel te transponeren (kantelen), aangezien dit tot een interpretatieverschil kan leiden. De enige uitzondering hierop is de specificatie tabel, zoals vermeld in

regel SCP-23.6.

**SCP 26: De Consistente Presentatie MOET een voorpagina creëren wanneer het output formaat**

**.pdf is.**

Het is verplicht om een voorpagina te creëren voor de rendering wanneer het output formaat van de rendering .pdf is. Het is ook toegestaan om een voorpagina te creëren wanneer het output formaat HTML is, maar het is niet verplicht.

Op deze voorpagina moeten uitsluitend de labels (op basis van de in de presentation linkbase aangeroepen labelroles) en waardes van de volgende concepten worden getoond (ook in deze volgorde): kvk-i:TitleOfTheDocument ('titel van het document'), jenv-bw2-i:LegalEntityName ('naam van de rechtspersoon'), jenv-bw2-i:LegalEntityRegisteredOffice ('zetel van de rechtspersoon'), jenvbw2-i:FinancialReportingPeriodCurrentStartDate ('startdatum van de huidige financiële rapportageperiode'), jenv-bw2-i:FinancialReportingPeriodCurrentEndDate ('einddatum van de huidige financiële rapportageperiode'), jenv-bw2-i:DocumentAdoptionStatus ('jaarrekening vastgesteld (J/N)') en jenv-bw2-i:DocumentAdoptionDate ('datum van vaststelling van de jaarrekening'). Het is niet toegestaan om andere inhoud te tonen op de voorpagina.

_Voorschrift_

Titel van het document: Jaarrekening 2017

Naam van de rechtspersoon: ABC B.V.

Zetel van de rechtspersoon: Den Haag

Startdatum van de huidige financiële rapportageperiode: 1 januari 2017

Einddatum van de huidige financiële rapportageperiode: 31 december 2017

Jaarrekening vastgesteld (J/N): Ja

Datum van vaststelling van de jaarrekening: 18 maart 2018

De plaats op de voorpagina waar deze informatie wordt opgenomen is niet voorgeschreven. In het geval de datum van vaststelling nog niet is opgenomen, dient dit concept niet op de voorpagina opgenomen te worden.

De labels van de eerste drie concepten (titel van het document, naam van de rechtspersoon en zetel van de rechtspersoon) hoeven niet opgenomen te worden op de voorpagina. De overige labels moeten wel opgenomen worden op de voorpagina.

**SCP 27: De Consistente Presentatie MOET een inhoudsopgave genereren op basis van de in de**

**taxonomie opgenomen presentatie hiërarchie wanneer het output formaat .pdf is**

Het is verplicht om een inhoudsopgave op te nemen wanneer het output formaat van de rendering .pdf is. Hierbij mag naar paginanummers worden verwezen. Bij het output formaat HTML mag een inhoudsopgave of een navigatievenster worden gebruikt. Dit is echter niet verplicht. De titel hiervan moet 'Inhoudsopgave' zijn.

De inhoudsopgave of het navigatieventer moet worden gegenereerd op basis van de in de taxonomie opgenomen presentatie hiërarchie. Hierbij moet het niveau van diepgang van de hiërarchie op niveau 4 worden gesteld (waarbij de root-parent als niveau 0 wordt gezien). De rootparent moet hierbij ook in de inhoudsopgave worden vermeld.

2.11 Tekstopmaak

Onder tekstopmaak wordt bestaan het verfraaien van een stuk platte tekst met de insteek om de tekst beter leesbaar of beter begrijpelijk te maken. In een instance document kunnen escaped HTML tags zijn opgenomen die de door de opsteller beoogde tekstopmaak aangeeft.

**SCP-28: De Consistente Presentatie MOET de 'escaped' HTML tags als waarde van een concept met**

**het datatype 'nl-types:formattedExplanationItemType' renderen als tekstopmaak**

In de tekstuele toelichtingen kan het gebruik van tekstopmaak een meerwaarde hebben. De tekstopmaak wordt gecodeerd met 'escaped' HTML. De toelichtingen waar het gebruik van tekstopmaak is toegestaan, hebben het datatype 'nl-types:formattedExplanationItemType'. Een opsteller is niet verplicht om dit type tekstopmaak toe te passen. Indien een instance document daadwerkelijk escaped HTML tags bevat, dient dit ook als tekstopmaak verwerkt te worden in de rendering.

**SCP-29: De Consistente Presentatie MOET line breaks in tekstuele feiten als zodanig renderen**

Wanneer een tekstueel feit in het instance document een of meer line breaks bevat, moeten deze line breaks ook meegenomen worden in de rendering. Door de toepassing van line breaks kan een opsteller grotere hoeveelheden tekst opnemen in een concept zonder dat de toepassing van tekstopmaak met behulp van HTML tags is vereist. In deze context worden zowel CRLF (Carriage return, Line feed) als LF (Line feed) als line breaks erkent.

_Voorbeeld_

_Instance document:_

<concept>Deze tekst

maakt

gebruik van line breaks.</concept>

_Rendering:_

Deze tekst

maakt

gebruik van line breaks.

**SCP-30: De Consistente Presentatie MOET leiden tot een voor de mens goed leesbare rendering**

De hoofdregel voor de toepassing van tekstopmaak binnen de Consistente Presentatie is dat alle

opmaak moet blijven leiden tot een voor de mens goed leesbaar resultaat. Zo is een zeer klein font of

een witte tekst op witte achtergrond is niet toegestaan. De verantwoordelijkheid voor een goed

leesbare rendering ligt zodoende bij de opsteller van de rapportage.

**SCP-30.1: De Consistente Presentatie MOET (sub)totalen visueel aanduiden in de vorm van een**

**telstreep boven het bedrag van het (sub)totaal**

Het tonen van een telstreep is een methode om visueel weer te geven dat sprake is van een (sub)totaal. De telstreep dient boven het bedrag van het sub(totaal) getoond te worden. De (sub)totalen zijn in een tabel te herkennen doordat zij in de taxonomie als een totalLabel bij het @preferredLabel attribuut van een arc worden aangeroepen.

_Voorschrift_

Voorraad grond- en hulpstoffen 10.000

Voorraad gereed product en handelsgoederen 20.000

Totaal van voorraden 30.000

**SCP-30.2 De Consistente Presentatie MAG totalen visueel aanduiden met een enkele of dubbele**

**streep onder een totaal**

Het is toegestaan om totalen, zowel subtotalen als eindtotalen, te voorzien van een enkele of dubbele telstreep onder het totaal. Deze totalen zijn te herkennen doordat zij door middel van een totalLabel worden aangeroepen in de taxonomie. Hierbij zijn eindtotalen te herkennen doordat zij in een roll-up node de hoogste 'parent' zijn die niet een sbr:presentationItem is.

_Voorbeeld_

Voorraad grond- en hulpstoffen 10.000

Voorraad gereed product en handelsgoederen 20.000

Totaal van voorraden 30.000

**SCP-30.3: VERVALLEN**

**SCP-30.4: VERVALLEN**

**SCP-30.5: [TIJDELIJKE REGEL] De Consistente Presentatie MOET de waardes van concepten in een**

**totaaltelling met een afwijkende balanceType visueel onderscheiden door het gebruik van een**

**minteken**

In een instance document dienen alle bedragen in principe als positieve waardes te worden ingevuld, ongeacht of dit kosten of opbrengsten - of - activa of passiva betreft. Dit vloeit voort uit het feit dat elk concept in de taxonomie een balanceType 'debit' of 'credit' heeft meegekregen. In de situatie dat concepten met verschillende balanceTypes bij elkaar opgeteld worden is hierdoor niet altijd helder hoe de optelling verloopt, aangezien de balanceTypes niet getoond worden. Het is echter gewenst dat bedragen met een afwijkende balanceType in een optelling visueel onderscheiden worden. De taxonomie dient te specificeren wanneer een minteken getoond dient te worden en wanneer niet.

Op dit moment is dit echter nog geen onderdeel van de taxonomie, waardoor deze tijdelijke CP regel noodzakelijk is. Deze work-around werkt op basis van een algoritme waarmee de waardes van concepten met een afwijkende balanceType ten opzichte van het totaalbedrag getoond dienen te worden als een 'min bedrag' door voor dit bedrag een minteken te plaatsen. Dit algoritme geldt alleen voor de totaaltellingen (aangeduid in de taxonomie door een totalLabel) die ook hetzelfde

periodType hebben.

Het totaal dient als anker; oftewel het balanceType van het totaal is leidend. Per tabel kan er uitsluitend één anker zijn. In het geval van subtotalen, dienen deze zich te schikken naar het balanceType van het eindtotaal; oftewel de uiteindelijke ouder ('ultimate parent'). Voor de waardes van alle concepten die optellen naar dit totaal en die een balanceType hebben dat afwijkt van die van het totaal, moeten een minteken worden geplaatst. Wanneer een bedrag reeds negatief is opgenomen in het instance document, dient de toepassing van deze regel te leiden tot het wegvallen van het minteken op basis van het principe 'min + min = plus'.

_Voorschrift_

Voorbeeld zonder toepassing van het algoritme:

Bruto vorderingen op handelsdebiteuren 100

Voorziening voor oninbaarheid 10

Netto vorderingen op handelsdebiteuren 90

Voorbeeld met toepassing van het algoritme:

Bruto vorderingen op handelsdebiteuren 100

Voorziening voor oninbaarheid -10

Netto vorderingen op handelsdebiteuren 90

Wanneer de waarde '0' is, moet - ondanks een afwijkend balanceType geen minteken worden

gebruikt. Het is dus niet mogelijk om de waarde '-0' te renderen.

**SCP-30.6: [TIJDELIJKE REGEL – GELDIG T/M NT14!] De Consistente Presentatie MOET de winst- en verliesrekening renderen met totaalstrepen en mintekens**

De toepassing van SCP-30.1 en 30.5 inzake totaalstrepen en mintekens zorgt niet voor de juiste totaalstrepen en mintekens in de winst- en verliesrekening. Dit vloeit voort uit de gehanteerde presentatiestructuur van de winst- en verliesrekening in de taxonomie. Dit zal moeten worden aangepast in de taxonomie. Tot het moment dat deze aanpassing is doorgevoerd, is deze tijdelijke CP regel van toepassing.

De winst- en verliesrekening is opgenomen in de ELRs met de naam kvk-lr:IncomeStatement en kvklr: ConsolidatedIncomeStatement, eventueel aangevuld met een sectorale beschrijving (bijv. kvklr: IncomeStatementBanks) in het geval van een entrypoint voor bijzondere bedrijfstakken.

De winst- en verliesrekening volgens de categoriale indeling moet worden gerenderd conform het onderstaande voorbeeld:

_Voorbeeld_

Bruto-bedrijfsresultaat X

Lasten uit hoofde van personeelsbeloningen X

Afschrijvingen op immateriële en materiële vaste activa X

Waardeveranderingen van immateriële en materiële vaste activa -X

Waardeveranderingen van vastgoedbeleggingen X

Gerealiseerde waardeveranderingen van beleggingen X

Niet-gerealiseerde waardeveranderingen van beleggingen X

Waardeveranderingen van agrarische voorraden X

Bijzondere waardeverminderingen van vlottende activa

Overige bedrijfskosten X

Totaal van som der kosten Xv

Totaal van bedrijfsresultaat X

Opbrengst van vorderingen die tot de vaste activa behoren en van effecten X

Vrijval uit herwaarderingsreserve X

Waardeveranderingen van financiële vaste activa en van effecten X

Financiële baten en lasten X

Totaal van resultaat voor belastingen X

Belastingen over de winst of het verlies -X

Aandeel in resultaat van ondernemingen waarin wordt deelgenomen X

Overige baten en lasten na belasting X

Totaal van resultaat na belastingen X

De winst- en verliesrekening volgens de functionele indeling moet worden gerenderd conform het onderstaande voorbeeld:

_Voorbeeld_

Bruto-bedrijfsresultaat X

Verkoopkosten X

Algemene beheerskosten X

Totaal van som der kosten X

Totaal van bedrijfsresultaat X

Opbrengst van vorderingen die tot de vaste activa behoren en van effecten X

Vrijval uit herwaarderingsreserve X

Waardeveranderingen van financiële vaste activa en van effecten X

Financiële baten en lasten X

Totaal van resultaat voor belastingen X

Belastingen over de winst of het verlies -X

Aandeel in resultaat van ondernemingen waarin wordt deelgenomen X

Overige baten en lasten na belasting X

Totaal van resultaat na belastingen X

**SCP-30.6: [TIJDELIJKE REGEL – GELDIG VANAF NT15!] De Consistente Presentatie MOET de winst- en verliesrekening renderen met totaalstrepen**

De toepassing van SCP-30.1 en 30.5 inzake totaalstrepen zorgt niet voor de juiste totaalstrepen in de winst- en verliesrekening. Dit vloeit voort uit de gehanteerde presentatiestructuur van de winst- en verliesrekening in de taxonomie. Dit zal moeten worden aangepast in de taxonomie. Tot het moment dat deze aanpassing is doorgevoerd, is deze tijdelijke CP regel van toepassing.

De winst- en verliesrekening is opgenomen in de ELRs met de naam kvk-lr:IncomeStatement en kvklr: ConsolidatedIncomeStatement, eventueel aangevuld met een sectorale beschrijving (bijv. kvklr: IncomeStatementBanks) in het geval van een entrypoint voor bijzondere bedrijfstakken.

De winst- en verliesrekening volgens de categoriale indeling moet worden gerenderd conform het onderstaande voorbeeld:

_Voorschrift_

Bruto-bedrijfsresultaat X

Lasten uit hoofde van personeelsbeloningen X

Afschrijvingen op immateriële en materiële vaste activa X

Waardeveranderingen van immateriële en materiële vaste activa X

Waardeveranderingen van vastgoedbeleggingen X

Gerealiseerde waardeveranderingen van beleggingen X

Niet-gerealiseerde waardeveranderingen van beleggingen X

Waardeveranderingen van agrarische voorraden X

Bijzondere waardeverminderingen van vlottende activa

Overige bedrijfskosten X

Totaal van som der kosten Xv

Totaal van bedrijfsresultaat X

Opbrengst van vorderingen die tot de vaste activa behoren en van effecten X

Vrijval uit herwaarderingsreserve X

Waardeveranderingen van financiële vaste activa en van effecten X

Financiële baten en lasten X

Totaal van resultaat voor belastingen X

Belastingen over de winst of het verlies -X

Aandeel in resultaat van ondernemingen waarin wordt deelgenomen X

Overige baten en lasten na belasting X

Totaal van resultaat na belastingen X

De winst- en verliesrekening volgens de functionele indeling moet worden gerenderd conform het onderstaande voorbeeld:

_Voorschrift_

Bruto-bedrijfsresultaat X

Verkoopkosten X

Algemene beheerskosten X

Totaal van som der kosten X

Totaal van bedrijfsresultaat X

Opbrengst van vorderingen die tot de vaste activa behoren en van effecten X

Vrijval uit herwaarderingsreserve X

Waardeveranderingen van financiële vaste activa en van effecten X

Financiële baten en lasten X

Totaal van resultaat voor belastingen X

Belastingen over de winst of het verlies -X

Aandeel in resultaat van ondernemingen waarin wordt deelgenomen X

Overige baten en lasten na belasting X

Totaal van resultaat na belastingen X

## Afbeeldingen

Het gebruik van een afbeelding in een verantwoordingsrapportage kan een meerwaarde hebben. Met behulp van een Preparer Extension kan een opsteller een concept toevoegen aan de taxonomie waarmee een afbeelding kan worden opgenomen in het XBRL instance document.

**SCP-31: De Consistente Presentatie MOET de waarde van een concept met het datatype 'nltypes: imageItemType' renderen als afbeelding**

Een afbeelding in het XBRL instance document is gecodeerd met 'escaped' HTML in combinatie met een standaard formaat base64 stream. De concepten waar het gebruik van afbeelding is toegestaan, hebben het datatype 'nl-types:imageItemType'. Indien in een instance document een waarde is opgenomen voor een concept met het datatype nl-types:imageItemType, dient deze waarde als afbeelding verwerkt te worden in de rendering. Hierbij moet gebruik worden gemaakt van de door de opsteller opgegeven attributen in 'escaped' HTML.

## Overig

**SCP-33: De Consistente Presentatie MOET de feiten in een instance document die niet in een tabel**

**zijn opgenomen apart tonen onder de titel &quot;Niet-getoonde feiten&quot; met uitzondering van SCP-09.5**

Wanneer het instance document feiten bevat die geen onderdeel uitmaken van een tabel in de taxonomie is er geen informatie beschikbaar om te bepalen waar deze feiten getoond dienen te worden. Zodoende moeten dergelijke feiten onderaan de rendering getoond worden onder de titel &quot;Niet-getoonde feiten&quot; met uitzondering van de sbr:presentationOrder uit SCP-09.5.

De niet-getoonde feiten zijn uitsluitend bestemt ten behoeve van het proces van het opstellen van een instance document. Het kan immers voorkomen dat een fout gemaakt wordt bij het opstellen, waardoor deze regel kan helpen om deze fout te detecteren. Het is niet toegestaan om daadwerkelijk feiten te rapporteren die niet getoond worden in een tabel.

**SCP-34: De Consistente Presentatie MAG NIET de XML commentaar tonen uit het instance document**

Het is mogelijk dat XML commentaar wordt opgenomen in het instance document om bijvoorbeeld de software aan te geven waarmee het is opgenomen. Aangezien het XML commentaar geen feiten mag bevatten is het niet nodig om dit commentaar te tonen in de Consistente Presentatie.

**SCP-35: De Consistente Presentatie MAG een header en/of footer opnemen waarin procesinformatie is opgenomen.**

Het is soms wenselijk om in een header en/of footer specifieke proces-gerelateerde informatie op te nemen omtrent het document. Een voorbeeld van dergelijke proces informatie is dat het document nog een concept is tijdens het proces van review. Het is toegestaan om in de header en/of footer dergelijke proces-gerelateerde informatie op te nemen, zolang dit niet strijdig is met de informatie in het document. Het is echter wenselijk om procesinformatie achteraan in de rendering op te nemen.

**SCP-36: De Consistente Presentatie MAG een paginanummer opnemen indien het output formaat**

**.pdf is**

Het is toegestaan om bij een rendering in het output formaat .pdf een paginanummer op te nemen in de footer.
