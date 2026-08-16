---
id: prop-induced-quotient-operator-is-well-defined
kind: proposition
title: 'Invariance makes the induced quotient operator well defined and linear, with $\pi T=\bar T\pi$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-subspace-and-induced-quotient-operator, def-quotient-vector-space-and-canonical-projection, prop-quotient-vector-space-operations-and-projection]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
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

[L2] $v+W=v'+W$ exactly when $v-v'\in W$; the operations on $V/W$ are independent of the chosen representatives and make $V/W$ a vector space over $F$; and $\pi:V\to V/W$ is a surjective linear map with $\ker\pi=W$ ([[prop-quotient-vector-space-operations-and-projection]]).

[L3] The quotient operations are $(v+W)+(u+W):=(v+u)+W$ and $a(v+W):=(av)+W$, and the canonical projection is $\pi(v):=v+W$ ([[def-quotient-vector-space-and-canonical-projection]]).

## Proof

**Proof technique:** direct.

1.1 If $v+W=v'+W$, then $v-v'\in W$, so $T(v)-T(v')=T(v-v')\in T(W)\subseteq W$ and therefore $T(v)+W=T(v')+W$; thus $\bar T$ is well defined. [L1, L2]

2.1 For scalars $a,b$, the operations of [L3] give $a(v+W)+b(u+W)=(av+bu)+W$, so by [L1] and the linearity of $T$, $\bar T(a(v+W)+b(u+W))=T(av+bu)+W=(aT(v)+bT(u))+W=a(T(v)+W)+b(T(u)+W)$, and $\bar T$ is linear; also $\bar T(\pi(v))=\bar T(v+W)=T(v)+W=\pi(T(v))$ proves $\bar T\pi=\pi T$; the same calculation covers $W=0$, $W=V$, and $V=0$. [step 1.1, L1, L2, L3] ∎
