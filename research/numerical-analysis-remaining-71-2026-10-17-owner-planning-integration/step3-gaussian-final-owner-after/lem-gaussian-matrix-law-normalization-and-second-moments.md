---
id: lem-gaussian-matrix-law-normalization-and-second-moments
kind: lemma
title: Normalization and second moments of the Gaussian matrix laws
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-gaussian-density-integrals-for-supplied-length-measures, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithms 4.1 and 4.4 and Gaussian conventions in section 10.1; local prerequisite proof"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice. The scalar and finite product densities in
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]] have total
mass one. A real entry has mean zero and second moment one; a normalized
complex entry has mean zero and $\mathbb E|z|^2=1$. The image of two independent
real entries under $(x,y)\mapsto(x+iy)/\sqrt2$ has density
$\pi^{-1}e^{-|z|^2}$. These facts justify the probability laws in that definition.

## Facts & Assumptions

**Given:** Countable Choice and the displayed density formulas in the Gaussian-law definition, initially regarded simply as functions.

[F1] Countable Choice supplies complete Euclidean Lebesgue measures with half-open-box volumes, and Borel sets are measurable. [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-borel-sets-are-lebesgue-measurable]]

[F2] For supplied countably additive Borel length measures with these interval volumes, the real density $(2\pi)^{-1/2}e^{-x^2/2}$ has mass one, absolutely integrable mean zero, and second moment one. [[lem-gaussian-density-integrals-for-supplied-length-measures]]

[F3] Invertible real linear maps scale Lebesgue measure by the absolute determinant. [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] Euclidean Lebesgue measure agrees on Borel sets with the product of its coordinate measures; Tonelli applies to nonnegative product-measurable functions on sigma-finite spaces. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Increasing nonnegative measurable functions commute with integration. [[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 Restrict the measures in [F1] to Borel sets in dimensions one and two. They meet exactly the supplied-measure hypotheses of [F2]. With location zero and variance one, [F2] gives real mass one, mean zero, absolute first-moment integrability, and second moment one. No normal-law result assuming full Choice is used. [given, F1, F2]

2.1 The map $T(x,y)=(x/\sqrt2,y/\sqrt2)$ has determinant $1/2$. By [F3], the image density is $2\varphi_R(\sqrt2u)\varphi_R(\sqrt2v)=\pi^{-1}e^{-(u^2+v^2)}$. The integral transformation follows first for indicator functions from [F3], then for simple functions and their increasing limits. Its mass is one by step 1.1 and [F4]. By the same product integration, $\mathbb E|z|^2=\mathbb E(x^2+y^2)/2=1$, and both real and imaginary means vanish; their absolute integrability follows from that of $x,y$. [step 1.1, F3, F4, algebra]

3.1 For any positive finite number of entries, repeated [F4] factors the integral of the nonnegative Borel product density into scalar integrals, each one. All coordinate spaces are sigma-finite, being countable unions of bounded boxes. Integrating over a product of Borel entry sets similarly gives the product of their scalar probabilities, which establishes independence. The integral of the density over sets defines a countably additive probability measure: for disjoint sets, the finite sums of their density-weighted indicators increase to the density times the indicator of their union, so monotone convergence, by [F5], gives countable additivity. For zero entries use the one-point space of mass one and the empty product. Thus all finite laws in the definition are justified using only the stated Countable Choice. [step 1.1, step 2.1, F4, F5, algebra] ∎
