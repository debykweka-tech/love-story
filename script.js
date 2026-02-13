* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #000000 0%, #330000 100%);
    color: #fff;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
    max-width: 600px;
}

.salutation {
    color: #ffcccc;
    font-size: 1.3em;
    margin-bottom: 20px;
}

h1 {
    color: #ff0000;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(255, 0, 0, 0.5);
}

h2.question {
    color: #ff3333;
    font-size: 1.8em;
    margin: 30px 0;
}

.buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 30px 0;
}

.btn-yes {
    background: #ff0000;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 1.2em;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 0, 0, 0.4);
}

.btn-yes:hover {
    background: #cc0000;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.6);
}

.message {
    margin-top: 30px;
    font-size: 1.5em;
    color: #ffcccc;
    min-height: 40px;
}
