---
id: cor-endomorphism-ring-is-a-matrix-ring
kind: corollary
title: '$\operatorname{End}_F(V)$ is a ring and matrix representation is a ring isomorphism $\operatorname{End}_F(V)\cong M_n(F)$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-linear-maps-form-a-vector-space, lem-composition-and-identity-linear-maps,
       thm-matrix-representation-is-a-vector-space-isomorphism,
       thm-matrix-of-a-composite-is-the-product, cor-square-matrices-form-a-ring,
       def-ring, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $V$ be an $n$-dimensional vector space over $F$. Then
$\operatorname{End}_F(V):=\mathcal L(V,V)$ is a ring under pointwise addition
and composition, and for every ordered basis $\mathcal B$ the map

$$T\longmapsto[T]_{\mathcal B}^{\mathcal B}$$

is a ring isomorphism $\operatorname{End}_F(V)\cong M_n(F)$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and an ordered basis $\mathcal B$ of length $n$.

[L1] $\mathcal L(V,V)$ is a vector space under pointwise operations ([[prop-linear-maps-form-a-vector-space]]).

[L2] Matrix representation is a vector-space isomorphism and sends composition to matrix multiplication ([[thm-matrix-representation-is-a-vector-space-isomorphism]], [[thm-matrix-of-a-composite-is-the-product]]).

## Proof

**Proof technique:** direct.

1.1 Composition of endomorphisms is associative, has $\operatorname{id}_V$ as identity, and distributes over pointwise addition; together with the additive group from [L1], this makes $\operatorname{End}_F(V)$ a ring. [given, L1]

2.1 By [L2], matrix representation is a bijective linear map, so it preserves addition and zero. [step 1.1, L1, L2]

3.1 It preserves products by the composition formula in [L2], and $[\operatorname{id}_V]_{\mathcal B}^{\mathcal B}=I_n$ by coordinate action. Thus it is a bijective unital ring homomorphism and hence a ring isomorphism. [step 2.1, L2] ∎
