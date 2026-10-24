---
id: lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
kind: lemma
title: "The normal Thom class realizes the Poincare dual of a closed submanifold"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-singular-chain-cross-product-on-generators, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section, def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-normal-and-conormal-bundles-are-smooth-vector-bundles, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-thom-class-by-fiberwise-normalization, thm-thom-isomorphism-for-oriented-vector-bundles, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-compactly-supported-singular-cohomology-of-a-locally-compact-space, thm-excision-for-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-of-the-singular-cohomology-pair-sequence, thm-poincare-duality-for-oriented-topological-manifolds, def-cap-duality-map-for-an-oriented-manifold, def-fundamental-class-of-a-compact-oriented-manifold, lem-compatible-local-orientation-classes-exist-over-compact-subsets, def-relative-cap-product, def-relative-cup-product, prop-cap-product-naturality-and-projection-formula, lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls, def-alexander-whitney-diagonal-approximation, thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses, def-a-smooth-map-transverse-to-an-embedded-submanifold, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, cor-homotopic-maps-induce-the-same-map-on-singular-homology, def-axiom-of-choice, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, lem-second-countable-smooth-manifolds-have-cw-homotopy-type, lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 0
---

## Statement

Assume AC. Let $M$ be a closed $R$-oriented smooth $n$-manifold, where $R=\mathbb Z$ or $\mathbb F_2$, and let $Z\subseteq M$ be a closed $R$-oriented embedded $z$-submanifold. Put $r=n-z$ and orient $\nu_Z=TM|_Z/TZ$ in tangent-first order: $\det TM|_Z=\det TZ\otimes\det\nu_Z$. Choose a smooth metric and a tubular chart whose differential induces the identity on this normal quotient; restrict to a sufficiently small closed disk bundle. Such normalized charts exist by the construction in [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]].

The normalized Thom class $u_\nu\in H^r(D(\nu),S(\nu);R)$ corresponds to a class $\alpha\in H^r(M,M\setminus Z;R)$ by the punctured-fibre comparison and tubular excision. Write $\bar\alpha\in H^r(M;R)$ for its relative-to-absolute image. Then
$$\bar\alpha\cap[M]=(-1)^{rz}(i_Z)_*[Z]\in H_z(M;R).$$
Equivalently, $\bar\alpha=(-1)^{rz}D_M^{-1}((i_Z)_*[Z])$. The sign is the shuffle from tangent-first coordinates to normal-first cap evaluation. Over $\mathbb F_2$ all orientations are canonical and the sign disappears. A relative class capped directly with the absolute $[M]$ instead has relative homology as target; the displayed formula uses $\bar\alpha$.

## Facts & Assumptions

**Given:** AC and $M,Z,\nu,u_\nu$ with the orientations and normalized tubular chart of the statement.

[F1] Tubular charts and smooth bundle metrics exist under Countable Choice ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

