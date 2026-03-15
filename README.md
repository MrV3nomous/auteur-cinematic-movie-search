# 🎬 Auteur Cinematic Movie Search

> A visually immersive movie discovery experience where every film shapes the interface around it.»

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)  ![JavaScript ES6](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)  ![OMDb API](https://img.shields.io/badge/API-OMDb-blue)  ![Node Vibrant](https://img.shields.io/badge/Node--Vibrant-Color%20Extraction-purple)  ![MIT License](https://img.shields.io/badge/License-MIT-green)  ![Repo Size](https://img.shields.io/github/repo-size/MrV3nomous/auteur-cinematic-movie-search)  ![Last Commit](https://img.shields.io/github/last-commit/MrV3nomous/auteur-cinematic-movie-search)


---

## 🌌 Overview

**Auteur Cinematic Movie Search transforms a simple movie lookup into a dynamic visual experience.**

Instead of static results, the interface reacts to each movie poster, extracting its colors and reshaping the UI to create an atmosphere inspired by the film itself.

Every search becomes a mini cinematic environment.

---

## ✨ Features

**🎨 Dynamic Poster Color Extraction**
  Each movie poster is analyzed to extract its dominant color palette.
The UI lighting adapts to match the visual tone of the film.

**🌠 Ambient Interface Lighting**
  Background gradients shift automatically based on poster colors, creating a cinematic atmosphere around each movie.

**✨ Glowing Interactive Movie Cards**
  Movie cards emit subtle animated glow effects derived from poster colors, enhancing the visual presentation.

**🎬 Cinematic Movie Modal**
  Opening a movie reveals a blurred poster background that creates a theater-like experience for movie details.

**🎭 Poster Color Palette Preview**
  Each movie card displays a mini color palette generated directly from the poster artwork.

**🧠 Graceful Poster Fallbacks**
  If a poster image is unavailable, a clean fallback UI ensures the layout remains visually consistent.

---

## ⚡ Smooth UI Interactions

- Hover effects
- Animated card scaling
- Modal transitions
- Keyboard and outside-click modal closing

---

## 🧰 Tech Stack

- **React| Frontend UI framework**
- **JavaScript (ES6+)| Application logic**
- **Tailwind CSS| Styling and responsive layout**
- **OMDb API| Movie data source**
- **Node Vibrant| Poster color extraction**

---

## ⚙️ Installation

- **Clone the repository:**

```bash
git clone https://github.com/MrV3nomous/auteur-cinematic-movie-search.git
```

- **Navigate into the project:**

```bash
cd auteur-cinematic-movie-search
```

- **Install dependencies:**

```bash
npm install
```

- **Run the development server:**

```bash
npm run dev
```

---

## 🌐 API

Movie data is provided by the OMDb API.

**You can obtain an API key here:**
```bash
http://www.omdbapi.com/apikey.aspx
```

---

## 🔑 Environment Setup

This project requires an OMDb API key to fetch movie data. Check API section to obtain your own key.

**1. Create a ".env" file in the project root**

In the root directory of the project, create a file named:

```bash
.env
```

**2. Add your API key to the file**

```bash
REACT_APP_OMDB_API_KEY=your_api_key_here
```

Example:
```bash
REACT_APP_OMDB_API_KEY=*f*6g*7
```
*Note: This api key is invalid and is for demonstration purposes only. Get your own API key. Check the API section.*

**3. Start the development server**

```bash
npm run dev
```

The application will now be able to fetch movie data from the OMDb API.


**⚠️ Important**

The ".env" file should not be committed to GitHub.
Ensure ".env" is included in your ".gitignore".

---

## 💡 Design Philosophy

Most movie search apps focus purely on functionality.

This project explores a different idea:

> What if the visual identity of each film influenced the interface itself?

By turning poster artwork into live UI themes, the app transforms browsing into a more cinematic and expressive experience.

---

## 🚀 Future Ideas

Potential enhancements:

- Trailer previews inside the modal
- Movie recommendation graph
- Poster theme switching modes
- Advanced filtering and genre exploration
- Interactive movie timeline visualization

---

## 📜 License

**MIT LICENSE ©️ SOUMIK HALDER 2026**

---

## ⭐ Support

If you find this project interesting, consider giving it a star.

It helps the project reach more developers and encourages future improvements.

---
