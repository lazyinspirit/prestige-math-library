---
id: lem-kontsevich-configuration-space-compactification-faces
kind: lemma
title: Compactified Kontsevich configuration spaces and faces
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
justified_by: []
dependency_level: 4
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.2 and 8.6
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §§2.5–2.5.2
      url: https://arxiv.org/pdf/q-alg/9702009v1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Fix either a strict Morse presentation $K:S^1\hookrightarrow\mathbb C\times\mathbb R$ or a compact strict Morse tangle $T\subset\mathbb C\times[a,b]$, and an integer $m\ge1$. For each chamber of the ordered level simplex and each choice of the local branches paired at its levels, let $C_m$ be the resulting open configuration cell. The finite union of these cells has a compactification $\overline C_m$ that is a compact manifold with corners. Its boundary strata record exactly: adjacent level collisions $t_i=t_{i+1}$; the endpoint faces at $t_{\min},t_{\max}$ for a knot or at $a,b$ for a tangle; levels reaching a critical value of the height function; and compatible intersections of these events. Whenever endpoint positions coalesce, real oriented blow-up records their relative scale and limiting direction, including nested collision clusters. The branch-evaluation maps extend smoothly to the resolved faces. Orient each open cell by $dt_1\wedge\cdots\wedge dt_m$ and orient every new collision face by the outward-normal-first convention using its nonnegative radial coordinate; a critical-level face uses the local Morse coordinate $s\ge0$ with $t-c=\pm s^2$ and the same boundary-orientation convention.

The diagram shows the level simplex for $m=2$. Its diagonal is the equal-level face, the outer edges are the minimum/maximum endpoint faces, and the dashed cuts are critical levels; their intersections are the corner strata.

```tikz
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,3);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[->] (0,0) -- (0,3.35) node[above] {$t_2$};
  \draw[->] (0,0) -- (3.35,0) node[right] {$t_1$};
  \draw[dashed] (0.6,0.5) -- (2.5,0.5) node[right] {$t_2=c$};
  \draw[dashed] (1.6,0) -- (1.6,1.6) node[above] {$t_1=c'$};
  \node at (2.1,1.05) {$t_2<t_1$};
  \node at (2.75,2.4) {$t_1=t_{\max}$};
  \node at (0.85,0.22) {$t_2=t_{\min}$};
  \node at (2.55,2.2) {$t_2=t_1$};
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Ordered level cells, branch pairings, and the Kontsevich integral]]

[[def-singular-knot-and-vassiliev-derivative|Smooth oriented knot convention]]

[[def-framed-chord-diagram-and-four-term-relations|Finite chord-diagram endpoint data]]

[Chmutov, Duzhin, and Mostovoy, §8.2, printed pp. 223–225](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.5, PDF pp. 12–13](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** Either a strict Morse knot presentation or a compact strict Morse tangle with regular boundary levels, its height function $t$, and a finite degree $m\ge1$.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: the degree-$m$ integration domain is the ordered simplex between the boundary or extreme levels with critical levels removed; at each level a pairing chooses two distinct points on the knot or tangle and determines their chord endpoints.

[F2] [[def-singular-knot-and-vassiliev-derivative]]: the knot skeleton is a compact smooth circle. For tangles, the compact one-dimensional skeleton and regular boundary levels are as in [F1]; nondegenerate critical points are isolated.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: a degree-$m$ chord diagram has finitely many endpoints, each endpoint lying on the oriented parameter circle.

## Proof

**Given:** As above. All compactifications below are finite-degree and choice-free.

1.1 The critical points are isolated in the compact one-dimensional skeleton and absent from the tangle boundary, so there are finitely many critical points and critical values. On every open interval between consecutive critical values or boundary levels, the inverse image is a finite union of arcs on which $t$ is a local diffeomorphism. Thus the number of branches, and the finite set of allowed pairs at a level, are constant on each such interval. [given, F1, F2]

1.2 At a regular level, each branch is a smooth graph $z=z_\lambda(t)$, so its evaluation extends smoothly to any regular face. Near a critical point, choose a local parameter $x$ with $t(0)=c$, $t'(0)=0$, and $t''(0)\ne0$. The function $h(x)=(t(x)-c)/x^2$ extends smoothly with $h(0)=t''(0)/2\ne0$; after shrinking the coordinate interval, $s=x\sqrt{|h(x)|}$ is a smooth coordinate with nonzero derivative and $t=c+\operatorname{sgn}(h(0))s^2$. Since $z=z(x(s))$ is smooth, the two local branches and their limiting common point extend to the critical face in this coordinate. [given, F1, F2, construct]

2.1 Fix a chamber and let $k_r$ be the number of its ordered levels in the $r$th interval between critical or boundary levels. The chamber is a product of open simplices, one for each interval, with $k_r$ ordered coordinates. Its closure is the product of the corresponding closed simplices, hence compact. The facets of a closed simplex are exactly adjacent-coordinate equalities or a coordinate reaching one endpoint of its interval; across the finite family of chambers those endpoints are the knot extrema, tangle boundary levels, or critical values. Thus before resolving endpoint collisions the only faces are level collisions, outer endpoints, and critical-level events. [F1, step 1.1, algebra]

2.2 In a regular-level collision, endpoints on distinct branches remain distinct because $K$ is embedded; endpoints on one branch coalesce along a smooth arc. In the latter case, use local parameters $s_1,\dots,s_k$ for the colliding endpoints, their center $p=k^{-1}\sum s_j$, the radius $r=(\sum_j|s_j-p|^2)^{1/2}$, and the normalized shape $(s_j-p)/r$. Replacing the diagonal $r=0$ by this shape data is the real oriented blow-up of that collision diagonal; its local coordinates are $r\ge0$ and smooth shape coordinates. At a critical point, step 1.2 supplies the same form with the Morse coordinate $s$. [F1, F2, step 1.2, construct]

3.1 For a cluster of several endpoints, first blow up the full collision diagonal and then each proper collision diagonal in its limiting shape space, from larger clusters to smaller ones. Collision subsets in any limiting configuration are either nested or disjoint, so these blow-ups introduce finitely many nonnegative radii $r_C$ and smooth shape coordinates. Each resulting chart is a product of half-lines $r_C\ge0$ and an open smooth coordinate set; transition maps are smooth because they are changes of center, scale, and unit direction. Hence the resolved cell is a manifold with corners. Each added boundary hypersurface is a collision cluster, and its boundary orientation is determined by the outward vector $-\partial_{r_C}$. The original simplex orientation and the local coordinates $s\ge0$ at critical levels give the stated orientations on all remaining faces. [F1, F3, step 2.2, construct]

4.1 Each chamber closure is compact by step 2.1, and real oriented blow-up replaces a closed collision diagonal by a compact sphere of limiting directions without losing compactness. Only finitely many chambers, branch pairings, and endpoint subsets occur at fixed $m$, so their resolved union is compact. The boundary labels from steps 2.1 and 3.1 exhaust its boundary faces; no additional face can occur because every boundary coordinate is either a level-gap, a distance to a critical/global endpoint, or one of the finitely many collision radii. The branch evaluations extend by steps 1.2 and 2.2. [F1, F2, F3, step 2.1, step 3.1, construct] ∎

