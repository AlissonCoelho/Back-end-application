import React from "react";
import axios from "../api";

export default function CabecalhoUser(props) {
  const _logout = async (evento) => {
    
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb-3">
      <div className="container">
        <a className="navbar-brand" href="/usuario/dados">
          <i className="bi-person fs-6"></i> <b>{props.nome}</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav flex-grow-1">
          <li className="nav-item">
              <a className="nav-link text-white" href="/usuario/carros/listar">
                <i className="bi-truck fs-6 fs-6"></i> Carros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/usuario/agendar">
                <i className="bi-calendar-event fs-6"></i> Agendamentos
              </a>
            </li>
          </ul>
          <div className="align-self-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  onClick={(evt) => _logout(evt)}
                  href="/"
                  className="nav-link text-white"
                >
                  <i className="bi-arrow-right-square fs-6"></i> Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
