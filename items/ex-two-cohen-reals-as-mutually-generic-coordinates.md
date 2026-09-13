---
id: ex-two-cohen-reals-as-mutually-generic-coordinates
kind: example
title: Two Cohen reals as mutually generic coordinates
status: draft
origin: pipeline
deps: [thm-mutually-generic-cohen-coordinate-reals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, product factorization", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Let $M$ be a transitive ZFC model and let $G$ be $M$-generic for $\operatorname{Add}(\omega,2)$. Write $c_i(n)=(\bigcup G)(i,n)$ for $i<2$. The forcing $\operatorname{Add}(\omega,2)$ is isomorphic to $\operatorname{Add}(\omega,1)\times\operatorname{Add}(\omega,1)$. Its coordinate reals satisfy
$M[c_0,c_1]=M[c_0][c_1]=M[c_1][c_0]$, and each is Cohen-generic over the extension by the other.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-mutually-generic-cohen-coordinate-reals]] gives product genericity.

## Proof

1.1 Map $p$ to $(r_0,r_1)$, where $r_i(0,n)=p(i,n)$ whenever $(i,n)\in\operatorname{dom}p$. Each $r_i$ is a condition in $\operatorname{Add}(\omega,1)$; conversely recover $p$ from $(r_0,r_1)$ by $p(i,n)=r_i(0,n)$. These maps are inverse and preserve reverse inclusion and compatibility. F1 applied to the partition $2=\{0\}\mathbin{\dot\cup}\{1\}$ yields the three model equalities and mutual genericity. [F1]

2.1 For distinctness, below any pair of finite conditions choose a fresh $n$ and extend the first with bit $0$ and the second with bit $1$. The resulting dense set is met, so the coordinate-union definition in F1 gives $c_0(n)\ne c_1(n)$. [F1] ∎
