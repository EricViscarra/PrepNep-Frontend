// function exportFiletest(){
//     alert("hello")
//     const originalData = "toast";
//     var a = document.createElement("a");
//     a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData,null,2)], {type:"text/plain"}));
//     a.setAttribute("download","data.txt");
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// }

function exportFilej(sets){
    var test = ""
    for(var i = 0; i < sets.length; i++){
        var temp = JSON.stringify(sets[i])
        var count = 3;
        var t = "";
        for(ii = 0; ii < temp.length+1; ii++){
            if(temp[ii] == "]"){
                temp = temp.substring(0,ii) + "" + temp.substring(ii+1);
                //for removing "]", it didn't delete otherwise.
                temp = temp.substring(0, temp.length - 1);  
            }
            if(temp[ii] == '"'){
                temp = temp.substring(0,ii) + "" + temp.substring(ii+1);
            }
            if(temp[ii] == ","){
                if(count == 3) t = "- time_set: "
                else if(count == 2) t = "- var_set: "
                else if(count == 1) t = "- level_set: "
                temp = temp.substring(0,ii) + "]\n" + t +"[" + temp.substring(ii+1);
                count-=1;
                //alert(temp);
            }
        }
        test += "\n\n" +  "output" + i + ":\n" + "- record_type: Outstream \n- grid_set: " + temp;
    }
    const originalData = test;
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([originalData], {type:"text/plain"}));
    a.setAttribute("download","data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}