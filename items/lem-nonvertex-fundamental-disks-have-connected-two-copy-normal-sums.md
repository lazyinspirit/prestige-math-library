---
id: lem-nonvertex-fundamental-disks-have-connected-two-copy-normal-sums
kind: lemma
title: A nonvertex fundamental disk has a connected two-copy normal sum
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
sources:
  references:
    - title: Jeffrey L. Tollefson, Normal surface Q-theory, Pacific Journal of Mathematics 183 (1998), 359–374
      url: https://msp.org/pjm/1998/183-2/pjm-v183-n2-p07-p.pdf
      locator: §4, printed pp.366–369, exchange-patch comparison baseline only. Its irreducible/boundary-irreducible hypotheses are not transferred to this local disk-product/exchange formulation; the accepted local proof remains the argument.
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Let $D$ be a fundamental normal disk in a finite simplicial triangulation $T$. If its vector $d$ does not lie on an extreme ray of $C(T)$, there are connected embedded normal surfaces $X,Y$, neither with vector proportional to $d$, and an actual original-triangulation regular diagram whose full resolution has vector

$$v(X)+v(Y)=2d.$$

Its full resolution consists of two disks with boundary curves homotopic to $\partial D$. Exactly one of the following occurs:

1. $X$ and $Y$ are disks.
2. One is a sphere and the other is an annulus; both annulus boundary curves are homotopic to $\partial D$.

If $D$ is in addition a least-weight essential normal disk with lexicographically least vector at that weight, the first case has at least one disk with null-homotopic boundary. This is a reduction of the vertex obligation, not a proof that either case is impossible.

## Statement references

[[def-normal-surface-coordinate-box]] — the full matching cone, fundamentalness and extreme rays.

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]] — original-coordinate realization, partial regular sums and abstract uniqueness.

## Facts & Assumptions

**Given:** The fundamental normal disk and the non-extreme-ray assumption; use the additional essential extremality only for the last assertion.

[F1] Compatible admissible vectors have regular diagrams in which all partial regular resolutions retain the normal tetrahedral disk pieces. The vector determines the abstract surface and the homotopy classes of corresponding boundary curves. These properties persist when some components are absorbed by performing all their regular switches with the other family: only the remaining old double curves are left. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F2] A connected finite surface has Euler characteristic at most two. With boundary it has Euler characteristic at most one; if positive it is a disk. A closed surface of Euler characteristic two is a sphere, and a boundary surface of Euler characteristic zero is an annulus or a Mobius band, distinguished by respectively two or one boundary circles. ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]])

[F3] Euler characteristic is additive under regular sums. For a proper double arc, cutting raises the total by two and its two joining strips lower it by two; for a double circle the change is zero. The finite strip cell count proves this also for partial immersed normalizations.

## Proof

1.1 There is an integer $n\ge1$ and two nonzero admissible integer vectors $x,y$, neither proportional to $d$, with $nd=x+y$. Here is the rational linear algebra behind this assertion. The smallest face of the nonnegative matching cone containing $d$ is obtained by setting its zero coordinates to zero. If that face has dimension at least two, its matching nullspace, restricted to the positive coordinates of $d$, has dimension at least two. Adding the equation that coordinate sum is zero leaves a nonzero null vector $h$. The coefficient matrix is integral, so ordinary finite rational row reduction gives such an $h$ rational; clear denominators to make it integral. It is not proportional to $d$, since its coordinate sum is zero while that of $d$ is positive. For a sufficiently large integer $N$, both $Nd+h$ and $Nd-h$ are nonnegative and supported on $d$. They are admissible because that support permits only $d$'s quad type in each tetrahedron, and they sum to $2Nd$. This proves the assertion. Conversely the face could have dimension one only if $d$ were on an extreme ray, contrary to the hypothesis. [given, construct, algebra]

2.1 Choose $n$ least among these decompositions. It is at least two, since $D$ is fundamental. Also $d$ has coordinate gcd one: otherwise division by that gcd would split it into two nonzero admissible integer vectors. A connected normal component with vector proportional to $d$ must therefore have vector $jd$ for a positive integer $j$. Indeed a Bezout integer combination of the coordinates of $d$ is one, so the same combination of the proportional integral vector gives its proportionality scalar as an integer. By [F1] a realization of $jd$ has the abstract surface of $j$ disjoint copies of $D$; connectedness forces $j=1$. Thus any such component is a copy of $D$. [given, F1, step 1.1, construct, algebra]

3.1 Among regular diagrams for the least $n$, choose one with the least number of double curves, allowing the diagrams obtained by partial regular absorption as in [F1]. Neither family has a component with vector proportional to $d$. Such a component would have vector $d$ by step 2.1; subtracting it from $nd=x+y$ gives a nonproportional decomposition of $(n-1)d$, contrary to minimality. The remaining vector on its side is nonzero and not proportional, since otherwise the entire side would have been proportional. Every component of either family intersects the other family: a disjoint component survives unchanged into the full resolution, which has the abstract surface of $nD$ by [F1], and would consequently be a copy of $D$, just excluded. [F1, step 2.1, construct, contradiction]

4.1 Both families are connected. Suppose, for example, that $Y$ has distinct components, and choose one $Z$. Regularly absorb all the other $Y$ components into $X$, giving a surface $W$. It is embedded and normal: the only remaining old double curves join its sheets to $Z$, so it has no self-intersection, and all tetrahedral pieces remain normal by [F1]. Now $nd=v(W)+v(Z)$. The vector of $Z$ is not proportional by step 3.1, and that of $W$ cannot be proportional either, since then $nd-v(W)=v(Z)$ would be. Thus this is another eligible diagram for the same $n$. Its remaining double curves are exactly the former curves between $X$ and $Z$. There are strictly fewer: every absorbed $Y$ component intersected $X$ by step 3.1. This contradicts the chosen minimum. The same argument interchanging families proves connectedness of $X$. [F1, step 3.1, construct, contradiction, algebra]

5.1 Their Euler characteristics sum to $n$ by [F3]. They cannot both be closed, since their resolution has nonempty boundary. If exactly one is closed, every double curve is a circle, so the other surface's boundary is unchanged by resolution and consists of $n$ circles. Since $n\ge2$, that connected boundary surface has Euler characteristic at most zero by [F2]. The closed summand has Euler characteristic at most two. Hence $n=2$, the closed summand has characteristic two and is a sphere, and the other has characteristic zero and two boundary circles and is an annulus. If both have boundary, each has Euler characteristic at most one, so again $n=2$ and both are disks. The full-resolution surface has vector $2d$, so [F1] gives its two disk components and their boundary homotopy classes. In the sphere case those are exactly the unchanged annulus boundary curves. [F1, F2, F3, step 2.1, step 4.1, construct, algebra]

6.1 Finally assume the extra weight and essentiality hypotheses and that both disk summands were essential. Their positive weights add to $2w(D)$, while each is at least $w(D)$; hence both equal $w(D)$. Their vectors satisfy $x+y=2d$. If either differs from $d$, at the first differing coordinate the two differences have opposite nonzero signs. One vector would be lexicographically smaller than $d$, contrary to the hypothesis. Thus both equal $d$, contrary to their nonproportionality. At least one disk summand must therefore have null-homotopic boundary, as asserted. No conclusion excluding that case or the sphere-annulus case has been used. [given, step 4.1, step 5.1, contradiction, algebra] ∎
