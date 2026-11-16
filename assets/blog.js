// Blog pages: PT/EN toggle (same saved choice as index.html), click-to-load YouTube player, tag filter on /blog/.
(function(){
  var root=document.documentElement;
  function setLang(l){
    root.setAttribute("data-lang",l);root.setAttribute("lang",l==="pt"?"pt-BR":"en");
    document.getElementById("lang-toggle").textContent=l==="pt"?"EN":"PT";
    try{localStorage.setItem("mpb-lang",l)}catch(e){}
  }
  document.getElementById("lang-toggle").addEventListener("click",function(){setLang(root.getAttribute("data-lang")==="pt"?"en":"pt")});
  var saved=null;try{saved=localStorage.getItem("mpb-lang")}catch(e){}
  setLang(saved==="en"?"en":"pt");

  // the video loads only when clicked (youtube-nocookie), like the Lógica Eco player on the home page
  var sandboxed=location.protocol==="file:";
  Array.prototype.forEach.call(document.querySelectorAll(".player"),function(v){
    v.addEventListener("click",function(e){
      if(sandboxed)return; e.preventDefault();
      var id=v.getAttribute("data-yt"),list=v.getAttribute("data-list");
      var src=id?"https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1"+(list?"&list="+list:""):"https://www.youtube-nocookie.com/embed/videoseries?list="+list+"&autoplay=1";
      v.innerHTML='<iframe src="'+src+'" title="YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    });
  });

  var chips=document.getElementById("blog-chips");
  if(chips){
    var cards=document.querySelectorAll("#blog-list .bcard");
    function apply(t){
      Array.prototype.forEach.call(chips.querySelectorAll(".chip"),function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-t")===t))});
      Array.prototype.forEach.call(cards,function(c){c.style.display=!t||(" "+c.getAttribute("data-tags")+" ").indexOf(" "+t+" ")>=0?"":"none"});
    }
    chips.addEventListener("click",function(e){var b=e.target.closest("[data-t]");if(b)apply(b.getAttribute("data-t"))});
    var m=/[?&]tag=([^&]+)/.exec(location.search);
    if(m&&chips.querySelector('[data-t="'+decodeURIComponent(m[1]).replace(/"/g,"")+'"]'))apply(decodeURIComponent(m[1]));
  }
})();
