---
id: lem-finite-cube-covers-admit-grid-control
kind: lemma
title: "A finite rectangle cover admits grid control with arbitrarily small volume excess"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-algebra-of-continuous-functions, def-continuity-real, lem-finite-set-has-max, def-max-min, thm-induction-principle, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

If $Q$ is a closed nondegenerate rectangle and $E\subseteq Q$ is covered by finitely many axis-parallel rectangles of total volume $V$, then for every $\eta>0$ there is a grid of $Q$ such that the cells meeting $E$ have total volume below $V+\eta$.

## Facts & Assumptions

**Given:** A finite rectangle cover and $\eta>0$.

[L1] Cube volume is an integer power and is continuous in the side length ([[def-integer-power]], [[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Grids, cell volumes, and splitting are [[def-multidimensional-grid-partition]], [[def-multidimensional-rectangle-and-volume]], [[def-finite-sum]], and [[lem-finite-sum-laws]].

## Proof

**Proof technique:** constructive.

1.1 Intersect each covering rectangle with $Q$. Each nonempty intersection is a closed coordinate rectangle $R_j\subseteq Q$ with volume no larger than the original rectangle. If some $R_j=Q$, the one-cell grid already has total meeting-cell volume $\operatorname{vol}(Q)\le V<V+\eta$, so assume otherwise. Move every coordinate face of each $R_j$ that is not already a face of $Q$ outward by a positive margin, staying inside $Q$, so that the resulting rectangle $R_j^+$ has volume increase below a prescribed share of $\eta$. Continuity of the finite volume product and finiteness make the total increase below $\eta$; because no $R_j$ equals $Q$, at least one face of every $R_j$ moves, and the finite set of chosen margins has a positive least member.   [L1, L2, given, choose]

2.1 Insert every endpoint of every $R_j^+$ into the coordinate grids, then refine to mesh smaller than the least margin using [[cor-archimedean-reciprocal]]. If a closed cell meets $R_j$, each of its coordinate intervals lies inside the corresponding enlarged interval: away from a face of $Q$ this follows from the mesh-margin bound, while at a face of $Q$ there is no cell on the outside. Hence that cell lies in $R_j^+$.  [step 1.1, L2, construct]

3.1 Assign each cell meeting $E$ to one $R_j$ that it meets. By step 2.1 it lies in the aligned rectangle $R_j^+$. Splitting the iterated sums bounds the assigned cells' total volume by $\sum_j\operatorname{vol}(R_j^+) < V+\eta$.   [step 2.1, L2, given]

4.1 The constructed grid has the asserted control.  [step 3.1, discharge-construct] ∎
