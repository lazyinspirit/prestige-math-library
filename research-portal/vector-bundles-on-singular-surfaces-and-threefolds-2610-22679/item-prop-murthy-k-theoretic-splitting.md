---
title: Murthy splitting input in rank three
status: published
research_item: prop-murthy-k-theoretic-splitting
dependency_level: 27
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 17, proof of Corollary 6.10, final sentence
      reading_limits: Freshly read the supplied article extraction at PDF p. 17 and
        independently extracted that page from the supplied original PDF with
        PyMuPDF, including the entire proof of Corollary 6.10. This item
        supplies a local composition of declared interfaces, rather than a
        reconstruction of Murthy. The current Murthy supplier Statement,
        External input, Facts and Proof were read, including its
        resolution-class interpretation and scan-versus-journal qualifications.
        No fresh reading of the Murthy scan, the journal version, or the primary
        sources behind the other suppliers is claimed.
      statement: In the proof of Corollary 6.10 the alternating exterior class beta is
        zero in the smooth-point subgroup, and the cited Murthy criterion yields
        a trivial line summand of the rank-three bundle.
      hypotheses: Normal affine threefold of finite type over an algebraically closed
        field, with a rank-three vector bundle and vanishing alternating
        exterior K-class; the article obtains that vanishing from its
        Chern-class results.
---

PDF p. 17: Proof of Corollary 6.10, Mur94 Theorem 3.8

## Prerequisites

