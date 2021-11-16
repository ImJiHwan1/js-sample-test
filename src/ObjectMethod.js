import React, { useState, useEffect } from 'react'

function ObjectMethod() {

    const [object1, setObject1] = useState(null)


    useEffect(() => {

        // Object.assign => 객체 복제(이렇게 사용 안하면 새롭게 지정한 변수에서 새로운 변수의 값을 변경하면 기존 객체의 값까지 변경되므로 데이터가 불완전하다.)
        // Object.key, .values = > 객체의 키값 또는 value 값 배열로 반환
        // Object.entries => 객체를 배열로 반환
        // Object.fromEntries => 배열을 객체로 반환

        const item = {
            item : 'Mike',
            price : 30
        }

        const cloneUser = Object.assign({}, item)
        const cloneAddUser = Object.assign({ gender: 'male' }, item)
        const value = Object.values(cloneAddUser);
        const entries = Object.entries(cloneAddUser);
        console.log(cloneUser)
        console.log(cloneAddUser)
        console.log(value)
        console.log(entries)
    }, [])



    return (
        <div>
            { object1 !== null &&
                <>
                    <p>{'Object.assign => 객체 복제(이렇게 사용 안하면 새롭게 지정한 변수에서 새로운 변수의 값을 변경하면 기존 객체의 값까지 변경되므로 데이터가 불완전하다.)'}</p>
                    <p>{'Object.key, .values => 객체의 키값 또는 value 값 배열로 반환'}</p>
                    <p>{'Object.entries => 객체를 배열로 반환'}</p>
                    <p>{'Object.fromEntries => 배열을 객체로 반환'}</p>
                </>
            }
        </div>
    )
}

export default ObjectMethod
