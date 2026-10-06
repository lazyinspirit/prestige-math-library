---
page: rellich-kondrachov-and-sobolev-compactness
title: Rellich Kondrachov and Sobolev Compactness
status: draft
items: ["def-compactly-embedded-normed-spaces", "lem-translation-estimate-for-w-one-p-functions", "lem-relative-compactness-implies-uniform-translation-continuity-in-lp", "lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic", "thm-frechet-kolmogorov-compactness-criterion-in-lp", "thm-rellich-compactness-from-w-one-p-zero-to-lp", "thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain", "thm-poincare-wirtinger-on-bounded-connected-extension-domains", "thm-local-lp-compactness-of-w-one-p-bounded-sequences", "cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets", "thm-rellich-kondrachov-for-p-less-than-n", "thm-rellich-kondrachov-at-the-critical-source-exponent", "thm-morrey-rellich-compactness-for-p-greater-than-n", "thm-higher-order-rellich-kondrachov", "cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences", "cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence", "rem-rellich-is-a-strictly-subcritical-theorem", "lem-fractional-level-set-kernel-measure-estimate", "lem-dyadic-level-set-summability-estimate", "lem-slobodeckij-seminorm-controls-dyadic-level-sets", "thm-fractional-sobolev-inequality-on-euclidean-space", "lem-slobodeckij-mollification-approximation-rates", "thm-fractional-rellich-kondrachov-compactness-on-bounded-sets", "thm-subcritical-compactness-of-the-sobolev-trace", "cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers", "cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo", "lem-strong-lp-closed-constraints-pass-through-rellich-limits"]
examples: []
---

This page proves the compact embedding theorems behind existence theory for
PDEs. It begins with the definition of a compact embedding and the
translation estimate for $W^{1,p}$ functions, the two inputs of the
Fréchet–Kolmogorov criterion: an $L^p$-bounded family with vanishing tails
and uniform translation control is totally bounded, and relative compactness
forces uniform translation continuity. From the criterion follow the Rellich
theorems: $W^{1,p}_0(\Omega)\Subset L^p(\Omega)$ on every bounded open set,
and $W^{1,p}(\Omega)\Subset L^p(\Omega)$ on bounded extension domains, with
no boundary regularity in the first case. A compactness proof of the
Poincaré–Wirtinger inequality and a local $L^p$-compactness theorem for
$W^{1,p}_{\mathrm{loc}}$-bounded sequences follow, together with the
subcritical and critical forms of Rellich–Kondrachov on extension domains,
the Morrey compactness into $C^{0,\beta}$ for $p>n$, and the higher-order
statements.

The second half develops the compactness machinery for fractional Sobolev
spaces that the subcritical trace theorem needs: the level-set kernel
estimate, a dyadic summability lemma, the Slobodeckij lower bound for dyadic
level sets, the critical fractional Sobolev inequality on $\mathbb R^d$, and
mollification rates that yield fractional Rellich compactness on bounded
supports. These feed the compactness of the Sobolev trace into subcritical
boundary $L^q$ spaces, the strictly subcritical character of every theorem on
the page, and three downstream consequences: the whole-sequence strong
convergence corollary for bounded sequences and their weak limits, the compact
$L^2$ operator corollary obtained from a bounded map into $H^1_0$, and the
lemma that norm-closed target constraints survive compact extraction.

## Notes

Every compactness statement carries the exact choice hypothesis of its proof:
the Fréchet–Kolmogorov theorem assumes Countable and Dependent Choice;
the Rellich theorems, the Morrey branch and the fractional Rellich theorem
assume the Axiom of Choice through their named suppliers, while the bounded-support tail lemma and the compact-operator definition
are choice-free. The sequential form of compact embedding is stated under
Countable and Dependent Choice.
