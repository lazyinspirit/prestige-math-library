---
id: lem-gauss-jacobi-rule-data-well-defined
kind: lemma
title: Gauss–Jacobi nodes and weights are well-defined
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-gauss-jacobi-quadrature-rule, lem-gauss-jacobi-weight-finite-moment-measure, def-gauss-moment-data, def-gauss-quadrature-rule, lem-gauss-quadrature-rule-data-well-defined, def-countable-choice]
proof_strategy: direct
axiom_use: Countable Choice is used only through the Jacobi weight measure supplier; the Gaussian node/weight well-definedness result is choice-free for supplied measure data.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, Gaussian nodes and Lagrange weights.
---

## Statement

Assume Countable Choice. For $n\ge1$ and $\alpha,\beta>-1$, the measure and order-$2n-1$ moment datum in [[def-gauss-jacobi-quadrature-rule]] are valid Gaussian quadrature data. In particular the monic orthogonal polynomial exists, its $n$ roots are distinct points of $(-1,1)$, and the Lagrange weights and finite rule are well-defined.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge1$, and real $\alpha,\beta>-1$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for construction of the Jacobi measure.

[F1] [[lem-gauss-jacobi-weight-finite-moment-measure]]: $\mu_{\alpha,\beta}$ is a finite positive Borel measure whose relative support is all of $[-1,1]$ and whose moments of every finite degree are finite.

[F2] [[def-gauss-moment-data]]: order-$2n-1$ moment data require a finite positive measure, at least $n+1$ support points, and finite absolute moments through degree $2n-1$.

[F3] [[def-gauss-jacobi-quadrature-rule]] and [[def-gauss-quadrature-rule]]: the Jacobi rule is the general Gaussian rule for this moment datum, with roots of its monic orthogonal polynomial as nodes and Lagrange-integral weights.

[F4] [[lem-gauss-quadrature-rule-data-well-defined]]: for order-$2n-1$ Gaussian moment data, the nodes can be ordered as distinct interior roots, each Lagrange polynomial is defined, every weight is finite, and the rule is a finite real sum.

## Proof

1.1 By [F1], the measure is finite and positive, all required moments are finite, and each of the $n+1$ explicit points $t_j=-1+2j/n$ for $j=0,\ldots,n$ lies in its support; these points are distinct because $n\ge1$. Thus the data satisfy [F2]. [A1, F1, F2, given, algebra, construct]

2.1 Applying [F4] to the moment datum of step 1.1 gives distinct roots in $(-1,1)$, nonzero node differences, finite Lagrange-weight integrals, and a finite rule. These are exactly the asserted well-definedness properties in [F3]. [F3, F4, step 1.1] ∎
