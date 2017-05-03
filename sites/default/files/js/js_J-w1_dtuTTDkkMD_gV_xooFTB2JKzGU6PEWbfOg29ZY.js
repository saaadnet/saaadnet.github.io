Drupal.locale = { 'strings': {"":{"Please wait...":"\u0644\u0637\u0641\u0627 \u0686\u0646\u062f \u0644\u062d\u0638\u0647 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f","Page: ":"\u0635\u0641\u062d\u0647"}} };;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};;
(function($){Drupal.behaviors.pollanonHandleVoteView={attach:function(context){if(typeof PollAnon=='undefined'||!PollAnon.length){return}$('form.pollanon').fadeIn('fast');for(var i in PollAnon){var pollNid=PollAnon[i];cookieName='pa-'+pollNid;if($.cookie(cookieName)){$hiddenResults=$('.pollanon-poll-results.hidden[data-nid="'+pollNid+'"]');if($hiddenResults.length>0){$poll_form=$('#poll-view-voting-'+pollNid+' .vote-form');$('.choices > div[class!=title], .form-submit',$poll_form).hide();$hiddenResults.hide();$hiddenResults.removeClass('hidden');$hiddenResults.fadeIn('fast')}}else{ua=navigator.userAgent;uaI=Math.floor(ua.length/2);pollanonKey=ua?ua.substring(uaI,uaI+2)+ua.length:'';pollanonKey+='-'+new Date().getTime();$.cookie('pa-submit',pollanonKey,{path:'/'});$('form.pollanon input[name="pollanonkey"]',context).attr('value',pollanonKey)}}var msgInfo=$.cookie('pa-messages');var msg='';var formId='';if(msgInfo){msgInfo=unescape(msgInfo.replace(/\+/g," "));msgInfo=msgInfo.split('|');formId='#poll-view-voting-'+msgInfo[0];msg=msgInfo[1];$(formId).before('<div class="messages status">'+msg+'</div>');$.cookie('pa-messages',null,{path:'/'})}}}})(jQuery);;
