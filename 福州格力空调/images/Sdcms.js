/*function killErrors() {return true;}
window.onerror = killErrors;*/

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var old='';
function menu(name)
{
	submenu=eval("submenu_"+name+".style");
	if(old!=submenu)
	{
		if(old!='')
		{
				old.display='none';
		}
		submenu.display='block';
		old=submenu;
	}
	else
	{
		submenu.display='none';
		old='';
	}
}

function DrawImage(ImgD,w,h){ 
	var image=new Image(); 
	image.src=ImgD.src; 
	if(image.width>0 && image.height>0){ 
		if(image.width/image.height>= w/h){ 
			if(image.width>w){
				ImgD.width=w; 
				ImgD.height=(image.height*w)/image.width; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
			//ImgD.alt= "点击查看"+image.width+"x"+image.height+"原始图片..."; 
		} 
		else{ 
			if(image.height>h){
				ImgD.height=h; 
				ImgD.width=(image.width*h)/image.height; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
			//ImgD.alt= "点击查看"+image.width+"x"+image.height+"原始图片..."; 
		} 
	}
}

function trim(s){return  s.replace(/(^\s*)|(\s*$)/g,  "");} 

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=$('#'+name+i);
		var con=$("#con_"+name+"_"+i);
		menu[0].className=i==cursel?"hover":"";
		con[0].style.display=i==cursel?"block":"none";
	}
}

function checksearch(the)
{  
	if (trim(the.key.value)=='')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
	if (trim(the.key.value)=='请输入关键字')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
}

function checkbook(the,id)
{  
	if (trim(the.t0.value)=='')
	{   
		$("#showmsg").html("标题不能为空");
		the.t0.focus();
		the.t0.value='';
		return false
	}
	if (trim(the.t1.value)=='')
	{  
		$("#showmsg").html("姓名不能为空");
		the.t1.focus();
		the.t1.value='';
		return false
	}
	if (trim(the.t2.value)=='')
	{   
		$("#showmsg").html("电话不能为空");
		the.t2.focus();
		the.t2.value='';
		return false
	}
	if (trim(the.t3.value)=='')
	{   
		$("#showmsg").html("邮箱不能为空");
		the.t3.focus();
		the.t3.value='';
		return false
	}
	if (trim(the.t3.value).search(/^[^\s@:"'<>,&]{2,}@[^\[\.]+\.[^\[]{2,}$/gi)<0)
	{   
		$("#showmsg").html("邮箱格式错误");
		the.t3.focus();
		the.t3.value='';
		return false
	}

	if (trim(the.t4.value)=='')
	{   
		$("#showmsg").html("内容不能为空");
		the.t4.focus();
		the.t4.value='';
		return false
	}
	if (trim(the.t6.value)=='')
	{   
		$("#showmsg").html("验证码不能为空");
		the.t6.focus();
		the.t6.value='';
		return false
	}
	var url,param;
	url="Inc/Ajax.Asp?Act=book";
	param="t0="+escape(trim(the.t0.value));
	param+="&t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(trim(the.t2.value));
	param+="&t3="+escape(trim(the.t3.value));
	param+="&t4="+escape(trim(the.t4.value));
	param+="&t5="+escape(id);
	param+="&t6="+escape(trim(the.t6.value));
	$('#showmsg').html("Loading");
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){$("#showmsg").html("程序错误");},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			the.t0.value='';
			the.t1.value='';
			the.t2.value='';
			the.t3.value='';
			the.t4.value='';
			the.t6.value='';
			//setTimeout("$('#showmsg')[0].style.display='none';","3000")
			}
		}
		
	});
	return false
}

function checkcomment(the,id,classid)
{  
	if (trim(the.t0.value)=='')
	{   
		alert("昵称不能为空");
		the.t0.focus();
		the.t0.value='';
		return false
	}
	if (trim(the.t1.value)=='')
	{  
		alert("内容不能为空");
		the.t1.focus();
		the.t1.value='';
		return false
	}
	if (trim(the.t2.value)=='')
	{  
		alert("验证码不能为空");
		the.t2.focus();
		the.t2.value='';
		return false
	}
	
	var url,param;
	url="Inc/Ajax.Asp?Act=comment&id="+id;
	param="t0="+escape(trim(the.t0.value));
	param+="&t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(trim(the.t2.value));
	param+="&t3="+escape(classid);
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){alert("程序错误");},
	success:function(t0)
	{
		alert(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			the.t0.value='';
			the.t1.value='';
			the.t2.value='';
			//setTimeout("$('#showmsg')[0].style.display='none';","3000")
			}
		}
		
	});
	return false
}

