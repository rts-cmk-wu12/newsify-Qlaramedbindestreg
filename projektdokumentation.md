# Projektdokumentation

**Navn:** 

**Hold:** WU12

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton] https://rts-cmk-wu12.github.io/newsify-Qlaramedbindestreg/


## Teknologier

-   HTML
-   CSS
-   JavaScript
-   Webpack
-	Jest
-   SCSS

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)
Uploadede pakker:
Babel til at uploade billeder
Scss og javascript bundler til at bundle filer. Det var meget mere besværligt end hvad vi plejer at gøre, men jeg tænker at det kommer til at give mening hvorfor vi skal gøre det på den måde.
Htmlplugin.

Tredjepartskode:
Darkmode, Carsten's kode fra grundforløbet.
Webpack konfiguration fra Webpack dokumentationen.
Upload af billeder med Javascript fra Chatgpt.
Jest test fra Chatgpt.


---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

Jeg startede med at bruge Keyframes til at animere i CSS, men det var ikke helt nok til at gøre det jeg gerne ville, så jeg mixede det med noget js kode.
---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg brugte næsten hele ugen på at ikke forstå Webpack, så det skete ofte at jeg ikke kunne arbejde på siden fordi jeg havde konfigureret Webpack forkert og så gik jeg videre til noget andet, men fordi jeg ikke kunne se hvad jeg lavede kunne jeg ikke lave det færdigt. Så jeg har en masse kode som jeg gik igang med, men ikke lavede færdigt. 

---
### En beskrivelse af særlige punkter til bedømmelse

Jeg brugte lang tid på animationen. Den blev ikke helt som jeg gerne ville have den, men jeg er stadig glad for den tid jeg invasterede i det.
	
```css

@keyframes grow-logo {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}


@keyframes fade-out {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

