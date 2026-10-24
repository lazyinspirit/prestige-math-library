---
id: cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial
kind: corollary
title: "The commutant of a cyclic endomorphism consists of its polynomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclic-subspace-vector-and-vector-annihilator, thm-cyclic-subspace-power-basis-and-companion-matrix, def-polynomial-evaluation-at-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 7.1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $T$ be a cyclic endomorphism of a finite-dimensional vector space. An endomorphism $S$ commutes with $T$ if and only if $S=p(T)$ for some $p\in F[x]$. Thus the commutant of $T$ is $F[T]$.

## Facts & Assumptions

**Given:** A cyclic endomorphism $T$ with cyclic vector $v$ and an endomorphism $S$.

[L1] Cyclicity means $Z(v;T)=V$ ([[def-cyclic-subspace-vector-and-vector-annihilator]]).

[L2] The powers $v,Tv,\ldots,T^{d-1}v$ form a basis of $Z(v;T)$, where $d=\deg m_{T,v}$ ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

[L3] Polynomial evaluation is $p(T)=\sum_ka_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $ST=TS$. By [L1], $Sv\in V=Z(v;T)$, so [L2] supplies $p\in F[x]$ with $Sv=p(T)v$. [L1, L2, choose]

2.1 For every $k\ge0$, commutation gives $S(T^kv)=T^kSv=T^kp(T)v=p(T)T^kv$; the power basis in [L2] therefore makes $S=p(T)$ on all of $V$. [step 1.1, L2, L3, algebra]

3.1 Conversely every $p(T)$ commutes with $T$ term by term in [L3]. This proves both directions, including the zero space where the only endomorphism is the zero map. [step 2.1, L3] ∎
