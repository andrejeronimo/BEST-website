/* Initialize i18next */
i18n.init({
    fallbackLng: 'pt-PT' //fallback quando não definir linguagem
    ,debug: true //debug do plugin
    ,fixLng: true //preserva o cookie quando a linguagem for definida
    ,load: 'current' //define a forma correta de declarar linguagens
  },
  
  function(translation) {
    $('[data-i18n]').i18n();
  });

$(document).ready( function() {

    /* Initialize languages dropdown */
    $('#languages-dropdown').flagStrap({
        countries: {
            "PT": "Portuguese",
            "GB": "English",
        }
    });

    /* Languages dropdown on change event */
    $("#languages-dropdown").change( function() {
        var language = $("#languages-dropdown option:selected").text();

        if(language.toLowerCase() === "portuguese") {
            i18n.setLng('pt-PT', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        } else if (language.toLowerCase() === "english") {
            i18n.setLng('en-US', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        }
    });

    /* Select language in dropdown list */


});