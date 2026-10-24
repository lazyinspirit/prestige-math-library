---
id: thm-certified-polygon-overlap-correctness
kind: theorem
title: "Certified clipping returns the exact convex polygon overlap"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - alg-certified-convex-polygon-overlap
  - alg-certified-dyadic-geometric-predicate
  - def-intersection-volume-conservative-remapping
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For positive-area convex polygons $P,Q\subset\mathbb R^2$ with rational vertices, [[alg-certified-convex-polygon-overlap]] terminates and returns exactly $P\cap Q$ as a cyclic list of rational vertices, with its exact Lebesgue area. Empty intersections and intersections consisting only of a point or segment return area zero. The result can be used as the exact weight $|P\cap Q|$ in [[def-intersection-volume-conservative-remapping]].

## Facts & Assumptions

**Given:** Countable Choice; two finite convex rational polygons with cyclic vertices, exact rational arithmetic, and certified orientation calls.

[F1] [[alg-certified-convex-polygon-overlap]]: the finite exact certificate checks verify the normalized input cycles; each clipping pass traverses the current cyclic list, applies the four inside/outside sign branches, inserts exact crossing points only on strict crossings or crossings with one boundary endpoint, removes consecutive duplicates, and uses the exact shoelace formula.

[F2] [[alg-certified-dyadic-geometric-predicate]]: on dyadic inputs it returns the exact orientation sign, including zero, and terminates.

[F3] [[def-intersection-volume-conservative-remapping]]: a remap weight is the measure of the exact cell intersection.

[F4] [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]: under Countable Choice every affine hyperplane in $\mathbb R^2$ and every subset of it is Lebesgue null.

[A1] Countable Choice is assumed for the measure interfaces in [F3] and [F4] ([[def-countable-choice]]).

## Proof

1.1 Clearing one common positive denominator from the three rational points in an orientation test multiplies the determinant by a positive square, so its sign is unchanged and all scaled coordinates are integers. Therefore [F2] returns the exact side classification, including boundary zero, for every clipping pass. [F1, F2, given, algebra]

2.1 The algorithm's finite certificate accepts only a simple counterclockwise cycle whose vertices lie in the closed left half-plane of every directed edge, with any collinear consecutive triple ordered monotonically. Each edge is therefore a supporting boundary segment of the convex hull of the listed vertices; the simple closed cycle with positive area traverses that hull boundary once, so the certified input is the stated convex polygon. Now fix one directed edge of $Q$ and write $s(X)$ for its signed edge determinant. If $s(S),s(E)\ge0$, the whole segment remains and the traversal appends $E$. If $s(S)\ge0>s(E)$, it appends the crossing point; if $s(S)<0\le s(E)$, it appends the crossing point and $E$; and if both signs are negative, it appends nothing. In either crossing case, $s(S)-s(E)$ has the strict sign of the crossing and is nonzero, and $t=s(S)/(s(S)-s(E))$ lies in $[0,1]$. If an endpoint lies on the clipping line, the formula gives that endpoint exactly. Thus each pass returns the cyclic boundary of the preceding convex intersection with this closed half-plane, preserving isolated boundary vertices and degenerate point or segment outputs. [F1, step 1.1, algebra]

3.1 Induction over the finite edge list of $Q$ shows the final polygon is $P$ intersected with every defining half-plane of $Q$, hence is exactly $P\cap Q$. Each pass processes a finite list and adds at most two crossings per clip edge, so the finitely many passes terminate. [step 2.1, given]

4.1 The final vertices are rational because every crossing uses rational operations with a nonzero exact denominator. For a nondegenerate simple polygon the shoelace sum equals its signed area; the output is counterclockwise, so this is its nonnegative Lebesgue area. A convex intersection with fewer than three noncollinear vertices is empty or lies in an affine line. By [F4], the line and all its subsets are Lebesgue null, so the returned area is zero in these degenerate cases. [F1, F3, F4, A1, step 3.1, algebra] ∎
