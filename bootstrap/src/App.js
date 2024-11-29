import './App.css';
import { Game } from './component/Game/Game';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h1>Games</h1>
      </div>
      <div className='body'>
        <div className="games">
          <Game year="2014" name="Minecraft" img="https://m.media-amazon.com/images/I/61smNbXSW1L._AC_UF1000,1000_QL80_.jpg"/>
          <Game year="2014" name="Tekken" img="https://cdn.dashfight.com/bcf6a9046a9ea4c1070d4aedb2981103c978a704.png"/>
          <Game year="2014" name="Assasin's Creed Unity" img="https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/06/AC-Unity-8-1-1.jpg"/>
          <Game year="2014" name="Half Life 2" img="https://gaming-cdn.com/images/products/2284/orig/h…f-life-2-pc-mac-game-steam-cover.jpg?v=1650555068"/>
          <Game year="2014" name="Street Fighter V" img="https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255"/>
          <Game year="2014" name="Skyrim" img="https://gaming-cdn.com/images/products/146/orig/th…skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991"/>
          <Game year="2014" name="Elden Ring" img="https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be"/>
        </div>
      </div>
    </div>
  );
}

export default App;
