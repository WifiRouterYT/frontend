var loading = false;

function appendMsg(message) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
}

function isEmpty(str) {
    return !str.trim().length;
}

async function wait(socket) {
    if (this.socket.readyState == WebSocket.OPEN ) {
        console.log("Connected to server!");
        document.getElementById("setup").style.display = "none";
    }
}

const form = document.getElementById('shit');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(loading) return;
    ip = form.elements[0].value;
    nick = form.elements[1].value;
    if(isEmpty(ip)) {
        window.alert("No IP specified.");
        return;
    } else if (isEmpty(nick)) {
        window.alert("No nick specified.");
        return;
    }
    loading = true;
    form.elements[2].innerHTML = "Connecting...";
    const socket = new WebSocket("wss://" + ip);
    socket.onclose = function (event) {
        if (event.wasClean) {
            console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            window.alert("Disconnected from server.");
            location.reload();
        } else {
            console.log(`WebSocket connection error, code=${event.code}, reason=${event.reason}`);
            window.alert("Connection to server lost.");
            location.reload();
        }
    };
    
    socket.onerror = function (error) {
        console.error("WebSocket error:", error);
        window.alert("Failed to connect to server.");
        loading = false;
        form.elements[2].innerHTML = "Login";
    };

    socket.addEventListener("message", (event) => {
        appendMsg(event.data)
    });

    function sendMessage() {
        const messageInput = document.getElementById("input");
        const message = messageInput.value;
        socket.send(message);
        messageInput.value = "";
    }

    socket.addEventListener("open", function (event) {
        console.log("Connected to server!");
        document.getElementById("setup").style.display = "none";
        socket.send(nick);
    });

    const node = document.getElementById("inputbox");
    node.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
