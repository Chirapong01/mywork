

let seleteCate = document.getElementById('s2');


function toggleFormValue(number, value) {
    console.log(value);
    if (seleteCate.hasAttribute('disabled')) {
        seleteCate.removeAttribute('disabled')
    }
    if (value == '0-6M+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option>
        <option value="Baby">Baby</option>
         `  ;
    }
    if (value=='6M+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option>
        <option value="Baby">Baby</option>
        <option value="PlanHome">PlanHome</option>
        <option value="Push &amp; Pull">Push &amp; Pull</option>
         <option value="Water Play">Water Play</option>
        `  ;
    }
    if (value=='12M+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option> 
        <option value="Active Play">Active Play</option>
        <option value="Baby">Baby</option>
        <option value="Games &amp; Puzzles">Games &amp; Puzzles</option>
        <option value="Learning &amp; Education">Learning &amp; Education</option>
        <option value="Music">Music</option>
        <option value="Pretend Play">Pretend Play</option>
        <option value="Push &amp; Pull">Push &amp; Pull</option>
        <option value="Water Play">Water Play</option>
        `  ;
    }
    if (value=='18M+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option>     
        <option value="Active Play">Active Play</option>
        <option value="Blocks &amp; Construction">Blocks &amp; Construction</option>
        <option value="Games &amp; Puzzles">Games &amp; Puzzles</option>
        <option value="Learning &amp; Education">Learning &amp; Education</option>
        <option value="Music">Music</option>
        <option value="Pretend Play">Pretend Play</option>
        <option value="Push &amp; Pull">Push &amp; Pull</option>
        <option value="Water Play">Water Play</option>
        `  ;
    }
    if (value == '2Yrs+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option>        
        <option value="Active Play">Active Play</option>  
        <option value="Blocks &amp; Construction">Blocks &amp; Construction</option>
        <option value="Games &amp; Puzzles">Games &amp; Puzzles</option>
        <option value="Learning &amp; Education">Learning &amp; Education</option>       
        <option value="Pretend Play">Pretend Play</option>       
        <option value="Water Play">Water Play</option>
        `  ;
    }
    if (value == '3Yrs+') {
        seleteCate.innerHTML = `
        <option value="">-- Select --</option>           
        <option value="Active Play">Active Play</option>            
        <option value="Blocks &amp; Construction">Blocks &amp; Construction</option>       
        <option value="Games &amp; Puzzles">Games &amp; Puzzles</option>       
        <option value="Learning &amp; Education">Learning &amp; Education</option>        
        <option value="Music">Music</option>      
        <option value="PlanHome">PlanHome</option>      
        <option value="Pretend Play">Pretend Play</option>    
        <option value="Water Play">Water Play</option> 
        `  ;
    }
}



