"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./../../styles/contact.module.css";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_y037szt",
        "template_gcs6qzh",
        form,
        "W5ELN3Y2nC1D07cXr"
      )
      .then(
        () => {
          setIsSubmitted(true);
          alert("Message envoyé avec succès !");  // remplacer l'alerte par juste un pop up
        },
        (error) => {
          console.error("Erreur EmailJS :", error);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {/* GitHub */}
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>GitHub</h2>
              <p className={styles.text}>
                Découvrez mes divers projets sur mon profil GitHub.
              </p>
            </div>
            <a
              href="https://github.com/MathisDacacio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Mon GitHub
            </a>
          </div>

          {/* LinkedIn */}
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>LinkedIn</h2>
              <p className={styles.text}>
                Connectez-vous avec moi sur LinkedIn pour des opportunités
                professionnelles ou simplement se connecter à mon réseau.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/mathis-dacacio-298a25293/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Mon LinkedIn
            </a>
          </div>

          {/* Contact */}
          <div className={styles.card}>
            <div>
              <h2 className={styles.title}>Me Contacter</h2>
              <p className={styles.text}>Mon adresse mail:</p>
              <a href="mailto:mathis.dacacio@gmail.com" className={styles.link}>
                mathis.dacacio@gmail.com
              </a>
              <br /><br />
              <p className={styles.text}>Mon numéro de téléphone:</p>
              <p className={styles.phone}>+33 7 50 97 56 18</p>
            </div>
          </div>
        </div>
        
        {/* Formulaire de Contact */}
        <div className={styles.card}>
          <h2 className={styles.title}>Me Contacter par Mail</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>Votre Nom :</label>
              <input id="name" name="name" type="text" maxLength={30} required placeholder="Mathis Dacacio" className={styles.input} />
            </div>
            
            <div>
              <label htmlFor="email" className={styles.label}>Votre Email :</label>
              <input id="email" name="email" type="email" required placeholder="exemple@gmail.com" className={styles.input} />
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>Message (200 caractères max) :</label>
              <textarea id="message" name="message" maxLength={200} required placeholder="Votre message ici..." className={styles.textarea}></textarea>
            </div>

            <div className={styles.buttonContainer}>
              <button type="submit" disabled={isSubmitted} className={`${styles.button} ${isSubmitted ? styles.buttonDisabled : ""}`}>
                {isSubmitted ? "Envoyé" : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}