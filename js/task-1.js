const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector("h2");
  const numberEl = category.querySelectorAll("ul li");
  
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${numberEl.length}`);
});

