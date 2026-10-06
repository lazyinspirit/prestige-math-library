---
id: lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal
kind: lemma
title: "A noncompact leaf of a compact C2 foliation meets a positive closed transversal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, def-c1-regular-codimension-one-foliation-and-transverse-orientation, def-leaf-of-a-regular-foliation, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-c1-euclidean-maximal-flow-with-c2-upgrade, prop-the-image-of-a-lower-dimensional-c1-manifold-is-null, lem-c2-inverses-and-scalar-return-roots, lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Lemma 1.2, printed pp. 3-4; the finite C\u00b2 box construction and barrier avoidance are proved below"
---

## Statement

Assume ACω. In a C² cooriented codimension-one foliation of a closed three-manifold, every intrinsically noncompact leaf meets a positive closed transversal. The transversal can be chosen to avoid any specified finite family of distinct compact leaves. Conversely, absence of such a transversal forces intrinsic compactness.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation $F$ of a closed three-manifold $M$, an intrinsically noncompact leaf $L$, and finitely many distinct compact leaves $K_1,\ldots,K_m$ to be avoided.

[F1] A cooriented atlas has consistently increasing transverse coordinates ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]). A $C^2$ atlas gives local $C^1$ positive defining forms $dt_i$; patching finitely many of these with chart bumps gives a $C^1$ positive form $\omega$ with kernel $TF$. A positive curve has $\omega(\gamma')>0$. No smoothness of the foliation distribution is assumed.

[F2] Leaves are continued by plaque chains ([[def-leaf-of-a-regular-foliation]]); their intrinsic surface charts are the plaque charts. A compact leaf is embedded, with its intrinsic and subspace topologies agreeing ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]]).

[F3] Transport through a finite chain of $C^2$ foliation boxes preserves $C^2$ regularity; specified traces that agree on open collars glue with that regularity ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]).

[F4] A $C^2$ Euclidean field has $C^2$ local flows on compact domains ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F5] Under countable choice, a $C^1$ map from a smooth manifold of smaller dimension has null image ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

[F7] A $C^2$ scalar equation with nonzero normal derivative has a unique local $C^2$ root ([[lem-c2-inverses-and-scalar-return-roots]]).

[F6] The standing assumption is countable choice ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

1.1 Cover compact $M$ by finitely many smaller product boxes with closures inside larger product boxes. The compact barriers are embedded by F2, so refine near them so that each barrier meets any box in one plaque or not at all; away from their union use boxes disjoint from all barriers. If $L$ had only finitely many plaques in each larger box, the compact plaque disks in those larger boxes containing its intersections with the smaller boxes would form a finite compact cover of $L$ in its intrinsic topology. This would make $L$ compact, a contradiction. Thus a box has infinitely many $L$-plaques, and finitely many barrier levels. This argument uses finite plaque disks and their intrinsic topology; the mere property of being a union of plaques does not imply that a leaf is embedded or closed. [F2, given, construct]

2.1 Choose two of those infinitely many plaque levels in the same component of the transverse interval after removing the finitely many barrier levels. Let their heights be $a<b$, and join their central points from height $b$ to height $a$ by a $C^2$ leafwise path $\gamma$ using finitely many plaque charts. Its compact image is disjoint from the compact barriers. A sufficiently thin neighborhood of that image and the vertical segment between the endpoints therefore avoids all barriers. [F1, F2, step 1.1, construct]

3.1 Construct a genuine leafwise constant-label strip $P(r,s)$ along $\gamma$, with $P(r,0)=\gamma(r)$ and $\omega(\partial_rP)=0$. Here is a finite construction: choose a smooth ambient transverse field near the compact path (patch finitely many positive local fields); its short flows give transverse curves over the path by F4. In each successive foliation box, solve for the flow coordinate whose transverse box coordinate equals the transported initial label. Its normal derivative is nonzero, so the $C^2$ scalar inverse gives a $C^2$ solution. On overlaps the transverse coordinate depends only on the previous transverse coordinate; equality of the transported labels and uniqueness of the scalar root identify these solutions. Finite shrinking and F3 give one $C^2$ strip on $[0,1]\times(-\delta,\delta)$, with each fixed-$s$ path leafwise and $\omega(\partial_sP)>0$. Choose the transverse fibers at the two endpoints along the original vertical segment. For small $\varepsilon>0$ take $s(r)=\varepsilon(2r-1)$. Then $\omega((P(r,s(r)))')=2\varepsilon\omega(\partial_sP)>0$ exactly, rather than by a domination estimate. Its endpoints still have final height smaller than initial height, so the positive vertical interval closes it. The tilted part crosses $L$ at $s=0$, and the whole curve misses all barriers. Smooth its two corners by $C^2$ interpolation in boxes; the positive tangent half-space is convex, so sufficiently small interpolation preserves positivity and the interior crossing. [F1, F3, F4, F7, step 2.1, construct]

4.1 To make this $C^2$ positive closed immersion embedded, protect a small parameter arc containing the crossing of $L$. Its nonzero derivative gives local injectivity; compactness of the parameter circle gives a uniform $\eta>0$ such that sufficiently $C^1$-small perturbations remain injective on every pair with circular parameter distance less than $\eta$. The remaining pairs form a compact set. At a possible equality on this set, choose disjoint parameter neighborhoods of the two branches; at most one is in the protected arc. On the other branch use a bump supported away from the protected arc and three independent ambient chart fields, whose flows independently move its value in the three ambient coordinates. Compactness gives finitely many such bump/field triples covering all possible equality pairs; the complement of their neighborhoods has image separation bounded below and cannot acquire equalities under a small perturbation. Let $u\in\mathbb R^N$ be these finite flow parameters and write $\gamma_u$. For small $u$, on each shared target coordinate chart the equation $\gamma_u(r)=\gamma_u(t)$ is a $C^2$ submersion in the full variables $(r,t,u)$: the chosen bump moves one value independently of the other. Its zero set has dimension $2+N-3=N-1$. Its countably many local Euclidean parametrizations project by $C^1$ maps into the $N$-dimensional parameter space; F5 makes their images null, and countable choice supplies their countable chart cover and countable null union. Therefore a small parameter outside these images exists. There are then no separated-pair equalities, and uniform local injectivity handles the near-diagonal pairs. Smallness preserves positivity, avoidance of the compact barriers, and the protected crossing. No finite-self-crossing assumption or incorrectly dimensioned Sard theorem is used. [F4, F5, F6, step 3.1, construct]

5.1 The resulting curve is an embedded positive closed transversal through $L$, avoiding the specified finite compact barriers. Contraposition shows that absence of such a curve, for any specified finite family or for the empty family, forces intrinsic compactness. The geometric choices are finite; the null-image argument in step 4.1 uses the stated countable choice only. No full-AC smooth-manifold supplier is imported into the $C^2/\mathrm{AC}_\omega$ statement. [F6, step 4.1] ∎
