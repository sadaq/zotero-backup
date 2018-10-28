_satellite.pushBlockingScript(function(event, target, $variables){
  $(function(){
  require(["webmd.gdpr/1/webmd.gdpr"], function(webmd_gdpr) {
    webmd_gdpr.init({
      policyUrl: 'https://www{lifecycle}{env}.medicinenet.com/script/main/art.asp?articlekey=12507',
      policyContentSelector: '#article-wrapper'
    });
  });
});
});
