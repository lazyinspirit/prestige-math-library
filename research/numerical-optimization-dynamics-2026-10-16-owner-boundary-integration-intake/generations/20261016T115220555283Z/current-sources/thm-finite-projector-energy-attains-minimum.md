---
id: thm-finite-projector-energy-attains-minimum
kind: theorem
title: "A finite-basis projector energy attains a global minimum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-basis-projector-energy-model
  - prop-finite-projector-energy-reality-and-gradient
  - lem-finite-projector-domain-compact
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
verification: {}
---

## Statement

For every finite-basis projector energy $E$ defined in
[[def-finite-basis-projector-energy-model]], there is $P_{\min}\in\mathcal P_r$
such that $E(P_{\min})\le E(P)$ for every $P\in\mathcal P_r$. This is a
finite-dimensional variational existence result and makes no continuum
Hartree–Fock or Kohn–Sham existence claim.

## Facts & Assumptions

**Given:** The model data of [[def-finite-basis-projector-energy-model]] and $1\le r<n$.

[F1] The model energy is real and $C^2$ on a neighborhood of $\mathcal P_r$ ([[def-finite-basis-projector-energy-model]], [[prop-finite-projector-energy-reality-and-gradient]]).

[F2] The nonempty domain $\mathcal P_r$ is compact ([[lem-finite-projector-domain-compact]]).

[F3] A real continuous function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

## Proof


1.1 By [F1], the restriction $E|_{\mathcal P_r}$ is continuous. The domain with its Frobenius metric is nonempty and compact by [F2]. [F1, F2, given]

2.1 Apply [F3] to $E|_{\mathcal P_r}$. It yields $P_{\min}\in\mathcal P_r$ with $E(P_{\min})\le E(P)$ for every $P$ in the domain. The argument uses only the specified finite matrix model. [F3, step 1.1] ∎

