import React, {useState} from 'react'

function StringMethod() {

    const conf = 'Hello World!!'
    /* 문자열 메소드 */
    // length : 문자열 길이
    // 배열처럼 특정 위치에 접근
    // .toUpperCase() / .toLowerCase : 모든 문자열 대문자 / 소문자
    // .indexOf(string) : 문자열의 인덱스 번호 반환 없으면 -1 포함된 문자열이 여러개여도 첫번째 문자열의 인덱스만 반환
    // .slice(n, m) : n부터 m까지 만 반환 m이 없으면 n부터 문자열 끝까지 양수면 m - 1 번까지 음수면 끝에서부터셈
    // .subString(n, m) : n부터 m까지 순서가 바뀌어도 무조건 작은수부터 큰수 -1 까지 표현 음수는 0으로 표현
    // .subStr(n, m) : 무조건 n부터 m개를 가져온다
    // .trim : 앞 뒤 공백 제거
    // .repeat : 문자열 반복
    // 문자열 비교 가능 : .codePointAt()을 사용하면 십진법 숫자를 알수 있다.
    // .includes() : true, false로 반환
        
    return (
        <div>
            <ul>
                <li>
                    <p>.length : 문자열 길이</p>
                    <p>{conf.length}</p>
                </li>
                <li>
                    <p>.toUpperCase() / .toLowerCase : 모든 문자열 대문자 / 소문자</p>
                    <p>{conf.toUpperCase()}</p>
                </li>
                <li>
                    <p>.indexOf(string) : 문자열의 인덱스 번호 반환 없으면 -1 포함된 문자열이 여러개여도 첫번째 문자열의 인덱스만 반환</p>
                    <p>{conf.indexOf('!')}</p>
                </li>
                <li>
                    <p>.slice(n, m) : n부터 m - 1까지 만 반환 음수면 reverse</p>
                    <p>{conf.slice(2, 5)}</p>
                </li>
                <li>
                    <p>.subString(n, m) : 순서 상관없이 n부터 m - 1까지 표현 음수는 0으로 표현</p>
                    <p>{conf.substring(2, 4)}</p>
                </li>
                <li>
                    <p>.subStr(n, m) : 무조건 n부터 m개를 가져온다</p>
                    <p>{conf.substr(2, 6)}</p>
                </li>
                <li>
                    <p>.trim : 앞 뒤 공백 제거</p>
                    <p>{conf.trim()}</p>
                </li>
                <li>
                    <p>.repeat : 문자열 반복</p>
                    <p>{conf.repeat(3)}</p>
                </li>
                <li>
                    <p>.includes() : true, false로 반환</p>
                    <p>{conf.includes('!')}</p>
                </li>
            </ul>
        </div>
    )
}

export default StringMethod
