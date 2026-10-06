---
id: lem-pullback-of-the-thom-class-along-a-transverse-section
kind: lemma
title: "Pullback of the Thom class along a transverse section computes the Euler class"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, def-thom-class-by-fiberwise-normalization, thm-naturality-and-uniqueness-of-thom-classes, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-relative-singular-cochain-complex, thm-excision-for-singular-cohomology, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, def-tubular-neighbourhood-of-an-embedded-submanifold, def-smooth-section-local-section-and-support, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section, def-r-oriented-vector-bundle-and-orientation-local-system, def-axiom-of-choice, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, thm-long-exact-sequence-of-a-pair-in-singular-cohomology]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
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
dependency_level: 1
---

## Statement

Assume AC. Let $E\to M$ be a smooth $R$-oriented rank-$r$ numerable real vector bundle in the scope of the Thom theorem over a closed $R$-oriented smooth $n$-manifold $M$, let $s:M\to E$ be a smooth section transverse to the zero section with zero locus $Z=s^{-1}(0)$ carrying the induced orientation of [[lem-normal-bundle-of-the-zero-locus-of-a-transverse-section]], and let $u_E$ be the normalized Thom class of $E$. Choose a smooth bundle metric by [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]. Lift $u_E$ uniquely to $\widetilde u_E\in H^r(D(E),D(E)\setminus s_0(M);R)$: restriction to $(D(E),S(E))$ is an isomorphism because the punctured fibres retract radially onto their spheres. After composing $s$ with the fibre-radial diffeomorphism $v\mapsto v/\sqrt{1+|v|^2}$ onto the open unit disc bundle (which fixes $Z$ and has derivative the identity at every zero), the pair pullback $s^*(\widetilde u_E)\in H^r(M,M\setminus Z;R)$ is defined, and it equals the image of the normal Thom class $u_{\nu_Z}$ under the tubular excision isomorphism supplied by [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] and [[thm-excision-for-singular-cohomology]]. Consequently its image in $H^r(M;R)$ is the Euler class $e(E)$ of [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]: the relative pullback of the Thom class along any transverse section computes $e(E)$. The zero section defines $e(E)$ by its absolute pullback; over a nonempty base it is transverse to itself exactly in rank zero; over an empty base transversality is vacuous.

## Facts & Assumptions

**Given:** The $R$-oriented rank-$r$ bundle $E\to M$ in the Thom scope over the closed $R$-oriented smooth $n$-manifold $M$, the transverse smooth section $s$ with zero locus $Z$, and the normalized Thom class $u_E$.

[F1] $Z$ has a tubular neighbourhood in $M$, i.e. a diffeomorphism from an open neighbourhood of the zero section of $\nu_Z$ onto an open neighbourhood of $Z$ ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] A normalized Thom class restricts to the chosen orientation generator on every fibre disk pair ([[def-thom-class-by-fiberwise-normalization]]).

[F3] For an orientation-preserving pullback square of bundles the Thom class pulls back to the Thom class of the pullback, and a normalized Thom class is unique ([[thm-naturality-and-uniqueness-of-thom-classes]]).

[F4] Excision: if $\overline Z\subseteq\operatorname{int}_X A$ then inclusion induces an isomorphism on relative cohomology ([[thm-excision-for-singular-cohomology]]).

[F5] The Euler class is $e(\xi)=e_{\rm Th}(\xi):=s^*j^*(u_\xi)$, the zero-section pullback of the normalized Thom class, and it is natural for orientation-preserving pullbacks ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F6] The vertical part of $ds$ induces a canonical isomorphism $\nu_Z\cong E|_Z$ of smooth bundles over $Z$ ([[lem-normal-bundle-of-the-zero-locus-of-a-transverse-section]]).

## Proof

**Proof technique:** Thom naturality in a tube of the zero section plus homotopy invariance of absolute cohomology along the affine homotopy of sections.

