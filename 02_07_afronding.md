## Afronding

In veel rapportages worden bedragen afgerond en afgekort opgenomen. Het afronden van bedragen gebeurd vaak naar hele eenheden, naar duizendtallen of naar miljoenen.

De afgeronde bedragen in duizendtallen en miljoenen worden op papier vaak afgekort opgenomen.

Hierdoor is soms het verschil tussen afronden en afkorten niet meer duidelijk voor opstellers. Het afkorten van bedragen vergroot de leesbaarheid op papier, maar levert problemen op bij de toepassing van XBRL. Het afkorten van bedragen is in een XBRL instance document technisch niet mogelijk. In het instance document moet dus altijd een heel bedrag worden opgenomen. Dit bedrag zal altijd enige mate van afronding bevatten.

_Voorbeeld_

Stel een post bedraagt € 5.999.985. De opsteller wil dit bedrag afgerond rapporteren in de jaarrekening als € 6 miljoen.

| **Afgerond bedrag** | **Afgekort bedrag** | **Bedrag in XBRL instance document**
| --- | --- | --- |
| € 6.000.000 | 6.000 (x € '000') | 6000000 |
| € 6.000.000 | 6 (x € '000.000') | 6000000 |

De bedragen in een consistente rendering zijn altijd in hele eenheden. Een gebruiker kan door middel van het @decimals attribuut in de instance aangeven wat de mate van nauwkeurigheid van de bedragen is. Deze informatie komt echter niet tot uitdrukking in de rendering. De bedragen worden dus altijd getoond in de rendering zoals ze zijn opgenomen in het XBRL instance document.

_Voorbeeld_

Stel een bedrag is EUR 1.329.912 en de opsteller wil dit afgerond opnemen in een verantwoordingsrapportage. De opsteller kan dit bedrag dan als volgt opnemen in het instance document:

- _Afgerond op hele eenheden : EUR 1329912 met @decimal=&quot;0&quot;_
- _Afgerond op duizendtallen : EUR 1330000 met @decimal=&quot;-3&quot;_
- _Afgerond op miljoenen : EUR 1000000 met @decimal=&quot;-6&quot;_
