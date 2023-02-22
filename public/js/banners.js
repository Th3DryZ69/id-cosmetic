let bodyBanners = document.getElementById('Banners');
fetch('https://fortnite-api.com/v1/banners')
    .then(res => res.json())
    .then(data => {
        data.data.forEach(element => {
            let newCosmetic = document.createElement('tr')
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
            bodyBanners.appendChild(newCosmetic);
        });
    });