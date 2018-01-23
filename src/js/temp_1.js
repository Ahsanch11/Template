// Below line no longer needed as webpack global Provideplugin is used for jquery
// import $ from 'jquery';

// below if we require bootstrap.js
import 'bootstrap';

//// Below for css files which will be bundled to styles.css
import '../css/styles.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import a2 from './temp_2'; //import/export only work at top level
$(document).ready(function(){
    
    var a1 = require('./temp_2.js');
    console.log('....loading');
    console.log('Template for Project weorkflow');
    console.log(a1.a,'< is imported from 2nd module');
    console.log(a2);
    var res = "<br>Template for Project weorkflow via JS"
    $('h1').append(res);
  
});


