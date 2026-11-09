---
title: Levine–Weibel relations split on clopen pure-dimensional components
status: draft
research_item: lem-author-80f982ded420-clopen-quotients
dependency_level: 18
---

PDF p. 3: Levine–Weibel image after TheoremC; PDF p. 14: Definition6.5 pure-dimensional smooth-point subgroup

## Prerequisites

- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [def-levine-weibel-zero-cycles](item-def-levine-weibel-zero-cycles)
- [thm-author-80f982ded420-quotient-cycle-map-input](item-thm-author-80f982ded420-quotient-cycle-map-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed size conventions of the supplied constructions. Fix a perfect field $k$. For a finite clopen union $T=\coprod_\alpha T_\alpha$ of normal affine finite-type $k$-schemes, each of pure dimension $e\geq1$, the completed pure-dimensional Levine–Weibel definition gives
$$\operatorname{CH}^{LW}_0(T)\cong\bigoplus_\alpha\operatorname{CH}^{LW}_0(T_\alpha),$$
with the component inclusions induced by zero extension of point cycles. For a normal affine finite-type $k$-scheme $X$ of dimension $d\geq1$ which need not be pure, Krishna's exact dimension-$d$ convention has generators only on the regular parts of its $d$-dimensional components. In this convention
$$\operatorname{CH}^{d}_{\mathrm{Kr}}(X)\cong\operatorname{CH}^{LW}_0(X_d).$$
The left notation denotes precisely Krishna's Section2.1 group, not a redefinition of the completed pure-dimensional local item. Its source “singular locus” in this nonpure convention includes all lower-dimensional clopen components, even if they are geometrically smooth.

## Facts & Assumptions
**Given:** The stated perfect field, finite-type schemes, Choice and size bounds, the clopen decomposition and the exact Cartier-curve/semilocal-unit/principal-divisor relations of [def-levine-weibel-zero-cycles](item-def-levine-weibel-zero-cycles).

**Goal:** Match the actual source quotient, including which smooth points are permitted.

[F1] [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) gives the finite clopen pieces and equality of their intrinsic smooth/regular loci over the perfect field.

[F2] [thm-author-80f982ded420-quotient-cycle-map-input](item-thm-author-80f982ded420-quotient-cycle-map-input) records Krishna's actual Section2.1 top-dimensional generator convention.

[F3] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies the Choice assumption inherited by the completed cycle definition and normal-component supplier. Affine finite type over $k$ gives quasi-projectivity, and normality gives reducedness. The equal pure dimensions in the first assertion make the completed cycle definition applicable to every piece and to their finite union.

## Proof
1.1 The free point-cycle group is the direct sum of those on the clopen pieces. A Cartier curve $C\subset T$ splits as $C\cap T_\alpha$, a finite clopen decomposition; each nonempty piece is reduced purely one-dimensional. No-component-in-the-forbidden-set and the regular-sequence condition at forbidden points are checked in the same local rings, so each is a relative Cartier curve on its piece. The semilocal unit data splits as a product of the corresponding unit data, and its componentwise divisor is the sum of the same divisors supported on the pieces. Conversely a Cartier curve and a unit on one clopen piece define the identical allowed curve and relation on $T$. Thus the relation subgroup is exactly the direct sum of the component relation subgroups. Quotienting proves the first isomorphism. [F1, F3, given, algebra]

2.1 In the nonpure normal case [F2] excludes all lower-dimensional components from its permitted generator locus and includes them in the forbidden set. Since these components are clopen, a Cartier curve with a component on one of them would have that entire curve component contained in the forbidden set, which is not allowed. Every allowed curve is therefore contained in $X_d$. Its remaining local regular-sequence conditions and divisors are exactly those in the completed definition on $X_d$. Both the free generators and the relation subgroup coincide, proving the second isomorphism. This identifies the source convention without altering the completed pure-dimensional definition. [F1, F2, step 1.1] ∎
