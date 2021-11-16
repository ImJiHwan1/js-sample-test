import React from 'react'

function MathMethod() {
    /* 숫자열 메소드 */
    // Math.ceil() : 소수점 정수로 올림
    // Math.floor() : 소수점 정수로 내림
    // Math.round() : 반올림
    // 소수점 둘째자리 까지 표현 : Math.round(variable * 100) / 100
    // Math.toFixed(n) : 소수점 n째자리 까지 표현 소수 자리보다 적으면 지우고 크면 빈자리 0 으로 채워준다 ex) (30.12).toFixed(0) => 30 (toFixed는 String으로 반환)
    // Math.parseInt() : String을 Number로 변환 단 String안에 문자가있으면 문자를 지우고 반환 / Number은 문자가 있으면 NaN 반환
    // parseInt(variable, 16 or 2) variable을 16진수 또는 2진수를 10진수로 변경가능
    // parseFloat(varable) 문자열안에 문자를 제거하고 실수 형태로 반환
    // Math.ramdom() : 0 ~ 1사이의 실수를 무작위로 출력
    // 응용 1 ~ n 사이 임의의 숫자 추출 : Math.floor(Math.random() * n) + (최소값)
    // Math.max(), min() : 괄호 안에 최댓값, 최솟값
    // Math.abs() : 절대값
    // Math.pow(n, m) : n의 m의 제곱
    // Math.sqrt(16) : 제곱근

    return (
        <div>
            <ul>
                <li>
                    <p>소수점 정수로 올림 Math.ceil()</p>
                    <p>{Math.ceil(5.12)}</p>
                </li>
                <li>
                    <p>소수점 정수로 내림 Math.floor()</p>
                    <p>{Math.floor(5.12)}</p>
                </li>
                <li>
                    <p>반올림 Math.round()</p>
                    <p>{Math.round(5.12)}</p>
                </li>
                <li>
                    <p>소수 n번째 까지만 출력 Math.round(variable * 10의 n제곱) / 10의 n제곱</p>
                    <p>{Math.round(3.14159265359 * 10) / 10}</p>
                </li>
                <li>
                    <p>String을 Number로 변환 단 String안에 문자가있으면 문자를 지우고 반환 / 문자가 있으면 NaN 반환 parseInt</p>
                    <p>{parseInt("3.14")}</p>
                </li>
                <li>
                    <p>문자열안에 문자를 제거하고 실수 형태로 반환 / 문자가 있으면 NaN 반환 parseFloat</p>
                    <p>{parseFloat("3.14")}</p>
                </li>
                <li>
                    <p>0 ~ 1사이의 실수를 무작위로 출력 Math.random()</p>
                    <p>{Math.random()}</p>
                </li>
                <li>
                    <p>괄호 안에 있는 변수중 최댓값, 최솟값 : Math.max(), min() </p>
                    <p>{Math.max(3, 4, 5)}</p>
                </li>
                <li>
                    <p>절대값 Math.abs()</p>
                    <p>{Math.abs(3.14159265359)}</p>
                </li>
                <li>
                    <p>n의 m의 제곱 Math.pow(n, m)</p>
                    <p>{Math.pow(4, 2)}</p>
                </li>
                <li>
                    <p>n의 제곱근 Math.sqrt(n)</p>
                    <p>{Math.sqrt(5)}</p>
                </li>
            </ul>
        </div>
    )
}

export default MathMethod
