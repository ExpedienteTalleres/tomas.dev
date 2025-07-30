const { useState, useEffect } = React;
function Header() {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Tomás Frini";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 200);
        return () => clearInterval(timer);
    }, []);
    const floatingPixels = React.useMemo(() => (
        Array.from({ length: 20 }, () => ({
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
        }))
    ), []);

    return (
        <header className="min-h-screen flex items-center justify-center relative">
            <div className="text-center" style={{ zIndex: 10 }}>
                <div className="pixel-border p-8" style={{ background: 'rgba(4, 22, 43, 0.9)' }}>
                    <h1 className="text-6xl font-bold mb-4 pixel-text">
                        {displayText}
                        <span style={{ animation: 'blink 1s infinite' }}>|</span>
                    </h1>
                    <p className="text-xl opacity-80 mb-8">{"> DEVELOPER"}</p>
                    <div className="flex justify-center">
                        <button className="retro-button" onClick={() => {
                            const el = document.getElementById('skills');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}>HABILIDADES</button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0">
                {floatingPixels.map((pixel, i) => (
                    <div
                        key={i}
                        className="floating-pixel"
                        style={pixel}
                    />
                ))}
            </div>
        </header>
    );
}

function Skills() {
    const technicalSkills = [
        { name: "HTML", icon: "Resources/html.png" },
        { name: "CSS", icon: "Resources/css.png" },
        { name: "JavaScript", icon: "Resources/javascript.png" },
        { name: "React", icon: "Resources/react.png" },
        { name: "Python", icon: "Resources/python.png" },
    ];

    const softSkills = [
        "Resolución de Problemas",
        "Trabajo en Equipo",
        "Comunicación Efectiva",
        "Adaptabilidad",
        "Pensamiento Crítico",
        "Gestión del Tiempo",
        "Creatividad",
        "Liderazgo",
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 pixel-text">{"< HABILIDADES />"}</h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">HABILIDADES TÉCNICAS</h3>
                    <div className="grid grid-5">
                        {technicalSkills.map((skill, index) => (
                            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <img src={skill.icon} alt={skill.name} className="skill-icon mx-auto mb-2" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                <p className="text-center font-bold">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">HABILIDADES BLANDAS</h3>
                    <div className="grid grid-4">
                        {softSkills.map((skill, index) => (
                            <div key={skill} className="soft-skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                <span>{">"}</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="py-20" style={{ background: 'rgba(4, 22, 43, 0.5)' }}>
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 pixel-text">{"< SOBRE MÍ />"}</h2>

                <div className="pixel-border p-8" style={{ background: 'rgba(4, 22, 43, 0.8)' }}>
                    <div className="text-xl space-y-6">
                        <p>{"> Inicializando perfil de desarrollador..."}</p>
                        <p>
                            Soy un desarrollador apasionado por crear experiencias digitales únicas y funcionales. Mi
                            journey en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las cosas
                            detrás de la pantalla.
                        </p>
                        <p>
                            Con experiencia en tecnologías frontend y backend, me especializo en transformar ideas complejas en
                            soluciones elegantes y eficientes. Disfruto trabajando tanto en el diseño de interfaces intuitivas como en
                            la arquitectura de sistemas robustos.
                        </p>
                        <p>
                            Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos y
                            mantenerme actualizado con las últimas tendencias del desarrollo web.
                        </p>
                        <p className="opacity-80">{"> Estado: Disponible para nuevos proyectos"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// PROYECTOS
function Projects() {
    const projects = [
        {
            id: 1,
            title: "Expediente Talleres",
            description: "Sitio web dedicado a la historia completa del Club Atlético Talleres, con secciones de torneos, historiales y un álbum de fotos organizadas por temporada.",
            technologies: ["Html", "JavaScript", "Css"],
            status: "En Desarrollo",
        },
    ];

    return (
        <section className="py-20">
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 pixel-text">{"< PROYECTOS />"}</h2>

                <div className="grid grid-3">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '16px' }}>
                                <div style={{ width: '100%', height: '192px', background: 'rgba(238, 238, 238, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                    {project.id === 1 ? (
                                        <img src="Projects/Talleres.jpg" alt="Talleres" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        'Imagen del Proyecto'
                                    )}
                                </div>
                                <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        borderRadius: '4px',
                                        background: project.status === "Completado" ? '#10b981' : '#f59e0b',
                                        color: '#000'
                                    }}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                            <p className="opacity-80 mb-4" style={{ fontSize: '14px' }}>{project.description}</p>

                            <div className="flex" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} style={{
                                        padding: '4px 8px',
                                        background: '#eeeeee',
                                        color: '#04162b',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        borderRadius: '4px'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                {project.id === 1 ? (
                                    <>
                                        <a href="https://expedientetalleres.github.io/index.html" target="_blank" rel="noopener noreferrer" className="retro-button-small">VER PROYECTO</a>
                                        <a href="https://github.com/ExpedienteTalleres/ExpedienteTalleres.github.io" target="_blank" rel="noopener noreferrer" className="retro-button-small">CÓDIGO</a>
                                    </>
                                ) : (
                                    <>
                                        <button className="retro-button-small">VER PROYECTO</button>
                                        <button className="retro-button-small">CÓDIGO</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("¡Mensaje enviado! (Simulación)");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="py-20" style={{ background: 'rgba(4, 22, 43, 0.5)' }}>
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 pixel-text">{"< CONTACTO />"}</h2>

                <div className="grid grid-2">
                    <div className="space-y-6">
                        <div className="pixel-border p-6" style={{ background: 'rgba(4, 22, 43, 0.8)' }}>
                            <h3 className="text-2xl font-bold mb-6">¡Conectemos!</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span>{">"}</span>
                                    <span>Email: tomasfrini18@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span>{">"}</span>
                                    <span>LinkedIn: ---</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span>{">"}</span>
                                    <span>GitHub: ExpedienteTalleres</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="retro-button mb-4">DESCARGAR CV</button>
                            <p style={{ fontSize: '14px' }} className="opacity-80">Disponible en formato PDF</p>
                        </div>
                    </div>
                    <div className="pixel-border p-6" style={{ background: 'rgba(4, 22, 43, 0.8)' }}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>NOMBRE</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="retro-input"
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="retro-input"
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>MENSAJE</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="retro-input"
                                    style={{ resize: 'none' }}
                                    required
                                />
                            </div>

                            <button type="submit" className="retro-button" style={{ width: '100%' }}>
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-8" style={{ borderTop: '2px solid rgba(238, 238, 238, 0.2)' }}>
            <div className="container text-center">

                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="opacity-80" style={{ transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.8'}>GitHub</a>
                    <a href="#" className="opacity-80" style={{ transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.8'}>LinkedIn</a>
                    <a href="#" className="opacity-80" style={{ transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.8'}>Twitter</a>
                </div>

                <p style={{ fontSize: '12px' }} className="opacity-60">© 2024 Tomás. Todos los derechos reservados.</p>

                <div style={{ marginTop: '16px', fontSize: '12px' }} className="opacity-40">
                    <p>{"> Sistema iniciado correctamente"}</p>
                    <p>{"> Portafolio v19.13"}</p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div style={{ minHeight: '100vh', background: '#04162b', color: '#eeeeee', position: 'relative', overflowX: 'hidden' }}>
            <div className="scanlines"></div>
            <div className="crt-effect"></div>
            <Header />
            <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
const style = document.createElement('style');
style.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
document.head.appendChild(style);
