import React, { useState } from "react";
import haver1 from '../assets/images/haver_index.png'
import haver2 from '../assets/images/haver_sales.png'
import haver3 from '../assets/images/haver_machines.png'
import haver4 from '../assets/images/haver_gantt.png'
import haver5 from '../assets/images/haver_export.png'
import haver6 from '../assets/images/haver_excel.png'
import gymManagement1 from '../assets/images/gymmanagement_groupclass.png'
import gymManagement2 from '../assets/images/gymmanagement_index.png'
import gymManagement3 from '../assets/images/gymmanagement_login.png'
import gymManagement4 from '../assets/images/gymmanagement_client.png'
import gymManagement5 from '../assets/images/gymmanagement_roles.png'
import gymManagement6 from '../assets/images/gymmanagement_fitness.png'
import chessMatch1 from '../assets/images/Chessmatch_index.png'
import chessMatch2 from '../assets/images/Chessmatch_contingents.png'
import chessMatch3 from '../assets/images/Chessmatch_leaderboard.png'
import summergames1 from '../assets/images/summergames_index.png'
import agalag1 from '../assets/images/agalag_gameplay.png'
import agalag2 from '../assets/images/agalag_startscreen.png'
import agalag3 from '../assets/images/agalag_leader.png'
import agalag4 from '../assets/images/agalag_endless.png'
import lantern1 from '../assets/images/lantern_gameplay.png'
import lantern2 from '../assets/images/lantern_index.png'
import lantern3 from '../assets/images/lantern_newgame.png'
import lantern4 from '../assets/images/lantern_stats.png'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../assets/styles/Project.scss';

// Define TypeScript interfaces
interface ImageGalleryProps {
    images: string[];
}

interface ProjectData {
    id: number;
    title: string;
    shortDescription: string;
    technologies: string[];
    liveUrl: string;
    thumbnail: string;
    modalContent: {
        images: string[];
        description: string;
        technologies: string[];
        features: string[];
    };
}

