import"./assets/modulepreload-polyfill-3cfb730f.js";const l="feedback-form-state",a=document.querySelector("form");function m(){const e={email:a.email.value.trim(),message:a.message.value.trim()},t=JSON.stringify(e);localStorage.setItem(l,t)}function i(e){e.preventDefault();const t={email:e.target.email.value.trim(),message:e.target.message.value.trim()};t.email===""||t.message===""?alert("All form fields must be filled in"):console.log(t),localStorage.clear(),a.reset()}const s=localStorage.getItem(l);if(s){const e=JSON.parse(s);a.email.value=e.email,a.message.value=e.message}a.addEventListener("submit",i);a.addEventListener("input",m);
//# sourceMappingURL=commonHelpers2.js.map