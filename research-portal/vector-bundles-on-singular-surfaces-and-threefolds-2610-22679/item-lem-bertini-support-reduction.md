---
title: Curve-and-point support reduction
status: published
research_item: lem-bertini-support-reduction
dependency_level: 32
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 15, proof of Theorem 6.7, from the two Bertini applications
        through the support conclusion
      reading_limits: Read the frozen article extraction and inspected the supplied
        PDF images of pp. 15–16 in this assignment. The componentwise extension,
        lower-dimensional trivialization and explicit point-location interface
        are local arguments from declared suppliers; no fresh reading of KM82 or
        the categorical sources is claimed.
      statement: The proof constructs finite smooth point zeros, an off-zero rank-two
        kernel, a curve avoiding a prescribed singular locus, its closure, and
        two exact sequences on the complement, concluding support of the bundle
        difference.
      hypotheses: A normal affine threefold over an algebraically closed field and its
        chosen rank-three representative. The finite-clopen extension, explicit
        Choice and size contracts, and comparison arguments here are local
        elaborations using declared suppliers.
    - title: Daniel Kasprowski and Christoph Winges, Algebraic K-theory of stable
        infinity-categories via binary complexes
      url: https://arxiv.org/pdf/1805.06175v2
      locator: Section 2.1 opening (printed p. 2), formula (2.6) (p. 3), and Section
        2.2 opening before Lemma 2.12 (p. 4).
      statement: Degree-zero nonconnective K-theory is the cofiber Grothendieck group
        after idempotent completion. Section 2.1 specifies the stable
        exact-functor domain, completion and nonconnective functor.
      hypotheses: A small stable infinity-category; omit completion when idempotent
        complete. Apply via the essentially small perfect-category realization
        in compatible universes and exact pullbacks of the declared K-spectrum
        interface.
      reading_limits: "Retained historical source-reading record, not a fresh reading
        in this repair: Freshly read these passages in the versioned primary PDF
        extraction. Only the object-class comparison and functor/completion
        identification are used; their foundational proofs were not
        reconstructed."
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Remark 1.3.2.17 (printed p. 91); Proposition 1.3.5.13 and its proof
        (printed p. 127).
      statement: A mapping cone computes a cofiber in the dg nerve of complexes. For a
        Grothendieck abelian category the derived infinity-category is a
        reflective localization of that dg nerve; the reflector preserves
        cofibers.
      hypotheses: An additive category for the cone assertion, and a Grothendieck
        abelian category for derived localization. Apply to module sheaves via
        the declared enhancement supplier, reversing homological to cochain
        indexing.
      reading_limits: "Retained historical source-reading record, not a fresh reading
        in this repair: Freshly read the cone remark and displayed cone square,
        and the localization proposition with its proof, in the primary PDF
        extraction. Imported dg-nerve and model-category foundations were not
        reconstructed. The short-exact-sequence application below is local."
---

PDF p. 15: Proof of Theorem 6.7, closure of Y and exact sequences on V

## Prerequisites

