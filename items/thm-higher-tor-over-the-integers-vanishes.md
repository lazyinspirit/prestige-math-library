---
id: thm-higher-tor-over-the-integers-vanishes
title: "Higher Tor over the integers vanishes"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-the-integers-have-global-dimension-one"]
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

For abelian groups $A,B$, $\operatorname{Tor}^{\mathbb Z}_i(A,B)=0$ for $i\ge2$.

## Proof

**Given:** the fact that every abelian group has projective dimension at most one over $\mathbb Z$.

1.1 Choose a projective resolution $0\to P_1\to P_0\to A\to0$. [given]

2.1 After tensoring with $B$, this complex has no terms in degrees $i\ge2$. [step 1.1, algebra]

3.1 Therefore its homology, which computes $\operatorname{Tor}^{\mathbb Z}_i(A,B)$, vanishes in every degree $i\ge2$. [step 2.1, algebra] ∎
