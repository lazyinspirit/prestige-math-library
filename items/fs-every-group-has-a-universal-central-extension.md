---
id: fs-every-group-has-a-universal-central-extension
kind: false-statement
title: "Every group has a universal central extension"
status: published
origin: pipeline
deps: [thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect]
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

Every group has a universal central extension.

## Facts & Assumptions

**Given:** Take the nontrivial abelian group $C_2$.

## Refutation

**Proof technique:** direct.

1.1 Its commutator subgroup is trivial, so $C_2$ is not perfect. [given, algebra]

2.1 By [[thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect]], $C_2$ has no universal central extension. [step 1.1, contradiction] ∎
