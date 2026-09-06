---
id: cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells
kind: counterexample
title: The Hawaiian earring is not a CW complex with its punctured circles as cells
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement refuted

The Hawaiian earring is a CW complex with the common tangency point as its $0$-cell and each circle minus that point as an open $1$-cell.

## Counterexample

**Given:** The union in $\mathbb R^2$ of circles of radius $1/n$ tangent at the origin.

**Proof technique:** direct.

1.1 The Hawaiian earring is compact as a closed bounded subset of $\mathbb R^2$, and it meets every proposed open $1$-cell (each punctured circle). [given]

2.1 This violates [[lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells]], so the proposed cell structure is not a CW complex. [step 1.1] ∎
