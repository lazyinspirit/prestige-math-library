---
id: def-geometric-and-uniform-ergodicity-for-mcmc-clt
kind: definition
title: Geometric and uniform ergodicity for MCMC CLTs
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-iterated-transition-kernels
  - def-measure-kernel-and-probability-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §2"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §§3–4"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
verification:
  precheck: n/a
axiom_use: "The time-homogeneous Markov-chain supplier uses conditional-expectation classes under AC; no further choice is used here."
---

## Definition

Let $P$ be a probability kernel with invariant probability $\pi$ on a measurable space $(\mathsf X,\mathcal X)$. Write $P^n(x,\cdot)$ for its $n$-step transition probability and use $\|\mu-\nu\|_{\mathrm{TV}}=\sup_{A\in\mathcal X}|\mu(A)-\nu(A)|$ for probability measures.

The chain is **geometrically ergodic** if there are a measurable finite function $M:\mathsf X\to[0,\infty)$ and $r\in(0,1)$ such that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad(x\in\mathsf X,\ n\ge1).$$

It is **uniformly ergodic** if this bound holds with $M$ bounded on $\mathsf X$. These are convergence-rate properties, not conclusions about a particular function's CLT or long-run variance. If a proof needs $\int M\,d\pi<\infty$, that integrability is an additional stated hypothesis unless a cited theorem establishes it.
