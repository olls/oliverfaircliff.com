Maze Language
-------------

Maze is an esoteric programming language designed by an unnamed author on the [Esolangs wiki](https://esolangs.org). It uses a maze to define a program, you write a program by creating an ASCII art maze which 'cars' (variables) will then follow, driving over functions and other controls. You can find out more about the language and its rules on its [Esolangs page](https://esolangs.org/wiki/Maze). This language is a lot of fun to play around with and come up with crazy mazes, and actually functional programs (it is Turing complete!).

I initially wrote quite a bad [interpreter](https://github.com/olls/maze_interpreter.git) for this language after first discovering it, which was a quite a mess and was very bad at parsing the language. However, more recently I wanted to have another go at it, so I wrote version 2! A much better, more robust version completely written from the ground up, with robust parsing and much more error catching!

![A Maze program to add two numbers together.](/~olls/readme-imgs/maze-interpreter/fibonacci.png){:.no-border}

It is written in Python, and can be downloaded from it's [GitHub repo](https://github.com/olls/maze-interpreter-v2) along with some example programs.
