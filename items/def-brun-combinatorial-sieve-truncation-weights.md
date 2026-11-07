---
id: def-brun-combinatorial-sieve-truncation-weights
kind: definition
title: "Brun upper and lower truncation weights"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-sieve-sequence-local-density-and-remainders
  - def-number-theoretic-mobius-function
  - def-prime
  - thm-canonical-prime-factorisation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §12.2"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §1"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: n/a
---

## Definition

For a positive integer $d$, let $\omega(d)$ be the number of distinct prime
divisors of $d$, with $\omega(1)=0$. For a sieve cutoff $z$ and
$k\in\mathbb N$, define functions on the positive integers by setting them to
zero off the squarefree divisors of $P(z)$ and, for $d\mid P(z)$, by

$$\lambda_k^+(d):=\begin{cases}\mu(d),&\omega(d)\le 2k,\\0,&\omega(d)>2k,\end{cases}\qquad
\lambda_k^-(d):=\begin{cases}\mu(d),&\omega(d)\le 2k+1,\\0,&\omega(d)>2k+1.\end{cases}$$

Their local main-term sums and signed remainder sums are

$$V_k^\pm(z):=\sum_{d\mid P(z)}\lambda_k^\pm(d)g(d),\qquad
R_k^\pm(A,z):=\sum_{d\mid P(z)}\lambda_k^\pm(d)r_d.$$

The upper weight retains the even-depth partial inclusion-exclusion sum, and the
lower weight retains the next odd depth; no optimized parameter choice or
asymptotic fundamental-lemma estimate is part of this definition.

## Definition references

[[def-sieve-sequence-local-density-and-remainders]]

[[def-number-theoretic-mobius-function]]

[[def-prime]]

[[thm-canonical-prime-factorisation]]

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §12.2](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §1](https://arxiv.org/pdf/math/0209360)
