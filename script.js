// Spenden-Button Click Event
document.getElementById("donateButton").addEventListener("click", function () {
  // Öffne die Spenden-Seite (z.B. PayPal oder andere Plattformen)
  window.open(
    "https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID",
    "_blank"
  );
});
