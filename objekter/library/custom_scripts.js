function replace_letters(){return replaced_string}function footer(){$(".container, .container-fluid").append("<div class='col-xs-12 vuc_footer'><h2>Digitale læringsmaterialer på voksenuddannelser</h2><h6 class='footerText'>Udviklet af et produktionsfællesskab mellem otte VUC’er til anvendelse på de deltagende skoler: <br/> Hf og VUC Nordsjælland, VUC Hvidovre-Amager, VUC Roskilde, VUC Vestegnen, VUF, VUC Storstrøm, VUC Aarhus og Københavns VUC (KVUC).</h6> <h6 class='footerCopywrite'> Copyright 2015 </h6></div >")}function embedlink(e){function t(e){console.log("clickede på noget"),$(".embedtext").val(o[e])}var n;n=String(window.location).split("/",3).join("/").replace("http","https"),console.log("embedlink - UrlVarStr: "+n);var a=e.parent().parent().find("a").eq(0).attr("href").replace("../../../","");console.log("embedlink - HrefObj: "+a);var i='<iframe height="570" width="820" src="'+n+"/pf_kem2015/"+a+'"></iframe>',r='<embed height="670" width="970" src="'+n+"/pf_kem2015/"+a+'"></embed>',o=[r,i],s="<div class='embedToggle'><p>Indsæt dette link i dit LMS eller på din webside</p><div class='tabcontainer'><div class='tab_1 tab activetab'>Fronter(embed)</div><div class='tab_2 tab'>Moodle(iframe)</div></div><div class='togglecontainer'><input class='embedtext' type='text' value='"+o[0]+"'></input><a class='MetaDataLink' href='https://www.youtube.com/watch?v=vjh6z6EACqQ'>Hjælp til indlejring (embedding) </a></div></div>";e.parent().parent().find(".embedToggle").length>0?$(".embedToggle").slideUp(150,function(){$(".embedToggle").remove()}):$(".embedToggle").length>0?$(".embedToggle").slideUp(150,function(){$(".embedToggle").remove(),e.parent().parent().append(s),$(".embedToggle").slideUp(0),$(".embedToggle").slideDown("slow"),$(".tab").click(function(){var e=$(this).index();$(".tab").removeClass("activetab"),$(this).addClass("activetab"),t(e)})}):(e.parent().parent().append(s),$(".embedToggle").slideUp(0),$(".embedToggle").slideDown("slow"),$(".tab").click(function(){var e=$(this).index();$(".tab").removeClass("activetab"),$(this).addClass("activetab"),t(e)})),$(".embedtext").click(function(){$(this).select()})}function MarkCertainCharactersAsSpecial(e,t,n,a){for(var i in e)$(e[i]).each(function(e,i){for(var r in t){var o=$(i).text();-1!==o.indexOf(t[r])&&$(i).html(o.replace(t[r],a+t[r]+a))}for(var r in t){var s=n.length==t.length?n[r]:n[0],o=$(i).text();-1!==o.indexOf(t[r])&&$(i).html(o.replace(a+t[r]+a,'<span class="'+s+'">'+t[r]+"</span>"))}})}function UserMsgBox(e,t){var n="<div class = 'MsgBox_bgr'><div id='UserMsgBox'>";n+='<span class="CloseClass right glyphicon glyphicon-remove"></span><span class="clear"></span>',n+=t,n+="</div> </div>",$(e).prepend(n),$(".MsgBox_bgr").fadeIn("slow"),$(".MsgBox_bgr").click(function(){$(".MsgBox_bgr").fadeOut(200,function(){$(this).remove()})})}function LatexEnclosedPramToHtml(e,t){var n=0,a=0,i="",r=0;do{if(n=e.indexOf(t+"{",a),-1!==n){if(a=e.indexOf("}",n+2),-1===a){alert("Fejl i LaTex udtryk:\nStart-tuborg-parentes "+String(n)+" tegn inde i LaTex-udtrykket har ikke en slut-tuborg-parentes!");break}i=e.substring(n+2,a),e=e.substring(0,n)+("^"==t?"<sup>"+i+"</sup>":"<sub>"+i+"</sub>")+e.substring(a+1)}++r}while(-1!==n&&100>r);return e}function LatexPramToHtml(e,t){var n=0,a="",i=0;do n=e.indexOf(t),-1!==n&&(a=e.substring(n+1,n+2),e=e.substring(0,n)+("^"==t?"<sup>"+a+"</sup>":"<sub>"+a+"</sub>")+e.substring(n+2)),++i;while(-1!==n&&100>i);return e}function ChemLatexToHtml(e){return e=LatexEnclosedPramToHtml(e,"_"),e=LatexEnclosedPramToHtml(e,"^"),e=LatexPramToHtml(e,"_"),e=LatexPramToHtml(e,"^")}function shuffle_Array(e){for(var t,n,a=e.length;a;t=Math.floor(Math.random()*a),n=e[--a],e[a]=e[t],e[t]=n);return e}$.fn.shuffle_div_position=function(){var e=this.get(),t=function(e){return Math.floor(Math.random()*e)},n=$.map(e,function(){var n=t(e.length),a=$(e[n]).clone(!0)[0];return e.splice(n,1),a});return this.each(function(e){$(this).replaceWith($(n[e]))}),$(n)},$(document).ready(function(){var e=window.location!=window.parent.location;e&&$("h1").append("<a class='new_window_link' href='"+window.location.href+"' target='_blank'><span class='glyphicon glyphicon-new-window'></span>Åbn i nyt vindue</a>")});