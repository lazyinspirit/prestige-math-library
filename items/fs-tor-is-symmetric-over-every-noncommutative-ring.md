---
id: fs-tor-is-symmetric-over-every-noncommutative-ring
title: "Tor is not symmetric as a typed expression over every noncommutative ring"
kind: false-statement
status: published
origin: pipeline
deps: ["thm-tor-symmetry-over-a-commutative-ring", "def-tor-by-resolving-the-left-module"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

False claim: Tor is a symmetric bifunctor of two left modules over every ring.

## Refutation

**Given:** a noncommutative ring $R$ and two left modules.

1.1 The ordinary tensor product $M\otimes_RN$ already requires one factor to be right-handed. [given]

2.1 Thus the supposed inputs of the symmetric expression are not generally a valid domain for Tor. [step 1.1, algebra]

3.1 Commutativity supplies an identification of left and right actions; without it the asserted symmetry is ill-typed, not a theorem. [step 2.1, algebra] ∎
