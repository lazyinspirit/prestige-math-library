---
id: lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum
kind: lemma
title: The collapse of an embedded manifold classifies through the universal Thom prespectrum
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
- def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
- def-pontryagin-thom-collapse-of-an-embedded-submanifold
- lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
- lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy
- def-stable-normal-bundle-of-a-compact-smooth-manifold
- thm-stable-normal-bundle-is-independent-of-the-embedding
- lem-a-bundle-embedding-produces-its-grassmannian-classifying-map
- lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely
- prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism
- thm-homotopy-invariance-of-vector-bundle-pullback
- prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition
- lem-stabilizing-a-normal-bundle-suspends-its-thom-space
- def-stable-homotopy-groups-of-a-sequential-prespectrum
- def-axiom-of-choice
- prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
- thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
- prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law
- thm-time-dependent-vector-fields-have-local-smooth-evolution-operators
- thm-gram-schmidt-orthonormalisation
- thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
- thm-oriented-real-vector-bundles-are-classified-by-bso
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset
      scan)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
    locator: "Section 18, Lemma 18.1, printed pp. 205-206, and Lemma 18.7, printed pp. 215-216: the Thom CW space, Gauss map and universal collapse construction."
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: 'Lecture 10, printed pp. 88-91: the Thom spectrum construction and the collapse class of an embedded
      manifold'
dependency_level: 2
---

## Statement

Assume AC. Full choice is used for normal-bundle classification, and its countable-choice consequence is used for the geometric bundle and compact-flow constructions. Let
$M^n$ be a closed smooth manifold, let $r\ge2$ and let $e:M\hookrightarrow S^{n+r}$ be an embedding with normal bundle $\nu$ and a closed tubular neighbourhood, choose the sphere basepoint outside the closed tube, and let $c:S^{n+r}\to\mathrm{Th}(\nu)$ be the collapse map of the published
Pontryagin-Thom construction. Choose a classifying map and bundle isomorphism $\nu\cong f^*\gamma_r$ with $f:M\to B\mathrm O(r)$
(or its orientation-preserving counterpart over $B\mathrm{SO}(r)$). The normal orientation is chosen normal-first, so $\nu\oplus TM$ has the ambient orientation. Every embedding of smaller codimension may first be stabilized to this range. Then the composite of the Thom-space map
$\mathrm{Th}(f):\mathrm{Th}(\nu)\to M\mathrm O_r$ with $c$ represents an element
$\alpha(M,e)\in\pi_{n+r}(M\mathrm O_r)$, and the stabilization maps of the
prespectrum send $\alpha(M,e)$ to the class defined by the stabilized embedding
$M\hookrightarrow S^{n+r}\hookrightarrow S^{n+r+1}$. The stable class
$\alpha(M)\in\pi_n(M\mathrm O)$ is independent of the embedding, of the tubular
neighbourhood, of the classifying map and of the representative collapse data;
it depends only on $M$ and, in the oriented case, on its orientation, and it is
additive under disjoint union and multiplicative under products in the sense
that $\alpha(M_0\sqcup M_1)=\alpha(M_0)+\alpha(M_1)$ and
$\alpha(M\times N)$ is the product of the stable classes under the prespectrum
multiplication induced by the classifying maps of the external sums.

## Facts & Assumptions

**Given:** A closed smooth manifold $M^n$, an embedding $e:M\hookrightarrow S^{n+r}$ with normal bundle $\nu$, a closed tubular neighbourhood of $e(M)$, the collapse map $c:S^{n+r}\to\mathrm{Th}(\nu)$, and a classifying map $f$ of $\nu$ as in the statement.

[F1] [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]] fixes the universal Thom spaces $M\mathrm O_r=\mathrm{Th}(\gamma_r)$, $M\mathrm{SO}_r=\mathrm{Th}(\gamma_r^+)$ over the Grassmannian models, the stabilization bundle isomorphisms $\varepsilon^1\oplus\gamma_r\cong\iota_r^*\gamma_{r+1}$ (orientation-preserving in the oriented case), and the structure maps $S^1\wedge M\mathrm O_r\to M\mathrm O_{r+1}$ induced by the pullback bundle projections; [[def-stable-homotopy-groups-of-a-sequential-prespectrum]] defines $\pi_n(M\mathrm O)=\operatorname{colim}_r\pi_{n+r}(M\mathrm O_r)$ with transition maps suspension followed by structure maps.

[F2] [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]] defines the collapse map of an embedded submanifold with specified normal data, and [[lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint]] and [[lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy]] make it based continuous and independent, up to based homotopy fixing the normal identification, of the tubular neighbourhood and radius.

[F3] The stable normal bundle is independent of the embedding. Its proof constructs a stabilized isotopy $j_t(x)=(\cos(\pi t/2)i_0(x),\sin(\pi t/2)i_1(x))$ of compact Euclidean embeddings and transports the normal projections smoothly along it. [[def-stable-normal-bundle-of-a-compact-smooth-manifold]], [[thm-stable-normal-bundle-is-independent-of-the-embedding]].

