---
id: def-adaptive-simpson-refinement-indicator
kind: definition
title: Embedded Simpson refinement indicator
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [alg-composite-simpson-rule]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Chapter 7, §7.2, compound Simpson rule (7.6).
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §§5.6–5.7
      url: https://fncbook.com/adaptive/
      locator: §§5.7.1–5.7.3 and Example 5.7.2; equations (5.7.1)–(5.7.4) and explicit tolerance failure.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: §§5.6.2–5.6.3; the even-power error expansion and nested Simpson/Richardson formulas.
---

## Definition

Let $a<b$, let $n\ge2$ be even, and let $f$ be real-valued at the nodes of
the uniform grids with $n$ and $2n$ subintervals. The **coarse Simpson value**
is $S_0=Q_S(f;a,b,n)$ and the **refined value** is
$S_1=Q_S(f;a,b,2n)$, using [[alg-composite-simpson-rule]]. The signed
**refinement indicator** is $(S_1-S_0)/15$ and its magnitude is
$$\eta_n(f;a,b):=\frac{|S_1-S_0|}{15}.$$

For the local two-panel case $n=2$, $S_1$ is also the sum of the two
one-block Simpson values on the halves of $[a,b]$.

This definition alone is not a bound on the true error.

For data supplied only at the grid nodes, the calls to the Simpson procedure
mean calls on the extension $\widetilde f:[a,b]\to\mathbb R$ that agrees
with those data at the nodes and is zero elsewhere. This extension is
evaluable everywhere as required by the procedure. Its finite sums use only
the prescribed nodes, so any other evaluable extension gives the same
$S_0$, $S_1$ and indicator; no off-grid values or regularity are required.

## Remarks

The factor $1/15$ has asymptotic Richardson justification under the hypotheses
of [[thm-simpson-richardson-error-estimator-asymptotic]]; it remains a
heuristic indicator at any finite grid.
