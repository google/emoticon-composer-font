/**
 * Copyright (C) 2019 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

window.onload = () => {
    document.querySelector('.mdl-js-slider').oninput = () => {
        const v = document.querySelector('.mdl-js-slider').value
        document.getElementById('result').style.fontSize = `${v}pt`
        document.getElementById('textsize').innerText = v
    }

    document.querySelector('#darkTheme').onclick = () => {
        const enable = document.querySelector('#darkTheme').checked
        if (enable) {
            document.getElementsByTagName('body')[0].classList.add('dark')
        } else {
            document.getElementsByTagName('body')[0].classList.remove('dark')
        }
    }

    document.querySelector('#goBold').onclick = () => {
        const enable = document.querySelector('#goBold').checked
        if (enable) {
            document.getElementById('result').style.fontWeight = 'bold'
            document.getElementById('fakeresult').style.fontWeight = 'bold'
        } else {
            document.getElementById('result').style.fontWeight = 'inherit'
            document.getElementById('fakeresult').style.fontWeight = 'inherit'
        }
    }

    document.querySelector('#goItalic').onclick = () => {
        const enable = document.querySelector('#goItalic').checked
        if (enable) {
            document.getElementById('result').style.fontStyle = 'italic'
            document.getElementById('fakeresult').style.fontStyle = 'italic'
        } else {
            document.getElementById('result').style.fontStyle = 'inherit'
            document.getElementById('fakeresult').style.fontStyle = 'inherit'
        }
    }

    document.querySelector('#fakeresult').oninput = () => {
        document.querySelector('#result').innerText = document.querySelector('#fakeresult').value
    }

    document.querySelector('#goColor').oninput = () => {
        document.getElementById('result').style.color = document.querySelector('#goColor').value
    }
}
