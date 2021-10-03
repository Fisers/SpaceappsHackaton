(function(window, undefined) {
  var dictionary = {
    "15ed348f-e784-4586-9a9a-3a08c23e9eb3": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "464ffa75-0632-4441-beee-dc8c8f7ecfe4": "Screen 12",
    "c82f9e0d-113f-4bc3-8463-cb2840cfb2e0": "Template 1",
    "19d3c0dd-5444-4626-8d06-0053a74f95ca": "Template 1 imported",
    "f7aab96c-c8f8-40f1-867c-e7caa8822b9d": "default",
    "4e410455-5bc8-4439-8d9d-1aa347f305f6": "default imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);