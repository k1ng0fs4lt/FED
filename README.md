# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Kevin Yip

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.fabricoftheuniverse.com/en-nl 

  #### Screenshot(s) van de eerste pagina (small screen) Homepagina : 

  <img src="readme-images/homepaginafullscreenshot.png" width="375px" alt="Dit is de home pagina van de website">

  #### Screenshot(s) van de tweede pagina (small screen) Product pagina :

  <img src="readme-images/productpaginafullscreenshot.png" width="375px" alt="Dit is de product pagina van de website">

De pagina's worden met een breedte van 390px nagemaakt.
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  1.Het aanzetten van de Narrator op Windows met specifieke toetscombinaties is nog zeer ingewikkeld om te gebruiken, vooral omdat wij gewend zijn om het niet te gebruiken. 
  
  2.Het is verwarrend om de Narrator te bedienen want het kan alleen het scherm per heading lezen of per link lezen maar niet voor paragrafen.

  3.Voor het lezen van de headings is het geen probleem, alleen kan de screenreader geen parragrafen (in dit geval de beschrijving van de kopjes) voorlezen.

  4.Voor het lezen van productafbeeldingen werkt het perfect, de afbeeldingen zijn voorzien van de volledige naam van het product, alleen staat het er wel 2 keer in verwerkt en leest de screenreader het 2 keer voor.

  5.Voor het lezen van andere producten worden beoordelingen van een product niet volledig en duidelijk voorgelezen door de screenreader, alleen de aantal reviews.

  6.Bij het laden van de pagina wordt de omschrijving van de webshop voorgelezen.
  
  <img src="readme-images/sc2.jpg" alt="hier wordt de algemene omschrijving van de webshop voorgelezen">

  7.Bij het laden van een productpagina wordt de omschrijving direct voorgelezen.

  8. Bij pop-ups worden de headers direct ook voorgelezen.
     
  <img src="readme-images/sc4.jpg" alt="hier wordt de heading van de popup voorgelezen">
  
  9. Bij de navigatie kan je met de screenreader zelfs elke dropdown item nagaan.
      
  <img src="readme-images/sc5.jpg" alt="hier wordt de dropdown menu item voorgelezen">

  10. Bij de iconen alhoewel wordt de winkelwagen niet correct voorgelezen, alleen "o".

  11. Het plaatje van het product is wel te lezen door de screen-reader als een klikbare link maar de pijltjes om door de verschillende afbeeldingen heen te navigeren worden niet opgepikt als link.
      
  <img src="readme-images/sc6.jpg" alt="hier wordt de afbeelding van het product voorgelezen">

  12. Om het uit te proberen, heb ik met "j" de knoppen genavigeert, hier kan ik wel "soort van" bij de andere plaatjes komen. Ik ben wel tegen het probleem aangelopen dat mijn narrator vast staat bij de "add to wishlist" icoon. Als ik verder navigeer naar de volgende knop wordt er steeds op de "add to wishlist" knop geklikt en de plaatje verschuift steeds halfverwege door.
  <img src="readme-images/sc7.jpg" alt="hier wordt de add to wishlist knop voorgelezen">

  13. De website maakt in het algemeen wel gebruik van plain language die begrijpelijk is voor de meeste mensen. De a tags zijn ook voorzien van uniek beschreven tekst.

  <img src="readme-images/sc8.jpg" alt="De kopjes en a tags zijn voorzien van plain language">

  14. De website heeft in de code een lang attribuut gebruikt met de waarde "eng".

  <img src="readme-images/sc9.jpg" alt="De code maakt gebruik van de language attribuut met de waarde eng">

  15. De website heeft op elke pagina unieke titels verwerkt in de code.

  <img src="readme-images/sc10.jpg" alt="Deze pagina heeft als unieke titel: Hoodies">
  <img src="readme-images/sc11.jpg" alt="Deze pagina heeft als unieke titel: T-shirts">

  16. De website heeft zijn viewport zoom aan staan.

  <img src="readme-images/sc12.jpg" alt="de viewport zoom staat op 1 schaal">

  17. Er is een focus stijl toegepast voor wanneer gebruikers willen navigeren met de keyboard. Alhoewel is de stijl niet zo heel opmerkelijk. De volgorde van focus is ook gespiegeld met de visuele layout.

  <img src="readme-images/sc13.jpg" alt="De eerste navigatie tag krijgt een focus stijl met zwarte uitlijning">
  <img src="readme-images/sc14.jpg" alt="De tweede navigatie tag wordt gehighlight met de focusstijl">

  18. De website op mobiele formaat is te zien op zowel portrait en landscape view.

  <img src="readme-images/sc15.jpg" alt="De website is nu te zien op portrait view op mobiel">
  <img src="readme-images/sc16.jpg" alt="De website is nu te zien op landscape view op mobiel">

  19. Horizontaal scrollen staat in het algemeen uit op mobiele formaat, alle content zit in de viewport, wel staat het aan als je op een detailpagina bent. Dit wordt alleen gebruikt om door de foto's heen te bladeren.
  <img src="readme-images/sc17.jpg" alt="Horizontaal scrollen staat aan alleen bij de detailpagina om door de foto's heen te kunnen bladeren">

  20. Er is altijd voldoende ruimte tussen interactieve elementen om te scrollen op de mobiele versie, eigenlijk kan je van elk punt scrollen. Buttons en links zijn makkelijk te activeren sinds het is meegeschaald met de viewport formaat, en ze zijn makkelijk te bereiken op zowel portrait als landscape formaat.
      
  <img src="readme-images/sc18.jpg" alt="De links liggen in handbereik en is groot genoeg op portrait formaat">
  <img src="readme-images/sc19.jpg" alt="De links liggen in handbereik en is groot genoeg op landscape formaat">

  21. De website maakt gebruik van h1's en h2's voor de introductie van de inhoud en gebruikt wel 1 h1 per pagina. De headings zijn volgens mij wel op een logische volgorde gebruikt alleen zijn ze zo moeilijk te vinden in de code. De h1 zit trouwens verstopt in een path tag, en bijna alle h2's hebben een class die hidden zijn.

  <img src="readme-images/sc20.jpg" alt="De h1 is verstopt in een path tag">
  <img src="readme-images/sc21.jpg" alt="De h2's hebben allemaal een class en zijn in de meeste gevallen gezet als hidden">

  22. De website maakt gebruik van ul's en li's voor lijst inhoud.
      
  <img src="readme-images/sc22.jpg" alt="De website maakt gebruik van ul's en li's om lijst inhoud te weergeven.">

  23. De images hebben allemaal een alt beschrijving, alleen zijn het referencies naar een data waarde. Decoratieve afbeeldingen zoals een icoon maken geen gebruik van alt=NULL, maar in plaats daarvan hebben ze helemaal geen waarde.

  <img src="readme-images/sc23.jpg" alt="De images hebben allemaal een alt attribuut maar met de waarde van een data waarde">
  <img src="readme-images/sc24.jpg" alt="Decoratieve images hebben geen waarde in hun alt attribuut">

  24. Complexe images zoals maatgrafieken hebben geen alt waarde, ook heeft het dus geen alt tekst van wat er op de afbeelding staat.
      
  <img src="readme-images/sc25.jpg" alt="Complexe afbeelding zoals deze maatgrafiek heeft geen alt waarde die het beschrijft">  

  25. Verder heeft deze website geen media zoals video's/audio.
  26. De website maakt gebruik van a tags voor naviagtie links. Links zijn niet zo heel erg te herkennen als links sinds ze allemaal dezelfde kleur hebben als andere tekst. Wel zitten links natuurlijk in de naviagtie dus   dat is wel ietsjes meer gescheiden van andere elementen. Alhoewel ze de a tags hebben voorzien van :focus states, is het zeer minder opmerkelijker in de submenu's van de navigatie links vergeleken met de hoofd navigatielinks waar je wel de zwarte rand om de element heen ziet.
      
  <img src="readme-images/sc26.jpg" alt="a tags worden gebruikt in navigatie links">  
  <img src="readme-images/sc27.jpg" alt="Focus states worden toegepast op de a tags, alleen zijn ze veel minder zichtbaar in de sub menu navigatie links">  
  
  27. De website maakt geen correct gebruik van button tags voor knoppen maar gebruiken in plaats daarvan classes in de a tags zelf met als naam button.
      
  <img src="readme-images/sc28.jpg" alt="Button tags worden vervangen met a classes button"> 

  28. De website heeft geen alternatieve opmaak voor thema voorkeur zoals donker en licht, ook heeft het aanpassen van tekst grootte geen invloed (de weergave wordt alleen ingezoomd maar tekst wordt niet grooter op zichzelf). Wel heeft de website alternatieve opmaak voor contrast voorkeuren, maar ik denk dat het systeem zelf de weergave toepast in plaats van de website zelf.

  <img src="readme-images/sc29.jpg" alt="De kleur contrast is toegepast met een hoge contrast voorkeur"> 

  29. De instelling om de animatie (motion) te verminderen werkt op de website.
  30. Contrast voor iconen zijn minimaal toegepast waarbij ze eigenlijk alleen allemaal een achtergrond kleur hebben gekregen om ze contrast te geven, er is specifieke kleur toegewezen dus op iconen om contrast aan te bieden.

  <img src="readme-images/sc30.jpg" alt="Iconen hebben geen contrast styling maar alleen standaard contrast stijling gekregen van de systeem zelf"> 

  31. Custom :selection pseudo elementen zijn toegepast op klikbare elementen, alleen zijn ze overschreven door iets (mijn eigen systeem?) en is de stijling niet toegepast.
      
  <img src="readme-images/sc31.jpg" alt="Custom :selection pseudo elementen zijn toegepast maar worden overschreven"> 
  
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### Home pagina: 
  <img src="readme-images/breakdownpagina1.png" alt="breakdown van de home pagina">

  ### Product pagina): 
  <img src="readme-images/breakdownpagina2.png" alt="breakdown van de product pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  Ik zat vooral vast met de navigatie en de eerste sectie. Ik kon de navigatie maar niet tevoorschijn laten komen zoals het in de opdracht beschreven was. verder wilde ik aan niets anders beginnen sinds de navigatie opzich zelf een belangrijke en element is die al best   moeilijk is om na te maken. 
  Naast wat hulp vragen aan de studenten assistent en natuurlijk chatGPT had ik het eindelijk kunnen oplossen en het aan de praat te krijgen. Ik was toen direct verder gegaan met de volgende secties van mijn website. Hier had ik veel minder moeite mee sinds het in de     meeste gevallen secties zijn die meerdere keren worden gebruikt, dus de code hoefde ik maar 1 keer te schrijven met wat aanpassingen hier en daar. Ik ben nu nog bezig met de footer, meer op de nadruk van het importeren van alle icoontjes van de betaalmethodes. Verder   is mijn website natuurlijk niet exact hetzelfde, het komt heel erg overeen met wat missende elementen hier en daar, maar dat hou ik voor later als ik tijd over heb.

  Dingen waarover ik graag wil weten zijn: Het maken van een carousel, een pop-up balk onder de navigatie die je kan wegklikken, een pop-up melding die tevoorschijn komt als ik op de webpagina ben, een knop aan de zijkant van het scherm die altijd meescrollt zonder       elementen te verschuiven, en het plaatsen van svg iconen.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | Amber          | ---                | ---          | ---              |
  |  
  | Hamburgermenu  | en ik dit          | en dan ik dat|
  | Carousel       | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Punt 1: De toegankelijkheidstest is zeer uitgebreid gedaan op bepaalde punten, zoals de screenreader. echter kan het wat meer uitgebreid op andere punten van de WACG checklist.
  - Punt 2 Verder moet ik beter kijken welke secties inderdaad articles bevatten. Articles zijn stukjes code die informatie vertelt, net als een klein stuk tekst met wat afbeeldingen. De product secties zijn dus geen articles dus dat moet aangepast worden.
  - Punt 3: Secties beginnen altijd met een kopje (h2), bij sommige secties zijn dat niet verwerkt. Ik moet dus alle secties nu voorzien van een kopje en indien nodig het onzichtbaar maken met stijlen.
  - Punt 4: Voor het maken van een pop-up is het gebruik van de nieuwe HTML code: Dialogue een optie. Anders met Javascript een onload functie aanmaken.
