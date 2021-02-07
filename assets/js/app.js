document.querySelector('#searchBtn').addEventListener('click', getMeal);

function getMeal(e){

	const skey = document.querySelector('#skey').value;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${skey}`, true);

	xhr.onload = function(){
		if(this.status === 200){
			const response = JSON.parse(this.responseText);
			console.log(response);
			let output = '';
			const parentDiv = document.getElementById('mealItems');
			for (let i = 0; i < response.meals.length; i++) {
				const meals = response.meals[i];
				const mealName = meals.strMeal;
				const mealImageUrl = meals.strMealThumb;
				const singleDiv = document.createElement('div');
				singleDiv.className = 'singleMeal'
				const mealItem = `
					<div class="basic-info">
						<img src="${mealImageUrl}" alt="">
						<h3>${mealName}</h3>
					</div>
				`
				singleDiv.innerHTML = mealItem;
				parentDiv.appendChild(singleDiv);
			}
		}
	}
	xhr.send();
	e.preventDefault();
}
