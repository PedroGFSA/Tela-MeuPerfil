import React from 'react'
import Perfil from './Perfil'
const App = () => {

  const [searchBar, setSearchBar] = React.useState('')


  return (
    <div>
      <form className='containerHeader'>
        <input type="text" placeholder='      Buscar capacitações, profissionais...'
        value={searchBar}
        onChange={(event) => setSearchBar(event.target.value)}/>
      </form>
      <div className="container-aviso">
        <img src="src\assets\atencao.png" alt="aviso" />
        <p
        style={{textAlign: "left"}}><b>Completar perfil:</b> preencha suas informações para encontrar pacientes. 
        </p>
      </div>
      <Perfil/>
      
    
    </div>
  )
}

export default App