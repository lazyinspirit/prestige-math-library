---
id: def-petite-set-for-markov-kernel
kind: definition
title: "Petite sets for a Markov kernel"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-iterated-transition-kernels
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "The proof is choice-free except for the exact AC uses identified in Facts & Assumptions."
---
## Definition

For a probability kernel $P$ from $(\mathsf X,\mathcal X)$ to itself ([[def-measure-kernel-and-probability-kernel]]), a set $D\in\mathcal X$ is **petite** if there are a probability measure $\nu$ on $(\mathsf X,\mathcal X)$ ([[def-probability-measure]]), nonnegative weights $(a_n)_{n\ge1}$ with $\sum_{n\ge1}a_n=1$, and a constant $\alpha>0$ such that
$$\sum_{n\ge1}a_nP^n(x,A)\ge\alpha\nu(A)\quad(x\in D,\ A\in\mathcal X).$$
This is a randomized-time minorization. A small set requires one fixed time; a petite set permits a common distribution over positive integer times.
