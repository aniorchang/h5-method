	//  ondragover 目的是为了让 元素的 ondrop事件能够被触发
	document.body.ondragover = function(e){
		e.preventDefault();
	}
	// ondrop 想要被触发 必须 在ondragover事件中 组织默认行为
	document.body.ondrop = function (e){
//		console.log('123');
		e.preventDefault();
		console.log(e.dataTransfer.files[0]);
		
		// 创建文件读取对象
		var reader = new FileReader();
		
		// 调用文件读取方法
		reader.readAsDataURL(e.dataTransfer.files[0]);
		
		// 在文件读取完毕事件中 获取结果
		reader.onload = function (){
			document.body.style.background = 'url('+reader.result+')no-repeat center/cover';
		}
		
	}