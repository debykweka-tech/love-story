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
    padding: 20px;
}

.container {
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    padding: 60px 50px;
    border-radius: 25px;
    box-shadow: 0 0 50px rgba(255, 0, 0, 0.8), inset 0 0 30px rgba(255, 0, 0, 0.2);
    max-width: 700px;
    border: 3px solid #ff0000;
}

.salutation {
    color: #ff6666;
    font-size: 1.5em;
    margin-bottom: 30px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
    letter-spacing: 2px;
}

h1 {
    color: #ff0000;
    font-size: 3em;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5);
    font-weight: bold;
    letter-spacing: 1px;
}

h2.question {
    color: #ff4444;
    font-size: 1.9em;
    margin: 40px 0;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
    font-weight: bold;
}

.buttons {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin: 40px 0;
    flex-wrap: wrap;
}

.btn-yes {
    background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
    color: white;
    border: 2px solid #ff3333;
    padding: 18px 50px;
    font-size: 1.3em;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-yes:hover {
    background: linear-gradient(135deg, #ff3333 0%, #ff0000 100%);
    transform: scale(1.15);
    box-shadow: 0 8px 30px rgba(255, 0, 0, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.3);
}

.btn-yes:active {
    transform: scale(0.95);
}

.message {
    margin-top: 40px;
    font-size: 1.8em;
    color: #ffcccc;
    min-height: 50px;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
    font-weight: bold;
}

@keyframes pulse {
    0%, 100% { 
        transform: scale(1);
        color: #ffcccc;
    }
    50% { 
        transform: scale(1.1);
        color: #ff6666;
    }
}

.pulse {
    animation: pulse 1s infinite;
}
