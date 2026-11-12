---
title: Actual exact-sequence Whitney and filtered-root formula on singular qcqs
  schemes
status: published
research_item: lem-author-32887006bdff-actual-whitney
dependency_level: 21
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF
        dated April 14, 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §§2.1.1–2.1.5, printed p. 14; Definition 4.4.1 and Lemma
        4.4.3(ii)–(iii), including its proof, printed pp. 30–31.
      statement: Positive-rank projective-relation Chern classes satisfy the
        line-quotient filtration formula and multiplicativity for fiber
        sequences of vector bundles.
      hypotheses: A homotopy-commutative linearly oriented motivic ring spectrum over
        a qcqs derived base, with PBF; positive constant ranks on a smooth qcqs
        test scheme. Rank-zero conventions are local.
      reading_limits: This repair read the live author PDF date, §2.1 and Definition
        4.4.1 through the complete Lemma 4.4.3 proof on pp. 30–31. The cited
        splitting trick and upstream foundations were not reconstructed.
    - title: Jack Hall and David Rydh, Perfect complexes on algebraic stacks (July 6,
        2017)
      url: https://davidrydh.se/papers/perfect_stacks20170706.pdf
      locator: §1 opening, pp. 6–7; §1.4, Proposition 1.3 and its proof, pp. 10–11;
        Remark 1.7, p. 12.
      statement: For a classical scheme, the quasi-coherent-cohomology derived
        category, using the Zariski site, agrees with the stable quasi-coherent
        infinity-category of its associated spectral scheme; module sheaves in
        degree zero correspond.
      hypotheses: A classical scheme (hence a Deligne–Mumford stack), with compatible
        size universes; no affine-diagonal hypothesis is needed for this
        comparison.
      reading_limits: Read these passages in the live primary PDF text, including the
        full Proposition 1.3 proof and Remark 1.7. SAG and LMB are imported
        through them, not independently read. No comparison with D(QCoh(X)) is
        used.
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison)
- [thm-author-32887006bdff-non-a1-whitney-input](item-thm-author-32887006bdff-non-a1-whitney-input)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [math:def-increasing-and-decreasing-filtration-of-an-object](https://alphabetamath.cc/item/def-increasing-and-decreasing-filtration-of-an-object)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF dated April 14, 2025) · §§2.1.1–2.1.5, printed p. 14; Definition 4.4.1 and Lemma 4.4.3(ii)–(iii), including its proof, printed pp. 30–31. `](https://ryomei.com/papers/MotSp.pdf)
- [` Jack Hall and David Rydh, Perfect complexes on algebraic stacks (July 6, 2017) · §1 opening, pp. 6–7; §1.4, Proposition 1.3 and its proof, pp. 10–11; Remark 1.7, p. 12. `](https://davidrydh.se/papers/perfect_stacks20170706.pdf)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $X$ be any qcqs $k$-scheme over a field, and let $0\to V^{\prime}\xrightarrow{i}V\xrightarrow{p}V^{\prime\prime}\to0$ be an exact sequence of constant-rank finite locally free sheaves. Then $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. If $V$ has a filtration by subbundles with line quotients $L_s$, then $c_t(V)=\prod_{s=1}^r(1+c_1(L_s)t)$. Here the filtration means a finite sequence $0=V_0\subset V_1\subset\cdots\subset V_r=V$, where $r=\operatorname{rk}V$, each $V_s$ and $V/V_s$ is finite locally free, and $L_s=V_s/V_{s-1}$ is a line bundle. The empty filtration is allowed for rank zero. These refer to the supplied projective-relation classes, not to an assumed Chern polynomial of a K-zero equality.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of the supplied model, orientation, Chern-class and derived-enhancement constructions in [F2] and [F4], used in steps 1.1–2.1. The universes are separate standing assumptions; their existence is not inferred from Choice. The finite cone calculation introduces no additional choice requirement.

[F1] [thm-author-32887006bdff-non-a1-whitney-input](item-thm-author-32887006bdff-non-a1-whitney-input) supplies the filtered and fiber-sequence identities under the model hypotheses in [F2]. Its native smooth site, vector bundles, motivic spectra, orientation and PBF conventions are fixed by [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework).

[F2] For a field $k$, qcqs $k$-base $S$ and smooth qcqs $Y/S$, under [A1], [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) supplies the actual homotopy-commutative non-A¹ motivic ring spectrum and its product-preserving diagonal identifications. [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supplies its linear orientation and actual class-power projective-bundle formula. [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison) identifies the resulting projective-relation classes with the supplied motivic Chern classes. The polynomial $c_t$, its first line class, invariance under bundle isomorphism, the rank-zero series $1$ and zero coefficients above rank are prescribed by [def-motivic-chern-classes](item-def-motivic-chern-classes).

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) fixes qcqs; being a $k$-scheme means having a specified structural morphism to $\operatorname{Spec}k$. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) fixes finite locally free sheaves, rank and line bundles, and supplies their quasi-coherence and the fact that a rank-zero sheaf is zero. [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves) fixes sheaf exactness as equality of image and kernel sheaves, including injectivity and sheaf-surjectivity at the ends. The displayed finite filtration is the increasing-subobject filtration of [math:def-increasing-and-decreasing-filtration-of-an-object](https://alphabetamath.cc/item/def-increasing-and-decreasing-filtration-of-an-object), extended by zero below index zero and by $V$ above index $r$; the additional bundle and quotient conditions are explicit in the Statement.

[F4] Under [A1], [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the stable infinity-localization $\mathcal D(X)$ of cochain complexes of Zariski $\mathcal O_X$-modules at quasi-isomorphisms, with cohomology sheaves $H^n=\ker d^n/\operatorname{im}d^{n-1}$. For a cochain map $f:A\to B$, its cone has $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ and differential $d(b,a)=(d_Bb+fa,-d_Aa)$, and its canonical square represents the cofiber. Stable means that such a pushout square is also a pullback square. A sheaf $M[0]$ denotes its complex concentrated in degree zero.

[F5] Reference 1 identifies the full subcategory $\mathcal D_{\rm qc}(X)\subset\mathcal D(X)$ on quasi-coherent cohomology with the source-native stable quasi-coherent category of the discrete derived scheme associated to $X$, taking $M[0]$ to the corresponding module sheaf. Thus an identified cone square transfers to the native category. This is an explicit imported comparison, not an identification with $D(\operatorname{QCoh}(X))$.

## External input
Reference 0 supplies the source theorem through [F1]; its geometric splitting argument is imported. Reference 1 supplies only the classical/spectral comparison in [F5]. The cone calculation and the application below are local arguments, not reconstructions of these inputs.

## Proof
**Given:** A field $k$, qcqs $X/k$, the exact sequence or finite filtration in the Statement, and [A1].

**Goal:** Verify the source hypotheses and transport both identities to the supplied classes.

1.1 Set $S=Y=X$, viewing $X$ as its discrete derived scheme by [F5]. The identity is smooth and qcqs, so it is an object of the native site in [F1]. The model in [F2] applies to this qcqs $k$-base and this identity test object. Its homotopy-commutative ring spectrum, linear orientation and actual PBF meet the hypotheses of [F1]. The product-preserving identifications and relation comparison in [F2] identify the source Chern polynomials with the supplied ones. This uses no smoothness of $X$ over $k$ and retains the separate local rank-zero convention. [A1, F1, F2, F3, F5, construct]

2.1 Embed $i$ and $p$ as degree-zero cochain maps by [F4]. The cone $C=\operatorname{Cone}(i)$ has $C^{-1}=V^{\prime}$, $C^0=V$, differential $i$, and no other nonzero terms. The chain map $q:C\to V^{\prime\prime}[0]$ is $p$ in degree zero and zero elsewhere; it exists because $pi=0$. Exactness in [F3] gives $H^{-1}(C)=0$ and $H^0(q):\operatorname{coker}i\xrightarrow{\sim}V^{\prime\prime}$, with all other cohomology zero. Hence $q$ is a global quasi-isomorphism. Replacing $C$ by $V^{\prime\prime}[0]$ in its cofiber square gives the original maps $i,p$ with the zero-composite nullhomotopy. All vertices have quasi-coherent cohomology by [F3], so this square is also a pushout in the full subcategory $\mathcal D_{\rm qc}(X)$: its mapping-space universal property restricts to every object there. By [F5] it is a pushout, hence a pullback, in the native stable quasi-coherent category. Thus these actual bundles form the required fiber sequence. If any term is zero, exactness and $c_t(0)=1$, together with isomorphism invariance in [F2], give Whitney directly. Otherwise all ranks are positive, so apply [F1](iii) and step 1.1. For a nonempty filtration apply [F1](ii) to its specified subbundles and line quotients, and transport by step 1.1; for the empty filtration both the empty product and $c_t(0)$ are $1$. This proves both formulas, including rank zero. [A1, F1, F2, F3, F4, F5, step 1.1] ∎
