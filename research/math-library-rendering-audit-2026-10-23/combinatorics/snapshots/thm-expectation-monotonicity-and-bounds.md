---
id: thm-expectation-monotonicity-and-bounds
kind: theorem
title: "Expectation preserves pointwise order and lies between the minimum and maximum attained values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-expectation-on-a-finite-probability-space, lem-finite-sum-laws, thm-reals-ordered-field, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "M. Bucic, Probabilistic Method, Appendix A"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

If $X(\omega)\le Y(\omega)$ for every outcome, then $\mathbb E[X]\le\mathbb E[Y]$. Consequently, for a real random variable $X$,
$$\min_{\omega\in\Omega}X(\omega)\le\mathbb E[X]\le\max_{\omega\in\Omega}X(\omega).$$
In particular some outcome has value at least $\mathbb E[X]$, and some outcome has value at most $\mathbb E[X]$.

## Facts & Assumptions

**Given:** Real random variables $X,Y$ on a finite probability space with $X\le Y$ pointwise.

[L1] Expectation is the finite weighted sum of a random variable, with nonnegative weights summing to $1$ ([[def-expectation-on-a-finite-probability-space]]).

[L2] Finite sums preserve pointwise order ([[lem-finite-sum-laws]]).

[L3] Every nonempty finite list of reals has a maximum, and hence also a minimum by applying the maximum result to negatives ([[lem-finite-set-has-max]]).

[L4] The real numbers form a totally ordered field ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Nonnegative weights give $X(\omega)w(\omega)\le Y(\omega)w(\omega)$ for every $\omega$, so summing gives $\mathbb E[X]\le\mathbb E[Y]$. [L1, L2]

1.2 The outcome set is nonempty because its nonnegative weights sum to $1$; let $m$ and $M$ be the minimum and maximum of the attained values of $X$. [L1, L3, choose]

2.1 The pointwise inequalities $m\le X\le M$ and step 1.1 give $m\le\mathbb E[X]\le M$, since the expectations of the constant variables are $m$ and $M$. [step 1.1, step 1.2, L1, L4]

3.1 Outcomes attaining $m$ and $M$ therefore supply values at most and at least the expectation, including the constant case. [step 1.2, step 2.1] ∎