[F4] [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]] and [[thm-oriented-real-vector-bundles-are-classified-by-bso]] classify real and oriented bundles by orientation-preserving pullback data in the latter case. [[lem-a-bundle-embedding-produces-its-grassmannian-classifying-map]] and [[lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely]] give the classifying map of a numerable bundle into the Grassmannian and its homotopy classification; [[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]] and [[thm-homotopy-invariance-of-vector-bundle-pullback]] make pullback functorial and homotopy invariant.

[F5] A fibrewise isometry $g:\xi\to\xi'$ covering $h$ maps disk and sphere bundles into their counterparts, so it induces a based Thom map by the quotient universal property. Any bundle isomorphism is radially normalized to such a disk/sphere map. Families induce based homotopies; composition is inherited from the pair maps. [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]] uses precisely these maps for stabilization. [[lem-stabilizing-a-normal-bundle-suspends-its-thom-space]] gives the suspension homeomorphism; use the coordinate-first version for oriented stabilization. [[prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms]] gives the needed smash identifications. The cohomological compatibility theorem [[prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition]] is not being used as an existence theorem for arbitrary Thom maps.

[F6] Gram–Schmidt orthonormalizes the local independent normal vectors. [[thm-gram-schmidt-orthonormalisation]]. Smooth inverse-function charts, a finite partition/cutoff near a compact track, and the global evolution of a smooth time-dependent field with common compact support give the local ambient-isotopy construction below. Evolution is unique and has inverse given by reverse time. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]], [[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]], [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]. AC implies the needed Countable Choice. [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]].

## Proof

1.1 The normal bundle $\nu$ of the embedding is a numerable finite-rank real bundle over the closed manifold $M$, so by [F4] it has a classifying map $f:M\to B\mathrm O(r)$ with a supplied bundle isomorphism $\nu\cong f^*\gamma_r$, radially normalized for the chosen metrics; in the oriented case $f$ lands in $B\mathrm SO(r)$ and the isomorphism is orientation-preserving by [F1]. By [F5] the bundle map over $f$ induces a based Thom map $\mathrm{Th}(f):\mathrm{Th}(\nu)\to\mathrm{Th}(\gamma_r)=M\mathrm O_r$, and $c$ is based continuous [F2]. Hence $\alpha(M,e)=[\mathrm{Th}(f)\circ c]\in\pi_{n+r}(M\mathrm O_r)$ is well defined on the chosen data. [F1, F2, F4, F5]

2.1 Stabilization. The embedding $M\hookrightarrow S^{n+r}\hookrightarrow S^{n+r+1}$ has normal bundle $\varepsilon^1\oplus\nu$ and classifying map $\iota_r\circ f$ up to the canonical isomorphism of [F1] and [F4]: the added normal direction corresponds to the added trivial line, and the pullback identification $\varepsilon^1\oplus\gamma_r\cong\iota_r^*\gamma_{r+1}$ transports the classification. By [F5] and the suspension identification of [F5], a representative collapse for the stabilized embedding is exactly the suspension of the collapse followed by the structure map: in product tubular coordinates with the sphere coordinate placed first, the collapse of the enlarged tube factors through $S^1\wedge\mathrm{Th}(\nu)$ and the map induced by the pullback bundle projection, which is the prespectrum structure map of [F1]. Therefore the stabilization map of the prespectrum sends $\alpha(M,e)$ to the class of the stabilized embedding. [F1, F4, F5, step 1.1]

2.2 Independence of collapse data. Changing the tubular neighbourhood or its radius changes $c$ by a based homotopy fixing the normal identification by [F2], hence does not change $\alpha(M,e)$. If $f_0,f_1$ are two classifying maps, the two pullback bundles are isomorphic over $M$ by [F4], and the interpolating construction of [F4] (realizing the bundle embeddings $J_0,J_1$ into a finite trivial bundle and interpolating $v\mapsto(\cos(\pi t/2)J_0(v),\sin(\pi t/2)J_1(v))$, which is fiberwise injective, then radially normalizing) gives a continuous family of disk/sphere bundle maps and hence, by [F5], a based homotopy of Thom maps; after coordinate enlargement each placement is returned to the prescribed coordinate placement by a rotation: if a finite permutation has negative determinant, reverse one unused coordinate too. That coordinate vanishes on the bundle image, so this has the same endpoint map and positive determinant. Plane rotations connect the resulting orthogonal map to the identity. This also preserves the ordered orientations in the oriented theory. So the composite is independent of $f$. [F2, F4, F5, step 1.1]

