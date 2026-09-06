---
id: thm-barycentric-subdivision-is-chain-homotopic-to-the-identity
kind: theorem
title: "Subdivision is chain homotopic to the identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-barycentric-subdivision-prism-homotopy, thm-barycentric-subdivision-is-a-chain-map]
proof_strategy: induction
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

The operators $S$ and $1$ obey $1-S=\partial T+T\partial$.

## Facts & Assumptions

**Given:** The recursive prism operator $T$ and chain map $S$.

## Proof

**Proof technique:** induction.

1.1 In dimension $0$, $S=1$ and $T=0$. Assume the identity on all faces of an $n$-simplex $\sigma$. [given, base, assume-hyp]

2.1 On the universal simplex, the induction hypothesis applied to $\partial\iota_n$ gives $$ \partial\bigl(\iota_n-P(\partial\iota_n)\bigr) =S(\partial\iota_n). $$ The affine-cone formula and the recursive definition of subdivision therefore give $$ \partial P_n =\iota_n-P(\partial\iota_n)-b_nS(\partial\iota_n) =\iota_n-P(\partial\iota_n)-S(\iota_n). $$ [step 1.1, ih, algebra]

3.1 Pushing the equality in step 2.1 forward along $\sigma:\Delta^n\to X$ gives $\partial T\sigma+T\partial\sigma=\sigma-S\sigma$. Linearity proves the identity on chains. [step 2.1, discharge-induction] ∎
