---
id: def-general-state-aperiodic-markov-chain
kind: definition
title: "Aperiodicity for a general-state Markov kernel"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
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

Let $P$ be a $\phi$-irreducible probability kernel ([[def-phi-irreducible-chain]]) with invariant probability $\pi$ ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]). The chain is **aperiodic** if there do not exist an integer $d\ge2$ and pairwise disjoint measurable sets $X_1,\ldots,X_d$ such that $\pi(X_1)>0$ and
$$P(x,X_{i+1})=1\quad(x\in X_i,\ 1\le i<d),\qquad P(x,X_1)=1\quad(x\in X_d).$$
Invariance then gives $\pi(X_i)>0$ for every $i$. The sets need not cover the full state space; the definition rules out any positive-mass cyclic part. Aperiodicity does not itself assert convergence.