- [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class)
- [def-smooth-point-filtration](item-def-smooth-point-filtration)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)
- [lem-author-80f982ded420-dimension-weight-scope](item-lem-author-80f982ded420-dimension-weight-scope)
- [prop-smooth-cycle-unique-divisibility](item-prop-smooth-cycle-unique-divisibility)
- [thm-author-394a5b71198d-murthy-module-splitting-input](item-thm-author-394a5b71198d-murthy-module-splitting-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-height-of-a-prime-ideal](https://alphabetamath.cc/item/def-height-of-a-prime-ideal)
- [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)
- [math:cor-affine-domain-maximal-ideal-height-equals-dimension](https://alphabetamath.cc/item/cor-affine-domain-maximal-ideal-height-equals-dimension)
- [math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union](https://alphabetamath.cc/item/lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [lem-koszul-point-support-class](item-lem-koszul-point-support-class)
- [lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution](item-lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 17, proof of Corollary 6.10, final sentence `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the size conventions of the cited perfect K-theory and smooth-point constructions. Let $k$ be an algebraically closed field and let $X=\operatorname{Spec}A$ be a normal affine $k$-scheme of finite type and dimension $3$. Let $E$ be a rank-three vector bundle on $X$, and put
$$\beta(E)=[\mathcal O_X]-[E]+[\Lambda^2E]-[\det E]\in K_0(X).$$
If $\beta(E)=0$ in $K_0(X)$, then $E\cong\mathcal O_X\oplus E'$ for a rank-two vector bundle $E'$.

In particular, this applies when $\beta(E)$ is trivial in $F^3_{\mathrm{sm}}K_0(X)$ for pure-dimensional $X$. If $X$ also has lower-dimensional components, the corresponding hypothesis may instead be stated using the zero-extended top-dimensional subgroup $F^3_{\mathrm{sm,top}}K_0(X)$; it does not include all smooth points on those lower-dimensional components.

Here a vector bundle is a finite locally free sheaf, and rank three means locally isomorphic to $\mathcal O_X^3$. Normal means that all local rings are integrally closed domains. The group $K_0(X)$ is the degree-zero perfect K-theory group in [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class). The pure smooth-point subgroup in [def-smooth-point-filtration](item-def-smooth-point-filtration) is generated by the classes of residue sheaves at smooth closed points. Its top-dimensional zero extension for a nonpure normal scheme is specified in [lem-author-80f982ded420-dimension-weight-scope](item-lem-author-80f982ded420-dimension-weight-scope).

## Facts & Assumptions

**Given:** The field, scheme, bundle, choice and size hypotheses in the statement, and $\beta(E)=0$ in $K_0(X)$.

**Goal:** Construct a decomposition of $E$ into a trivial line and a rank-two bundle, and establish the stated subgroup implications.

[F0] Algebraically closed means that every nonconstant polynomial over the field has a root, as in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). The affine scheme includes its structure sheaf, and a $k$-scheme includes its structure morphism to $\operatorname{Spec}k$, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Finite type refers to that morphism, as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism); for algebras it means generated by finitely many elements over $k$, as in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras). Ring dimension is the supremum of lengths of strict prime chains, and height is $\operatorname{ht}(\mathfrak p)=\dim A_{\mathfrak p}$, as in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring) and [math:def-height-of-a-prime-ideal](https://alphabetamath.cc/item/def-height-of-a-prime-ideal). The prime/irreducible-closed correspondence in [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals) identifies ring dimension with scheme dimension. Smooth at a point means that the structure morphism is smooth on a neighbourhood of it; the local presentation convention is [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical). Pure dimension means that all irreducible components have the stated dimension; a closed point is one whose singleton is closed.

[F1] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) identifies vector bundles on $X$ with finite projective $A$-modules, compatibly with rank, direct sums and duals. Finite projective means finitely generated and having the lifting property through surjective module maps. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies the vector-bundle Grothendieck group with perfect $K_0(X)$ and sends a bounded finite-projective resolution to its alternating bundle class. Together these give the comparison $\alpha:K_0^{\mathrm{proj}}(A)\to K_0(X)$ taking $[T]$ to $[\widetilde T]$. The group $K_0^{\mathrm{proj}}(A)$ has finite-projective isomorphism-class generators and relations $[T\oplus T']=[T]+[T']$, as in [F2]. The class $\beta(E)$ is the alternating exterior class in [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class).

[F2] For $P=\Gamma(X,E)$, [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface) identifies $C^K_3(P)=\sum_{i=0}^3(-1)^i[\Lambda^iP^*]$, where $P^*=\operatorname{Hom}_A(P,A)$, with the dual exterior class in perfect $K_0(X)$ under the isomorphism $\alpha$. It proves that this class and $\beta(E)$ vanish simultaneously: they differ by a signed determinant-line unit. It supplies the group presentation and exterior-module construction used here; its noetherian hypothesis is checked using [F5].

[F3] [prop-smooth-cycle-unique-divisibility](item-prop-smooth-cycle-unique-divisibility) gives unique divisibility, in particular absence of $2$-torsion, for the pure smooth-point subgroup and for its zero-extended top-dimensional counterpart. [def-smooth-point-filtration](item-def-smooth-point-filtration) defines the pure subgroup as the group generated by perfect residue-sheaf classes at smooth closed points. [lem-author-80f982ded420-dimension-weight-scope](item-lem-author-80f982ded420-dimension-weight-scope) defines the top-dimensional zero extension and identifies its generators as the residue classes of smooth closed points on the three-dimensional components. Multiplication by $2$ means addition of an element to itself; absence of $2$-torsion means this map is injective.

[F4] [thm-author-394a5b71198d-murthy-module-splitting-input](item-thm-author-394a5b71198d-murthy-module-splitting-input) imports Murthy's criterion: for a reduced affine algebra of dimension $n\geq2$ over an algebraically closed field, if the subgroup of projective $K_0$ generated by residue-field classes of height-$n$ smooth closed points has no $(n-1)!$ torsion, then a rank-$n$ finite projective module splits off a free rank-one summand when its exterior-dual class vanishes. Its resolution-class interpretation makes each residue-field class the alternating class of a finite projective resolution, independently of the resolution. Its External input section and reference give the precise source and reading limits, including the distinction between the inspected preliminary scan and the uninspected journal version.

[F5] Every algebraically closed field is perfect in arbitrary characteristic by [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect). Here perfect means that every algebraic extension is separable. Under Choice, [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated) makes $A$ a finite-type $k$-algebra. [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian) makes $k$ noetherian, and [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) then makes $A$ noetherian, meaning that every ideal is finitely generated. The single affine chart makes $X$ noetherian. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) make $X$ qcqs, as required by the Euler and smooth-point definitions: it is quasi-compact, and intersections of quasi-compact opens are quasi-compact.

[F6] [lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction) decomposes a normal noetherian affine scheme into finitely many clopen integral components and its coordinate ring into a finite product of noetherian integrally closed domains. In particular it is reduced. [math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union](https://alphabetamath.cc/item/lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union) identifies primes, maximal ideals and local rings in the product with those in their unique factor. Clopen means both open and closed; an integral scheme is irreducible and reduced. Restricting to a clopen component preserves the local smoothness condition in [F0].

[F7] Under Choice, [math:cor-affine-domain-maximal-ideal-height-equals-dimension](https://alphabetamath.cc/item/cor-affine-domain-maximal-ideal-height-equals-dimension) gives $\operatorname{ht}(\mathfrak m_i)=\dim A_i$ for every maximal ideal of a finite-type $k$-domain $A_i$. It will be applied to each domain factor in [F6], which is finite type because the images of any finite algebra generating list of $A$ generate its quotient $A_i$.

[F8] Under Choice and the fixed size conventions, [lem-koszul-point-support-class](item-lem-koszul-point-support-class) makes the residue sheaf $i_*\kappa(x)$ at every smooth closed point of a finite-type scheme over a perfect field a perfect object, and on an affine scheme it is $\widetilde{A/\mathfrak m}[0]$. [lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution](item-lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution) then gives an actual finite resolution of $A/\mathfrak m$ by finite projective $A$-modules. Here finite resolution means an exact sequence $0\to P_d\to\cdots\to P_0\to A/\mathfrak m\to0$, and $[0]$ places a sheaf in cochain degree zero. By [F1] its alternating class maps to the class of this same perfect residue sheaf; [F4] supplies independence of the resolution in projective $K_0$.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size conventions of the cited constructions. Explicitly, fix compatible Grothendieck universes containing $\omega$, the field, algebra, scheme and module data, with larger universes for the supplied categories and compatible site bounds; their existence is a separate assumption. The closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). These inherited assumptions are used when applying [F1]–[F8], including affine quasi-compactness, the normal-component and height results, the perfect resolution realization and the K-theory constructions. The subsequent finite sums and injectivity arguments require no additional choice.

## Proof

1.1 By [F5] the field is perfect, $A$ is a noetherian finite-type $k$-algebra, and $X$ is qcqs. Apply [F6] to write $A\cong\prod_{i=1}^s A_i$ with integral clopen components $X_i=\operatorname{Spec}A_i$; in particular $A$ is reduced. Since $\dim X=3$, $s\geq1$. The images of a finite generating list of $A$ make every $A_i$ finite type. Every maximal ideal $\mathfrak m$ corresponds by [F6] to a unique maximal ideal $\mathfrak m_i$ of $A_i$, with $A_{\mathfrak m}\cong(A_i)_{\mathfrak m_i}$. Thus [F0] and [F7] give $\operatorname{ht}_A(\mathfrak m)=\operatorname{ht}_{A_i}(\mathfrak m_i)=\dim A_i=\dim X_i$. In particular height three is equivalent to belonging to a three-dimensional component, including for smooth closed points, since closedness and smoothness agree on a clopen component by [F0] and [F6]. Define $G\subset K_0^{\mathrm{proj}}(A)$ to be the subgroup generated by the residue-field classes of these height-three smooth closed points, as in [F4]. For each such point [F8] supplies a finite projective resolution, and [F1] sends its alternating class under $\alpha$ to the corresponding perfect residue-sheaf class. Consequently $\alpha(G)$ is exactly $F^3_{\mathrm{sm}}K_0(X)$ in the pure case and $F^3_{\mathrm{sm,top}}K_0(X)$ in the general case by [F3]. By unique divisibility in [F3], multiplication by $2$ is injective on $\alpha(G)$, and hence on $G$, since $\alpha$ is an isomorphism by [F1] and [F2]. Thus the subgroup in [F4] has no $(3-1)!=2$ torsion. All cited interfaces are used under the inherited Choice and size assumptions [A1]. [A1, F0, F1, F2, F3, F4, F5, F6, F7, F8, given]

2.1 By [F1], $P=\Gamma(X,E)$ is finite projective of constant rank $3$, and $E\cong\widetilde P$. By [F2], $\beta(E)=0$ makes $\alpha(C^K_3(P))=0$, and injectivity gives $C^K_3(P)=0$ in $K_0^{\mathrm{proj}}(A)$. The reducedness, dimension, field and factorial-torsion hypotheses of [F4] were checked in step 1.1; its rank hypothesis is the rank of $P$. The imported criterion therefore gives $P\cong A\oplus Q$ with $Q$ finite projective of constant rank two. Apply [F1] to get $E\cong\mathcal O_X\oplus\widetilde Q$ with $\widetilde Q$ a rank-two bundle. Finally, both point groups in [F3] are subgroups of $K_0(X)$; a class trivial in either is zero in the ambient group. Thus the same implication applies to both subgroup formulations, retaining precisely the top-dimensional convention in the nonpure case. [A1, F1, F2, F3, F4, step 1.1, given] ∎

## External input
The original article's proof of Corollary 6.10 uses vanishing of the displayed alternating exterior class to obtain a trivial line summand; its passage is recorded in the article reference. The substantial splitting theorem and independence of finite-resolution Euler classes are used through [thm-author-394a5b71198d-murthy-module-splitting-input](item-thm-author-394a5b71198d-murthy-module-splitting-input), with that supplier's precise imports and reading limits. The geometry, subgroup comparison and application above are a local argument using the declared suppliers, not a local proof of Murthy's theorem.
