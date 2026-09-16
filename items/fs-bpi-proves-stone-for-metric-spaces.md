---
id: fs-bpi-proves-stone-for-metric-spaces
kind: false-statement
title: "False: BPI proves Stone's theorem for metric spaces"
status: draft
origin: pipeline
deps: [thm-relative-consistency-bpi-without-stone, def-boolean-prime-ideal-principle, def-paracompact-space, def-metacompact-space, def-cover-refinement-and-local-finiteness, def-metric-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "Introduction and Theorem 1"
---

## Statement

False: over $\mathrm{ZF}$, BPI implies that every metrizable space is
paracompact.

More precisely, the universal implication from BPI to Stone's theorem for metric
spaces is not provable over $\mathrm{ZF}$: relative to
$\operatorname{Con}(\mathrm{ZF})$ there is a model of $\mathrm{ZF}+\mathrm{BPI}$
containing a metrizable space that is not paracompact
([[def-boolean-prime-ideal-principle]], [[def-paracompact-space]],
[[def-metric-space]]).

## Refutation

## Facts & Assumptions

**Given:** The relative-consistency theorem for BPI with a metrizable nonmetacompact space, and the assumed consistency of $\mathrm{ZF}$.

[F1] Relative to $\operatorname{Con}(\mathrm{ZF})$ there is a model of $\mathrm{ZF} + \mathrm{BPI}$ containing a metrizable space with an open cover that has no point-finite refinement ([[thm-relative-consistency-bpi-without-stone]], [[def-metacompact-space]], [[def-cover-refinement-and-local-finiteness]]).

[F2] A paracompact space is one in which every open cover has a locally finite open refinement, and a locally finite family is point-finite ([[def-paracompact-space]], [[def-cover-refinement-and-local-finiteness]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume, for the sake of contradiction, that over $\mathrm{ZF}$ BPI implies that every metrizable space is paracompact, and assume $\operatorname{Con}(\mathrm{ZF})$. [assume-contra, given]

2.1 In the model of [F1] the theory $\mathrm{ZF}+\mathrm{BPI}$ holds, so by the assumed implication every metrizable space in that model is paracompact; in particular the space $X$ with the cover $\mathcal{U}$ that has no point-finite refinement would be paracompact. [step 1.1, F1]

3.1 Then $\mathcal{U}$ would have a locally finite open refinement $\mathcal{V}$, and $\mathcal{V}$ would be point-finite by [F2], contradicting the defining property of $\mathcal{U}$ from [F1]. [step 2.1, F2]

4.1 The contradiction shows that BPI does not imply Stone's theorem for metric spaces over $\mathrm{ZF}$, conditionally on $\operatorname{Con}(\mathrm{ZF})$; the refutation is relative-consistency based and does not exhibit an outright counterexample in ZF. [step 3.1, F1, discharge-contradiction] ∎
