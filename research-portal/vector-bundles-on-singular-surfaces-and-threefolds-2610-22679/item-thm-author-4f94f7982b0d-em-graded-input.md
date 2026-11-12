---
title: External actual EM graded algebra, Picard class and complex PBF
status: published
research_item: thm-author-4f94f7982b0d-em-graded-input
dependency_level: 17
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Lemma 5.1 and its proof, Definition 5.2, equation (5.2) and Theorem
        5.3, printed pp. 33–34; component maps, line convention, Theorem
        5.24(1)–(2) and its proof, printed pp. 43–44.
      statement: The natural complex-valued Chern map and its actual cup-product
        components give the projective-space and positive-rank projective-bundle
        equivalences on qcqs prime-field schemes.
      hypotheses: F is Q or F_p; Y is a qcqs F-scheme; j is nonnegative;
        projective-space dimension is nonnegative; a bundle has finite positive
        constant rank. Negative weights are zero. The source projectivization
        classifies line subbundles; use the declared dual-convention supplier
        for quotient bundles.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the versioned primary PDF extraction of the full Lemma 5.1
        proof, Definition 5.2, equation (5.2), its zero-negative-weight
        convention, Theorem 5.3 statement, the component and line-convention
        paragraph, and the complete Theorem 5.24 statement and proof. Also read
        Appendix B.1 footnote 17 on printed p. 65 as a check on the Picard-space
        model; its Zariski model is not silently substituted for the Nisnevich
        model proved locally here. No new page-image inspection or
        reconstruction of the trace, syntomic, blowup, Day-convolution or
        descent foundations is claimed. The coherent multiplication and
        coefficient identification are used through the exact existing local
        suppliers. This maintenance pass read the current consumer and declared
        supplier interfaces; it claims no fresh primary-source or page-image
        reading and no independent acceptance."
    - title: Stefan Schwede and Brooke Shipley, Stable model categories are categories
        of modules
      url: https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf
      locator: Appendix B.1, construction of W and HC immediately before (B.1.9),
        equation (B.1.9), Remark B.1.10 and Theorem B.1.11, printed pp. 38–40.
      statement: For an abelian-group chain complex D, W(D) is the Dold–Kan model of
        its connective truncation; (HD)_n=W(D[n]) is an Omega-spectrum, so W(D)
        models its infinite-loop space. The construction is functorial and sends
        quasi-isomorphisms to stable equivalences.
      hypotheses: Use the one-object ringoid with endomorphism ring Z, arbitrary
        unbounded complexes of abelian groups, and the underlying ordinary
        spectra of the naive module construction. Reverse cochain grading as
        D_n=C^{-n}. Only underlying spaces and maps are imported, not a strictly
        commutative monoidal realization.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the PDF extraction from the definition (WC)_k=Hom(N
        Delta[k],C) through (B.1.9), the explicit warning in Remark B.1.10,
        Theorem B.1.11 and its opening proof through preservation of
        quasi-isomorphisms. The full Quillen-equivalence proof and the monoidal
        model comparisons were not reconstructed. This supplies the
        complex-to-space model only; the EM commutative graded products are
        taken from their declared supplier. This maintenance pass read the
        current consumer and declared supplier interfaces; it claims no fresh
        primary-source or page-image reading and no independent acceptance."
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)
- [thm-author-79117e1d72ed-em-complex-pbf](item-thm-author-79117e1d72ed-em-complex-pbf)
- [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions)
- [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)
- [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)
- [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv v1) · Lemma 5.1 and its proof, Definition 5.2, equation (5.2) and Theorem 5.3, printed pp. 33–34; component maps, line convention, Theorem 5.24(1)–(2) and its proof, printed pp. 43–44. `](https://arxiv.org/pdf/2309.08463v1)
- [` Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules · Appendix B.1, construction of W and HC immediately before (B.1.9), equation (B.1.9), Remark B.1.10 and Theorem B.1.11, printed pp. 38–40. `](https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf)


## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$, large enough for the scheme sites and supplied constructions. Let $F=\mathbb Q$ or $\mathbb F_p$, with $p$ prime. All schemes in the following assertions are quasi-compact and quasi-separated (qcqs) over $F$. Write $C_n(Y)=\mathbb Z(n)_{\rm mot}(Y)$ and $A_n(Y)=C_n(Y)[2n]$, with the underlying Eilenberg–Mac Lane spectra understood. The $A_n$ form the actual natural unital commutative graded algebra in spectra supplied by EM; set $C_n=A_n=0$ for $n<0$. A commutative graded algebra here includes coherent associative, symmetric and unital products $A_n\wedge A_m\to A_{n+m}$ and unit $\mathbb S\to A_0$.

For a scheme $Y$, let $\mathcal{Pic}(Y)$ be the nerve of the groupoid whose objects are invertible $\mathcal O_Y$-modules and whose arrows are their module isomorphisms. The nerve has strings of $q$ composable arrows as its $q$-simplices. Pullback gives this space its contravariant functoriality, and its basepoint is the trivial line $\mathcal O_Y$. On the small Nisnevich site let $G_Y=\mathbb G_m$ be the abelian sheaf $T\mapsto\Gamma(T,\mathcal O_T)^\times$. There is a natural pointed equivalence
$$\mathcal{Pic}(Y)\simeq\Omega^\infty\bigl(R\Gamma_{\rm Nis}(Y,G_Y)[1]\bigr).$$
For a cochain complex $D$, the notation $\Omega^\infty D$ means the infinite-loop space of its Eilenberg–Mac Lane spectrum, modeled by Dold–Kan applied to $(\tau^{\leq0}D)^{-\bullet}$. Here the good truncation has $\ker(d_D^0)$ in degree zero, agrees with $D$ in negative degrees and is zero in positive degrees. The cochain convention is $D[t]^q=D^{q+t}$ with differential $(-1)^t d_D$; the basepoint in the Dold–Kan model is zero. Thus the displayed equivalence retains both line bundles and their automorphisms; it does not identify this space with the discrete group $\operatorname{Pic}(Y)$.

The actual EM map of Lemma 5.1/Definition 5.2 is
$$c_1:R\Gamma_{\rm Nis}(Y,G_Y)[-1]\longrightarrow C_1(Y).$$
Shifting this map by two and taking $\Omega^\infty$, composed with the displayed pointed equivalence, defines the natural pointed map $\widetilde c_1:\mathcal{Pic}\to\Omega^\infty A_1$. Its map on components is EM's first Chern map. On $\mathbb P^1_Y$ take homogeneous coordinates $[X_0:X_1]$, the infinity section $\infty=[1:0]$, and the trivialization $\infty^*\mathcal O(1)\simeq\mathcal O_Y$ induced by the nonvanishing section $X_0$. Applying $\widetilde c_1$ to this line and its specified trivialization gives a point
$$b_Y\in\operatorname{fib}\bigl(\Omega^\infty A_1(\mathbb P^1_Y)\xrightarrow{\infty^*}\Omega^\infty A_1(Y)\bigr).$$
The fiber is the homotopy pullback over zero, so its point includes the path from the restricted class to zero. Equivalently, on the smooth qcqs site over a base this is a pointed map $(\mathbb P^1,\infty)\to\Omega^\infty A_1$, or its spectral adjoint $\Sigma^\infty(\mathbb P^1,\infty)\to A_1$. Its underlying absolute class is precisely $c_1(\mathcal O(1))$.

For every integer $j$ and $d\geq0$, pullback and the powers of this same EM class give the actual complex equivalence
$$\bigoplus_{m=0}^{d}C_{j-m}(Y)[-2m]\xrightarrow{\ \sum_m c_1(\mathcal O(1))^m\pi^*\ }C_j(\mathbb P^d_Y).$$
For $j<0$ both sides are zero. More generally, for a finite locally free $E$ of constant rank $r>0$, the same map with $0\leq m<r$ is an equivalence on the quotient projective bundle $\mathbb P_Y(E)=\operatorname{Proj}_Y\operatorname{Sym}(E)$, with its tautological quotient line $\mathcal O(1)$. EM's line-subbundle convention is converted by $\mathbb P_Y(E)\simeq P_Y^{\rm lin}(E^\vee)$, preserving $\mathcal O(1)$ and its Chern class.

For any field $k$ and qcqs classical $S/k$, define $\mathrm{Sm}^{\rm qcqs}_S$ to have smooth morphisms $Y\to S$ whose underlying schemes $Y$ are qcqs, and all $S$-morphisms between them; use its Zariski topology and the stipulated size bounds. All the structures above restrict naturally to this category by forgetting to schemes over the prime subfield of $k$.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)

[thm-author-79117e1d72ed-em-complex-pbf](item-thm-author-79117e1d72ed-em-complex-pbf)

[lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input)

[lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)

[lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions)

[lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)

[math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

## Facts & Assumptions
**Given:** The schemes, ranks, weights, Choice premise and compatible universe bounds of the Statement.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify the assumptions. They are retained in the injective-resolution and descent inputs and in the projective-bundle constructions. Universe existence is a standing size assumption, not a consequence asserted from Choice.

[F1] [def-motivic-cohomology](item-def-motivic-cohomology) fixes the actual nonnegative coefficient functor. [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1) supplies its coherent graded multiplication, zero negative weights and the actual complex-valued Chern map. [thm-author-79117e1d72ed-em-complex-pbf](item-thm-author-79117e1d72ed-em-complex-pbf) supplies the complex-level projective bundle equivalence with these component maps. [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions) supplies the base-change-compatible quotient conversion and qcqs total spaces. [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) records the resulting group-level oriented-theory contract; it is not used to infer a space-level Picard comparison.

[F2] [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) specifies the small Nisnevich site. [def-derived-sections-on-sites](item-def-derived-sections-on-sites) supplies derived evaluation, its nonnegative injective resolution for $G_Y[0]$ and its independence of resolution. [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input) supplies the classification of abelian-sheaf torsors and its inverse by local lifts in an injective embedding. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) identifies the frame-torsor and line-bundle classes, with inverse by descent. [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions) supplies the frame sheaf and its transition units; [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input) supplies effective and fully faithful module descent for the covering families used there.

[F3] [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules) supplies normalization and its inverse for nonnegative complexes of abelian groups. Reference 1 imports the Eilenberg–Mac Lane realization whose zero space is the Dold–Kan connective truncation. This is used only for the underlying spaces and maps; the coherent commutative multiplication comes from [F1], not from a strictly commutative Alexander–Whitney model. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) specifies spaces, spectra, pointed mapping spaces, homotopy limits and the pointed suspension-spectrum adjunction.

[F4] The formulation interfaces are [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf), [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank), [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) and [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme). [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) supplies the prime subfield used for restriction. The groupoid, its nerve, good truncation, cochain shift and the homotopy-fiber class are specified inline above.

## External input
Reference 0 records the actual complex Chern map, its class-power components and the projective bundle theorem. These established results and the EM multiplication are used through the exact suppliers in [F1]; their deep proofs are imported. Reference 1 supplies only the complex-to-space realization in [F3], with the hypotheses and reading limits recorded there. The local argument below constructs the Picard-space comparison and applies these supplied maps. No $\mathbb A^1$-invariance is assumed.

## Proof

**Goal:** Establish the statement under its stated hypotheses.
**Given:** [A1] and the data and supplier interfaces [F1]–[F4].

1.1 Resolve $G=G_Y$ by $0\to G\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ as in [F2], and set $Q=I^0/G\cong\ker d^1$ as sheaves. Let $\mathcal C_I$ have objects $q\in Q(Y)$ and arrows $q\to r$ the elements $a\in I^0(Y)$ with $r=q+d^0a$, composed by addition. For each $q$, the sheaf $P_q$ of local lifts of $q$ in $I^0$ is a $G$-torsor. Translation by $a$ gives an equivariant isomorphism $P_q\to P_r$. Conversely, if $\varphi:P_q\to P_r$ is equivariant, choose lifts $s$ locally and form $\varphi(s)-s$. This is unchanged when $s$ is translated by $G$, hence the local differences agree on overlaps and glue to a unique $a\in I^0(Y)$, with $d^0a=r-q$. Thus $\mathcal C_I\to\operatorname{Tors}_G$ is fully faithful; essential surjectivity is the explicit local-lift inverse of the classification in [F2]. Frames give an equivalence from the line-bundle groupoid to $\operatorname{Tors}_G$: essential surjectivity is the frame-descent inverse in [F2], while an equivariant map of frames is locally multiplication by the unique transition unit and therefore gives a unique module isomorphism by fully faithful descent. The nerve of $\mathcal C_I$ has $q$-simplices $Q(Y)\times I^0(Y)^q$ and its normalized complex is $I^0(Y)\to Q(Y)$ in homological degrees one and zero. With the degree-one sign adjusted to the stated cochain-shift convention, this is $(\tau^{\leq0}(I^\bullet(Y)[1]))^{-\bullet}$. By [F3] its nerve models $\Omega^\infty R\Gamma_{\rm Nis}(Y,G)[1]$. The object $q=0$ gives the trivial torsor with its distinguished zero lift, hence the trivial line. For two resolutions $I,J$, comparison maps extending the identity of $G$ are constructed degreewise: extend $G\to J^0$ across $G\hookrightarrow I^0$ by injectivity, then factor each differential through its image and extend into the next injective term. The same induction constructs a homotopy between two comparison maps: after the lower-degree homotopy components are fixed, their residual difference vanishes on the next kernel, so it factors through the next image and extends into the required injective term. If $h$ compares $f$ and $g$, then $h^1(q)$ is precisely the translation arrow comparing their images of $q$; the homotopy equation gives compatibility on arrows. Hence the lift-torsor equivalence agrees with the resolution-independent derived value of [F2], including its natural comparison isomorphisms. Pulling back frames and lift torsors gives this same comparison for the natural derived-unit pullbacks in [F1]; their identity and composition comparisons agree on every local lift and therefore globally by the full faithfulness just proved. This is an equivalence of pointed presheaves, retaining units as automorphisms rather than selecting representatives from $H^1$. [A1, F1, F2, F3, F4, construct]

2.1 Use [F1] for the actual graded algebra and complex Chern map. Shift the latter by two and apply [F3] to it, composing with step 1.1; the trivial line maps to zero with the specified pointing. The coordinate section $X_0$ is a frame of $\mathcal O(1)$ on its nonvanishing chart and restricts to the stated trivialization at infinity by [F4]. The corresponding arrow to the trivial line is a path in the Picard nerve; its image supplies the path to zero in the displayed homotopy fiber. This constructs $b_Y$ with the claimed absolute class, naturally in $Y$. The adjoint is furnished by the pointed adjunction in [F3]. For $j\geq0$ the complex equivalences, including $d=1$, are precisely those of [F1], with this same absolute Chern class and multiplication. The supplied dual-convention isomorphism preserves the tautological line; naturality of the complex Chern map therefore preserves the class-power maps themselves under this conversion. For $j<0$, every $j-m<0$, so the asserted extension is the zero-to-zero equivalence. The group-level contract in [F1] is consequently retained. Finally a field has the prime subfield of [F4]; forgetting to it preserves the stipulated underlying qcqs schemes. Restrict all the functors and maps to the explicitly bounded smooth site, whose objects therefore remain in the imported domain even when $S$ is singular. This proves all assertions without extending the theory to non-qcqs smooth schemes or replacing its products. [A1, F1, F3, F4, step 1.1] ∎
