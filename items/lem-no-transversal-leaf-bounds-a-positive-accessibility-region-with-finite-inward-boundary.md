---
id: lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary
kind: lemma
title: A no-transversal leaf bounds a positive accessibility region with finite inward boundary
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-accessible-manifold-of-a-leaf
- def-dead-end-component
- def-countable-choice-principle-for-foliation-pair
- def-leaf-of-a-regular-foliation
- def-regular-foliation-atlas
- lem-positive-transverse-accessibility-is-a-preorder
- def-positive-transverse-accessibility-between-leaves
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- lem-c2-inverses-and-scalar-return-roots
- thm-morse-sard-for-euclidean-maps
- prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
- def-taut-codimension-one-foliation
- def-interior-closure-boundary-top
- def-compact-space
- lem-closed-connected-one-manifolds-are-circles
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §1, Definition 1.4 and component structure, printed p. 2; the boundary chart computation is supplied
      locally
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; finite box and boundary plaque analysis supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth cooriented codimension-one foliation on a closed manifold $M$, let $N_L$ be the strict positive accessible set of a leaf $L$. It is open and saturated, and $L$ meets a closed transversal if and only if $L\subseteq N_L$. The foliation is taut if and only if every $N_L$ equals the ambient connected component containing $L$.

If $L$ meets no closed transversal, then $W=\overline{N_L}$ is a proper compact manifold with nonempty boundary, consisting of finitely many compact leaves including $L$, and positive transverse directions point inward along its entire boundary. All its boundary leaves meet no closed transversal. The region construction is also valid for $C^2$ foliations and $C^2$ transversals. It is strict one-direction reachability, not the formal reflexive relation or a mutual-accessibility class.

## Facts & Assumptions

**Given:** The foliation, leaf, countable choice and strict nonempty-path convention of the statement. Work within the connected component of $L$.

[F1] Finite plaque chains give leafwise paths; foliation coordinates have plaque-preserving transverse transitions ([[def-leaf-of-a-regular-foliation]], [[def-regular-foliation-atlas]]).

[F2] A genuine positive transverse segment admits arbitrary endpoint adjustment along its starting and ending leaves, and genuine positive segments concatenate after smoothing ([[lem-positive-transverse-accessibility-is-a-preorder]], [[def-positive-transverse-accessibility-between-leaves]]). For a smooth atlas the same finite flow, exponential-offset and corner-smoothing construction is smooth.

[F3] Compact source sets admit bumps, $C^2$ local equations with invertible differential admit $C^2$ inverses, and the critical values of a $C^r$ Euclidean map are null for $r>\max\{a-b,0\}$, where $a,b$ are its source and target dimensions ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[lem-c2-inverses-and-scalar-return-roots]], [[thm-morse-sard-for-euclidean-maps]]). A lower-dimensional $C^1$ manifold has null image in a higher-dimensional manifold ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

[F4] Tautness means that every leaf meets an embedded closed transversal ([[def-taut-codimension-one-foliation]]). Closure and boundary are [[def-interior-closure-boundary-top]], and compactness is [[def-compact-space]].

[F5] A nonempty closed connected smooth one-manifold is a circle ([[lem-closed-connected-one-manifolds-are-circles]]).

[F6] The accessible-set definition uses genuine nonempty positive paths, and a dead-end component is a proper compact saturated region with nonempty leaf boundary and inward positive direction ([[def-accessible-manifold-of-a-leaf]], [[def-dead-end-component]]). The additional properties advertised in those definitions are conclusions to be justified here, not assumptions.

## Proof

1.1 Reachability is open. In the last short product-chart segment of a positive path, its transverse derivative has a positive lower bound. Varying its endpoint slightly and interpolating this variation in that segment keeps the derivative positive, so every sufficiently nearby endpoint is also reachable. It is saturated: once a point of a leaf is reached by a genuine segment, F2 adjusts its endpoint to any specified point of that same leaf. Concatenation in F2 also shows forward invariance under every positive path. These arguments use actual nonempty segments, never the formal equality clause of the preorder. [F1, F2, construct]

2.1 A closed positive transversal meeting $L$ is already a positive return path from $L$ to $L$. Conversely F2 turns a genuine return into a positive path starting and ending at the same specified point of $L$. Smooth its closing corner in a product chart: both one-sided transverse derivatives are positive, so convolution and a sufficiently small collar interpolation keep them positive. The resulting closed immersed transverse curve still crosses $L$, since the local transverse coordinates immediately before and after that corner have opposite signs. For a smooth atlas every step can be smooth; for a $C^2$ atlas use $C^2$ convolution and interpolation. [F1, F2, step 1.1, construct]

