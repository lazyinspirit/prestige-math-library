---
id: lem-signed-bl-norm-dominated-by-split-coupling-cost
kind: lemma
title: The bounded-Lipschitz dual discrepancy is bounded by split transport cost
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bounded-lipschitz-dual-norm-for-signed-measures
  - def-signed-split-transport-cost
  - def-axiom-of-choice
  - thm-jordan-decomposition-for-signed-measures
  - def-measure
  - prop-jordan-parts-and-total-variation-formulas-for-signed-measures
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: The Jordan parts use the Axiom of Choice; the coupling inequality after the parts are supplied is choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Assume AC for the Jordan decompositions in [[def-signed-split-transport-cost]]. Let $d\ge1$. If finite signed Borel measures $\omega,\nu$ on $\mathbb R^d$ have the same positive-part mass and the same negative-part mass, and their total variations have finite first moments, then the couplings in $C_{\pm}(\omega,\nu)$ exist, $C_{\pm}(\omega,\nu)<\infty$, and
$$d_{BL}(\omega,\nu)\le C_{\pm}(\omega,\nu).$$

## Facts & Assumptions

**Given:** The signed measures and matching Jordan-part masses of the Statement, with finite first moments of their total variations.

[A1] Assume the Axiom of Choice for existence of the Jordan parts ([[def-axiom-of-choice]]).

[F1] Jordan decomposition gives positive mutually singular parts $\omega^+,\omega^-$ and $\nu^+,\nu^-$ ([[thm-jordan-decomposition-for-signed-measures]], [[def-measure]]).

[F2] The product of finite measures exists with the product marginals, and Tonelli integrates nonnegative costs ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the product sigma-algebra of Euclidean Borel spaces is the Euclidean product Borel sigma-algebra ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]). The Euclidean triangle inequality gives $|x-y|\le|x|+|y|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). Also, $|\omega|=\omega^++\omega^-$ and $|\nu|=\nu^++\nu^-$; hence each Jordan part is dominated by its total variation measure. For a nonnegative simple function, the simple integral is monotone under this measure domination by its defining finite sum; taking the supremum over simple minorants in the nonnegative integral definition gives $\int|x|d\omega^\sigma\le\int|x|d|\omega|$ and the analogous bound for $\nu^\sigma$ ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]], [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F3] The definitions of $d_{BL}$ and $C_{\pm}$ use tests bounded by one with Lipschitz constant at most one, and positive/negative couplings ([[def-bounded-lipschitz-dual-norm-for-signed-measures]], [[def-signed-split-transport-cost]]).

## Proof
1.1 For a sign with common mass $m>0$, the measure $(\omega^\sigma\otimes\nu^\sigma)/m$ has marginals $\omega^\sigma,\nu^\sigma$ by [F2]; its cost is at most $\int|x|d\omega^\sigma+\int|y|d\nu^\sigma<\infty$ by $|x-y|\le|x|+|y|$ and [F2]. If $m=0$, both parts vanish and the zero measure is a coupling. Applying this to each sign proves nonempty finite-cost coupling sets. [A1, F1, F2, given, construct]

2.1 Fix any admissible $\pi^+,\pi^-$ and any test $\phi$ in [F3]. The marginals give $\int\phi d(\omega-\nu)=\int(\phi(x)-\phi(y))d\pi^+-\int(\phi(x)-\phi(y))d\pi^-.$ Each absolute integrand is at most $|x-y|$ by the Lipschitz bound. Thus $|\int\phi d(\omega-\nu)|$ is at most the sum of the two coupling costs. [F3, step 1.1, algebra]

3.1 Taking the supremum over tests and then the infimum over the nonempty coupling sets in step 1.1 proves $d_{BL}(\omega,\nu)\le C_{\pm}(\omega,\nu)<\infty$. No minimizing coupling is used. [F3, step 1.1, step 2.1] ∎
