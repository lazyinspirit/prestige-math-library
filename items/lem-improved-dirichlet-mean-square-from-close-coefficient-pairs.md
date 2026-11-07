---
dependency_level: 0
id: lem-improved-dirichlet-mean-square-from-close-coefficient-pairs
kind: lemma
title: Improved continuous mean square from close coefficient pairs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-fourier-transform-of-a-gaussian
- thm-riemann-fubini-on-product-rectangles
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

For integer $N\ge1$, $T\ge1$, and arbitrary complex $a_n$ supported on $1\le n\le N$,

$$\int_{-T}^T\left|\sum_{n\le N}a_nn^{-it}\right|^2dt\ll T\sum_{n\le N}|a_n|^2+T\sum_{1\le\ell\le N/T}\sum_{n\le N-\ell}|a_na_{n+\ell}|.$$

All constants are absolute. 

## Statement references

[[lem-fourier-transform-of-a-gaussian]]

[[thm-riemann-fubini-on-product-rectangles]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-fourier-transform-of-a-gaussian]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-riemann-fubini-on-product-rectangles]] gives its stated result under its stated hypotheses.

## Proof

1.1 Let $w_T(t)=(\sin(t/(2T))/(t/(2T)))^2$, with its continuous value $1$ at zero. On $[-T,T]$ it has an absolute positive lower bound. Its exact Fourier integral is $$\int_{\mathbb R}w_T(t)e^{iut}\,dt=2\pi T(1-T|u|)_+.$$ Here is a proof avoiding an unproved transform identity. For $b=1/(2T)$, $\sin(bt)/(bt)=(2b)^{-1}\int_{-b}^b e^{ivt}\,dv$. Its square equals $\int_{-2b}^{2b}q(v)e^{ivt}\,dv$, where $q(v)=(2b-|v|)_+/(4b^2)$. Multiply by $e^{-\varepsilon t^2}$ and integrate against $e^{iut}$. Fubini on finite rectangles, followed by Gaussian-tail bounds, and the proved Gaussian transform give the result $\sqrt{\pi/\varepsilon}\int q(v)e^{-(u+v)^2/(4\varepsilon)}\,dv$. The normalized Gaussian has total mass $2\pi$ and converges to point evaluation on the uniformly continuous compactly supported triangular function $q$, by splitting at $|v+u|=\delta$ and bounding its tail. The answer is $2\pi q(-u)=2\pi T(1-T|u|)_+$. On the original side the Gaussian can be removed by splitting into $|t|\le R$ and its tail, since $w_T$ is integrable and bounded by $\min(1,4T^2/t^2)$. [given, F1, F2, algebra]

2.1 Expand the finite polynomial square and apply this transform. The absolute value of its integral against $w_T$ is at most $2\pi T\sum_{m,n:\,|\log(m/n)|\le1/T}|a_ma_n|$. For $m,n\le N$, $|\log(m/n)|\ge|m-n|/N$ by integrating $1/x\ge1/N$. Split diagonal and off diagonal and use the lower bound for $w_T$ on $[-T,T]$. This gives exactly the asserted sum, including the empty off-diagonal range when $N/T<1$. [given, F1, F2, step 1.1, algebra] ∎
