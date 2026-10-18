---
id: thm-schur-triangularisation
kind: theorem
title: "If the characteristic polynomial of an endomorphism splits, some orthonormal basis makes its matrix upper triangular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-triangularisation-splitting-criterion, prop-complete-invariant-flags-and-upper-triangular-matrices, thm-gram-schmidt-orthonormalisation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Statement

Let $V$ be a finite-dimensional real or complex inner product space over $F$,
and let $T:V\to V$ be linear. If the characteristic polynomial of $T$ splits
over $F$, then $V$ has an orthonormal basis in which the matrix of $T$ is upper
triangular.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex inner product space $V$ over $F$ and a linear endomorphism $T:V\to V$ whose characteristic polynomial splits over $F$.

[L1] An endomorphism is triangularisable exactly when its characteristic polynomial splits ([[thm-triangularisation-splitting-criterion]]).

[L2] A basis gives an upper-triangular matrix exactly when its successive spans form a complete $T$-invariant flag ([[prop-complete-invariant-flags-and-upper-triangular-matrices]]).

[L3] Gram-Schmidt turns a linearly independent list into an orthonormal list with the same successive spans ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a basis $(v_1,\dots,v_n)$ of $V$ in which $[T]$ is upper triangular; equivalently, the flag $0\subset \operatorname{span}(v_1)\subset \operatorname{span}(v_1,v_2)\subset \cdots \subset \operatorname{span}(v_1,\dots,v_n)=V$ is $T$-invariant by [L2]. [L1, L2]

2.1 Apply [L3] to $(v_1,\dots,v_n)$ and obtain an orthonormal basis $(e_1,\dots,e_n)$ such that $\operatorname{span}(e_1,\dots,e_k)=\operatorname{span}(v_1,\dots,v_k)$ for every $k$, so the same successive spans are still $T$-invariant. [L3, step 1.1]

3.1 Because the orthonormal basis $(e_1,\dots,e_n)$ is adapted to a complete $T$-invariant flag, [L2] shows that the matrix of $T$ in that basis is upper triangular. [L2, step 2.1] ∎
