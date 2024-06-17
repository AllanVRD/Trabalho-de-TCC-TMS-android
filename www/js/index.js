  // Configuração do gráfico de área
  var ctx = document.getElementById('myAreaChart').getContext('2d');
  var myAreaChart = new Chart(ctx, {
      type: 'line', // Tipo de gráfico (line chart será convertido em area chart)
      data: {
          labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
          datasets: [{
              label: 'Entregas',
              data: [10,7,12,14,18,22,8],
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de preenchimento
              borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
              borderWidth: 1,
              fill: true // Define que a área deve ser preenchida
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });