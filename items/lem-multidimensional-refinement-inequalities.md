---
id: lem-multidimensional-refinement-inequalities
kind: lemma
title: "Refinement raises multidimensional lower sums and lowers upper sums, with a quantitative boundary-slab estimate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

If $P'$ refines a grid $P$, then $L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)$. Moreover, for a fixed grid $P$, there is a constant $C_P$ such that refining any grid of mesh $\delta$ by $P$ changes either Darboux sum by at most $2B C_P\delta$, where $|f|\le B$.

## Facts & Assumptions

**Given:** The grids, bounded $f$, and bound $B$.

[L1] Darboux sums and iterated cell sums are [[def-multidimensional-darboux-sums]] and [[def-multidimensional-grid-partition]].

[L2] Finite sums split and multiplication distributes ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** induction.

1.1 Insert one coordinate hyperplane. Every new cell lies in one old cell, so its infimum is no smaller and its supremum no larger. Splitting the affected coordinate sum proves the four inequalities.  [base, L1, L2]

1.2 Only fine cells meeting an interior hyperplane of $P$ can cross a coarse-cell boundary. For a hyperplane perpendicular to coordinate $j$, those cells lie in a slab of thickness at most $2\delta$; repeated product distributivity bounds their total volume by $2\delta\prod_{r\ne j}(b_r-a_r)$.   [L1, L2, given]

2.1 Iterating over the finitely many inserted hyperplanes and coordinates proves refinement monotonicity.   [ih, step 1.1, given]

2.2 Sum this bound over the finitely many fixed interior hyperplanes to define $C_P$. On all other cells refinement changes no coarse bound, while on boundary cells each contribution changes by at most $2B$ times its volume.   [step 1.2, L2, given]

3.1 This yields the quantitative estimate and completes both assertions.  [step 2.1, step 2.2, discharge-induction] ∎
