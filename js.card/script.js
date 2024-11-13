
const cardContainer = document.createElement('div');
cardContainer.classList.add( `card-container`)
document.body.appendChild(cardContainer);

function createCard(container, imageUrl, title, text, buttonText) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = imageUrl;
  card.appendChild(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);


  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = text;
  cardBody.appendChild(cardText);


  const button = document.createElement(`button`);
  button.classList.add('btn');
  button.textContent = buttonText;
  cardBody.appendChild(button);


  container.appendChild(card);
}

createCard(cardContainer, 'https://via.placeholder.com/180', ' Başlığı 1', 'Bu kartın mətnidir.', 'Rad More');
createCard(cardContainer, 'https://via.placeholder.com/180', 'Başlığı 2', 'Bu kartin mətnidir.', 'Rad More');
createCard(cardContainer, 'https://via.placeholder.com/180', ' Başlığı 3', 'Bu kartın mətnidir.', 'Rad More')