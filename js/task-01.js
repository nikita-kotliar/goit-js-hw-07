const itemElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemElements.length}`);

itemElements.forEach(item => {
  const ulElement = item.querySelector("ul");
  const count = ulElement.querySelectorAll("li").length;
  const name = item.querySelector('h2');
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${count}`);
});