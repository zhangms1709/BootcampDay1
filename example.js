let array = ["https://media.wired.com/photos/5f2d7c2191d87e6680b80936/4:3/w_2132,h_1599,c_limit/Science_climatedesk_453801484.jpg", "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg", "https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2020/08/1140-panda-smithsonian.imgcache.rev.web.900.513.jpg", "https://i.imgur.com/Pa94msC.jpg"];

let index = 0;

function getImage(){
  index++;
  if(index > 3) {
    index = 0;
  }
  return array[index];
 }

function handleClick(){
  document.getElementById("curr").src = getImage();
}