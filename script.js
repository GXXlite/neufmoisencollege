/* ===== Fonctions à compléter ===== */

// Appelée quand le visiteur envoie le formulaire de contact.
// data = { nom, email, sujet, message }
// Doit renvoyer une promesse ; en cas d'erreur, lancez une exception (throw).
async function envoyerMessage(data) {
  // TODO : envoyer le message (API, e-mail, base de données…)
}

// Bouton « Débloquer pour 0,50 € » (paiement unique : tous les journaux actuels)
function acheterTout() {
  // TODO : lancer le paiement unique de 0,50 €
}

// Bouton « S'abonner à Plus » (0,50 € / an, renouvelé automatiquement)
function abonnementPlus() {
  // TODO : lancer l'abonnement annuel de 0,50 €
}

// Bouton « Débloquer ce journal » (0,50 € par journal) — id = identifiant du journal
function acheterJournal(id) {
  // TODO : lancer le paiement de 0,50 € pour ce journal
}

/* ===== Formulaire de contact ===== */
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var statut = document.getElementById('statut');
    var bouton = form.querySelector('button[type=submit]');
    var data = {
      nom: form.nom.value.trim(),
      email: form.email.value.trim(),
      sujet: form.sujet.value.trim(),
      message: form.message.value.trim()
    };
    statut.className = '';
    if (!data.nom || !data.email || !data.message) {
      statut.className = 'err';
      statut.textContent = 'Merci de remplir votre nom, votre e-mail et votre message.';
      return;
    }
    bouton.disabled = true;
    statut.textContent = 'Envoi en cours…';
    try {
      await envoyerMessage(data);
      statut.className = 'ok';
      statut.textContent = 'Merci ! Votre message a bien été envoyé.';
      form.reset();
    } catch (err) {
      statut.className = 'err';
      statut.textContent = "Une erreur est survenue. Merci de réessayer plus tard.";
    }
    bouton.disabled = false;
  });
}
