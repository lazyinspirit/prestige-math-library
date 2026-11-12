---
title: Divisibility of curve-supported top cohomology
status: published
research_item: lem-curve-supported-degree-six-divisible
dependency_level: 20
sources:
  references:
    - title: Fasel–Yakerson
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 13, middle of Proposition 6.1 proof
      statement: Proposition 6.1 proof identifies degree-six cohomology with curve
        support with the supported top Chow group, computes it by the
        rational-function divisor complex, uses normalization and the divisible
        Picard group of a smooth affine curve, and deduces divisibility of the
        support-to-global image.
      hypotheses: An affine threefold over an algebraically closed field and an
        integral curve contained in its smooth locus; the paragraph invokes the
        normalization of this affine curve. The local proof below records its
        own Choice, size, spectral-comparison and dimension-stratum
        qualifications through explicit suppliers.
      reading_limits: For this repair, read the supplied article.txt Proposition 6.1
        statement and complete proof and inspected the supplied PDF image
        page-13.png, including the paragraph beginning “We now prove that”. This
        is attribution for the local composition, not an additional theorem
        premise. Read the current declared supplier interfaces and the Math
        relative-dimension definition; the dimension bound is proved locally
        from that definition and chain dimension. Did not read Fulton Example
        1.6.6 or reconstruct the underlying motivic comparisons or
        Picard-divisibility theorem; these are used only through the declared
        local suppliers. No new defect of the original article is asserted.
---

PDF p. 13: Supported Chow group and normalization

## Prerequisites

- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram)
- [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber)
- [lem-author-149a02132c3b-normalization-surjection](item-lem-author-149a02132c3b-normalization-surjection)
- [lem-author-149a02132c3b-divisible-image](item-lem-author-149a02132c3b-divisible-image)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface)
- [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex)
- [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism)


## Statement
Assume the Axiom of Choice and the completed size conventions. Let $X$ be an affine finite-type threefold over an arbitrary algebraically closed field k, $U=X_{\mathrm{smooth}}$, and $T\subset X$ a closed integral curve contained in U. Then the actual support fiber has
$$H^{6,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)\cong\mathrm{CH}^3_T(U),$$
and this group and its image in $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ are divisible. On the three-dimensional smooth stratum the right side is the length-order divisor quotient of k(T) on closed points of T and receives the actual surjection from $\operatorname{Pic}(\widetilde T)$, with residue degrees one. No smoothness or normality of T, characteristic restriction on divisibility, or injectivity of support-to-global is assumed.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and the fixed compatible site and nested universe bounds in [A1].

**Goal:** Construct the stated actual maps and prove their consequence.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible site and nested universe bounds of [def-cohomology-with-support](item-def-cohomology-with-support): use $\mathscr U\in\mathscr V\in\mathscr W$, with the field and schemes represented by $\mathscr U$-small data, the $\mathscr V$-small big Nisnevich site, and compatibly enlarged derived and spectral interfaces in $\mathscr W$. Existence of these bounds is a separate size assumption. Choice is inherited when applying the geometry, comparison and support inputs in step 1.1 and the normalization and divisibility inputs in step 2.1.

[F0] [def-article-conventions](item-def-article-conventions) supplies the algebraically closed field, affine finite-type and chain-dimension conventions and the meanings of qcqs and finite locally free sheaves. A threefold here has Krull dimension three, without a purity or irreducibility assumption on $X$. An integral curve is a nonempty reduced irreducible scheme of dimension one, as in [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme). [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism) defines $U$ as the locus of smoothness of $X\to\operatorname{Spec}k$; [F1] verifies local finite presentation and supplies its open-subscheme structure. The curve $T$ carries its reduced induced closed-subscheme structure.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) supplies the qcqs two-open geometry with $V=U\setminus T$ and $W=X\setminus T$, the smooth separated finite-type pair $U,V$ over perfect $k$, and the unique open-and-closed relative-dimension stratum $U_d$ containing $T$. Here relative dimension has the geometric-fibre local-dimension meaning of [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism): local dimension at a point is the infimum of the chain dimensions of its open neighbourhoods, and the relative-dimension condition holds after every field extension, including the identity extension $k/k$. The bound $d\leq3$ is proved in step 1.1 using the chain-dimension convention in [F0]. [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram) supplies the actual weight-three motivic-to-cycle restriction diagram in spectra over this arbitrary algebraically closed field.

[F2] [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber) supplies an equivalence of the motivic support spectrum with $\mathsf E(z_T^3(U,\bullet)[-6])$, where $\mathsf E$ is the ordinary Eilenberg–MacLane realization specified there. Its homotopy indexing is $\pi_{-a}\mathsf E(K)=H^a(K)$. Reindex homological degree $n$ as cochain degree $-n$ before shifting, with $K[b]^m=K^{m+b}$ and differential $(-1)^b d_K$. Thus its degree-six supported group is $H_0z_T^3(U,\bullet)=\mathrm{CH}^3_T(U)$, with the actual support maps. This supplier does not assert an equivalence of motivic and cycle complexes before realization.

