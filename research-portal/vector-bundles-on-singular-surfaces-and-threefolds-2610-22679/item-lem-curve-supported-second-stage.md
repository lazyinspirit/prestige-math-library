---
title: Second stage with integral curve support
status: published
research_item: lem-curve-supported-second-stage
dependency_level: 22
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed pp. 15–16, Theorem 6.7 and its proof; p. 16, the final two
        supported exact sequences and generic-localization paragraph
      statement: For the integral codimension-two curve in the smooth locus used in
        the proof of Theorem 6.7, the article identifies the degree-zero second
        supported stage with supported K_0 and gives the sequence from the third
        stage to supported K_0 to H^{4,2} with support, isomorphic to Z. It
        describes the right-hand map as localization at the generic point.
      hypotheses: Theorem 6.7 assumes X is a normal affine threefold over an
        algebraically closed field k. The curve constructed in its proof is
        integral, closed, codimension two, and contained in the smooth locus; it
        may be singular. The passage uses U = X_smooth. It does not state the
        spectrum-level augmentation equivalence or a theorem over every perfect
        field.
      reading_limits: For this repair, read Theorem 6.7 and its proof in the frozen
        PDF text at printed pp. 15–16 and inspected the supplied page-16.png.
        Checked the two displayed supported sequences and the
        generic-localization paragraph. The stronger perfect-field formulation,
        actual augmentation equivalence and positive alternating-length formula
        are used through lem-smooth-leading-cycle-normalization, whose whole
        supplier chain and external sources were not re-audited here. No new
        proof, acceptance or author defect is attributed to the article.
---

PDF p. 16: Proof of Theorem 6.7, supported second-stage exact sequence

## Prerequisites

- [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)


## Statement
Assume the Axiom of Choice and the fixed universe bounds of the completed comparison suppliers. Let $k$ be a perfect field, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $C\subset U$ an integral closed curve of codimension two. In particular, this includes the curve in the smooth locus used in Theorem 6.7 over an algebraically closed field. Neither smoothness nor normality of $C$ is assumed.

Use the actual Elmanto–Morrow motivic filtration $F^\bullet K$ and write
$$K_C(U)=\operatorname{fib}(K(U)\to K(U\setminus C)),\qquad F_C^jK(U)=\operatorname{fib}(F^jK(U)\to F^jK(U\setminus C)).$$
Here $\operatorname{fib}$ is the homotopy fiber of the restriction map, and $K_0(U/(U\setminus C))$ means $\pi_0K_C(U)$. The actual augmentation $\epsilon_2:F_C^2K(U)\to K_C(U)$ is an equivalence. Thus its induced isomorphism identifies $\pi_0F_C^2K(U)$ with $K_0(U/(U\setminus C))$, as in the article. Under this identification there is an exact sequence
$$\pi_0F_C^3K(U)\longrightarrow K_0(U/(U\setminus C))\longrightarrow H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)\cong\mathbb Z[C]\cong\mathbb Z.$$
The second arrow is the actual stage-to-layer projection composed with $(\pi_0\epsilon_2)^{-1}$. The generator $[C]$ is the positive fundamental cycle in the supported cycle group. On a supported perfect complex $E$, the arrow sends its class to $\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}}H^n(E)_\eta$ times $[C]$, where $\eta$ is the generic point of $C$ and $\ell$ denotes module length. It extends additively to virtual classes. This group is supported cohomology, not the image of $[C]$ in the Chow group of $U$.

## Facts & Assumptions

**Given:** The field, smooth threefold, integral closed curve, choice and universe hypotheses in the statement, and the actual augmented motivic tower and restriction maps.

**Goal:** Identify the second supported stage with supported $K$-theory and prove the displayed exact sequence, including the actual map and its positive generator.

[A1] Assume AC as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible universe and site-size bounds of [F1]–[F3]. Choice is retained in the supplied spectral and perfect-complex constructions and in the Noetherian-topology results of [F6]. No choice-free version of those premises is asserted.

[F1] [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization) applies to this perfect-field smooth pair with AC. It supplies the actual equivalence $\epsilon_2$, identifies $\pi_0\operatorname{gr}_C^2K(U)$ with $H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)=\mathbb Z[C]$, and identifies the actual projection after inverse augmentation with the alternating generic-length map and positive generator. This includes the support-category interpretation of the augmented class and the finiteness and additive well-definedness of its alternating-length coefficient. Its stated comparison and source-version qualifications remain binding.

[F2] [lem-filtered-support-exactness](item-lem-filtered-support-exactness) constructs the supported filtered tower by restriction fibers and identifies its graded cofiber with the restriction fiber of the global graded arrow. [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) supplies the natural actual motivic graded triangle on qcqs schemes over any field; [def-cohomology-with-support](item-def-cohomology-with-support) fixes its supported cohomological indexing. Only the triangle is needed here, with no convergence assumption.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines the coherent spectra, restriction fibers, cofibers and homotopy groups used here. In this stable category a cofiber sequence is also a fiber sequence. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) supplies the long exact homotopy sequence for that very sequence, before taking images in any other spectrum.

