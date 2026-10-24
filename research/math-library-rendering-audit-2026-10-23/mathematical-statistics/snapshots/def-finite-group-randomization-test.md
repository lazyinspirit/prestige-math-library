---
id: def-finite-group-randomization-test
kind: definition
title: "Finite-group randomization setups"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-group-action
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

A **finite-group randomization setup** consists of a finite probability space $(\Omega,w)$ as in [[def-finite-probability-space-and-event]], a finite group $G$ acting on $\Omega$ as in [[def-group-action]], a statistic $T:\Omega\to\mathbb R$, and a family $\mathcal P_0$ of null probability laws on $\Omega$ that is invariant under the action. Invariance means that for every $P\in\mathcal P_0$, $g\in G$, and $A\subseteq\Omega$, $P(\{x:g\cdot x\in A\})=P(A)$. The **orbit** of $x$ is $O(x):=\{g\cdot x:g\in G\}$, a finite subset of $\Omega$. The setup itself does not assert that the action is free or that distinct group elements give distinct orbit points.
