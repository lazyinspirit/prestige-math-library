---
id: prop-transpose-preserves-identities-and-reverses-composition
kind: proposition
title: 'Transpose is linear, sends identities to identities, and reverses composition: $(S\circ T)^*=T^*\circ S^*$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transpose-of-a-linear-map, lem-composition-and-identity-linear-maps]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapter 6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

For linear maps $T,T':V\to W$, scalars $a,b$, and $S:W\to X$,

$$(aT+bT')^*=aT^*+bT'^*,\qquad (\operatorname{id}_V)^*=\operatorname{id}_{V^*},\qquad (S\circ T)^*=T^*\circ S^*.$$

## Facts & Assumptions

**Given:** The displayed compatible linear maps and scalars.

[L1] The transpose is $T^*(g)=g\circ T$ ([[def-transpose-of-a-linear-map]]).

[L2] Composition of linear maps is associative, and identity maps are its identities ([[lem-composition-and-identity-linear-maps]]).

## Proof

**Proof technique:** pointwise evaluation.

1.1 For $g\in W^*$ and $v\in V$, $((aT+bT')^*g)(v)=g(aT(v)+bT'(v))=a(T^*g)(v)+b(T'^*g)(v)$, proving linearity in the map. [L1, algebra]

1.2 For $f\in V^*$ and $v\in V$, $((\operatorname{id}_V)^*f)(v)=f(v)$, so $(\operatorname{id}_V)^*=\operatorname{id}_{V^*}$. [L1, L2]

1.3 For $h\in X^*$, [L1] and associativity give $(S\circ T)^*(h)=h\circ S\circ T=T^*(S^*(h))$, hence $(S\circ T)^*=T^*\circ S^*$. [L1, L2]

2.1 Equality at every functional and vector proves all three asserted identities. [step 1.1, step 1.2, step 1.3] ∎
