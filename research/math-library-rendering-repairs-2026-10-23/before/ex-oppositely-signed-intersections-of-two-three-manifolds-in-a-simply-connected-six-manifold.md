---
id: ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold
kind: example
title: Oppositely signed intersections of two three-manifolds in a simply connected six-manifold
deps:
- thm-high-dimensional-whitney-trick
- lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range
- def-local-oriented-intersection-sign
- def-oriented-smooth-manifold-and-oriented-chart
- def-oriented-intersection-number
- cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary
- def-simply-connected
- def-smooth-embedding
- def-countable-choice
- thm-higher-dimensional-spheres-are-simply-connected
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorem 7.27 and Corollary 7.30, printed pp. 138-141 (two opposite points of complementary dimensions
      in a simply connected ambient manifold are removed by an isotopy)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 with its Remark, printed pp. 71-72 (for $r\ge2$ connected sheets and $V$ simply connected
      the loop hypothesis is automatic)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

In $S^6$ let $A=S^3\subset S^6$ be a standard linear $3$-sphere and let $B$ be a $3$-sphere obtained from a standard $3$-sphere disjoint from $A$ by a finger move that pushes a small $3$-ball across $A$; the move creates exactly two transverse intersection points $p,q$ with opposite local signs, so $A\cap B=\{p,q\}$ and $I(A,B)=I(p)+I(q)=0$. Here $m=6$, $a=b=3$, and $$a=b=m-3=3,$$ so the clean-disk general-position lemma applies at its boundary, and $S^6$ is simply connected, so every Whitney circle is null-homotopic; the high-dimensional Whitney trick then isotopes $A$ to an embedded $3$-sphere $A'$ with $A'\cap B=\varnothing$. The example thus verifies the dimension range $a,b\le m-3$ in the first non-trivial case and exhibits the cancellation of a single opposite-sign pair in a simply connected ambient manifold.

## Facts & Assumptions

[F1] Smooth embeddings. [[def-smooth-embedding]]

[F2] The local sign compares the ordered tangent spaces of the two sheets with the ambient orientation. [[def-local-oriented-intersection-sign]]

[F3] The oriented intersection number. [[def-oriented-intersection-number]]

[F4] $S^n$ is simply connected for every $n\ge2$. [[thm-higher-dimensional-spheres-are-simply-connected]]

[F5] In the stable range an admissible opposite-sign pair with nullhomotopic Whitney circle can be removed, leaving every other intersection fixed. [[thm-high-dimensional-whitney-trick]]

## Verification


**Given:** Countable choice and $S^6$ as the one-point compactification of $\mathbb R^6$ with coordinates $(e_1,e_2,e_3,y_1,y_2,y_3)$.

1.1 Take $A$ to be the compactification of the plane $y=0$, a standard linear $S^3$. Start with a small round $3$-sphere $B_0$ in the affine $4$-plane $e_2=e_3=0$, centred far enough in the positive $y_3$ direction to miss $A$. Near its lowest point it is a graph $y_3=h_0(e_1,y_1,y_2)>0$ over a small $3$-ball. Replace only a smaller graph cap by $y_3=h_1(e_1,y_1,y_2)$, where $h_1=e_1^2+y_1^2+y_2^2-\rho^2$ on a small inner ball and is positive outside it, agreeing with $h_0$ near the outer cap boundary. Such a smooth radial interpolation can be chosen positive whenever $e_1^2+y_1^2+y_2^2>\rho^2$, by choosing $\rho$ sufficiently small. The linear interpolation from $h_0$ to $h_1$ gives embedded graph caps throughout and fixes the outer collar; it is a local finger move of this $3$-ball. The resulting $B$ is an embedded $S^3$. [given, construct, F1]

2.1 An intersection with $A$ forces $y_1=y_2=y_3=0$. On the changed cap it therefore forces $e_1^2=\rho^2$, giving exactly $p=(\rho,0,0,0,0,0)$ and $q=(-\rho,0,0,0,0,0)$. Outside the changed cap $y_3>0$ wherever $y_1=y_2=0$, so there are no other intersections. At either point the tangent directions of $B$ are $\partial_{e_1}+2e_1\partial_{y_3},\partial_{y_1},\partial_{y_2}$. Together with $TA=\operatorname{span}(\partial_{e_1},\partial_{e_2},\partial_{e_3})$ they span the six-dimensional ambient space; their determinant differs at the two points only by the sign of $2e_1$. Thus the local signs are opposite and $I(A,B)=0$. [step 1.1, construct, algebra, F2, F3]

3.1 Here $a=b=3=m-3$, so the stable dimension inequalities are met at equality. The sphere $S^6$ is simply connected by the published sphere theorem, and the two connected sheets admit the required avoiding arcs. The high-dimensional Whitney trick therefore removes exactly this pair, producing an embedded $A'$ disjoint from $B$. The explicit cap verifies the claimed finger-move witness, rather than presupposing its intersection count. [step 2.1, construct, F4, F5] ∎
