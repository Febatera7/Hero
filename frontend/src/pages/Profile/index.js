import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/all'
import api from '../../services/api'

export default async function Profile() {
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [])

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo, {ongName}</span>
        <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
            <strong>Descrição:</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>R$ {incident.value}</p>
            <button type="button">
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}