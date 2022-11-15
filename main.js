
let teste;



$( document ).ready(function() {
    console.log('uhul');
    teste = $('#teste')
    mudaONomeDaPica();
});


function mudaONomeDaPica(){

$.ajax({
    url: "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json",
    success: function( result ) {
        teste[0].innerText=result.cand[0].pvap
    }
  });
}