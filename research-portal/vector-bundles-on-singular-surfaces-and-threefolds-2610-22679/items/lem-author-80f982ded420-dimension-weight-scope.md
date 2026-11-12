---
id: lem-author-80f982ded420-dimension-weight-scope
kind: lemma
title: Dimension-specific point images and a precise lower-component obstruction
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-80f982ded420-clopen-quotients
  - lem-author-80f982ded420-quotient-image
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - def-motivic-filtration
  - def-smooth-point-filtration
  - thm-author-80f982ded420-quotient-cycle-map-input
  - lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points
  - def-levine-weibel-zero-cycles
  - math:lem-polynomial-algebras-over-fields-are-integrally-closed
  - math:thm-normality-is-local-for-domains
  - math:cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - math:def-grothendieck-universe-closure-convention
  - math:thm-stalk-structure-sheaf-prime-localization
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  lem-author-80f982ded420-clopen-quotients: mathematical-premise
  lem-author-80f982ded420-quotient-image: mathematical-premise
  lem-author-16f30f6b95cb-lowweight-zero-projection-rank: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  thm-author-80f982ded420-quotient-cycle-map-input: mathematical-premise
  lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points: mathematical-premise
  def-levine-weibel-zero-cycles: mathematical-premise
  math:lem-polynomial-algebras-over-fields-are-integrally-closed: mathematical-premise
  math:thm-normality-is-local-for-domains: mathematical-premise
  math:cor-dimension-of-a-finite-polynomial-ring-over-a-field: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-author-80f982ded420-normal-point-strata
  - def-motivic-filtration
  - def-smooth-point-filtration
  - def-levine-weibel-zero-cycles
  - thm-author-80f982ded420-quotient-cycle-map-input
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-80f982ded420-clopen-quotients
  - lem-author-80f982ded420-quotient-image
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - def-motivic-filtration
  - def-smooth-point-filtration
  - thm-author-80f982ded420-quotient-cycle-map-input
  - lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points
  - def-levine-weibel-zero-cycles
  - math:lem-polynomial-algebras-over-fields-are-integrally-closed
  - math:thm-normality-is-local-for-domains
  - math:cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - math:def-grothendieck-universe-closure-convention
  - math:thm-stalk-structure-sheaf-prime-localization
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3
      url: https://arxiv.org/pdf/1511.04221v3
      locator: §1.9 and §2.1, printed pp. 6–8, equations (2.1)–(2.2) and the following
        K-theory convention.
      statement: The specified Cartier-curve quotient has a cycle map to K_0 taking a
        permitted closed point to its residue class. In the nonpure convention
        only dimension-d components contribute points.
      hypotheses: Perfect field; reduced quasi-projective finite-type scheme of
        dimension d≥1; the forbidden locus contains the source singular locus
        and no dimension-d component.
      reading_limits: Read the primary v3 PDF text at §1.9, §2.1 through (2.2), and
        the following K-theory convention on printed pp. 6–8. Checked the
        declared import and local comparison bodies. No visual inspection or
        reconstruction of Levine–Weibel Proposition 2.1 is claimed. Only the map
        and its normalization are imported; the image and clopen application are
        local.
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the supplied constructions. Let $k$ be a perfect field. For a normal affine finite-type $k$-scheme $X$ of dimension $d\geq1$, define the top-dimensional point image by
$$F^{d}_{\mathrm{sm,top}}K_0(X):=(i_d)_*F^{d}_{\mathrm{sm}}K_0(X_d),$$
where $(i_d)_*$ is the exact clopen zero-extension map justified above. This definition has no pure-dimensional hypothesis on $X$; its piece $X_d$ is pure. Its generators are precisely the residue classes of smooth closed points on the dimension-$d$ components. Then
$$\operatorname{im}(\operatorname{cyc}^{\mathrm{Kr}}_X)=F^d_{\mathrm{sm,top}}K_0(X)\subseteq F^d_{\mathrm{mot}}K_0(X).$$
For each positive dimension $e$, the analogous zero-extended image of $\operatorname{CH}^{LW}_0(X_e)$ is contained in $F^e_{\mathrm{mot}}K_0(X)$. The subgroup generated by all geometric smooth closed points of $X$ is the direct sum of these dimension-specific point images, together with the free residue-point subgroup on $X_0$ in weight zero. It need not be contained in $F^d_{\mathrm{mot}}K_0(X)$.


