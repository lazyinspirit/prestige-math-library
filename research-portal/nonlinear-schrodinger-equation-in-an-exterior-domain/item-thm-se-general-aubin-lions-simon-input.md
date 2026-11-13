---
title: General Banach-triple Aubin–Lions–Simon compactness
status: published
research_item: thm-se-general-aubin-lions-simon-input
dependency_level: 2
sources:
  references:
    - title: Jacques Simon, Compact sets in the space L^p(0,T;B), Annali di Matematica
        Pura ed Applicata 146 (1987), 65–96
      url: https://www.karlin.mff.cuni.cz/~kaplicky/pages/pages/2012z/b2.pdf
      locator: §8, embedding assumption (8.1), printed p.84, and Corollary 4 first
        clause, printed p.85; scanned PDF leaf 11 (zero-based page 10)
      statement: For Banach spaces X compactly embedded in B and B continuously
        embedded in Y, a family bounded in L^p(0,T;X), 1<=p<infinity, whose
        distributional derivatives form a bounded family in L^1(0,T;Y), is
        relatively compact in L^p(0,T;B).
      hypotheses: 0<T<infinity; X,B,Y Banach over a fixed scalar field with injective
        continuous embeddings X into B into Y and X into B compact; finite p>=1;
        strongly measurable L^p(X) functions and distributional derivatives
        represented by a uniformly L^1(Y)-bounded family. No reflexivity,
        density or evolution-triple identification is required.
      reading_limits: During this adjudication, opened the independent 17-leaf scanned
        PDF online and visually read the retained scan
        escalation-support/simon-leaf-11.png in the frozen run (zero-based PDF
        page 10), printed pp.84–85, for §8 embedding assumption (8.1) and
        Corollary 4, finite-p clause. This imports that clause without
        reconstructing its proof or the surrounding intermediate results and
        earlier compactness theorems. The separate p=infinity clause, requiring
        derivative exponent r>1, is not used. Independently read the declared
        library definition and completeness suppliers for the local restriction
        space; the closed-kernel argument in [F4] is a local application of
        those suppliers. The local compact embedding remains a separate
        condition.
external_input: true
---

## Prerequisites

- [def-author-ab209e1f475e-compact-banach-triple](item-def-author-ab209e1f475e-compact-banach-triple)
- [lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion)
- [def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative)
- [lem-author-ab209e1f475e-finite-time-derivative-conversion](item-lem-author-ab209e1f475e-finite-time-derivative-conversion)
- [lem-author-ab209e1f475e-local-negative-pivot-injection](item-lem-author-ab209e1f475e-local-negative-pivot-injection)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)
- [math:cor-bessel-potential-spaces-are-hilbert-and-complete](https://alphabetamath.cc/item/cor-bessel-potential-spaces-are-hilbert-and-complete)
- [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach)
- [math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)
- [` Jacques Simon, Compact sets in the space L^p(0,T;B), Annali di Matematica Pura ed Applicata 146 (1987), 65–96 · §8, embedding assumption (8.1), printed p.84, and Corollary 4 first clause, printed p.85; scanned PDF leaf 11 (zero-based page 10) `](https://www.karlin.mff.cuni.cz/~kaplicky/pages/pages/2012z/b2.pdf)


## Statement

Assume Countable Choice. Let $X,B,Y$ be Banach spaces over the same scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, with $X$ compactly embedded into $B$ and $B$ continuously embedded into $Y$, and let $0<T<\infty$ and $1\le p<\infty$. A family bounded in $L^p(0,T;X)$ whose distributional time derivatives are bounded in $L^1(0,T;Y)$ is relatively compact in $L^p(0,T;B)$.

Relative compactness means that the closure of the family in the displayed $L^p(0,T;B)$ norm is compact. The embeddings are compatible injective linear maps; the time spaces consist of strongly measurable almost-everywhere classes for Lebesgue measure on $(0,T)$, with Bochner norms. The derivative is represented by a strongly measurable $Y$-valued integrable function satisfying the Bochner distributional identity against scalar smooth compactly supported time tests.

## Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-author-ab209e1f475e-compact-banach-triple](item-def-author-ab209e1f475e-compact-banach-triple)

[lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion)

[def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative)

## Facts & Assumptions

**Given:** Countable Choice, the three Banach spaces over the same scalar field, $0<T<\infty$ and the finite exponent in the Statement; boundedness means a common finite supremum of the displayed Bochner norms. The localized complex Sobolev example in [F2] and [F4] additionally assumes the Axiom of Choice.

**Goal:** Record the independently established general compactness input and its exact applicability.

[F1] Under Countable Choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)) and $0<T<\infty$, the compatibility maps in [def-author-ab209e1f475e-compact-banach-triple](item-def-author-ab209e1f475e-compact-banach-triple) identify every $u\in L^p(0,T;X)$ as a $B$-valued and $Y$-valued class by [lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion). On this finite interval it is also in $L^1(0,T;Y)$. Thus the identity defining its derivative in [def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative) is meaningful. Countable Choice is retained to meet these helper contracts; no necessity assertion for Simon's theorem is made.