3.1 Independence of the embedding: construct the ambient isotopy locally instead of importing a later isotopy theorem. Stabilize once if necessary so each spherical embedding misses a point, and use a Euclidean chart there; this also covers rank zero. In a common Euclidean stabilization use $j_t$ from [F3], smoothly reparametrized constant near $t=0,1$. At least one of its sine/cosine coefficients is nonzero at every time, so equality of images or vanishing of a tangent image forces equality of the source points or vanishing of the tangent vector in one of the original embeddings. Compactness therefore makes every $j_t$ an embedding. Its compact track $J(t,x)=(t,j_t(x))$ is embedded. Around each track point choose source coordinates $u$ and a smooth local frame $w_l(t,u)$ of the normal complement of $dj_t(TM)$, obtained by projecting fixed ambient vectors and applying Gram–Schmidt on a neighbourhood where they remain independent. The map $(t,u,z)\mapsto(t,j_t(u)+\sum_lz_lw_l(t,u))$ has invertible derivative at $z=0$, so [F6] gives a local inverse on an ambient open neighbourhood. Shrink it so its intersection with the track is just this source chart, using compactness and injectivity. Define a local horizontal velocity there by $\partial_tj_t(u)$, constant in $z$. These smooth fields agree with the actual track velocity wherever they meet the track. A finite collection of such charts covers the compact track; subordinate bump weights summing to one near it paste their fields to a smooth ambient time-dependent field. Use a cutoff equal to one on the track, supported in a bounded neighbourhood, and a time cutoff supported away from the parameter ends; the latter preserves the velocity because $j_t$ is stationary there. The field thus has common compact spatial support. Its global evolution from [F6] is an ambient isotopy $H_t$, and uniqueness gives $H_t\circ j_0=j_t$ since both sides solve the same prescribed velocity equation. It is the identity outside a fixed ball, so extends to the one-point compactification fixing its basepoint. [F3, F6, step 2.1, construct]

4.1 Transport a tubular embedding by $H_t$ and its normal identification by the differential on normal quotients. This gives a continuous based family of collapse maps, with representative $c_t=c_0\circ H_t^{-1}$ after the transported fibre identification. Compose with the correspondingly transported bundle-classifying maps. At the other endpoint, [F2] removes the choice of tube/radius and step 2.2 removes the choice of bundle-classifying injection and isomorphism after stabilization. Hence the two stabilized collapse composites represent the same class, and passing to the colimit proves independence of $e$. The normal-bundle isomorphism of [F3] is not on its own used to identify collapse classes: the explicit compact-track flow supplies their based homotopy. [F2, F3, F4, F5, F6, step 2.2, step 3.1]

5.1 Additivity. Embed $M_0$ and $M_1$ in disjoint coordinate balls of $S^{n+r}$. The collapse of their union factors through the pinch map $S^{n+r}\to S^{n+r}\vee S^{n+r}$, and the Thom maps combine. Thus $\alpha(M_0\sqcup M_1)=\alpha(M_0)+\alpha(M_1)$, using embedding independence to return to any supplied embeddings. [F2, F5, step 4.1]

5.2 Multiplicativity. Stabilize the two compact Euclidean embeddings $M^n\subset\mathbb R^{n+r}$ and $N^m\subset\mathbb R^{m+s}$ so that both $r$ and $s$ are even. These levels are cofinal in the stable colimits by [F1] and step 2.1. The product embedding lies in $\mathbb R^{n+r}\oplus\mathbb R^{m+s}$ with normal bundle $\nu_M\boxplus\nu_N$. The product disk/sphere pair, using the max norm and its radial comparison with the Euclidean norm, makes its collapse the smash of the two collapses; the normal classifying map is their block sum. In the oriented theory, moving from $(\nu_M,TM,\nu_N,TN)$ to $(\nu_M,\nu_N,TM,TN)$ has sign $(-1)^{ns}=1$ because $s$ is even. Hence the ordered external-sum normal orientation is precisely the normal-first orientation for the product tangent orientation in the standard product ambient space. The composite smash and block-sum Thom map therefore represents $\alpha(M\times N)$. [F1, F2, F5, step 2.1, step 4.1]

6.1 These external-sum maps define the stable pairing by using the cofinal even ranks. Advancing either rank by two inserts an ordered trivial two-plane on both the source and the normal bundle. To compare stabilization before and after taking the product, move that two-plane to the first coordinate position; every such block interchange has sign $(-1)^{2d}=1$, on both the sphere and the oriented normal fibres. The corresponding finite orthogonal coordinate permutations are joined to the identity by plane rotations, so they induce based homotopies. Coordinate placements of the classifying injections are likewise independent by step 2.2, after adding unused coordinates if needed. Thus the pairings commute up to based homotopy with the two-step transitions and descend to the original colimits; equality of any two colimit representatives is detected at a common even rank. The unoriented construction uses the same pair maps without orientation conditions. Consequently the product identity in step 5.2 holds for the stable classes of all supplied embeddings, including odd initial codimensions; no strict ring-prespectrum structure has been assumed. The empty manifold gives the constant map, and lower-codimension data are first stabilized as in the statement. [F1, F2, F5, step 2.1, step 2.2, step 5.2] ∎
