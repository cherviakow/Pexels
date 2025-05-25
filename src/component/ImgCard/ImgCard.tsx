import React from "react";
import css from "./ImgCard.module.css";

interface ImgCardProps {
  images: {
    id: number;
    alt: string;
    src: {
      medium: string;
    };
  }[];
}

const ImgCard: React.FC<ImgCardProps> = ({ images }) => {
  return (
    <div className={css.pagin}>
      {images.map((img) => (
        <div key={img.id}>
          <img className={css.image} src={img.src.medium} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImgCard;
