# Klimate

![Klimate Preview](public\klimate.png)

A modern weather app built with React, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, and Recharts. It displays real-time weather updates and visual insights through interactive charts, offering a clean, fast, and responsive user experience.

**Live Demo:** [https://klimate-demo.example.com](https://klimate-blond.vercel.app/)

## Features

- **Current Weather**: View up-to-date weather conditions for your current location or any searched city.
- **Hourly & Daily Forecasts**: Get detailed hourly and daily weather forecasts.
- **Favorite Cities**: Mark cities as favorites for quick access to their weather data.
- **Location Detection**: Automatically detects your location (with permission) for local weather.
- **Responsive UI**: Clean, modern, and responsive design.
- **Error Handling**: User-friendly alerts for location or network errors.
- **React Query**: Efficient data fetching and caching.
- **Theming**: Dark mode support.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Query (TanStack Query)](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn-UI](https://ui.shadcn.com/)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Klimate
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/pages/` — Main pages (WeatherDashboard, CityPage)
- `src/components/` — UI components (CurrentWeather, HourlyTemp, WeatherDetails, etc.)
- `src/hooks/` — Custom React hooks (useGeoLocation, useWeather, etc.)
- `src/context/` — Context providers (theme-provider)
- `src/API/` — API utilities and types

## Environment Variables

You need to set up the following environment variables for the app to work correctly. Create a `.env` file in the root directory and add these lines:

```
VITE_OPENWEATHER_API_KEY =your_api_key
VITE_OPENWEATHER_API_URL=your_api_url
```

## Contributing

We welcome contributions! If you'd like to add features, fix bugs, or improve documentation, please open a pull request:

1. Fork this repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them with clear messages.
4. Push your branch to your forked repository.
5. Open a pull request to the `main` branch of this repository.

Please ensure your code follows the existing style and passes all checks. Thank you for helping improve Klimate!


## License

This project is licensed under the MIT License.

---

**Enjoy using Klimate!**
