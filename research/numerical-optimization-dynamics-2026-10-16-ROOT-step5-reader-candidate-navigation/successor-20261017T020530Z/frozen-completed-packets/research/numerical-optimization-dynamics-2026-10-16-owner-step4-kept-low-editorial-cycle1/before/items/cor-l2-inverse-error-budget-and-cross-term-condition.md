---
id: cor-l2-inverse-error-budget-and-cross-term-condition
kind: corollary
title: "An inverse-error chain obeys Minkowski in $L^2$; root-sum-square is equivalent to aggregate cross-term cancellation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - thm-tikhonov-error-chain-with-discretization-and-residual
  - def-calligraphic-l-p-on-a-measure-space
  - thm-minkowski-inequality-for-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-inner-product-space
  - cor-inner-product-induces-a-norm
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Minkowski's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
      locator: "Section 7C, Minkowski's inequality for integrals."
    - title: "John K. Hunter, Measure Theory, Theorem 7.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
      locator: "Section 7.2, Theorem 7.5 (Minkowski inequality), printed p. 80, PDF p. 84; statement without proof."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6, Hilbert-space Tikhonov error context, PDF pp. 56–63."
---

## Statement

Let $(\Omega,\mathcal F,\mu)$ be a measure space and $H$ a real or complex
inner-product space. Let $d_1,\ldots,d_N:\Omega\to H$ be a finite list, with
$N\ge1$, such that $f_j(\omega)=\|d_j(\omega)\|_H$ and
$g(\omega)=\|\sum_{j=1}^N d_j(\omega)\|_H$ are measurable and each $f_j$
belongs to $\mathcal L^2(\mu)$. Assume also that the scalar pairings
$\langle d_i,d_j\rangle_H$ are measurable. For any such map $d$ whose norm
function is in $\mathcal L^2(\mu)$, write

$$\|d\|_{2,H}:=\left(\int_\Omega\|d(\omega)\|_H^2\,d\mu\right)^{1/2}.$$

Then the error sum obeys

$$\left\|\sum_{j=1}^N d_j\right\|_{2,H} \le\sum_{j=1}^N\|d_j\|_{2,H}.$$

Moreover,

$$\left\|\sum_{j=1}^N d_j\right\|_{2,H}^2 =\sum_{j=1}^N\|d_j\|_{2,H}^2+ 2\sum_{1\le i<j\le N}\int_\Omega \operatorname{Re}\langle d_i(\omega),d_j(\omega)\rangle_H\,d\mu.$$

Thus root-sum-square equality holds if and only if the aggregate cross-term sum
$$\sum_{1\le i<j\le N}\int_\Omega\operatorname{Re}\langle d_i(\omega),d_j(\omega)\rangle_H\,d\mu=0.$$
Individual cross integrals may be nonzero and cancel; their separate vanishing
is sufficient but is not necessary. Root-sum-square does not follow from the
pathwise triangle inequality alone.
When Countable Choice is assumed as in
[[thm-tikhonov-error-chain-with-discretization-and-residual]], the result
applies to its finite bias/noise/discretization/solve chains.

## Facts & Assumptions

**Given:** A measure space, a real or complex Hilbert space, the finite list of measurable error maps and scalar functions in the Statement, and an exact inverse-error chain whose increments are those maps.

[F1] Under Countable Choice, [[thm-tikhonov-error-chain-with-discretization-and-residual]]: the realization-wise error is the finite sum of its displayed chain differences.

[A1] For the inverse-problem-chain application, assume Countable Choice as required by [F1].

[F2] [[def-calligraphic-l-p-on-a-measure-space]]: A measurable scalar function belongs to $\mathcal L^2(\mu)$ exactly when its $L^2$ functional is finite.

[F3] [[thm-minkowski-inequality-for-integrals]]: For $f,h\in\mathcal L^2(\mu)$, $\|f+h\|_2\le\|f\|_2+\|h\|_2$.

[F4] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: If $0\le f\le h$, then $\int f\,d\mu\le\int h\,d\mu$.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle_H|\le\|u\|_H\,\|v\|_H$.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]]: A measurable real or complex function is integrable when its absolute value has finite integral.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The integral is linear on integrable functions.

[F8] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $\operatorname{Re}z$ is the real coordinate of $z\in\mathbb C$; for real scalars read $\operatorname{Re}z=z$.

[F9] [[def-inner-product-space]]: The inner product is linear in the first argument and conjugate symmetric.

[F10] [[cor-inner-product-induces-a-norm]]: The inner-product norm satisfies $\|u+v\|\le\|u\|+\|v\|$.

## Proof

1.1 By [F1] and [A1], each realization's inverse-problem error is the sum of its finite chain increments. Put $F_k=\sum_{j=1}^k f_j$. Since $F_1=f_1\in\mathcal L^2$, induction using [F3] shows $F_k\in\mathcal L^2$ and $\|F_k\|_2\le\sum_{j=1}^k\|f_j\|_2$ for every $k\le N$. The pointwise triangle inequality [F10] gives $0\le g\le F_N$, hence [F4] applied to their squares gives $\|g\|_2\le\|F_N\|_2\le\sum_j\|f_j\|_2$. This is the claimed $L^2$ error bound by the definition of $\|\cdot\|_{2,H}$. [given, A1, F1, F2, F3, F4, F10, algebra]

2.1 At each $\omega$, expanding the squared Hilbert norm and pairing the two cross terms gives $g(\omega)^2=\sum_j f_j(\omega)^2+ 2\sum_{i<j}\operatorname{Re}\langle d_i(\omega),d_j(\omega)\rangle_H$. By [F5], $|\langle d_i,d_j\rangle_H|\le f_i f_j$, and $(f_i-f_j)^2\ge0$ gives $2f_if_j\le f_i^2+f_j^2$. Thus each cross term is integrable: [F2] makes each $f_i^2$ integrable, [F7] makes their finite sum integrable, and [F4] bounds the integral of the absolute cross term by that sum. All squared-norm terms are integrable by [F2]. The expansion uses [F9] and [F8]. Integrating the finite identity and using [F6]–[F7] gives the displayed cross-term formula; the formula gives exact root-sum-square if and only if the finite sum of cross integrals is zero. Separate vanishing is sufficient, but nonzero cross integrals may cancel. [F2, F4, F5, F6, F7, F8, F9, algebra] ∎