function checklogin(the)
{  
	if (trim(the.username.value)=='')
	{   alert('请输入用户名');
		the.username.focus();
		the.username.value='';
		return false
	}
	if (trim(the.password.value)=='')
	{   alert('请输入密码');
		the.password.focus();
		the.password.value='';
		return false
	}
	the.action='Inc/Ajax.Asp?act=login';
	the.submit();   

}


function checkreg(the)
{  
	if (trim(the.t0.value)=='')
	{   
		$("#showmsg").html("用户名不能为空");
		the.t0.focus();
		the.t0.value='';
		return false
	}
	if (trim(the.t1.value)=='')
	{  
		$("#showmsg").html("密码不能为空");
		the.t1.focus();
		the.t1.value='';
		return false
	}
	if (trim(the.t2.value)=='')
	{   
		$("#showmsg").html("姓名不能为空");
		the.t2.focus();
		the.t2.value='';
		return false
	}
	
	var temp=""; 
	for(var i=0;i<the.t3.length;i++) 
	{ 
	if(the.t3[i].checked) 
	temp+=the.t3[i].value; 
	}
	if (temp=="")
	{
		$("#showmsg").html("请选择性别");
		return false
	}
	
	if (trim(the.t5.value)=='')
	{   
		$("#showmsg").html("邮箱不能为空");
		the.t5.focus();
		the.t5.value='';
		return false
	}

	if (trim(the.t5.value).search(/^[^\s@:"'<>,&]{2,}@[^\[\.]+\.[^\[]{2,}$/gi)<0)
	{   
		$("#showmsg").html("邮箱格式错误");
		the.t5.focus();
		the.t5.value='';
		return false
	}
	the.subname.disabled=true
	
	var url,param;
	url="Inc/Ajax.Asp?Act=reg";
	param="t0="+escape(trim(the.t0.value));
	param+="&t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(trim(the.t2.value));
	param+="&t3="+escape(temp);
	param+="&t4="+escape(trim(the.t4.value));
	param+="&t5="+escape(trim(the.t5.value));
	param+="&t6="+escape(trim(the.t6.value));
	$('#showmsg').html("Loading");
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){$("#showmsg").html("程序错误");},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			setTimeout("location.href='Login.Asp'","3000")
			}
		}
		
	});
	return false
}

function checkedit(the)
{  

	if (trim(the.t1.value)=='')
	{  
		$("#showmsg").html("密码不能为空");
		the.t1.focus();
		the.t1.value='';
		return false
	}
	if (trim(the.t2.value)=='')
	{   
		$("#showmsg").html("姓名不能为空");
		the.t2.focus();
		the.t2.value='';
		return false
	}
	
	var temp=""; 
	for(var i=0;i<the.t3.length;i++) 
	{ 
	if(the.t3[i].checked) 
	temp+=the.t3[i].value; 
	}
	if (temp=="")
	{
		$("#showmsg").html("请选择性别");
		return false
	}
	
	if (trim(the.t5.value)=='')
	{   
		$("#showmsg").html("邮箱不能为空");
		the.t5.focus();
		the.t5.value='';
		return false
	}

	if (trim(the.t5.value).search(/^[^\s@:"'<>,&]{2,}@[^\[\.]+\.[^\[]{2,}$/gi)<0)
	{   
		$("#showmsg").html("邮箱格式错误");
		the.t5.focus();
		the.t5.value='';
		return false
	}
	the.subname.disabled=true
	
	var url,param;
	url="Inc/Ajax.Asp?Act=edit";
	param="t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(trim(the.t2.value));
	param+="&t3="+escape(temp);
	param+="&t4="+escape(trim(the.t4.value));
	param+="&t5="+escape(trim(the.t5.value));
	param+="&t6="+escape(trim(the.t6.value));
	$('#showmsg').html("Loading");
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){$("#showmsg").html("程序错误");},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			setTimeout("location.href='User.Asp'","3000")
			}
		}
		
	});
	return false
}


function checkvote(theform,t1)
{  
	var temp=""; 
	for(var i=0;i<theform.vote.length;i++) 
	{ 
	if(theform.vote[i].checked) 
	temp+=theform.vote[i].value+","; 
	}
	if(temp==""){
		alert("至少选择一个选项");
	return false
	}
	var param="";
	param="t0="+escape(temp);
	param+="&id="+escape(trim(theform.vote_id.value));
	$.ajax({
	type:"post",
	cache:false,
	url:"inc/ajax.asp?act=vote",
	data:param,
	timeout:50000,
	error:function(){alert("程序错误");},
	success:function(t0)
	{
		alert(t0.substring(1));
		if(t0.substring(0,1)==0){if(t1==1){window.location.href='?id='+theform.vote_id.value+'';}}
		}
	});
	return false
}