[F3] [lem-author-149a02132c3b-normalization-surjection](item-lem-author-149a02132c3b-normalization-surjection) gives the actual surjection from the divisible Picard group of the normalization when $d=3$, and the zero supported group when $d<3$. [lem-author-149a02132c3b-divisible-image](item-lem-author-149a02132c3b-divisible-image) proves divisibility of the support group and its actual support-to-global image, without assuming that map injective. Divisible means that for every nonzero integer $n$ and every group element $a$ there exists $b$ with $nb=a$.

[F4] [def-motivic-cohomology](item-def-motivic-cohomology) defines $H^{a,3}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(3)_{\mathrm{mot}}(X))$. [def-cohomology-with-support](item-def-cohomology-with-support) defines the actual support spectrum $M_{3,T}(X)$ as the fiber of realized motivic restriction from $X$ to $W$, its support-to-global projection, and $H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)=\pi_{-a}M_{3,T}(X)$. In the Statement, $H^{a,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)$ denotes this supported group; it is pair notation, rather than a new quotient-evaluation claim. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectral fibers and integer homotopy groups. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) defines $z_T^3(U,\bullet)$ by admissible Bloch generators supported in $T\times_k\Delta^n$, with its inherited boundary, and defines $\mathrm{CH}^3_T(U)=H_0z_T^3(U,\bullet)$.

[F5] [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface) constructs $\widetilde T$ as the spectrum of the integral closure of the coordinate domain of affine $T$ in its fraction field $k(T)$; its finite map to $T$ is $\nu$. It is a smooth affine integral curve, and its closed residue fields and those of $T$ are $k$. The Picard group is the group of isomorphism classes of line bundles under tensor product; a line bundle is a locally free sheaf of rank one. [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex) defines the length-order divisor by $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_{\mathcal O_{T,x}}(f)[x]$, with $\operatorname{ord}_R(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R$ and $\ell_R$ the composition-series length. It supplies well-definedness and finite support of these orders. The divisor quotient is the group of finite formal integer combinations of closed points of $T$ modulo these principal divisors. On $U_3$, [F3] gives this precise presentation and the map induced by $[y]\mapsto[\nu(y)]$. Its residue degree is $[\kappa(y):\kappa(\nu(y))]=1$, so principal divisors upstairs map to these length-order divisors even when $T$ is singular.

## Proof

1.1 Under [A1], use the conventions of [F0] and apply [F1] to the stated $X,U,T$. The four schemes $X,U,V,W$ are qcqs, and $U,V$ are smooth separated finite type over perfect $k$, so the comparison and excision hypotheses of [F2] hold. First establish the stratum bound. For each irreducible closed subset $C$ of $U$, let $\overline C^{X}$ be its closure in $X$, the least closed subset of $X$ containing $C$. This closure is irreducible: if it is contained in the union of two closed subsets of $X$, their intersections with $C$ cover $C$, so irreducibility puts $C$, and hence its closure, in one of them. Since $C$ is closed in the open subspace $U$, $\overline C^{X}\cap U=C$. Therefore taking closures in $X$ carries every strict chain of irreducible closed subsets of $U$ to a strict chain of the same length in $X$. The definition in [F0] gives $\dim U\leq\dim X=3$. Choose a point $u\in T$, possible since the integral curve is nonempty. Applying the relative-dimension definition of [F1] with the identity field extension $k/k$ gives $d=\dim_u U\leq\dim U\leq3$: the whole space $U$ is one of the open neighbourhoods in the defining infimum. Apply [F2] to the actual support spectrum of [F4] and take $\pi_{-6}$. Its indexing gives $H^6(z_T^3(U,\bullet)[-6])=H_0z_T^3(U,\bullet)=\mathrm{CH}^3_T(U)$. This proves the displayed isomorphism for the actual support group, with the actual support projections; no complex-valued lift of the spectral comparison is used. [A1, F0, F1, F2, F4, given]

2.1 Apply [F3] to this same curve and field under [A1]. The bound $d\leq3$ from step 1.1 makes the cases $d=3$ and $d<3$ exhaustive. On its dimension-three smooth stratum the actual normalization map of [F5] sends each closed point to its image with residue degree one, respects principal divisors, and surjects from the divisible Picard group to the length-order divisor quotient. On a lower-dimensional stratum [F3] gives the zero supported group. In either case [F3] proves divisibility of the support group and its image under the actual support-to-global homomorphism of [F4]. Together with step 1.1, these are all the stated conclusions, without a smoothness or normality hypothesis on $T$, a characteristic restriction on divisibility, or an injectivity hypothesis on that homomorphism. [A1, F1, F3, F4, F5, step 1.1] ∎

## Source note
The supported Chow identification, normalization argument and divisibility conclusions are extracted from the middle of the proof of Proposition 6.1, printed p. 13, of Fasel–Yakerson. The local proof uses the declared support, normalization and divisibility suppliers, with their explicit hypotheses. The article citation records statement provenance; it supplies no additional unproved premise to this composition.
