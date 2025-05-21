import axios from "axios";
import { useEffect, useState } from "react";
import ImgCard from "./ImgCard/ImgCard";

interface PhotoSrc {
  medium: string;
}

interface Photo {
  id: number;
  alt: string;
  src: PhotoSrc;
}

interface PexelsImgProps {
  query: string;
}

// const API_KEY = "3wu1ID5sdIRS7a7Aml5yrzepm6SvgkLi6bs7bmseajzf5CUX6hwyCGLY";

const PexelsImg: React.FC<PexelsImgProps> = ({query}) => {
  const [images, setImages] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    // async function fetchData () {

    async function fetchData() {
      try {
        const response = await axios.get<{ photos: Photo[] }>(
          `https://api.pexels.com/v1/search?query=${query}`,
          {
            headers: {
              Authorization: "3wu1ID5sdIRS7a7Aml5yrzepm6SvgkLi6bs7bmseajzf5CUX6hwyCGLY"
            }
          }
        );
        setImages(response.data.photos);
      } catch (error) {
        console.log(error, "ERROR");

      } finally {
        setLoading(false);
      }

    }

    fetchData();
  }, [query]);

  if (loading) return <p>LOADING...</p>;

  return( 
    <ImgCard images={images}/>
{/* <div>
      {images.map((photo) => (
        <ImgCard key={photo.id} src={photo.src.medium} alt={photo.alt} />
      ))}
    </div> */}
  )
}


export default PexelsImg;