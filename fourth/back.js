var nav_list = [
    "#MeshUi",
    "#MeshEdit",
    "#Extension"
];

function get_title(){
    return "GridEx Document";
}

function load_nav_bar(){
    for (var item of nav_list){
        var parent = document.getElementById("ul_nav_bar");

        var li = document.createElement("li");
        var a = document.createElement("a");

        a.className = "folder_button";

        a.text = item;
        a.href = item;

        parent.appendChild(li);
        li.appendChild(a);
    }
}

function on_pressed(){
    console.log("teste");
}

document.title = get_title();

load_nav_bar();