---
id: def-signed-split-transport-cost
kind: definition
title: Sign-preserving transport cost for finite signed measures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-signed-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-euclidean-inner-product
  - thm-jordan-decomposition-for-signed-measures
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: The canonical Jordan parts used here are supplied by a theorem whose general existence branch assumes the Axiom of Choice.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
---

## Definition

Assume $d\ge1$ and the Axiom of Choice when invoking [[thm-jordan-decomposition-for-signed-measures]]. Let $\omega,\nu$ be finite signed Borel measures on $\mathbb R^d$ whose total variations have finite first moments, and use the Euclidean norm from [[def-euclidean-inner-product]]. Write their Jordan parts as $\omega^+,\omega^-$ and $\nu^+,\nu^-$. If the positive-part masses agree and the negative-part masses agree, define using finite nonnegative Borel measures $\pi^\pm$ on $\mathbb R^d\times\mathbb R^d$ whose first and second marginals are respectively the corresponding positive or negative Jordan parts:
$$C_{\pm}(\omega,\nu):=\inf_{\pi^+,\pi^-}\left(\int|x-y|d\pi^+(x,y)+\int|x-y|d\pi^-(x,y)\right),$$
where $\pi^+$ ranges over finite nonnegative couplings of $\omega^+$ and $\nu^+$, and $\pi^-$ over finite nonnegative couplings of $\omega^-$ and $\nu^-$. The infimum is over both sign couplings independently. This cost is not the probability $W_1$.
