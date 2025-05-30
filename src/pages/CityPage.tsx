import CurrentWeather from "@/components/CurrentWeather";
import { FavoriteButton } from "@/components/FavoriteButton";
import HourlyTemp from "@/components/HourlyTemp";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useForecastQuery, useWeatherQuery } from "@/hooks/UseWeather";
import { AlertTriangleIcon } from "lucide-react";
import { useParams, useSearchParams } from "react-router-dom";

const CityPage = () => {

  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  
  const coordinates ={lat,lon}

 const forecastQuery = useForecastQuery(coordinates);
   const weatherQuery = useWeatherQuery(coordinates);
  
  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertTitle> Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          Failed to fetch weather data. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

   if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold tracking-tight">{params.cityName}, {weatherQuery.data.sys.country}</h1>
        <div>
          <FavoriteButton data={{...weatherQuery.data,name:params.cityName}}/>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col gap-4 ">
          <CurrentWeather
            data={weatherQuery.data}
          />
          <HourlyTemp data={forecastQuery.data} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          {/* daily forecast */}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  )
}

export default CityPage
