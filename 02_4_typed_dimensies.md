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
