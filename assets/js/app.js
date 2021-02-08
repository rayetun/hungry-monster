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
		<div onclick="getIngredients('${meals.strMeal}')" class="basic-info">
			<img src="${meals.strMealThumb}" alt="">
			<h3>${meals.strMeal}</h3>
		</div>
	`
	singleDiv.innerHTML = mealItem;
	parentDiv.appendChild(singleDiv);
	})
}
const getIngredients = (mealName) => {
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
	fetch(url)
	.then(res => res.json())
	.then(data => displayIngredients(data.meals));
}
const displayIngredients = meals => {
	const mealInfo = document.getElementById('mealInfo');
	meals.forEach(meal =>{
		const singleDiv2 = document.createElement('div');
		singleDiv2.className = 'singleMeal';
		const mealItem = `
			<div class="basic-info">
				<img src="${meal.strMealThumb}" alt="">
				<h3>${meal.strMeal}</h3>
				<h5>Ingredients</h5>
				<ul>
					<li>${meal.strIngredient1}</li>
					<li>${meal.strIngredient2}</li>
					<li>${meal.strIngredient3}</li>
					<li>${meal.strIngredient4}</li>
					<li>${meal.strIngredient5}</li>
					<li>${meal.strIngredient6}</li>
				</ul>
			</div>
		`
		singleDiv2.innerHTML = mealItem;
		mealInfo.appendChild(singleDiv2);
		})
	
		
}