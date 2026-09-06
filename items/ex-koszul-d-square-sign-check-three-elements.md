---
id: ex-koszul-d-square-sign-check-three-elements
kind: example
title: "Koszul D Square Sign Check Three Elements"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-differential-coordinate-formula, lem-koszul-differential-square-pairwise-cancellation]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Example

For $e_1\wedge e_2\wedge e_3$, expand $d^2$ and pair the two appearances of each $x_ix_j e_k$ with opposite signs.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-differential-coordinate-formula]], [[lem-koszul-differential-square-pairwise-cancellation]].

## Proof

**Proof technique:** direct.

1.1 After one differential the three terms are $x_1e_2\wedge e_3-x_2e_1\wedge e_3+x_3e_1\wedge e_2$. [given, algebra]

2.1 The second differential produces each $x_ix_je_k$ twice with opposite signs, so the total is zero. [step 1.1, algebra] ∎
