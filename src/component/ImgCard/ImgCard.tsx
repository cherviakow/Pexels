import React from "react";

interface ImgCardProps{
    images:{
      id: number;
    alt:string;
    src:{
        medium:string;
    };
    }[];
    
}



const ImgCard: React.FC<ImgCardProps> = ({images}) =>{

    return(
        <div>
    
    {images.map((img) => (
  <div key={img.id}>
    <img src={img.src.medium} alt={img.alt} />
    
  </div>
))}
         
        </div>
    )


}

export default ImgCard;