 

  let afstand = document.getElementById('afstand');

                        let vooraad = document.getElementById('vooraad');

                        let snelheid = document.getElementById('sneheid');

                        let barchart1 = new Chart(afstand, {
                            type:'line', 
                            data:{
                                labels:['1', '2', '3', '4', '5', '6','7'],
                                datasets:[{
                                label:'% to Mars',
                                fillColor: "rgba(220,220,220,0.5)", 
                                data:[
                                9,
                                21,
                                34,
                                32,
                                59,
                                87,
                                100
                                ],
                                backgroundColor: ["#005288"],
                                scaleOverride : true,
                                scaleSteps : 100,
                                scaleStepWidth : 1,
                                scaleStartValue : 0 ,
                            }]
                            },
                            options:{
                                scales: {
                                    yAxes:[{
                                        stacked: true,
                                        gridLines: {
                                            display: false
                                        },
                                          ticks: {
                                            min: 0,
                                            max: 100,
                                          }
                                    }],
                                    xAxes:[{
                                        gridLines: {
                                            display: false
                                        },
                                         scaleLabel: {
                                            display: true,
                                            labelString: 'Weeks'
                                        }
                                    }]
                                }
                            }
                        })

                        let barchart2 = new Chart(vooraad, {
                            type:'bar', 
                            data:{
                                labels:['% Fuel', '% Food' , '% Water'],
                                datasets:[{
                                data:[
                                40,
                                80,
                                12
                                ],
                                backgroundColor: ["#800000", "#D2691E","blue"],
                                scaleOverride : true,
                                scaleSteps : 100,
                                scaleStepWidth : 1,
                                scaleStartValue : 0 ,
                            }]
                            },
                            options:{
                                scales: {
                                    yAxes:[{
                                        stacked: true,
                                        gridLines: {
                                            display: false
                                        },
                                          ticks: {
                                            min: 0,
                                            max: 100,
                                          }
                                    }]
                                },
                                 legend: {
                                      display: false,
                                }
                            }
                        })


                            let barchart3 = new Chart(snelheid,{
                            type:'doughnut', 
                            data:{
                                labels:['Speed',],
                                datasets:[{
                                label:'Speed KM/S', 
                                data:[
                                11,
                                0.1,
                                8
                                ],
                                backgroundColor: ["#005288", "black", "lightgrey"],
                                scaleOverride : true,
                                scaleSteps : 20,
                                scaleStepWidth : 1,
                                scaleStartValue : 0 ,
                                borderColor: ["#005288", "black", "lightgrey"],
                            }]
                            },
                            options:{
                                scales: {
                                    yAxes:[{
                                        gridLines: {
                                            display: false,
                                        },
                                        display: false
                                    }]
                                },
                                cutoutPercentage: 50,
                                rotation: -3.1415926535898,
                                circumference: 3.1415926535898,
                                legend: {
                                    display: false
                                },
                                layout: {
                                            padding: {
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0
                                            }
                                        },
                                tooltips: {
                                    enabled: false
                                },
                                title: {
                                    display: true,
                                    text: '11 KM/S',
                                    position: "bottom",
                                    fontSize: 40
                                }
                            }
                        })