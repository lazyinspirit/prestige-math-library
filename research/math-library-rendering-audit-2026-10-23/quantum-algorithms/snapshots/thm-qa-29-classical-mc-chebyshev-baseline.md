---
id: thm-qa-29-classical-mc-chebyshev-baseline
kind: theorem
title: "Classical bounded-sample mean baseline"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-29-expectation-estimation-task
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - thm-variance-of-a-finite-sum
  - thm-expectation-of-products-of-independent-random-variables
  - lem-variance-and-covariance-identities-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-chebyshev-inequality-for-random-variables
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finite sums, finite samples, and their declared independence occur."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Section 1"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Sections 1.2 and 6.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "J. Matoušek and J. Vondrák, The Probabilistic Method, Lemma 5.1.3"
      url: "https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/handouts/matousek-vondrak-prob-ln.pdf"
verification:
  precheck: n/a
---

## Statement

Let $G$ be a finite real random variable taking values in a finite interval $[a,b]$ with $a\le b$, and let $X_1,\ldots,X_n$ be independent copies of $G$, with $n\ge1$. For $\overline X_n=n^{-1}\sum_{i=1}^nX_i$ and $\mu=\mathbb E[G]$,
$$\mathbb E[\overline X_n]=\mu,\qquad \operatorname{Var}(\overline X_n)=\frac{\operatorname{Var}(G)}{n}\le\frac{(b-a)^2}{4n}.$$
Consequently, for every $\varepsilon>0$,
$$\Pr(|\overline X_n-\mu|>\varepsilon)\le\frac{(b-a)^2}{4n\varepsilon^2}.$$
The procedure uses exactly $n$ independent samples. If each draw and data load costs $C_{\rm draw}$ and $C_{\rm load}$, their total is $n(C_{\rm draw}+C_{\rm load})$; arithmetic for the encoded values is an additional separately charged cost. When $a=b$, every sample equals $\mu=a$ and the failure probability is zero.

## Facts & Assumptions

**Given:** A finite law, a finite random variable $G$ with $a\le G\le b$, and independent copies $X_1,\ldots,X_n$ with the same law as $G$.

[F1] [[def-qa-29-expectation-estimation-task]] defines the target as the finite weighted expectation $\mu=\mathbb E[G]$.

[F2] [[def-expectation-on-a-finite-probability-space]]: $\mathbb E[Y]=\sum_{\omega\in\Omega}Y(\omega)w(\omega)$.

[F3] [[def-independent-random-elements]]: random variables are independent when their generated sigma-algebras are independent.

[F4] [[thm-expectation-of-products-of-independent-random-variables]]: expectations factor for finite families of independent finite-valued real random variables.

[F5] [[def-moments-variance-and-covariance]] defines variance by $\mathbb E[(Y-\mathbb E Y)^2]$ and covariance by $\mathbb E[(Y-\mathbb E Y)(Z-\mathbb E Z)]$.

[F6] [[lem-variance-and-covariance-identities-for-random-variables]]: $\operatorname{Cov}(Y,Z)=\mathbb E[YZ]-\mathbb E[Y]\mathbb E[Z]$ and variance is bilinear as covariance.

[F7] [[thm-variance-of-a-finite-sum]] gives the variance of a finite sum as the sum of variances and twice the sum of pairwise covariances.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]] gives linearity of expectation for integrable random variables.

[F9] [[cor-chebyshev-inequality-for-random-variables]]: $\Pr(|Y-\mathbb E Y|\ge t)\le\operatorname{Var}(Y)/t^2$ for $t>0$.

[F10] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] defines expectation by integration and the positive-negative decomposition. [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and [[def-integral-of-a-nonnegative-simple-function]] evaluate a nonnegative simple function by its finite sum of values times level-set probabilities on any probability space.

## Proof

1.1 For any finite-valued real random variable $Y$ on its given probability space, its positive and negative parts are nonnegative simple functions. By [F10], both have finite integrals, and subtraction gives $\mathbb E[Y]=\sum_{t\in Y(\Omega)}t\Pr(Y=t)$. Thus all finite-valued variables below are integrable and square-integrable, and their general expectations equal their finite-law weighted sums, even when the underlying space is infinite. Since every $X_i$ has the law of $G$, [F1], [F2], and [F10] identify $\mathbb E[X_i]$ with the same finite weighted sum $\mu$. By [F8], $\mathbb E[\overline X_n]=n^{-1}\sum_i\mathbb E[X_i]=\mu$. [given, F1, F2, F8, F10, algebra]

1.2 If $i\ne j$, [F3]–[F4] give $\mathbb E[X_iX_j]=\mathbb E[X_i]\mathbb E[X_j]$ for the general expectations; [F10] identifies each with the corresponding finite weighted sum. By [F5]–[F6], $\operatorname{Cov}(X_i,X_j)=0$. [given, F3, F4, F5, F6, F10, algebra]

1.3 Apply [F7] to the finite sum; [F10] identifies the expectations defining all variances and covariances with their finite weighted sums. Since each $X_i$ has the law of $G$, $\operatorname{Var}(\overline X_n)=n^{-2}\sum_i\operatorname{Var}(X_i)=\operatorname{Var}(G)/n$. [given, F5, F7, F10, algebra]

1.4 Put $c=(a+b)/2$. Pointwise, $|G-c|\le(b-a)/2$, so [F2] and [F10] give $\mathbb E[(G-c)^2]\le(b-a)^2/4$ for the finite weighted-sum expectation. Expanding the square and using [F5], [F8], and [F10] yields $\mathbb E[(G-c)^2]=\operatorname{Var}(G)+(\mu-c)^2$; hence $\operatorname{Var}(G)\le(b-a)^2/4$. This also covers $a=b$, when both sides are zero. [given, F2, F5, F8, F10, algebra]

2.1 Substituting step 1.4 into step 1.3 proves the stated variance bound. [step 1.3, step 1.4, algebra]

3.1 For $\varepsilon>0$, [F10] identifies the expectation and variance of the finite random variable $\overline X_n$ with those used by [F9]. Thus [F9] applied to $\overline X_n$ and step 1.1 bounds the probability of $|\overline X_n-\mu|\ge\varepsilon$ by $\operatorname{Var}(\overline X_n)/\varepsilon^2$. The event with strict inequality is a subset, so step 2.1 gives the displayed failure bound. [given, F9, F10, step 1.1, step 2.1, algebra]

4.1 Exactly $n$ independent draws are taken by hypothesis; summing their declared draw and load costs gives $n(C_{\rm draw}+C_{\rm load})$. The $n-1$ additions and one division used for the mean are encoded arithmetic operations and remain separate costs. [given, construct, algebra] ∎
