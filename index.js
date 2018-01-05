function getFirstSelector(selector) {

  return document.querySelector(selector)}


function nestedTarget() {
return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  for (const element of firstList.children) {element.innerHTML = parseInt(element.innerHTML)+n}
  for (const element of secondList.children) {element.innerHTML = parseInt(element.innerHTML)+n}

}
