---
page: induced-unitary-representations-of-locally-compact-groups
title: Induced Unitary Representations of Locally Compact Groups
status: draft
items:
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - def-rho-function-for-a-closed-subgroup
  - lem-bruhat-cutoff-on-a-closed-subgroup-quotient
  - thm-weil-quotient-integration-formula-with-rho-function
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree
  - lem-radon-nikodym-cocycle-of-a-homogeneous-measure
  - def-covariant-function-model-of-unitary-induction
  - lem-the-induced-inner-product-is-independent-of-coset-representatives
  - lem-compactly-supported-covariant-generators-are-dense
  - lem-the-induced-action-is-unitary
  - lem-the-induced-action-is-strongly-continuous
  - thm-unitary-induction-from-a-closed-subgroup
  - lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities
  - thm-induced-representation-is-independent-of-rho-function-and-measure-representative
  - lem-composition-of-quotient-integrals-for-subgroup-chains
  - thm-unitary-induction-in-stages
examples: []
---

Let $G$ be a locally compact Hausdorff group and $H\leq G$ a closed subgroup. This page constructs unitary induction from quotient integration through the resulting strongly continuous representation. It treats arbitrary locally compact groups; no global sigma-compactness assumption is imposed.

The convention throughout is
$$ \int_G f(xh)\,dx=\Delta_G(h)^{-1}\int_G f(x)\,dx, \qquad \rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x). $$
For the left action on $G/H$, the pushforward is $g_*\mu(E)=\mu(g^{-1}E)$, so a rho-derived Weil measure has density
$$ \frac{d(g_*\mu_\rho)}{d\mu_\rho}(xH)=\frac{\rho(g^{-1}x)}{\rho(x)}. $$
These formulas fix the reciprocal choices that otherwise vary across references.

The construction begins with the open quotient map $G\to G/H$, compact lifts and subgroup averaging. A normalized Bruhat cutoff supports the quotient integration formula. The rho-function existence proof then gives a full-support, strongly quasi-invariant Radon measure. Invariant quotient measure is a separate question: it exists exactly when $\Delta_G|_H=\Delta_H$.

For a strongly continuous unitary representation $\sigma$ of $H$, the induced space starts from continuous functions $F:G\to V$ satisfying $F(xh)=\sigma(h)^{-1}F(x)$, with compact support modulo $H$. The quotient inner product is independent of the representative. Averaged compactly supported vectors are dense, and the cocycle-corrected left action is unitary and strongly continuous. Its completion is the induced representation.

Equivalent rho-functions give the multiplier unitary $F\mapsto(\rho_1/\rho_2)^{1/2}F$. Equivalent quasi-invariant Radon representatives are handled by positive Radon–Nikodym densities on open sigma-compact components and the corresponding translated cocycles; the componentwise unitaries assemble on the Hilbert direct sum. The local density argument does not assert a global density on a non-sigma-finite quotient.

For a closed chain $L\leq H\leq G$, three compatible Weil measures yield an explicit quotient-integral composition formula. The induction-in-stages proof uses its positive density to define the comparison map, checks its norm and intertwining identities, and proves dense-range surjectivity on compactly supported covariant generators. The source’s published stages argument is a sketch; the item proof supplies these steps.

Choice assumptions are stated where used. In particular, the quotient-density cocycle, the representative-independent induced inner product, and the cocycle-corrected unitary action explicitly assume AC because their current proof route uses AC-qualified quotient-lift and Weil-measure suppliers, together with Radon-measure uniqueness under DC (derived from AC here); no choice-free replacement has been established for these routes. The downstream induction and continuity claims already carry the same assumption. The examples page records the regular representation, a cocompact discrete subgroup, the finite counting model, and a quotient with no invariant measure.
