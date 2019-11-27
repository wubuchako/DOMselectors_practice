// DOM selectors

document.getElementsByClassName("second");
document.getElementsByTagName('h1');
document.getElementById('first');
document.getElementsByClassName("second")[0];
document.querySelector('h1');
document.querySelectorAll('li');
document.querySelectorAll('li, h1');
document.querySelector('li');
document.querySelector('li').getAttribute('random');
document.querySelector('li').setAttribute('random',1000);
document.querySelector('li');
document.querySelector('h1').style.background='yellow';
document.querySelector('h1');
var h1 = document.querySelector('h1');
h1.className = "cooltitle";


// EXERCISE 1
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML= "Hello";
</script>

// EXERCISE 2
<p id="demo"></p>
<script>
document.getElementsByTagName("p")[0].innerHTML= "Hello";
</script>

// EXERCISE 3
<p class="test"></p>
<p class="test"></p>

<script>
document.getElementsByClassName("test")[0].innerHTML= "Hello";
</script>

// EXERCISE 4
<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src = "pic_mountain.jpg";
</script>

// EXERCISE 5
<input type="text" id="myText" value="Hello">

<script>
document.getElementById("myText").value = "Hello";
</script>

// EXERCISE 6
<p id="demo"></p>

<script>
document.getElementById("demo").style.color = "red";
</script>

// EXERCISE 6
<p id="demo"></p>

<script>
document.getElementById("demo").style.fontSize = "40px";
</script>

// EXERCISE 7
<p id="demo"></p>

<script>
document.getElementById("demo").style.color = "red";
</script>

// EXERCISE 8
<p id="demo"></p>

<script>
document.getElementById("demo").style.display = "none";
</script>

// EXERCISE 9
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").addEventListener("click", myFunction);
</script>