(function (size,image,url,alt) {
  var a = document.createElement('a');
  var img = document.createElement('img');
  a.href = url;
  img.src = image;
  img.alt = alt;

  a.style.position = 'fixed';
  a.style.bottom = 0;
  a.style.left = 0;
  a.style.backgroundColor = "white";
  a.style.height =  size;
  a.style.width = size;
  a.style.WebkitClipPath = "polygon(0 10%, 0 100%, 90% 100%)";
  a.style.clipPath = "polygon(0 10%, 0 100%, 90% 100%)";

  img.style.width = '60%';
  img.style.height = '60%';
  img.style.position = 'absolute';
  img.style.bottom = 0;
  img.style.left = 0;

  a.appendChild(img);
  document.documentElement.appendChild(a);

})("180px","https://bullg.it/media/vectors/bullgit-logo.svg","https://bullg.it","bullgit logo");
