---
id: prop-linear-maps-form-a-vector-space
kind: proposition
title: '$\mathcal L(V,W)$ is a vector space over the common scalar field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-vector-space-of-linear-maps, def-linear-map, def-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, Proposition 26'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

If $V$ and $W$ are vector spaces over a field $F$, then
$\mathcal L(V,W)$ is a vector space over $F$ under pointwise addition and
scalar multiplication.

## Facts & Assumptions

**Given:** Vector spaces $V,W$ over the same field $F$ and the pointwise operations on $\mathcal L(V,W)$.

[L1] $\mathcal L(V,W)$ is the set of linear maps, with pointwise addition and scalar multiplication ([[def-vector-space-of-linear-maps]]).

## Proof

**Proof technique:** direct.

1.1 If $S,T$ are linear, then $(S+T)(au+bv)=a(S+T)(u)+b(S+T)(v)$, and if $\lambda\in F$, then $(\lambda T)(au+bv)=a(\lambda T)(u)+b(\lambda T)(v)$; hence the pointwise operations remain inside $\mathcal L(V,W)$. [given, L1]

2.1 Evaluating at an arbitrary $v\in V$ reduces associativity, commutativity, both distributive laws, scalar associativity, and the scalar identity law to the corresponding vector-space laws in $W$. [step 1.1, L1]

3.1 The zero function is the additive identity and $(-T)(v):=-T(v)$ is the additive inverse of $T$. The same formulas cover the zero domain and zero codomain, so all vector-space axioms hold. [step 2.1, L1] ∎
