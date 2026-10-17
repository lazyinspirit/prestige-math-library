---
id: lem-polynomial-kernels-and-images-are-invariant
kind: lemma
title: "For every polynomial $p$, both $\\ker p(T)$ and $\\operatorname{im}p(T)$ are $T$-invariant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-evaluation-at-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism and $p\in F[x]$. Both $\ker p(T)$ and $\operatorname{im}p(T)$ are invariant under $T$.

## Facts & Assumptions

**Given:** An endomorphism $T$ and a polynomial $p\in F[x]$.

[L1] Polynomial evaluation is $p(T)=\sum a_kT^k$, with $T^0=I$ and $T^{k+1}=T\circ T^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and associativity of composition, $Tp(T)=p(T)T$. [L1, algebra]

2.1 If $v\in\ker p(T)$, then $p(T)(Tv)=T(p(T)v)=0$, so $Tv\in\ker p(T)$. [step 1.1]

3.1 If $v\in\operatorname{im}p(T)$, write $v=p(T)u$; then $Tv=p(T)(Tu)$ by step 1.1, so $Tv\in\operatorname{im}p(T)$. [step 1.1] ∎
