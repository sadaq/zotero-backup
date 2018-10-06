function openLinkWithTranslation(culture) {
    var url = $('[data-custom-language-selector="' + culture + '"]').val();
    if (url == null) {
        url = "/" + culture;
    }
    window.location = url;
}

(function ($) {
    $(function () {
        var detailItemCultures = [];

        $('input[data-custom-language-selector]').each(function (i, e) {
            var culture = $(e.attributes[0]).val();
            $('a[data-available-culture]').each(function (index, element) {
                var currentCulture = $(element.attributes[0]).val();
                if (currentCulture == culture) {
                    $(element).css('display', 'inline-block');
                }


            });
           
        })

        if ($("a[data-available-culture][class=' details']").length > 0) {

            $("a[data-available-culture][class=' header']").each(function (index, element) {
                var currentHeaderCulture = $(element.attributes[0]).val();

                var cultureExists = false;

                $("a[data-available-culture][class=' details']").each(function (i, e) {
                    var currentDetailsCulture = $(e.attributes[0]).val();

                    if (currentDetailsCulture == currentHeaderCulture) {

                        if (e.style.display != "none")
                            cultureExists = true;
                    }  
                });

                if (!cultureExists)
                    $(element).addClass("disabled");
            });
        }

    });
}(jQuery));