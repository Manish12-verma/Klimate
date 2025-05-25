import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/UseGeoLocation";
import { MapPin, RefreshCw } from "lucide-react"
import { AlertTriangle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/UseWeather";
import CurrentWeather from "@/components/CurrentWeather";


const WeatherDashboard = () => {

const {coordinates,error:locationError,getLocation,isLoading:locationLoading} = useGeoLocation();
 

const locationQuery = useReverseGeocodeQuery(coordinates);
const forecastQuery = useForecastQuery(coordinates);
const weatherQuery = useWeatherQuery(coordinates);


  const handleRefresh = () => {
    getLocation();
    if(coordinates) {
     weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();  
      
    }
  };

  if(locationLoading) {
    return <LoadingSkeleton/>
  }

  if(locationError) {
   return (
   <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
       <p>{locationError}</p>
       <Button onClick={getLocation} variant={'outline'} className="w-fit">
        <MapPin className="h-4 w-4 mr-2" />
         Enable Location
       </Button>
      </AlertDescription>
    </Alert>
   );
  }

  
  if(!coordinates) {
   return (<Alert variant="destructive">
      <AlertTitle>Location Required</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
       <p>Please enable location access to see your local weather.</p>
       <Button onClick={getLocation} variant={'outline'} className="w-fit">
        <MapPin className="h-4 w-4 mr-2" />
         Enable Location
       </Button>
      </AlertDescription>
    </Alert>
   );
  }
  
  const locationName = locationQuery.data?.[0];
  
  if(weatherQuery.error || forecastQuery.error){
    return (
        <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle> Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
       <p>Failed to fetch weather data. Please try again.</p>
       <Button onClick={getLocation} variant={'outline'} className="w-fit">
        <RefreshCw className="h-4 w-4 mr-2" />
         retry
       </Button>
      </AlertDescription>
    </Alert>
    )
  }

  if(!weatherQuery.data || !forecastQuery.data ) {
    return <LoadingSkeleton/>
  } 

  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold tracking-tight">My location</h1>
        <Button variant={"outline"} size={'icon'} onClick={handleRefresh}
        disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin":""}`}/>
        </Button>
      </div>
           <div className="grid gap-6">
              <div>
                <CurrentWeather data={weatherQuery.data} locationName={locationName}/>
              {/* current weather and hourly temp */}
              </div>
              <div>
                {/* details */}
              {/* daily forecast */}
              </div>
           </div>
    </div>
  )
}

export default WeatherDashboard
