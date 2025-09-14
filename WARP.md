# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a 30-day JavaScript coding challenge repository. Each day represents a separate project or exercise, organized in individual directories following the pattern `day_N(description)`.

## Repository Structure

- Each day's challenge is contained in its own directory: `day_1(drum)`, `day_2(clock)`, etc.
- Each day directory typically contains:
  - HTML files for the user interface
  - CSS files for styling
  - JavaScript files for functionality
  - Assets (images, sounds, etc.) as needed

## Common Development Commands

### Running Projects
Most projects are client-side web applications that can be run by:
```bash
# Navigate to the specific day's directory
cd day_N(description)

# Open the HTML file in a browser (macOS)
open index.html

# Or serve locally with Python (if available)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Development Workflow
```bash
# Create a new day's project structure
mkdir "day_N(description)"
cd "day_N(description)"
touch index.html style.css script.js

# Add and commit daily progress
git add .
git commit -m "Add day N: description"
```

### Testing Individual Projects
Since this is a collection of small JavaScript projects, testing is typically done manually by:
1. Opening the HTML file in a browser
2. Interacting with the UI to verify functionality
3. Using browser developer tools for debugging

## Development Notes

### File Organization
- Keep each day's project self-contained in its directory
- Use consistent naming: `index.html`, `style.css`, `script.js` for main files
- Place assets in subdirectories like `assets/`, `images/`, or `sounds/`

### JavaScript Patterns
- Most projects use vanilla JavaScript (no frameworks)
- Focus on DOM manipulation, event handling, and interactive features
- Projects often involve animations, user input, or multimedia elements

### Browser Compatibility
- Target modern browsers with ES6+ features
- Use browser developer tools for debugging and testing
- Test interactive features across different screen sizes

## Project Types
Based on the directory naming pattern, expect projects involving:
- Interactive UI components (drums, clocks, calculators)
- Animations and visual effects
- Audio/multimedia integration
- Form handling and user input
- API integrations and data fetching