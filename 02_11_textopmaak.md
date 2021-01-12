## Tekstopmaak

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
