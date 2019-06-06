//TASK 2
//AJAX REQUEST

window.onload = function() {
    let httpRequest;
    createAjaxRequest();

    function createAjaxRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            console.log("Can't create a request.");
            return false;
        }
        httpRequest.onreadystatechange = content;
        httpRequest.open('GET', '/json');
        httpRequest.send();
    }

    function content() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.responseText);
                // console.log(response);
               let q = findLabel(4,response); // not working properly :c
                console.log("--------------------------------");
                console.log(q);
                console.log("--------------------------------");
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
    function findLabel(nodeId,obj) {
        console.log('obj.label ' + obj.label + " Obj Id : " + obj.id);
        let objChildNodesCount = obj.ChildNodes.length;
        if(obj.id === nodeId){
            return obj.label;
        }
        else if (objChildNodesCount > 0) {
            console.log(objChildNodesCount + " OBJ count...");
           return findLabel(nodeId,obj.ChildNodes[objChildNodesCount-1]);
        }
    }
};
