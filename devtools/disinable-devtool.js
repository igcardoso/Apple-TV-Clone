function continuousConsoleClear() {
    let clearCount = 0;
    
    function clearConsole() {
        console.clear();
        clearCount++;
        
        setTimeout(clearConsole, 1); 
    }
    
    clearConsole();
}

//continuousConsoleClear();
