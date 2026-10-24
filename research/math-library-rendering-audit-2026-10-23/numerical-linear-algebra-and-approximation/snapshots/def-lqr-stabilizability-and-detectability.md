---
id: def-lqr-stabilizability-and-detectability
kind: definition
title: "Stabilizability and detectability for continuous and discrete linear systems"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node113.html"
      locator: "§6.2.1, monotone and bounded finite-horizon values and CARE limit"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, CARE assumptions, Hamiltonian graph, and Newton methods"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.1, definitions of discrete stabilizability and detectability"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $F\in\{\mathbb R,\mathbb C\}$, $n,m,p\ge1$, $A\in F^{n\times n}$, $B\in F^{n\times m}$, and $C\in F^{p\times n}$. A matrix is **Hurwitz** when every complex eigenvalue has strictly negative real part, as in [[def-hurwitz-matrix-and-continuous-lyapunov-equation]]. It is **Schur stable** when every complex eigenvalue has modulus strictly less than one.

The pair $(A,B)$ is **continuously stabilizable** if some $K\in F^{m\times n}$ makes $A-BK$ Hurwitz. The pair $(A,C)$ is **continuously detectable** if some $L\in F^{n\times p}$ makes $A-LC$ Hurwitz.

The pair $(A,B)$ is **discretely stabilizable** if some $K\in F^{m\times n}$ makes $A-BK$ Schur stable. The pair $(A,C)$ is **discretely detectable** if some $L\in F^{n\times p}$ makes $A-LC$ Schur stable. These are exact existential properties of the given finite matrices. A residual size or an approximate spectral estimate does not itself establish any of them.
