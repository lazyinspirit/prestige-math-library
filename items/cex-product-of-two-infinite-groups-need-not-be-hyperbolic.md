---
id: cex-product-of-two-infinite-groups-need-not-be-hyperbolic
kind: counterexample
title: "A product of two infinite groups need not be hyperbolic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized statement/refutation alignment repair; full target and direct supplier proof read; targeted precheck/rendercheck. No independent judgment or whole-closure certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement refuted

Every direct product of two infinite finitely generated groups is hyperbolic.

## Facts & Assumptions

**Given:** The direct product $\mathbb Z \times \mathbb Z$.

[L1] Free abelian groups of rank at least two are not hyperbolic
([[prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]]).

## Counterexample

**Proof technique:** direct.

1.1 The group $\mathbb Z \times \mathbb Z$ is a direct product of two infinite groups and is free abelian of rank $2$. [given]

2.1 Therefore [L1] shows that $\mathbb Z \times \mathbb Z$ is not hyperbolic. So the general claim fails. [L1, step 1.1] ∎
