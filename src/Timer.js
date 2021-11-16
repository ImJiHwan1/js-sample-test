import React from 'react'

function Timer() {
    let timer = 1;

    function showTime() {
        console.log(`안녕하세요. 접속하신지 ${timer++}초가 지났습니다.`)
        if(timer > 5) {
          clearInterval(tId);
        }
      }
      const tId = setInterval(showTime, 1000);

    return (
        <div>
            <ul>
                <li>
                    <p>settimeout : 몇 ms후에 실행</p>
                </li>
                <li>
                    <p>setInterval(fn, ms) : 몇 ms 마다 해당 fn 실행</p>
                </li>
                <li>
                    <p>clearInterval(variable) : setInterval이 있는 variable의 Interval을 종료</p>
                </li>
            </ul>
        </div>
    )
}

export default Timer
