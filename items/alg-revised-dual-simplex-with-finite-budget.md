---
id: alg-revised-dual-simplex-with-finite-budget
kind: algorithm
title: "Dual revised simplex with a finite pivot budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 2
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §4.5"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§2–3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Definition

Input the exact standard-form data and a basis $B$ for which every nonbasic reduced cost is nonnegative, as in [[def-revised-simplex-standard-form-linear-program]] and [[def-revised-simplex-basis-dictionary]]. Also input a nonnegative integer pivot budget $K$. Set $k=0$ and repeat:

1. Compute $x_B=A_B^{-1}b$ and $y=A_B^{-\mathsf T}c_B$. If $x_B\ge0$, return `optimal` with the primal basic vector and $y$.
2. Otherwise choose the least-index basic variable $B_i$ with $x_{B_i}<0$. For each nonbasic $j$ compute $d_{ij}=(A_B^{-1}a_j)_i$. If no $d_{ij}<0$, return `infeasible` with $q=A_B^{-\mathsf T}e_i$.
3. If $k=K$, return `pivot-budget-exhausted` with the current basis and multiplier $y=A_B^{-\mathsf T}c_B$.
4. Among $j$ with $d_{ij}<0$, choose one minimizing $\bar c_j/(-d_{ij})$, with least variable index among ties. Replace $B_i$ by $j$, set $k\leftarrow k+1$, and repeat.

The `pivot-budget-exhausted` status is inconclusive. No finite-success or anti-cycling claim is part of this definition.
