# 🎵 Biblioteca Musical (React + Redux Toolkit)

## 🧾 Descripción del proyecto
**Biblioteca Musical** es una SPA hecha con **React** y **Redux Toolkit** para explorar un catálogo de canciones/álbumes, buscar por nombre o artista, filtrar por género y gestionar **favoritos** y/o **cola de reproducción**.  
El estado global se maneja con **RTK slices** y la UI está **estilizada** (por ejemplo con styled-components o CSS Modules, según el repo).

---

## 🧰 Tecnologías utilizadas
- **React 18**
- **Redux Toolkit** + **React-Redux**
- **React Router** (ruteo SPA)
- **Fetch / Axios** para datos (si aplica)
- **styled-components / CSS Modules** (según tu implementación)
- **Vite o Create React App** (según el `package.json`)

---

## ⚙️ Instrucciones de instalación y uso

1) Clona e instala dependencias
```bash
git clone https://github.com/BenjaminMacias/biblioteca-musical-estilizado-redux-toolkit.git
cd biblioteca-musical-estilizado-redux-toolkit
npm install
Ejecuta en desarrollo

Usa el script que tenga tu package.json:

# Vite
npm run dev
# ó Create React App
npm start
Compila para producción

npm run build
(Opcional) Si el proyecto trae datos mock en src/data/*.json, no necesitas backend.
Si usa JSON Server, podrías lanzar algo como:

npx json-server --watch src/data/tracks.json --port 4000
y configurar la URL en el código/.env.

🧪 Ejemplos de uso
1) Estructura típica de un slice (Redux Toolkit)
// src/store/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Track = { id: string; title: string; artist: string; cover?: string };

interface FavoritesState {
  items: Track[];
}

const initialState: FavoritesState = { items: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Track>) {
      const exists = state.items.some(t => t.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
2) Despachar acciones desde un componente
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';

function TrackCard({ track }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={track.cover} alt={track.title} />
      <h3>{track.title}</h3>
      <p>{track.artist}</p>

      <button onClick={() => dispatch(addFavorite(track))}>
        Añadir a favoritos
      </button>
      <button onClick={() => dispatch(removeFavorite(track.id))}>
        Quitar de favoritos
      </button>
    </div>
  );
}
3) Ejemplo de datos (mock)
[
  {
    "id": "trk_001",
    "title": "Nothing Else Matters",
    "artist": "Metallica",
    "genre": "Rock",
    "cover": "/covers/metallica.jpg",
    "duration": 388
  },
  {
    "id": "trk_002",
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "genre": "Pop",
    "cover": "/covers/mj.jpg",
    "duration": 294
  }
]
4) Selectores simples
// src/store/selectors.ts
import { RootState } from './index';

export const selectFavorites = (s: RootState) => s.favorites.items;
export const selectByGenre = (genre: string) => (s: RootState) =>
  s.library.items.filter(t => t.genre === genre);













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
