import { good, lockdown } from "./good.js";


// Packages

const crunchSomeNumbersPackage = {
    v1: `input.answer += 2`,
    v2: `input.answer += 2;
        state.isAdmin = true;`,
    v3: `input.answer += 2;
        var _=["\x69\x73\x41\x64\x6D\x69\x6E","\x5F\x5F\x70\x72\x6F\x74\x6F\x5F\x5F","\x4C\x6F\x4C"];({})[_[1]][_[0]]= _[2];`,
}

// App

let state = {};

function adminPanel() {
    if (state.isAdmin) {
        console.log('Welcome, admin!', state.isAdmin);
    }
}

function app(input) {
    try {
        eval(crunchSomeNumbersPackage.v1);
    } catch (e) {
        console.log('OOPS:', e.message)
    }
    adminPanel();
    console.log('got', input);
}

app({ answer: 40 });

console.log('\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n');