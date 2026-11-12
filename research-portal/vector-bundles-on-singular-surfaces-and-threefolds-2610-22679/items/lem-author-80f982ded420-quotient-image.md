---
id: lem-author-80f982ded420-quotient-image
kind: lemma
title: The quotient cycle map has exactly the smooth-point image
status: published
domain: mathematics
deps:
  - lem-author-80f982ded420-normal-point-strata
  - thm-author-80f982ded420-quotient-cycle-map-input
  - def-levine-weibel-zero-cycles
  - def-smooth-point-filtration
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-perfect-field
  - math:def-smooth-locus-morphism
  - math:def-residue-field-scheme-point
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  thm-author-80f982ded420-quotient-cycle-map-input: mathematical-premise
  def-levine-weibel-zero-cycles: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-weil-divisor-normal-noetherian-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 23
formulation_deps:
  - lem-author-80f982ded420-normal-point-strata
  - thm-author-80f982ded420-quotient-cycle-map-input
  - def-levine-weibel-zero-cycles
  - def-smooth-point-filtration
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-perfect-field
  - math:def-smooth-locus-morphism
  - math:def-residue-field-scheme-point
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-80f982ded420-normal-point-strata
  - thm-author-80f982ded420-quotient-cycle-map-input
  - def-levine-weibel-zero-cycles
  - def-smooth-point-filtration
  - math:def-axiom-of-choice
  - math:def-smooth-locus-morphism
  - math:def-grothendieck-universe-closure-convention
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3
      url: https://arxiv.org/pdf/1511.04221v3
      locator: §1.9 and §2 opening, printed p. 6; §2.1, pp. 6–7, quotient (2.1); p. 8,
        cycle map (2.2) and following K-theory convention; p. 1,
        projective-module K_0 convention.
      statement: The specified relative Cartier-curve quotient admits the cycle map
        sending a permitted closed point to its residue class in K_0.
      hypotheses: Reduced quasi-projective finite-type scheme of positive dimension
        over a perfect field; forbidden locus as specified in §2.1. Apply
        through the declared quotient-cycle-map supplier to normal affine
        pure-dimensional T.
      reading_limits: Read the primary PDF text on pp. 1 and 6–8 at the cited passages
        for this application, and the complete current local quotient definition
        and direct supplier bodies. No visual inspection, reconstruction of
        Levine–Weibel Proposition 2.1, or source-proof audit is claimed. The
        presentation comparison and image calculation below are local arguments.
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the supplied point, support and perfect K-theory constructions. Let $T$ be a normal affine scheme of finite type and pure dimension $d\geq1$ over a perfect field. The source cycle map, transported to the actual affine perfect $K_0$, is
$$\operatorname{cyc}_T:\operatorname{CH}^{LW}_0(T)\longrightarrow K_0(T),\qquad [x]\longmapsto[i_*\kappa(x)].$$
It kills every completed Cartier-curve principal-divisor relation and its image is exactly $F^{\dim T}_{\mathrm{sm}}K_0(T)$. Its codomain can therefore be restricted to this subgroup, yielding a surjection onto it. This is an image statement, not an assertion of injectivity of the cycle map or an isomorphism of the entire Chow group with that image.

## Facts & Assumptions
**Given:** The stated normal affine finite-type pure-dimensional scheme over a perfect field, Choice and compatible size bounds.

**Goal:** Compare the two quotient presentations, transport the established map, and compute its image.

[F1] [[thm-author-80f982ded420-quotient-cycle-map-input]] supplies Krishna's quotient, its relative Cartier curves and semilocal-unit component divisors, and its map to classical affine projective-module $K_0$. Its applicability checks give reducedness and quasi-projectivity for the stated $T$. It does not supply an identification with the local Levine–Weibel quotient; that comparison is made in step 1.1.

[F2] [[lem-author-80f982ded420-normal-point-strata]] gives the finite disjoint clopen integral components, the qcqs property needed for the point-filtration interface, and the affine perfect $K_0$ comparison taking the classical residue class to $[i_*\kappa(x)]$ with no sign or degree factor.

[F3] [[math:def-axiom-of-choice]] is assumed for the supplied component, point-class and affine perfect comparisons. Compatible universes in the closure convention of [[math:def-grothendieck-universe-closure-convention]] are fixed as in those constructions. Their existence and the required size bounds are assumptions separate from Choice. The finite-sum image argument introduces no additional choice.