[F4] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$ as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The perfect-field hypothesis has the meaning of [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field): every nonconstant irreducible polynomial is separable. Smoothness is that of the structure morphism, as in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). Finite type has the local affine finite-generation and quasi-compactness meaning of [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). The integral curve is nonempty, reduced and irreducible as in [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme).

[F5] In the geometric hypotheses of [F1], dimension is the supremum of lengths of strict chains of irreducible closed subsets; pure dimension three means that every irreducible component has dimension three. A curve has dimension one. Codimension of $C$ is the height of its generic point, namely the supremum of lengths of strict chains of irreducible closed subsets starting at $C$ in the ambient scheme. The generic point $\eta$ has closure $C$. By [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), a perfect complex is locally equivalent to a bounded complex of finite locally free modules, and support on $C$ means vanishing of all cohomology stalks off $C$. Here $H^n(E)_\eta$ is the stalk of the $n$th cohomology sheaf over the local ring $\mathcal O_{U,\eta}$ of germs of regular functions. Module length is the number of simple factors in a composition series, with its well-definedness as in [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module). The length sum in [F1] is extended by addition to formal differences of supported classes; $\mathbb Z[C]$ is the free abelian group on the one symbol $[C]$.

[F6] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs by quasi-compactness of the space and of intersections of affine opens. [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian) and [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) make the affine finite-type coordinate rings over $k$ Noetherian. Under [A1], [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes their spectra Noetherian topological spaces, and [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open subset of each such chart quasi-compact.

[F7] Reference 0 records the article's degree-zero supported sequences and generic-localization description in the setting of Theorem 6.7. The broader perfect-field and spectrum-level assertions of the Statement are supplied by [F1], rather than attributed to that passage.

## External input

Reference 0 is read only for the article's special-case sequence and generic-localization description under its recorded hypotheses and reading limits. The present consequence has a local proof using [F1]–[F6]; it does not import an unproved generalization from that passage. No local reconstruction of the substantial comparison theorems behind [F1] or [F2] is claimed.

## Proof

**Proof technique:** Apply homotopy exactness to the supported graded cofiber sequence and transport it along the actual augmentation.

1.1 By [F4], finite type gives a finite cover of $U$ by spectra of finite-type $k$-algebras. By [F6] these charts are Noetherian spaces. Every open subset $W\subseteq U$ is quasi-compact: intersect an open cover of $W$ with each of the finitely many charts, use [F6] for a finite subcover on each intersection, and take the finite union of those subcovers. In particular $U$, $U\setminus C$, and all intersections of their affine opens are quasi-compact, so both schemes are qcqs. Their open-subscheme structures and restriction maps are the ones in [F2]. The remaining hypotheses of [F1] hold exactly: $k$ is perfect, $U$ is smooth of finite type and pure dimension three, and $C$ is integral, closed and codimension two, with the terminology of [F4]–[F5]. Under [A1], [F1] therefore supplies the actual equivalence $\epsilon_2$ and its induced isomorphism on $\pi_0$, identifying $\pi_0F_C^2K(U)$ with $K_0(U/(U\setminus C))$ by the specified augmentation. [A1, F1, F2, F4, F5, F6, given]

2.1 Apply [F2] to the actual weight-two graded triangle on $U$ and $U\setminus C$. Taking their restriction fibers gives the cofiber sequence $F_C^3K(U)\longrightarrow F_C^2K(U)\longrightarrow\operatorname{gr}_C^2K(U)$. By stability in [F3] this is a fiber sequence; its homotopy exactness in [F3] gives exactness at $\pi_0F_C^2K(U)$. By [F1] and the indexing in [F2], the next term is $H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)=\mathbb Z[C]$. Transport the middle term along the actual isomorphism of step 1.1. The resulting second arrow is precisely the actual projection after $(\pi_0\epsilon_2)^{-1}$. By [F1] it is the finite alternating generic-length coefficient times the positive cycle $[C]$, extended additively to virtual classes as in [F5]; the isomorphism $\mathbb Z[C]\cong\mathbb Z$ sends $[C]$ to $1$. This proves the displayed sequence, its actual map and its sign, without invoking purity for a smooth curve. [A1, F1, F2, F3, F5, step 1.1] ∎

## Reading limits

This repair read the full assigned frozen and current bodies, the seven original or homotopical supplier bodies, the added formulation and qcqs supplier bodies, and the full current direct consumer lem-supported-generic-rank-kernel. Supplier inspection checked the interfaces used here; it did not audit unrelated upstream chains or their external sources. The Statement is byte-for-byte unchanged. The consumer uses exactly the retained augmentation equivalence, sequence and positive generic coefficient, so this proposal makes no consumer interface repair. The original article reading is limited to the passage recorded in Reference 0. This is a repair proposal, with no independent acceptance, publication or rendering claim.
