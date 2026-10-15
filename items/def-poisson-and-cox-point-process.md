---
id: def-poisson-and-cox-point-process
kind: definition
title: "Poisson and Cox point processes"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-random-measure-and-locally-finite-point-process
  - lem-mean-measure-and-integrals-of-a-random-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
  - def-independent-random-elements
  - def-finite-sigma-finite-and-semifinite-measures
  - lem-locally-compact-second-countable-spaces-have-compact-exhaustions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
verification:
  precheck: n/a
---

## Definition

Let $S$ be as in [[def-random-measure-and-locally-finite-point-process]]. A
**Poisson point process with locally finite, sigma-finite intensity measure
$\nu$** is a point process $\eta$ such that for every finite pairwise-disjoint
family of Borel sets $B_1,\ldots,B_m$, the counts $\eta(B_i)$ are independent
random elements ([[def-independent-random-elements]]) and $\eta(B_i)$ has the
scalar Poisson law of mean $\nu(B_i)$
([[def-scalar-poisson-count-law]],
[[lem-poisson-count-law-normalization-and-moments]]). If $\nu(B)=\infty$,
the extended count convention is $\eta(B)=+\infty$ almost surely.
Here sigma-finite means that $S$ is a countable union of Borel sets of finite
$\nu$-measure ([[def-finite-sigma-finite-and-semifinite-measures]]); for the
stated $S$, local finiteness also implies sigma-finiteness by the compact
exhaustion in
[[lem-locally-compact-second-countable-spaces-have-compact-exhaustions]].

Let $\mathcal M_{\mathrm{lf}}(S)$ be the evaluation-measurable space of locally
finite Borel measures. A **Cox point process directed by a random measure
$\xi$** consists of a point process $\eta$, a random locally finite measure
$\xi$, and a supplied probability kernel $K$ from $\mathcal M_{\mathrm{lf}}(S)$
to $\mathcal N_{\mathrm{lf}}(S)$ such that $K(\xi,\cdot)$ is a regular
conditional law of $\eta$ given $\xi$
([[def-conditional-law-given-a-random-element]]) and, for $P_\xi$-almost every
$\mu$, $K(\mu,\cdot)$ is the law of a Poisson point process of intensity
$\mu$. The kernel is part of the model data; this definition does not assert
that such a kernel exists for every $(\eta,\xi)$. The mean measure of $\xi$ is
$\nu(B)=\mathbb E[\xi(B)]$, a measure by
[[lem-mean-measure-and-integrals-of-a-random-point-process]].

Both definitions permit multiplicities. They do not assert that diffuse
directing measures yield simple processes or that a Cox law determines the law
of its directing measure.

