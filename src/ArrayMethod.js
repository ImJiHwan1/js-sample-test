import React, {useState, useEffect} from 'react'

function ArrayMethod() {

    /* 배열 메소드 */
    // arr.splice(n, m, x) : 특정 원소 지우고(n부터 m개까지) 그 인덱스 위치에 x 추가 m에 0을 입력하면 삭제하지않고 n번과 그다음 인덱스 사이에 x를 추가후 배열로 반환
    // arr.slice(n, m) : n부터 m -1 까지 반환 인수가 없으면 배열을 그대로 복사
    // arr.concat(arr2) : 기존 arr 배열에 arr2를 합쳐서 반환
    // arr.forEach(fn) : arr.forEach((item, index, arr) => {})
    // arr.indexOf(n) : arr 원소들중에 n이 있는 인덱스 반환 없으면 -1 중복된 숫자에 대한 인덱스를 찾고 싶으면 arr.indexOf(n, m) m번째 이후에 있는 n을 검색
    // arr.lastIndexOf(n) : arr 원소들 중에 끝에서 부터 n이 있는 인덱스 반환
    // arr.find(fn) : 함수를 사용하여 복잡한 연산 가능(첫번째 해당하는 원소만 반환)
    // arr.filter(fn) : 만족하는 모든 요소를 반환
    // arr.reverse() : 역순
    // arr.map() : 새로운 배열로 반환
    // arr.join(String) : 배열 원소 사이에 String을 기준으로 문자열 형태로 반환, 배열 -> 문자열
    // arr.split(String) : 구분자로 구분된 문자열을 String을 기준으로 배열 형태로 반환, 문자열 -> 배열
    // Array.isArray(variable) : variable의 배열 여부 확인
    // arr.sort(Fn) : 배열 재정렬 !배열 자체가 변경됨(ASC 코드 번호 별로 변경)
        
    return (
        <div>
            <ul>
                <li>
                    <p>arr.splice(n, m, x) : 특정 원소 지우고(n부터 m개까지) 그 인덱스 위치에 x 추가 m에 0을 입력하면 삭제하지않고 n번과 그다음 인덱스 사이에 x를 추가후 배열로 반환</p>
                </li>
                <li>
                    <p>arr.slice(n, m) : n부터 m -1 까지 반환 인수가 없으면 배열을 그대로 복사</p>
                </li>
                <li>
                    <p>arr.concat(arr2) : 기존 arr 배열에 arr2를 합쳐서 반환</p>
                </li>
                <li>
                    <p>arr.forEach(fn) : Array 요소를 제공된 함수로 한 번 실행합니다. 콜백 함수를 인자로 받아, 배열의 각 요소에 콜백함수를 실행한다. 아무 값도 반환하지 않는다.</p>
                </li>
                <li>
                    <p>arr.indexOf(n) : arr 원소들중에 n이 있는 인덱스 반환 없으면 -1 중복된 숫자에 대한 인덱스를 찾고 싶으면 arr.indexOf(n, m) m번째 이후에 있는 n을 검색</p>
                </li>
                <li>
                    <p>arr.lastIndexOf(n) : arr 원소들 중에 끝에서 부터 n이 있는 인덱스 반환</p>
                </li>
                <li>
                    <p>arr.find(fn) : 함수를 사용하여 복잡한 연산 가능(첫번째 해당하는 원소만 반환)</p>
                </li>
                <li>
                    <p>arr.filter(fn) : 만족하는 모든 요소를 반환</p>
                </li>
                <li>
                    <p>arr.reverse() : 역순</p>
                </li>
                <li>
                    <p>{`arr.map((item, index) =>) : 새로운 배열로 반환(배열 원소중 다른 배열 원소 찾을 때 )`}</p>
                </li>
                <li>
                    <p>{`arr.join(String) : 배열 원소 사이에 String을 기준으로 문자열 형태로 반환, 배열 -> 문자열`}</p>
                </li>
                <li>
                    <p>{`arr.split(String) : 구분자로 구분된 문자열을 String을 기준으로 배열 형태로 반환, 문자열 -> 배열`}</p>
                </li>
                <li>
                    <p>Array.isArray(variable) : variable의 배열 여부 확인</p>
                </li>
                <li>
                    <p>arr.sort(Fn) : 배열 재정렬 !배열 자체가 변경됨(ASC 코드 번호 별로 변경)</p>
                </li>
            </ul>
        </div>
    )
}

export default ArrayMethod
