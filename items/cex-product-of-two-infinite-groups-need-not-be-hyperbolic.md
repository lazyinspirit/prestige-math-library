---
id: cex-product-of-two-infinite-groups-need-not-be-hyperbolic
kind: counterexample
title: "A product of two infinite groups need not be hyperbolic"
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

## Statement refuted

The product of two infinite groups need not be hyperbolic.

## Facts & Assumptions

**Given:** The direct product $\mathbb Z \times \mathbb Z$.

[L1] Free abelian groups of rank at least two are not hyperbolic
([[prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]]).

## Counterexample

**Proof technique:** direct.

1.1 The group $\mathbb Z \times \mathbb Z$ is a direct product of two infinite groups and is free abelian of rank $2$. [given]

2.1 Therefore [L1] shows that $\mathbb Z \times \mathbb Z$ is not hyperbolic. So the general claim fails. [L1, step 1.1] ∎ 