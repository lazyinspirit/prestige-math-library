---
id: lem-invariance-passes-to-orthogonal-complements-under-the-adjoint
kind: lemma
title: "If $W$ is $T$-invariant, then $W^\\perp$ is $T^*$-invariant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-orthogonal-complement]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §7A'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional inner product space and let $W$ be $T$-invariant. Then $W^\perp$ is $T^*$-invariant.

## Facts & Assumptions

**Given:** An endomorphism $T$, a $T$-invariant subspace $W$, a vector $v\in W^\perp$, and $w\in W$.

[L1] The adjoint identity says $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x,y$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[L2] A vector belongs to $W^\perp$ exactly when it pairs to zero with every vector of $W$ ([[def-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 Since $W$ is $T$-invariant, $Tw\in W$. As $v\in W^\perp$, [L2] and conjugate symmetry give $\langle Tw,v\rangle=\overline{\langle v,Tw\rangle}=0$. [given, L2]

2.1 By [L1] and conjugate symmetry, $\langle T^*v,w\rangle=\overline{\langle w,T^*v\rangle}=\overline{\langle Tw,v\rangle}=0$. This holds for every $w\in W$, so [L2] gives $T^*v\in W^\perp$. [step 1.1, L1, L2] ∎
