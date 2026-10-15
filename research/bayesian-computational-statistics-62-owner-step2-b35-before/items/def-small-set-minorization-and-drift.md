---
id: def-small-set-minorization-and-drift
kind: definition
title: "Small-set minorization and geometric drift"
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
axiom_use: "AC is used only where stated in Facts & Assumptions; otherwise the proof is choice-free."
---
## Definition

For a probability kernel $P$ on $(\mathsf X,\mathcal X)$ ([[def-measure-kernel-and-probability-kernel]]), a measurable set $C$ is **$(m,\epsilon,\nu)$-small** if $m\ge1$ is an integer, $0<\epsilon\le1$, $\nu$ is a probability measure ([[def-probability-measure]]), and
$$P^m(x,A)\ge\epsilon\nu(A)\quad(x\in C,\ A\in\mathcal X).$$
The inequality is pointwise in $x$ and holds for every measurable $A$.

A **geometric drift inequality outside $C$** consists of a finite-valued measurable $V:\mathsf X\to[1,\infty)$, constants $0<\lambda<1$ and $0\le b<\infty$, and
$$PV(x):=\int V(y)P(x,dy)\le\lambda V(x)+b\,1_C(x)\quad(x\in\mathsf X).$$
The terms small set and drift are separate hypotheses; neither definition asserts the existence of the other.
