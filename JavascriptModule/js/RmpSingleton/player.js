var player = function() {
    console.log('player : variable Initiate with an Revealing Module Pattern-Singleton');
  
    // private members
    var playerName = '';
    
    function logPlayer() {
        console.log('The current player is ' + playerName + '.');
    }
    
    function setName(newName) {
        playerName = newName;
    }
    
    function getName() {
        return playerName;
    }
    
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
    
}();