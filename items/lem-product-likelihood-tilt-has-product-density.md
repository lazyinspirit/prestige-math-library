---
id: lem-product-likelihood-tilt-has-product-density
kind: lemma
title: "Product likelihood tilts have the product density"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
  - def-probability-measure
  - def-measure-with-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2, pp. 368–370"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Statement

Under the setup of [[def-likelihood-tilted-measure-at-kl-projection]] and
[[lem-likelihood-tilted-measure-is-sigma-finite]], for each $\theta$ and
integer $n\ge1$, the sigma-finite product measure $Q_\theta^n$ exists and
has density
$$\prod_{i=1}^n r_\theta(x_i),\qquad r_\theta(x):=\frac{p_\theta(x)}{p_{\theta^*}(x)},$$
relative to $P_0^n$. Ratios are zero where $p_{\theta^*}=0$, as in the
likelihood-tilt definition.

## Facts & Assumptions

**Given:** A probability measure $P_0$, its product measure $P_0^n$, the
likelihood tilt $Q_\theta=r_\theta P_0$, and the finite product sigma-algebra.

[F1] [[def-likelihood-tilted-measure-at-kl-projection]]: $Q_\theta(A)=\int_A
r_\theta\,dP_0$ with $r_\theta$ nonnegative and finite.

[F2] [[lem-likelihood-tilted-measure-is-sigma-finite]]: $Q_\theta$ is a
sigma-finite measure.

[F3] [[def-probability-measure]]: $P_0$ is finite, hence sigma-finite.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]:
repeated application gives finite products of sigma-finite measures; these
have the rectangle formula and are unique among measures with that formula.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
product-measurable functions may be integrated by repeated nonnegative
integration, and the iterated integrals equal the product integral.

[F6] [[def-measure-with-density]]: a nonnegative measurable density relative
to a measure defines a measure by integration.

[F7] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]:
coordinate maps on a finite product are measurable.

[F8] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]:
finite products of nonnegative measurable functions are measurable.

## Proof


**Given:** The hypotheses and conventions in the Statement.

1.1 Fix $\theta$ and $n\ge1$. By [F2] and [F3], the product measures $Q_\theta^n$ and $P_0^n$ exist and are sigma-finite. For $x_{1:n}=(x_1,\ldots,x_n)$, every coordinate map is measurable by [F7], so $f_n(x_{1:n}):=\prod_{i=1}^n r_\theta(x_i)$ is nonnegative and measurable. [F1, F2, F3, F7, F8, given]

2.1 Define $R_n(A):=\int_A f_n\,dP_0^n$ on the product sigma-algebra. By [F6], $R_n$ is a measure. For every measurable rectangle $A_1\times\cdots\times A_n$, repeated Tonelli integration [F5] gives $R_n(A_1\times\cdots\times A_n) =\prod_{i=1}^n\int_{A_i}r_\theta\,dP_0 =\prod_{i=1}^n Q_\theta(A_i) =Q_\theta^n(A_1\times\cdots\times A_n),$ where the final equality is [F4]'s rectangle formula. [F1, F4, F5, F6, step 1.1]

3.1 The measures $R_n$ and $Q_\theta^n$ agree on the generating pi-system of measurable rectangles by step 2.1. The product-measure theorem [F4] gives uniqueness for this rectangle formula, so $R_n=Q_\theta^n$ on the whole product sigma-algebra. By the definition of $R_n$, its density is $f_n=\prod_{i=1}^n r_\theta(x_i)$, as claimed. [F4, step 2.1] ∎

