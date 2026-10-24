---
id: thm-euler-poincare-formula-for-finite-cw-complexes
kind: theorem
title: Euler–Poincare formula for finite CW complexes
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euler-characteristic-of-a-finite-cw-complex, def-cellular-homology, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Theorem 2.44
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For a finite CW complex, $\chi(X)=\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$.

## Facts & Assumptions

**Given:** The finite free integral cellular chain complex of $X$.

## Proof

**Proof technique:** direct.

1.1 Rank-nullity in each degree gives $\operatorname{rank}C_n=\operatorname{rank}H_n^{\rm cell}+\operatorname{rank}\operatorname{im}d_n+\operatorname{rank}\operatorname{im}d_{n+1}$. [given, algebra]

2.1 Alternating and summing cancels each boundary rank with its neighboring occurrence. The left side is [[def-euler-characteristic-of-a-finite-cw-complex]], and [[thm-cellular-homology-computes-singular-homology]] identifies the remaining ranks with singular homology. [step 1.1, algebra] ∎
