---
title: Canonical comparison and restriction from the prime field
status: published
research_item: lem-adjudicate-fe422e116ac9-canonical-comparison-restriction
dependency_level: 12
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening, printed p.3 (PDF index 2); Section 2.1, printed
        p.11 (index 10); Section 3.3, (3.4)-(3.5), printed p.14 (index 13), and
        Theorem 3.5(3), printed p.15 (index 14); Theorem 4.33(1) and its full
        proof, printed p.31 (index 30).
      statement: The prime-field comparison of Theorem 4.33(1) is constructed by the
        motivic-to-cdh map, the Theorem 3.5(3) equivalence, and the canonical
        truncation-induced map to full etale sections. Ordinary source
        sheafification is on qcqs schemes.
      hypotheses: F is Q or F_q for a prime q; j >= 0; the positive coefficient
        integer is invertible in F; schemes are qcqs over F. Use the stated
        source functors and cdh topology.
      reading_limits: Freshly read the versioned primary PDF extraction at Theorem 1.1
        opening, section 2.1, section 3.3 through Theorem 3.5(3), and Theorem
        4.33(1) with its complete proof. Import the qcqs prime-field domain,
        ordinary stable-valued source sheafification and actual map
        construction. Use the explicit declared suppliers for the derived
        framework, comparisons and descent. No fiber/cofiber range is inferred
        from the proof sentence. Antecedent motivic and descent proofs were not
        reconstructed. No visual PDF inspection is claimed. Choice and
        compatible universe assumptions are inherited local premises.
    - title: Elden Elmanto, Zero cycles on singular varieties (joint work with Matthew
        Morrow), Oberwolfach Report 36/2025
      url: https://ems.press/content/serial-article-files/52244
      locator: Theorem 3 opening and part (1), with footnote 1, printed p.1994 (PDF
        index 45); Theorem 4 and its complete proof, especially the first,
        invertible-prime paragraph, printed p.1995 (PDF index 46).
      statement: Theorem 4 gives the top-weight comparison equivalence for finite-type
        schemes over an algebraically closed field. Its invertible-prime proof
        separately establishes that the cdh localization of tau^{>j} RΓ_et(-,
        F_p) vanishes at such X when j >= dim(X), using dimension-controlled cdh
        refinements and affine Artin vanishing. Theorem 3(1) states an under-map
        equivalence for algebraic varieties; footnote 1 identifies the
        invertible-prime target with Tate-twisted etale cohomology.
      hypotheses: "For Theorem 4 and its first proof paragraph: k algebraically
        closed; X any finite-type k-scheme in the recalled EM theory; p prime
        and invertible in k; j >= 0 and j >= dim(X). No reducedness or
        separatedness hypothesis is imposed. Theorem 3(1) is used only for
        algebraic varieties in its stated domain. The localization is that of
        the EM source theory. The Tate twist is trivializable over algebraically
        closed k."
      reading_limits: Freshly read the primary PDF extraction at both theorem
        statements, footnote 1, and the complete proof of Theorem 4. Import its
        explicit localized high-degree vanishing argument on the stated
        finite-type range, as well as the comparison equivalence. The report
        writes the vanishing argument with constant F_p coefficients; the local
        application transfers this vanishing along a coefficient trivialization
        over X. The EM source localization is fixed by reference 0 and the
        declared qcqs-site and factorization suppliers. Do not extend Theorem
        3(1) to arbitrary finite-type schemes or import an identification rho =
        theta alpha. The rho in this item is instead constructed after proving
        epsilon invertible. Dimension-controlled cdh refinements and Artin
        vanishing are substantial imported inputs; neither their antecedent
        sources nor the characteristic-prime ingredients were checked or
        reconstructed. No visual PDF inspection or independent acceptance is
        claimed.
    - title: "The Stacks Project, Sites and Sheaves, section 7.25: Localization"
      url: https://stacks.math.columbia.edu/tag/00XZ
      locator: Section 7.25 opening and Definition 7.25.1; proof of Lemma 7.25.4 at
        the first sheafification square, and footnote 1.
      statement: For a site C and object U, C/U has the inherited covering families;
        restriction of a sheaf is evaluation on the underlying object. Covering
        categories over (Y to U) in C/U and over Y in C are canonically
        identified. This identifies the plus constructions and yields
        commutation of ordinary set-valued sheafification with slice
        restriction.
      hypotheses: C is a site and U is an object; use the induced topology on C/U. No
        subcanonical hypothesis is needed for these assertions.
      reading_limits: Read the section opening, Definition 7.25.1, and the proof of
        Lemma 7.25.4 including its sheafification square and footnote 1 in the
        live primary source for this repair. Import only the inherited slice
        topology and restriction convention, and retain the set-valued scope of
        its sheafification argument. The ordinary D(Z)-valued restriction
        calculation is a new local proof in step 1.1, using F2, F3, F8 and F9;
        no stable or hypercomplete comparison is attributed to this passage.