</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Foto's/ Wishlist icoon- https://www.fabricoftheuniverse.com/en-nl
  2. Hamburger menu - https://codepen.io/shooft/pen/myepoVo 
  3. Hamburger menu sluit icoon - [https://assets.codepen.io/274456/ui-icon-cross.svg](https://www.flaticon.com/free-icon/arrow_10412365?term=close+menu&page=1&position=4&origin=search&related_id=10412365) 
  4. Hamburger menu open icoon - https://www.flaticon.com/free-icon/menu_9663120?term=menu-burger&page=1&position=9&origin=tag&related_id=9663120
  5. Profiel icoon - https://www.flaticon.com/free-icon/user_456212?term=profile&page=1&position=6&origin=search&related_id=456212
  6. Shopping cart icoon - https://www.flaticon.com/free-icon/grocery-store_3514491?term=shopping+cart&page=1&position=2&origin=search&related_id=3514491
  7. Dropdown icoon - https://www.flaticon.com/free-icon/down-arrow_318426?term=drop+down&page=1&position=9&origin=tag&related_id=318426
  8. Pop-up sluit icoon - https://www.flaticon.com/free-icon/delete_15219490?term=close+button&page=1&position=45&origin=tag&related_id=15219490
  9. Banners - https://chatgpt.com/ - Prompt na het plakken van mijn snippet: Make the image as the background with the h2 and p under each other on top of it using grid (Wordt voor meerdere secties herbruikt)
  10. Promoties - https://chatgpt.com/ - Prompt na het plakken van mijn snippet: Make this promotion section to have 1 column for the productcards and for medium and large screens 2 columns using grid (Wordt voor meerdere secties herbruikt)
  11. Producten - https://chatgpt.com/ Prompt na het plakken van mijn snippet: Make the li's of this ul spread out on 2 columns on a small screen and on medium and large screens 4 columns using grid (Wordt voor meerdere secties herbruikt)
  12. Positioneren van de button op de pop-up melding - https://chatgpt.com/ Prompt met de code snippets: I have a dialog box here, so i want the button to be on the right corner of the dialog
  13. De pop-up laten komen 5 seconde nadat de pagina is geladen -  https://chatgpt.com/ Prompt: how do i put in javascript to show this dialog with a window onload fucntion after 5 seconds?

</details>
