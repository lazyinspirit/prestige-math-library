---
id: cex-z-squared-is-not-hyperbolic
kind: counterexample
title: "Z^2 is not hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]
proof_strategy: direct
verification:
  audited: 2026-08-27
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

The page proves that not every finitely generated group is hyperbolic; the
standard witness is $\mathbb Z^2$.

## Facts & Assumptions

**Given:** The free abelian group $\mathbb Z^2$.

[L1] Free abelian groups of rank at least two are not hyperbolic
([[prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic]]).

## Counterexample

**Proof technique:** direct.

1.1 The group $\mathbb Z^2$ is free abelian of rank $2$. [given]

2.1 Therefore [L1] shows that $\mathbb Z^2$ is not hyperbolic, providing the required counterexample. [L1, step 1.1] ∎ 