---
id: fs-every-nonamenable-group-contains-a-rank-two-free-subgroup
kind: false-statement
title: "FALSE: every nonamenable group contains a rank-two free subgroup"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-nonamenable-groups-without-nonabelian-free-subgroups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Every nonamenable group contains a free subgroup of rank $2$.

## Facts & Assumptions

**Given:** The false claim above.

[L1] There exist nonamenable groups without nonabelian free subgroups
([[rem-nonamenable-groups-without-nonabelian-free-subgroups]]).

## Refutation

**Proof technique:** direct.

1.1 The remark [L1] supplies a group that is nonamenable and has no nonabelian free subgroup at all. [L1, given]

2.1 Such a group cannot contain a free subgroup of rank $2$, so it refutes the statement. [step 1.1] ∎
