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
