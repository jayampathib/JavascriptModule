var Player = function() {
    console.log('player : variable Initiate with an Revealing Module Pattern-Constructor');
  
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
    
};