---
id: cor-idempotent-endomorphisms-are-diagonalisable-projections
kind: corollary
title: "Every idempotent endomorphism is diagonalisable and is projection onto its image along its kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, def-internal-direct-sum, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Corollary 4.14'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

If an endomorphism $T:V\to V$ of a finite-dimensional vector space satisfies $T^2=T$, then it is diagonalisable and

$$V=\operatorname{im}T\oplus\ker T.$$

Under this decomposition, $T$ is projection onto $\operatorname{im}T$ along $\ker T$.

## Facts & Assumptions

**Given:** An idempotent endomorphism $T$, so $T^2=T$.

[L1] For an endomorphism of a finite-dimensional space, a polynomial annihilates $T$ exactly when it is divisible by $\mu_T$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L2] For an endomorphism of a finite-dimensional space, having a product of distinct linear factors as minimal polynomial is equivalent to diagonalisability ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

[L3] For two subspaces, a direct sum is a spanning sum with zero intersection ([[def-internal-direct-sum]]).

[L4] The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 The identity $T^2-T=0$ says $x(x-1)$ annihilates $T$, so [L1] gives $\mu_T\mid x(x-1)$. By unique factorisation [L4], this monic divisor is a product of a subset of the two distinct irreducibles $x$ and $x-1$; [L2] therefore makes $T$ diagonalisable. [L1, L2, L4, algebra]

1.2 Every $v\in V$ has $v=Tv+(v-Tv)$, where $Tv\in\operatorname{im}T$ and $T(v-Tv)=Tv-T^2v=0$. Hence the image and kernel span $V$. [given, algebra]

2.1 If $w\in\operatorname{im}T\cap\ker T$, write $w=Tu$ and compute $w=Tu=T^2u=Tw=0$. Thus [L3] and step 1.2 give the direct sum, and $T$ is identity on its image and zero on its kernel. The cases $T=0$ and $T=I$ are included. [step 1.2, L3, algebra] ∎
