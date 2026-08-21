---
id: thm-semifinite-and-zero-infinity-decomposition
kind: theorem
title: "Assuming countable choice, every measure is the sum of its semifinite part and a zero-infinity-valued measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-semifinite-part-of-a-measure, thm-semifinite-part-is-a-measure, def-finite-sigma-finite-and-semifinite-measures, def-countable-choice, thm-product-of-countable, thm-countable-union-of-countable, thm-finite-and-countable-subadditivity-of-measures, def-counting-measure, prop-counting-measure-is-a-measure, thm-r-uncountable]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 15(c)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. For a measure $\mu$, define

$$\nu(E):=\begin{cases}0,&E\text{ is sigma-finite for }\mu,\\+\infty,&E\text{ is not sigma-finite for }\mu.\end{cases}$$

Then $\nu$ is a measure taking only the values $0$ and $+\infty$, and

$$\mu=\mu_{\mathrm{sf}}+\nu.$$

The zero-infinity summand in such a decomposition need not be unique.

## Facts & Assumptions

**Given:** A measure $\mu$ on $(X,\mathcal A)$ and the Axiom of Countable Choice.

[L1] Under countable choice, the semifinite part is a semifinite measure and agrees with a measure exactly when that measure is semifinite ([[thm-semifinite-part-is-a-measure]]).

[L2] Sigma-finiteness means admitting a countable measurable cover by finite-measure sets ([[def-finite-sigma-finite-and-semifinite-measures]]).

[L3] Countable choice selects countably many covers ([[def-countable-choice]]), and a product of two at most countable sets is at most countable ([[thm-product-of-countable]]).

[L4] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

[L5] Counting measure is a measure ([[prop-counting-measure-is-a-measure]]), and $\mathbb R$ is uncountable ([[thm-r-uncountable]]).

[L6] A countable union has measure at most the nonnegative sum of the measures of its members ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L7] The value $\mu_{\mathrm{sf}}(E)$ is the supremum of the values of finite-measure measurable subsets of $E$ ([[def-semifinite-part-of-a-measure]]).

[L8] Counting measure assigns a finite set its cardinality and an infinite set $+\infty$ ([[def-counting-measure]]).

## Proof

**Proof technique:** direct.

1.1 A measurable subset of a sigma-finite set is sigma-finite. Under [L3], a countable union of sigma-finite measurable sets is sigma-finite: select a finite-measure cover for each member and flatten the resulting $\mathbb N\times\mathbb N$ family to one countable cover. [given, L2, L3, choose]

1.2 If $E$ is sigma-finite for $\mu$, restriction of the measure axioms makes $\mu|_E$ a measure, and it is semifinite: a positive-measure subset must meet one member of a finite-measure cover in positive measure, since otherwise [L6] would make it null. The semifinite part of this restriction, evaluated at $E$, is exactly the supremum in [L7]. Thus [L1] applied to $\mu|_E$ gives $\mu_{\mathrm{sf}}(E)=\mu(E)$. [given, L1, L2, L6, L7]

1.3 For nonuniqueness, take counting measure $\#$ on the uncountable set $\mathbb R$. It is semifinite: every set of positive counting measure is nonempty, so one of its points gives a singleton subset of finite positive measure $1$ by [L8]. Hence [L1] makes its semifinite part itself. Besides the zero measure, define $\eta(E)=0$ for countable $E$ and $+\infty$ for uncountable $E$. One has $\eta(\varnothing)=0$; for a disjoint sequence, [L4] makes the union countable exactly when every member is countable, so countable additivity has both sides $0$ in that case and both sides $+\infty$ otherwise. Thus $\eta$ is a measure, and both $0$ and $\eta$ satisfy $\#=\#_{\mathrm{sf}}+0=\#_{\mathrm{sf}}+\eta$. [given, L1, L4, L5, L8]

2.1 Therefore, for a disjoint sequence $(E_k)$, the union is sigma-finite exactly when every $E_k$ is sigma-finite. Hence $\nu(\bigcup_kE_k)=0$ exactly when every $\nu(E_k)=0$, and otherwise both sides of $\nu(\bigcup_kE_k)=\sum_k\nu(E_k)$ are $+\infty$; also $\nu(\varnothing)=0$. [step 1.1, L2]

2.2 If $E$ is sigma-finite, step 1.2 gives $(\mu_{\mathrm{sf}}+\nu)(E)=\mu(E)+0$; if $E$ is not sigma-finite, then $\mu(E)=+\infty$ and $(\mu_{\mathrm{sf}}+\nu)(E)=\mu_{\mathrm{sf}}(E)+(+\infty)=+\infty$. [step 1.2, L2]

3.1 Step 2.1 proves that $\nu$ is a zero-infinity-valued measure. [step 2.1]

4.1 Step 2.2 proves $\mu=\mu_{\mathrm{sf}}+\nu$, and step 1.3 supplies two distinct zero-infinity summands for the same semifinite part, proving the final assertion. [step 2.2, step 1.3] ∎