[F2] For the localized Sobolev application assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)), which includes Countable Choice. Let $G\subset\mathbb R^n$, $n\ge1$, be a nonempty bounded open set with smooth boundary, $B=L^2(G;\mathbb C)$ and $Y=(H_0^2(G))^{\prime}$, with the full weak-derivative $H^2$ norm and conjugate-dual convention of [lem-author-ab209e1f475e-local-negative-pivot-injection](item-lem-author-ab209e1f475e-local-negative-pivot-injection). That supplier makes $Y$ Banach and the $L^2$ pivot an injective continuous linear map $B\to Y$. The space $B$ is Banach by [math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space). If a complex Banach space $X$ embeds compactly into $B$, these maps give the triple in [def-author-ab209e1f475e-compact-banach-triple](item-def-author-ab209e1f475e-compact-banach-triple).

[F3] At $p=2$, a bound $\sup_u\|u\|_{L^2(0,T;X)}<\infty$ and strongly measurable distributional derivative representatives with $\sup_u\|\partial_tu\|_{L^\infty(0,T;Y)}\le M<\infty$ give the exact derivative hypothesis $\sup_u\|\partial_tu\|_{L^1(0,T;Y)}\le TM$ by [lem-author-ab209e1f475e-finite-time-derivative-conversion](item-lem-author-ab209e1f475e-finite-time-derivative-conversion), under the Countable Choice and positive finite interval already assumed. The derivative remains valued in the local negative space; it is not identified with the exterior Dirichlet spectral negative scale.

[F4] In [F2] define $X=H^{1/2}(G)$ by the restriction convention of [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces), applicable to this nonempty open set with $s=1/2$. Thus its elements are restrictions of complex whole-space Bessel-potential completion classes, with norm $\|u\|_X=\inf_{U|_G=u}\|U\|_{H^{1/2}(\mathbb R^n)}$. This $X$ is Banach: the whole-space space is complete by [math:cor-bessel-potential-spaces-are-hilbert-and-complete](https://alphabetamath.cc/item/cor-bessel-potential-spaces-are-hilbert-and-complete), and restriction $R:H^{1/2}(\mathbb R^n)\to L^2(G)$ is linear with $\|RU\|_2\le\|U\|_{H^{1/2}}$ by the restriction definition's $L^2$ realization. Its kernel $N$ is a linear subspace and is closed: if $U_j\in N$ and $U_j\to U$ in the whole-space norm, the bound gives $\|RU\|_2\le\|U-U_j\|_{H^{1/2}}\to0$. The quotient by $N$ is Banach by [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach), and $U+N\mapsto RU$ is a linear bijection onto $X$ with exactly the displayed quotient norm. Completeness therefore transfers to $X$. All three cited inputs require only Countable Choice, available under [F2]. Consequently one may take this $X$ once its bounded-domain compact embedding into $L^2(G)$ has independently been supplied; no global exterior compact embedding is asserted here.

## External input

**Imported result:** Simon, §8, assumption (8.1), printed p.84, and Corollary 4, first clause, printed p.85 (scanned PDF leaf 11). For Banach spaces with compatible compact $X\hookrightarrow B$ and continuous $B\hookrightarrow Y$ embeddings, a family bounded in $L^p(0,T;X)$ whose derivatives are bounded in $L^1(0,T;Y)$ is relatively compact in $L^p(0,T;B)$, for $0<T<\infty$ and $1\le p<\infty$. This is an external mathematical input, not a locally reconstructed proof of the general theorem.

**Application of the contract:** Under the stated choice and interval hypotheses, [F1] matches Simon's Banach-triple and distributional-derivative hypotheses using [def-author-ab209e1f475e-compact-banach-triple](item-def-author-ab209e1f475e-compact-banach-triple), [lem-author-ab209e1f475e-bochner-lp-inclusion](item-lem-author-ab209e1f475e-bochner-lp-inclusion) and [def-author-ab209e1f475e-banach-valued-time-derivative](item-def-author-ab209e1f475e-banach-valued-time-derivative). In the local example, [F2] supplies the Banach space $B$ by [math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space) and the Banach space $Y$ and pivot injection by [lem-author-ab209e1f475e-local-negative-pivot-injection](item-lem-author-ab209e1f475e-local-negative-pivot-injection), under the additional Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). For the specific fractional choice, [F4] supplies the definition and Banach property of $X$ using [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces), [math:cor-bessel-potential-spaces-are-hilbert-and-complete](https://alphabetamath.cc/item/cor-bessel-potential-spaces-are-hilbert-and-complete) and [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach). Its compact embedding is still a separate condition. With that condition, the $L^2(X)$ bound and the derivative bound in [F3], [lem-author-ab209e1f475e-finite-time-derivative-conversion](item-lem-author-ab209e1f475e-finite-time-derivative-conversion) gives the required $L^1(Y)$ bound. Applying the imported clause then yields relative compactness in $L^2(0,T;L^2(G))$. Countable Choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)) meets the general helper hypotheses. The general Statement itself requires exactly the displayed $L^1(Y)$ derivative norm, including $p=1$, and is not restricted to an evolution triple.

**Actual source reading:** In this adjudication the independent original PDF was opened online and its retained scanned leaf 11, printed pp.84–85, was visually read for (8.1) and the finite-$p$ clause of Corollary 4. The general compactness proof, surrounding intermediate proofs and earlier theorems were not reconstructed or fully checked. The separate $p=\infty$ clause is not used. The elementary closed-kernel application in [F4] is local reasoning from the declared library inputs, rather than part of the imported Simon statement.
