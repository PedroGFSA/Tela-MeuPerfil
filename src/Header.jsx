import React from 'react'

const Header = () => {
  const [searchBar, setSearchBar] = React.useState('')
  return (
    <div>
      <form className='containerHeader'>
        <div className="container-icones">
        <img src="src/assets/iOS/Status Bar/9_41.svg" alt="horario" />
          <img src="src/assets/iOS/Status Bar/Mobile Signal.svg" alt="sinal" />
          <img src="src/assets/iOS/Status Bar/Wifi.svg" alt="wifi" />
          <img src="src/assets/iOS/Status Bar/Battery.svg" alt="bateria" />
        </div>
        <div className="container-pesquisa">
          <input type="text" placeholder='      Buscar capacitações, profissionais...'
          value={searchBar}
          onChange={(event) => setSearchBar(event.target.value)}/>
        </div>
       
      </form>
      <div className="container-aviso">
        <img src="src\assets\atencao.png" alt="aviso" />
        <p
        style={{textAlign: "left"}}><b>Completar perfil:</b> Preencha suas informações para encontrar pacientes. 
        </p>
      </div>
      </div>
  )
}

export default Header