---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-partial-observation-range-invariance-without-tcc
kind: example
title: Range invariance can hold when the tangential cone condition fails
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-differential-range-invariance
  - def-ip-tangential-cone-condition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $U=(-6,6)^2\subset\mathbb R^2$, let $\phi(s):=s+9\int_0^s e^{-u^2}\,du$, and define the partially observed map $F:U\to\mathbb R$ by $F(s,t):=\phi(s)$. With basepoint $x_0=(0,0)$, set $Z=\mathbb R^2$, $K(a,b):=10a$, and $r(s,t):=(\phi(s)/10,t)$. Then $F(x)-F(x_0)=Kr(x)$ for every $x\in U$, and $r$ is bi-Lipschitz on $U$. Nevertheless, the local tangential cone condition at $x_0$ fails on radius $5$ for every allowed constant $0\le\eta<1$. The second parameter $t$ is unobserved: all points $(0,t)$ give the datum $0$.

## Example references

[[def-ip-differential-range-invariance|The Banach-space range-invariance factorization]]

[[def-ip-tangential-cone-condition|The local tangential cone inequality tested here]]

## Facts & Assumptions

**Given:** The real Hilbert spaces $X=\mathbb R^2$ and $Y=\mathbb R$, the open set $U=(-6,6)^2$, the basepoint $x_0=(0,0)$, and the function and operators in the Example.

[F1] [[def-ip-differential-range-invariance]]: range invariance at $x_0$ means $F(x)-F(x_0)=Kr(x)$ for a fixed bounded linear $K$ and a map $r$.

[F2] [[def-ip-tangential-cone-condition]]: on a closed ball about $x_0$, the local tangential cone condition requires $\|F(x_0+h)-F(x_0)-F'(x_0)h\|\le\eta\|F(x_0+h)-F(x_0)\|$ for every admissible $h$, with $0\le\eta<1$.

## Verification

1.1 Differentiating gives $\phi'(s)=1+9e^{-s^2}$, so $1\le\phi'(s)\le10$. For $s>s'$, directly from the integral, $s-s'\le\phi(s)-\phi(s')\le10(s-s')$. Thus $\phi$ is strictly increasing and both $s\mapsto\phi(s)/10$ and its inverse are Lipschitz; with the unchanged second coordinate, $r$ is bi-Lipschitz on $U$. [given, construct, algebra]

2.1 The linear map $K(a,b)=10a$ is bounded since $|K(a,b)|\le10\sqrt{a^2+b^2}$. Also $F(x_0)=0$ and $Kr(s,t)=10(\phi(s)/10)=\phi(s)=F(s,t)$, so [F1] holds throughout $U$. Further, $F'(x_0)(h_1,h_2)=10h_1$, whose kernel contains the unobserved $t$-axis. [F1, given, step 1.1, algebra]

2.2 The closed radius-$5$ ball about $x_0$ lies in $U$. At $h=(5,0)$ the TCC remainder is $|\phi(5)-50|$. Since $\int_0^5e^{-u^2}\,du\le1+\int_1^\infty ue^{-u^2}\,du=1+e^{-1}/2<3/2$, we have $0<\phi(5)<5+27/2<25$. Consequently $|\phi(5)-50|=50-\phi(5)>\phi(5)=|F(x_0+h)-F(x_0)|$. This contradicts [F2] for every $\eta<1$. [F2, given, step 1.1, algebra]

3.1 For every $t\in(-6,6)$, $F(0,t)=\phi(0)=0$. Hence the observation does not distinguish the points $(0,t)$, even though the range-invariance factorization from step 2.1 holds. [given, step 2.1, algebra] ∎
