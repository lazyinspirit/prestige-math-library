---
id: lem-commuting-endomorphisms-preserve-eigenspaces
kind: lemma
title: "Commuting endomorphisms preserve each other's eigenspaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum]
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
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

If endomorphisms $S,T:V\to V$ commute, then $S(E_\lambda(T))\subseteq E_\lambda(T)$ for every scalar $\lambda$.

## Facts & Assumptions

**Given:** Endomorphisms $S,T$ with $ST=TS$, a scalar $\lambda$, and $v\in E_\lambda(T)$.

[L1] The eigenspace is $E_\lambda(T)=\{v:T(v)=\lambda v\}$, including the zero vector ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Since $Tv=\lambda v$, commutation gives $T(Sv)=S(Tv)=S(\lambda v)=\lambda Sv$. [given, algebra]

2.1 Therefore $Sv\in E_\lambda(T)$ by [L1], whether or not $Sv$ is zero. [step 1.1, L1] ∎
