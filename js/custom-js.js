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

/* On document ready initialize some components */
$(document).ready( function() {   

    /* Initialize languages dropdown */
    if (i18n.options.lng.toLowerCase() === 'en-us') {
        $('#lang-dropdown').html("<img src='images/gb.png'> &nbsp; English &nbsp; <span class='caret'></span>");
    }
    setLanguageDropdownEvents();
});

/* Sets language dropdown events */
function setLanguageDropdownEvents() {

    // Portuguese
    $("#pt-lang").on('click', function() {

        // Set language
        i18n.setLng('pt-PT', {fixLng: true}, function(translation){
            $('[data-i18n]').i18n();
        });

        // Update dropdown selected option
        $('#lang-dropdown').html("<img src='images/pt.png'> &nbsp; Portuguese &nbsp; <span class='caret'></span>");
    });

    // English
    $("#en-lang").on('click', function() {

        // Set language
        i18n.setLng('en-US', {fixLng: true}, function(translation){
            $('[data-i18n]').i18n();
        });

        // Update dropdown selected option
        $('#lang-dropdown').html("<img src='images/gb.png'> &nbsp; English &nbsp; <span class='caret'></span>");
    });
}