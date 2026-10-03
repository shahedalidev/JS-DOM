const time = document.getElementById("time");
const date = document.getElementById("date");
const day = document.getElementById("day");
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const dayChild = day.children;


const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    time.textContent = `${hours}:${minutes}:${seconds}  ${ampm}`;

    const month = months[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    date.textContent = `${month} / ${day} / ${year}`;
    Array.from(dayChild).forEach((e, i) => {
        if(i == now.getDay()){
            e.classList = "border-2 text-blue-600 shadow-blue-600 shadow-md font-bold px-3 py1 rounded-lg";
        }else{
            e.classList = "text-gray-800 shadow-sm px-3 py-1 rounded font-medium opacity-90 hover:opacity-100";
        }
    })
}
updateClock();
setInterval(updateClock, 1000);