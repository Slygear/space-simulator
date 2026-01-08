# Space Simulator

A 3D space simulation sandbox desktop application built with Electron, React, and Three.js.

**🤖 Built entirely with Claude AI (Anthropic)** - This project was created through collaborative development with Claude AI, demonstrating AI-assisted software development capabilities.

## Features (Phase 1 - Completed ✓)
- 3D space scene with camera controls
- Animated Sun with glow effects
- Starfield background with 5000+ stars
- Smooth orbit controls (rotate, pan, zoom)
- Full-screen Electron desktop application

## Tech Stack
- **Desktop:** Electron
- **Frontend:** React 18
- **3D Graphics:** Three.js, React Three Fiber
- **Styling:** Tailwind CSS (inline styles for Electron compatibility)
- **State Management:** Zustand
- **Build Tool:** Vite

## Installation

```bash
# Install dependencies
npm install

# Run development mode
npm start

# Build for production
npm run build
```

## Development Roadmap

See [space_simulator_roadmap.txt](./space_simulator_roadmap.txt) for complete development plan.

### Completed Phases:
- ✅ Phase 1: Foundation Setup (Basic 3D scene, Sun, Starfield)

### Upcoming Phases:
- 🔜 Phase 2: Planet System Basics (Planet creation, gravity physics)
- 🔜 Phase 3: Enhanced Interactions (Selection, editing, collisions)
- 🔜 Phase 4: Visual Polish (Textures, lighting, ring systems)
- 🔜 Phase 5: Atmosphere System (Gas composition, temperature)
- 🔜 Phase 6: Habitability System (Goldilocks zone, water, magnetic fields)
- 🔜 Phase 7: Life Evolution (Microbial to intelligent life stages)
- 🔜 Phase 8-15: Advanced features (Black holes, save/load, optimization, release)

## Project Structure

```
space-simulator/
├── electron/          # Electron main process
│   └── main.js       # Application window configuration
├── src/
│   ├── components/    # React UI components
│   │   └── Scene.jsx # Main 3D canvas scene
│   ├── three/         # 3D objects and effects
│   │   ├── Sun.jsx   # Animated sun with glow
│   │   ├── Starfield.jsx # Background stars
│   │   └── Lights.jsx # Scene lighting
│   ├── physics/       # Physics engine (Phase 2+)
│   ├── systems/       # Atmosphere & life systems (Phase 5+)
│   ├── App.jsx       # Main React component
│   ├── config.js     # Global configuration
│   └── index.js      # React entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Controls

- **Left Click + Drag:** Rotate camera
- **Right Click + Drag:** Pan camera
- **Scroll:** Zoom in/out

## Development Notes

This project follows a 15-phase development roadmap with clear milestones:
- Foundation and basic rendering (Phases 1-2)
- Interaction and visual polish (Phases 3-4)
- Scientific simulation features (Phases 5-7)
- Advanced systems and effects (Phases 8-9)
- UI/UX and optimization (Phases 10-13)
- Release preparation (Phases 14-15)

## AI Development

This entire project is being developed collaboratively with Claude AI:
- Architecture and code structure designed by AI
- Full implementation written by AI
- Following professional development practices
- Modular, maintainable, and well-documented code

## Future Goals

- Create and simulate custom solar systems
- Add atmospheric chemistry and life evolution
- Implement black holes with gravitational lensing
- Save/load simulation states
- Educational scenarios and presets

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Built with Claude AI (Anthropic)
- Three.js for 3D rendering
- React Three Fiber for React integration
- Electron for desktop application framework
