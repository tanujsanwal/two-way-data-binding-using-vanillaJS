var dataValue = {};
(function () {
    var classes = [];
    var i =0;
    var ans = [];

    //  collecting all the class name which are given inside the element dataBind, and doing the two way data bind on them.

    while (document.getElementsByTagName("dataBind")[i]) {
       classes.push(document.getElementsByTagName("dataBind")[i].className);
       i++;
    }
    
    var attachEvent = function (classNames) {
        classNames.forEach(function (className) {
            var elements = document.getElementsByClassName(className);
          
            for (var index in elements) {
                elements[index].onkeyup = function () {
                    for (var index in elements) {
                         // elements[index].value = this.value;
                          elements[index].innerHTML = this.value;
                    }   
                }
            }
        
            Object.defineProperty(dataValue, className, {
                set: function (newValue) {
                    for (var index in elements) {
                          //elements[index].value = newValue;
                          elements[index].innerHTML = newValue;            
                    }
                }
            });
        });
    };
    attachEvent(classes);
})();