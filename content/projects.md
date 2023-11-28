+++
title = "Projects"
description = "Some projects I've worked on"
date = "2023-11-19"
aliases = ["projects", "portfolio"]
author = "Johannes Nakayama"
+++

# Social Protocols

The social protocols organization has the goal of creating algorithms to enable large-scale constructive discussions, the more abstract aim being to enhance collective intelligence.
We consider a social protocol to be a set of rules and mechanisms that govern the interaction of users on social computing platforms.
We started out by analyzing and reverse engineering the Hacker News algorithm since it is very simple by design and has been working pretty well for many years now, with no apparent "Eternal September".
We scraped the frontpage every minute for several months to obtain a time series data set where we could exactly recreate a story's trajectory over its entire lifecycle.
We then developed a new metric to measure attention for stories and estimated how much a story over- or underperformed and built a hacker news client where we display this metric for users to play around with it.

Currently, we are applying our learnings from these projects on a new social networking site that we hope will be a platform that enables collective intelligence by design.


# Sem-in-r

I co-wrote a plotting library for the popular `seminr` R library.
`seminr` implements structural equation modeling (SEM).
A structural equation model can be represented as a directed graph which makes it more accessible for explanation.
Graphical representations of SEMs are common in scientific publications, so the tool we wrote is intended to provide publication-ready visualizations of SEMs as well.


# Citation Networks

The popular scientometrics library `bibliometrix` for R has a lot of useful tools to analyze large datasets of scientific publications as they are provided by databases such as Scopus.
Surprisingly to me at the time, these do not include a tool to visualize or even analyze the citation relation, i.e., a directed graph where an edge (a, b) represents the relation "publication A cites publication B".
As that seemed the most important graph to analyze at the time, I built a tool where this relation can be extracted from database outputs from Scopus, as well as some analysis tooling as described by Batagelj [TODO].


# ProcessMining.jl

I was a little unhappy with the `pm4py` library which provides process mining tools for Python.
It used to have quite a clunky API and was slow and unpleasant to use (I haven't checked in a long time, I believe it has improved since then).
As I was using Julia a lot, I started building a library for Julia implementing process mining tools.
That turned out to be too daunting of a task, but at least I managed to implement an xes parser, a petri net module to represent process models, the alpha algorithm, and a rough visualization module.
Implementing the alpha algorithm was particularly difficult and taught me a lot.


# Social Dynamics Hub

As I was researching social dynamics, opinion dynamics, and agent-based modeling in my time as a researcher at RWTH Aachen University, I wrote a lot of introductory material on the topic, which we then turned into an online learning resource.
I built a toy R library to build and animate grid agent-based models in a few lines of code and wrote a lot of explanations on cellular automata, agent-based modeling, emergent phenomena in complex social systems, among other topics.
The site is open source and contribution is encouraged (as described in the publication [TODO: link]).


# BCACrypt

This was really just a toy project since I was (and am still) fascinated by cellular automata and cryptography.
I thought that reversible block cellular automata could be used for symmetric encryption and implemented my idea in Julia.
The encryption and decryption actually work, although this is certainly not a secure encryption algorithm.
It was just something I built for fun and I would highly discourage using it for any real use cases.
If you find it interesting though, trying to decrypt a message encrypted with this scheme could be a fun learning project.
The library provides a hacky tool to animate the BCAs as well, so playing around with that could also be fun.

