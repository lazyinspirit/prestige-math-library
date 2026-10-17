---
id: lem-w1-is-finite-on-probability-measures-with-finite-first-moment
kind: lemma
title: The coupling infimum is finite for finite-first-moment probabilities
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-p-one-wasserstein-one
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

If $\mu,\nu$ are Borel probability measures on $\mathbb R^d$ with finite first moments, then $\Pi(\mu,\nu)$ is nonempty and $W_1(\mu,\nu)<\infty$ for the definition in [[def-p-one-wasserstein-one]].

## Facts & Assumptions

**Given:** Borel probability measures $\mu,\nu$ on $\mathbb R^d$ and $\int|x|d\mu,\int|y|d\nu<\infty$.

[F1] $W_1$ is the infimum of the coupling costs over Borel probability couplings with the stated marginals ([[def-p-one-wasserstein-one]]).

[F2] The product of two sigma-finite measures exists and has the prescribed marginal measures ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F3] Tonelli's theorem permits iterated integration of nonnegative measurable functions on the product ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof
1.1 Both probability measures are finite, hence sigma-finite. Their product $\mu\otimes\nu$ is a Borel probability measure with marginals $\mu$ and $\nu$ by [F2], so it belongs to $\Pi(\mu,\nu)$ by [F1]. [given, F1, F2, construct]

2.1 The pointwise inequality $|x-y|\le |x|+|y|$ and [F3] give $\int|x-y|d(\mu\otimes\nu)\le\int|x|d\mu+\int|y|d\nu<\infty.$ The infimum in [F1] is nonnegative and no larger than this finite coupling cost. [F1, F3, step 1.1, algebra] ∎
