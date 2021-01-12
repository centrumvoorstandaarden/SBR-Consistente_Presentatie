# Inleiding

## Achtergrond
De feiten in een XBRL instance document zijn niet leesbaar voor mensen. Hierdoor is er momenteel – als gevolg van de huidige transitie van een papier-georiënteerd verantwoordingsproces naar een digitaal verantwoordingsproces via binnen Standard Business Reporting (SBR) – een duidelijke behoefte bij veel partijen aan het visualiseren van deze gegevens door middel van het renderen van deze gegevens naar een voor de mens leesbaar formaat.

De term ‘renderen’ wordt vaak gedefinieerd als een vertaling van gegevens naar een andere taal of stijl. In het kader van SBR wordt een nauwere definitie gehanteerd: Het door een computerprogramma laten omzetten van gegevens in een SBR verantwoordingsrapportage in de vorm van een XBRL instance document naar een leesbare representatie hiervan. Deze representatie wordt ook wel een rendering genoemd. Het instance document is sterk afhankelijk van de taxonomie waarnaar deze verwijst. In de taxonomie zijn verscheidene constructen beschikbaar die als basis dienen voor de totstandkoming van de rendering. De belangrijkste constructen zijn vaak de verschillende tabellen opgenomen in de table linkbases van een taxonomie.

Het is wenselijk dat de output van het proces van rendering door verschillende computerprogramma’s uitgevoerd kan worden en dat deze output er op een vergelijkbare manier uit komt te zien. Het is mogelijk om een dergelijke consistentie te realiseren wanneer de computerprogramma’s dezelfde constructen hanteren tijdens het proces van rendering. Niet alle benodigde constructen maken echter deel uit van het XBRL instance document of de XBRL taxonomie. De SBR Consistente Presentatie specificatie beoogt de ontbrekende constructen te definiëren om het op die wijze mogelijk te maken dat verschillende computerprogramma’s een consistente rendering van de feiten in het XBRL instance document zullen opleveren. Een conceptuele weergave van het proces van de totstandkoming van een consistente rendering is in de onderstaande figuur opgenomen:
<aside class="warning">
Illustratie ontbreekt (ook in Word document)
</aside>

Voor de mens leesbare verantwoordingsinformatie is vooral van belang voor die informatieketens waarbij een bepaalde presentatiewijze van groot belang is, zoals jaarverantwoordingsketens. De vraag naar een consistente rendering van de feiten in het XBRL instance document komt vanuit verschillende partijen binnen een informatieketen. Zo willen de opstellers van de verantwoordingsinformatie vaak vooraf bekijken hoe hun verantwoordingsdocument eruit komt te zien, zodat zij weten wat hun stakeholders te zien krijgen. Een consistente rendering is ook relevant voor de controleurs van de verantwoordingsinformatie. Zij hebben te maken met controlestandaarden die meestal nog geënt zijn op de papieren werkelijkheid, waardoor een eenduidige vertaling van de digitale gegevens naar een digitale weergave van groot belang is om binnen deze standaarden een verklaring te kunnen verstrekken. Ontvangers en gebruikers van de  verantwoordingsinformatie zullen deze ook regelmatig in gerenderde vorm consumeren, waarbij het helpt in de communicatie als de gegevens op een consistente wijze worden getoond, zowel qua volgorde, inhoud en structuur.

## Doel van dit document
De Consistente Presentatie specificatie beoogt om alle gebruikers van een XBRL-document in staat te
stellen om een consistent, voor mensen leesbaar beeld te vervaardigen van de gestructureerde gegevens in XBRL formaat. Hierbij maakt het nadrukkelijk gebruik van de reeds in de Nederlandse Taxonomie opgenomen definities, maar voegt het afspraken toe die niet in de Nederlandse Taxonomie kunnen worden opgenomen. Hierbij richt het zich onder meer op zaken als de rangschikking van de verschillende onderdelen van een verantwoordingsrapportage.
Dit document bevat een set van regels die gehanteerd kunnen worden voor het presenteren van een SBR rapportage in XBRL formaat. Deze regels hebben tot doel om een eenduidige en voor mensen leesbare weergave te realiseren van de betreffende SBR verantwoordingsrapportage. De juiste toepassing van deze regels zal ertoe leiden dat verschillende softwareprogramma’s een vergelijkbare output tot gevolg hebben bij het visualiseren van een XBRL instance document; oftewel een consistente presentatie.

