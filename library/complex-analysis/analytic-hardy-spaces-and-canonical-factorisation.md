---
page: analytic-hardy-spaces-and-canonical-factorisation
title: "Analytic Hardy Spaces and Canonical Factorisation"
status: published
category: complex-analysis
requires: [the-argument-principle-and-rouche, infinite-products-and-weierstrass-factorisation, the-radon-nikodym-theorem-and-lebesgue-decomposition, complex-lp-spaces-and-test-function-conventions, orthonormal-bases-parseval-and-fourier-series, harmonic-hardy-classes-and-fatou-boundary-limits, probability-spaces-random-variables-and-expectation]
items:
  - def-analytic-hardy-space-disc
  - lem-hardy-radial-means-are-monotone
  - thm-hardy-zero-set-blaschke-condition
  - def-blaschke-product
  - thm-blaschke-product-boundary-values-and-zeros
  - thm-riesz-factorization-hardy-space
  - def-inner-singular-inner-and-outer-functions
  - lem-outer-function-properties
  - lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit
  - lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice
  - lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice
  - lem-complex-circle-measures-have-finite-total-variation-under-countable-choice
  - lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients
  - thm-singular-inner-function-properties
  - thm-zero-free-inner-functions-are-singular-inner
  - thm-fatou-boundary-theorem-analytic-hardy-spaces
  - lem-hardy-log-integrability-of-boundary-values
  - lem-poisson-jensen-inequality-hardy-functions
  - thm-inner-outer-factorisation-hardy-space
  - def-nevanlinna-class-on-the-disc
  - lem-nevanlinna-sup-mean-criterion
  - thm-nevanlinna-class-is-bounded-quotient-class
  - lem-nevanlinna-blaschke-factorization
  - thm-nevanlinna-boundary-values-and-log-integrability
  - def-smirnov-class-on-the-disc
  - lem-smirnov-class-quotient-characterisation
  - thm-smirnov-maximum-principle
  - lem-analytic-poisson-integrals-have-vanishing-negative-coefficients
  - thm-f-and-m-riesz-theorem
  - cor-hardy-one-cauchy-representation
examples: []
---

This page develops the analytic Hardy spaces $H^p(\mathbb D)$ on the unit disc
and their canonical factorisation. The classes are defined in
[[def-analytic-hardy-space-disc]] by boundedness of the radial $L^p$ means,
with the $p<1$ quasi-norm made explicit;
[[lem-hardy-radial-means-are-monotone]] proves that the radial means increase
with the radius, so $H^q\subseteq H^p$ for $q>p$ with norm comparison, and
identifies the norm as a limit.

The zero theory starts from Jensen's formula:
[[thm-hardy-zero-set-blaschke-condition]] shows that the zeros of a nonzero
$H^p$ function satisfy the Blaschke condition. Normalized Blaschke factors and
their products are studied in [[def-blaschke-product]] and
[[thm-blaschke-product-boundary-values-and-zeros]], which gives the exact zero
sets, the bound $|B|\le1$ and the unimodular boundary function, and
[[thm-riesz-factorization-hardy-space]] factors $f=Bg$ with a zero-free $g$ of
the same norm.

The canonical factors are defined in
[[def-inner-singular-inner-and-outer-functions]]: inner functions,
singular inner functions $S_\mu$ built from finite positive measures, and outer
functions $[h]$ built from logarithmically integrable moduli. Their properties
are proved in [[thm-singular-inner-function-properties]],
[[lem-outer-function-properties]], and
[[thm-zero-free-inner-functions-are-singular-inner]], and assembled into the
inner-outer factorization $f=\lambda BS_\mu F$ of
[[thm-inner-outer-factorisation-hardy-space]].

The boundary theory is Fatou's theorem,
[[thm-fatou-boundary-theorem-analytic-hardy-spaces]]: nontangential limits
exist almost everywhere, the radial functions converge in $L^p$ for finite $p$, the boundary
norm equals the $H^p$ norm, and for $p\ge1$ the function is the Poisson
integral of its boundary values. Log-integrability of the boundary modulus is
[[lem-hardy-log-integrability-of-boundary-values]], its Poisson-Jensen
companion is [[lem-poisson-jensen-inequality-hardy-functions]], and the
$H^1$ boundary measure is analysed in [[thm-f-and-m-riesz-theorem]] and
[[cor-hardy-one-cauchy-representation]].

The larger classes are treated next: the Nevanlinna class $N(\mathbb D)$ in
[[def-nevanlinna-class-on-the-disc]] with the equivalent sup-mean criterion
[[lem-nevanlinna-sup-mean-criterion]], the quotient representation
[[thm-nevanlinna-class-is-bounded-quotient-class]], internal Blaschke
factorization [[lem-nevanlinna-blaschke-factorization]] and boundary values
with log-integrability
[[thm-nevanlinna-boundary-values-and-log-integrability]]; then the Smirnov
class $N^+(\mathbb D)$ in [[def-smirnov-class-on-the-disc]], its quotient
characterisation [[lem-smirnov-class-quotient-characterisation]] and the
maximum principle $N^+\cap L^p=H^p$ of [[thm-smirnov-maximum-principle]].

Countable choice suffices for the definitions, Blaschke and outer properties,
Nevanlinna and Smirnov results, the analytic Hardy boundary theorem and the
F. and M. Riesz/Cauchy conclusions. The local special proofs are
[[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]],
[[lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit]],
[[lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice]],
[[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]],
and [[lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients]].
The zero-free inner representation and canonical factorisation retain their
original explicit AC assumptions for the general Herglotz supplier.
The examples companion is
[[analytic-hardy-spaces-and-canonical-factorisation-examples]].
