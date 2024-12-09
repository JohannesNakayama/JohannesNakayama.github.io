+++
title = "Social Protocols"
description = "Social Protocols"
weight = 1

[extra]
# local_image = "/projects/social-protocols-logo.png"
+++

The [social protocols organization](https://social-protocols.org/) has the goal of creating algorithms to enhance collective intelligence.
We consider a social protocol to be a set of rules and mechanisms that govern the interaction of users on social computing platforms.
We started out by [analyzing and reverse engineering](https://felx.me/2021/08/29/improving-the-hacker-news-ranking-algorithm.html) the [Hacker News](https://news.ycombinator.com/) algorithm since it is very simple by design and has been working pretty well for many years.
We scraped the frontpage every minute for several months to obtain a time series data set (available [here](https://osf.io/bnysw/)) where we could exactly recreate a story's entire lifecycle.
We then developed a new metric to measure attention for stories and estimated how much a story over- or underperformed and [built a hacker news client](https://news.social-protocols.org/) where we display this metric for users to play around with it.
Currently, we are applying our learnings from these projects on a new [social networking site](https://github.com/social-protocols/social-network/) that we hope will enable large-scale constructive discussion and collective intelligence.
All our work is open source and [available on GitHub](https://github.com/social-protocols).

