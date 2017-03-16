/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mostrarGrafica(){
    
    var max = parseInt($('#nElementos').val());
    var i;
    var data = [];
    var labels = [];
    for(i=0; i<max; i++ ){
        var elemento = '#elemento_'+i;
        var valor = '#valor_'+i;
        data.push(parseFloat($(valor).val()));
        var dato = parseFloat($(valor).val()).toFixed(2);        
        labels.push($(elemento).val()+', '+ dato + '%');
    }

    new RGraph.SVG.Pie({
        id: 'chart-container',
        data: data,
        options: {
            labels: labels,
            tooltips: labels,
            colors: ['#EC0033','#A0D300','#FFCD00','#00B869','#999999','#FF7300','#004CB0'],
            strokestyle: 'white',
            linewidth: 2,
            shadow: true,
            shadowOffsetx: 2,
            shadowOffsety: 2,
            shadowBlur: 3,
            exploded: 7
        }
    }).roundRobin();
}


// .toFixed(2)

