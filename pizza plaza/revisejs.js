// const images = document.querySelectorAll(".img")
// console.log(images)

// images.forEach((image) => {
//   console.log(image)
//   image.addEventListener("mouseout", function () {
//     const Order = document.querySelector(".order")
//     Order.style.display = "block"
//   })
// })


//searchbox
const tb = document.querySelector(".textb")
tb.addEventListener("click", function remove() {
  const img = document.querySelector(".im1")
  img.style.display = "none"
  const ph = document.querySelector(".textb")
  ph.placeholder = "search your favourite dish"
})
document.addEventListener("click", function rem() {
  const ph = document.querySelector(".textb")
  ph.value = ""
  sugg.innerHTML = ""
  ph.placeholder = "search your favourite dish"
})

//items finding in the menu
const list1 = "list.txt"
let items = []
fetch(list1)
  .then((res) => res.json())
  .then((data) => items.push(...data))
function wordtomatch(word, items) {
  if(word=="")
    return "p"
  return items.filter((it) => {
    const regex = new RegExp(word, "gi")
    return it.item.match(regex)
  })
}

//function to display the suggestions
function displaymatches() {
  const matcharr = wordtomatch(this.value, items)
  var html = matcharr.map((it) => {
      return `
    <li>
      <div class="items_li">${it.item} @ ${it.price} Rs <Button class="btn1"> Order Now </Button></div>
    </li>`
    })
    .join("")
  sugg.innerHTML = html
}
const sugg = document.querySelector(".suggestions")
tb.addEventListener("change", displaymatches)
tb.addEventListener("keyup", displaymatches)

//.......
let mousecursor=document.querySelector(".cursor")
window.addEventListener('mousemove',cursor);
let navlink=document.querySelectorAll(".items > a")
let links=document.querySelectorAll(".items-a")
console.log(links)
function cursor(e)
{
  
  mousecursor.style.top=e.pageY +'px';
  mousecursor.style.left = e.pageX+'px';
}
navlink.forEach(link =>{
  link.addEventListener('mouseover',()=>{
    mousecursor.classList.add('link-grow');
    link.classList.add('hover-link');
    //console.log(link.value)
  })
  link.addEventListener('mouseleave',()=>{
    mousecursor.classList.remove('link-grow');
    links.classList.remove('hover-link');
    //console.log("hi")
  })
})