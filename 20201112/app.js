const obj = {
    name : 'chwon',
    say : function(){
        console.log(`my name is ${this.name}` );
    }
}

obj.say()

//식별자(identifier)
//변수
//함수
//클래스
//식별자 - 실행 컨텍스트에 등록됨
//특수문자 제외한 숫자, 문자, 언더스코어(_), 달러 기호 가능
//숫자로 식별자 이름 시작은 불가능, 예약어 사용 불가능

