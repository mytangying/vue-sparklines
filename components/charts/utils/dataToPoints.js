import arrayMin from './min'
import arrayMax from './max'

export default ({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = arrayMax(data),
  min = arrayMin(data),
  textHeight = 0
}) => {
  const len = data.length

  if (limit && limit < len) {
    data = data.slice(len - limit)
  }

  const vfactor = (height - margin * 2 - textHeight) / ((max - min) || 2)
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0))

  return data.map((d, i) => ({
    x: i * hfactor + margin,
    y:d==0?(max === min?height:height-1): ((max === min ? 1 : (max - d)) * vfactor + margin + textHeight)
  }))
}