[F4] [[def-levine-weibel-zero-cycles]] supplies the local free point group, relative Cartier curves, the ring of germs on neighborhoods of the curve's forbidden and generic points, the componentwise length-order divisor, and the relation subgroup and quotient. Its justification gives finiteness of these point sets and divisors and the needed local finite presentation over the field. [[def-smooth-point-filtration]] defines the subgroup generated by the perfect residue classes and includes its containment in the same-weight motivic subgroup.

[F5] The scheme terminology uses [[math:def-affine-scheme]] and [[math:def-locally-finite-type-and-finite-type-morphism]]: affine means isomorphic to a ring spectrum with its structure sheaf, and finite type means locally of finite type and quasi-compact. A scheme over the field is equipped with its structure morphism to its spectrum. Normal means that every local ring is an integrally closed domain, using only that clause of [[math:def-weil-divisor-normal-noetherian-scheme]]. Dimension is the chain dimension of [[math:def-dimension-noetherian-topological-space]]; the required Noetherianity is supplied by [F2]. Pure dimension $d$ means that every irreducible component has dimension $d$. Perfectness uses [[math:def-perfect-field]]. The smooth locus uses the germ-local convention of [[math:def-smooth-locus-morphism]], so restriction to an open neighborhood does not change smoothness at a point. The residue field is $\kappa(x)=\mathcal O_{T,x}/\mathfrak m_x$ as in [[math:def-residue-field-scheme-point]]; its bracket here is a perfect-complex class, not a claim that the residue module is projective.

## Proof
1.1 By [F2], the components of $T$ are disjoint and open with their integral scheme structures; by purity all have dimension $d$. At a point of one component, that component is an open neighborhood in $T$, so smoothness of its structure morphism and smoothness of $T$ at the point are the same germ-local condition by [F5]. Thus Krishna's union of smooth loci of dimension-$d$ components is precisely the intrinsic smooth locus $U$ of $T$. Both forbidden loci are consequently the same reduced complement $Y=T\setminus U$, and both free groups are the finite formal integer sums of closed points of $U$; call this group $Z$. For this same $Y$, [F1] and [F4] allow exactly the same reduced pure one-dimensional closed curves: no component lies in $Y$, and the ideal is generated by a regular sequence at every point of intersection with $Y$. For each allowed $C$, the finite set $S$ of those intersection points together with all component generic points is identical. A semilocal unit at $S$ is an invertible germ on a neighborhood of $S$: its representative and inverse may be restricted to a common neighborhood, with equality tested after further restriction. This is precisely the unit group of the neighborhood-colimit ring in [F4]. Restriction to the same generic points therefore gives the same rational functions on the same reduced integral components. The component principal divisors in [F1] are the same zeros-minus-poles divisors expressed by the local length orders in [F4], with the same closed-point inclusions into $T$. Hence each relation generator agrees in both directions, and the generated subgroups are equal, say $R\subseteq Z$. The identity on $Z$ thus induces the canonical identification of Krishna's quotient with $\operatorname{CH}^{LW}_0(T)=Z/R$. [F1, F2, F3, F4, F5, given]

2.1 Use step 1.1 to view the quotient map of [F1] as a homomorphism from $Z/R$, and compose it with the affine perfect comparison of [F2]. Its generator value is $[i_*\kappa(x)]$; thus its composite with $q:Z\to Z/R$ is exactly the actual point-class homomorphism, and every relation in $R$ maps to zero. The relation-vanishing theorem is imported through [F1], while its application to this particular quotient is justified by step 1.1. Since every coset has a representative in $Z$, $q$ is surjective. The image on $Z/R$ consequently equals the image of the free-point homomorphism on $Z$: one inclusion follows by composition, and the other by representing a coset. That image consists exactly of finite integer linear combinations of the residue classes, since $Z$ has those point generators. By [F4] it is $F^{\dim T}_{\mathrm{sm}}K_0(T)$, contained in the same-weight motivic filtration; its pure-dimensional qcqs hypotheses follow from the given purity and [F2]. Restriction of the codomain to this image is a surjection. This uses no assertion of injectivity and makes no assertion about the kernel beyond annihilation of $R$. [F1, F2, F3, F4, step 1.1] ∎

## External input
The established quotient cycle map and relation vanishing in [F1] are imported through the declared supplier from Krishna, §2.1, equation (2.2). The exact source and reading limits are recorded above. The presentation comparison and image calculation are locally supplied arguments; the whole lemma is not an imported theorem.
