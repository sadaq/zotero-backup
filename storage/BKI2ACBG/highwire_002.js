/**
 * Highwire PDF extract image
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.highwirePDFExtractImage = {
    attach: function(context, settings) {
      $('img.pdf-extract-img', context).once('PDFExtractImage', function() {
        // Google asked to display pdf extract image popup bigger than normal size.
        // @see https://jira.highwire.org/browse/DRQUEST-767.
        var pdf_extract_path = $(this).data('pdf-extract-path');
        $(this).colorbox({
          open:true,
          inline:false,
          href:pdf_extract_path,
          opacity:0.5,
          innerWidth:"55%",
          scrolling: true,
          onComplete: function(){
           $('img.cboxPhoto').css({"width":"100%","height":"auto"});
          } 
        });
      });
    }
  };
})(jQuery);
