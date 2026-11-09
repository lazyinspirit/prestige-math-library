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
dependency_roles:
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  thm-author-80f982ded420-quotient-cycle-map-input: mathematical-premise
  def-levine-weibel-zero-cycles: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the supplied point, support and perfect K-theory constructions. Let $T$ be a normal affine scheme of finite type and pure dimension $d\geq1$ over a perfect field. The source cycle map, transported to the actual affine perfect $K_0$, is
$$\operatorname{cyc}_T:\operatorname{CH}^{LW}_0(T)\longrightarrow K_0(T),\qquad [x]\longmapsto[i_*\kappa(x)].$$
It kills every completed Cartier-curve principal-divisor relation and its image is exactly $F^{\dim T}_{\mathrm{sm}}K_0(T)$. Its codomain can therefore be restricted to this subgroup, yielding a surjection onto it. This is an image statement, not an assertion of injectivity of the cycle map or an isomorphism of the entire Chow group with that image.

## Facts & Assumptions
**Given:** The stated normal affine finite-type pure-dimensional scheme over a perfect field, Choice and size bounds, and the exact quotient definition above.

**Goal:** Identify the actual map and its image, rather than infer descent merely from naming point generators.

[F1] Affine finite type makes $T$ quasi-projective over the field, and normality makes it reduced. Positive pure dimension and the perfect-field hypothesis therefore put $T$ in the source domain. [[thm-author-80f982ded420-quotient-cycle-map-input]] supplies the established quotient map and its values on generators; in particular all allowed principal-divisor relations are killed.

[F2] [[lem-author-80f982ded420-normal-point-strata]] identifies those values with the actual current point classes. [[def-smooth-point-filtration]] identifies their generated subgroup with the stated pure-dimensional smooth-point subgroup.

[F3] [[math:def-axiom-of-choice]] supplies the Choice assumption inherited by the point-class and affine perfect comparison in [F2]; the fixed size bounds are those of these supplied constructions.

## Proof
1.1 Apply the supplied comparisons under [F3]. Let $Z$ be the free abelian group on smooth closed points and $R$ the completed Cartier-curve relation subgroup. [F1] asserts a homomorphism on $Z/R$ whose composite with the quotient sends $[x]$ to the classical residue class. By [F2] the affine perfect comparison transports that homomorphism to the current K-group and sends the same generator to $[i_*\kappa(x)]$. Therefore every member of $R$, including each divisor generator, maps to zero under this actual point-class map. This descent is the exact imported established input; it is not a new local reconstruction of the relation theorem. [F1, F2, F3]

2.1 The quotient $Z\to Z/R$ is surjective, so composing any homomorphism from $Z/R$ with it does not change its image. The image of the resulting free-point map consists exactly of all finite integer linear combinations of the residue classes. By [F2] this is $F^{\dim T}_{\mathrm{sm}}K_0(T)$, and this subgroup lies in the same-weight motivic filtration by the completed definition. Restricting the map's codomain gives the stated surjection. No assertion about its kernel beyond $R$ being killed has been made. [F1, F2, step 1.1] ∎