// Image Gallery Component with TypeScript
function ImageGallery({ images }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <div className="image-gallery">
            {/* Main Image */}
            <div className="main-image">
                <img
                    src={images[currentIndex]}
                    alt={`Project screenshot ${currentIndex + 1}`}
                />
            </div>

            {/* Thumbnails */}
            <div className="thumbnails">
                {images.map((img: string, index: number) => (
                    <button
                        key={index}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </button>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                className="nav-btn prev"
                onClick={() => setCurrentIndex((prev: number) =>
                    prev === 0 ? images.length - 1 : prev - 1
                )}
            >
                ‹
            </button>
            <button
                className="nav-btn next"
                onClick={() => setCurrentIndex((prev: number) =>
                    prev === images.length - 1 ? 0 : prev + 1
                )}
            >
                ›
            </button>

            {/* Image Counter */}
            <div className="image-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

function Project() {
    const [openModalId, setOpenModalId] = useState<number | null>(null);

    // Project data array with proper typing
    const projects: ProjectData[] = [
        {
            id: 1,
            title: "Gym Management System",
            shortDescription: "Developed a Gym Management application with CRUD operations.",
            technologies: ["C#", "ASP.NET MVC", "SQLite", "SkiaSharp", "EPPlus", "JavaScript"],
            liveUrl: "https://gymmanagementmisheelazjargalbayar.azurewebsites.net/",
            thumbnail: gymManagement2,
            modalContent: {
                images: [gymManagement2, gymManagement1, gymManagement3, gymManagement4, gymManagement5, gymManagement6],
                description: "A comprehensive web application designed to streamline gym operations by managing members, classes, instructors, and payments. Built with modern web technologies to provide an intuitive admin interface.",
                technologies: ["C#", "ASP.NET MVC", "SQLite", "SkiaSharp", "EPPlus", "JavaScript"],
                features: [
                    "Complete CRUD operations for members, classes, and instructors",
                    "Advanced filtering and search functionality",
                    "Role-based authentication and authorization",
                    "Responsive design for mobile and desktop",
                    "Export data to Excel using EPPlus",
                    "Pagination for large datasets",
                    "Real-time form validation"
                ]
            }
        },
        {
            id: 2,
            title: "Sales Order Tracking System",
            shortDescription: "Community-sponsored project integrating Gantt scheduling with operations tracking.",
            technologies: [
                "C#",
                "ASP.NET MVC",
                "SQLite",
                "EPPlus",
                "JavaScript/jQuery",
                "HTML5/CSS3",
                "Bootstrap"
            ],
            liveUrl: "https://haverniagara5.azurewebsites.net/Home/Index",
            thumbnail: haver1,
            modalContent: {
                images: [haver1, haver2, haver3, haver4, haver5, haver6],
                description: "A comprehensive sales order tracking system developed for Haver & Boecker Niagara as a community-sponsored project. This ASP.NET MVC application solved complex scheduling challenges by integrating Gantt chart visualization with real-time operations data, enabling seamless project management across sales, engineering, and production departments.",
                technologies: [
                    "C#",
                    "ASP.NET MVC",
                    "SQLite",
                    "EPPlus",
                    "JavaScript/jQuery",
                    "HTML5/CSS3",
                    "Bootstrap"
                ],
                features: [
                    "Integrated Gantt chart visualization synchronized with operations schedule",
                    "Automated Excel export with color-coded formatting using EPPlus",
                    "SQL database design for sales orders, engineering workflows, and production milestones",
                    "Microsoft Identity for secure authentication and authorization",
                    "Real-time tracking of engineering workflows and production milestones",
                    "Web scraping capabilities with HTML Agility Pack for data integration",
                    "Comprehensive API development for system integration",
                    "Extensive testing of application functionalities and API routes"
                ]
            }
        },
        {
            id: 3,
            title: "AGALAG - 2D Space Shooter",
            shortDescription: "Classic arcade-style space shooter inspired by Galaga with dynamic difficulty and high-score tracking.",
            technologies: [
                "C#",
                "XAML (UWP)",
                "File I/O",
                "Object-Oriented Programming",
                "UI/UX Design"
            ],
            liveUrl: "#",
            thumbnail: agalag2,
            modalContent: {
                images: [agalag2, agalag1, agalag4, agalag3],
                description: "AGALAG is a 2D space shooter inspired by classic arcade titles like Galaga and Space Invaders. Built using C# and XAML (UWP), this game demonstrates object-oriented programming principles while delivering an engaging arcade experience with smooth movement, animated backgrounds, and progressive difficulty scaling.",
                technologies: [
                    "C#",
                    "XAML (UWP)",
                    "File I/O",
                    "Object-Oriented Programming",
                    "UI/UX Design"
                ],
                features: [
                    "Smooth horizontal player movement with warp mode (screen edge looping)",
                    "Advanced shooting mechanics and collision detection systems",
                    "Animated scrolling background for immersive gameplay",
                    "Multiple difficulty levels (Easy, Normal, Hard) and game modes (Casual, Endless)",
                    "Dynamic enemy spawning with scaling difficulty as gameplay progresses",
                    "Local high-score tracking with file I/O (highscores.txt)",
                    "Complete sound effects system for player feedback",
                    "Pause functionality and comprehensive menu navigation",
                    "Object-oriented architecture with inheritance (GamePiece, PlayerPiece, EnemyPiece)",
                    "Robust error handling for game stability"
                ]
            }
        },
        {
            id: 4,
            title: "Blackjack Game",
            shortDescription: "Simple Java-based Blackjack card game with splash screen and multi-threading.",
            technologies: [
                "Java",
                "File I/O",
                "Multi-threading",
                "Object-Oriented Programming",
                "Event Handling",
                "GUI Development"
            ],
            liveUrl: "#",
            thumbnail: lantern2,
            modalContent: {
                images: [lantern2, lantern1, lantern3, lantern4],
                description: "A straightforward Blackjack card game implementation in Java featuring a graphical user interface with splash screen loading animation. This project demonstrates core Java programming concepts including object-oriented design, multi-threading for smooth animations, and basic game logic.",
                technologies: [
                    "Java",
                    "File I/O",
                    "Multi-threading",
                    "Object-Oriented Programming",
                    "Event Handling",
                    "GUI Development"
                ],
                features: [
                    "Complete Blackjack game logic with card dealing and hand evaluation",
                    "Animated splash screen with loading progress bar",
                    "Multi-threading for smooth UI animations and responsive gameplay",
                    "Simple graphical user interface using Java Swing",
                    "Basic card game mechanics (hit, stand, win/lose conditions)",
                    "Object-oriented design for cards, deck, and game state management",
                    "Saves stats in text file using File/IO"
                ]
            }
        },
        {
            id: 5,
            title: "SummerGames WebAPI",
            shortDescription: "RESTful WebAPI for managing athletes and contingents with Swagger documentation.",
            technologies: [
                "ASP.NET Core WebAPI",
                "SQLite",
                "Swagger/OpenAPI",
                "RESTful APIs",
                "C#",
                "LINQ"
            ],
            liveUrl: "https://summergameswebapi2025project1.azurewebsites.net/",
            thumbnail: summergames1,
            modalContent: {
                images: [summergames1],
                description: "A clean RESTful WebAPI built with ASP.NET Core for managing summer games data including athletes, contingents, and events. Features comprehensive Swagger documentation, Entity Framework data management, and SQLite database with seeded migration data.",
                technologies: [
                    "ASP.NET Core WebAPI",
                    "SQLite",
                    "Swagger/OpenAPI",
                    "RESTful APIs",
                    "C#",
                    "LINQ"
                ],
                features: [
                    "RESTful endpoints for athletes and contingents management",
                    "Swagger UI for API documentation and testing",
                    "Entity Framework Code-First migrations with seeded data",
                    "SQLite database for lightweight data storage",
                    "Search and filter functionality by ID and other criteria",
                    "Clean separation of concerns with Models, Controllers, and Data layers",
                    "CRUD operations for managing game participants",
                    "API versioning and proper HTTP status codes"
                ]
            }
        },
        {
            id: 6,
            title: "Chess Player Management Web App",
            shortDescription: "Blazor Server application for managing international chess players with real-time leaderboards.",
            technologies: [
                "C#",
                "Blazor Server",
                "SQLite",
                "Microsoft QuickGrid",
                "LINQ",
                "Bootstrap",
                "Razor Components"
            ],
            liveUrl: "#",
            thumbnail: chessMatch1,
            modalContent: {
                images: [chessMatch1, chessMatch2, chessMatch3],
                description: "A Blazor Server web application for managing international chess players and organizing them by country. Features real-time data updates, dynamic leaderboards, and comprehensive player management with filtering and sorting capabilities. Built with the latest .NET 8 and Entity Framework Core 9.",
                technologies: [
                    "C#",
                    "Blazor Server",
                    "SQLite",
                    "Microsoft QuickGrid",
                    "LINQ",
                    "Bootstrap",
                    "Razor Components"
                ],
                features: [
                    "Complete CRUD operations for chess players and countries",
                    "Real-time leaderboard showing top 10 players by rating",
                    "Advanced filtering and sorting by name, country, and rating",
                    "Blazor QuickGrid with Entity Framework adapter for efficient data display",
                    "SQLite database with Entity Framework Core migrations",
                    "Responsive UI built with Bootstrap and Blazor components",
                    "Dynamic player-country associations with proper relational data",
                    "Clean architecture with separation of data, logic, and presentation layers"
                ]
            }
        }
    ];

    const handleOpen = (projectId: number) => {
        setOpenModalId(projectId);
    };

    const handleClose = () => {
        setOpenModalId(null);
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project: ProjectData) => (
                    <div key={project.id} className="project">
                        {/* Clikcbale */}
                        <div
                            className="clickable-card"
                            onClick={() => handleOpen(project.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={project.thumbnail} className="zoom" alt="thumbnail" width="100%" />
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>

                            {/* Tech Stack */}
                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {project.technologies.map((tech: string) => (
                                        <span
                                            key={tech}
                                            style={{
                                                background: 'linear-gradient(135deg, #ffffffff, #ffffffff)',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '12px',
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                color: 'black'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Learn More Button - Always at bottom right */}
                            <div className="project-buttons">
                                <Button variant="contained" onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click when button is clicked
                                    handleOpen(project.id);
                                }}>
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Modal */}
                        <Modal
                            open={openModalId === project.id}
                            onClose={handleClose}
                            sx={{
                                backdropFilter: 'blur(3px)',
                                backgroundColor: 'rgba(0,0,0,0.5)'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '85%',
                                    maxWidth: '700px', // Smaller max width
                                    maxHeight: '85vh', // Smaller height
                                    overflowY: 'auto',
                                    bgcolor: '#161b22',
                                    color: 'white',
                                    p: 3,
                                    borderRadius: 2,
                                    border: '1px solid #30363d',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}
                            >
                                {/* Header */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h2 style={{
                                        marginBottom: '0.5rem',
                                        color: '#ffffffff',
                                        fontSize: '1.5rem'
                                    }}>
                                        {project.title}
                                    </h2>
                                    <div style={{
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #ffffffff, transparent)',
                                        borderRadius: '1px'
                                    }} />
                                </div>

                                {/* ImageGallery Component */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <ImageGallery images={project.modalContent.images} />
                                </div>

                                {/* Project Description */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{
                                        color: '#ffffffff',
                                        marginBottom: '0.5rem',
                                        fontSize: '1.1rem'
                                    }}>
                                        Project Overview
                                    </h3>
                                    <p style={{
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem',
                                        color: '#e6edf3'
                                    }}>
                                        {project.modalContent.description}
                                    </p>
                                </div>

                                {/* Key Features */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{
                                        color: '#ffffffff',
                                        marginBottom: '0.5rem',
                                        fontSize: '1.1rem'
                                    }}>
                                        Key Features
                                    </h3>
                                    <ul style={{
                                        paddingLeft: '1.2rem',
                                        color: '#e6edf3'
                                    }}>
                                        {project.modalContent.features.map((feature: string, index: number) => (
                                            <li key={index} style={{
                                                marginBottom: '0.3rem',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.4'
                                            }}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{
                                        color: '#ffffffff',
                                        marginBottom: '0.5rem',
                                        fontSize: '1.1rem'
                                    }}>
                                        Technologies Used
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {project.modalContent.technologies.map((tech: string) => (
                                            <span
                                                key={tech}
                                                style={{
                                                    background: 'linear-gradient(135deg, #ffffffff)',
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '10px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500',
                                                    color: 'black'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    justifyContent: 'flex-end',
                                    borderTop: '1px solid #30363d',
                                    paddingTop: '1rem'
                                }}>
                                    {/* Only show Live Demo if project has a live URL */}
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <Button
                                            variant="outlined"
                                            href={project.liveUrl}
                                            target="_blank"
                                            sx={{
                                                color: '#58a6ff',
                                                borderColor: '#58a6ff',
                                                '&:hover': {
                                                    borderColor: '#79c0ff',
                                                    backgroundColor: 'rgba(88, 166, 255, 0.1)'
                                                }
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleClose}
                                        sx={{
                                            bgcolor: '#ff0000ff',
                                            '&:hover': {
                                                bgcolor: '#ff0000ff'
                                            }
                                        }}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;