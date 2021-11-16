import React from 'react'

function Call() {
  
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
                    <p>객체 접근</p>
                    <p>{mike.name}</p>
                </li>
                <li>
                    <p>새로운 프로퍼티를 추가하기위해 update() 함수를 만들고 update.call()을 하여서 프로퍼티를 추가할수있다.(call)</p>
                    <p>{tom.birthYear}</p>
                </li>
                <li>
                    <p>새로운 프로퍼티를 추가하기위해 update() 함수를 만들고 update.call()을 하여서 프로퍼티를 추가할수있다.(call)</p>
                    <p>{mike.occupation}</p>
                </li>
            </ul>
        </div>
    )
}

export default Call