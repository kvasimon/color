import sets from './sets/index'

const getSet = set => {
  return sets.find(s => s.name == set)
}
const getRandomSet = () => {
  return sets[Math.floor(Math.random() * sets.length)]
}

export {
  getSet,
  getRandomSet,
}
