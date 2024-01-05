+++
title = "Projects"
description = "Some projects I've worked on"
date = "2023-11-19"
aliases = ["projects", "portfolio"]
author = "Johannes Nakayama"
+++

This is a selection of projects I've worked on in the past years.

## Social Protocols

The [social protocols organization](https://social-protocols.org/) has the goal of creating algorithms to enhance collective intelligence.
We consider a social protocol to be a set of rules and mechanisms that govern the interaction of users on social computing platforms.
We started out by analyzing and reverse engineering the [Hacker News](https://news.ycombinator.com/) algorithm since it is very simple by design and has been working pretty well for many years.
We scraped the frontpage every minute for several months to obtain a time series data set (available [here](https://osf.io/bnysw/)) where we could exactly recreate a story's entire lifecycle.
We then developed a new metric to measure attention for stories and estimated how much a story over- or underperformed and [built a hacker news client](https://news.social-protocols.org/) where we display this metric for users to play around with it.
Currently, we are applying our learnings from these projects on a new [social networking site](https://github.com/social-protocols/social-network/) that we hope will be a platform for large-scale constructive discussion.
All our work is open source and [available on GitHub](https://github.com/social-protocols).


## Social Dynamics Hub

Researching social dynamics, opinion dynamics, and agent-based modeling in my time at RWTH Aachen University, I wrote a lot of introductory material on those topic, which we turned into online learning resources.
I built an educational R library ([`gridabm`](https://github.com/socialdynamicshub/gridabm)) to build and animate grid agent-based models in a few lines of code and wrote [lots of explanations](https://socialdynamicshub.github.io/) on cellular automata, agent-based modeling, emergent phenomena in complex social systems, and other related topics.
The site is open source and contribution is encouraged (see the [publication](https://link.springer.com/chapter/10.1007/978-3-031-35748-0_27)).
All code for this project is available on [GitHub](https://github.com/socialdynamicshub).


## ProcessMining.jl

I got pretty interested in process mining a while ago at university.
Most people use the [`pm4py`](https://pm4py.fit.fraunhofer.de/) Python library to do process mining.
However, since Python is a little slow and process mining algorithms can be quite expensive, I thought that the Julia programming language would be a better fit for the task.
I built a process mining library for Julia and although it turned out to be more of a toy project, the library provides a complete process mining workflow with a working implementation of the [alpha algorithm](https://en.wikipedia.org/wiki/Alpha_algorithm), a basic [XES](https://xes-standard.org/) parser, several process models, and plotting functionality.
Implementing the alpha algorithm was particularly difficult and taught me a lot.
I may continue working on this project in the future.
The repository is on [GitHub](https://github.com/johannesnakayama/processmining.jl).


## Citation Networks

The popular R library [`bibliometrix`](https://www.bibliometrix.org/home/) has a lot of useful tools to analyze large datasets of scientific publications as provided by databases such as Scopus.
Surprisingly to me at the time, these do not include a tool to visualize or even analyze the citation relation, i.e., a directed graph where an edge (a, b) represents the relation "publication A cites publication B".
I suspect that this is because this relation is not reliably provided by the major scientific publication databases.
To me, the citation relation was the most interesting graph to analyze, so I built a tool where it could be extracted from database outputs from Scopus, as well as some analysis tooling as described [here](https://arxiv.org/abs/cs/0309023).


## SEMinR

I co-wrote a plotting module for the popular R library [`seminr`](https://github.com/sem-in-r/seminr) which implements structural equation modeling (SEM).
Representing SEMs as directed graphs make them more accessible for explanation and easier to reason about.
The tool we built provides quick access to a graphical representation of a SEM and it is able to produce publication-ready visualizations as well.


## BCACrypt

This was really just a toy project since I was (and still am) fascinated by cellular automata and cryptography.
[Reversible block cellular automata](https://en.wikipedia.org/wiki/Reversible_cellular_automaton) can be used for symmetric encryption which to me was a really unexpected connection.
So I implemented an encryption scheme in Julia using the block cellular automata rules [Critters](https://en.wikipedia.org/wiki/Critters_(cellular_automaton)) and [Tron](https://en.wikipedia.org/wiki/Block_cellular_automaton#Tron).
Encryption and decryption do work, although I certainly doubt that my library constitutes a secure encryption algorithm.
If you find it interesting though, trying to break this encryption and decrypt a message encrypted with this scheme could be a fun learning project.
The library provides a hacky tool to animate the BCAs as well, so playing around with that could also be fun.
The code is on [GitHub](https://github.com/JohannesNakayama/BCACrypt).


## My Dotfiles

Perhaps a bit strange to include my dotfiles in my project list, but I' a passionate Linux user and I've put considerable effort in them.
I've learned tons from studying other peoples' dotfiles, so why not include mine here too?

Currently, I run NixOS and I'm pretty happy with it.
If you're interested in how I setup my computer, you can check out my dotfiles [here](https://github.com/JohannesNakayama/dotfiles).
