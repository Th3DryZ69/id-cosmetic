let bodyToys = document.getElementById('Toys');

fetch("https://fortniteapi.io/v2/items/list?lang=en",  {
    headers: {"Authorization":"21b32b56-7f80bcb7-4465f548-d021e540"}})
    .then(res => res.json())
    .then(data => {
        data.items.forEach(element => {
            if (element.type.id == 'toy') {
                let newCosmetic = document.createElement('tr');
                let imgCosmetic = document.createElement('td');
                let img = document.createElement('img');
                imgCosmetic.appendChild(img);
                img.src = element.images.icon;
                // img.style.backgroundColor = `${element.rarity.value}`
                newCosmetic.appendChild(imgCosmetic);
                
                let nameCosmetic = document.createElement('td');
                nameCosmetic.innerText = element.name;
                newCosmetic.appendChild(nameCosmetic);
                
                let descriptionCosmetic = document.createElement('td');
                descriptionCosmetic.innerText = element.description;
                newCosmetic.appendChild(descriptionCosmetic);
                
                let idCosmetic = document.createElement('td');
                idCosmetic.innerText = element.id;
                newCosmetic.appendChild(idCosmetic);
                bodyToys.appendChild(newCosmetic);
            };
        });
    });


