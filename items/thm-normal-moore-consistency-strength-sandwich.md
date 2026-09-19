---
id: thm-normal-moore-consistency-strength-sandwich
kind: theorem
title: "The consistency-strength sandwich for NMSC"
status: draft
origin: pipeline
deps: [thm-strongly-compact-relative-consistency-normal-moore, thm-normal-moore-implies-inner-model-measurable, thm-formal-nmsc-consistency-lower-bound, def-moore-spaces-and-developments]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Section 8G"
    - title: "Bagaria and da Silva, omega-one-strongly compact cardinals and normality"
      url: "https://diposit.ub.edu/server/api/core/bitstreams/d5caf92a-962e-496a-a31e-5630dafa67ec/content"
      locator: "Introduction and Theorem 2.5"
---

## Statement

$\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$ implies
$\operatorname{Con}(\mathrm{ZFC} + \text{there is a measurable cardinal})$,
while $\operatorname{Con}(\mathrm{ZFC} + \text{there is a strongly compact
cardinal})$ implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$
([[thm-strongly-compact-relative-consistency-normal-moore]],
[[thm-formal-nmsc-consistency-lower-bound]]).

## Facts & Assumptions

**Given:** The two metatheoretic consistency hypotheses.

[F1] The lower bound: $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$ implies $\operatorname{Con}(\mathrm{ZFC} + \text{a measurable cardinal})$ ([[thm-formal-nmsc-consistency-lower-bound]]).

[F2] The upper bound: $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$ implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$ ([[thm-strongly-compact-relative-consistency-normal-moore]]).

[F3] The internal assertion "$\mathrm{ZFC}+\mathrm{NMSC}$ proves that there is an inner model with a measurable cardinal" ([[thm-normal-moore-implies-inner-model-measurable]]) is a distinct claim from both consistency implications. [given]



## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$: by [F1], $\operatorname{Con}(\mathrm{ZFC} + \text{a measurable cardinal})$ follows. [given, F1]
1.2 Assume $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$: by [F2], $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$ follows. [given, F2]
2.1 Steps 1.1 and 1.2 are the two implications of the Statement, and [F3] keeps the internal measurable-inner-model consequence separate from them. [step 1.1, step 1.2, F3] ∎

## Remarks

- **Three distinct claims.** The internal theorem, the lower consistency implication and the forcing/measure upper implication are kept as three separate assertions; no converse of the upper bound is claimed here ([[thm-strongly-compact-relative-consistency-normal-moore]]).
