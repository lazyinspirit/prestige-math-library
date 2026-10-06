---
id: lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs
kind: lemma
title: A small regular homotopy removes triple images and preserves transverse branch pairs
deps:
- def-self-transverse-immersion-and-double-point-locus
- cor-local-normal-form-for-immersions
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-parametric-transversality
- prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
- lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
- thm-transverse-preimage-theorem
- thm-smooth-inverse-function-theorem-on-manifolds
- def-local-oriented-intersection-sign
- def-regular-homotopy-of-immersions
- def-compact-space
- lem-compactness-of-a-subspace-is-ambient
- thm-finite-products-of-compact-spaces
- thm-closed-subspace-of-a-compact-space-is-compact
- def-countable-choice
- def-primary-double-point-obstruction-to-removing-self-intersections
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery, Chapter 7 (Whitney general-position and immersion setting);
      finite branch-preserving proof supplied here
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
justified_by: []
status: draft
origin: session
proof_strategy: direct
dependency_level: 4
---
## Statement

Assume $\mathrm{AC}_\omega$. Every pairwise self-transverse immersion $f:M^m\looparrowright X^{2m}$ of a closed manifold, $m\ge1$, admits an arbitrarily small smooth regular homotopy to a self-transverse immersion $g$ with no triple or higher-multiplicity collision image. Its finite unordered branch-pair set $D(g)$ is in bijection with $D(f)$ by smooth persistence of the ordered coincidences. With orientations and compatible branch orderings, the correspondence preserves every local pair sign. In particular it preserves the integral branch-pair count for oriented even $m$, and always preserves the mod-two branch-pair count. Pairwise self-transversality is retained as the original hypothesis; no absence-of-triples assumption is added.

## Facts & Assumptions

[F1] Local immersion charts put a chosen target-coordinate projection of an immersion in the identity form ([[cor-local-normal-form-for-immersions]]).

