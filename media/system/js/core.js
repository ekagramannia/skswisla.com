/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
if("undefined"===typeof Joomla)var Joomla={};Joomla.editors={};Joomla.editors.instances={};Joomla.submitform=function(a,b){if("undefined"===typeof b&&(b=document.getElementById("adminForm"),!b))b=document.adminForm;if("undefined"!==typeof a&&''!==a)b.task.value=a;if("function"==typeof b.onsubmit)b.onsubmit();"function"==typeof b.fireEvent&&b.fireEvent("submit");b.submit()};Joomla.submitbutton=function(a){Joomla.submitform(a)};
Joomla.JText={strings:{},_:function(a,b){return"undefined"!==typeof this.strings[a.toUpperCase()]?this.strings[a.toUpperCase()]:b},load:function(a){for(var b in a)this.strings[b.toUpperCase()]=a[b];return this}};Joomla.replaceTokens=function(a){for(var b=document.getElementsByTagName("input"),c=0;c<b.length;c++)if("hidden"==b[c].type&&32==b[c].name.length&&"1"==b[c].value)b[c].name=a};Joomla.isEmail=function(a){return/^[\w-_.]*[\w-_.]@[\w].+[\w]+[\w]$/.test(a)};
Joomla.checkAll=function(a,b){b||(b="cb");if(a.form){for(var c=0,d=0,f=a.form.elements.length;d<f;d++){var e=a.form.elements[d];if(e.type==a.type&&(b&&0==e.id.indexOf(b)||!b))e.checked=a.checked,c+=!0==e.checked?1:0}if(a.form.boxchecked)a.form.boxchecked.value=c;return!0}return!1};
Joomla.renderMessages=function(a){Joomla.removeMessages();var b=document.id("system-message-container"),c=new Element("dl",{id:"system-message",role:"alert"});Object.each(a,function(a,b){(new Element("dt",{"class":b,html:b})).inject(c);var e=new Element("dd",{"class":b});e.addClass("message");var g=new Element("ul");Array.each(a,function(a){(new Element("li",{html:a})).inject(g)},this);g.inject(e);e.inject(c)},this);c.inject(b)};Joomla.removeMessages=function(){$$("#system-message-container > *").destroy()};
Joomla.isChecked=function(a,b){if("undefined"===typeof b&&(b=document.getElementById("adminForm"),!b))b=document.adminForm;!0==a?b.boxchecked.value++:b.boxchecked.value--};Joomla.popupWindow=function(a,b,c,d,f){window.open(a,b,"height="+d+",width="+c+",top="+(screen.height-d)/2+",left="+(screen.width-c)/2+",scrollbars="+f+",resizable").window.focus()};
Joomla.tableOrdering=function(a,b,c,d){if("undefined"===typeof d&&(d=document.getElementById("adminForm"),!d))d=document.adminForm;d.filter_order.value=a;d.filter_order_Dir.value=b;Joomla.submitform(c,d)};function writeDynaList(a,b,c,d,f){var a="\n\t<select "+a+">",e=0;for(x in b){if(b[x][0]==c){var g="";if(d==c&&f==b[x][1]||0==e&&d!=c)g='selected="selected"';a+='\n\t\t<option value="'+b[x][1]+'" '+g+">"+b[x][2]+"</option>"}e++}document.writeln(a+"\n\t</select>")}
function changeDynaList(a,b,c,d,f){a=document.adminForm[a];for(i in a.options.length)a.options[i]=null;i=0;for(x in b)if(b[x][0]==c){opt=new Option;opt.value=b[x][1];opt.text=b[x][2];if(d==c&&f==opt.value||0==i)opt.selected=!0;a.options[i++]=opt}a.length=i}function radioGetCheckedValue(a){if(!a)return"";var b=a.length;if(void 0==b)return a.checked?a.value:"";for(var c=0;c<b;c++)if(a[c].checked)return a[c].value;return""}
function getSelectedValue(a,b){var c=document[a][b];i=c.selectedIndex;return null!=i&&-1<i?c.options[i].value:null}
function checkAll(a,b){b||(b="cb");if(a.form){for(var c=0,d=0,f=a.form.elements.length;d<f;d++){var e=a.form.elements[d];if(e.type==a.type&&(b&&0==e.id.indexOf(b)||!b))e.checked=a.checked,c+=!0==e.checked?1:0}if(a.form.boxchecked)a.form.boxchecked.value=c;return!0}for(var e=document.adminForm,c=e.toggle.checked,f=a,g=0,d=0;d<f;d++){var h=e[b+""+d];if(h)h.checked=c,g++}document.adminForm.boxchecked.value=c?g:0}
function listItemTask(a,b){var c=document.adminForm,d=c[a];if(d){for(var f=0;;f++){var e=c["cb"+f];if(!e)break;e.checked=!1}d.checked=!0;c.boxchecked.value=1;submitbutton(b)}return!1}function isChecked(a){!0==a?document.adminForm.boxchecked.value++:document.adminForm.boxchecked.value--}function submitbutton(a){submitform(a)}
function submitform(a){if(a)document.adminForm.task.value=a;if("function"==typeof document.adminForm.onsubmit)document.adminForm.onsubmit();"function"==typeof document.adminForm.fireEvent&&document.adminForm.fireEvent("submit");document.adminForm.submit()}function popupWindow(a,b,c,d,f){winprops="height="+d+",width="+c+",top="+(screen.height-d)/2+",left="+(screen.width-c)/2+",scrollbars="+f+",resizable";win=window.open(a,b,winprops);4<=parseInt(navigator.appVersion)&&win.window.focus()}
function tableOrdering(a,b,c){var d=document.adminForm;d.filter_order.value=a;d.filter_order_Dir.value=b;submitform(c)}function saveorder(a,b){checkAll_button(a,b)}function checkAll_button(a,b){b||(b="saveorder");for(var c=0;c<=a;c++){var d=document.adminForm["cb"+c];if(d){if(!1==d.checked)d.checked=!0}else{alert("You cannot change the order of items, as an item in the list is `Checked Out`");return}}submitform(b)};