[F2] The Thom class is uniquely characterized by fibre normalization. Smooth manifolds have admissible CW-type bases and their smooth bundles are numerable under AC ([[def-thom-class-by-fiberwise-normalization]], [[thm-thom-isomorphism-for-oriented-vector-bundles]], [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F3] Supported cap uses $a\cap[U]_K$ for $a\in H^r(U,U\setminus K;R)$; these maps pass to compact-supported duality, natural under open inclusion ([[def-cap-duality-map-for-an-oriented-manifold]], [[thm-poincare-duality-for-oriented-topological-manifolds]]).

[F4] A top class on a compact oriented manifold is determined by its restrictions to all point-local orientation groups ([[lem-compatible-local-orientation-classes-exist-over-compact-subsets]], [[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F5] AW and the signed shuffle are inverse up to natural chain homotopy, and the shuffle is the signed sum over monotone lattice paths ([[def-alexander-whitney-diagonal-approximation]], [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]], [[def-singular-chain-cross-product-on-generators]]).

[F6] Relative products are formed on excisive triads by the front-evaluation/back-retention formula and small-chain comparison; excision and pair sequences supply the indicated comparisons ([[def-relative-cap-product]], [[def-relative-cup-product]], [[thm-excision-for-singular-cohomology]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

## Proof

**Proof technique:** realize the Thom class with compact support, compute its projected cap locally using normal-first AW, then use uniqueness of the fundamental class.

1.1 Choose a metric by [F1]. In the derivative calculation and final quotient-coordinate transport of [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], the constructed derivative sends a tangent vector and a normal lift to their sum, hence induces the identity on the quotient at every zero vector. Compactness of $Z$ allows a uniform small metric disk inside its domain: cover $Z$ by finitely many smaller trivializing patches with compact closures, and take the minimum of their positive allowable radii. This also makes the closed disk compact, since on each such patch its fibre coordinates lie in a bounded closed ball. Rescale the metric so this disk is the unit disk. Radial retraction of $D(\nu)\setminus Z$ onto $S(\nu)$ and the pair sequence [F6] give an isomorphism $H^r(D(\nu),D(\nu)\setminus Z;R)\to H^r(D(\nu),S(\nu);R)$. Lift $u_\nu$ uniquely along it and use tubular excision to define $\alpha$. For $r=0$, the punctured bundle and sphere are both empty, so this comparison is the identity. [F1, F2, F6, given, construct]

2.1 Let $U$ be the open tube and $K$ a smaller closed disk bundle inside it. The inclusion of the outer annulus $U\setminus K$ into the punctured tube is a fibrewise homotopy equivalence, by radial movement to a radius strictly between the inner and outer radii. Pair sequences therefore identify the Thom lift with a class $u_K\in H^r(U,U\setminus K;R)$. It defines $u_c\in H_c^r(U;R)$. Excision extends $u_K$ to $H^r(M,M\setminus K;R)$, and its absolute image is $\bar\alpha$. The support compatibility in [F3] gives $\bar\alpha\cap[M]=j_*D_U(u_c)$ for $j:U\hookrightarrow M$: represent $[M]$ and its restriction $[M]_K$ by the same chain, and cap with the cocycle vanishing outside $K$. [F3, F6, step 1.1, construct]

3.1 The projection $\pi:U\to Z$ and zero section $\zeta:Z\to U$ are homotopy inverses by fibrewise contraction. Put $b=\pi_*D_U(u_c)\in H_z(Z;R)$. To compute its restriction at $x\in Z$, restrict to a trivializing product of a tangent ball $T$ and a normal disk $N$. This localization is legitimate at chain level: shrink a tangent ball about $x$, represent the Thom class with support inside a smaller normal disk, and subdivide the finitely many chains until small for the product neighbourhood and its complement. In the quotient modulo $Z\setminus\{x\}$, pieces projected outside the tangent ball vanish. The relative cap and small-chain comparison of [F6] therefore reduce the restriction of $b$ to the cap on this disk product. [F3, F6, step 2.1, construct]

4.1 Let $d$ and $a$ be the positive tangent and normal relative orientation cycles in this product, with degrees $z$ and $r$. Its ambient orientation cycle is the shuffle $S_{T,N}(d\otimes a)$: its restrictions have the prescribed tangent-first local orientation, so [F4] identifies it with that relative orientation class. The local Thom cocycle is pulled back from a normal cocycle $\eta$ with $\eta(a)=1$, by [F2]. For a product chain $c$, the cap definition gives $$\operatorname{pr}_{T\#}(\operatorname{pr}_N^*\eta\cap c)=(\eta\otimes\mathrm{id})\operatorname{AW}_{N,T}(\tau_\#c),$$ where $\tau:T\times N\to N\times T$ swaps the factors and only normal degree $r$ is contracted. In each path of [F5], exchanging the $z$ tangent and $r$ normal steps reverses the order of each of the $zr$ unlike pairs, so $\tau_\#S_{T,N}(d\otimes a)=(-1)^{rz}S_{N,T}(a\otimes d)$; and $\operatorname{AW}_{N,T}S_{N,T}\simeq\mathrm{id}$. These identities remain valid on the product relative complexes: the model homotopies preserve the coordinate subspaces, and [F6] supplies the small-chain comparison for their union. Contracting a chain homotopy with the closed $\eta$ gives a boundary (with the cap boundary sign), so the resulting local homology class is $(-1)^{rz}\eta(a)d=(-1)^{rz}d$. Thus $b$ restricts at every $x$ to $(-1)^{rz}$ times the local orientation of $Z$. [F2, F4, F5, F6, step 3.1, algebra]

5.1 By [F4], $b=(-1)^{rz}[Z]$, including disconnected $Z$. Fibrewise contraction and homotopy invariance give $D_U(u_c)=\zeta_*b$, so step 2.1 yields $\bar\alpha\cap[M]=(-1)^{rz}j_*\zeta_*[Z]=(-1)^{rz}(i_Z)_*[Z]$. Empty $Z$ gives zero throughout. For rank zero the normal Thom class is the supplied orientation unit, and the same determinant comparison gives the oriented component classes; no assumption that that unit is always $+1$ is made. In characteristic two the sign is $1$. AC is used through [F1]–[F3], and no extra orientation selection is made. [F1, F2, F3, F4, step 2.1, step 4.1, algebra] ∎

