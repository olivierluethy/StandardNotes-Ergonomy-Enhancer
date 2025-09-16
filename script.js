// Funktion zum Überprüfen und Erstellen des Buttons
function ensureButtonExists() {
  const titleBar = document.getElementById("editor-title-bar");
  const existingButton = titleBar.querySelector(".modern-button"); // Suche nach einem Button mit der Klasse 'modern-button'

  if (!existingButton) {
    // Erstelle den Button nur, wenn er noch nicht existiert
    const button = document.createElement("button");

    // Erstelle die 3 Striche für das Burger-Menü
    const bar1 = document.createElement("span");
    const bar2 = document.createElement("span");
    const bar3 = document.createElement("span");

    // Füge die Striche zum Button hinzu
    button.appendChild(bar1);
    button.appendChild(bar2);
    button.appendChild(bar3);

    // Füge Styling direkt zum Button hinzu (Inline-Styling)
    button.style.backgroundColor = "#007bff"; // Blau
    button.style.color = "white"; // Weißer Text
    button.style.marginRight = "1rem";
    button.style.fontSize = "14px"; // Kleinere Schriftgröße
    button.style.padding = "6px 12px"; // Kleinere Innenabstände
    button.style.border = "none"; // Kein Rahmen
    button.style.borderRadius = "8px"; // Abgerundete Ecken
    button.style.cursor = "pointer"; // Zeigt den Cursor als Hand an
    button.style.transition = "all 0.3s ease"; // Sanfte Übergänge
    button.style.display = "flex"; // Flexbox für vertikale Ausrichtung der Striche
    button.style.flexDirection = "column"; // Striche untereinander anordnen
    button.style.justifyContent = "center"; // Zentriert die Striche vertikal
    button.style.alignItems = "center"; // Zentriert die Striche horizontal

    // Füge Styling für die Striche hinzu
    const bars = [bar1, bar2, bar3];
    bars.forEach(bar => {
      bar.style.width = "24px"; // Kleinere Breite der Striche
      bar.style.height = "3px"; // Kleinere Höhe der Striche
      bar.style.backgroundColor = "white"; // Weiß für die Striche
      bar.style.margin = "3px 0"; // Weniger Abstand zwischen den Strichen
      bar.style.transition = "all 0.3s ease"; // Sanfte Übergänge für Transformation
    });

    // Füge das Klick-Event zum Button hinzu
    let isToggled = false;
    button.addEventListener("click", () => {
      const itemsColumn = document.getElementById("items-column");
      const appElement = document.getElementById("app");
      const navigationElement = document.getElementById("navigation");
      const editorColumn = document.getElementById("editor-column");

      if (!isToggled) {
        // Wenn noch nicht umgeschaltet, führe diese Änderungen aus
        if (itemsColumn) {
          itemsColumn.style.display = "none"; // Verstecke das 'items-column'-Element
        }

        appElement.classList.remove("app", "grid"); // Entferne Klassen von 'app'
        navigationElement.style.display = "none"; // Verstecke das 'navigation'-Element
        editorColumn.style.height = "100vh"; // Setze Höhe von 'editor-column'

        // Setze isToggled auf true, damit beim nächsten Klick die Änderungen rückgängig gemacht werden
        isToggled = true;
      } else {
        // Wenn bereits umgeschaltet, mache die Änderungen rückgängig
        if (itemsColumn) {
          itemsColumn.style.display = "block"; // Zeige das 'items-column'-Element wieder an
        }

        appElement.classList.add("app", "grid"); // Füge die Klassen 'app' und 'grid' zum 'app'-Element wieder hinzu
        navigationElement.style.display = "block"; // Zeige das 'navigation'-Element wieder an
        editorColumn.style.height = "auto"; // Setze die Höhe von 'editor-column' zurück

        // Setze isToggled zurück auf false
        isToggled = false;
      }
    });

    // Füge eine Hover- und Focus-Effekte hinzu
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#0056b3"; // Dunkleres Blau beim Hover
      button.style.transform = "translateY(-2px)"; // Leichtes Anheben beim Hover
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#007bff"; // Zurück zum ursprünglichen Blau
      button.style.transform = "translateY(0)"; // Zurück zum normalen Zustand
    });

    button.addEventListener("focus", () => {
      button.style.boxShadow = "0 0 0 2px rgba(0, 123, 255, 0.5)"; // Schattierung bei Fokus
    });

    button.addEventListener("blur", () => {
      button.style.boxShadow = "none"; // Entferne den Schatten, wenn der Fokus weg ist
    });

    // Füge eine Klasse zum Button hinzu (optional für weiteres CSS oder spätere Stile)
    button.classList.add("modern-button");

    // Füge den Button als erstes Kind des Elements 'editor-title-bar' hinzu
    titleBar.prepend(button);
  }
}

// Überprüfe regelmäßig, ob der Button existiert, und füge ihn hinzu, wenn er noch nicht vorhanden ist
setInterval(ensureButtonExists, 1000); // Alle 1000ms (1 Sekunde) überprüfen
