---
id: prop-induced-quotient-operator-is-well-defined
kind: proposition
title: 'Invariance makes the induced quotient operator well defined and linear, with $\pi T=\bar T\pi$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-subspace-and-induced-quotient-operator, prop-quotient-vector-space-operations-and-projection]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornell Math 4330, Quotient Spaces, Exercise QuoSpace 7"
      url: "https://pi.math.cornell.edu/~kassabov/math4330.fall19/cornell-only/QuoSpaces.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to V$ be linear and let $W\le V$ be $T$-invariant. Then
$$\bar T(v+W):=T(v)+W$$
is a well-defined linear endomorphism of $V/W$, and the canonical projection satisfies
$$\pi\circ T=\bar T\circ\pi.$$

## Facts & Assumptions

**Given:** An endomorphism $T:V\to V$ and a $T$-invariant subspace $W\le V$.

[L1] $T$-invariance means $T(W)\subseteq W$, and the proposed induced map is $\bar T(v+W)=T(v)+W$ ([[def-invariant-subspace-and-induced-quotient-operator]]).

[L2] Cosets are equal exactly when their representatives differ by an element of $W$, and the quotient operations and projection are linear ([[prop-quotient-vector-space-operations-and-projection]]).

## Proof

**Proof technique:** direct.

1.1 If $v+W=v'+W$, then $v-v'\in W$, so $T(v)-T(v')=T(v-v')\in T(W)\subseteq W$ and therefore $T(v)+W=T(v')+W$; thus $\bar T$ is well defined. [L1, L2]

2.1 For scalars $a,b$, $\bar T(a(v+W)+b(u+W))=T(av+bu)+W=a(Tv+W)+b(Tu+W)$, so $\bar T$ is linear, and $\bar T(\pi(v))=T(v)+W=\pi(T(v))$ proves $\bar T\pi=\pi T$; the same calculation covers $W=0$, $W=V$, and $V=0$. [step 1.1, L2] ∎
