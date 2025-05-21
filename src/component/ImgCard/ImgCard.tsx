import React from "react";

interface ImgCardProps{
    src: string;
    alt:string;
}



const ImgCard: React.FC<ImgCardProps> = ({src,alt}) =>{

    return(
        <div>
            <img src={src} alt={alt} />
        </div>
    )


}

export default ImgCard;