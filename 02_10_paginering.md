## Paginering

Paginering is het proces om gegevens op één of meer verschillende pagina's weer te geven. Dit proces speelt een belangrijke rol om de rendering in een papier-georiënteerd formaat op te leveren.

**SCP-23.5: De Consistente Presentatie MOET de titel boven de tekst plaatsen als het datatype van het concept een nl-types:formattedExplanationItemType of nl-types:string100000ItemType betreft**

Een feit kan bestaan uit een grote hoeveelheid tekst. In het kader van het waarborgen van de leesbaarheid van het document is het verplicht om de titel boven de teksten te plaatsen in plaats van ernaast. Hierbij dienen de datatypes nl-types:formattedExplanationItemType of nltypes: string100000ItemType als de kenmerken in de taxonomie die aangeven of een titel boven de tekst geplaatst dient te worden.

**SCP-23.6: De Consistente Presentatie MOET voor een specificatie tabel dat concepten bevat met een datatype dat is afgeleid van een xbrli:stringItemType, elke regel splitsen en deze regel gekanteld weergeven.**

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

**SCP 26: De Consistente Presentatie MOET een voorpagina creëren wanneer het output formaat.pdf is.**

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

**SCP 27: De Consistente Presentatie MOET een inhoudsopgave genereren op basis van de in de taxonomie opgenomen presentatie hiërarchie wanneer het output formaat .pdf is**

Het is verplicht om een inhoudsopgave op te nemen wanneer het output formaat van de rendering .pdf is. Hierbij mag naar paginanummers worden verwezen. Bij het output formaat HTML mag een inhoudsopgave of een navigatievenster worden gebruikt. Dit is echter niet verplicht. De titel hiervan moet 'Inhoudsopgave' zijn.

De inhoudsopgave of het navigatieventer moet worden gegenereerd op basis van de in de taxonomie opgenomen presentatie hiërarchie. Hierbij moet het niveau van diepgang van de hiërarchie op niveau 4 worden gesteld (waarbij de root-parent als niveau 0 wordt gezien). De rootparent moet hierbij ook in de inhoudsopgave worden vermeld.
