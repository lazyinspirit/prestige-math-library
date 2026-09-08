---
id: lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram
kind: lemma
title: "Euler curvature identity for an arc reduced disc diagram"
status: draft
origin: pipeline
deps: [def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]
landmark: false
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
    - title: "Touikan Lemmas 3.4.2\u20133.4.3, Corollary 3.4.5 and Theorem 3.4.6"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
---

## Statement

For a finite diagram $D$ with arbitrary corner angles and with the arc-reduction conventions below,

$$\sum_v k(v)+\sum_f k(f)=2(V-E+F)=2.$$

This includes zero-face trees, the isolated point, and spurs, with all boundary and link incidences counted with multiplicity.

## Facts & Assumptions

**Given:** A finite planar simply connected diagram $D$, with $V$ vertices, $E$ edges and $F$ faces, and an arbitrary real angle on every face corner.

[F1] The curvature formulas use edge germs and corner multiplicities; an isolated point has empty link and a spur tip has singleton link ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]]).

## Proof

1.1 The total number of vertices in all links is $2E$, one per edge germ, including two for a loop. The total number of link edges is $\sum_fd(f)$, one per corner. Hence $\sum_v\chi(\operatorname{lk}(v))=2E-\sum_fd(f)$. Each angle occurs once in the vertex sums and once in the face sums, with opposite signs. Substitution into [F1] therefore gives $\sum_vk(v)+\sum_fk(f)=2V-2E+\sum_fd(f)-\sum_f(d(f)-2)=2(V-E+F)$. [F1, algebra]

1.2 If a planar diagram has a face, some edge of a face borders the unbounded region of the union of faces: take a ray from an interior point in a generic direction and its last crossing of this finite union. Such an edge has only one incident face. Remove that open edge and the open face. A polygon retracts to the complementary boundary path, with all other cells fixed; thus the remainder is connected and simply connected and still planar. This operation removes one edge and one face and preserves $V-E+F$. Repeating removes every face. The remaining graph is connected and has no cycle, since a cycle in a planar graph without faces is a hole. [given]

2.1 The remaining finite tree, if not a point, has an end vertex: a longest simple path cannot extend at either end. Removing an end vertex and its edge preserves $V-E$ and leaves a tree. It ends at one vertex, where $V-E+F=1$. Reversing all these operations yields $V-E+F=1$ for $D$. Arc suppression also removes one edge and one vertex at each degree-two suppression, preserving this value; the whole-circle convention avoids deleting the final marked vertex. [step 1.2, F1]

3.1 In a tree there are no angles or faces and $k(v)=2-\deg(v)$, so the total is $2V-2E=2$. A deleted spur tip contributes one; at its neighbour the link loses one isolated vertex, raising that neighbour's curvature by one. Thus retaining or removing the spur preserves the total, rather than silently assigning its tip zero curvature. The one-point case contributes two. Combining step 1.1 with step 2.1 gives the identity in every case. [F1, step 1.1, step 2.1, algebra] ∎
