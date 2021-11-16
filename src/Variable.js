import React, { useState, useEffect } from 'react'
 
function Variable() {

    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const desc = `let은 한번 선언된 변수는 다시 재사용 불가(comfile Error) var은 가능<br />
    var은 상단에 선언이 안되어도 사용 가능<br />
    const는 상단에 선언하면서 할당까지 해야된다.<br />
    var은 함수 스코프이므로 If, for, 등등 반복문 밖에서도 사용가능 단, 함수 밖에서는 불가능<br />
    let,const는 블록 스코프이므로 If, for, 등등 반복문 안에서만 사용가능<br />`

    useEffect(() => {
        let name = "Mike"
        console.log(name)
        setName1(name)

        name = "Jane"
        console.log(name)
        setName2(name)

    }, [])

    return (
        <div>
            <p dangerouslySetInnerHTML = { {__html: desc}} />
            <p>{name1}</p>
            <p>{name2}</p>
        </div>
    )
}

export default Variable
