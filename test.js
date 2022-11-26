const ar = [{id: 1, num: 1}, {id: 2, num: 2}, {id: 3, num: 3}]
const res = ar.map(item =>  item.id === 2 ? {...item, num: 5} : item)