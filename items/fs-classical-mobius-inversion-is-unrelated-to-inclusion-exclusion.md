---
id: fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion
kind: false-statement
title: "False: classical Möbius inversion and inclusion-exclusion are unrelated inversion principles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-classical-mobius-inversion, cor-inclusion-exclusion-is-boolean-mobius-inversion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Classical divisor Möbius inversion and finite inclusion-exclusion arise from unrelated algebraic principles.

## Facts & Assumptions

**Given:** The divisibility poset and finite Boolean lattices.

[L1] Classical divisor inversion is lower-finite poset Möbius inversion on positive-integer divisibility ([[cor-classical-mobius-inversion]]).

[L2] Complementary inclusion-exclusion is upper-finite poset Möbius inversion on a finite Boolean lattice ([[cor-inclusion-exclusion-is-boolean-mobius-inversion]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the classical divisor formula is an instance of the general poset inversion theorem. [L1]

1.2 By [L2], complementary inclusion-exclusion is another instance of the same theorem, for a different poset. [L2]

2.1 Thus the two principles share one incidence-algebra inversion mechanism, so the claim that they are unrelated is false. [step 1.1, step 1.2] ∎
