function project() {
  document.getElementById('project-dzaky').style.display = 'block';
  document.getElementById('academic-dzaky').style.display = 'none';
  document.getElementById('competition-dzaky').style.display = 'none';
  document.getElementById('community-dzaky').style.display = 'none';
}

function academic() {
  document.getElementById('project-dzaky').style.display = 'none';
  document.getElementById('academic-dzaky').style.display = 'block';
  document.getElementById('competition-dzaky').style.display = 'none';
  document.getElementById('community-dzaky').style.display = 'none';
}

function competition() {
  document.getElementById('project-dzaky').style.display = 'none';
  document.getElementById('academic-dzaky').style.display = 'none';
  document.getElementById('competition-dzaky').style.display = 'block';
  document.getElementById('community-dzaky').style.display = 'none';
}

function community() {
  document.getElementById('project-dzaky').style.display = 'none';
  document.getElementById('academic-dzaky').style.display = 'none';
  document.getElementById('competition-dzaky').style.display = 'none';
  document.getElementById('community-dzaky').style.display = 'block';
}

// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.myFirstNav').addClass("sticky");
//         }else{
//             $('.myFirstNav').removeClass("sticky");
//         }
