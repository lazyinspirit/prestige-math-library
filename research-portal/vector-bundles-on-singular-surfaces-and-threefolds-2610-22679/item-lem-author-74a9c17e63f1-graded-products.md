---
title: The product on graded motivic groups is the source cup product
status: published
research_item: lem-author-74a9c17e63f1-graded-products
dependency_level: 17
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.2, printed pp. 11–12, especially the monoidal paragraph on p.
        12; Definition 4.9 and Theorem 4.10(1), p. 21; Definition 4.23, pp.
        27–28, and Theorem 4.24(1), p. 28.
      statement: Associated graded is strong symmetric monoidal for the decreasing Day
        category. The motivic filtration is the specified pullback in filtered
        E-infinity algebras, and its motivic complexes are the actual graded
        spectra shifted by minus twice the weight; negative weights vanish.
      hypotheses: A stable presentably symmetric monoidal target for Section 2.2,
        specialized to spectra by the declared multiplicative interface. Qcqs
        Q-schemes or F_p-schemes for the motivic constructions. The local
        filtration and complex suppliers specify their common restriction to the
        standing field. No finite valuative dimension or convergence assumption
        is used here.
      reading_limits: Read the versioned primary PDF extraction at the
        decreasing-filtration and monoidal paragraphs of Section 2.2, the two
        definitions and their shifted-graded formulas, and the listed
        negative-weight clauses. These check the source product used through the
        declared suppliers. The trace, descent, categorical foundations and
        derived-realization equivalence are imported through those suppliers;
        their deeper proofs were not reconstructed. No fresh reading of the
        original article PDF or its defect reports is claimed.
    - title: Bastiaan Cnossen, Stable Homotopy Theory and Higher Algebra
      url: https://bastiaancnossen.com/notes/stable-homotopy-higher-algebra/section/day-convolution-and-the-tensor-product-of-spectra/the-symmetric-monoidal-structure-on-sp/index.html
      locator: Section 16.6.2, Definition 16.6.6 and Observation 16.6.7 with its
        explanation; Theorem 16.6.1 for the ambient spectra model; linked
        Warning 4.2.11. HTML revision 6 November 2026.
      statement: Integer homotopy groups have natural bilinear smash pairings
        compatible with associativity and the sphere unit. Interchanging
        homotopy classes of degrees u and v introduces (-1)^(uv), including
        negative integers.
      hypotheses: Arbitrary spectra in the ordinary symmetric monoidal
        infinity-category of spectra under smash, with all integer suspension
        shifts. The reduced-excisive-functor model and sphere-unit
        colimit-preserving smash agree with the declared stable interface.
        Retain its Choice and compatible size assumptions. No connectivity or
        sequential-prespectrum multiplication hypothesis.
      reading_limits: Freshly read the primary author HTML at Section 16.6, including
        its reduced-excisive-functor setup, Theorem 16.6.1, Definition 16.6.6
        and the entire explanation of Observation 16.6.7; also read linked
        Warning 4.2.11. Checked the all-integer scope and its application to the
        declared spectra category. Use this established input through the
        existing spectral-pairing supplier. Earlier stabilization and monoidal
        foundations were not reconstructed; no monoidal comparison with
        sequential prespectra is asserted.
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison)
- [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)
- [thm-adjudicate-ff468282ce0d-spectral-pairing-sign](item-thm-adjudicate-ff468282ce0d-spectral-pairing-sign)
- [math:thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product](https://alphabetamath.cc/item/thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Section 2.2, printed pp. 11–12, especially the monoidal paragraph on p. 12; Definition 4.9 and Theorem 4.10(1), p. 21; Definition 4.23, pp. 27–28, and Theorem 4.24(1), p. 28. `](https://arxiv.org/pdf/2309.08463v1)
- [` Bastiaan Cnossen, Stable Homotopy Theory and Higher Algebra · Section 16.6.2, Definition 16.6.6 and Observation 16.6.7 with its explanation; Theorem 16.6.1 for the ambient spectra model; linked Warning 4.2.11. HTML revision 6 November 2026. `](https://bastiaancnossen.com/notes/stable-homotopy-higher-algebra/section/day-convolution-and-the-tensor-product-of-spectra/the-symmetric-monoidal-structure-on-sp/index.html)


## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be the standing field and $X$ a quasi-compact quasi-separated $k$-scheme. Use the integer-indexed motivic filtration, restricted from the prime field of $k$ and extended constantly in nonpositive stages. For each integer $r$, write
$$Q_r=\operatorname{gr}^rF_{\mathrm{mot}}K(X)=\operatorname{cofib}(F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X)).$$
Under the actual source graded comparison, write the page-2 groups as
$$E_2^{a,b}=\pi_{-a-b}Q_{-b}\cong H^{a-b,-b}_{\mathrm{mot}}(X,\mathbb Z),$$
where a negative-weight motivic group is explicitly defined to be zero, in agreement with the zero negative graded spectra. Here $\pi_n$ denotes spectral homotopy in degree $n$.

For all integers $a,b,c,e$, the filtered multiplication induces the source cup product
$$E_2^{a,b}\otimes_{\mathbb Z}E_2^{c,e}\longrightarrow E_2^{a+c,b+e},$$
corresponding to the motivic product of degree/weight $(a-b,-b)$ and $(c-e,-e)$. The tensor is the ordinary tensor product of abelian groups. These products are associative and unital, with unit in $E_2^{0,0}$. For $x\in E_2^{a,b}$ and $y\in E_2^{c,e}$ their commutativity law is $xy=(-1)^{(a+b)(c+e)}yx$, equivalently $xy=(-1)^{(a-b)(c-e)}yx$.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible size conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface) and the supplied filtration and complex constructions. These retain the foundational hypotheses at each supplier application; no choice-free reconstruction of the imported foundations is claimed.

