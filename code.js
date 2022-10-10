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
      'rgb(239, 146, 37)',
      'rgb(28, 28, 28)'
    ],
    hoverOffset: 4
  }]
};