In dit document zijn een aantal tijdelijke CP regels opgenomen. Deze tijdelijke CP regels komen voort uit de situatie dat de huidige taxonomie nog niet alle constructen bevat die noodzakelijk zijn om de gewenste consistente rendering te realiseren, terwijl deze constructen wel in de taxonomie opgenomen kunnen worden. Deze tijdelijke CP regels zijn van toepassing tot het moment dat deze constructen ook daadwerkelijk in de taxonomie zijn opgenomen. Daarna zullen zij uit de Consistente Presentatie specificatie worden verwijderd.

## Reikwijdte
De reikwijdte van de SBR Consistente Presentatie specificatie richt zich op de toepassing binnen SBR verantwoordingsketens inzake jaarverantwoordingen, waaronder het deponeren van een jaarrekening bij het Handelsregister van de Kamer van Koophandel.

Deze versie van de Consistente Presentatie specificatie, versie 1.3.3, is bedoeld voor het renderen van verantwoordingsrapportages die zijn opgesteld met behulp van de relevante entrypoints vanaf de NT14 (NT15 e.v.). 

De toepassing van deze specificatie voor entrypoints uit eerdere NT versies is toegestaan, maar niet verplicht.

Regel SCP 2.1 is toegevoegd door middel van een spoedprocedure en daarmee ook van toepassing op de NT14 (en eerder). 

Regels SCP 30.6 is tweemaal opgenomen: éénmaal de versie die van toepassing was tot en met NT14 (en eerder) en éénmaal de versie, die van toepassing is op de NT15 (e.v.). 

## Doelgroep
Dit document is bedoeld voor een technisch publiek (softwareontwikkelaars) en gaat ervan uit dat de lezer praktische kennis heeft van de XBRL standaard en daarnaast bekend is met de toepassing van vooral de XBRL Table Linkbase, de XBRL Generic Links en Generic Preferred Label specificaties. 

## Testsuite
Voor het testen van de gewenste werking van de Consistente Presentatie is een testsuite opgesteld.

Het doel van de testsuite is om verschillende implementaties van rendering op basis van de Consistente Presentatie specificatie mogelijk te maken. De testsuite bevat (waar mogelijk) per regel een of meer voorbeelden van de verwachte consistente rendering op basis van de Consistente Presentatie specificatie. De rendering van de input van deze voorbeelden door een applicatie moet consistent zijn met de verwachte consistente rendering in de testsuite.

De structuur van elke individuele test is eenvoudig:
- Een XBRL instance document (input)
- Een verwachte weergave van de consistente rendering (een rendering op basis van de Consistente Presentatie specificatie)

De testsuite bevat geen integrale test van alle verschillende regels tezamen. De set van individuele tests dekken immers alle regels af. De toepassing van sommige regels in de Consistente Presentatie specificatie is ook afhankelijk van het type tabel dat gehanteerd wordt. In deze gevallen is er voor elk type tabel een aparte test voor de betreffende regel gerealiseerd.

## Document conventies
**Terminologie**

De regels in dit document hanteren veelvuldig de termen “MOET” en “MAG NIET” of een vervoeging hiervan om een verplichting of verbod te identificeren. Het niet naleven van deze regels zal leiden tot  een inconsistente presentatie van de gegevens in het XBRL instance document.

Een aantal regels hanteren de termen “KAN” en “BEHOORT NIET” of een vervoeging hiervan.

Hiermee worden niet-verplichte mogelijkheden aangeduid die toegepast kunnen worden op een presentatie. Het niet naleven van deze regels zal niet leiden tot een inconsistente presentatie van de gegevens in het XBRL instance document.

**Voorbeelden**

De voorbeelden die gebruikt worden in dit document zijn niet-normstellend (non-normative).

## Uitgangspunten

De volgende uitgangspunten mogen worden gehanteerd in het kader van de SBR Consistente Presentatie:

**Instance document:**
- Het XBRL instance document moet XBRL valide zijn
- Het XBRL instance document moet voldoen aan de SBR Filing Rules

**Taxonomie:**
- De XBRL taxonomie moet voldoen aan de Nederlandse Taxonomie Architectuur (NTA)
- De XBRL taxonomie moet table linkbases bevatten
- Alle relevante informatie die voor rendering van belang is moet in de DTS zijn opgenomen
- Relevante informatie die niet in de DTS is opgenomen wordt niet verwerkt

**Preparer extensions:**

- Een preparer extensie voldoet aan de NTA voor preparer extensions (NTA-PE)

**Consistente presentatie specificatie:**

- Alle regels in dit document worden in acht genomen


