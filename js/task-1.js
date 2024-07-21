const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li").length;
  console.log(`Category: ${title}\nElements: ${items}`);
});

const categoriesList = document.getElementById("categories");

const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
