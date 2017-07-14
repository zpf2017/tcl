
	if(/Android (\d+\.\d+)/.test(navigator.userAgent)){

		var version = parseFloat(RegExp.$1);
		if(version>2.3){
			var phoneScale = parseInt(window.screen.width)/750;
			document.write('<meta name="viewport" content="width=750, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
		}
		else{
			document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
		}
	}
	else{
		var sUserAgent= navigator.userAgent.toLowerCase();
		var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";

		if(bIsIphoneOs)
		{
			//苹果手机
			document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
		}
		else{
			//苹果平板
			document.write('<meta name="viewport" content="width=750,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">');
		}

	}
