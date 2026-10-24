---
id: fs-every-central-extension-is-a-stem-extension
kind: false-statement
title: "Every central extension is stem"
status: published
origin: pipeline
deps: [def-central-and-stem-extensions]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Every central extension is a stem extension.

## Facts & Assumptions

**Given:** Consider the split central extension $C_2\to C_2\times C_2\to C_2$.

## Refutation

**Proof technique:** direct.

1.1 Its kernel is central, but the total group is abelian, so its commutator subgroup is trivial and does not contain the nontrivial kernel. [given, algebra]

2.1 The extension is central but not stem, refuting the assertion. [step 1.1, contradiction] ∎
