import axios from "axios";
import { useEffect, useState } from "react";
import ImgCard from "./ImgCard/ImgCard";
interface Photo {
  id: number;
  alt: string;
  src: {
    medium: string;
  };
}
interface PexelsImgProps {
  query: string;
}

const PexelsImg: React.FC<PexelsImgProps> = ({ query }) => {
  const [images, setImages] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<{ photos: Photo[] }>(
          `https://api.pexels.com/v1/search?query=${query}&per_page=12&page=${page}`,
          {
            headers: {
              Authorization:
                "3wu1ID5sdIRS7a7Aml5yrzepm6SvgkLi6bs7bmseajzf5CUX6hwyCGLY",
            },
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
  }, [query, page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(1, prev - 1));
  if (loading) return <p>LOADING...</p>;

  return (
    <>
      <ImgCard images={images} />

      <div style={{ justifyContent: "center", marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Back
        </button>

        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default PexelsImg;
