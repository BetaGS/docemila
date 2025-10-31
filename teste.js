   document.addEventListener('DOMContentLoaded', function() {
            // Seleciona todos os links com a classe 'social-icon'
            const socialIcons = document.querySelectorAll('.social-icon');

            // Adiciona um 'event listener' de clique para cada ícone
            socialIcons.forEach(icon => {
                icon.addEventListener('click', function(event) {
                    event.preventDefault(); // Impede a navegação padrão do link (o '#' no href)
                    
                    // Pega o nome da rede social do atributo 'data-social'
                    const socialName = this.getAttribute('data-social');
                    
                    // Exibe o alerta
                    alert(`Você clicou no ícone do ${socialName}. Essa ação levaria à página oficial da Doce Mila no ${socialName}.`);
                });
            });
        });