- [lem-third-piece-representatives](item-lem-third-piece-representatives)
- [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section)
- [prop-bertini-curve-section](item-prop-bertini-curve-section)
- [lem-normal-smooth-locus-restriction](item-lem-normal-smooth-locus-restriction)
- [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences)
- [lem-trivial-determinant-rank-two-kernel](item-lem-trivial-determinant-rank-two-kernel)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products)
- [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:lem-every-zariski-closed-set-has-a-radical-defining-ideal](https://alphabetamath.cc/item/lem-every-zariski-closed-set-has-a-radical-defining-ideal)
- [math:thm-quasi-coherent-ideal-closed-subscheme-correspondence](https://alphabetamath.cc/item/thm-quasi-coherent-ideal-closed-subscheme-correspondence)
- [lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points](item-lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 15, proof of Theorem 6.7, from the two Bertini applications through the support conclusion `](https://arxiv.org/abs/2610.22679v1)
- [` Daniel Kasprowski and Christoph Winges, Algebraic K-theory of stable infinity-categories via binary complexes · Section 2.1 opening (printed p. 2), formula (2.6) (p. 3), and Section 2.2 opening before Lemma 2.12 (p. 4). `](https://arxiv.org/pdf/1805.06175v2)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Remark 1.3.2.17 (printed p. 91); Proposition 1.3.5.13 and its proof (printed p. 127). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume the Axiom of Choice and the site and universe bounds of the completed filtration, representative and K-theory suppliers. Let $k$ be algebraically closed and let $X$ be a normal affine finite-type $k$-scheme of dimension three. For every $\alpha\in F^3_{\mathrm{mot}}K_0(X)$ there are a rank-three vector bundle $P$ with $\det P\cong\mathcal O_X$ and $c_1(P)=c_2(P)=0$, a functional $s:P\to\mathcal O_X$, and, on $U=X\setminus S$ for its zero locus $S$, a functional $t:Q|_U\to\mathcal O_U$ for $Q=\ker s$, with the following properties.

The class is $\alpha=[P]-[\mathcal O_X^3]$. The zero scheme $S$ is a finite set of smooth closed points, all lying on the three-dimensional clopen components of $X$, and $Q|_U$ is a rank-two vector bundle. The zero scheme $Y$ of $t$ is a finite disjoint union of smooth geometrically integral curves, one on each three-dimensional clopen integral component of $X$; it is empty on the lower-dimensional components. It is contained in the smooth locus of $X$. For integral $X$, $Y$ is a single curve. Put $C$ for the reduced closure of $Y$ in $X$, $T=C\cup S$, and $V=X\setminus T$. Then $C\setminus Y\subseteq S$, $C$ is smooth away from $C\setminus Y$, and $T$ lies in the smooth locus of $X$. On $V$ there are short exact sequences
$$0\to Q|_V\to P|_V\xrightarrow{s}\mathcal O_V\to0,\qquad 0\to\mathcal O_V\to Q|_V\xrightarrow{t}\mathcal O_V\to0.$$
Consequently $\alpha|_V=0$ in $K_0(V)$, and $\alpha$ is in the image of the actual support-to-global map $K_{0,T}(X)=\pi_0K_T(X)\to K_0(X)$.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Normal means that every local ring is an integrally closed domain. Affine finite type means $X=\operatorname{Spec}A$ for a finitely generated commutative $k$-algebra $A$. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; irreducible means nonempty and not a union of two proper closed subsets. Clopen means open and closed. A vector bundle of rank $r$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^r$; its determinant is its top exterior power. A functional is a morphism to the structure sheaf, with zero scheme defined locally by its coefficients. A curve here is a finite-type scheme of pure dimension one, and geometrically integral means integral after every field extension. The smooth locus consists of points at which the structure morphism to $\operatorname{Spec}k$ is smooth. Reduced means that local rings have no nonzero nilpotents. For a closed subset $Z\subseteq\operatorname{Spec}A$, its reduced closed structure is $\operatorname{Spec}(A/I(Z))$, where $I(Z)=\bigcap_{\mathfrak p\in Z}\mathfrak p$. The reduced closure of $Y$ uses $Z=\overline{|Y|}$. The Chern classes are the natural projective-relation classes $c_i(P)\in H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$, where $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(b)_{\mathrm{mot}}(X))$. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves; a quasi-isomorphism induces an isomorphism on every cohomology sheaf. The group $K_0$ is zeroth homotopy of the specified nonconnective perfect-complex K-spectrum; $K_T(X)$ is the supported spectrum in the localization supplier. The class $[P]$ is the object class of the degree-zero perfect complex $P$. The motivic filtration piece is the image of $\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$ for the actual tower. Qcqs means quasi-compact and quasi-separated: every open cover has a finite subcover and intersections of affine opens are quasi-compact. A short exact sequence of module sheaves is exact on every stalk. Choice means that every family of nonempty sets admits a choice function.

## Facts & Assumptions
**Given:** The field, scheme, class, Choice and size bounds in the statement.

**Goal:** Construct the componentwise curve-and-point support and prove the two exact sequences and the actual supported lift.

[F1] [lem-third-piece-representatives](item-lem-third-piece-representatives) gives a rank-three representative with the stated Chern vanishings and trivial determinant, under the stated Choice and size assumptions.

[F2] [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect) makes the algebraically closed field perfect. [lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points](item-lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points) verifies that every clopen union used here is again normal affine finite type and qcqs. [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) decomposes $X$ into finitely many clopen integral components. [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) identifies restriction on the actual filtration images and $K_0$ with the product over those components. [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) gives $F^3_{\mathrm{mot}}K_0=0$ on each component of dimension less than three.

[F3] [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section) supplies a functional with finite smooth zero scheme and a rank-two kernel bundle off that scheme. [lem-normal-smooth-locus-restriction](item-lem-normal-smooth-locus-restriction) makes the nonsmooth locus on each normal three-dimensional component closed of codimension at least two. [prop-bertini-curve-section](item-prop-bertini-curve-section) supplies, for this fixed avoidance locus, a smooth geometrically integral codimension-two zero curve on each such component. These suppliers assume Choice.

[F4] [lem-determinants-of-short-exact-sequences](item-lem-determinants-of-short-exact-sequences) gives the determinant isomorphism for a short exact sequence of bundles. [lem-trivial-determinant-rank-two-kernel](item-lem-trivial-determinant-rank-two-kernel) identifies the kernel of a surjective functional on a rank-two bundle of trivial determinant with $\mathcal O$.

[F5] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) specifies the actual nonconnective functor, essentially small stable idempotent-complete perfect-category domain and exact pullbacks. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) puts each bundle, in degree zero, in that domain. [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies object classes and cofiber relations with its $\pi_0$, naturally for exact functors, on every qcqs scheme here, including nonaffine $V$. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the ambient derived cofiber represented by the cochain mapping cone; step 6.1 proves the short-exact-sequence application. [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) gives $K_T(X)\to K(X)\to K(V)$ for qcqs $X$ and quasi-compact open $V$. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies homotopy fibers, mapping spaces and $\pi_0$. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) records inherited Choice; compatible universes, including enlargements for the essentially small models, remain separately assumed.

[F6] [def-motivic-filtration](item-def-motivic-filtration) defines the actual image subgroup and restriction maps. [def-motivic-cohomology](item-def-motivic-cohomology) supplies the homotopy-coherent Nisnevich sheaf $\mathbb Z(i)_{\mathrm{mot}}$ and its cohomology groups. [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent) gives its restriction equivalence on a finite clopen partition in the size-bounded qcqs category. [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products) transfers that equivalence to cohomology, with joint injectivity of restrictions. [def-motivic-chern-classes](item-def-motivic-chern-classes) supplies the projective-relation Chern classes, their isomorphism invariance and pullback naturality. [lem-author-b02e51f9da03-trivial-chern](item-lem-author-b02e51f9da03-trivial-chern) gives $c_i(\mathcal O^3)=0$ for $i>0$ on any qcqs field-scheme under these Choice and size bounds.

[F7] [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space) supplies unique gluing on open covers. On a finite disjoint clopen cover, glue given module sheaves by taking the product of their sections on each open's intersections with the pieces, with componentwise restrictions and scalar action. This is a sheaf and restricts to the given sheaf on each piece; the same axiom glues morphisms and isomorphisms. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) tests exactness on stalks and preserves the exact sequences on open restriction. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) supplies exterior powers, their restriction compatibility and determinant lines. [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) fixes the smooth structure-morphism convention.

[F8] [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) makes a finite-type algebra over a Noetherian field Noetherian. [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes its spectrum a Noetherian space under Choice. [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes all its opens quasi-compact. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) fixes qcqs as in the Statement. Intersections of affine opens are opens of this Noetherian space, so every open here is also quasi-separated. Thus all schemes and restrictions used in [F5] and [F6] are qcqs, without assuming $V$ affine.

[F9] [math:lem-every-zariski-closed-set-has-a-radical-defining-ideal](https://alphabetamath.cc/item/lem-every-zariski-closed-set-has-a-radical-defining-ideal) gives the unique radical ideal $I(Z)$ of a closed subset of an affine spectrum. [math:thm-quasi-coherent-ideal-closed-subscheme-correspondence](https://alphabetamath.cc/item/thm-quasi-coherent-ideal-closed-subscheme-correspondence) supplies its quotient closed subscheme and the affine-local ideal description of every closed subscheme, under Choice. The quotient by a radical ideal is reduced, since $a^n$ in that ideal implies $a$ is in it. Localizations of reduced rings are reduced: if $(a/s)^n=0$, some inverted $u$ satisfies $ua^n=0$, hence $(ua)^n=0$, so $ua=0$ and $a/s=0$.

## External input
The degree-zero comparison is used through [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input), with the checked Kasprowski–Winges passages in reference 1. The cone/cofiber and reflective localization interface is used through [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), with the checked Higher Algebra passages in reference 2. The applications below are local; no reconstruction of these categorical inputs is claimed.

## Proof
1.1 By [F1], choose a representative $P_0$ of $\alpha$ with the stated rank, determinant and Chern properties. By [F2], each lower-dimensional clopen component has zero third filtration image, so $\alpha$ restricts to zero there. Replace $P_0$ on all such components by $\mathcal O^3$, leaving it unchanged on the three-dimensional components. Gluing over the finite disjoint clopen partition gives a rank-three bundle $P$. The componentwise $K_0$ decomposition in [F2] shows that $[P]-[\mathcal O_X^3]=\alpha$. The gluing is the module-sheaf construction in [F7], so local freeness and rank are preserved. On every piece its determinant is either the restriction of $\det P_0$ or the determinant of the standard trivial bundle. Exterior-power restriction and gluing the corresponding trivializations give $\det P\cong\mathcal O_X$. [F1, F2, F7, F8, given]

2.1 For $i=1,2$, apply [F6] to this finite clopen partition. The motivic complex restriction is an equivalence, and its finite-product cohomology comparison makes $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)\to\prod_e H^{2i,i}_{\mathrm{mot}}(X_e,\mathbb Z)$ injective. On a three-dimensional piece, Chern naturality identifies the restriction of $c_i(P)$ with that of $c_i(P_0)=0$. On a lower-dimensional piece it identifies that restriction with $c_i(\mathcal O^3)=0$ by the trivial-bundle supplier. Joint injectivity proves $c_1(P)=c_2(P)=0$ globally. The pieces, inclusions and all iterated intersections are in the assumed size-bounded qcqs category by [F2] and [F8]; intersections are a piece or empty. [F1, F2, F6, F8, step 1.1]

2.2 Apply the point-section supplier [F3] to the restriction of $P$ on the union of three-dimensional components. On each lower-dimensional component use the first-coordinate projection $\mathcal O^3\to\mathcal O$. These maps glue to $s$. Its zero scheme $S$ is finite, lies in the smooth locus, and has no points on lower-dimensional components. On $U=X\setminus S$, [F3] gives the exact sequence $0\to Q|_U\to P|_U\xrightarrow{s}\mathcal O_U\to0$ with rank-two kernel; on lower-dimensional components this kernel is the displayed trivial rank-two summand. [F2, F3, F7, F8, step 1.1]

3.1 On each three-dimensional component, prescribe the closed nonsmooth locus in $U$ as the avoidance set. It has codimension at least two by [F3]. The curve supplier [F3] gives a functional on the actual restricted kernel whose zero scheme is a smooth geometrically integral codimension-two curve avoiding that set. On each lower-dimensional component use a coordinate projection from the trivial rank-two kernel; it has empty zero scheme. Glue these finitely many functionals to $t$ on $U$. Thus $Y$ is precisely the stated finite disjoint union of curves and lies in the smooth locus. The construction uses the avoidance set fixed before choosing the functional. [F2, F3, F7, F8, step 2.2]

4.1 The zero scheme $Y$ is closed in $U$, so its topological closure $Z$ in $X$ satisfies $Z\cap U=|Y|$. Write $X=\operatorname{Spec}A$ and construct $C=\operatorname{Spec}(A/I(Z))$ by [F9]. It is reduced and closed with underlying set $Z$, and its restriction to $U$ is reduced by the localization calculation in [F9]. Each component of $Y$ is geometrically integral, hence reduced; the finite disjoint union is reduced. On every affine chart of $U$, the closed subschemes $C\cap U$ and $Y$ therefore have radical defining ideals with the same vanishing set. Uniqueness in [F9] makes those ideals equal. Their identifications respect the inclusions in $U$ and glue by [F7], giving $C\cap U=Y$ as schemes. Thus $C\setminus Y\subseteq X\setminus U=S$. Since $Y$ is smooth and every point of $S$ is in the smooth locus of $X$, both $C$ and $T=C\cup S$ have the asserted location properties; the possible nonsmooth points of $C$ are contained in $C\setminus Y$. This also applies to the empty boundary. [F3, F7, F9, step 2.2, step 3.1]

5.1 On $V=X\setminus(C\cup S)$ both functionals are pointwise nonzero. A functional on a finite locally free module is surjective wherever one of its coefficients is a unit, so the sequence for $s$ restricts to the first displayed sequence and $t|_V$ is surjective. By [F4], $\det Q|_V\otimes\det\mathcal O_V\cong\det P|_V\cong\mathcal O_V$. The rank-two kernel result in [F4] identifies the kernel of $t|_V$ with $\mathcal O_V$, giving the second sequence. [F4, F7, step 1.1, step 2.2, step 3.1, step 4.1]

6.1 For any short exact sequence $0\to E'\xrightarrow{i}E\xrightarrow{p}E''\to0$ of the bundles on $V$, put its terms in degree zero in [F5]. The cone of $i$ is $E'\xrightarrow{i}E$ in degrees $-1,0$. Its cochain map to $E''[0]$ is $p$ in degree zero and zero elsewhere. Stalkwise exactness in [F7] shows that the cone has $H^{-1}=0$ and $H^0=E''$, with all other cohomology zero, and that this map is a quasi-isomorphism. The cone model in [F5] therefore makes $E''[0]$ the cofiber of $i$. All these objects are perfect and their cofibers are inherited from the ambient enhancement by [F5]. Its essentially small idempotent-complete realization meets the degree-zero comparison hypotheses in the chosen universes. This comparison gives $[E]=[E']+[E'']$ in the actual $K_0(V)$; its exact-functor naturality identifies restriction of bundle classes with the restricted bundles. Apply it to step 5.1: $[Q|_V]=2[\mathcal O_V]$ and $[P|_V]=3[\mathcal O_V]$, so $\alpha|_V=0$. No affine comparison or resolution property for $V$ is needed. [F5, F7, F8, step 1.1, step 5.1]

7.1 The field $k$ is Noetherian since its only ideals are $0$ and $k$, each generated by at most one element. By [F8] the finite-type coordinate ring of $X$ is Noetherian and $|X|$ is a Noetherian space. Thus $X$ and all its opens, including $V$, are qcqs by [F8]. Since $T=C\cup S$ is closed, localization in [F5] applies. Represent $\alpha$ by a map $\mathbb S\to K(X)$. Step 6.1 says its composite to $K(V)$ is in the component of zero; choose a path to zero in that mapping space. The mapping-space universal property of the homotopy fiber in [F5] gives a map $\mathbb S\to K_T(X)$ over that representative. Its $\pi_0$ class is the required supported lift. Conversely every supported class maps to zero on $V$ by the same fiber square, giving the stated image interpretation. The lift is not asserted to be canonical. [F5, F8, step 4.1, step 6.1] ∎

## Source/application note
The article's integral-curve construction is applied separately on the finitely many three-dimensional clopen integral components. The resulting finite union is sufficient for the subsequent localization argument. Lower-dimensional components contribute no third image-filtration class by the named stage-vanishing supplier and are given trivial representatives and nowhere-zero functionals. No globally irreducible curve is asserted for a disconnected fixed pair.

## Repair scope
This generated-content repair exposes the point-location guarantee already proved in step 2.2 and retains both Chern vanishings, the componentwise curve construction, the lower-dimensional trivialization, both exact sequences and the actual supported lift. The three direct consumers thm-smooth-point-generation, lem-point-correction-localization and lem-lift-curve-supported-filtration were read through their Statements, Facts and Proofs. They use the support interface, with the point-location property now exposed explicitly, and their uses remain compatible; no further source edits are proposed for the other two consumers. No defect is attributed to the article authors and no independent acceptance, audit or publication is claimed.
