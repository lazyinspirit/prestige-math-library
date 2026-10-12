---
id: "thm-constructible-six-functors-proper-base-change-and-verdier-duality"
kind: theorem
title: "Constructible six functors, proper base change and normalized equivariant duality"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "lem-analytic-constructible-sheaves-admit-coherent-six-operations", "lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom", "thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace", "thm-verdier-duality-on-oriented-stratified-complex-varieties"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Statement

Assume AC, $k$ of characteristic zero and an algebraic action of a product $G$ of general linear groups on separated finite-type complex varieties. The coherent ordinary six-operation contract holds in $D^b_{G,c}$ for equivariant algebraic maps. For a Cartesian square with $f:X\to Y$, $u:Y'\to Y$, $v:X'\to X$ and $f':X'\to Y'$, the actual exchange $u^*Rf_!\simeq Rf'_!v^*$ and its dual mate $u^!Rf_*\simeq Rf'_*v^!$ obey Cartesian pasting. Proper $f$ has $Rf_!=Rf_*$. Adjunction, projection formula and trace obey their coherent composition identities. The normalized dualizing object restricts to ordinary $\omega_X$; smooth complex $d$-dimensional $X$ has $\omega_X^G=k_X[2d]$. This is not the unnormalized quotient-stack dualizing shift.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[thm-verdier-duality-on-oriented-stratified-complex-varieties]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 At each actual smooth free resolution use the ordinary constructed six operations. Smooth base-change comparison gives compatible transition isomorphisms on the product resolutions. The finite resolution-triple category and its uniqueness of comparisons therefore assemble actual equivariant operations. Adjunctions and coherent projection/exchange/trace maps use the ordinary units/counits; their triangle and pasting identities hold at the same finite resolution for all objects in the finite diagram, hence hold in the actual equivariant category by fully faithful comparison. [given, F1, F2, F3, F4, F5]

2.1 At the Stiefel resolution, the normalized dualizing object is $\omega_{X_N}\otimes a_{X_N}^*\omega_{B_N}^{-1}$. This corrects ordinary Verdier duality by $-2\dim_\mathbb C B_N$, and its restriction to X is $\omega_X$. Ordinary complex orientation makes it $k[2\dim_\mathbb C X]$ when X is smooth, with no group-dimension shift. Smooth base-change compatibility of orientation and the actual Verdier evaluation maps gives biduality, the two dual exchange identities, proper equality and the asserted equivariant coherence. [given, F1, F2, F3, F4, F5] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
