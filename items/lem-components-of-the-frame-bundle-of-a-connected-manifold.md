---
id: lem-components-of-the-frame-bundle-of-a-connected-manifold
kind: lemma
title: The components of the frame bundle of a connected manifold
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
- def-frame-bundle-of-a-smooth-manifold
- def-orientable-manifold
- lem-positively-oriented-bases-are-path-connected
- thm-path-lifting-for-covering-maps
- thm-relative-whitney-approximation-for-manifold-valued-maps
- def-countable-choice
- def-path-connected
- def-connected-component-and-quasicomponent
- thm-connected-and-locally-path-connected-implies-path-connected
- def-oriented-smooth-manifold-and-oriented-chart
- def-smooth-manifold
- def-the-standard-smooth-step-function
- thm-lebesgue-number-lemma
- thm-heine-borel-rn
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Lemma 2.44, printed pp.23-24, and the frame-bundle discussion (2.40)-(2.43) on the same pages
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, framings of a submanifold and the discussion of preferred bases, printed pp.42-44
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a nonempty connected smooth $m$-manifold, $m\ge1$. If $M$ is orientable, $B(M)$ has exactly two components, corresponding to the positive and negative frames for either fixed orientation of $M$. If $M$ is nonorientable, $B(M)$ is connected. Each component is locally path-connected, and any two of its frames are joined by a smooth path. In the oriented case the endpoint frames of such a path have the same sign.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a nonempty connected smooth $m$-manifold $M$, $m\ge1$.

[F1] Tangent-bundle charts give smooth trivializations $B(M)|_U\cong U\times\mathrm{GL}_m(\mathbb R)$; the determinant sign distinguishes the two path components of each fibre ([[def-frame-bundle-of-a-smooth-manifold]]).

[F2] Positive frames are smoothly path-connected ([[lem-positively-oriented-bases-are-path-connected]]).

[F3] Components of a locally path-connected space are its path components. Smooth manifolds are locally path-connected, since sufficiently small coordinate balls are convex ([[thm-connected-and-locally-path-connected-implies-path-connected]], [[def-smooth-manifold]], [[def-path-connected]], [[def-connected-component-and-quasicomponent]]).

[F4] An orientation is a smooth choice of tangent determinant ray; orientability means that such a choice exists ([[def-oriented-smooth-manifold-and-oriented-chart]], [[def-orientable-manifold]]).

[F5] Under $\mathrm{AC}_\omega$, a continuous map on a smooth manifold that is smooth near a closed subset has a smooth approximation equal to it near that subset ([[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[def-countable-choice]]). The smooth step function is $0$ before $0$ and $1$ after $1$ ([[def-the-standard-smooth-step-function]]).

[F6] The interval is compact and an open cover of a compact metric space has a Lebesgue number ([[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]]).

## Proof

1.1 Form the tangent-ray cover $O(TM)$ with points $(x,o)$, where $o$ is one of the two orientation rays of $T_xM$. In each tangent chart its topology and smooth structure are $U\times\{+,-\}$; transition signs are locally constant because their derivative determinants are continuous and nonzero. These charts define a two-sheeted covering $p:O(TM)\to M$. A section is exactly an orientation by [F4]: in a chart a continuous section chooses a locally constant sign, hence a smooth ray. The map $\rho:B(M)\to O(TM)$ sending a frame to its ray is locally the determinant-sign quotient and has the path-connected fibre $\mathrm{GL}_m^+(\mathbb R)$. [F1, F2, F4, given]

2.1 Both $M$ and $O(TM)$ are locally path-connected. Lift paths in $M$ to $O(TM)$ with a prescribed initial lift by [[thm-path-lifting-for-covering-maps]]. Since $M$ is path-connected by [F3], each path component of the cover meets the fibre over every point. Thus there are at most two path components. If there are two, each contains exactly one point over each base point; the restricted projection is a bijective local diffeomorphism, so its inverse is a section, and $M$ is orientable. Conversely a section and its opposite have disjoint open images covering $O(TM)$, each homeomorphic to the connected $M$. Hence the cover has exactly two components precisely in the orientable case, and one otherwise. [F3, F4, step 1.1]

3.1 A path in $O(TM)$ can be lifted to $B(M)$ with prescribed initial frame: by [F6], subdivide its parameter interval into finitely many pieces lying in bundle trivializations from step 1.1; on each piece keep the fibre coordinate constant, expressing the terminal frame in the next chart before continuing. This constructs a continuous lift. Join its endpoint to any prescribed frame over the same terminal ray by [F2]. Conversely every path in $B(M)$ projects under $\rho$. Thus $\rho$ induces a bijection of path components. By [F3] these are also connected components; step 2.1 gives their number, and in the oriented case their labels are the signs relative to the chosen orientation. [F1, F2, F3, F6, step 1.1, step 2.1]

4.1 Given a continuous frame path $c$, first replace it by $c(\sigma(3t-1))$, constant near $0$ and $1$, where $\sigma$ is [F5]. Extend this path to $\mathbb R$ by its constant endpoint values. Apply [F5] to the closed set $(-\infty,0]\cup[1,\infty)$, near which the extension is smooth. Restrict the resulting smooth approximation to $[0,1]$. Its endpoints are unchanged; its image is a path in the same component, so in the oriented case the endpoint signs coincide. Local path-connectedness of each component follows from [F3]. Nonemptiness is essential: $B(\varnothing)$ has no components. [F3, F5, step 3.1] ∎
