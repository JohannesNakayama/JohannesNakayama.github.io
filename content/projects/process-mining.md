+++
title = "ProcessMining.jl"
description = "Example description"
weight = 3

[extra]
# remote_image = "https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80"
+++

I got pretty interested in process mining a while ago at university.
Most people use the [`pm4py`](https://pm4py.fit.fraunhofer.de/) Python library to do process mining.
However, since Python is a little slow and process mining algorithms can be quite expensive, I thought that the Julia programming language would be a better fit for the task.
I built a process mining library for Julia and although it turned out to be more of a toy project, the library provides a complete process mining workflow with a working implementation of the [alpha algorithm](https://en.wikipedia.org/wiki/Alpha_algorithm), a basic [XES](https://xes-standard.org/) parser, several process models, and plotting functionality.
Implementing the alpha algorithm was particularly difficult and taught me a lot.
I may continue working on this project in the future.
The repository is on [GitHub](https://github.com/johannesnakayama/processmining.jl).

