// DOM
import { Routes, Route, useLocation } from 'react-router-dom';
// CSS
import './App.scss'
// 라우트 import
import Game1 from './Routes/Game1'
import Game2 from './Routes/Game2'
import Game3 from './Routes/Game3'
import Game4 from './Routes/Game4'
import Game5 from './Routes/Game5'
import Game6 from './Routes/Game6'
import Game7 from './Routes/Game7'
import Game8 from './Routes/Game8'

// 컴포넌트 import
import NavGame from './main/Nav-Game'
import PageRefresh from './components/Page-Refresh'
// 훅 import
import Scroll100vh from './hook/Scroll-100vh'

function App() {
   const location = useLocation();

   return (
      <div id='App'>
         <Scroll100vh>
            <NavGame />
            {location.pathname === '/' && (
               <p className='MainMessage'>게임을 했으면 500원 내놩</p>
            )}
            
            <Routes>
               <Route path='/Game1' element={<Game1 />}></Route>
               <Route path='/Game2' element={<Game2 />}></Route>
               <Route path='/Game3' element={<Game3 />}></Route>
               <Route path='/Game4' element={<Game4 />}></Route>
               <Route path='/Game5' element={<Game5 />}></Route>
               <Route path='/Game6' element={<Game6 />}></Route>
               <Route path='/Game7' element={<Game7 />}></Route>
               <Route path='/Game8' element={<Game8 />}></Route>
            </Routes>
            <PageRefresh />
         </Scroll100vh>
      </div>
   )
}

export default App;