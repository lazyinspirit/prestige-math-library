---
id: def-flegal-jones-obm-batch-size-conditions
kind: definition
title: Flegal–Jones overlapping-batch size conditions
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Theorem 2"
      url: "https://arxiv.org/pdf/0811.1729"
      locator: "Theorem 2, PDF pp. 8–9; Assumption 2, §3."
verification:
  precheck: n/a
axiom_use: "This is a definition of a cited sufficient-condition contract and asserts no new theorem."
---

## Definition

Let $\delta>0$ and let $(b_n)_{n\ge2}$ be positive integers. Say that the sequence satisfies the **Flegal–Jones OBM batch-size conditions for exponent $\delta$** when $b_n<n$ for all sufficiently large $n$, both $b_n$ and $n/b_n$ are monotonically nondecreasing, $b_n\to\infty$, $n/b_n\to\infty$, and there is a constant $c\ge1$ such that
$$\sum_{n=2}^{\infty}(b_n/n)^c<\infty,$$
while
$$\frac{b_n}{n}\log n\to0,\qquad \frac{n^{2/(2+\delta)}(\log n)^3}{b_n}\to0,$$
there are $n_0\ge2$ and $c_1<\infty$ with $\log n/b_n\le c_1$ for all $n\ge n_0$, and
$$b_n^2n^{-2}\log\log n\to0,\qquad b_n^4n^{-3}\log\log n\to0.$$

This definition records the exact batch-size hypotheses used in Flegal–Jones Theorem 2. It is a sufficient-condition interface; failure of a condition does not imply inconsistency of the estimator.