## Facts & Assumptions
[A1] The Axiom of Choice, [[math:def-axiom-of-choice]], and the fixed compatible site and universe bounds of the cited constructions are assumed. The universe closure convention is [[math:def-grothendieck-universe-closure-convention]]; existence and the required bounds are separate assumptions. These premises discharge the selected local realization and comparison assumptions at the first uses below.

**Given:** The stated normal affine finite-type scheme over a perfect field, Choice and compatible size bounds.

**Goal:** Give the strongest componentwise statement and exclude the falsely broadened fixed-weight assertion.

[F0] Normal means every local ring is an integrally closed domain. Affine finite type over $k$ means $X=\operatorname{Spec}A$ with its structure sheaf and structure morphism to $\operatorname{Spec}k$, where $A$ is a finitely generated $k$-algebra. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; pure dimension means that every irreducible component has that dimension. The finite clopen dimension partition $X_e$, for $0\leq e\leq d$, and its exact zero-extension maps are those of [F2]. Perfect means every algebraic extension is separable. A geometric smooth point here means smooth over $k$, namely having an open neighborhood smooth over $k$, as in [[def-smooth-point-filtration]]; closed means its singleton is closed. Thus smoothness is unchanged on a clopen neighborhood, and closedness agrees there with closedness in $X$. The same supplier defines $F^e_{\mathrm{sm}}$ as finite integer combinations of perfect residue-sheaf classes. [[def-motivic-filtration]] fixes the spectrum $K$, $K_0=\pi_0K$, and the motivic image groups. [[def-levine-weibel-zero-cycles]] fixes the pure-dimensional Cartier-curve quotient $\operatorname{CH}^{LW}_0$. Its eligibility on nonempty positive-dimensional strata is supplied by [F1]. On an empty stratum all point groups and images here mean zero, using the empty point-and-relation presentation rather than applying a positive-dimensional definition to it.

[F1] [[thm-author-80f982ded420-quotient-cycle-map-input]] supplies the nonpure map $\operatorname{cyc}^{\mathrm{Kr}}_X$, its actual permitted top-dimensional point generators and their residue-class values in classical affine $K_0$, and annihilation of the specified relations. [[lem-author-80f982ded420-clopen-quotients]] identifies its source quotient with that on $X_d$ by the identity on permitted point cycles. [[lem-author-80f982ded420-quotient-image]] identifies the pure quotient and gives its image, normalization and same-weight containment; its affine finite-type applicability checks are retained. The transport to the present perfect $K_0$ is [F2].

[F2] [[lem-author-80f982ded420-normal-point-strata]] supplies the clopen integral dimension strata, exact zero extension, the actual K-class decomposition, and the comparison taking the source residue class to the current positive perfect class without a sign or residue-degree factor. [[lem-author-80f982ded420-clopen-filtered-products]] supplies the actual image-filtration decompositions and identifies clopen zero extension as the zero-in-other-factors inclusion. For any such piece its normal affine finite-type and qcqs hypotheses are also explicitly checked by [F4].

[F3] [[lem-author-16f30f6b95cb-lowweight-zero-projection-rank]] identifies the first stage group on a smooth finite-type scheme with the kernel of rank. Applied to $\operatorname{Spec}k$ over $k$ itself, the rank is identity under the field calculation of [F4]; its first image group is therefore zero. [[def-motivic-filtration]] gives nesting, pullback naturality and the weight-zero identity. In particular $F^3_{\mathrm{mot}}K_0(k)\subseteq F^1_{\mathrm{mot}}K_0(k)=0$.

[F4] [[lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points]] checks that clopen pieces remain normal affine finite type and qcqs. On a zero-dimensional piece it proves the finite separable field decomposition, smoothness of its points, and the free positive residue-point basis of its actual $K_0$, which equals its weight-zero image group. This includes the empty-piece convention. Applied to $\operatorname{Spec}k$ itself, it gives $K_0(k)=\mathbb Z$ with rank-one generator $[k]$.

