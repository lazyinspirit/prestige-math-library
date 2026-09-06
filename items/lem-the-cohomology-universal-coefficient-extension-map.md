---
id: lem-the-cohomology-universal-coefficient-extension-map
title: "The cohomological universal-coefficient extension map"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-balanced-ext-bifunctor"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

For a free $R$-complex over a PID, the cycle-boundary sequences induce a natural map $\operatorname{Ext}^1_R(H_{n-1}C,G)\to H^n\operatorname{Hom}_R(C,G)$.

## Proof

**Given:** $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$ and a representative extension class.

1.1 Applying $\operatorname{Hom}_R(-,G)$ to the free presentation identifies its first cohomology with $\operatorname{Ext}^1_R(H_{n-1}C,G)$. [given]

2.1 Extending a map on $B_{n-1}C$ along $d_n:C_n\twoheadrightarrow B_{n-1}C$ yields a cochain; changing the lift changes it by a coboundary, which defines the claimed map. [step 1.1, construct] ∎
