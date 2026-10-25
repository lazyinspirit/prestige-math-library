---
id: thm-normal-moore-implies-inner-model-measurable
kind: theorem
title: "NMSC gives an inner model with a measurable cardinal"
status: published
origin: pipeline
deps: [thm-no-inner-model-measurable-implies-fleissner-hyp, thm-fleissner-hyp-normal-nonmetrizable-moore-space, def-fleissner-hyp-covering-interface, def-moore-spaces-and-developments, thm-constructible-inner-model-semantic-and-formal-schema]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contrapositive
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "Main theorem and Figure 1, printed pp. 365-368"
verification:
  audited: 2026-09-22
---

## Statement

$\mathrm{ZFC} + \mathrm{NMSC}$ proves that there is an inner model with a
measurable cardinal, where NMSC is the assertion that every normal Moore space
is metrizable and an inner model is a transitive class model of
$\mathrm{ZFC}$ containing all ordinals
([[thm-constructible-inner-model-semantic-and-formal-schema]]).

## Facts & Assumptions

**Given:** The hypothesis NMSC over $\mathrm{ZFC}$.

[F1] If there is no inner model with a measurable cardinal, then
$\mathrm{ZFC}$ proves HYP with the parameters the construction consumes
([[thm-no-inner-model-measurable-implies-fleissner-hyp]],
[[def-fleissner-hyp-covering-interface]]).

[F2] HYP proves that there is a normal nonmetrizable Moore space
([[thm-fleissner-hyp-normal-nonmetrizable-moore-space]],
[[def-moore-spaces-and-developments]]).

[F3] Such a space is a counterexample to NMSC. [given]



## Proof

**Proof technique:** contrapositive.

1.1 Argue contrapositively inside $\mathrm{ZFC}$: assume there is no inner model with a measurable cardinal. [contrapositive-reduce, assume-hyp, given]

2.1 By [F1] the assumption implies HYP with a fixed parameter triple $\kappa, (\kappa_n), E$ and fixed ladders. [step 1.1, F1]

3.1 By [F2] applied to those parameters there is a normal nonmetrizable Moore space. [step 2.1, F2]

4.1 That space violates NMSC by [F3]. Hence the assumption of step 1.1 implies the negation of NMSC; contraposition gives that NMSC implies the existence of an inner model with a measurable cardinal. [step 3.1, F3, discharge-contrapositive] ∎

## Remarks

- **The inner model is not constructed by the topological argument.** The
  topological half produces a counterexample to NMSC from HYP; the existence
  of the inner model is the contrapositive of the covering-theoretic half
  ([[thm-no-inner-model-measurable-implies-fleissner-hyp]]). No claim is made
  here that the space or its construction yields a measurable cardinal.
