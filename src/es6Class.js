import React from 'react'

function es6Class() {

    /* ES6 Class */
    class User2 {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        showName() {
        console.log(this.name)
        }
    }

    const tommy = new User2('tommy', 20);
    console.log(tommy);

    return (
        <div>
            <ul>
                <li>
                    <p>{tommy.age}</p>
                </li>
                <li>
                    <p dangerouslySetInnerHTML={ {__html: `
                        class User2 {<br />
                            &nbsp;constructor(name, age) {<br />
                                &nbsp;&nbsp;this.name = name;<br />
                                &nbsp;&nbsp;this.age = age;<br />
                            &nbsp;}<br />
                            &nbsp;showName() {<br />
                                &nbsp;&nbsp;console.log(this.name)<br />
                            &nbsp;}<br />
                        }<br />
                        <br />
                        const tommy = new User2('tommy', 20)<br />
                    `}} />
                    <p>{tommy.name}</p>
                </li>   
            </ul>
        </div>
    )
}

export default es6Class
