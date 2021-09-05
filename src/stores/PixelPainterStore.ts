import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  currentColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  currentColor: '#000000'
})
export function SetCurrentColor(color: string)
{
  PixelPainterStore.update(p => {p.currentColor = color;})
}
export function SetCurrentToCell(x: number, y: number)
{
  PixelPainterStore.update(p => {p.canvas[x][y] = p.currentColor;})
}
export function ClearCanvas()
{
  PixelPainterStore.update(p => {p.canvas = createEmptyCanvas();})
}
export function RandomizeAllCells()
{
  let colorsPool: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E'];
  let output: string[][] = [];

  for (let i=0; i<16; i++ )for (let j=0; j<16; j++)
      output[i].push(colorsPool[Math.floor(Math.random()*colorsPool.length)]);

  PixelPainterStore.update(p => {p.canvas = output;})
}