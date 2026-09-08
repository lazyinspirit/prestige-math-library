---
id: lem-barycentric-face-chains-triangulate-a-geometric-simplex
kind: lemma
title: "Barycentric face chains triangulate a geometric simplex"
status: draft
origin: pipeline
deps: ["def-canonical-barycentric-realization-map", "lem-barycentric-coordinates-are-unique", "lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

For a finite geometric simplex $\sigma$, the convex hulls of barycenters along strict chains of nonempty faces form a triangulation of $|\sigma|$. Each such chain is affinely independent. Two chain simplices intersect in exactly the simplex spanned by their common face labels, with empty intersection when there are no common labels.

## Source locators

2.5.8 and 2.5.10, pp.49–52.


## Facts & Assumptions

[F1] Barycenters have equal coordinates on their face. [[def-canonical-barycentric-realization-map]].

[F2] Affine coordinates in the original simplex are unique. [[lem-barycentric-coordinates-are-unique]].


## Proof

**Given:** A simplex with unique barycentric coordinates, and strict chains of its nonempty faces.

1.1 Let a point have distinct positive coordinate levels $a_1>\cdots>a_m>0$, put $a_{m+1}=0$, and set $F_j=\{v:x_v\geq a_j\}$. These are nested nonempty faces. With $w_j=\#F_j(a_j-a_{j+1})>0$, a vertex whose coordinate is $a_\ell$ has coordinate $\sum_{j=\ell}^m w_j/\#F_j=a_\ell$ in $\sum_jw_j b_{F_j}$. Also $\sum_j w_j=\sum_v x_v=1$. Thus every point lies in a chain simplex. [F1, F2]

1.2 For any strict chain $G_1\subsetneq\cdots\subsetneq G_s$, the vectors $b_{G_j}$ are linearly independent in barycentric coordinate space: in $\sum c_j b_{G_j}=0$, a coordinate in $G_s\setminus G_{s-1}$ gives $c_s/\#G_s=0$, and descending induction gives every $c_j=0$ (finish with any vertex of $G_1$). Hence they are affinely independent in the original simplex too, by uniqueness of its affine coordinates. [F1, F2]

2.1 If a point is expressed in one of these chain simplices, delete zero weights. Its coordinate on the successive layers of the remaining chain is strictly decreasing, with consecutive differences equal to the corresponding positive weight divided by the face cardinality. Thus the positive-weight faces are exactly the level sets $F_j$ in the first step and the weights are exactly $w_j$. In two chain representations only common face labels can therefore carry positive weights. Conversely every convex combination of common labels belongs to both simplices. This proves precisely the intersection assertion and hence the triangulation. The empty simplex has no points; a one-vertex simplex has the sole weight $1$. [step 1.1, step 1.2] ∎

