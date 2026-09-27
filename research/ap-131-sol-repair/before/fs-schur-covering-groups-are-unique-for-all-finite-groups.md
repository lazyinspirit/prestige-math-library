---
id: fs-schur-covering-groups-are-unique-for-all-finite-groups
kind: false-statement
title: "All finite Schur covers are unique"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, thm-existence-of-schur-covering-groups-for-finite-groups]
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

Every finite group has a unique Schur covering group up to isomorphism.

## Facts & Assumptions

**Given:** Let $V=C_2\times C_2$.

## Refutation

**Proof technique:** direct.

1.1 Since $M(V)\cong\bigwedge^2V\cong C_2$, both $C_2\to D_8\to V$ and $C_2\to Q_8\to V$ are stem extensions with multiplier kernel.  Thus both are Schur covers of $V$. [given, algebra]

2.1 The group $D_8$ has five involutions whereas $Q_8$ has one, so the two covers are not isomorphic.  Schur covers are therefore not unique in general. [step 1.1, contradiction] ∎
