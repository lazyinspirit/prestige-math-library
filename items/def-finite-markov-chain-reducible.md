---
id: def-finite-markov-chain-reducible
kind: definition
title: Reducibility of a finite Markov chain
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
verification:
  precheck: n/a
axiom_use: "No choice principle is used."
---

## Definition

Let $E$ be a finite nonempty state space and $p$ a transition matrix on $E$. A subset $C\subseteq E$ is **closed** when $\sum_{y\in C}p(x,y)=1$ for every $x\in C$. The finite chain is **reducible** when it has a nonempty proper closed subset. This definition is the only reducibility convention used by the finite-support example on this page.

