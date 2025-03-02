document.getElementById("clrBtn").addEventListener("click",function(){
    //  console.log("clicked");
     document.getElementById("notiContainer").classList.remove("hidden");
});





let count = 23;
let countTask = 6;

function selectWristSize(size) {
    const sizes = ["a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < sizes.length; i++) {
        const button = document.getElementById("size-" + sizes[i]);
        const element = sizes[i];
        if (size === element) {
            button.classList.add("bg-gray-400");
            button.disabled = true; 
            button.classList.add("disabled-button"); 

            alert("board updated successfully");
            count++;
            document.getElementById("counterPositive").innerText = count;

            if (countTask > 0) {
                countTask--;
                document.getElementById("counterNegative").innerText = countTask;
                if (countTask === 0) {
                    alert("Congrats!!! You have completed all the current tasks");
                }
            }
        }
    }
}



// changing random color by clicking .colorBtn
document.getElementById("colorBtn").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    document.body.style.backgroundColor = randomColor;
});


// time update
function updateDateTime() {
    const now = new Date();
    
    const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
    
    const formattedDateTime = now.toLocaleDateString("en-US",options); 
    document.getElementById("dateTimeDiv").textContent = formattedDateTime;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initialize time on page load
window.onload = updateDateTime;