[F5] For the explicit obstruction, [[math:lem-polynomial-algebras-over-fields-are-integrally-closed]] makes $k[t_1,t_2,t_3]$ and $k$ integrally closed domains. [[math:thm-normality-is-local-for-domains]] makes their prime localizations integrally closed; [[math:thm-stalk-structure-sheaf-prime-localization]] identifies these with all the scheme local rings. [[math:cor-dimension-of-a-finite-polynomial-ring-over-a-field]] gives their ring dimensions $3$ and $0$. The prime/irreducible-closed correspondence of [[math:thm-irreducible-closed-subsets-and-prime-ideals]] identifies these with the scheme chain dimensions. [[math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]] identifies the spectrum of $k[t_1,t_2,t_3]\times k$ with the clopen disjoint union of the factor schemes, with exactly their local rings. The product is generated as a $k$-algebra by $(1,0)$ and $(t_i,0)$ for $1\leq i\leq3$: a polynomial value in the first coordinate is obtained using $(1,0)$, and the second coordinate using $1-(1,0)$. Thus it is finite type. Every nonempty irreducible closed subset of a finite disjoint clopen union lies in one piece, so its dimension is the maximum of the piece dimensions.

## Proof
1.1 Use the supplied constructions under [A1]. By [F2] and [F4], every nonempty $X_e$ is a normal affine finite-type pure dimension-$e$ scheme over the same perfect field and is qcqs. For $e>0$, the pure quotient-image lemma in [F1] applies with exactly these hypotheses. In the possibly nonpure $X$, the direct quotient-cycle-map supplier in [F1] gives a genuine map with the stipulated point values. Under the source identification with $\operatorname{CH}^{LW}_0(X_d)$ in [F1], its value on every permitted generator agrees, by the actual model comparison in [F2], with the pure map on $X_d$ followed by clopen zero extension. Since those point classes generate the quotient, these homomorphisms are equal. Its image is consequently $(i_d)_*F^d_{\mathrm{sm}}K_0(X_d)$, precisely the stated top-dimensional point image. By [F2], a same-weight class on $X_d$ extended by zero lies in $F^d_{\mathrm{mot}}K_0(X)$. The same argument on each nonempty positive-dimensional $X_e$ gives the dimension-$e$ containment. Empty pieces contribute zero by [F0] and [F2]. The displayed definition is well-defined and its zero-extension map injective because [F2] identifies it with an actual coordinate inclusion. No unprovided filtered proper pushforward is used. [A1, F0, F1, F2, F4, given]

2.1 Smooth closed points partition among the finitely many strata, with smoothness and closedness agreeing on each clopen piece by [F0]. Their generated subgroup therefore splits by [F2] into the direct sum of the stratum-generated subgroups. Step 1.1 identifies each positive-dimensional summand with its dimension-specific cycle image. For $X_0$, [F4] supplies the finite disjoint union of spectra of finite separable field extensions, all their points smooth and closed, and identifies their actual residue classes with a free basis of $K_0(X_0)=F^0_{\mathrm{mot}}K_0(X_0)$. Zero extension places this free subgroup in the weight-zero image on $X$ by [F2]. Thus no positive-dimensional Cartier-curve convention is imposed on $X_0$. For the promised failure at weight three, take the given perfect field $k$ to be algebraically closed and put $X=\mathbb A_k^3\amalg\operatorname{Spec}k=\operatorname{Spec}(k[t_1,t_2,t_3]\times k)$. By [F5] it is normal affine finite type of dimension three. Its isolated point $p$ is closed and smooth by [F4], and by [F2] its actual residue class restricts to the positive generator $1\in K_0(k)=\mathbb Z$. The clopen filtration decomposition in [F2], or pullback naturality in [F3], sends every class in $F^3_{\mathrm{mot}}K_0(X)$ to $F^3_{\mathrm{mot}}K_0(k)\subseteq F^1_{\mathrm{mot}}K_0(k)=0$. Hence $[p]\notin F^3_{\mathrm{mot}}K_0(X)$, proving exactly the lower-component obstruction while retaining the dimension-specific assertions. This is a counterexample to the broadened generated interpretation, without establishing a defect in an implicit pure-threefold source convention. [A1, F0, F2, F3, F4, F5, step 1.1] ∎

## External input
Only the quotient-map existence, relation vanishing and source generator normalization in [F1] are imported through the declared Krishna supplier. The cited source uses the top-dimensional convention even for nonpure schemes. The source record specifies the hypotheses, exact passage and actual reading limits. The clopen comparisons, image calculation, zero-dimensional application and obstruction above are local arguments using the declared suppliers; this lemma is not marked as an external_input item.
