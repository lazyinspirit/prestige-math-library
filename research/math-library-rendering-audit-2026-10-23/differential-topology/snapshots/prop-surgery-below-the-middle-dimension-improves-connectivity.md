---
id: prop-surgery-below-the-middle-dimension-improves-connectivity
kind: proposition
title: Surgery below the middle dimension improves connectivity
deps:
- lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle
- lem-relative-hurewicz-and-general-position-produce-surgery-spheres
- lem-stable-normal-data-supplies-framings-below-the-middle-dimension
- def-degree-one-normal-map-for-the-surgery-program
- def-framed-embedded-surgery-sphere
- def-n-connected-space-and-n-connected-map
- def-countable-choice
- thm-weak-whitney-proper-embedding-theorem
- thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
- thm-morse-functions-and-handle-decompositions-correspond
- lem-a-handle-decomposition-gives-a-relative-cw-complex
- lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes
- thm-cellular-approximation-for-maps-of-cw-pairs
- thm-universal-cover-existence
- thm-covering-space-lifting-criterion
- lem-relative-hurewicz-comparison-through-a-choice-free-weak-model
- def-based-cellular-chain-complex-of-a-universal-cover
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Corollary 10.3 and Corollary 10.11, printed pp. 196 and 200, together with Proposition 10.25(i), printed
      p. 210, and Theorem 10.30, printed p. 215 (the inductive $n$-surgery theorem making a map $(n+1)$-connected
      for $2n+2\le m$)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 4 introduction, printed pp. 79-80 (below the middle dimension the embedding question always
      has a positive answer because of the dimension range)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 9
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(f,b):M^m\to X$ be a $p$-connected degree-one normal map with $M$ connected over a connected finite CW complex and suppose $2p+2\le m$. For $p\ge2$, a finite family generating $\pi_{p+1}(f)$ as a $\mathbb Z[\pi_1(X)]$-module can be represented by framed embedded $p$-spheres and killed by $p$-surgeries, giving a normally bordant $(p+1)$-connected degree-one normal map. The same module formulation applies for $p=1$ when $f$ already induces a fundamental-group isomorphism. For a merely $1$-connected map, first kill finitely many normal generators of the fundamental-group kernel by $1$-surgeries and then kill the residual abelian relative second-homotopy module by $1$-surgeries. For $p=0$, assume additionally that the target stable bundle $\xi$ is orientable, with its orientation chosen to make $b$ compatible with the incoming normal orientation. Then finitely many $0$-surgeries enlarge the source-image fundamental subgroup to all of $\pi_1(X)$, giving a $1$-connected map. Thus every $p$-connected normal map satisfying these hypotheses in the stated below-middle range is normally bordant to a $(p+1)$-connected one; iterating improves connectivity until that inequality fails. In degrees zero and one the fundamental pointed-set and normal-closure formulations replace the inappropriate unqualified abelian-module language.

## Facts & Assumptions

[F1] Below the middle dimension, relative map classes admit embedded sphere representatives with stably trivial pulled-back normal data. [[lem-relative-hurewicz-and-general-position-produce-surgery-spheres]]

[F2] The represented sphere has an actual framing compatible with its prescribed stable normal data and gives a normal trace extension over the finite CW target. [[lem-stable-normal-data-supplies-framings-below-the-middle-dimension]]

[F3] The two trace cell computations preserve lower relative map groups and give the quotient with its correct action and low-dimensional conventions. [[lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle]]

[F4] The represented sphere has an actual framing compatible with its prescribed stable normal data and gives a normal trace extension over the finite CW target. [[lem-stable-normal-data-supplies-framings-below-the-middle-dimension]]

[F5] Under Countable Choice a smooth manifold admits a proper finite-dimensional Euclidean embedding. [[thm-weak-whitney-proper-embedding-theorem]]

[F6] For a compact manifold embedded in Euclidean space, the restricted linear height is Morse for generic directions. [[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]

[F7] Morse functions and handle decompositions correspond. [[thm-morse-functions-and-handle-decompositions-correspond]]

[F8] A handle decomposition gives a relative CW complex. [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]

[F9] Cellular approximation for a finite relative CW source is choice-free, including a relative cellular homotopy. [[thm-cellular-approximation-for-maps-of-cw-pairs]]

[F10] Cellular mapping cylinders and relative cylinders are CW complexes. [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]]

[F11] Every nonempty path-connected locally path-connected semilocally simply connected space has a universal cover. [[thm-universal-cover-existence]]

[F12] Lifting criterion for maps from path-connected locally path-connected spaces. [[thm-covering-space-lifting-criterion]]

[F13] For $n\ge2$, an $(n-1)$-connected CW pair with nonempty simply connected subspace and supplied characteristic maps has $H_i=0$ for $i<n$, and its relative Hurewicz map $\pi_n\to H_n$ is an isomorphism, without choice. [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]

[F14] Based cellular chains of a universal cover as finite free right group-ring modules. [[def-based-cellular-chain-complex-of-a-universal-cover]]

## Proof


**Given:** Countable choice, the $p$-connected normal map and target finite CW complex, and $2p+2\le m$.

