---
id: fs-a-hahn-decomposition-is-unique
kind: false-statement
title: "FALSE: a Hahn decomposition is unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hahn-decomposition-for-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** Every signed measure has exactly one Hahn decomposition.

## Facts & Assumptions

**Given:** The zero signed measure $\nu\equiv0$ on the discrete measurable
space $(X,\mathcal P(X))$, where $X=\{0,1\}$.

[L1] Hahn decompositions are unique only up to null sets. ([[thm-hahn-decomposition-for-signed-measures]])

## Refutation

**Proof technique:** direct.

1.1 Every measurable subset of $X$ is both positive and negative for the zero [L1]
measure, so both
$$\varnothing\sqcup X\qquad\text{and}\qquad \{0\}\sqcup\{1\}$$
are Hahn decompositions.

2.1 These decompositions are different, so exact uniqueness fails. This is [L1, step 1.1] ∎
compatible with [L1] because the differing set is null.
