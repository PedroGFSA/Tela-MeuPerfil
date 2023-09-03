import React from 'react'

const Perfil = () => {
  return (
    <div style={{width:"100%"}}>
      <h3 style={{color: "#596462",marginLeft:"1rem", fontWeight:"500",marginBottom:"0.5rem"}}>Seu perfil</h3>
      <div className="containerSeuPerfil">
        <img src="src\assets\icone-perfil.png" alt="icone de perfil" />
        <div>
          <h2>Carolina Magalhães</h2>
          <p>São Paulo - SP</p>
          <div className="estrelas">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span style={{fontSize:"12px"}}>(0)</span>
          </div>
        </div>
      </div>
      <div className="completarPerfil">
        <p>Completar Perfil</p>
        <img width="18px" height="18px" src="src\assets\Arrow.svg" alt="arrow" className="filter-blue"/>
      </div>
    </div>
  )
}

export default Perfil