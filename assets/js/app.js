function searchMeal(){
	const searchInput = document.getElementById('skey').value;
	const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
	fetch(apiUrl)
	.then(res => res.json())
	.then(data => searchResult(data.meals));
}
const searchResult = meal => {
	const parentDiv = document.getElementById('mealItems');
	parentDiv.innerHTML = '';
	meal.forEach(meals =>{
		const singleDiv = document.createElement('div');
		singleDiv.className = 'singleMeal';
		const mealItem = `
			<div class="basic-info">
				<img src="${meals.strMealThumb}" alt="">
				<h3>${meals.strMeal}</h3>
			</div>
		`
		singleDiv.innerHTML = mealItem;
		parentDiv.appendChild(singleDiv);
	})
}
