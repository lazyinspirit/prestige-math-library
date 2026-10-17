---
id: thm-finite-temperature-free-energy-attains-minimum
kind: theorem
title: "The finite-temperature free energy attains a minimum on the density domain"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-temperature-density-matrix-free-energy
  - lem-finite-temperature-density-domain-compact
  - lem-finite-temperature-entropy-continuous-at-endpoints
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
verification: {}
---

## Statement

For the finite-temperature model of
[[def-finite-temperature-density-matrix-free-energy]], the free energy
$\mathcal F_\beta$ has a global minimizer on $\mathcal D_r$.

## Facts & Assumptions

**Given:** $n\ge2$, $0<r<n$, $\beta>0$, and a real $C^1$ energy $\mathcal E$ on a neighborhood of $\mathcal D_r$.

[F1] The energy is continuous and the entropy trace is defined on $\mathcal D_r$ ([[def-finite-temperature-density-matrix-free-energy]]).

[F2] $\mathcal D_r$ is nonempty and compact ([[lem-finite-temperature-density-domain-compact]]).

[F3] The endpoint-extended entropy trace is continuous ([[lem-finite-temperature-entropy-continuous-at-endpoints]]).

[F4] A continuous real-valued function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

## Proof


1.1 The energy $\mathcal E$ is continuous by [F1], and the entropy trace is continuous by [F3], so their weighted sum $\mathcal F_\beta$ is continuous on $\mathcal D_r$. [F1, F3, given, algebra]

2.1 The domain is nonempty and compact by [F2]. Apply [F4] to $\mathcal F_\beta$ to obtain a minimizer in $\mathcal D_r$. [F2, F4, step 1.1] ∎