3.1 The immersed closed curve of step 2.1 can be replaced by an embedded closed transversal meeting $L$. Keep a small interval at its chosen transverse crossing fixed. Its immersion gives a finite chart cover with uniform local injectivity, preserved by small $C^1$ perturbations: a projected coordinate has derivative of one sign bounded away from zero on each smaller interval. Outside a corresponding diagonal neighborhood, pair and triple configurations of source parameters are compact. Finitely many source-separated bumps with independent target-coordinate translations make each pair or triple value evaluation a submersion on neighborhoods of those configurations. Points of the fixed interval have distinct images; a possible coincidence involving it has another adjustable point. Include incidence with the retained image point among the finite generic conditions: another adjustable branch has source dimension one and target codimension n, so it misses that point for n>=2. After the perturbation a smaller fixed crossing interval is separated from all other branches there. On the coincidence manifold for $k=2,3$ the parameter projection has source dimension $P+k-(k-1)n$, where $P$ is parameter dimension and $n=\dim M$. F3's Sard theorem, or its lower-dimensional image clause, gives generic slice transversality. For $n\ge3$ pair dimension $2-n<0$ gives an embedded curve. For $n=2$ pairs are isolated and compact, hence finite, and triple dimension $3-4<0$ excludes triples. At each remaining crossing, both branch directions have positive transverse-coordinate derivative; replace them in a small rectangle by two disjoint increasing graphs, switching partners and matching the order of their endpoints. Smooth the seams in the positive cone. The finitely many resolutions give disjoint embedded positive circles; retain the one containing the fixed crossing of $L$. For $n=1$, leaves are points; the compact component is a circle by [F5], and its positively oriented once-around parametrization is an embedded return. Thus a genuine return is equivalent to an embedded closed transversal. [F1, F3, F5, step 2.1, construct, algebra]

4.1 Suppose $L$ meets no closed transversal. Steps 1.1–3.1 imply $N_L\cap L=\varnothing$. Short positive segments starting at each point of $L$ show $L\subseteq\overline{N_L}$, hence $L\subseteq\partial N_L$. In an oriented foliation box, saturation makes membership in $N_L$ constant on each plaque, and forward invariance makes the set of occupied transverse levels upward closed. Since $N_L$ is open, that set is empty, the whole interval, or an interval $(a,b)$ reaching the upper edge of the box. At a boundary point only the last case occurs. Therefore $\partial N_L$ is exactly one plaque in a smaller box, and $\overline{N_L}$ is its positive half-box. These are smooth (respectively $C^2$) boundary charts, with positive normals pointing inward. [F1, F4, step 1.1, step 3.1, construct]

5.1 The boundary is closed in compact $M$. A finite cover by the smaller boxes of step 4.1 meets only finitely many boundary leaves, since each box contains exactly one boundary plaque. Each such leaf is open in the boundary and its complement is the union of the other open leaves, so it is also closed there. It is compact and has its intrinsic leaf topology: each boundary chart contains just its own local plaque and supplies the same coordinate neighborhoods as its leaf atlas. Thus the boundary is a finite union of compact leaves including $L$. Its negative half-boxes are outside the closure, so $W\ne M$; its boundary is nonempty and $W$ is compact. [F1, F4, step 4.1]

6.1 Every boundary leaf avoids closed transversals. Orient a hypothetical transverse circle positively; at any meeting with $\partial N_L$, step 4.1 makes its crossing an entry into $N_L$. Positive forward invariance forbids any exit. Its transverse boundary meetings are isolated and finite by compactness, so periodicity would require an exit after an entry, a contradiction. If the foliation is taut, this argument rules out a nonempty boundary for any nonempty $N_L$. Reachability is nonempty and open; empty boundary makes it also closed. Connectedness therefore gives $N_L$ equal to its ambient component. Conversely that equality includes $L$, so steps 2.1–3.1 make every leaf met by a closed transversal. This proves the componentwise tautness criterion and the asserted boundary-leaf property. [F4, step 1.1, step 3.1, step 4.1, step 5.1]

7.1 By [F6], the region constructed in steps 4.1–6.1 satisfies the defining conditions of a dead-end component. The strict accessible-region claim follows from steps 4.1–6.1, and the openness, saturation and return claims from steps 1.1–3.1. No compactness of an intrinsically noncompact leaf or compact closure of an arbitrary mutual-accessibility class was assumed. The finite families and finite cover arguments use no full Axiom of Choice; the one generic-parameter argument inherits only the declared countable choice. [F1, F2, F3, F4, F6, step 3.1, step 5.1, step 6.1] ∎
