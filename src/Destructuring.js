import React from 'react'

function Destructuring() {

    const user = {
        name: 'Mike',
        age: 30,
    };
    let timer = 1;
    let arr = ['Mike', 'Tom', 'Jane']
    let arr2 = [1, 2, 3, 4, 5];
    let arr3 = [27, 8, 5, 13]
    let userList = [
      { name: 'Mike', age: 30 },
      { name: 'Jane', age: 17 },
      { name: 'Bond', age: 18 }
    ]
    let userList2 = [
      { name: 'Mike', age: 30 },
      { name: 'Tom', age: 20 },
      { name: 'Bond', age: 15 },
      { name: 'Harry', age: 13 },
      { name: 'Steve', age: 17 },
    ]
  
    const result = arr2.find((item) => {
      return item % 2 === 0 ; 
    })
    console.log(result)
  
    const result2 = userList.find((item) => {
      if(item.age < 19) {
        return true;
      }
      return false
    })
    console.log(result2)
    const result3 = userList.filter((item) => {
      if(item.age < 19) {
        return true;
      }
      return false
    })
    console.log(result3);
    const result4 = userList.map((item, index) => {
      // 기존 배열에서 객체 추가 할때 사용
      return Object.assign({}, item, {
        id: index + 1,
        isAdult: user.age > 19,
      });
    });
    console.log(result4)
  
    // arr.forEach((item, index) => {
    //   console.log(`${index + 1}.${name}`)
    // })
  
    arr3.sort((a, b) => {
      return a - b;
    });
    console.log(arr3)
  
    // 배열 모든 수 합치기(reduce)
    const result5 = arr3.reduce((prev, curr)=> {
      return prev + curr;
    }, 0/*초기값*/)
    console.log(result5);
  
    let result6 = userList2.reduce((prev, curr) => {
      if (curr.age > 19) {
        prev.push(curr.name)
      }
      return prev
    }, [])
    console.log(result6)
  

  
    const mike = {
      name: 'Mike'
    };
  
    const tom = {
      name: 'Tom'
    };
  
    function showThisName() {
      console.log(this.name);
    };
  
    function update(birthYear, occupation) {
      this.birthYear = birthYear;
      this.occupation = occupation;
    }
  
    update.call(mike, 1999, 'singer')
    console.log(mike)
  
    update.call(tom, 1902, 'worker')
    console.log(tom)
  
    showThisName.call(mike)

    return (
        <div>
            <ul>
                <li>
                    <p>.find()로 조건에 해당하는 첫번째 원소만 출력</p>
                    <p dangerouslySetInnerHTML= { {__html: `const result2 = userList.find((item) => {<br />
                        if(item.age < 19) {<br />
                          &nbsp;return true;<br />
                        }<br />
                        &nbsp;return false<br />
                      })`
                      } } />
                    <p>{result}</p>
                </li>
                <li>
                    <p>새로운 배열로 반환(map)</p>
                    <p dangerouslySetInnerHTML= { {__html: `const result4 = userList.map((item, index) => {<br />
                        // 기존 배열에서 객체 추가 할때 사용<br />
                        &nbsp;return Object.assign({}, item, {<br />
                          &nbsp;&nbsp;id: index + 1,<br />
                          &nbsp;&nbsp;isAdult: user.age > 19,<br />
                          &nbsp;});<br />
                      })`}} />
                      { result4.map((item) => (
                        <>
                          <p style={{ marginBlockStart: '0', marginBlockEnd: '0' }}>{item.id}</p>
                          <p style={{ marginBlockStart: '0', marginBlockEnd: '0' }}>{item.age}</p>
                          <p style={{ marginBlockStart: '0', marginBlockEnd: '0' }}>{item.isAdult === true ? 'true' : 'false'}</p>
                          <p style={{ marginBlockStart: '0', marginBlockEnd: '0' }}>{item.name}</p><br/>
                        </>
                      ))
                      }
                </li>
                <li>
                    <p>배열 원소들 중 해당 조건에 해당하는 원소 찾기(reduce)</p>
                    <p dangerouslySetInnerHTML= { {__html: `let result6 = userList2.reduce((prev, curr) => {<br />
                            if (curr.age > 19) {<br />
                              &nbsp;prev.push(curr.name)<br />
                            }<br />
                            &nbsp;return prev<br />
                          }, [])`}} />
                    <p>{result6}</p>
                </li>
            </ul>
        </div>
    )
}

export default Destructuring