---
id: thm-semifinite-part-is-a-measure
kind: theorem
title: "Assuming countable choice, the semifinite part is a semifinite measure and equals the original measure exactly when it is semifinite"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-semifinite-part-of-a-measure, lem-semifinite-measures-have-arbitrarily-large-finite-subsets, def-countable-choice, def-measure, prop-measure-monotonicity, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 15(a-b)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. For every measure $\mu$, its semifinite part $\mu_{\mathrm{sf}}$ is a semifinite measure and $\mu_{\mathrm{sf}}\le\mu$. Moreover,

$$\mu_{\mathrm{sf}}=\mu\quad\Longleftrightarrow\quad\mu\text{ is semifinite}.$$

## Facts & Assumptions

**Given:** A measure $\mu$ on $(X,\mathcal A)$ and the Axiom of Countable Choice.

[L1] The semifinite part is the supremum of the finite values $\mu(F)$ over measurable $F\subseteq E$ ([[def-semifinite-part-of-a-measure]]).

[L2] Under countable choice, an infinite-measure set for a semifinite measure contains finite-measure subsets of arbitrarily large measure ([[lem-semifinite-measures-have-arbitrarily-large-finite-subsets]]).

[L3] A measure is countably additive on disjoint measurable sequences ([[def-measure]]), and measures are monotone ([[prop-measure-monotonicity]]).

[L4] A natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 One has $\mu_{\mathrm{sf}}(\varnothing)=0$ and $\mu_{\mathrm{sf}}(E)\le\mu(E)$ for every measurable $E$, since every finite-measure $F\subseteq E$ satisfies $\mu(F)\le\mu(E)$. [given, L1, L3]

1.2 Let $(E_k)$ be disjoint and $E=\bigcup_kE_k$. If $F\subseteq E$ is measurable with $\mu(F)<+\infty$, then the $F\cap E_k$ are disjoint finite-measure subsets of $E_k$, so $\mu(F)=\sum_k\mu(F\cap E_k)\le\sum_k\mu_{\mathrm{sf}}(E_k)$. Taking the supremum over $F$ gives $\mu_{\mathrm{sf}}(E)\le\sum_k\mu_{\mathrm{sf}}(E_k)$. [given, L1, L3]

1.3 Conversely, for each finite initial range, the supremum property and finite choice permit finite-measure $F_k\subseteq E_k$ arbitrarily close to $\mu_{\mathrm{sf}}(E_k)$; their finite disjoint union has finite measure and lies in $E$. If one of the finitely many suprema is $+\infty$, use an arbitrarily large finite value instead. Hence every finite partial sum $\sum_{k<n}\mu_{\mathrm{sf}}(E_k)$ is at most $\mu_{\mathrm{sf}}(E)$, and so is their supremum. [given, L1, L3, L4, choose]

1.4 The set function $\mu_{\mathrm{sf}}$ is semifinite: if $\mu_{\mathrm{sf}}(E)>0$, its defining supremum supplies a measurable $F\subseteq E$ with $0<\mu(F)<+\infty$, and then $\mu_{\mathrm{sf}}(F)=\mu(F)$. [given, L1, L3]

1.5 For the reverse direction, suppose $\mu$ is semifinite. If $\mu(E)<+\infty$, the choice $F=E$ gives $\mu_{\mathrm{sf}}(E)=\mu(E)$; if $\mu(E)=+\infty$, [L2] makes the defining finite values unbounded, so again $\mu_{\mathrm{sf}}(E)=\mu(E)$. [given, L1, L2]

2.1 Steps 1.1, 1.2 and 1.3 give the empty-set condition and both countable-additivity inequalities, so $\mu_{\mathrm{sf}}$ is a measure; step 1.4 makes it semifinite. [step 1.1, step 1.2, step 1.3, step 1.4, L3]

3.1 For the forward direction of the displayed equivalence, if $\mu_{\mathrm{sf}}=\mu$, then $\mu$ is semifinite because step 2.1 proves that $\mu_{\mathrm{sf}}$ is semifinite. [step 2.1]

4.1 Steps 3.1 and 1.5 prove both directions of the equivalence, while step 1.1 records the pointwise inequality $\mu_{\mathrm{sf}}\le\mu$. [step 1.1, step 3.1, step 1.5] ∎
