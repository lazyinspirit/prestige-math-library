---
id: thm-unoriented-zero-dimensional-bordism-is-mod-two
kind: theorem
title: Framed zero-dimensional bordism in a nonorientable manifold is mod two
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
- lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs
- lem-components-of-the-frame-bundle-of-a-connected-manifold
- lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant
- def-framed-cobordism-of-embedded-submanifolds
- def-framing-of-a-normal-bundle
- lem-framed-cobordism-is-an-equivalence-relation
- def-integers-modulo-n
- def-connected-space
- def-path-connected
- thm-connected-and-locally-path-connected-implies-path-connected
- def-orientable-manifold
- def-compact-space
- ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
- def-smooth-manifold
- def-countable-choice
- lem-boundary-of-a-compact-one-manifold-has-even-cardinality
- lem-positively-oriented-bases-are-path-connected
- def-the-standard-smooth-step-function
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
    locator: Theorem 2.37(ii) with the nonorientable frame-bundle argument, printed pp.23-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the mod 2 degree and the nonorientable Hopf theorem, printed p.51
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed connected nonorientable smooth
$m$-manifold, $m\ge1$. Then the parity $N\mapsto|N|\bmod2$ is a bijection from
the set of framed cobordism classes of closed framed $0$-dimensional
submanifolds of $M$ to $\mathbb Z/2$, it is additive under disjoint union, and
$(N,\varphi)$ is framed null-cobordant if and only if $|N|$ is even. No
orientation of $M$ is used to define the invariant.


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a closed connected nonorientable smooth $m$-manifold $M$, $m\ge1$.

[F1] The boundary of every compact smooth $1$-manifold has even cardinality; such a manifold is a finite union of circles and intervals ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F2] For connected nonorientable $M$, $B(M)$ is connected and any two frames are joined by a smooth path; a frame path gives a graph cobordism ([[lem-components-of-the-frame-bundle-of-a-connected-manifold]], [[lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant]]).

[F3] Opposite chart signs at two points of a chart ball cancel by a cobordism supported there ([[lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs]]).

[F4] Framed cobordisms have literal product ends, compose along them, and have boundary the two end configurations ([[def-framed-cobordism-of-embedded-submanifolds]], [[lem-framed-cobordism-is-an-equivalence-relation]], [[def-framing-of-a-normal-bundle]]).

[F5] Frames in the same orientation component are smoothly path-connected, and the smooth step function permits constant endpoint paths ([[lem-positively-oriented-bases-are-path-connected]], [[def-the-standard-smooth-step-function]]).

## Proof

1.1 A framed cobordism from $N_0$ to $N_1$ is a compact $1$-manifold with boundary $N_0\sqcup N_1$. By [F1], $|N_0|+|N_1|$ is even, so parity is invariant under framed cobordism. This argument does not assume orientability of the ambient manifold. [F1, F4, given]

1.2 Nonorientability excludes the empty manifold. It also excludes $m=1$: by [F1], a nonempty closed connected $1$-manifold is a single circle, and its period coordinate supplies a global positive tangent ray, making it orientable. Thus $m\ge2$. In a Euclidean ball of that dimension with finitely many points removed, two allowed points can be joined by two straight segments through an intermediate point avoiding the finitely many lines through either endpoint and a removed point. A finite union of lines has empty interior: choose a direction different from all their directions and remove its finitely many intersections inside a small ball. Hence the required intermediate point exists. [F1, given]

2.1 Given any frame path from [F2] and a finite set $P$ of forbidden base points disjoint from its endpoints, subdivide it into finitely many tangent trivializations. Move subdivision frames slightly off $P$ inside the chart overlaps and preserve their local determinant component. Within each chart, join their base points in the punctured ball by step 1.2, and join their frame coordinates by [F5]; the original path ensures that the local signs of the two endpoints agree. The resulting paths glue and can be smoothed with endpoints fixed on $B(M\setminus P)$ by the smoothing argument in [F2]. The graph cobordism therefore avoids all stationary cylinders at $P$. Adjoining those cylinders gives an embedded cobordism of the full finite configuration, with the normal framings defined separately on the disjoint pieces. [F2, F4, F5, step 1.2]

3.1 Choose distinct target points in a chart ball, avoiding the initial configuration, with opposite chart framings at each chosen pair. Move the initial points successively to those targets by step 2.1, taking the forbidden set to be all other currently occupied points. The global frame bundle is connected by [F2], so no initial sign restricts the chosen terminal frame. Arrange the pairs in separate small balls and cancel each using [F3], adjoining only stationary cylinders outside that ball. An even configuration reduces to the empty one; an odd configuration reduces to a single framed point. Any two singleton configurations are cobordant by [F2], whereas a singleton is not null-cobordant by step 1.1. [F2, F3, F4, step 1.1, step 2.1]

4.1 Empty and singleton configurations realize the two parities, and step 3.1 proves that these are precisely the two classes. Thus parity is a bijection to $\mathbb Z/2$ and null-cobordism is equivalent to even cardinality. Every two classes have disjoint representatives by using distinct points. The class of their union depends only on the sum of their parities, by the bijection, so addition on classes is well defined and additive. No orientation of $M$ and no disjoint union of intersecting cobordisms is used. [F1, F4, step 1.1, step 3.1, algebra] ∎
