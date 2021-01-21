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

|**Statisch label** |**Dynamisch label**|
|-------------------|-------------------|
|                   |                   |
|Huidig             |2017-12-31         |
|Voorgaand          |2016-12-31         |

De statische labels 'Huidig' en 'Voorgaand' moeten worden vervangen door respectievelijk _'2017-12-31'_ en _'2016-12-31'_.

Dit zijn de opgegeven einddatums van de huidige en voorgaande rapportageperiode in de XML datumnotatie.
