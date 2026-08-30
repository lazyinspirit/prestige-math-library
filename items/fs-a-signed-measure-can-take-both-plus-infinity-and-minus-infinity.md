---
id: fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity
kind: false-statement
title: "FALSE: a signed measure can take both +infinity and -infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-signed-measure]
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
    - title: "John K. Hunter, Measure Theory, Definition 6.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** A signed measure may take the value $+\infty$ on one measurable
set and the value $-\infty$ on another.

## Facts & Assumptions

**Given:** The definition of a signed measure.

[L1] A signed measure takes at most one infinite sign. ([[def-signed-measure]])

## Refutation

**Proof technique:** direct.

1.1 The displayed claim asserts exactly the negation of the second clause in [L1]
[L1].

2.1 Therefore no signed measure satisfies the claim, and the statement is [L1, step 1.1] ∎
false.
