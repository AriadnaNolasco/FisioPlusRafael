import '../styles/Home.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  const data = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
    datasets: [
      {
        label: 'Fuerza (%)',
        data: [10, 25, 40, 60, 80],
        fill: true,
        backgroundColor: 'rgba(102, 126, 234, 0.3)',
        borderColor: '#4466cc',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#4466cc',
        borderWidth: 3,
      },
      {
        label: 'Flexibilidad (%)',
        data: [15, 30, 50, 65, 85],
        fill: true,
        backgroundColor: 'rgba(118, 75, 162, 0.3)',
        borderColor: '#5a2d91',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#5a2d91',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f0f4ff',
          font: { size: 14, weight: '600' },
          padding: 20,
        }
      },
      title: {
        display: true,
        text: 'Seguimiento del progreso físico',
        color: '#f0f4ff',
        font: { size: 22, weight: '700' },
        padding: {
          top: 10,
          bottom: 30,
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 6,
        padding: 12,
        mode: 'nearest',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#e0e7ff',
          font: { size: 12 },
          stepSize: 20,
          callback: val => val + '%'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.15)',
          borderDash: [5, 7],
        }
      },
      x: {
        ticks: {
          color: '#e0e7ff',
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.15)',
          borderDash: [5, 7],
        }
      },
    },
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bienvenido a Fisio Plus Rafael</h1>

        <section className="home-section">
          <h2>¿Qué es Fisio Plus Rafael?</h2>
          <p>
            Fisio Plus Rafael es una plataforma diseñada para ayudarte a mejorar tu salud física mediante ejercicios personalizados, seguimiento y asesoramiento profesional.
          </p>
        </section>

        <section className="home-section">
          <h2>Características principales</h2>
          <ul>
            <li>Ejercicios diarios adaptados a tu condición.</li>
            <li>Seguimiento de tu progreso físico.</li>
            <li>Asesoría personalizada con profesionales certificados.</li>
            <li>Chat en línea para resolver tus dudas rápidamente.</li>
          </ul>
        </section>

        <div className="chart-container" style={{ height: '400px' }}>
          <Line data={data} options={options} />
        </div>

        <section className="home-section">
          <h2>¿Cómo empezar?</h2>
          <p>
            Regístrate, inicia sesión y comienza a cuidar tu salud con nuestro plan personalizado.
          </p>
        </section>
      </div>
    </div>
  );
}
