var img_container = document.getElementById("img-container")
var folder_path = "images/"

function clickHandler(obj) {
    console.log(obj)
    var pg_id = obj.id
    fillImage(pg_id)
}

function fillImage(pg_id) {
    var img_path = folder_path + pg_id + "/"
    // clear all img
    while(img_container.hasChildNodes()) {
        img_container.removeChild(img_container.lastChild)
    }
    for (var i = 1; i <= 13; i++) {
        var path = img_path + i + ".jpg"
        var img = document.createElement("img")
        img.setAttribute("src", path)
        img.setAttribute("height", 158)
        var anchor = document.createElement("a")
        anchor.setAttribute("href", path)
        anchor.setAttribute("class", "thickbox")
        anchor.setAttribute("rel", "gallery-plants")
        anchor.setAttribute("title", " ")
        anchor.appendChild(img)
        img_container.appendChild(anchor)
        
        // console.log(img_container)
    }
    tb_init('a.thickbox, area.thickbox, input.thickbox');
}


// fillImage("pg-1")

// Find all ul 
$(".menu-section").each(function(index, element) {
    var list = element.children
    for (var i = 0; i < list.length; i++) {
        if(list[i].className != "section-title") {
            var temp_text = list[i].innerHTML
            var temp_a = document.createElement("a")
            list[i].innerHTML = ""
            temp_a.innerHTML = temp_text
            temp_a.setAttribute("id", list[i].id)
            // temp_a.setAttribute("onclick", "clickHandler(this)")
            temp_a.addEventListener("click", function() {
                console.log(this)
                fillImage(this.id)
            })
            list[i].appendChild(temp_a)
            
        }
    }
});