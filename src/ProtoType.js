import React from 'react'

function ProtoType() {
    /* 상속(ES6 X) */
    function Car(color) {
        this.color = color;
    }

    Car.prototype = {
        constructor: Car,
        wheels:  4,
        drive() {
        console.log('drive..')
        },
        navigation: 1,
        stop() {
        console.log("STOP!")
        },
    }

    const x5 = new Car("red")
    const z4 = new Car("blue")
    const x6 = new Car("coral")

    console.log('상속', x5.wheels)
    console.log('상속', z4.color)
    console.log('상속', x6.drive())
    console.log('상속', x6.stop())

    // extends
    class Car2 {
        constructor(color) {
            this.color = color
            this.wheels = 4;
        }
        drive() {
        console.log("drive..")
        }
        stop() {
        console.log("stop..")
        }
    }

    class Bmw extends Car2 {
        park() {
            console.log('PARK')
        }
    }

    const z8 = new Bmw('blue');
    console.log(z8.color)
    console.log(z8.wheels)
    console.log(z8.drive())
    console.log(z8.stop())
    console.log(z8.park())

    return (
        <div>
            <ul>
                <li>
                    <p>상속을 시킬려면 .prototype()을 사용하면 된다.</p>
                    <p dangerouslySetInnerHTML= { {__html: `Car.prototype = {<br />
                            constructor: Car<br />,
                            wheels:  4,<br />
                            drive() {<br />
                            &nbsp;console.log('drive..')<br />
                            },<br />
                            navigation: 1,<br />
                            stop() {<br />
                            &nbsp;console.log("STOP!")<br />
                            },<br />
                        }`
                    } } />
                </li>
                <li>
                    <p>ES6방식으로 상속을 할려면 constructor, extend를 사용한다.</p>
                    <p dangerouslySetInnerHTML= { {__html: `class Car2 {<br />
                            &nbsp;constructor(color) {<br />
                                &nbsp;&nbsp;this.color = color<br />
                                &nbsp;&nbsp;this.wheels = 4;<br />
                            &nbsp;}<br />
                            drive() {<br />
                            &nbsp;console.log("drive..")<br />
                            }<br />
                            stop() {<br />
                            &nbsp;console.log("stop..")<br />
                            }<br />
                        }<br />
                        <br />
                        class Bmw extends Car2 {<br />
                            &nbsp;park() {<br />
                                &nbsp;&nbsp;console.log('PARK')<br />
                            &nbsp;}<br />
                        }`
                    }} />
                </li>
            </ul>
        </div>
    )
}

export default ProtoType