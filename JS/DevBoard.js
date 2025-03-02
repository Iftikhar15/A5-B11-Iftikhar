





let count = 23;
let countTask = 6;

function selectWristSize(size, title) {
    console.log(title);
    const sizes = ["a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < sizes.length; i++) {
        const button = document.getElementById("size-" + sizes[i]);
        const element = sizes[i];
        if (size === element) {
            button.classList.add("bg-gray-400");
            button.disabled = true; 
            button.classList.add("disabled-button"); 

            alert("board updated successfully");
            const container = document.getElementById("notiContainer");
            const comment = document.createElement("p");
            const taskCompleteTime=new Date().toLocaleTimeString()
            comment.className = "comment";
            comment.innerText = `You have completed ${title} task at ${taskCompleteTime}.`;
            console.log(container, comment);
            container.appendChild(comment);
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

function clearAllComments() {
    const container = document.getElementById("notiContainer");
    const comments = container.querySelectorAll("p.comment");
    comments.forEach(comment => comment.remove());
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


setInterval(updateDateTime, 1000);
window.onload = updateDateTime;



function openPage() {
     window.location.href = 'blog,html';}