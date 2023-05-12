let textBox = document.getElementById('question');
const btn = document.getElementById('btn');
const data = [];

const Key = [];
const downTime = [];
const upTime = [];
let keyCount = 0; // variable to count number of keys pressed
let wordCount = 0; // variable to count number of words pressed
let backspaceCount = 0; // variable to count number of times backspace is pressed

// const start = new Date().getTime();

textBox.addEventListener('keydown', (event) => {
    // const downtime = new Date().getTime() - start;
    const downtime = Date.now();
    downTime.push(downtime);
});

textBox.addEventListener('keyup', (event) => {
    // const uptime = new Date().getTime() - start;
    const uptime = Date.now();
    const key = event.key;
    upTime.push(uptime);
    Key.push(key);

    // count number of keys pressed
    keyCount++;

    // count number of words pressed
    if (event.key === ' ' && textBox.value.trim() !== '') {
        wordCount++;
    }
    

    // count number of times backspace is pressed
    if (event.key === 'Backspace') {
        backspaceCount++;
    }
});
wordCount++;

btn.addEventListener('click', (e) => {
    for (let i = 0; i < Key.length; i++) {
        data.push({
            key: Key[i],
            downtime: downTime[i],
            uptime: upTime[i],
            dwellTime: upTime[i] - downTime[i],
            flightTime: Math.abs(downTime[i+1] - upTime[i]),
            keyDownTime: Math.abs(downTime[i+1] - downTime[i])

        });
    }

    
    // Get user name from input field
const userName = document.getElementById('user-name').value;

// Create CSV file content
let csvContent = 'data:text/csv;charset=utf-8,';
csvContent += 'Key, Down Time, Up Time, Dwell Time, Flight Time, Key Down Time\n';
data.forEach((item) => {
  const row = `${item.key}, ${item.downtime}, ${item.uptime}, ${item.dwellTime}, ${item.flightTime}, ${item.keyDownTime}\n`;
  csvContent += row;
});

// Create download link for CSV file
const encodedUri = encodeURI(csvContent);
const link = document.createElement('a');
link.setAttribute('href', encodedUri);
link.setAttribute('download', `${userName}.csv`);
document.body.appendChild(link);
link.click();


    console.log('Number of keys pressed: ', keyCount);
    console.log('Number of words pressed: ', wordCount);
    console.log('Number of times backspace is pressed: ', backspaceCount);

    localStorage.setItem("median", median);
    localStorage.setItem("keyCount", keyCount);
    localStorage.setItem("wordCount",wordCount);
    localStorage.setItem("backspaceCount", backspaceCount);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "../html/output.html";
});
