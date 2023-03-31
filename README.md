# Password-Generator
Random password generator created using JavaScript 



## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |  
| JavaScript |[https://developer.mozilla.org/en-US/docs/Web/JavaScript] (https://developer.mozilla.org/en-US/docs/Web/JavaScript)|
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit my Random Password Generator](https://sheaschwenn.github.io/Password-Generator/)

This password generator allows users to input how long they would like their password to be (between 8 and 128 characters) and select from the four different character types: lowercase, uppercase, numbers, and/or special characters.  It then takes the user input and creates a randomized password that fits the users chosen criteria. This was done using JavaScript and various alerts, confirms and prompts.   


![Site Langing Page](./site.gif)


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [JavaScript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## JavaScript Example

Turning the lowercase array into an all uppercase array by using the map() method and then the .toUpperCase method
```js
 var uppercase = lowercase.map(lowercase =>lowercase.toUpperCase())  
```

Creating a function that will randomly pick an item out of any array that it is given. This code is really reausable so I was able to call this same function for all of my character type arrays.  

```js
 function randomCharacter(array){
    character = array[Math.floor(Math.random()*array.length)];
    return character;
 }
```

## Usage 

This web application can be used to generate a randomized password between 8 and 128 characters in length.


![alt text](assets/images/screenshot.png)



## Learning Points 
Creating this application was a great opportunity to familiarize myself with functions in, if statements and for loops within JavaScrips
Other Learning points were: 
* How global and local variables actually work and the importance of where variables are defined 
* Alerts, Confirms and Prompts
* How useful boolean values can be in acting simiar to (light) switches
* Methods that can be applied to arrays 


I also learned that the way I did my for loops in this project is not the norm, going forward I will use the syntax 
```md 
for(var i = 0; i<array.length; i++) ;
```
intead of 
```md 
for(var i = array.length; i>0; i--);   
```

## Author Info


### Shea Schwennicke

* [Portfolio](https://sheaschwenn.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/shea-schwennicke-76a378210/)
* [Github](https://github.com/sheaschwenn)




## Credits

To randomly shuffle the final password I used a tutorial on shuffling an array.  I used the basis of this tutorial but instead of using a while loop I used a for loop since those were more familiar to me and made scense in the constext of shuffling my password array. I found out that this is called the Fisher-Yates shuffle.
[Shuffling an Array Tutorial](https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html)
[Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)


## License
MIT License 
For more information please refer to the LICSENSE in the repo

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.