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

function exportLevels(set){
    //alert(JSON.stringify(set[2]))
    var test = "";
    for(var i = 0; i < set.length; i++){
        var temp = JSON.stringify(set[i]["setName"])
        temp += ":\n - record_type: "  + JSON.stringify(set[i]["recordType"])
        temp += "\n - interval type: " + JSON.stringify(set[i]["intervalType"])
        if(JSON.stringify(set[i]["recordType"]) == JSON.stringify("pressure")){
            temp += "\n - pressures: " + JSON.stringify(set[i]["pressures"])
        }
        if(JSON.stringify(set[i]["recordType"]) == JSON.stringify("height")){
            temp += "\n - start: " + JSON.stringify(set[i]["start"])
            temp += "\n - step: "  + JSON.stringify(set[i]["step"])
            temp += "\n - last: "  + JSON.stringify(set[i]["last"])
        }
        test += temp + "\n \n";
    }
    for(var i = 0; i < test.length; i++){
        if(test[i] == '"'){
            test = test.substring(0,i) + "" + test.substring(i+1);
        }
        else if(test[i] == ','){
            test = test.substring(0,i) + " " + test.substring(i+1);
        }
    }
    return test;
}

function exportTime(set){
    var test = ""
    for(var i = 0; i < set.length; i++){
        var temp = JSON.stringify(set[i]["setName"])
        temp += ":\n - record_type: "  + JSON.stringify(set[i]["recordType"])
        temp += "\n - interval type: " + JSON.stringify(set[i]["intervalType"])
        temp += "\n - start: "         + JSON.stringify(set[i]["start"])
        temp += "\n - step: "          + JSON.stringify(set[i]["step"])
        temp += "\n - last: "          + JSON.stringify(set[i]["last"])
        temp += "\n - timescale: "     + JSON.stringify(set[i]["timescale"])
        test += temp + "\n \n"
    }
    for(var i = 0; i < test.length; i++){
        if(test[i] == '"'){
            test = test.substring(0,i) + "" + test.substring(i+1);
        }
    }
    return test;
}

function exportGrid(set){
    var test = ""
    for(var i = 0; i < set.length; i++){
        var temp = JSON.stringify(set[i]["setName"])
        temp += ":\n - record_type: " + JSON.stringify(set[i]["recordType"])
        temp += "\n - grid_type: "   + JSON.stringify(set[i]["gridType"])
        temp += "\n - spacing: "     + JSON.stringify(set[i]["spacing"])
        test +=  temp + "\n \n"
    }
    for(var i = 0; i < test.length; i++){
        if(test[i] == '"'){
            test = test.substring(0,i) + "" + test.substring(i+1);
        }
    }
    return test;
}

function exportVars(set){
    var test = ""
    for(var i = 0; i < set.length; i++){
        var temp = JSON.stringify(set[i]["setName"])
        temp += ":\n - record_type: " + JSON.stringify(set[i]["recordType"])
        temp += "\n - variables: "    + JSON.stringify(set[i]["variables"])
        test +=  temp + "\n \n"
    }
    for(var i = 0; i < test.length; i++){
        if(test[i] == '"'){
            test = test.substring(0,i) + "" + test.substring(i+1);
        }
        if(test[i] == ','){
            test = test.substring(0,i) + " " + test.substring(i+1);
        }
    }
    return test;
}

function exportOutput(setNames){
    var test = "";
    for(var i = 0; i < setNames.length; i++){
        var temp = JSON.stringify(setNames[i]["setName"])
        temp += ":\n - record_type: "  + JSON.stringify(setNames[i]["recordType"]) 
        temp += "\n - grid_set: ["    + JSON.stringify(setNames[i]["gridSet"]["setName"])
        temp += "] \n - time_set: [" + JSON.stringify(setNames[i]["timeSet"]["setName"])
        temp += "] \n - var_set: "    + JSON.stringify(setNames[i]["variableSet"]["setName"])
        temp += "\n - level_set: ["   + JSON.stringify(setNames[i]["levelSet"]["setName"]) + "] \n \n"
        test += temp;
        }
        for(var i = 0; i < test.length; i++){
            if(test[i] == '"'){
                test = test.substring(0,i) + "" + test.substring(i+1);
            }
        }
        return test;
    }

function exportFilej(sets, levelSets, variableSets, gridSets, timeSets){
    //alert(JSON.stringify(setNames[0]["levelSet"]["setName"]))
    var leveldata = exportLevels(levelSets);
    var timeData =  exportTime(timeSets);
    var gridData =  exportGrid(gridSets);
    var variableData =  exportVars(variableSets)
    var output = exportOutput(sets);
    var test = leveldata + timeData + gridData + variableData + output;
    alert(test);
    
    const originalData = test;
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([originalData], {type:"text/plain"}));
    a.setAttribute("download","data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}