---

PDF p. 6: Proposition 2.6 proof: canonical comparison factorization

## Prerequisites

- [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison)
- [lem-author-e71ff76fe904-comparison-composite](item-lem-author-e71ff76fe904-comparison-composite)
- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-e71ff76fe904-finite-quotient-comparison](item-lem-author-e71ff76fe904-finite-quotient-comparison)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [lem-adjudicate-e4768ff43a65-ordinary-localization-exactness](item-lem-adjudicate-e4768ff43a65-ordinary-localization-exactness)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:lem-base-change-quasi-compact-morphisms](https://alphabetamath.cc/item/lem-base-change-quasi-compact-morphisms)
- [math:lem-diagonal-quasi-compact-iff-quasi-separated](https://alphabetamath.cc/item/lem-diagonal-quasi-compact-iff-quasi-separated)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Theorem 1.1 opening, printed p.3 (PDF index 2); Section 2.1, printed p.11 (index 10); Section 3.3, (3.4)-(3.5), printed p.14 (index 13), and Theorem 3.5(3), printed p.15 (index 14); Theorem 4.33(1) and its full proof, printed p.31 (index 30). `](https://arxiv.org/pdf/2309.08463v1)
- [` Elden Elmanto, Zero cycles on singular varieties (joint work with Matthew Morrow), Oberwolfach Report 36/2025 · Theorem 3 opening and part (1), with footnote 1, printed p.1994 (PDF index 45); Theorem 4 and its complete proof, especially the first, invertible-prime paragraph, printed p.1995 (PDF index 46). `](https://ems.press/content/serial-article-files/52244)
- [` The Stacks Project, Sites and Sheaves, section 7.25: Localization · Section 7.25 opening and Definition 7.25.1; proof of Lemma 7.25.4 at the first sheafification square, and footnote 1. `](https://stacks.math.columbia.edu/tag/00XZ)


## Statement
Assume the Axiom of Choice and the compatible nested universes and site-size bounds of the supplied source constructions. Let $F=\mathbb Q$ or $F=\mathbb F_q$ for a prime $q$, let $k$ be a field with this specified prime subfield, let $j\geq0$, and let $p$ be a prime invertible in $F$. Work on the entire qcqs $F$-scheme cdh site, with its supplied skeleton and representative convention. Here qcqs means quasi-compact and quasi-separated. All presheaves have the supplied stable derived target $D(\mathbb Z)$, and $L^F_{\mathrm{cdh}}$ denotes ordinary source sheafification, not a new localization on $k$-schemes.

Use the source motivic functor $M_j=\mathbb Z(j)_{\mathrm{mot},F}$, the source cdh complex $\mathbb Z(j)_{\mathrm{cdh},F}$, and $B_j(T)=R\Gamma(T_{\mathrm{et}},\mu_p^{\otimes j})$. The coefficient sheaf $\mu_p$ consists of roots $u^p=1$ in invertible functions on the small étale site, its tensor powers are over $\mathbb Z/p$, and $R\Gamma$ is derived global sections. Write $C/p=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p$ for the objectwise derived quotient, and $\tau^{\leq j}$ for objectwise cohomological truncation. Let $\alpha:M_j/p\to\mathbb Z(j)_{\mathrm{cdh},F}/p$ and $\theta:\mathbb Z(j)_{\mathrm{cdh},F}/p\xrightarrow{\sim}L^F_{\mathrm{cdh}}\tau^{\leq j}B_j$ be the specified source maps. Let $\epsilon:L^F_{\mathrm{cdh}}\tau^{\leq j}B_j\to B_j$ be the adjoint extension of truncation; its composite with the sheafification unit is the truncation map. The supplied cdh descent of $B_j$ makes this extension well-defined.

The canonical comparison $\beta^F:M_j/p\to B_j$ of Elmanto–Morrow Theorem 4.33(1) is the actual composite
$$\beta^F=\epsilon\theta\alpha.$$
For a qcqs $k$-scheme $X$, put $u(X)=r(X_F)$, where $X_F$ has structure map $X\to\operatorname{Spec}k\to\operatorname{Spec}F$ and $r$ is the supplied representative functor. Restriction is defined by precomposition: $u^*P(X)=P(u(X))$, $(u^*P)(f)=P(u(f))$, and $(u^*a)_X=a_{u(X)}$ for a natural transformation $a:P\to Q$. Composites of transformations have componentwise composites. Thus
$$\beta^k=u^*\beta^F,\qquad \beta^k_X=\epsilon_{u(X)}\theta_{u(X)}\alpha_{u(X)}.$$

All equalities after evaluation are equalities of morphisms in the derived category. Write $A_X=M_j(u(X))/p$, $E_X=(L^F_{\mathrm{cdh}}\tau^{\leq j}B_j)(u(X))$ and $\gamma_X=\theta_{u(X)}\alpha_{u(X)}:A_X\to E_X$. Then $\gamma_X$ is an equivalence for every stated qcqs $X/k$. Here an equivalence means an invertible derived morphism.

If $k$ is algebraically closed, $X/k$ is finite type, and $j\geq\dim X$, then $\epsilon_{u(X)}:E_X\to B_j(u(X))$ and $\beta^k_X$ are equivalences. Algebraically closed means that every nonconstant polynomial in $k[t]$ has a root in $k$. Finite type and chain dimension have the top-weight supplier's conventions, including $\dim\varnothing=-\infty$; the finite-type-field supplier puts these schemes in the qcqs domain. No affineness, smoothness, reducedness or separatedness is required.

More precisely, let $t_X:A_X\to B_j(u(X))$ denote the report's top-weight comparison. After proving the preceding equivalence of $\epsilon_{u(X)}$, define $\rho_X=\epsilon_{u(X)}^{-1}t_X:A_X\xrightarrow{\sim}E_X$. This is the unique lift satisfying $t_X=\epsilon_{u(X)}\rho_X$. It is constructed locally on the full stated finite-type domain; no extension of the report's Theorem 3(1) beyond its stated variety domain is assumed. On any object where that theorem supplies an under-map equivalence to this same $E_X$ and canonical right-hand arrow, uniqueness identifies it with this $\rho_X$. Then
$$\epsilon_{u(X)}=t_X\rho_X^{-1},\qquad \beta^k_X=t_X\rho_X^{-1}\gamma_X.$$
Consequently $\beta^k_X=t_X$ if and only if $\rho_X=\gamma_X$. Equality of these two named comparisons is conditional on this additional compatibility; the full equivalence of each is unconditional in the stated top-weight range. Throughout, restriction is precomposition of source objects and maps; there is no new sheafification over $k$ or assertion that sheafification commutes with change of base site.

## Facts & Assumptions
**Given:** The prime field, extension field, nonnegative weight, invertible prime, qcqs objects, Choice and compatible source size bounds in the statement.

**Goal:** Identify and restrict the specified source composite, prove its full top-weight equivalence, and state its exact transport relation to the report comparison.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the inherited skeleton, representative and derived constructions. Retain their compatible nested universes and site-size bounds; existence of those universes is a separate size assumption.

[F1] [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison) supplies the equivalence of the report's actual map $t_X$ for finite-type schemes over an algebraically closed field when $j\geq\dim X$. Its invertible-prime target is the same twisted small-étale complex.

[F2] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies the source derived framework, motivic and cdh objects, coefficient sheaves, derived quotient, truncation, ordinary source sheafification, the actual $\alpha$ and $\theta$, and cdh descent of $B_j$. [lem-author-e71ff76fe904-comparison-composite](item-lem-author-e71ff76fe904-comparison-composite) fixes their actual composite with the adjoint extension $\epsilon$, characterized by its sheafification-unit equation. Its cofiber-range assertion is not used.

[F3] [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies the entire qcqs prime-field site, its compatible size bounds and skeleton, and the representative functor defining $u$. Precomposition and componentwise composition are explicitly defined in the Statement.

[F4] Source reference 0 supplies the EM comparison construction on all qcqs prime-field schemes. Source reference 1, Theorem 4, supplies the top-weight comparison used in [F1]. Its Theorem 3(1) is stated for algebraic varieties; no under-map equivalence on a larger domain is imported from that theorem. Instead [F7] supplies the vanishing used to prove $\epsilon_{u(X)}$ invertible, after which $\rho_X$ is constructed by composition with $t_X$.

[F5] [lem-author-e71ff76fe904-finite-quotient-comparison](item-lem-author-e71ff76fe904-finite-quotient-comparison) proves that the actual $\alpha$ is an equivalence for every positive coefficient integer invertible in $F$, including $p$, on this source site and after restriction. It includes the needed finite-coefficient deduction in characteristic $q$.

[F6] [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) proves that every finite-type $k$-scheme is qcqs, including the empty scheme, without separatedness or reducedness. Composing its structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$ leaves the underlying scheme and its qcqs properties unchanged, as in [F3].

[F7] Source reference 1, the first paragraph of the proof of Theorem 4, proves that $(L^F_{\mathrm{cdh}}\tau^{>j}R\Gamma_{\mathrm{et}}(-,\mathbb F_p))(u(X))=0$ for a finite-type scheme $X$ over an algebraically closed field when $p$ is invertible and $j\geq\dim X$, in the EM source theory recalled there. Here $\tau^{>j}C=\operatorname{cofib}(\tau^{\leq j}C\to C)$. We import that localized vanishing argument, including its dimension-controlled cdh refinement and Artin-vanishing input, rather than deducing it from Theorem 3(1)'s domain. The report suppresses the Tate twist in this vanishing paragraph, with its target convention fixed in footnote 1. To apply it with $B_j$, use [def-etale-tate-coefficients](item-def-etale-tate-coefficients): a chosen primitive $p$th root in $k$ gives a compatible trivialization of $\mu_p^{\otimes j}$ on schemes over $X$. Such a root exists: algebraic closedness splits $T^p-1$, which has distinct roots since $p$ is invertible; for prime $p$, any root other than $1$ has order $p$. Thus the untwisted vanishing argument transfers to these coefficients. The source-site slice at $X$ means objects $Y\to X$, with exactly the covering families inherited from the source site. Source reference 2 supplies this slice convention and the identification of covering/refinement diagrams over each such object. The derived slice compatibility required to transfer this vanishing is proved in step 1.1 using [F9], the covering-descent convention of [F8] and the adjunction of [F2]. In particular, naturally equivalent restrictions of presheaves to the source slice at $u(X)$ have equivalent ordinary source-sheafified values there. Apply this to $\tau^{>j}B_j$ and $\tau^{>j}B_0$, where $B_0(Y)=R\Gamma(Y_{\mathrm{et}},\mathbb F_p)$; the chosen root gives a natural coefficient isomorphism on every $Y\to u(X)$, compatible with all pullbacks, and derived sections and truncation preserve these isomorphisms. This proves $(L^F_{\mathrm{cdh}}\tau^{>j}B_j)(u(X))=0$. This argument uses the inherited source slice and does not identify source localization with a separately chosen $k$-site theory. This choice affects no vanishing assertion or named comparison map. No reducedness or separatedness is used. For the empty scheme both derived sections and sheaf values are zero by descent for its empty cover.

[F8] [lem-adjudicate-e4768ff43a65-ordinary-localization-exactness](item-lem-adjudicate-e4768ff43a65-ordinary-localization-exactness) proves that ordinary stable-valued cdh sheafification and evaluation on the entire qcqs prime-field site preserve cofiber sequences. Its source site, coefficient target, size and Choice assumptions are exactly those of [F2] and [F3]. No hypercompletion comparison is needed.

[F9] [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) supplies scheme products, their universal property and affine tensor-product charts. [math:lem-base-change-quasi-compact-morphisms](https://alphabetamath.cc/item/lem-base-change-quasi-compact-morphisms) supplies base-change stability and composition of quasi-compact morphisms. [math:lem-diagonal-quasi-compact-iff-quasi-separated](https://alphabetamath.cc/item/lem-diagonal-quasi-compact-iff-quasi-separated) identifies quasi-separatedness with quasi-compactness of the relative diagonal. Step 1.1 uses these precise interfaces to put products of qcqs $F$-schemes in the source category. For the slice calculation fix an object $T$ of this category, let $v:\mathcal C_F/T\to\mathcal C_F$ forget the arrow to $T$, and define restriction $s_TP=P\circ v^{\mathrm{op}}$. For a slice presheaf $G$ define $(R_TG)(Y)=G(Y\times_F T\xrightarrow{\operatorname{pr}_T}T)$ and $(R_TG)(h)=G(h\times_F\mathrm{id}_T)$. Products and their maps are transported through the representative functor of [F3]. All presheaves and natural transformations use the coherent derived enhancement of [F2]; mapping spaces, products and descent limits retain the bounds of [F8]. The inherited slice topology is the one in source reference 2. We prove locally that $s_T\dashv R_T$, that both functors preserve ordinary covering descent, and hence that $s_T(L^F_{\mathrm{cdh}}P)$ with its restricted unit is the reflection of $s_TP$ into ordinary slice sheaves. No general slice-reflector existence theorem is needed for this assertion about restricted presheaves.

## External input
[Elmanto–Morrow v1, Theorem 4.33(1) and its proof](https://arxiv.org/pdf/2309.08463v1) constructs the specified comparison by the motivic-to-cdh map, Theorem 3.5(3) and the canonical truncation-induced arrow. Sections 2.1 and 3.3 fix the ordinary source localization and prime-field site. These are the same objects and adjunction supplied in [F2] and [F3]. Its source-derived framework and descent are used; no bound is inferred from the proof's fiber sentence.

[The report, Theorem 4 and the first paragraph of its proof, printed p.1995](https://ems.press/content/serial-article-files/52244) supplies both the top-weight theorem on finite-type schemes and the localized high-degree vanishing isolated in [F7]. The latter argument uses dimension-controlled proper cdh refinements and Nisnevich-local Artin vanishing on affine étale schemes. It is imported with its full finite-type hypotheses; these substantial geometric inputs are not reproved here. Footnote 1 on p.1994 fixes the invertible-prime target and Tate twist. The report recalls the EM theory, so localization in [F7] is the existing source localization evaluated at $X$; the argument uses schemes over $X$, not a new localization on the category of all $k$-schemes. A coefficient trivialization on this slice transfers the vanishing assertion by the derived restriction calculation proved in step 1.1. Theorem 3(1)'s under-map equivalence is used only on its stated domain for the optional uniqueness comparison in the Statement, never to establish an assertion on all finite-type schemes. The local proof below applies the vanishing to the actual truncation-induced map, then constructs $\rho_X$; it does not identify $\rho_X$ with $\gamma_X$.

[The Stacks Project, Sites and Sheaves, section 7.25](https://stacks.math.columbia.edu/tag/00XZ), its opening and the proof of Lemma 7.25.4, fixes the induced slice topology and identifies its covering categories with the ambient ones over the same objects. We use this covering-diagram fact in [F7]. The passage states commutation of ordinary set-valued sheafification with slice restriction; no stable or hypercomplete theorem is attributed to that passage. The compatibility for ordinary derived sheafification is proved locally in step 1.1 via the explicit restriction/right-adjoint pair in [F9], including its preservation of covering descent. It is not imported from this set-valued passage.

## Proof
1.1 Work on the source site of [F2] and [F3] under [A1]. By the EM construction in [F4], its specified comparison first takes $\alpha$, then $\theta$, then the canonical truncation-induced arrow to $B_j$. The last arrow is $\epsilon$ by the adjunction and its unit equation in [F2]. Thus $\beta^F=\epsilon\theta\alpha$. By [F3] and the explicit componentwise definitions, precomposition gives $\beta^k_X=\epsilon_{u(X)}\theta_{u(X)}\alpha_{u(X)}$. The actual $\alpha_{u(X)}$ is invertible by [F5], and $\theta_{u(X)}$ is invertible by [F2]; hence $\gamma_X$ is invertible, with inverse $\alpha_{u(X)}^{-1}\theta_{u(X)}^{-1}$. This proves the exact factorization and its restriction on every stated qcqs object. To justify the slice transfer separately, work with the notation of [F9]. Products $Y\times_F T$ exist by [F9]. Since $\operatorname{Spec}F$ is a one-point scheme, the structure maps of the qcqs schemes $Y$ and $T$ are quasi-compact. The projection $Y\times_F T\to Y$ is a base change of the structure map of $T$, hence is quasi-compact by [F9]; composition with the quasi-compact structure map of $Y$ shows that the product is quasi-compact. Their relative diagonal over $F$, after the canonical rearrangement of factors, is the product of the relative diagonals of $Y$ and $T$. Each diagonal is quasi-compact by [F9]; their product factors into two base changes of these maps, so is quasi-compact by the same supplier. Thus $Y\times_F T$ is quasi-separated and belongs to the source category. The product construction and its finite affine gluing retain the scheme-data universe; the slice has object and arrow sets bounded by those of [F3]. For a coherent transformation $a:s_TP\to G$, set $b_Y=a_{(Y\times_F T,\operatorname{pr}_T)}\circ P(\operatorname{pr}_Y):P(Y)\to(R_TG)(Y)$. Conversely, given $b:P\to R_TG$, put $a_{(Z,f)}=G(\Gamma_f)\circ b_Z$, where $\Gamma_f=(\mathrm{id}_Z,f):Z\to Z\times_F T$ is a slice morphism. Naturality and $\operatorname{pr}_Z\Gamma_f=\mathrm{id}_Z$ show that the first composite returns $a$. For the other composite use naturality of $b$ along $\operatorname{pr}_Y:Y\times_F T\to Y$ and $(\operatorname{pr}_Y\times_F\mathrm{id}_T)\Gamma_{\operatorname{pr}_T}=\mathrm{id}_{Y\times_F T}$; this returns $b_Y$. These formulas are composition and whiskering of coherent transformations, so also define inverse maps on whole mapping spaces, with the inverse homotopies supplied by these identities and naturality. This proves $s_T\dashv R_T$, rather than only a correspondence on homotopy classes. If $H$ is an ambient ordinary sheaf, $s_TH$ is a slice sheaf since a slice cover and its entire Čech diagram have the same underlying ambient diagram. If $G$ is a slice sheaf, $R_TG$ is an ambient sheaf: for every covering family $\{Y_i\to Y\}$, its base change $\{Y_i\times_F T\to Y\times_F T\}$ is a slice cover by the topology's pullback axiom, and its Čech diagram is the product with $T$ of the original Čech diagram by the product universal property. Thus its descent limit, including products for infinite formal families and the empty-cover case, is exactly the descent limit required for $R_TG$. All limits are those of [F8]. Consequently, for every slice sheaf $G$, the adjunction and the ambient reflection give $\operatorname{Map}(s_TL^F_{\mathrm{cdh}}P,G)\simeq\operatorname{Map}(L^F_{\mathrm{cdh}}P,R_TG)\simeq\operatorname{Map}(P,R_TG)\simeq\operatorname{Map}(s_TP,G)$, with the equivalence induced by the restricted sheafification unit. Since $s_TL^F_{\mathrm{cdh}}P$ is itself a slice sheaf, this is its reflection universal property. Hence any equivalence $s_TP\simeq s_TQ$ induces an equivalence $s_TL^F_{\mathrm{cdh}}P\simeq s_TL^F_{\mathrm{cdh}}Q$ by uniqueness of reflection; evaluating at $(T,\mathrm{id}_T)$ gives equivalent ambient localized values at $T$. This establishes exactly the slice compatibility used in [F7]. [given, A1, F2, F3, F4, F5, F8, F9]

2.1 In the top-weight clause, [F6] puts $X$ in the qcqs source domain. The image in $k$ of the unit $p$ of $F$ is a unit, so [F1] and the untwisted input of [F7] apply. Take $T=u(X)$ in step 1.1; the coefficient trivialization in [F7] now transfers that input to the asserted twisted localized vanishing. Apply the exactness of ordinary source sheafification and evaluation in [F8] to the pointwise cofiber sequence $\tau^{\leq j}B_j\to B_j\to\tau^{>j}B_j$. Since $B_j$ satisfies cdh descent, its localized middle term is $B_j$ and its first arrow is precisely $\epsilon$ by the truncation-unit equation of [F2]. Thus $\operatorname{cofib}(\epsilon_{u(X)})\simeq(L^F_{\mathrm{cdh}}\tau^{>j}B_j)(u(X))=0$ by [F7], and $\epsilon_{u(X)}$ is invertible. Step 1.1 now makes $\beta^k_X=\epsilon_{u(X)}\gamma_X$ invertible. Independently, $t_X$ is invertible by [F1]. Define $\rho_X=\epsilon_{u(X)}^{-1}t_X$, with inverse $t_X^{-1}\epsilon_{u(X)}$; then $t_X=\epsilon_{u(X)}\rho_X$, and left cancellation proves uniqueness of this lift, including agreement with any under-map equivalence supplied on Theorem 3(1)'s actual domain in [F4]. Right composition by $\rho_X^{-1}$ gives $\epsilon_{u(X)}=t_X\rho_X^{-1}$, hence $\beta^k_X=t_X\rho_X^{-1}\gamma_X$ with inverse $\gamma_X^{-1}\rho_Xt_X^{-1}$. Finally $\beta^k_X=t_X$ holds exactly when $\rho_X=\gamma_X$, by cancellation of the invertible $\epsilon_{u(X)}$ in their two factorizations. This proves the full equivalences and conditional identification without extending Theorem 3(1)'s domain or asserting commutation with a new base-site localization. [A1, F1, F2, F3, F4, F6, F7, F8, step 1.1] ∎
