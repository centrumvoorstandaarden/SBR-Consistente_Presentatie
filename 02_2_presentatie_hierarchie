## Presentatie hiërarchie

**SCP 03: De Consistente Presentatie MOET gebruik maken van de in het entrypoint opgenomen**

**presentatie hiërarchie linkbase voor het bepalen van de volgorde en indeling van de tabellen**

In het entrypoint is een presentatie hiërarchie linkbase opgenomen waarin de volgorde van de tabellen en de indeling in een boomstructuur zijn opgenomen. De presentatie hiërarchie maakt gebruik van abstracte elementen (sbr:presentationItem) die middels een parent-child relatie een boomstructuur vormen op een vergelijkbare manier als de presentation linkbase binnen de XBRL 2.1 specificatie. De (uiteindelijke) kinderen van de parent-child relatie zijn echter geen concepten zoals in de presentation linkbase, maar ELRs die de betreffende tabellen bevatten. Hierdoor is de presentatie hiërarchie bedoeld om weer te geven hoe de tabellen zich tot elkaar verhouden en hoe dit getoond dient te worden.

<aside class="note">
Hier wordt een hierarchie beschreven. Zou dit in MD kunnen?
</aside>

Uit het bovenstaande voorbeeld blijkt dat het mogelijk is dat er een of meer tabellen onder één titel kunnen worden opgenomen. Het opnemen van meerdere tabellen onder één titel zal vooral van toepassing zijn in de situatie waar verschillende tabellen deel uitmaken van hetzelfde onderdeel.

In het bovenstaande voorbeeld worden drie verschillende ELRs genoemd onder de titel 'Materiële vaste activa'. Elk van deze ELRs bevat één tabel. Er zijn dus drie tabellen te onderkennen onder het kopje 'Materiële vaste activa'. Een tabel voor het verloopoverzicht, een tabel voor de uitsplitsing en een tabel met tekstuele toelichtingen. Deze regel stelt dat in de rendering deze tabellen in de volgorde moeten worden getoond zoals de presentatie hiërarchie aangeeft. Het is niet toegestaan om af te wijken van de volgorde in de presentatie hiërarchie. Het is wel mogelijk om deze volgorde te veranderen door het aanpassen van de inhoud van de presentatie hiërarchie met behulp van een preparer extension.

**SCP 04: De Consistente Presentatie MOET uitsluitend de titels in de presentatie hiërarchie linkbase**

**gebruiken**

Voor het genereren van de rendering moet gebruik gemaakt worden van de titels zoals opgenomen in de presentatie hiërarchie. Deze titels kenmerken zich doordat dit elementen in de substitution group sbr:presentationItem zijn. Het standaard label van deze elementen eindigt op ' [titel]'. Deze titels zijn in verschillende talen beschikbaar en zullen ook zonder de tekst ' [titel]' als terseLabel worden aangeroepen in de presentatie hiërarchie.

Het zijn uitsluitend de titels die als kopjes in de rendering voor moeten komen. De root-parent moet dus ook opgenomen worden als dit een titel betreft. Op basis van SCP 05 mogen de ELR labels niet gebruikt worden in de rendering. Dit betekent dat wanneer in de presentatie hiërarchie sprake is van meerdere ELRs die zijn opgenomen onder één titel, er geen sub-kopjes getoond mogen worden voor elke tabel. Het is nadrukkelijk de bedoeling om deze tabellen onder elkaar op te nemen onder hetzelfde kopje. In het voorbeeld van SCP-03 betekent dit dus dat er onder het kopje 'Materiële vaste activa' drie verschillende tabellen kunnen worden opgenomen, namelijk een voor het verloopoverzicht, een voor de uitsplitsing en een met tekstuele toelichtingen.

Het is niet toegestaan om andere dan de in de presentatie hiërarchie opgenomen titels te hanteren in de rendering. Het is mogelijk om de tekst van deze titels te veranderen door het aanpassen van de inhoud van de presentation hiërarchie met behulp van een preparer extension.
