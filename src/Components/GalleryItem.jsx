import { useState } from "react"
function GalleryItem (){
    let [showDetails, setShowDetails] = useState (false)

    return (
        <div onClick= {()=> setShowDetails(!showDetails)}
        style={{display: 'inline-block'}}>

        <h1> One Gallery Item</h1>
        </div>
    )
}

export default GalleryItem