**Given:** These assumptions, the standing field $k$, a qcqs $k$-scheme $X$, all integer indices, and the actual filtered algebra with its source-induced graded algebra.

**Goal:** Identify the page-2 products and their laws using the actual multiplication and comparison maps.

[F1] [def-motivic-filtration](item-def-motivic-filtration) supplies the actual coherent multiplicative tower on the stated scheme category, including its restriction from the prime field and constant nonpositive extension. [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies the associated graded products $\overline\mu_{r,t}:Q_r\wedge Q_t\to Q_{r+t}$, their coherent associativity, symmetry and unit, and the ordinary interchange of weight indices in graded Day convolution. [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) identifies their transport with the specified source motivic products and supplies this same product on the initial tower page.

[F2] [def-motivic-cohomology](item-def-motivic-cohomology) defines the motivic complexes and their cohomology. [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison) supplies the actual natural comparisons $\gamma_r:Q_r\simeq\mathcal U(M_r(X)[2r])$, where $M_r(X)=\mathbb Z(r)_{\mathrm{mot}}(X)$ for $r\geq0$ and $M_r(X)=0$ for $r<0$, and $\mathcal U$ is that supplier's exact derived-to-spectrum realization. This includes the zero negative graded terms. [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation) identifies $E_2^{a,b}=\pi_{-a-b}Q_{-b}$ with the displayed motivic group through these actual maps. In particular, $\pi_n Q_r\cong H^{2r-n}(M_r(X))$; no equivalence is selected merely from matching homotopy groups.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines the smash product, sphere unit, integer suspension, spectral homotopy groups and induced maps in the same symmetric monoidal category. [thm-adjudicate-ff468282ce0d-spectral-pairing-sign](item-thm-adjudicate-ff468282ce0d-spectral-pairing-sign) supplies natural bilinear smash pairings $\pi_u(E)\times\pi_v(F)\to\pi_{u+v}(E\wedge F)$, their associativity and unit compatibility, and $\tau_*(x\wedge y)=(-1)^{uv}(y\wedge x)$ for every pair of integers, including negative degrees. Its primary source is reference 1.

[F4] [math:thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product](https://alphabetamath.cc/item/thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product) supplies the ordinary tensor product of abelian groups and the bijection between bilinear maps $A\times B\to C$ and homomorphisms $A\otimes_{\mathbb Z}B\to C$. Spectral homotopy groups are abelian by [F3], so it applies to the pairings here.

## External input
The monoidality and actual source graded product in [F1] are imported through the declared suppliers from reference 0. The integer-degree smash pairing and symmetry law in [F3] are imported through the declared spectral-pairing supplier from reference 1. Their precise hypotheses and reading limits are recorded in the references. The transport, page indexing application and parity calculation below are local; no local proof of these imported foundations is claimed.

## Proof
1.1 Under [A1], evaluate the common prime-field restrictions of [F1]–[F2] at $X$. The associated graded multiplication gives actual maps $\overline\mu_{r,t}:Q_r\wedge Q_t\to Q_{r+t}$. Transport them along $\gamma_r,\gamma_t,\gamma_{r+t}$ of [F2]. By [F1] these transported maps are precisely the specified source products on the realized shifted motivic complexes. By [F3], smashing representatives and composing with $\overline\mu_{r,t}$ gives a well-defined bilinear pairing on homotopy groups; [F4] gives its unique tensor-product homomorphism. Put $r=-b$, $t=-e$, $n=-a-b$ and $m=-c-e$. Its target is $\pi_{n+m}Q_{r+t}=E_2^{a+c,b+e}$ by [F2], with weight $r+t=-b-e$ and cohomological degree $2(r+t)-(n+m)=a-b+c-e$. The input degrees are $2r-n=a-b$ and $2t-m=c-e$. Thus the maps have exactly the claimed motivic labels and source product. If an input weight is negative, its spectrum and group are zero by [F2], and the same bilinear construction is the zero pairing. [A1, F1, F2, F3, F4, algebra]

2.1 The coherent symmetry in [F1] identifies $\overline\mu_{r,t}$ with $\overline\mu_{t,r}\circ\tau$; interchanging the weight indices itself adds no sign. Apply the all-integer homotopy symmetry law of [F3] to degrees $n=-a-b$ and $m=-c-e$ from step 1.1. It gives $xy=(-1)^{nm}yx=(-1)^{(a+b)(c+e)}yx$. Since $a+b-(a-b)=2b$ and $c+e-(c-e)=2e$ are even, this is $(-1)^{(a-b)(c-e)}$. Equivalently, the motivic shifts $2r,2t$ are even. Associativity and the unit compatibility in [F3] applied to the actual graded algebra of [F1] give the associative products of step 1.1 and the unit represented by $\mathbb S\to Q_0$ in $\pi_0Q_0=E_2^{0,0}$. Transport along the same source comparisons preserves these laws. They also hold when a factor is zero. This proves the stated source cup products and their laws without a convergence assumption. [A1, F1, F2, F3, step 1.1, algebra] ∎
