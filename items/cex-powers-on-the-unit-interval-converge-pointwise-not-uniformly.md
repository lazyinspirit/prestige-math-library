---
id: cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly
kind: counterexample
title: "$f_k(x)=x^{k+1}$ converges pointwise but not uniformly on $[0,1]$"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-integer-power, lem-geometric-sequence-null, lem-bernoulli-inequality, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** pointwise convergence of real-valued functions on a closed
bounded interval implies uniform convergence.

For $k\in\mathbb{N}$ define $f_k:[0,1]\to\mathbb{R}$ by

$$f_k(x):=x^{k+1}.$$

Then $(f_k)$ converges pointwise to the endpoint indicator

$$\chi(x):=\begin{cases}0,&0\le x<1,\\1,&x=1,\end{cases}$$

but the convergence is not uniform.

## Facts & Assumptions

**Given:** The functions $f_k(x)=x^{k+1}$ and the endpoint indicator $\chi$ on $[0,1]$.

[L1] If $|r|<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]], [[def-integer-power]]).

[L2] Bernoulli's inequality says $(1+t)^n\ge1+\iota(n)t$ for $t\ge-1$ and $n\in\mathbb{N}$ ([[lem-bernoulli-inequality]], [[def-canonical-natural]]).

[L3] The canonical naturals satisfy $\iota(k+1)>0$, and positive reciprocals reverse nonstrict inequalities ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L4] Uniform convergence requires one index after which the error is below every prescribed positive real at every point of the domain ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 If $0\le x<1$, then $|x|<1$, so [L1] gives $x^{k+1}\to0=\chi(x)$; at $x=1$, one has $f_k(1)=1=\chi(1)$ for every $k$. Thus $f_k\to\chi$ pointwise. [L1]

1.2 For each $k$, put $a_k:=\iota(k+1)>0$ and $y_k:=1-1/(2a_k)$. Then $0\le y_k<1$, so $\chi(y_k)=0$. [L3, algebra]

2.1 Apply [L2] with $n=k+1$ and $t=-1/(2a_k)$: $f_k(y_k)=\left(1-1/(2a_k)\right)^{k+1}\ge1-a_k/(2a_k)=1/2$. [step 1.2, L2, L3, algebra]

3.1 Hence $|f_k(y_k)-\chi(y_k)|\ge1/2$ for every $k$, so no index makes the error smaller than $1/2$ at every point; the convergence is not uniform. [step 1.2, step 2.1, L4]

4.1 The functions therefore satisfy the refuted claim's hypothesis and violate its conclusion. [step 1.1, step 3.1] ∎
