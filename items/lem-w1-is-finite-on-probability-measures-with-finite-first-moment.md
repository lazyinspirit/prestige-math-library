---
id: lem-w1-is-finite-on-probability-measures-with-finite-first-moment
kind: lemma
title: The coupling infimum is finite for finite-first-moment probabilities
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-p-one-wasserstein-one
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

[F2] The product of two sigma-finite measures exists and has the prescribed marginal measures ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]); for Euclidean Borel measures this product is a Borel measure on the Euclidean product ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F3] Tonelli's theorem permits iterated integration of nonnegative measurable functions on the product ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] The Euclidean norm satisfies $|x-y|\le|x|+|y|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof
1.1 Both probability measures are finite, hence sigma-finite. Their product $\mu\otimes\nu$ is a Borel probability measure with marginals $\mu$ and $\nu$ by [F2], so it belongs to $\Pi(\mu,\nu)$ by [F1]. [given, F1, F2, construct]

2.1 The Euclidean inequality [F4] and Tonelli [F3], together with the marginals from step 1.1, give $\int|x-y|d(\mu\otimes\nu)\le\int|x|d\mu+\int|y|d\nu<\infty.$ The infimum in [F1] is nonnegative and no larger than this finite coupling cost. [F1, F3, F4, step 1.1, algebra] ∎
