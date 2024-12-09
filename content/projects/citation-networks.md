+++
title = "Citation Networks"
description = "Example description"
weight = 4

[extra]
# remote_image = "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
+++

The popular R library [`bibliometrix`](https://www.bibliometrix.org/home/) has a lot of useful tools to analyze large datasets of scientific publications as provided by databases such as Scopus.
Surprisingly to me at the time, these do not include a tool to visualize or even analyze the citation relation, i.e., a directed graph where an edge (a, b) represents the relation "publication A cites publication B".
I suspect that this is because this relation is not reliably provided by the major scientific publication databases.
To me, the citation relation was the most interesting graph to analyze, so I built a tool where it could be extracted from database outputs from Scopus, as well as some analysis tooling as described [here](https://arxiv.org/abs/cs/0309023).
