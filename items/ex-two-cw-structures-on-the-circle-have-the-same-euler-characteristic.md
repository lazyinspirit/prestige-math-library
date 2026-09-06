---
id: ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic
kind: example
title: Two CW structures on the circle have the same Euler characteristic
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Theorem 2.44
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

The one-vertex/one-edge and the two-vertex/two-edge CW structures on $S^1$ both have Euler characteristic $0$.

## Facts & Assumptions

**Given:** These two finite CW structures on the circle.

## Verification

**Proof technique:** direct.

1.1 Their alternating cell counts are $1-1=0$ and $2-2=0$, using [[def-euler-characteristic-of-a-finite-cw-complex]]. [given]

2.1 Both agree with $\operatorname{rank}H_0(S^1)-\operatorname{rank}H_1(S^1)=1-1$ by [[thm-euler-poincare-formula-for-finite-cw-complexes]]. [step 1.1] ∎
