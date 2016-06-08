// Buscar contacto:
$(document).ready(function(){
    $('input#search').bind('keyup change', function () {
        if ($(this).val().trim().length !== 0) {
    
            $('#boxunico .cajilla').show().hide().each(function () {
                if ($(this).is(':icontains(' + $('input#search').val() + ')'))
                    $(this).show();
            });
        }
        else {
            $('#boxunico .cajilla').show().hide().each(function () {
                $(this).show();
            });
        }
    });

    $.expr[':'].icontains = function (obj, index, meta, stack) {
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
});