---
page: constructible-incidence-and-cochain-models
title: "Constructible Incidence And Cochain Models"
status: draft
items: [lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
        lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]
examples: []
requires:
  - analytic-constructible-sheaf-foundations
  - compact-support-sheaf-calculus
  - relations-functions-and-quotients
  - sheaf-cohomology-cech-cohomology-and-comparison
  - sheaf-operations-exactness-ringed-spaces-and-module-pullback
---

**Objective.** This page builds the finite incidence and cochain models that
turn constructible sheaves on a finite simplicial complex into finite
diagrams, and the locally split Čech descent that turns an algebraic principal
bundle back into sheaves on its base. On the finite pair $X=|K|\setminus|D|$,
the face poset of the open simplices outside $D$ carries finite-dimensional
covariant diagrams whose exact realization is fully faithful in
$D^b(\operatorname{Sh}_k(X))$, with essential image the complexes of bounded
finite-rank locally constant cohomology on each open simplex; ordinary and
compact-support cohomology, ordinary Hom and internal derived Hom acquire
bounded finite cochain models commuting with field extension, and a local
product projection has a comparison $R\operatorname{pr}_*\operatorname{pr}^*B\simeq
B\otimes_kC^*(F;k)$ with its unit exhibited. Passing to a strict augmented
simplicial space, the same technology produces explicit coinduced injective
resolutions and computes the derived augmentation by the normalized double
complex with first page $R^jq_{p*}F_p$, with finite total-degree diagonals and
the bisimplicial and composition clauses; for the Čech nerve of a locally split
map, inverse image is an equivalence onto the derived subcategory with
Cartesian cohomology, restricting to algebraic constructibility for algebraic
principal $\mathrm{GL}$ bundles. The companion page computes the method on the
closed interval.
