import type { WeatherData } from "@/API/types"
import { useFavorite } from "@/hooks/useFavorite";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FavoriteButtonProps {
    data:WeatherData
}

const FavoriteButton = ({data}:FavoriteButtonProps) => {
    
    const {addFavorite, removeFavorite,isFavorite} = useFavorite();
    const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);
    

    const handleToggleFavorite = () => {
        if (isCurrentlyFavorite) {
            removeFavorite.mutate(`${data.coord.lat}-${ data.coord.lon}`);
            toast.error(`Removed ${data.name} from Favorites`)
        } else {
            addFavorite.mutate({
                lat: data.coord.lat,
                lon: data.coord.lon,
                name: data.name,
                country: data.sys.country,
            });
            toast.success(`Added ${data.name} to Favorites`) 
        }   
    }


  return (
    
    <Button 
    variant = {isCurrentlyFavorite ? "default" : "outline"}
    size={"icon"}
    onClick={handleToggleFavorite}
    className={isCurrentlyFavorite ? "bg-yellow-400 hover:bg-yellow-600" : ""}
    >   
         <Star
        className={`h-4 w-4 transition-colors ${
          isCurrentlyFavorite ? "fill-current" : ""
        }`}
      />
    </Button>
  )
}

export default FavoriteButton
