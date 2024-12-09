+++
title = "BCACrypt"
description = "Example description" 
weight = 1
+++

This was really just a toy project since I was (and still am) fascinated by cellular automata and cryptography.
[Reversible block cellular automata](https://en.wikipedia.org/wiki/Reversible_cellular_automaton) can be used for symmetric encryption which to me was a really unexpected connection.
So I implemented an encryption scheme in Julia using the block cellular automata rules [Critters](https://en.wikipedia.org/wiki/Critters_(cellular_automaton)) and [Tron](https://en.wikipedia.org/wiki/Block_cellular_automaton#Tron).
Encryption and decryption do work, although I certainly doubt that my library constitutes a secure encryption algorithm.
If you find it interesting though, trying to break this encryption and decrypt a message encrypted with this scheme could be a fun learning project.
The library provides a hacky tool to animate the BCAs as well, so playing around with that could also be fun.
The code is on [GitHub](https://github.com/JohannesNakayama/BCACrypt).

