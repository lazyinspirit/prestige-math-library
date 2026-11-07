---
id: ex-scatteredness-of-a-power-sequence
kind: example
title: Scatteredness of a positive power sequence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-scattered-sequence
  - def-delta-scattered-sequence
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Example 2.17, §2.4"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Example 2.17, §2.4; full relevant passage inspected"
---

## Example

For every fixed $\rho>0$, the real sequence $a(n)=n^\rho$, $n\ge1$, is scattered.

## Example references

[Bergelson–Moreira, Example 2.17](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** A fixed real $\rho>0$ and the sequence $a(n)=n^\rho$ for $n\ge1$.

[F1] Scatteredness requires the $\delta$-scattered bound for every $\delta\in(0,1]$, with weight $w_\delta(t)=1$ at $t=0$ and $\min\{1,|t|^{-\delta}\}$ otherwise ([[def-scattered-sequence]], [[def-delta-scattered-sequence]]).

[F2] For $x>0$, $(x^\rho)'=\rho x^{\rho-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F3] The mean value theorem applies to differentiable functions on positive compact intervals ([[cor-mean-value-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Fix $0<\delta\le1$, put $\gamma=\max\{1-\rho,0\}$ and $a=\min\{\rho,1\}$. For $1\le m<n\le N$ set $h=n-m$. By [F3] and [F2], for some $\xi\in(m,n)$, $n^\rho-m^\rho=\rho\xi^{\rho-1}h\ge\rho h n^{-\gamma}>0$, since $\xi^{\rho-1}\ge n^{\rho-1}$ if $\rho<1$ and $\xi^{\rho-1}\ge1$ if $\rho\ge1$. Therefore $w_\delta(n^\rho-m^\rho)\le\rho^{-\delta}h^{-\delta}n^{\gamma\delta}$. [given, F2, F3, algebra]

2.1 If $0<\delta<1$, then $\sum_{h=1}^{n-1}h^{-\delta}\le1+\int_1^n x^{-\delta}\,dx\le(1+(1-\delta)^{-1})n^{1-\delta}$. With $q=1-\delta+\gamma\delta\ge0$, also $\sum_{n=1}^N n^q\le N^{q+1}$. Thus step 1.1 gives $N^{-2}\sum_{m<n\le N}w_\delta(n^\rho-m^\rho)\le C_{\rho,\delta}N^{-2}\sum_{n=1}^N n^q\le C'_{\rho,\delta}N^{-\delta(1-\gamma)}=C'_{\rho,\delta}N^{-\delta a}$. If $\delta=1$, then $\sum_{h=1}^{n-1}h^{-1}\le1+\int_1^n x^{-1}\,dx=1+\log n$; hence step 1.1 gives an upper bound $C_\rho N^{-2}\sum_{n=1}^N n^\gamma(1+\log n)\le C'_{\rho}N^{-(1-\gamma)}(1+\log N)=C'_{\rho}N^{-a}(1+\log N)$. [step 1.1, F1, algebra]

3.1 For each fixed $\delta\in(0,1]$, step 2.1 bounds the normalized sum by $C N^{-c}(1+\log N)$ for some $c>0$ (with the logarithm unnecessary when $\delta<1$). Since $\log N\le N^{c/4}$ for all sufficiently large $N$, this is at most $C N^{-3c/4}$, which is at most $(\log N)^{-2}$ eventually because $(\log N)^2\le N^{3c/4}$. Thus $a$ is $\delta$-scattered with $\eta=1$. Since $\delta\in(0,1]$ was arbitrary, [F1] gives that $a$ is scattered. [F1, step 2.1, algebra] ∎
