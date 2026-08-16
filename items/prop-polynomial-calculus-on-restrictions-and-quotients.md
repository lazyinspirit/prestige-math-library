---
id: prop-polynomial-calculus-on-restrictions-and-quotients
kind: proposition
title: "Polynomial evaluation commutes with restriction and invariant quotients"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-induced-quotient-operator-is-well-defined, def-polynomial-evaluation-at-an-endomorphism, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-invariant-subspace-and-induced-quotient-operator]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 6.4"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space and let $W\le V$ be $T$-invariant. For every $p\in F[x]$,
$$p(T|_W)=p(T)|_W,\qquad p(\bar T)(v+W)=p(T)v+W.$$
Consequently, the minimal polynomials of $T|_W$ and $\bar T$ both divide $\mu_T$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, an endomorphism $T$, a $T$-invariant subspace $W$, and $p\in F[x]$.

[L1] The induced quotient endomorphism is linear and satisfies $\bar T\pi=\pi T$ ([[prop-induced-quotient-operator-is-well-defined]]).

[L2] Polynomial evaluation is $p(T)=\sum_k a_kT^k$, with $T^0=I$ and only finitely many nonzero coefficients ([[def-polynomial-evaluation-at-an-endomorphism]]).

[L3] For a finite-dimensional endomorphism $S$, $q(S)=0$ exactly when $\mu_S$ divides $q$, and on the zero space $\mu_S=1$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L4] For an invariant $W$, $T|_W$ maps $W$ to itself and $\bar T(v+W)=T(v)+W$ ([[def-invariant-subspace-and-induced-quotient-operator]]).

## Proof

**Proof technique:** direct.

1.1 Induction on $k$ gives $(T|_W)^k=T^k|_W$ and $\bar T^k(v+W)=T^kv+W$, beginning with the identity at $k=0$ and using [L1] at the successor step; summing with the coefficients of $p$ yields both displayed identities. [L1, L2, L4]

2.1 Taking $p=\mu_T$ makes $p(T)=0$, so step 1.1 gives $p(T|_W)=0$ and $p(\bar T)=0$; [L3] then gives $\mu_{T|_W}\mid\mu_T$ and $\mu_{\bar T}\mid\mu_T$, including $W=0$, $W=V$, and $V=0$. [step 1.1, L2, L3, L4] ∎
