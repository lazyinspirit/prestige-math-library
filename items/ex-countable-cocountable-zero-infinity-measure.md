---
id: ex-countable-cocountable-zero-infinity-measure
kind: example
title: "Assuming countable choice, zero on countable sets and infinity on cocountable sets is a non-semifinite measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-measure, def-finite-sigma-finite-and-semifinite-measures, def-sigma-algebra, def-countable, def-countable-choice, thm-countable-union-of-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice and let $X$ be uncountable. On the sigma-algebra $\mathcal A$ of countable and cocountable subsets of $X$, define

$$\mu(A):=\begin{cases}0,&A\text{ is countable},\\+\infty,&X\setminus A\text{ is countable}.\end{cases}$$

Then $\mu$ is a measure, but it is not semifinite.

## Facts & Assumptions

**Given:** An uncountable set $X$ and the Axiom of Countable Choice.

[L1] A sigma-algebra is closed under complements and countable unions ([[def-sigma-algebra]]), and a measure is countably additive on disjoint measurable sequences ([[def-measure]]).

[L2] Countable means finite or countably infinite ([[def-countable]]), and under countable choice a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L3] Semifiniteness requires every positive-measure measurable set to contain a positive finite-measure measurable subset ([[def-finite-sigma-finite-and-semifinite-measures]]).

## Verification

**Proof technique:** direct.

1.1 The countable-cocountable family $\mathcal A$ is a sigma-algebra: complements exchange its two classes, a countable union of countable members is countable by [L2], and a union containing a cocountable member is cocountable. [given, L1, L2]

1.2 The whole space has measure $+\infty$, while every measurable set of finite measure has measure $0$; hence $X$ contains no measurable subset of positive finite measure. [given]

2.1 In a pairwise disjoint sequence from $\mathcal A$, at most one member is cocountable. If all members are countable, their union is countable by [L2] and both sides of countable additivity are $0$; if one is cocountable, the union is cocountable and both sides are $+\infty$. [step 1.1, L1, L2]

3.1 Steps 1.1 and 2.1 prove that $\mu$ is a measure, and step 1.2 violates the semifiniteness condition [L3]. [step 1.1, step 2.1, step 1.2, L3] ∎
