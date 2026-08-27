---
id: fs-every-abelian-group-is-hyperbolic
kind: false-statement
title: "FALSE: every abelian group is hyperbolic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]
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
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

**False claim:** every abelian group is hyperbolic.

## Facts & Assumptions

**Given:** The abelian group $\mathbb Z^2$.

[L1] Free abelian groups of rank at least two are not hyperbolic
([[prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]]).

## Refutation

**Proof technique:** direct.

1.1 The group $\mathbb Z^2$ is abelian. [given]

2.1 The group $\mathbb Z^2$ has rank $2$, so [L1] shows that it is not hyperbolic. Therefore the claim is false. [L1, step 1.1] ∎ 