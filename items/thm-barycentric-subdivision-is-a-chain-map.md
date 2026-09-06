---
id: thm-barycentric-subdivision-is-a-chain-map
kind: theorem
title: "Barycentric subdivision is a chain map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barycentric-subdivision-chain-operator, def-barycenter-and-affine-cone-on-a-singular-chain]
proof_strategy: induction
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For every singular chain $c$, $\partial S(c)=S(\partial c)$.

## Facts & Assumptions

**Given:** The recursively defined subdivision operator $S$.

## Proof

**Proof technique:** induction.

1.1 In degree $0$, both sides vanish. Assume $\partial S=S\partial$ on dimensions below $n$. [given, base, assume-hyp]

2.1 For an $n$-simplex, the cone formula and the induction hypothesis give $\partial S\sigma=\partial b_\sigma S\partial\sigma=S\partial\sigma-b_\sigma\partial S\partial\sigma=S\partial\sigma$. [step 1.1, ih, algebra]

3.1 Linearity extends this equality to finite chains, completing the induction. [step 2.1, discharge-induction] ∎
