import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (

    <div className="app">
      <style>{css}</style>

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Shivam Patwa<span>.</span></h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Hi, I'm <span>Shivam</span></h2>
        <p>IT Student | Frontend Learner | Future Full‑Stack Developer</p>
        <button>Download Resume</button>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am an IT student who loves building clean and simple web interfaces.
          Currently learning React, Java, and backend fundamentals. I enjoy
          solving problems and turning ideas into real projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section gray">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio made using React.</p>
          </div>
          <div className="card">
            <h3>Java Mini Project</h3>
            <p>Console based project using OOP concepts.</p>
          </div>
          <div className="card">
            <h3>College Assignment App</h3>
            <p>Simple frontend app for practice.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section gray">
        <h2>Contact Me</h2>
        <p>Email: shivam@example.com</p>
        <p>GitHub: github.com/shivampatwa190</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Shivam. All rights reserved.</p>
      </footer>
    </div>
  );
}

const css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f9f9f9;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #111;
}

.logo {
  color: #fff;
}

.logo span {
  color: #00adb5;
}

.navbar ul {
  display: flex;
  list-style: none;
}

.navbar ul li {
  margin-left: 20px;
}

.navbar ul li a {
  color: #fff;
  text-decoration: none;
}

.hero {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #00adb5, #393e46);
  color: white;
  text-align: center;
}

.hero span {
  color: #ffd369;
}

.hero button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background: #ffd369;
  cursor: pointer;
  font-weight: bold;
}

.section {
  padding: 60px;
  text-align: center;
}

.section.gray {
  background: #eee;
}

.skills span {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background: #00adb5;
  color: white;
  border-radius: 20px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.footer {
  background: #111;
  color: white;
  text-align: center;
  padding: 20px;
}
`;


export default App
