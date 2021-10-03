(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-15ed348f-e784-4586-9a9a-3a08c23e9eb3 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-464ffa75-0632-4441-beee-dc8c8f7ecfe4 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-464ffa75-0632-4441-beee-dc8c8f7ecfe4 #s-Panel_1 .layoutWrapper:first").overscroll({ showThumbs:false, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);