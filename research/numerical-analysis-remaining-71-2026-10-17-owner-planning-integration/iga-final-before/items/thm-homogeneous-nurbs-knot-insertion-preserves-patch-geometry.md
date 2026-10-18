---
id: thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry
kind: theorem
title: Homogeneous knot insertion preserves an admissible NURBS patch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
  - alg-single-new-b-spline-knot-insertion
  - thm-single-new-knot-insertion-preserves-b-spline-curve
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Carl de Boor, A Practical Guide to Splines, revised edition, Chapter XI, pp. 135–138"
      url: "https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf"
---

## Statement

Let $F$ be the tensor-product NURBS patch of [[def-nurbs-patch-map-and-rational-spline-space]]. Insert a knot $u$ that is new and strictly inside a nonempty span in one coordinate direction. Apply [[alg-single-new-b-spline-knot-insertion]] to every control-net slice in that direction, using homogeneous controls $(w_\alpha P_\alpha,w_\alpha)\in\mathbb R^{d+1}$. Then the updated homogeneous tensor spline is pointwise unchanged, every updated weight is positive, and the rational patch map remains exactly $F$ on $\overline{\widehat\Omega}$.

## Facts & Assumptions

**Given:** A finite tensor-product knot grid, the positive weights and control points of a NURBS patch, and a new knot strictly inside a nonempty span in one coordinate direction.

[F1] [[alg-single-new-b-spline-knot-insertion]] copies controls outside the active range and replaces active controls by $\alpha_iP_i+(1-\alpha_i)P_{i-1}$, with $0<\alpha_i<1$ for a strictly interior new knot.

[F2] [[thm-single-new-knot-insertion-preserves-b-spline-curve]]: for every vector-valued B-spline curve, the algorithm's refined control net represents the same curve at every parameter value, including knot endpoints.

[F3] [[def-nurbs-patch-map-and-rational-spline-space]] defines $F$ as the first $d$ components of the homogeneous tensor spline divided by its last component.

[F4] [[lem-positive-nurbs-basis-and-quotient-derivative]]: the denominator is at least $w_->0$ whenever all weights are positive.

## Proof

1.1 Write the homogeneous control array as $\widetilde P_\alpha=(w_\alpha P_\alpha,w_\alpha)$. The tensor spline $\widetilde F(\xi)=\sum_{\alpha\in\mathcal I}\widetilde P_\alpha N_\alpha(\xi)$ has first $d$ components $W(\xi)F(\xi)$ and last component $W(\xi)$ by [F3]. Fix the coordinate direction in which $u$ is inserted and fix a multi-index of all other coordinates. Grouping the finite sum over the remaining index writes the corresponding slice as a B-spline curve with controls in $\mathbb R^{d+1}$. By [F2], knot insertion leaves that slice unchanged for every value of the insertion coordinate. Multiplication by the fixed transverse tensor basis function and summation over all transverse indices show that the entire updated homogeneous spline $\widetilde F'$ equals $\widetilde F$ pointwise. [F1, F2, F3, algebra]

2.1 In the active range, each updated last coordinate is $\alpha_iw_i+(1-\alpha_i)w_{i-1}$ by [F1]; it is positive because both old weights are positive and $0<\alpha_i<1$. Copied weights are positive as well. Thus all updated weights are positive and [F4] gives $W'(\xi)>0$ on the closed patch. Since $\widetilde F'=\widetilde F$, their first $d$ components and last components agree, and division by this positive common last component gives $F'(\xi)=F(\xi)$ for every $\xi\in\overline{\widehat\Omega}$. [F1, F3, F4, step 1.1, algebra] ∎