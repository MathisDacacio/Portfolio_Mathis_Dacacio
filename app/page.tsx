"use client";
import { useState } from "react";
import styles from "./../styles/aboutme.module.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "Loisirs", items: ["Jeux vidéo", "Animaux", "Famille"] },
    { title: "Soft Skills", items: ["Ponctualité", "Travail en équipe", "Résolution de problèmes"] },
    { title: "Langues", items: ["Français", "Anglais", "Espagnol"] },
  ];

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Mathis Dacacio</h1>
      <div className={styles.actualite}>
        <br />
        <p>
          J'ai 20 ans et je suis étudiant en 2ème année à {" "}
          <a
            href="https://www.enigma-school.com/"
            className={styles.linkStyle}
            target="_blank"
          >
            ENIGMA School
          </a>
          . Je suis à la recherche d'un stage en tant que développeur Web de 2 à 3 mois à partir du 10 juin 2025 pouvant aboutir sur une alternance de 12 mois lors de l’année 2025/2026. Et ce dans l'objectif de mettre à profit mes compétences acquises.
        </p>
      </div>

      {/* Carrousel des cartes */}
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={prevCard}>❮</button>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <h3>{cards[currentIndex].title}</h3>
            <ul>
              {cards[currentIndex].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles.navButton} onClick={nextCard}>❯</button>
      </div>
    </div>
  );
}
