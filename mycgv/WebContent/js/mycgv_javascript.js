/*****************************
		회원가입 폼 체크 
******************************/
function joinCheck(){
	let id = document.getElementById("id");
	let pass = document.getElementById("pass");
	let cpass = document.getElementById("cpass");

	if(id.value==""){
		alert("아이디를 입력해주세요");
		id.focus();
		return false;
	}else if(pass.value==""){
		alert("비밀번호를 입력해주세요");
		pass.focus();
		return false;
	}else if(cpass.value==""){
		alert("비밀번호 확인을 입력해주세요");
		cpass.focus();
		return false;
	}
	
}

/************************************
	로그인 폼 
***************************************/
function loginCheck(){
	let id = document.getElementById('id');
	let pass = document.getElementById('pass');
	
	if(id.value==""){
		alert("아이디를 입력해주세요")
		id.focus();			
		return false;
	}else if(pass.value==""){
		alert("비밀번호를 입력해주세요")
		pass.focus();
		return false;
	}else{
		//아이디, 패스워드가 모두 입력된 상태 --> 서버 전송
		loginForm.submit();
	}
}
/************************************
		로그인 폼 체크 - 다시쓰기
***************************************/

function loginReset(){
	document.getElementById('id').value="";
	document.getElementById('pass').value="";
	document.getElementById('id').focus();
}





























