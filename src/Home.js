import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>JavaScript 중급 강좌 내용</p>
            <ul className="content_home">
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/variable'><button>1. 변수 및 호이스팅</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/object'><button>2. 객체 메소드</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/math'><button>3. 숫자, 수학 method</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/string'><button>4. 문자열 method</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/array'><button>5. 배열 method</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/destruct'><button>6. 구조 분해 할당</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>    
                    <Link to='/home/variable'><button>7. 나머지 매개변수, 전개 구문</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/variable'><button>8. Closure</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/timeout'><button>9. setTimeout, setInterval</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/call'><button>10. call, apply, bind</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/prototype'><button>11. 상속, 프로토타입</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/class'><button>12. 클래스</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/promise'><button>13. 프로미스</button></Link>
                </li>
                <li style={{ marginBottom: '20px', listStyle: 'none' }}>
                    <Link to='/home/promise'><button>14. async, await</button></Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
