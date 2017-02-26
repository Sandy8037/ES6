(function () {
'use strict';

var a = {
  fname: 'Sandy',
  lname: 'Devarapalli'

};

for (var i in a) {
  if (a.hasOwnProperty(i)) {
    console.log(a[i]);
  }
}

})();
