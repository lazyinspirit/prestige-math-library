---
id: def-na-bernoulli-polynomials
kind: definition
title: "Bernoulli polynomials by a normalized coefficient recursion"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-canonical-natural, def-finite-sum, def-real-polynomial-degree-leading-coefficient-and-monic, lem-of-naturals-positive, thm-reals-field]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, finite Euler–Maclaurin formula and Bernoulli coefficients."
    - title: "NIST Digital Library of Mathematical Functions, Chapter 24 §24.2(i), Bernoulli Numbers and Polynomials"
      url: "https://dlmf.nist.gov/24.2"
      locator: "Full-text section §24.2(i), equations 24.2.1–24.2.5, Bernoulli number/polynomial definitions and coefficient identity."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $\iota:\mathbb N\to\mathbb R$ be the canonical natural map of [[def-canonical-natural]]. Define polynomials $B_m\in\mathbb R[X]$ recursively. Put $B_0(X)=1$. If $m\ge1$ and $B_{m-1}(X)=\sum_{q=0}^{m-1}\beta_{m-1,q}X^q$, set
$$B_m(X):=\iota(m)\sum_{q=0}^{m-1}\beta_{m-1,q}\left(\frac{X^{q+1}}{\iota(q+1)}-\frac{1}{\iota(q+1)\iota(q+2)}\right).$$
Every sum is finite. The denominator factors are positive by [[lem-of-naturals-positive]], hence invertible in $\mathbb R$ by [[thm-reals-field]]. Write $B_m:=B_m(0)$ for the Bernoulli number of index $m$.