1.1 Pair comparison and bounding. Choose a smooth metric by [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]. The radial retraction of the punctured disk bundle to the sphere bundle, together with [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], makes the restriction $H^r(D(E),D(E)\setminus s_0(M);R)\to H^r(D(E),S(E);R)$ an isomorphism. Let $\widetilde u_E$ be the inverse image of $u_E$; in rank zero both removed subspaces are empty. Replace $s$ by $\rho\circ s$ with $\rho(v)=v/\sqrt{1+|v|^2}$; this is smooth and lands in the open unit disc bundle, has the same zero locus $Z$ because $\rho^{-1}(0)=\{0\}$, and $d\rho_0=\mathrm{id}$, so transversality of $s$ to the zero section at every point of $Z$ is unchanged. Thus $s$ is a map of pairs from $(M,M\setminus Z)$ to $(D(E),D(E)\setminus s_0(M))$, and below $s^*(u_E)$ abbreviates the precisely typed $s^*(\widetilde u_E)$. Take a tubular chart $\Phi:\Omega\subseteq\nu_Z\to U$ from [F1]. Its vertical differential followed by the quotient $q_z:T_zM\to\nu_{Z,z}$ gives $B_z=q_z\circ d\Phi_{0_z}|_{\nu_{Z,z}}$. Since $\Phi$ fixes $Z$, its tangent differential is the identity on $T_zZ$; the invertibility of $d\Phi_{0_z}$ therefore makes $B_z$ invertible. In local bundle coordinates its matrix consists of smooth first derivatives, and the inverse matrix is smooth by the cofactor formula. Thus $B$ is a smooth bundle automorphism. Replace $\Phi$ by $\Psi=\Phi\circ B^{-1}$ on $B(\Omega)$; this is a tubular chart and $q_z\circ d\Psi_{0_z}|_{\nu_{Z,z}}=\mathrm{id}$. [F1, given, construct]

1.2 Local normalization. On a trivializing chart $U$ write $s(x)=(x,f(x))$ with $f:U\to\mathbb R^r$, $f(0)=0$ and $df_0$ surjective; $Z\cap U=f^{-1}(0)$ and $T_0Z=\ker df_0$. The normalized Thom class restricts on $(D^r,S^{r-1})$ to the orientation generator [F2], so the local fibre component represents the fibre orientation class in the punctured-fibre pair; the invertible normal derivative permits computing its pullback on a small normal disk by a local diffeomorphism. Under the normal identification $\nu_Z\cong E|_Z$ of [F6], the composite $\nu_{Z,0}\xrightarrow{df_0}\mathbb R^r$ is an orientation-preserving isomorphism, the vertical part of $df_0$ being exactly the comparison defining the induced orientation; so the local generator is the normal generator. This uses a tubular chart with normal differential the identity; an arbitrary orientation-reversing fibre reparametrization would reverse the integral generator. [F2, F6, algebra]

2.1 Global identification. The tube of [F1] identifies a neighbourhood of $Z$ with a neighbourhood of the zero section of $\nu_Z$. On each sufficiently small normal disk at $z\in Z$, the fibre component of $s$ has its only zero at $z$ and has invertible derivative there by [F6]. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] gives a local diffeomorphism. Its differential preserves the supplied $R$-orientation by [F6] and the normalization in step 1.1, so its pullback carries the fibre orientation generator to the prescribed normal generator; over $\mathbb F_2$ the local degree is $1$ regardless of sign. Thus step 1.2 says precisely that the relative pullback restricts to the prescribed generator on every normal fibre pair. Thom uniqueness [F3] identifies it on the tube with $u_{\nu_Z}$. Excision [F4] identifies $H^r(M,M\setminus Z;R)$ with the relative cohomology of that tube and its complement of $Z$; choose a small metric disk subbundle inside the chart domain (possible uniformly because $Z$ is compact), and use excision to restrict to its interior. The punctured-disk comparison from step 1.1 identifies the resulting group with $H^r(D(\nu_Z),S(\nu_Z);R)$ after rescaling the metric. Hence $s^*(u_E)$ is the image of $u_{\nu_Z}$ under the tubular identification. [F1, F3, F4, F6, step 1.2]

3.1 Euler class. Let $s_0:M\to D(E)$ be the zero section and $u_E^{\mathrm{abs}}=j^*u_E\in H^r(D(E);R)$ its absolute restriction. The forget-support map $H^r(M,M\setminus Z;R)\to H^r(M;R)$ factors the pullback, so the image of $s^*(u_E)$ is $s^*(u_E^{\mathrm{abs}})$. The affine homotopy $(x,t)\mapsto(1-t)s(x)$ stays inside the disc bundle and is a homotopy from $s$ to $s_0$ through sections, so [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] gives $s^*(u_E^{\mathrm{abs}})=s_0^*(u_E^{\mathrm{abs}})$. By [F5] this is $e(E)$. Empty $Z$ and rank zero follow from the same formulas; AC is inherited from the Thom and tubular suppliers. [F5, step 2.1, algebra] ∎

