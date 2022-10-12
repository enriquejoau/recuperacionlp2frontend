const API_ORDENES_TERRITORIO = "http://localhost:8080/api/recuperacion/Readordenesporterritorio"

var ctx = document.getElementById('myChartReadordenesporterritorio')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Ordenes Territorio',
            backgroundColor: ['#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
            borderWidth: 1
        }]
    },
    options: {
        //indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
})

axios.get(API_ORDENES_TERRITORIO).then( response => loadData(response.data))
.catch (error => console.log(error))

console.log(myChart);
const loadData = (response_data_territorio) => {
    
    response_data_territorio.forEach(element => {
        myChart.data['labels'].push(element.Territorio)
        myChart.data['datasets'][0].data.push(element.orden)
        myChart.update()
    });

}