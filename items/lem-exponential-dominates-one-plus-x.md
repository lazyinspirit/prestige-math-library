---
id: lem-exponential-dominates-one-plus-x
kind: lemma
title: "$1+x\\le\\exp(x)$ for every real $x$, hence $(1-p)^m\\le\\exp(-mp)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, thm-exponential-addition-formula, cor-mean-value-theorem, def-integer-power, lem-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapter 4"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

For every real $x$,
$$1+x\le\exp(x).$$
Consequently, if $0\le p\le1$ and $m\in\mathbb N$, then
$$ (1-p)^m\le\exp(-mp). $$

## Facts & Assumptions

**Given:** A real $x$, a real $p\in[0,1]$, and a natural $m$.

[L1] $\exp(0)=1$ ([[def-real-exponential-function-and-e]]).

[L2] The derivative of the exponential is the exponential ([[thm-derivative-of-exponential]]).

[L3] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[L4] The exponential is positive at every real argument ([[cor-exponential-reciprocal-and-positivity]]).

[L5] If a function is continuous on $[a,b]$ and differentiable on $(a,b)$, then its endpoint difference equals its derivative at an intermediate point times $b-a$ ([[cor-mean-value-theorem]]).

[L6] Natural powers are defined recursively, and preserve order on nonnegative bases ([[def-integer-power]], [[lem-power-monotone]]).

[L7] For all real $u,v$, $\exp(u+v)=\exp(u)\exp(v)$ ([[thm-exponential-addition-formula]]).

## Proof

**Proof technique:** cases.

1.1 If $x=0$, then $1+x=1=\exp(x)$. [assume-case zero, L1]

1.2 If $x>0$, [L5] and [L2] give $\exp(x)-1=\exp(c)x$ for some $0<c<x$; [L3] gives $\exp(c)>1$, hence $\exp(x)>1+x$. [assume-case positive, L1, L2, L3, L5, choose]

1.3 If $x<0$, apply [L5] on $[x,0]$: $1-\exp(x)=\exp(c)(-x)$ for some $x<c<0$. Now $0<\exp(c)<1$ by [L3] and [L4], so $1-\exp(x)<-x$ and $1+x<\exp(x)$. [assume-case negative, L1, L2, L3, L4, L5, choose]

2.1 The three cases prove $1+x\le\exp(x)$ for every real $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

3.1 Apply step 2.1 to $x=-p$ to get $0\le1-p\le\exp(-p)$, then raise both sides to the natural power $m$ and use [L7] repeatedly to obtain $(1-p)^m\le\exp(-mp)$. The case $m=0$ is equality, including $p=1$. [step 2.1, L6, L7, algebra] ∎
