---
id: def-gibbs-reversibility-for-a-markov-kernel
kind: definition
title: Reversibility for a probability kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
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

Let $P$ be a probability kernel on $(S,\mathcal S)$ and let $\pi$ be a probability measure on that space. The kernel $P$ is **reversible with respect to $\pi$**, or satisfies **detailed balance**, when
$$
\int_A P(x,C)\,\pi(dx)=\int_C P(y,A)\,\pi(dy)\qquad(A,C\in\mathcal S).
$$
This is the symmetry of the two-time transition flow $\pi(dx)P(x,dy)$, stated through its values on measurable rectangles. The definition is for a general measurable state space and makes no irreducibility, uniqueness, or convergence assertion. Invariance means $\int P(x,A)\,\pi(dx)=\pi(A)$ for every $A\in\mathcal S$, as in [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

