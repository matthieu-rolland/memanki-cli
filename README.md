[![NPM](https://nodei.co/npm/memanki-cli.png)](https://nodei.co/npm/memanki-cli/)

# MEMANKI-CLI

Builds anki decks from a memrise lesson ID, in command line

## What is anki anyway?
Anki is a flashcard program which makes remembering things easy, using the SRS principle (spaced repetition system) for optimum information retention.

For those who like to know how things work, the SRS algorithm used by anki was originally written empirically by Piotr Woźniak and can be found [HERE](https://www.supermemo.com/english/ol/sm2.htm).
You can visit the [ANKI website](https://apps.ankiweb.net) for more informations.

If you want to know more about the Spaced Repetition System principle click [HERE](https://www.supermemo.com/articles/theory.htm)

## Why convert memrise lessons to Anki?
While memrise is awesome for learning new words/things, I always found Anki to be much better at long term information retention.
I like to use it both, Memrise for learning, and anki for not forgetting with minimal effort.
Memrise lessons can be found [HERE](https://www.memrise.com/courses/english/).

## Install
Simple install from npm:
````
npm install memanki-cli -g
````
Or clone this repository and then from root folder:
````
npm install -g
````

## Usage

memrise IDs are found in lesson urls, ex: 

[memrise.com/course/**1098043**/spanish-spain-1](https://memrise.com/course/1098043/spanish-spain-1)

Here **1098043** is the memrise lesson ID

To build one anki deck per sub lesson, each deck will take the name of the sub-lesson:
````
memanki --id 1125954 
````
or:
````
memanki --id="1125954"
````

use --merge parameter if you one Anki deck containing all memrise sub-lessons, ex:
````
memanki --merge --id 1125954
`````

Decks will be generated in current folder.
