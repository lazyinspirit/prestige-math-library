---
id: alg-revised-primal-simplex-bland-rule
kind: algorithm
title: "Primal revised simplex with Bland's rule"
status: published
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
dependency_level: 2
sources:
  references:
    - title: "Robert G. Bland, New Finite Pivoting Rules for the Simplex Method, Theorem 1.1"
      url: "https://web.ist.utl.pt/mcasquilho/acad/or/ftp/1977MathOR_Bland.pdf"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1–3.4"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
---

## Definition

Input the exact standard-form data of [[def-revised-simplex-standard-form-linear-program]] with full-row-rank $A$ and a primal-feasible basis $B$ as in [[def-revised-simplex-basis-dictionary]]. Use exact arithmetic. At each iteration compute $x_B=A_B^{-1}b$, $y=A_B^{-\mathsf T}c_B$, and all nonbasic reduced costs $\bar c_j=c_j-a_j^{\mathsf T}y$.

1. If every nonbasic $\bar c_j\ge0$, return `optimal` with $x(B)$ and $y$.
2. Otherwise choose the least index $j\notin B$ with $\bar c_j<0$ and solve $A_Bd=a_j$.
3. If no component $d_i$ is positive, return `unbounded` with the ray whose $j$th component is $1$, whose basic components are $-d$, and whose other nonbasic components are $0$.
4. Otherwise compute $\theta=\min_{d_i>0}x_{B_i}/d_i$. Among minimizing rows, leave the basic variable of least index. Replace its basis column by $a_j$ and repeat.

The algorithm assumes an exact initial feasible basis. It makes no iteration bound polynomial in $m$ or $n$.
