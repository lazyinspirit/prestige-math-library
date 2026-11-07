---
id: def-hurwitz-zeta-function
kind: definition
title: "Hurwitz zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complex-exponential
  - def-natural-logarithm
  - thm-p-series-real-exponents
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 66–68, the Hurwitz zeta function and Lemma 24.14."
---

## Definition

For $\alpha\in(0,1]$ and $s\in\mathbb C$ with $\operatorname{Re}s>1$, define the **Hurwitz zeta function** by the absolutely convergent series
$$\zeta(s,\alpha):=\sum_{n=0}^{\infty}(n+\alpha)^{-s},\qquad (n+\alpha)^{-s}:=\exp\!\bigl(-s\log(n+\alpha)\bigr),$$
where $\log$ is the real natural logarithm on positive reals.

## Definition references

[Montgomery–Vaughan, Chapter 24, printed pp. 66–68](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** $\alpha\in(0,1]$ and $s\in\mathbb C$ with $\operatorname{Re}s>1$.

[F1] The complex exponential is defined by its power series, and $e^z$ obeys the addition law ([[def-complex-exponential]]).

[F2] The natural logarithm is defined on positive reals and satisfies $\log x$ as the real logarithm ([[def-natural-logarithm]]).

[F3] For every real $\sigma>1$, the p-series $\sum_{n\ge1}n^{-\sigma}$ converges ([[thm-p-series-real-exponents]]).

## Proof

**Proof technique:** direct verification of convergence and of the power convention.

1.1 For each $n\ge0$, $n+\alpha>0$, so $\log(n+\alpha)$ is a defined real number by [F2], and the exponential in the definition is defined by [F1]. [given, F1, F2]

2.1 If $\sigma=\operatorname{Re}s>1$, then $|(n+\alpha)^{-s}|=(n+\alpha)^{-\sigma}\le n^{-\sigma}$ for $n\ge1$; comparison with [F3] proves absolute convergence, so the defining sum is unambiguous. [given, F3, step 1.1, algebra] ∎

