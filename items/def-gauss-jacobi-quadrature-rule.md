---
id: def-gauss-jacobi-quadrature-rule
kind: definition
title: The Gauss–Jacobi quadrature rule
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [lem-gauss-jacobi-weight-finite-moment-measure, def-countable-choice, def-gauss-moment-data, def-gauss-quadrature-rule]
justified_by: [lem-gauss-jacobi-rule-data-well-defined]
axiom_use: Countable Choice is used only in the local construction of the Jacobi weight measure.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, printed pp. 108–119, Gaussian weights as integrals of Lagrange cardinal polynomials.
---

## Definition

Assume Countable Choice, let $n\ge1$, and let $\alpha,\beta>-1$. Let $\mu_{\alpha,\beta}$ be the finite positive Borel measure with density $(1-t)^\alpha(1+t)^\beta$ on $(-1,1)$ from [[lem-gauss-jacobi-weight-finite-moment-measure]]. Its moments through degree $2n-1$ are finite and its support is all of $[-1,1]$, so it is Gaussian moment data of order $2n-1$ in [[def-gauss-moment-data]]. The **$n$-node Gauss–Jacobi rule** is the general Gaussian rule $Q_n$ for this measure as defined in [[def-gauss-quadrature-rule]]: its nodes are the roots of the monic degree-$n$ orthogonal polynomial, and each weight is the integral of the corresponding Lagrange cardinal polynomial. This definition makes no accuracy or computed-node claim; local well-definedness is supplied by [[lem-gauss-jacobi-rule-data-well-defined]].
