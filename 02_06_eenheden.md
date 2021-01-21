## Eenheden

**SCP 12: De Consistente Presentatie MOET de eenheid van alle numerieke feiten weergeven**

De numerieke feiten in een instance document verwijzen altijd naar een bepaalde eenheid, zoals valuta, percentage, etc. Deze eenheden zijn van groot belang om de semantiek van de waarde van het numerieke feit te begrijpen.

De uitzondering hierop is bij het gebruik van de eenheid 'xbrli:pure'. Wanneer de in het instance document opgenomen eenheid 'xbrli:pure' betreft en het datatype van het betreffende concept is geen 'num:percentItemType' hoeft de eenheid niet te worden weergegeven. De labels van deze concepten zouden voldoende verklarend moeten zijn om de eenheid duidelijk te maken.

_Voorbeeld_

| **Concept** | **Datatype** | **Eenheid** | **Weergave in rendering** |
| --- | --- | --- | --- |
| A | monetaryItemType | iso4212:EUR (in geval van Euro's) | 'EUR' |
| B | percentItemType | xbrli:pure | 'procent' |
| C | decimalItemType | xbrli:pure | &lt;niet van toepassing&gt; |

**SCP 13: De Consistente Presentatie MOET de naam voor eenheden renderen op basis van de unitName in de UTR**

De eenheden van numerieke feiten moeten worden gebaseerd op de Unit Type Registry1 (UTR) van XBRL International.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid volgens UTR** |
| --- | --- |
| iso4212:EUR | 'EUR' |
| iso4212: | USD 'USD' |
| xbrli:shares | 'Shares' |

**SCP 14: De Consistente Presentatie MOET de naam voor eenheden renderen op basis van de relevante lokale naam indien er geen naam beschikbaar is in de UTR**

In de rendering dient gebruik gemaakt te worden van de unitName in de UTR of een vertaling hiervan in de betreffende taal.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid volgens UTR** | **Vertaling naar het Nederlands**
| --- | --- | --- |
| iso4212:EUR | 'EUR' | &lt;niet van toepassing&gt; |
| iso4212:USD | 'USD' | &lt;niet van toepassing&gt; |
| xbrli:shares | 'Shares' | 'Aandelen' |

**SCP 15: De Consistente Presentatie KAN de naam of het symbool van de valuta voorafgaand aan elk feit tonen en/of KAN de naam of het symbool van de valuta in de header van elke tabel (kolom/rij) tonen**

Wanneer alle feiten in een tabel dezelfde eenheid hebben is het toegestaan om de eenheid niet per feit op te nemen, maar om dit aan de bovenkant van de betreffende tabel of pagina te vermelden.

**SCP 16: De Consistente Presentatie MAG NIET de naam of het symbool van de valuta in de header van de tabel tonen wanneer de valuta's van de feiten in een tabel verschillend zijn**

Wanneer een tabel feiten bevat met verschillende valuta's, moeten deze niet in de header van de tabel worden opgenomen om verwarring te voorkomen.

**SCP 17: De Consistente Presentatie KAN eenheden ook weergeven in symbolen wanneer deze opgenomen zijn in de UTR**

In het geval in de UTR ook symbolen zijn opgenomen voor een eenheid, mogen deze symbolen ook gebruikt worden om de eenheid weer te geven. In aanvulling op de UTR mag ook het symbool van procent gehanteerd worden.

_Voorbeeld_

| **Eenheid in instance document** | **Naam van eenheid** | **Symbool** |
| --- | --- | --- |
| iso4212:EUR | 'EUR' | € |
| iso4212:USD | 'USD' | $ |
| xbrli:pure | 'procent' | % |

_1 Zie_ _http://www.xbrl.org/utr/utr.xml_
