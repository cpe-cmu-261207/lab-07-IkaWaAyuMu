import {PixelPainterStore, SetCurrentColor} from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  let state = PixelPainterStore.useState();
  //modify this function to highlight correctly
  const computeRingSize = () => {
    return (color === state.currentColor ? "ring-8 ring-green-400" : "")
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
      onClick = {() => {SetCurrentColor(color);}}
    >
    </div>
  )
}

export default SelectColorButton