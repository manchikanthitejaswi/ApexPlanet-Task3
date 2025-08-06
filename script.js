const personalities = [
  {
    name: "Mahatma Gandhi",
    role: "Leader of Indian Independence",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71Sreyt0zXL._AC_UL600_SR600,600_.jpg",
    bio: "Leader of the Indian independence movement, known for his philosophy of non-violence and civil disobedience.",
    quote: "Be the change that you wish to see in the world."
  },
  {
    name: "A.P.J. Abdul Kalam",
    role: "Former President of India",
    image: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg",
    bio: "An aerospace scientist and the 11th President of India, known as the Missile Man of India.",
    quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
  },
  {
    name: "Mother Teresa",
    role: "Missionary & Nobel Laureate",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mother_Teresa_1.jpg",
    bio: "A Catholic nun and missionary who devoted her life to caring for the poor and sick in Kolkata, India.",
    quote: "Not all of us can do great things. But we can do small things with great love."
  },
  {
    name: "Nelson Mandela",
    role: "Anti-Apartheid Icon",
    image: "https://cdn.britannica.com/67/75567-050-4EBBE84D/Nelson-Mandela.jpg",
    bio: "Anti-apartheid revolutionary and former President of South Africa.",
    quote: "It always seems impossible until it's done."
  }
];

function searchPersonality() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("searchError");
  const cardContainer = document.getElementById("carousel");

  const found = personalities.find(p =>
    p.name.toLowerCase().includes(input)
  );

  if (found) {
    errorMsg.textContent = "";
    cardContainer.innerHTML = `
      <div class="card">
        <img src="${found.image}" alt="${found.name}">
        <div class="details-block">
          <p><strong>👤 Name:</strong> ${found.name}</p>
          <p><strong>🎖️ Role:</strong> ${found.role}</p>
          <p><strong>📜 Bio:</strong> ${found.bio}</p>
          <p class="inspiration"><strong>💬 Quote:</strong> "${found.quote}"</p>
        </div>
      </div>
    `;
  } else {
    cardContainer.innerHTML = "";
    errorMsg.textContent = "Person not found. Try another name.";
  }
}
