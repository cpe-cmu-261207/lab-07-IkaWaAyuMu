import {ClearCanvas, RandomizeAllCells} from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick = {ClearCanvas} >Clear</button>
      <button className="w-36" onClick = {RandomizeAllCells}>Random color</button>
    </div>
  )
}

export default Utility