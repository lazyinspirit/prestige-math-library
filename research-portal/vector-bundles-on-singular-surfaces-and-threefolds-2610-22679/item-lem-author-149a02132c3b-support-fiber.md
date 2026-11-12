---
title: Excision and the exact fixed-support cycle fiber
status: published
research_item: lem-author-149a02132c3b-support-fiber
dependency_level: 17
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-article-conventions](item-def-article-conventions)
- [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)
- [lem-adjudicate-b09c2795533e-two-open-descent](item-lem-adjudicate-b09c2795533e-two-open-descent)


## Statement
Assume the Axiom of Choice and the fixed site and nested universe bounds of the support and comparison constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and let $T\subset X$ be a closed subset contained in the smooth locus $U=X_{\mathrm{smooth}}$ of $X\to\operatorname{Spec}k$. Equip $T$ with its reduced induced structure, and put $V=U\setminus T$ and $W=X\setminus T$. Write $C(Y)=\mathbb Z(3)_{\mathrm{mot}}(Y)$ in the enhanced derived category $\mathcal D_\infty(\mathbb Z)$, and write $\mathsf E$ for ordinary Eilenberg–MacLane realization into spectra, with $\pi_{-a}\mathsf E(K)=H^a(K)$. Define the unshifted cohomological support complex $C_T(X)=\mathbb Z(3)_{\mathrm{mot},T}(X):=\operatorname{fib}(C(X)\to C(W))$, and put $M_{3,T}(X)=\operatorname{fib}(\mathsf E C(X)\to\mathsf E C(W))$, the motivic support spectrum. Restriction gives an equivalence of support complexes
$$C_T(X)\simeq\operatorname{fib}(C(U)\to C(V)).$$
There is an actual equivalence of support spectra
$$M_{3,T}(X)\simeq\mathsf E(C_T(X))\simeq\operatorname{fib}(\mathsf E C(U)\to\mathsf E C(V))\simeq\mathsf E(z_T^3(U,\bullet)[-6]).$$
Here $z_T^3(U,\bullet)$ is the fixed-support subcomplex of Bloch's unnormalized cycle complex. Reindex homological degree $n$ as cochain degree $-n$ before shifting; cochain shifts are $K[b]^m=K^{m+b}$ with differential $(-1)^b d_K$. Thus, for every integer $a$,
$$H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)=\pi_{-a}M_{3,T}(X)\cong H_{6-a}z_T^3(U,\bullet).$$
These equivalences respect the support-to-global maps followed by restriction to $U$, using the global spectrum comparison on $U$ from the coherent restriction diagram. The cycle comparison is asserted in spectra; no compatible $\mathbb Z$-linear refinement of that comparison is supplied.

## Statement references
[def-article-conventions](item-def-article-conventions)

[math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-cohomology-with-support](item-def-cohomology-with-support)

[def-supported-complex-indexing](item-def-supported-complex-indexing)

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

## Facts & Assumptions
**Given:** The data of the Statement, the Axiom of Choice, and compatible nested universes containing all scheme data and the indicated diagrams.

**Goal:** Construct the support comparisons with the stated types, indexing and support-to-global maps.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) supplies the actual qcqs opens, their cover and intersection, and the smooth separated finite-type schemes $U,V$ over perfect $k$. [def-article-conventions](item-def-article-conventions) supplies the algebraically closed field, affine finite-type and chain-dimension conventions. [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism) defines the locus; the geometry supplier verifies local finite presentation and gives its open structure here.

[F2] [def-motivic-cohomology](item-def-motivic-cohomology) fixes $C$ and global cohomology. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the enhanced functor and covering-sieve descent. [lem-adjudicate-b09c2795533e-two-open-descent](item-lem-adjudicate-b09c2795533e-two-open-descent) gives the actual derived and realized pullback square for this cover. [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers) gives spectral support excision and its projection compatibility. [def-cohomology-with-support](item-def-cohomology-with-support) defines $M_{3,T}(X)$ and $H^{a,3}_{\mathrm{mot},T}$.

[F3] [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram) gives an equivalence of coherent restriction arrows in spectra, with actual cycle restriction on $V\hookrightarrow U$. [def-stable-spectra-interface](item-def-stable-spectra-interface) defines a spectral fiber as a homotopy pullback along zero. Its limit universal property makes fiber a functor on coherent arrows, preserving their equivalences and projections.

[F4] [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) supplies the cycle complex and homology. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) gives the fixed-support subcomplex and its quasi-isomorphism $a\mapsto(a,0)$ to the homological restriction fiber. [def-supported-complex-indexing](item-def-supported-complex-indexing) supplies the cochain fiber model, its projection and signed shifts. [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization) supplies realization, its indexing and preservation of coherent fibers. Use its fixed $\mathcal H$ as the ordinary realization $\mathsf E$ in the support definition and the restriction comparison; all diagrams are realized by this one functor. Transporting along a natural equivalence of realization models transports the whole comparison and its projections, rather than selecting pointwise identifications.

[F5] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the inherited Choice hypotheses of these geometry, derived, cycle and spectral suppliers. Use the nested universes of [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); their existence is a separate assumption, not a consequence of Choice.

## Proof
1.1 Under [F5], [F1] supplies $X=U\cup W$, $U\cap W=V$ and the hypotheses for [F2]. Its derived two-open pullback gives $C(X)\simeq C(U)\times_{C(V)}C(W)$. Pulling its projection to $C(W)$ back along zero identifies $C_T(X)$ with $C(U)\times_{C(V)}0$, compatibly with projection to $C(U)$: both iterated pullbacks specify a map to $C(U)$ and a coherent nullhomotopy of its restriction to $C(V)$. This is the first equivalence of support complexes. The realized square is homotopy cartesian, so spectral excision in [F2] gives $M_{3,T}(X)\simeq\operatorname{fib}(\mathsf E C(U)\to\mathsf E C(V))$. By realization's fiber preservation in [F4], $\mathsf E(C_T(X))\simeq M_{3,T}(X)$. All comparisons respect the support projections and restriction to $U$. All four schemes are qcqs, so the arbitrary-open extension convention is unnecessary. [F1, F2, F4, F5, given]

2.1 Apply the fiber functor of [F3] to its coherent spectral arrow equivalence for $V\hookrightarrow U$; this preserves the projections to the global spectra on $U$. For the cycle side, [F4] gives the homological fiber with $F_n=z^3(U,n)\oplus z^3(V,n+1)$ and differential $(a,b)\mapsto(\partial a,j^*a-\partial b)$, and its fixed-support quasi-isomorphism. After reindexing and shifting by $-6$, degree $m$ of this model is $z^3(U,6-m)\oplus z^3(V,7-m)$, exactly the cochain fiber of $z^3(U,\bullet)[-6]\to z^3(V,\bullet)[-6]$ in [F4]; the even shift changes no differential sign. The inclusion still projects to the actual inclusion into global cycles. Realization preserves this fiber and carries the quasi-isomorphism to an equivalence, completing the chain of spectral equivalences. Finally [F4] gives $\pi_{-a}\mathsf E(z_T^3(U,\bullet)[-6])=H^a(z_T^3(U,\bullet)[-6])=H_{6-a}z_T^3(U,\bullet)$, while [F2] defines the left-hand supported group. Projection compatibility throughout yields the asserted support-to-global compatibility. The spectrum-valued comparison in [F3] is not promoted to a complex-valued one. [F2, F3, F4, step 1.1] ∎
