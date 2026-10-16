---
id: def-qa-18-marked-set-and-stationary-mass
kind: definition
title: "Marked sets, stationary mass, and walk-search tasks"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-17-finite-reversible-chain
  - def-promise-problem
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapters 18 and 20"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Definition

Let $(X,P,\pi)$ be a finite reversible Markov chain with positive stationary law, as in [[def-qa-17-finite-reversible-chain]], and let $\mathcal M\subseteq X$ be a set of marked states. Its **stationary marked mass** is

$$\varepsilon:=\pi(\mathcal M)=\sum_{x\in\mathcal M}\pi_x.$$

For a specified threshold $\varepsilon_0\in(0,1]$, the **marked-set detection promise problem** has yes-instances with $\mathcal M\ne\varnothing$ and $\varepsilon\ge\varepsilon_0$, and no-instances with $\mathcal M=\varnothing$. The required classical output is one bit distinguishing these two cases; its permitted failure probability is a separate algorithm input. In the uniform-chain case, $\pi_x=1/|X|$, so $\varepsilon=|\mathcal M|/|X|$.

The **marked-state finding promise problem** has inputs with $\varepsilon\ge\varepsilon_0$ and requires a classical output $x\in\mathcal M$. It is a different output relation from detection. A claimed output is checked by the declared finite projective measurement and marked predicate; the corresponding outcome law is [[def-qc-projective-measurement]] and [[def-qc-povm-and-outcome-law]]. The encoding of $X$, the coherent marked predicate, and all state-preparation and transition circuits are supplied input data, not consequences of the finite chain matrix.
