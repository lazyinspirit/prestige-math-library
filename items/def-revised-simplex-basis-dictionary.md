---
id: def-revised-simplex-basis-dictionary
kind: definition
title: "Basis dictionaries and reduced costs for revised simplex"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-revised-simplex-standard-form-linear-program]
justified_by: []
aliases: []
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§2.2–2.5 and 3.1"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§2.2–3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Definition

Use the standard-form problem of [[def-revised-simplex-standard-form-linear-program]]. Assume $A$ has full row rank $m$. An ordered basis is a list $B=(B_1,\ldots,B_m)$ of distinct column indices for which the square matrix $A_B=[a_{B_1}\ \cdots\ a_{B_m}]$ is invertible. Write $N=\{1,\ldots,n\}\setminus\{B_1,\ldots,B_m\}$ and $c_B=(c_{B_1},\ldots,c_{B_m})^{\mathsf T}$. The basic vector $x(B)$ is defined by $x_B(B)=A_B^{-1}b$ and $x_j(B)=0$ for $j\in N$; the basis is primal feasible, and $x(B)$ is a basic feasible solution, exactly when $A_B^{-1}b\ge0$.

The basis multiplier is $y(B)=A_B^{-\mathsf T}c_B$. For every column $j$, its reduced cost is $\bar c_j=c_j-a_j^{\mathsf T}y(B)$. In particular, $\bar c_{B_i}=0$ for each basic index. The basis is dual feasible when $\bar c_j\ge0$ for every $j\in N$. When $m=0$, take the empty basis and the empty multiplier; these formulas remain meaningful.

A primal-feasible basis is **degenerate** if some basic coordinate is zero. A simplex pivot is **degenerate** if its ratio-test step length is zero.
