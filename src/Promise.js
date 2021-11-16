import React, { useEffect } from 'react'

function Promise() {

    useEffect(() => {
        /* Promise */
        const f1 = () => {
            return new Promise((res, err) => {
            setTimeout(() => {
                res('1번 주문 완료')
            }, 1000);
            })
        }

        const f2 = (message) => {
            console.log(message)
            return new Promise((res, err) => {
            setTimeout(() => {
                res('2번 주문 완료')
            }, 2000);
            })
        }

        const f3 = (message) => {
            console.log(message)
            return new Promise((res, err) => {
            setTimeout(() => {
                res('3번 주문 완료')
            }, 2500);
            })
        }

        console.log('시작');
        async function order() {
        try {
            /* 직렬 */
            // const result10 = await f1();
            // const result11 = await f2(result10);
            // const result12 = await f3(result11);
    
            /* 병렬 */
            const result10 = await Promise.all([f1(), f2(), f3()])
            console.log(result10);
        } catch (e) {
            console.log(e)
        }
        console.log('종료');
        }
        order()
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default Promise
