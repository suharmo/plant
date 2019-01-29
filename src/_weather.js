import { seasonHeading } from "./_dom.js";
import { seasons } from "./_objects.js";

export function changeSeasonStyle(name,font,colorText,bgImage,headTag, bodyTag, infoDiv){
        seasonHeading.innerHTML = name;
        seasons.changeFont(font,colorText,bgImage,headTag, bodyTag, infoDiv);
      
}

//everything works fine
