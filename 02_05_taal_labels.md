## Taal en labels

**SCP 10: De Consistente Presentatie MOET de taal hanteren voor het weergeven van de labels van alle elementen op basis van de waarde van het xml:lang attribuut in de root van het instance document**

In het @xml:lang in de root van het instance document staat aangegeven in welke taal de rapportage is opgesteld. De waarde van het @xml:lang bepaalt ook de taal van de labels welke gehanteerd worden voor het renderen van de gegevens.

**SCP 11: De Consistente Presentatie MOET de generic labels uit de taxonomie hanteren voor enumeratiewaardes**

Voor het tonen van enumeratiewaardes dient gebruik te worden gemaakt van de generic labels die in de taxonomie zijn opgenomen. Hierdoor worden de technische waardes in het instance document dus omgezet naar een bepaalde taal op basis van de generic labels uit de taxonomie. Het is niet gewenst dat de ingevoerde waarde wordt getoond, aangezien dit een technische benaming is voor hetgeen is opgenomen in de relevante generic labels.

**SCP-11.5: De Consistente Presentatie MAG NIET labels afkorten**

De labels van elementen in een taxonomie kunnen behoorlijk lang zijn. In het kader van rendering kan het soms wenselijk zijn om labels af te korten. In het kader van eenduidigheid is dit echter niet toegestaan. Waar mogelijk zullen terseLabels worden toegepast in de taxonomie om de lengte van labels te verminderen.

**SCP-11.6: De Consistente Presentatie MOET labels afbreken**

Het is verplicht om labels af te breken om hiermee op een volgende regel verder te gaan in het geval het label te lang is voor de beschikbare ruimte in een rendering. Het afbreken van labels kan naar eigen inzicht plaatsvinden.
