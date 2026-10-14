---
id: def-orbit-rank-p-value
kind: definition
title: "Orbit upper-tail rank p-values"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-finite-group-randomization-test
  - def-independent-random-elements
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.3, PDF pp. 10–11"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, Sections 2–3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Definition

For a finite-group randomization setup with statistic $T$, the **inclusive orbit upper-tail rank** at $x\in\Omega$ is
$$p_0(x):=\frac{\#\{g\in G:T(g\cdot x)\ge T(x)\}}{|G|}.$$
If $U$ is independent of the observed data and uniform on $[0,1]$, the **tie-randomized orbit rank** is
$$p_U(x,U):=\frac{\#\{g\in G:T(g\cdot x)>T(x)\}+U\,\#\{g\in G:T(g\cdot x)=T(x)\}}{|G|}.$$
Both counts are over group elements, with multiplicity. Thus a nonfree action counts a distinct orbit point as many times as it has preimages under $g\mapsto g\cdot x$.
