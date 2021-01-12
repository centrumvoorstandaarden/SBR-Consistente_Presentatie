## Afbeeldingen

Het gebruik van een afbeelding in een verantwoordingsrapportage kan een meerwaarde hebben. Met behulp van een Preparer Extension kan een opsteller een concept toevoegen aan de taxonomie waarmee een afbeelding kan worden opgenomen in het XBRL instance document.

**SCP-31: De Consistente Presentatie MOET de waarde van een concept met het datatype 'nltypes: imageItemType' renderen als afbeelding**

Een afbeelding in het XBRL instance document is gecodeerd met 'escaped' HTML in combinatie met een standaard formaat base64 stream. De concepten waar het gebruik van afbeelding is toegestaan, hebben het datatype 'nl-types:imageItemType'. Indien in een instance document een waarde is opgenomen voor een concept met het datatype nl-types:imageItemType, dient deze waarde als afbeelding verwerkt te worden in de rendering. Hierbij moet gebruik worden gemaakt van de door de opsteller opgegeven attributen in 'escaped' HTML.
