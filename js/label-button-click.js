let countCT = 0;
clickTwice.addEventListener('click', () => {
    countCT++;
    console.log('countCT:' + countCT);
    const span = document.createElement('span');
    span.textContent = String(countCT);
    clickTwice.replaceChildren(span);
});

let countP = 0;
prevent.addEventListener('click', (event) => {
    event.preventDefault();
    countP++;
    console.log('countP:' + countP);
    const span = document.createElement('span');
    span.textContent = String(countP);
    prevent.replaceChildren(span);
});

let countPEN = 0;
pointerEventsNone.addEventListener('click', () => {
    countPEN++;
    console.log('countPEN:' + countPEN);
    const span = document.createElement('span');
    span.textContent = String(countPEN);
    pointerEventsNone.replaceChildren(span);
});