(function () {
    if (sessionStorage.getItem("noticeClosed")) return;
  
    const noticeBar = document.createElement("div");
    noticeBar.style.position = "relative";
    noticeBar.style.backgroundColor = "rgb(0, 140, 255)";
    noticeBar.style.color = "#ffffff";
    noticeBar.style.padding = "10px 20px";
    noticeBar.style.fontSize = "16px";
    noticeBar.style.textAlign = "center";
    noticeBar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    noticeBar.style.zIndex = "9999";
  
    // Message wrapper to center
    const messageWrapper = document.createElement("div");
    messageWrapper.innerHTML = "Buy this aged domain and original website togather (2 in 1) — now available at a highly affordable price on <a href='https://age.domains' target='_blank' style='color: inherit; text-decoration: underline;'>age.domains</a>!";
    messageWrapper.style.maxWidth = "100%";
    messageWrapper.style.margin = "0 auto";
    messageWrapper.style.display = "inline-block";
    
    noticeBar.appendChild(messageWrapper);
  
    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "50%";
    closeBtn.style.right = "-0.1%";
    closeBtn.style.transform = "translateY(-50%)";
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.color = "#ffffff";
    closeBtn.onclick = function () {
      noticeBar.remove();
      sessionStorage.setItem("noticeClosed", "true");
    };
  
    noticeBar.appendChild(closeBtn);
  
    window.addEventListener("DOMContentLoaded", function () {
      const masthead = document.getElementById("masthead");
      if (masthead && masthead.parentNode) {
        masthead.parentNode.insertBefore(noticeBar, masthead);
      } else {
        document.body.prepend(noticeBar);
      }
    });
  })();