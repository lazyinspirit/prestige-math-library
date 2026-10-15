---
id: def-phi-irreducible-chain
kind: definition
title: "Phi-irreducibility for a general-state Markov kernel"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-iterated-transition-kernels
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measurable-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "AC is used only where stated in Facts & Assumptions; otherwise the proof is choice-free."
---
## Definition

Let $(\mathsf X,\mathcal X)$ be a countably generated measurable space ([[def-measurable-space]]), $P$ a probability kernel ([[def-measure-kernel-and-probability-kernel]]), and $\phi$ a nonzero $\sigma$-finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]) on $\mathcal X$. Write $P^n$ for the $n$-fold kernel iterate. The kernel is **$\phi$-irreducible** if, for every $A\in\mathcal X$ with $\phi(A)>0$ and every $x\in\mathsf X$, there is an integer $n\ge1$ such that $P^n(x,A)>0$. Equivalently, the sum of these nonnegative probabilities over $n\ge1$ is positive. No recurrence or invariant law is part of this definition.
