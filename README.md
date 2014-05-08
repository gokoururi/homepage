Homepage
====

![alt tag](screenshots/preview.png "Homepage preview")

This repository contains a custom homepage made using html, css and javascript (node.js). Feel free to download and modify. Comments and suggestions appreciated. Please don't expect too much.

Features:
* Flashy links
* Flashy Slidy sublinks
* Flashy Slidy searchbars 
* Randomly selected cute 2D girls

Customzing and adding mascots
----

To customize mascots modify the '.mascotN' classes inside the [stylesheet](style.css)

```css
.mascot1 {
    background: url('images/mascots/ruri1.png') #282A2E;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 20px 20px 20px 250px;
}

.mascot2 {
    background: url('images/mascots/ruri2.png') #282A2E;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 20px 20px 20px 250px;
}

.mascot3 {
    background: url('images/mascots/ruri3.png') #282A2E;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 20px 20px 20px 250px;
}
```

You can remove or add additional .mascotN classes. Javascript will take care of the rest.
