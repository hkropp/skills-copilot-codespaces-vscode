function skillsMember() {
    var member = document.getElementById("skills");
    var memberHeight = member.offsetTop;
    var memberHeight = memberHeight - 200;
    var memberHeight = memberHeight + "px";
    window.scrollTo(0, memberHeight);
}