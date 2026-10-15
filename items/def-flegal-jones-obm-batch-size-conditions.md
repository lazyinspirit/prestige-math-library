---
dependency_level: 0
id: def-flegal-jones-obm-batch-size-conditions
kind: definition
title: Flegal–Jones overlapping-batch size conditions
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Theorem 2
      url: https://arxiv.org/pdf/0811.1729
      locator: Theorem 2, PDF pp. 8–9; Assumption 2, §3.
verification:
  precheck: n/a
axiom_use: This corrected numerical sufficient-condition definition uses no choice; the literal source monotonicity contradiction and floor arithmetic are established in the body.
---

## Definition

Let $\delta>0$ and let $(b_n)_{n\ge2}$ be positive integers. Say that the sequence satisfies the **Flegal–Jones OBM batch-size conditions for exponent $\delta$**, with the integer monotonicity correction described below, when $b_n<n$ for all sufficiently large $n$, $b_n\to\infty$, $n/b_n\to\infty$, and there is a constant $c\ge1$ such that
$$\sum_{n=2}^{\infty}(b_n/n)^c<\infty,$$
while
$$\frac{b_n}{n}\log n\to0,\qquad \frac{n^{2/(2+\delta)}(\log n)^3}{b_n}\to0,$$
there are $n_0\ge2$ and $c_1<\infty$ with $\log n/b_n\le c_1$ for all $n\ge n_0$, and
$$b_n^2n^{-2}\log\log n\to0,\qquad b_n^4n^{-3}\log\log n\to0.$$

These are all the numerical rate, summability and endpoint hypotheses of Flegal–Jones Theorem 2. The source additionally asks that both $b_n$ and $n/b_n$ be nondecreasing. Those two requirements are omitted here: for an integer sequence with $b_n<n$ eventually they are incompatible with $b_n\to\infty$. Indeed, ratio monotonicity would imply $n(b_{n+1}-b_n)\le b_n<n$, while integer monotonicity would force the nonnegative integer $b_{n+1}-b_n$ to be zero. Thus the literal source conditions would make $b_n$ eventually constant. The corrected interface preserves the intended floor-power batch sequences, and the Brownian quadratic-form proof of OBM consistency needs neither monotonicity assumption.

This is a sufficient-condition interface; failure of a condition does not imply inconsistency of the estimator.

For the floor-power sequence $b_n=\lfloor n^\nu\rfloor$, the intended source range $\delta>2/3$ and $2/(2+\delta)<\nu<3/4$ satisfies this corrected contract. Indeed, eventually $n^\nu/2\le b_n\le n^\nu$. Choose $c>\max\{1,1/(1-\nu)\}$ to bound the summability series by $\sum_n n^{-c(1-\nu)}<\infty$. The other displayed quantities are bounded respectively by $n^{\nu-1}\log n$, $2n^{2/(2+\delta)-\nu}(\log n)^3$, $2n^{-\nu}\log n$, $n^{2\nu-2}\log\log n$ and $n^{4\nu-3}\log\log n$, all tending to zero. Also $b_n\to\infty$, $n/b_n\to\infty$ and $b_n<n$ eventually. These checks establish the numerical contract without asserting the impossible simultaneous monotonicity.
