---
dependency_level: 6
id: lem-ramare-weighted-halasz-bound-at-an-ambient-scale
kind: lemma
title: Ramaré-weighted Halász bound at fixed ambient window
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-halasz-mean-value-bound
- lem-halasz-minimal-distance-is-well-defined
- thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Let $X\ge30$, $10<Y<X/2$, $3\le P\le Q\le3X$, and let $f$ be multiplicative with $f(1)=1$ and $|f(n)|\le1$ for every positive integer $n$. Put

$$M_X(f;Y)=\min_{|\tau|\le X}\sum_{p\le Y}\frac{1-\Re(f(p)p^{-i\tau})}{p},\quad L=\sum_{P\le p\le\min(Q,Y)}\frac1p,$$

$$R(s)=\sum_{Y\le n\le2Y}\frac{f(n)}{n^s(1+\omega_{[P,Q]}(n))}.$$

Then, uniformly for $|t|\le X/2$,

$$|R(1+it)|\ll e^L(1+M_X(f;Y))e^{-M_X(f;Y)}+\frac{\log\log Y}{\log Y}.$$


The minimum is taken over the fixed ambient window $[-X,X]$. If $P=\exp((\log X)(\log\log\log X)/(R\log\log X))$ with fixed $R\ge4$ and $X$ sufficiently large, then $e^L\ll_R\log\log X$.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-halasz-mean-value-bound]]

[[lem-halasz-minimal-distance-is-well-defined]]

[[thm-canonical-prime-factorisation]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-halasz-mean-value-bound]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[lem-halasz-minimal-distance-is-well-defined]] gives its stated result under its stated hypotheses.

[F4] The local supplier [[thm-canonical-prime-factorisation]] gives its stated result under its stated hypotheses.

## Proof

1.1 Since $1/(k+1)=\int_0^1 r^k\,dr$, the finite sum is the integral over $r\in[0,1]$ of the dyadic sum with multiplicative coefficients $g_r(n)=f(n)r^{\omega_{[P,Q]}(n)}$. At $r=0$ use $0^0=1$; the prime-power values are $0$ precisely when the prime is in the distinguished range. Multiplicativity follows because distinct-prime counts add on coprime products. For every $z\in[Y,2Y]$, apply the actual uniform Halász theorem to $g_r(n)n^{-it}$, at length $z$ and window $U=Y$. Its prime distance is at least $M_X(g_r;Y)$: the primes up to $Y$ form a subset of those up to $z$, and each possible frequency $t+u$ with $|u|\le Y$ lies in $[-X,X]$. The function $\phi(v)=(1+v)e^{-v}$ decreases on $[0,\infty)$. Consequently the summatory function is bounded by $Cz(\phi(M_X(g_r;Y))+\log\log Y/\log Y)$, uniformly in $z,r,t$ (the $1/Y$ term is absorbed). Finite summation by parts over $[Y,2Y]$ now bounds the dyadic $1/n$-weighted sum by the same expression. Endpoint inclusion contributes $O(1/Y)$, also absorbed. [given, F1, F2, F3, F4, algebra]

2.1 At each prime the change in the numerator when $f(p)$ is replaced by $g_r(p)$ has absolute value at most $1$ and vanishes outside $[P,Q]$. Hence $M_X(g_r;Y)\ge\max(0,M_X(f;Y)-L)$. For $M,L\ge0$, $\phi(\max(0,M-L))\le e^L\phi(M)$: if $M\ge L$, this follows by $1+M-L\le1+M$; if $M<L$, $e^L\phi(M)\ge e^{L-M}\ge1$. Integrate in $r$ to prove the claim. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 For the later choice $P=\exp((\log X)(\log\log\log X)/(R\log\log X))$, with any fixed $R\ge4$ and $Q\le3X$, [F1] gives $L\le\log\log\log X-\log\log\log\log X+O_R(1)$. Therefore $e^L\ll_R\log\log X$, and in particular the source's weaker factor $(\log\log X)^4$ is valid. [given, F1, F2, F3, F4, step 2.1, algebra] ∎
