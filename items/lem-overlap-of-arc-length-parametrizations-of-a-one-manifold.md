---
id: lem-overlap-of-arc-length-parametrizations-of-a-one-manifold
kind: lemma
title: "Overlap structure of arc-length parametrizations of a 1-manifold"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-riemannian-metric-and-riemannian-manifold, thm-every-smooth-manifold-admits-a-riemannian-metric, def-interval, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-manifold, thm-euclidean-inverse-function-theorem, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-12.md
      - research/frontier-38-owner-30-dispatch/reader-reader-12.result.json
      - research/frontier-38-owner-30-step5-hash-12-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-12-5a-decisions.json
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "Appendix: Classifying 1-manifolds, printed pp. 55–57 (the lemma on parametrizations by arc length, its two-component case and the construction of the circle diffeomorphism)"
---

## Statement

Let $(M,g)$ be a connected smooth Riemannian $1$-manifold (boundaries allowed; [[def-riemannian-metric-and-riemannian-manifold]]) and let $f:I\to M$, $h:J\to M$ be arc-length parametrizations: smooth maps carrying intervals $I,J\subseteq\mathbb R$ ([[def-interval]]) diffeomorphically onto open subsets of $M$ with velocity of $g$-length one at every point. Then $f(I)\cap h(J)$ has at most two connected components. If it has exactly one, then $h^{-1}\circ f$ extends to an affine map $L:\mathbb R\to\mathbb R$ and $f$ and $h\circ L$ glue to an arc-length parametrization of $f(I)\cup h(J)$ over the interval $I\cup L^{-1}(J)$. If it has two components, the two have the same slope and $M$ is diffeomorphic to the circle $S^1$.

## Facts & Assumptions

**Given:** A connected Riemannian $1$-manifold $(M,g)$ and arc-length parametrizations $f:I\to M$, $h:J\to M$ onto open subsets.

[F1] For every $x\in M$ the tangent space $T_xM$ is a one-dimensional inner product space, and the arc-length condition reads $\lvert df_s(1)\rvert_g=1$ and $\lvert dh_t(1)\rvert_g=1$ for all $s,t$ ([[def-riemannian-metric-and-riemannian-manifold]]).

[F2] $f:I\to f(I)$ and $h:J\to h(J)$ are diffeomorphisms onto open subsets, so $h^{-1}$ is smooth on $h(J)$, the set $S:=f^{-1}(h(J))$ is open in $I$, and $\varphi:=h^{-1}\circ f:S\to J$ is smooth, injective, and a local diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-manifold]]).

[F3] Connected subsets of $\mathbb R$ are order-convex: a missing intermediate point separates a subset meeting both sides. Taking infimum and supremum therefore describes each component of a relatively open subset of an interval as an interval of the forms in [[def-interval]], possibly including boundary endpoints. Relative openness supplies a small interval around each of its points, so those components are relatively open and nondegenerate.

[F4] A smooth map from a boundaryless $1$-manifold to a $1$-manifold with nowhere-vanishing derivative is a local diffeomorphism: a boundary image would force the boundary-coordinate function to have a local minimum and zero derivative, and at interior images the inverse function theorem applies. A bijective local diffeomorphism is a diffeomorphism ([[thm-euclidean-inverse-function-theorem]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

**Proof technique:** compare the affine segments of the transition graph.

1.1 On $S=f^{-1}(h(J))$ put $\varphi=h^{-1}\circ f$. Differentiating $f=h\circ\varphi$ and taking lengths gives $|\varphi'|=1$. On each component $D$ of $S$, continuity makes $\varphi'$ constant, so $\varphi(s)=\varepsilon_Ds+c_D$, with $\varepsilon_D=\pm1$. The graph is closed in $I\times J$: it is the inverse image of the diagonal of the Hausdorff manifold $M$ under $(f,h)$. Its segments are maximal intersections of their affine lines with $I\times J$, since closedness and the local diffeomorphism property prevent a segment from stopping where both coordinates remain in the relative interiors of their intervals. Included interval endpoints are retained in this assertion. [F1, F2, F3, given, algebra]

2.1 Each end of a segment therefore reaches an end of $I$ or $J$. At most one segment can reach any one of the four sides: two reaching an $I$-side would have overlapping $s$-projections, contradicting single-valuedness, and two reaching a $J$-side would have overlapping $t$-projections, contradicting injectivity. This includes unbounded ends, since two tails towards the same infinite end overlap. Every segment consumes two distinct sides, so there are at most two segments. With two segments their projections are disjoint on both axes; they must occupy opposite corners, joining left to top and bottom to right (slope $+1$), or left to bottom and top to right (slope $-1$). Thus their slopes agree. [F2, F3, step 1.1, algebra]

2.2 If there is one component, extend its affine expression to $L:\mathbb R\to\mathbb R$. Maximality of the segment gives $S=I\cap L^{-1}(J)$. The union $I\cup L^{-1}(J)$ is an interval, and $f$ and $h\circ L$ agree on the overlap. Their glued map is smooth and unit-speed. If $f(s)=h(L(s'))$, then $s\in S$ and injectivity of $h$ gives $L(s)=L(s')$, hence $s=s'$. On each open domain piece it is the given local diffeomorphism $f$ or $h\circ L$, so the glued map is a diffeomorphism onto the open union, as required. [F2, F3, F4, step 1.1, construct]

3.1 In the two-component case reflect a parameter if needed so both slopes are $+1$. The opposite-corner arrangement of 2.1 has $I=(a,d)$, transition expressions $s+p$ on $(a,b)$ and $s+q$ on $(c,d)$, and $J=(c+q,b+p)$, where $a<b\le c<d$ and $d+q\le a+p$. These endpoints are finite: $b,c$ lie inside $I$, while $a+p,d+q$ lie inside $J$. The endpoints of $I,J$ are excluded, since inclusion of one would equate a boundary point of one parametrization with an interior point of the other, by continuity of the transition and preservation of boundary under diffeomorphisms. Put $L=p-q>0$. On $\mathbb R/L\mathbb Z$ define $H([t])=f(a+t)$ for $0<t<d-a$ and $H([t])=h(a+q+t)$ for $d-a\le t\le L$, identifying $L$ with $0$. These cover the circle because $d-a\le L$. At $t=d-a$ and $t=0$ the adjacent formulas agree in the $h$-chart with the same affine coordinate, so $H$ is smooth and unit-speed across both seams. [F2, F3, F4, step 2.1, construct]

4.1 The first branch of $H$ parametrizes $f(I)$ injectively; the remaining arc parametrizes the part of $h(J)$ outside $f(I)$, including the two seams. The only identifications are the stated transition relations, so $H$ is injective and its image is $f(I)\cup h(J)$. It is a local diffeomorphism, hence has open image; its compact image is closed in the Hausdorff $M$. Connectedness forces its image to be all of $M$, and the bijective local diffeomorphism $H$ proves $M\cong S^1$. The given metric and parametrizations require no choice principle. [F2, F4, step 3.1, given] ∎
