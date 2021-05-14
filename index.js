import colorSets from './sets/index'

function getSet(name) {
  const colorSet = colorSets.find(s => s.name == name)
  if (typeof colorSet === 'undefined') {
    return getRandomColors()
  }
  return colorSet
}

function getColors(set, ...sets) {
  let colors = []
  colors = getSet(set).colors
  if (sets[0]) {
    sets.forEach(s => colors = colors.concat(getSet(s).colors))
  }
  return colors
}

function getRandomColors(selection) {
  let colors = []
  if (selection) {
    selection.forEach(sl => colors.push(getSet(sl)))
    return colors[Math.floor(Math.random() * colors.length)].colors
  }
  return colorSets[Math.floor(Math.random() * colorSets.length)].colors
}

export {
  getColors,
  getRandomColors,
}