function checkorder(the)
{  
	if (trim(the.t0.value)=='')
	{   
		$("#showmsg").html("订购产品不能为空");
		the.t0.focus();
		the.t0.value='';
		return false
	}
	if (trim(the.t1.value)=='')
	{  
		$("#showmsg").html("姓名不能为空");
		the.t1.focus();
		the.t1.value='';
		return false
	}
	if (trim(the.t2.value)=='')
	{   
		$("#showmsg").html("电话不能为空");
		the.t2.focus();
		the.t2.value='';
		return false
	}
	if (trim(the.t3.value)=='')
	{   
		$("#showmsg").html("邮箱不能为空");
		the.t3.focus();
		the.t3.value='';
		return false
	}
	if (trim(the.t3.value).search(/^[^\s@:"'<>,&]{2,}@[^\[\.]+\.[^\[]{2,}$/gi)<0)
	{   
		$("#showmsg").html("邮箱格式错误");
		the.t3.focus();
		the.t3.value='';
		return false
	}
	if (trim(the.t5.value)=='')
	{   
		$("#showmsg").html("验证码不能为空");
		the.t5.focus();
		the.t5.value='';
		return false
	}
	var url,param;
	url="Inc/Ajax.Asp?Act=order";
	param="t0="+escape(trim(the.t0.value));
	param+="&t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(trim(the.t2.value));
	param+="&t3="+escape(trim(the.t3.value));
	param+="&t4="+escape(trim(the.t4.value));
	param+="&t5="+escape(trim(the.t5.value));
	$('#showmsg').html("Loading");
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){$("#showmsg").html("程序错误");},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			the.t0.value='';
			the.t1.value='';
			the.t2.value='';
			the.t3.value='';
			the.t4.value='';
			the.t5.value='';
			//setTimeout("$('#showmsg')[0].style.display='none';","3000")
			}
		}
		
	});
	return false
}

function checkresume(the,id)
{
	if (trim(the.t0.value)=='')
	{   
		alert("申请职位不能为空");
		the.t0.focus();
		return false
	}
	if (trim(the.t1.value)=='')
	{   
		alert("姓名不能为空");
		the.t1.focus();
		return false
	}
	var sex=""; 
	for(var i=0;i<the.t2.length;i++) 
	{ 
	if(the.t2[i].checked) 
	sex=the.t2[i].value; 
	}
	if (sex=="")
	{
		alert("请选择性别");
		return false
	}
	if (trim(the.t4.value)=='')
	{   
		alert("手机/电话不能为空");
		the.t4.focus();
		return false
	}
	if (trim(the.t6.value)=='')
	{   
		alert("学历不能为空");
		the.t6.focus();
		return false
	}

	if (trim(the.t8.value)=='')
	{   
		alert("邮箱不能为空");
		the.t8.focus();
		return false
	}

	if (trim(the.t8.value).search(/^[^\s@:"'<>,&]{2,}@[^\[\.]+\.[^\[]{2,}$/gi)<0)
	{   
		alert("邮箱格式错误");
		the.t8.focus();
		return false
	}
	if (trim(the.t10.value)=='')
	{   
		alert("工作经验不能为空");
		the.t10.focus();
		return false
	}
	if (trim(the.t11.value)=='')
	{   
		alert("自我评价不能为空");
		the.t11.focus();
		return false
	}
	if (trim(the.t12.value)=='')
	{   
		alert("验证码不能为空");
		the.t12.focus();
		return false
	}
	var url,param;
	url="Inc/Ajax.Asp?Act=resume";
	param="t0="+escape(trim(the.t0.value));
	param+="&t1="+escape(trim(the.t1.value));
	param+="&t2="+escape(sex);
	param+="&t3="+escape(trim(the.t3.value));
	param+="&t4="+escape(trim(the.t4.value));
	param+="&t5="+escape(trim(the.t5.value));
	param+="&t6="+escape(trim(the.t6.value));
	param+="&t7="+escape(trim(the.t7.value));
	param+="&t8="+escape(trim(the.t8.value));
	param+="&t9="+escape(trim(the.t9.value));
	param+="&t10="+escape(trim(the.t10.value));
	param+="&t11="+escape(trim(the.t11.value));
	param+="&t12="+escape(trim(the.t12.value));
	$.ajax({
	type:"post",
	cache:false,
	url:url,
	data:param,
	timeout:2000,
	error:function(){alert("程序错误");},
	success:function(t0)
	{
		alert(t0.substring(1));
		if(t0.substring(0,1)==1)
		{
			location.href="?id="+id;
			}
		}
		
	});
	return false
	
}

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
 
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }

}