[F2] Compact source sets admit smooth bumps with prescribed support ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F3] Parametric transversality supplies dense good parameters after excluding a finite null union ([[thm-parametric-transversality]], [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F4] The pair diagonal is embedded; transverse preimages have the expected dimension ([[lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold]], [[thm-transverse-preimage-theorem]]).

[F5] A smooth map with invertible derivative has a smooth local inverse ([[thm-smooth-inverse-function-theorem-on-manifolds]]). Ordered branch-pair signs are determinant signs ([[def-local-oriented-intersection-sign]]).

[F6] Compact subsets admit finite subcovers by ambient open sets ([[lem-compactness-of-a-subspace-is-ambient]]); finite products of compact spaces and their closed subspaces are compact ([[thm-finite-products-of-compact-spaces]], [[thm-closed-subspace-of-a-compact-space-is-compact]]). Compactness and regular homotopy are [[def-compact-space]] and [[def-regular-homotopy-of-immersions]]; Countable Choice is [[def-countable-choice]].

[F7] Integral and mod-two counts are finite sums over unordered branch pairs ([[def-primary-double-point-obstruction-to-removing-self-intersections]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a closed smooth $m$-manifold $M$ with $m\ge1$, a smooth $2m$-manifold $X$, and a pairwise self-transverse immersion $f:M\to X$.

1.1 If $M$ is empty the assertion is immediate, so assume it is nonempty. By [F1] choose finitely many closed convex source coordinate balls $V_i$ whose interiors cover $M$ and whose slightly enlarged balls lie in immersion charts, with a target $m$-coordinate projection $p_i$ satisfying $p_i\circ f=\operatorname{id}$ in source coordinates. For every sufficiently $C^1$-close map $g$, the target charts remain defined on $V_i$ and $\|D(p_i\circ g)-I\|<1/2$ there. For $u,v$ in a convex ball, integrating the derivative along the segment gives $\|(p_i\circ g)(u)-(p_i\circ g)(v)-(u-v)\|\le\|u-v\|/2$. Thus $g$ is injective on every $V_i$ and its derivative is injective there; consequently it is an immersion everywhere. Put $N=\bigcup_i\operatorname{int}V_i\times\operatorname{int}V_i$. It is an open neighbourhood of the diagonal, and no off-diagonal coincidence of any such $g$ lies in $N$. The compact sets $K_2=M^2\setminus N$ and $K_3=\{(x_1,x_2,x_3):(x_i,x_j)\in K_2\text{ for every }i\ne j\}$ contain all possible pair and triple configurations of those maps and avoid every relevant partial diagonal. [F1, F6, given, construct]

2.1 Consider all configuration neighbourhoods furnished by two or three disjoint small source neighbourhoods and bumps equal to one near the respective points, supported in those neighbourhoods. Every configuration in $K_2$ or $K_3$ admits such data. Shrink their supports so their compact images under $f$ lie inside target coordinate charts with a positive coordinate margin. Each bump carries its own $2m$ target-translation parameters. On its source support translate target coordinates by the bump times that parameter, and leave the map unchanged outside the support. The translation is defined for all small parameters by the margin and is smooth across the source-support boundary because the bump vanishes on an open neighbourhood of the chart boundary. By [F6] these ambient configuration neighbourhoods have finite subcovers of $K_2$ and $K_3$; fix the corresponding finitely many bump and chart witnesses. Compose their source-dependent translations, retaining each parameter block independently. This defines one finite-dimensional smooth family $f_v$, $v$ in a small ball, with $f_0=f$; by step 1.1 every member, including $f_{tv}$ for $0\le t\le1$, is an immersion. [F2, F6, step 1.1, construct]

3.1 At $v=0$, the parameters belonging to a configuration move its two or three image values independently in all target directions: its source supports are disjoint and its bumps equal one there, while all other translation factors are the identity at zero. Therefore the pair and triple evaluation maps $E_k(x_1,\ldots,x_k,v)=(f_v(x_1),\ldots,f_v(x_k))$, $k=2,3$, have surjective parameter differentials on open neighbourhoods of $K_k$ at zero. Shrink the parameter ball uniformly using the finite compact covers, so these evaluations remain submersions on those neighbourhoods for every parameter in the ball. The pair diagonal in $X^2$ has codimension $2m$ by [F4]; the small diagonal in $X^3$ is closed embedded with codimension $4m$, since product target coordinates identify it with $\{(a,a,a)\}$ and its two independent differences give $4m$ normal coordinates. Thus [F3] supplies arbitrarily small parameters transverse to both diagonals. For one such parameter $v$, the pair locus is zero-dimensional and the triple locus has expected dimension $3m-4m=-m<0$, hence is empty by [F4]. All possible configurations were in $K_2,K_3$, so $f_v$ is self-transverse globally and no image point has three or more preimages. [F3, F4, step 1.1, step 2.1, algebra]

3.2 The original ordered coincidence locus is finite: it is closed in $K_2$ and is discrete by pairwise transversality and [F4], so compactness makes it finite. Near each original ordered pair $(x,y)$, choose a common target chart $\chi$ about $f(x)=f(y)$ and put $A(u,w,v)=\chi(f_v(u))-\chi(f_v(w))$. The derivative in $(u,w)$ at $(x,y,0)$ is $d\chi\circ(df_x,-df_y)$, an isomorphism by pairwise transversality in dimension $2m$. Apply [F5] to $(u,w,v)\mapsto(A(u,w,v),v)$. Its block derivative is invertible, so for all sufficiently small $v$ there is exactly one smoothly varying ordered coincidence near $(x,y)$; its transverse derivative remains invertible. Choose disjoint ordered-pair neighbourhoods, equivariant under swap. On the compact complement of their smaller interiors in $K_2$ there is no original coincidence. Uniform smallness of the finite smooth family keeps its image in the complement of the closed pair diagonal there, so no new coincidence occurs. The persisted pairs therefore exhaust the new locus, and quotienting the swap correspondence gives a bijection $D(f)\to D(f_v)$ even when several original pairs had the same collision image. [F4, F5, F6, step 1.1, step 2.1, construct]

4.1 If orientations and an ordering of each original branch pair are fixed, persist that ordering along the correspondence. Its sign is the sign of the determinant of the two branch tangent blocks; the determinant remains nonzero by step 3.2, so its sign is unchanged. For even $m$ this descends to unordered branch pairs and preserves $I(f)$; without orientations the bijection preserves the mod-two branch-pair count. Choose the good parameter of step 3.1 small enough also to satisfy step 3.2 and set $H(x,t)=f_{tv}(x)$. This is a smooth regular homotopy by step 2.1, with the claimed generic endpoint and preserved branch-pair data. [F3, F5, F6, F7, step 2.1, step 3.1, step 3.2] ∎
