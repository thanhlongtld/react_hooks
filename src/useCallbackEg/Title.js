import React from "react"

function Title() {
    console.log("Render the title")
    return <div>A title here</div>
}

export default React.memo(Title)
