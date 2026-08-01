---
id: thm-multidimensional-darboux-equals-riemann
kind: theorem
title: "The multidimensional Darboux and tagged-mesh definitions of the Riemann integral agree"
status: published
origin: session
deps: [def-multidimensional-tagged-partition-and-riemann-sum, def-multidimensional-darboux-integral, thm-multidimensional-riemann-criterion, lem-multidimensional-refinement-inequalities, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, cor-archimedean-reciprocal, lem-sup-epsilon, lem-inf-epsilon, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded function on a nondegenerate rectangle is Darboux integrable with
value $I$ if and only if all tagged grid sums converge with mesh to $I$.

## Facts & Assumptions

**Given:** A bounded $f:Q\to\mathbb R$, with $|f|\le B$, on a nondegenerate rectangle $Q$.

[L1] Every tagged sum lies between its grid's Darboux sums ([[def-multidimensional-tagged-partition-and-riemann-sum]]).

[L2] Small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L3] Refining by a fixed grid changes the bounds only by the boundary-slab estimate ([[lem-multidimensional-refinement-inequalities]]).

[L4] Finite choice selects cell values within any positive distance of infima and suprema ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[lem-finite-choice]]).

[L5] Repeated equal subdivision and the Archimedean reciprocal property give grid partitions of a nondegenerate rectangle with arbitrarily small mesh ([[def-multidimensional-grid-partition]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is Darboux integrable, choose a fixed grid $P_0$ with small gap by [L2]. For any sufficiently fine $P$, refine it with $P_0$; [L3] makes the Darboux bounds of $P$ differ from those of the refinement by arbitrarily little. Since the refined lower and upper sums trap $I$, [L1] makes every tagged sum over $P$ close to $I$.  [L1, L2, L3]

1.2 Conversely, suppose every sufficiently fine tagged sum is close to $I$. By [L5], choose one grid below the convergence mesh threshold and, using [L4], tag each cell near its supremum and then near its infimum. The two tagged sums approximate $U(f,P)$ and $L(f,P)$, so their common closeness to $I$ makes the Darboux gap arbitrarily small.   [L4, L5, given]

2.1 Apply [L2] in step 1.2. Since the near-upper and near-lower tagged sums are both arbitrarily close to $I$, the common lower/upper integral lies arbitrarily close to $I$ and therefore equals $I$. Both directions give the same value.  [step 1.1, step 1.2, L1, L2] ∎
