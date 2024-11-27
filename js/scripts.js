const btngrid = document.querySelector("#grid")
const btnlist = document.querySelector("#list")
const pageBody = document.querySelector("body")

btngrid.addEventListener(`click` , () => pageBody.className="grid")
btnlist.addEventListener(`click` , () => pageBody.className="list")



