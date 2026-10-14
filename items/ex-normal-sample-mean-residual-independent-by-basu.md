---
id: ex-normal-sample-mean-residual-independent-by-basu
kind: example
title: "Normal sample mean and residuals are independent"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-exponential-family
  - thm-full-rank-exponential-family-sufficiency
  - thm-completeness-of-full-exponential-family
  - def-ancillary-statistic
  - thm-basu-independence
  - def-statistic-and-estimator
  - def-standard-normal-and-normal-laws
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-independent-random-elements-have-product-joint-law
  - cor-continuous-functions-are-borel-measurable
  - def-measure-with-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-axiom-of-choice
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - cor-cauchy-schwarz-for-random-variables
  - def-standard-borel-space
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Example

Assume AC. Let $X_1,\ldots,X_n$ be iid $N(\mu,1)$, $\mu\in\mathbb R$, with $n\ge1$. Put $\bar X=n^{-1}\sum_iX_i$ and $R=(X_i-\bar X)_{i=1}^n$. Then $\bar X$ is complete sufficient, $R$ is ancillary, and they are independent for every $\mu$.

## Facts & Assumptions

**Given:** AC, independent observations with laws $N(\mu,1)$, $n\ge1$, and $\mu\in\mathbb R$.

[A1] [[def-axiom-of-choice]]: AC is required by the library's normal-law construction.

[F1] [[def-standard-normal-and-normal-laws]] and [[lem-gaussian-even-moment-bound-for-brownian-increments]]: $N(\mu,1)$ is the law of $\mu+Z$ for $Z\sim N(0,1)$; $E Z=0$ by the symmetric density and $E Z^2=1$.

[F2] [[def-standard-borel-space]], [[def-statistic-and-estimator]], and [[cor-continuous-functions-are-borel-measurable]]: a statistic is a measurable data map, and continuous Euclidean maps are Borel.

[F3] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], and [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]: Lebesgue measure is sigma-finite and proper affine hyperplanes are null.

[F4] [[thm-independent-random-elements-have-product-joint-law]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: independent coordinates have their product law, and nonnegative product densities integrate by iterated integration.

[F5] [[def-exponential-family]]: the density has form $h\exp(\eta T-A(\eta))$, with $A$ the log normalizer.

[F6] [[thm-full-rank-exponential-family-sufficiency]]: the canonical statistic is sufficient.

[F7] [[thm-completeness-of-full-exponential-family]]: the canonical statistic is complete when the parameter set contains a nonempty open subset and the representation has full rank.

[F8] [[def-ancillary-statistic]]: ancillarity means a parameter-independent distribution.

[F9] [[thm-basu-independence]]: a complete sufficient statistic is independent of every ancillary statistic.

[F10] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: translation $z\mapsto\mu+z$ sends the standard normal density to the $N(\mu,1)$ density.

[F11] [[def-measure-with-density]]: a nonnegative Borel density defines a measure relative to its base measure.

[F12] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: product measures on sigma-finite spaces exist, have the rectangle formula, and are unique.

[F13] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]: under AC, products of Euclidean Lebesgue measures agree with the corresponding Euclidean Lebesgue measure on Borel sets.

[F14] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]: product Borel sigma-algebras on Euclidean spaces are the Euclidean Borel sigma-algebras.


## Proof

1.1 The mean map is continuous, hence Borel by [F2] and a statistic. Use $n$-dimensional Lebesgue measure $dx$ as base measure; it is sigma-finite by [F3]. By [F1] and the translation case of [F10], each coordinate has density $\phi(x_i-\mu)$. Independence [F4] gives the product joint law. For $n=1$ this is already the joint density. For $n\ge2$, repeated use of [F13] identifies $\lambda_n$ with the product of the one-dimensional Lebesgue measures. The measure with density $q(x)=\prod_i\phi(x_i-\mu)$ relative to $\lambda_n$ exists by [F11]. Repeated Tonelli [F4] and the rectangle formula [F12] show that its values on Borel rectangles are the products of the marginal probabilities; [F14] says these rectangles generate the Borel sigma-algebra of $\mathbb R^n$, so repeated product-measure uniqueness [F12] identifies it with the joint law. Thus $p_\mu(x)=(2\pi)^{-n/2}\exp(-\tfrac12\sum_i x_i^2+\mu\sum_i x_i-\tfrac n2\mu^2)$. Setting $T=\bar X$, $\eta=n\mu$, and $h(x)=(2\pi)^{-n/2}e^{-\sum_i x_i^2/2}$ writes it as $h(x)e^{\eta T(x)-A(\eta)}$ with $A(\eta)=\eta^2/(2n)$. Completing the square and using Tonelli gives $\int h e^{\eta T}dx=e^{\eta^2/(2n)}$. The natural parameter set is all $\mathbb R$, hence open. For $b\ne0$, the level set $b\bar x=c$ is a proper affine hyperplane, null by [F3], so $T$ has no affine constraint; it is full rank by [F5]. Thus [F6] and [F7] make $\bar X$ sufficient and complete. [A1, F1, F2, F3, F4, F5, F6, F7, F10, F11, F12, F13, F14, given, algebra]

2.1 The residual map $x\mapsto x-\bar x\mathbf1$ is continuous, hence a statistic by [F2]. Write $X_i=\mu+Z_i$ with iid $Z_i\sim N(0,1)$ by [F1]. Then $R_i=Z_i-\bar Z$, so the law of $R$ does not depend on $\mu$; it is ancillary by [F8]. Apply [F9] to conclude $\bar X$ and $R$ are independent under every $P_\mu$. [F1, F2, F8, F9, given, algebra, step 1.1] ∎