1.1 In the module range $p\ge2$, the representation lemma gives embedded representatives of a finite generating family, and the stable-normal lemma gives compatible actual framings. Use unbased disjoint surgery representatives with their recorded whiskers, as in that lemma. Each normal-map surgery is normally bordant to the original map. The trace comparison kills exactly the generated submodule and preserves all lower relative groups, because $f$ is $p$-connected and hence induces a fundamental-group isomorphism. After finitely many surgeries the relative group in degree $p+1$ is zero and all lower ones stay zero. Therefore the endpoint is $(p+1)$-connected. The identical argument works at $p=1$ once the fundamental groups have been identified, using the abelian relative degree-two formulation of the trace lemma. [given, construct, F1, F2, F3, F4]

1.2 We justify existence of a finite generating family rather than assume a Noetherian group ring. Under countable choice embed the compact $M$ in Euclidean space. A generic height is Morse; it has finitely many critical points. Choose finitely many disjoint neighbourhoods of them and bumps constant near each point. Small finite shifts of the height values make them distinct while creating no new critical point: outside the protected neighbourhoods $\lVert dh\rVert$ has a positive minimum, and inside them sufficiently small $C^2$ shifts preserve the nondegenerate critical germs. The earlier handle-to-CW suppliers then give $M$ finite CW homotopy type without using the strong-AC excellent-function existence theorem. Replace $f$ by a cellular map on this finite model, so its mapping cylinder is a finite CW pair. [given, construct, F5, F6, F7, F8, F9, F10]

2.1 In the module cases $p\ge1$, put $n=p+1\ge2$. With the common fundamental group $\pi$, lift this mapping-cylinder pair to universal covers. Lifting disk maps and homotopies identifies its relative homotopy in degrees at least two with that of the covered pair, with the deck action. The covered subspace is simply connected, and $p$-connectivity makes the pair $p$-connected. The published choice-free relative Hurewicz comparison identifies its first relative homotopy with $H_{p+1}$ and makes lower relative homology vanish. Its cellular relative chain complex is finite free over $\mathbb Z[\pi]$, with one lift for each finite cell orbit. Acyclicity below degree $p+1$ permits cancelling split differential pairs from the bottom upward: a surjection onto the bottom free module splits, and inductively the remaining bottom module is finitely generated projective. Thus the cycle module in degree $p+1$ is finitely generated projective after these cancellations, and its quotient by boundaries is finitely generated. The Hurewicz identification is natural under deck maps, so $\pi_{p+1}(f)$ is finitely generated over $\mathbb Z[\pi]$. This argument uses split projectivity, not a general claim that submodules of finite free group-ring modules are finitely generated. [step 1.2, construct, algebra, F11, F12, F13, F14]

3.1 If $p=1$ and $f$ is only surjective on fundamental groups, both source and target have finite presentations from their finite CW models. The kernel of a surjection between finitely presented groups is finitely normally generated: use finitely many source generators, write target generators as their images, and add finitely many target relators in those generators; their normal closure is the kernel modulo the source relators. Represent those finitely many kernel loops by embedded circles with target nullhomotopies. The stable-normal framing lemma supplies their compatible framings. The corresponding $1$-surgeries kill these normal generators, and the dual trace cells, of dimension $m-1\ge3$, preserve the outgoing fundamental group. Hence the resulting map has a fundamental-group isomorphism. It remains $1$-connected. Apply steps 1.2–2.1 with $p=1$ and the choice-free degree-two relative Hurewicz theorem, then step 1.1 to its finite abelian relative module. The endpoint is $2$-connected. [step 1.1, step 1.2, step 2.1, construct, F1, F2, F3]

4.1 If $p=0$, the connected finite target has a finitely generated fundamental group. Choose core paths representing finitely many generators not already in the source-image subgroup, and represent them by $0$-sphere surgery data with distinct endpoints and the target paths. The orientation of $\xi$ makes determinant transport along every core agree with the incoming normal orientation. The zero-sphere clause of the framing lemma therefore supplies compatible normal frames and an oriented normal trace. The trace lemma enlarges the image subgroup by these generators; after finitely many $0$-surgeries it is all of $\pi_1(X)$. Both manifolds remain connected, so the relative fundamental pointed set is trivial and the new map is $1$-connected. Concatenating the finite normal bordisms gives the asserted normal bordism in every case. The complementary trace index is always $m-p\ge p+2$, exactly the range preserving the required relative map groups. Iteration stops at the first failed inequality. [step 1.1, step 3.1, construct, F1, F2, F3, F4] ∎

## Caveat

The target-bundle orientation condition in degree zero cannot be omitted for the permissive finite-CW normal-map definition used here. For $m\ge2$, take $X=S^m\vee S^1$, $M=S^m$, and $f$ the sphere inclusion. Let $\xi$ be a real line bundle trivial on the sphere and with transition sign $-1$ around the circle, plus any trivial stabilizing summands. The sphere is stably normally trivial, so this is a degree-one normal map in that definition. An oriented normal bordism extending $b$ cannot add a source loop mapping once around the circle: its stable normal bundle has an oriented determinant, whereas the pulled-back determinant of $\xi$ reverses sign on that loop. Accordingly no oriented endpoint normally bordant over this datum can surject onto $\pi_1(X)$, without the additional orientation condition.
