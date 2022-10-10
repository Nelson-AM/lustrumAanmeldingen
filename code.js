const config = {
  type: 'pie',
  data: data,
};

const data = {
  labels: [
    'Leden',
    'Reunisten'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [34, 31],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
};
