import React from 'react'
import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Variable from './Variable'
import ObjectMethod from './ObjectMethod'
import MathMethod from './MathMethod'
import StringMethod from './StringMethod'
import ArrayMethod from './ArrayMethod'
import Destructuring from './Destructuring'
import Timer from './Timer'
import Call from './Call'
import ProtoType from './ProtoType'
import es6Class from './es6Class'
import Promise from './Promise'

function Main() {
    return (
        <>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route path='/home/variable' component={Variable}></Route>
                    <Route path='/home/object' component={ObjectMethod}></Route>
                    <Route path='/home/math' component={MathMethod}></Route>
                    <Route path='/home/string' component={StringMethod}></Route>
                    <Route path='/home/array' component={ArrayMethod}></Route>
                    <Route path='/home/destruct' component={Destructuring}></Route>
                    <Route path='/home/timeout' component={Timer}></Route>
                    <Route path='/home/call' component={Call}></Route>
                    <Route path='/home/prototype' component={ProtoType}></Route>
                    <Route path='/home/class' component={es6Class}></Route>
                    <Route path='/home/promise' component={Promise}></Route>
                    <Route path='/home' component={Home}></Route>

                    <Redirect to='/home'></Redirect>
                </Switch>
            </Suspense>
        </>

    )
}

export default Main
