---
id: lem-finite-convex-cell-complexes-admit-compatible-triangulations
kind: lemma
title: "Finite convex cell complexes admit compatible triangulations"
status: published
origin: pipeline
deps: ["lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex", "lem-barycentric-face-chains-triangulate-a-geometric-simplex"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
---

## Statement

Every finite convex cell complex has a compatible finite simplicial triangulation. Choose one relative interior point in each nonempty cell; triangulate the boundary in increasing dimension and cone from that point. This construction agrees on every common face and preserves each cell as a subpolyhedron.

## Source locators

2.7(6), 2.9, pp.14–16; Appendix pp.29–30.


## Facts & Assumptions

[F1] Finite-inequality cells have relative interiors and proper-face boundary decompositions. [[lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex]].


## Proof

**Given:** A finite convex cell complex and one relative interior point $p_C$ in each nonempty cell.

1.1 Every nonempty cell has relative interior by the finite-inequality face calculus, so the finitely many choices $p_C$ exist. A zero-cell is already a single vertex. Suppose all cells of dimension less than $n$ have compatible triangulations. The proper faces of an $n$-cell $C$ are lower-dimensional and cover its boundary; their triangulations agree on common faces by the induction hypothesis. Hence together they triangulate $\partial C$. [F1]

2.1 For $x\in C\setminus\{p_C\}$ the ray $p_C+t(x-p_C)$ meets $C$ in a closed bounded parameter interval $[0,T]$ with $T\geq1$. Convexity makes it an interval; compactness makes its endpoint belong to $C$. Its last point $y$ lies on the boundary, since an interior endpoint could be extended. Every point with $0\leq t<T$ is relatively interior: a small ball at $p_C$ contracted toward the endpoint gives a ball at that point. Thus $y$ is the unique boundary point of the ray, and $x=(1-1/T)p_C+(1/T)y$. It follows that the cones from $p_C$ over the triangulated boundary cover $C$. [F1, step 1.1]

3.1 Every boundary simplex is contained in a proper face supported by a hyperplane not containing $p_C$. Its vertices together with $p_C$ are affinely independent. For two boundary simplices, a non-apex point in the intersection of their cones has the unique ray endpoint just proved, lying in both boundary simplices. Therefore the cones intersect in the cone on their common face, or only at the apex if that face is empty. Their intersections with the old boundary are precisely their base simplices. For adjacent cells, the intersection is a common boundary face already triangulated identically, so the extensions agree. Induction over the finitely many dimensions gives the claimed finite triangulation; the vertex-free complex requires no choices or cones. [step 1.1, step 2.1] ∎
