const API_CANTIDAD_RELIGION = "http://localhost:8080/api/recuperacion/Readcantidadclienteregion"

var ctx = document.getElementById('myChartReadcantidadclienteregion')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Cantidad por Religion',
            backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6'],
            borderWidth: 1
        }]
    },
    options: {
        // indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
})

axios.get(API_CANTIDAD_RELIGION).then( response => loadData(response.data))
.catch (error => console.log(error))

console.log(myChart);
const loadData = (response_data_religion) => {
    
    response_data_religion.forEach(element => {
        myChart.data['labels'].push(element.region)
        myChart.data['datasets'][0].data.push(element.cantidad)
        myChart.update()
    });

}