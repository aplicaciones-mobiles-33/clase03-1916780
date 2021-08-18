let imagenes = []
for (i = 1; i <= 12; i++) {
    imagenes.push("Post " + i + ".png")
}
let avatar = "imagenes/avatar.jpg"
function cambiarAvatar() {
    let avatarImg = document.getElementById("avatar")
    avatarImg.src = avatar;
    console.log(avatarImg);
    console.log(imagenes);
}
cambiarAvatar();
function cambiarPosts() {
    let postsImg = document.getElementsByClassName("post");
    console.log(postsImg)
    for (i = 0; i < 12; i++) {
        postsImg[i].src = "imagenes/" + imagenes[i];
    }
}
cambiarPosts();