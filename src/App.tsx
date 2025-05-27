import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/WeatherDashboard";
import CityPage from "./pages/CityPage";
import { Layout } from "./components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "sonner";
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry:false,
      refetchOnWindowFocus: false, // Disable refetching on window focus
    }
  }
});
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />}></Route>
              <Route path="/city/:cityName" element={<CityPage />}></Route>
            </Routes>
          </Layout>
          <Toaster richColors/>
        </ThemeProvider>
      </BrowserRouter>
       <ReactQueryDevtools initialIsOpen={false} />  
    </QueryClientProvider>
  );
}

export default App;
