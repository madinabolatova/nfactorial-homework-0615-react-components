import { ThemeContext } from "../../Context";
import { useContext } from "react";

export const Footer = () => {
  const {theme} = useContext(ThemeContext);
    return (
      <footer className={`${theme}`}>
        <h4> May the force be with you</h4>
        <h5>List of movies:</h5>
        <div className="footer-links">
            <a href="https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker">STAR WARS: THE RISE OF SKYWALKER</a>
            <a href="https://www.starwars.com/films/solo">SOLO: A STAR WARS STORY</a>
            <a href="https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi">STAR WARS: THE LAST JEDI</a>
            <a href="https://www.starwars.com/films/rogue-one">ROGUE ONE: A STAR WARS STORY</a>
            <a href="https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens">STAR WARS: THE FORCE AWAKENS</a>
            <a href="https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi">STAR WARS: RETURN OF THE JEDI</a>
            <a href="https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back">STAR WARS: THE EMPIRE STRIKES BACK</a>
            <a href="https://www.starwars.com/films/star-wars-episode-iv-a-new-hope">STAR WARS: A NEW HOPE</a>
            <a href="starwars.com/films/star-wars-episode-iii-revenge-of-the-sith">STAR WARS: REVENGE OF THE SITH</a>
            <a href="starwars.com/films/star-wars-episode-ii-attack-of-the-clones">STAR WARS: ATTACK OF THE CLONES</a>
            <a href="starwars.com/films/star-wars-episode-i-the-phantom-menace">STAR WARS: THE PHANTOM MENACE</a>
        </div>
      </footer>
    );
  };