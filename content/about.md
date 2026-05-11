+++
title = "About me"
path = "about"
+++

Hi, I'm Johannes ✌️

I build software that processes and understands documents using AI.
Currently I'm a software engineer at I.R.I.S. AG, working on VLM-based extraction
engines and cloud microservices for intelligent document processing.

Before that, I co-founded [Social Protocols](https://social-protocols.org/) and Jabble (a startup project for
better online conversations), worked as a data scientist at Fabit,
and researched opinion dynamics in complex social systems at RWTH Aachen.

<div class="tabs">
  <nav class="tabs-nav">
    <button class="tab-btn active" data-tab="work">Work Experience</button>
    <button class="tab-btn" data-tab="education">Education</button>
  </nav>
<div class="tab-panel active" id="tab-work">
<div class="timeline">

{% timeline_entry(title="Software Engineer", date="2025 Feb – today", company="IRIS AG", location="Aachen") %}
- develop VLM-based AI extraction engines (C#/Dotnet) as cloud microservices for IRIS Pulse, an intelligent document processing platform
- create automated benchmarking infrastructure for extraction tasks (Rust/C#/Python)
- work on deployment pipelines (Jenkins) and cloud-native orchestration (Kubernetes)
{% end %}

{% timeline_entry(title="Co-Founder, Software Engineer", date="2024 Jan – 2024 Dec", company="Jabble (Startup project)", location="Aachen/Remote") %}
- developed a comment ranking algorithm for collaborative fact-checking to estimate informed and unbiased voting ratios on posts (Julia/C/SQLite)
- built LLM-based automated claim extractors and fallacy detectors for content
- fullstack development (TypeScript/Remix/React/SQLite, Scala), DevOps (GitHub/fly.io/Earthly)
- the project was supported by the Gründungsstipendium NRW and we participated in the Aachen-based digitalHUB Incubator program
{% end %}

{% timeline_entry(title="Data Scientist", date="2022 Aug – 2023 Dec", company="Fabit GmbH", location="Berlin/Remote") %}
- implemented data-driven product features in a personal finance app (frontend: Dart/Flutter, backend: Kotlin/Spring/PostgreSQL)
- developed a recommender system for next actions to improve financial situation and an automated budgeting algorithm
- analyzed user data (R/tidyverse/PostgreSQL/SQLite) and developed financial health metrics
{% end %}

{% timeline_entry(title="Research Assistant", date="2021 Feb – 2022 Jul", company="Human-Computer Interaction Center (RWTH Aachen University)", location="Aachen") %}
- research and teaching on emergent phenomena in complex social systems
- developed agent-based models, e. g. for the spread of information and the divergence and convergence of opinions in social networks
{% end %}

{% timeline_entry(title="Data Science Intern", date="2019 May – 2019 Aug", company="Optinoo GmbH", location="Berlin/Remote") %}
- worked on a matching algorithm and machine learning approaches to find matches between companies and candidates based on culture fit
- deep analysis of company data (R/tidyverse/PostgreSQL) for the development of matching criteria
{% end %}

{% timeline_entry(title="Student Assistant Researcher", date="2018 Feb – 2021 Feb", company="Human-Computer Interaction Center (RWTH Aachen University)", location="Aachen") %}
- modeling of complex social systems as agent-based models
- development of interactive data visualizations, statistical analyses and scientific software
{% end %}

</div>
</div>
<div class="tab-panel" id="tab-education">
<div class="timeline">

{% timeline_entry(title="Technical Communication (Computer Science) Master of Science", date="2018 Oct - 2020 Nov", company="RWTH Aachen University", location="Aachen") %}
- **Thesis:** Modeling Change of Collective Behavior in Situations of Crisis: A Comparison of Health and Environmental Scenarios Using Agent-Based Simulation (grade 1.0\*)
- [View model on GitHub](https://github.com/JohannesNakayama/EpidemicModel.jl)
{% end %}


{% timeline_entry(title="Technical Communication (Computer Science) Bachelor of Science", date="2013 Oct - 2018 Sep", company="RWTH Aachen University", location="Aachen") %}
- **Thesis:** The Influence of Decision Support Systems on User Performance in Complex Tasks (grade 1.0\*)
{% end %}

</div>
<p style="color: var(--text-1); font-size: 0.85em; margin-top: 1.5rem;">
  *German grades: 1.0 = A, 2.0 = B, 3.0 = C, 4.0 = D, 5.0 = E
</p>
</div>
</div>

<script src="/js/tabs.js"></script>
