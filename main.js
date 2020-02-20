window.onload = () => {  
'use strict';     
if ('serviceWorker' in navigator) { //alert('asdasd')    
navigator.serviceWorker  
.register('./sw.js'); 
} 
}