function generateNumber() {
   const min = Math.ceil(document.querySelector('.input-min').value);
   const max = Math.floor(document.querySelector('.input-max').value);

   // Validação básica
   if (isNaN(min) || isNaN(max) || min >= max) {
       alert('Insira valores válidos!');
       return;
   }

   // Gerar o número aleatório
   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   // Selecionar ou criar um container para o resultado
   let resultContainer = document.querySelector('#result-container');
   if (!resultContainer) {
       resultContainer = document.createElement('Drawn-number');
       resultContainer.id = 'result-container';
       document.body.appendChild(resultContainer);
   }

   // Limpar resultado anterior e exibir o novo
   resultContainer.innerHTML = '';
   const img = document.createElement('Drawn-number');
   img.textContent = result;
   img.style.width = '150px';
   img.style.height = '150px';
   img.style.display = 'flex';
   img.style.alignItems = 'center';
   img.style.justifyContent = 'center';
   img.style.margin = '20px auto';
   img.style.background = 'linear-gradient(135deg,rgb(194, 0, 6),rgb(88, 21, 2))';
   img.style.color = '#fff';
   img.style.fontSize = '48px';
   img.style.borderRadius = '10px';
   img.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
   img.style.animation = 'fadeIn 0.5s ease';

   resultContainer.appendChild(img);

   // Efeito de confete
   confetti({
       particleCount: 100,
       spread: 70,
       origin: { y: 0.6 } // Ajusta a posição do confete
   });
}
