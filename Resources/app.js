// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var customTable = require('customTableView');

//This here we will define the images that we want in our tableView and the customText that we ant to show
// The main text will be fetched form the ImageUrl i.e name for imageUrl 'images/Angry.png' will be Angry
var param = {
    
    imageUrl: ['images/Angry.png',
                'images/Cheat.png',
                'images/Confuse.png',
                'images/Dizzy.png',
                'images/Errr.png',
                'images/Happy.png',
                'images/Love.png',
                'images/Sick.png',
                'images/Hungry.png',
                'images/Wow.png'    
                ],
                
      customText:['I am Angry','I am cheater','I am confuse','I am Dizzy','Errrrrr','I am Happy','I am in Love','I am sick','I am Hungry','I will say Wow']
       
       
}

var window = customTable.customTableView(param);
window.open();
