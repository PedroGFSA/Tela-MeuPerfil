import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="capacitacoes">
        <h3 style={{color:"#596462"}}>Capacitações profissionais</h3>
        <span>Ver mais</span>
      </div>
      <div className="container-img">
        <div className="container-alimentos">
          <p className="tipo-legenda-alimentos">Parceiros</p>
          <p className="legenda-alimentos">Diabetes: alimentos para evitar.</p>
          <img src="src\assets\alimentos.png" alt="alimentos" />
        </div>
        <div className="container-doses">
          <p className="tipo-legenda-doses">Capacitações</p>
          <p className="legenda-doses">Como ministrar doses</p>
          <img width="180" height="130" src="src\assets\doses.png" alt="doses" />
        </div>
      </div>
    </footer>
  )
}

export default Footer