---
id: cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball
kind: counterexample
title: The closure of a CW cell need not be a closed ball
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cell-attachment-by-a-characteristic-map, lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement refuted

Every closed cell in a CW complex is homeomorphic to a closed ball.

## Counterexample

**Given:** Attach one $1$-cell to one $0$-cell by sending both points of $S^0$ to that vertex.

**Proof technique:** direct.

1.1 By [[def-cell-attachment-by-a-characteristic-map]], the closed-cell image is $D^1/\partial D^1\cong S^1$. [given]

2.1 Its open cell is still the embedded open interval by [[lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure]], but $S^1$ is not homeomorphic to $D^1$; this refutes the statement. [step 1.1] ∎
