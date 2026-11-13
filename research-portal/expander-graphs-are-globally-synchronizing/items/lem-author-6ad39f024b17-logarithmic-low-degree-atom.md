---
id: lem-author-6ad39f024b17-logarithmic-low-degree-atom
title: A logarithmic low-degree atom for the gamma-two graph
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-erdos-renyi-random-graph
  - math:lem-integer-part
  - math:def-factorial-and-falling-factorial
  - math:thm-logarithm-derivative-and-integral
  - math:thm-logarithm-slower-than-every-positive-power
  - math:thm-integral-logarithm-is-unbounded
  - math:def-natural-logarithm
  - math:thm-exponential-addition-formula
  - math:def-real-power
  - math:def-bernoulli-and-binomial-random-variables
  - math:lem-binomial-count-law
  - math:def-binomial-coefficient
  - math:lem-probability-measure-basic-identities
  - math:thm-integration-by-parts
dependency_roles:
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:lem-integer-part: mathematical-premise
  math:def-factorial-and-falling-factorial: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:thm-integral-logarithm-is-unbounded: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:lem-binomial-count-law: mathematical-premise
  math:def-binomial-coefficient: mathematical-premise
  math:lem-probability-measure-basic-identities: mathematical-premise
  math:thm-integration-by-parts: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $L=\log n$, $p=2L/n$, and $k=\lfloor L\rfloor$. For all sufficiently large integers $n$, if $Y\sim\operatorname{Bin}(n-2,p)$, then
$$a_n:=\mathbb P(Y\le k)\ge\mathbb P(Y=k)\ge e^{-4}\frac{n^{-1/2}}L.$$
The binomial variable is a sum of $n-2$ independent Bernoulli-$p$ variables.

## Facts & Assumptions

[F1] A binomial$(m,p)$ variable is a sum of $m$ mutually independent Bernoulli$(p)$ variables ([[math:def-bernoulli-and-binomial-random-variables]]). Independent Bernoulli edge coordinates in the random-graph model give such sums ([[math:def-erdos-renyi-random-graph]]).

[F2] The floor satisfies $L-1<\lfloor L\rfloor\le L$ ([[math:lem-integer-part]]).

[F3] The factorial $k!$ is the product $1\cdot2\cdots k$ ([[math:def-factorial-and-falling-factorial]]).

[F4] For $x>0$, the logarithm has derivative $\log'(x)=1/x$ and integral $\log x=\int_1^xdt/t$ ([[math:thm-logarithm-derivative-and-integral]]).

[F5] For every $b>0$, $\log n/n^b\to0$ ([[math:thm-logarithm-slower-than-every-positive-power]]).

[F6] The logarithm is increasing and unbounded ([[math:thm-integral-logarithm-is-unbounded]]).

[F7] The logarithm is inverse to the exponential ([[math:def-natural-logarithm]]).

[F8] The exponential satisfies its addition formula ([[math:thm-exponential-addition-formula]]).

[F9] Real powers are defined by exponential and logarithm ([[math:def-real-power]]).

[F10] If $Y$ is a sum of $m$ independent Bernoulli$(p)$ variables, $m\in\mathbb N_0$ and $0<p<1$, then $\mathbb P(Y=j)=\binom mjp^j(1-p)^{m-j}$ for $j=0,\ldots,m$ ([[math:lem-binomial-count-law]]).

[F11] The binomial coefficient $\binom mj$ counts the $j$-element subsets of an $m$-element set ([[math:def-binomial-coefficient]]).

[F12] For events $A\subseteq B$ in a probability space, $\mathbb P(A)\le\mathbb P(B)$ ([[math:lem-probability-measure-basic-identities]], Statement, clause 2).

[F13] If $a<b$ and $u,v$ are continuously differentiable on $[a,b]$, integration by parts gives $\int_a^b uv'=u(b)v(b)-u(a)v(a)-\int_a^b u'v$; continuity of $u',v'$ supplies their required integrability ([[math:thm-integration-by-parts]], Statement).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Eventually $L>2$, $0<p<1/2$, and $2\le k<n-2$. On $[1,k]$, take $u(t)=\log t$ and $v(t)=t$. By [F4], their derivatives are $u'(t)=1/t$ and $v'(t)=1$, both continuous on this interval, so [F13] applies and gives $\int_1^k\log t\,dt=k\log k-k+1$. Monotonicity of the logarithm gives $\log(k!)\le\int_1^k\log t\,dt+\log k=k\log k-k+1+\log k$, so $k!\le e k(k/e)^k$. Counting ordered distinct selections, with each $k$-element subset having $k!$ orderings, gives $\binom{n-2}k\ge(n-2-k)^k/k!$. The exact binomial atom from [F10], applied with $m=n-2$ and $j=k$, is therefore at least $(ek)^{-1}[e(n-2-k)p/k]^k(1-p)^{n-2-k}$. [F1, F2, F3, F4, F5, F6, F10, F11, F13, given, algebra]

2.1 Put $u=(k+2)/n$. Eventually $u<1/2$. The integral identity gives $\log(1-u)\ge-2u$ and $\log(1-p)\ge-p/(1-p)$. Since $np=2L$ and $k\le L$, step 1.1 is at least $(eL)^{-1}\exp(k(1+\log2)-2k(k+2)/n-2L/(1-p))$. Using $k\ge L-1$, this is at least $e^{-2-\log2}L^{-1}\exp((-1+\log2)L)\exp(-2L(L+2)/n-2Lp/(1-p))$. [F2, F4, F7, F8, step 1.1, algebra]

3.1 The two nonnegative error terms in the last exponential have sum tending to zero by [F5], hence eventually at most 1. The integral for $\log2$ gives $1/2<\log2<1$. Thus $e^{-2-\log2}e^{-1}\ge e^{-4}$ and $\exp((-1+\log2)L)\ge n^{-1/2}$. This proves the point-mass bound. Since the events satisfy $\{Y=k\}\subseteq\{Y\le k\}$, probability monotonicity [F12] gives $\mathbb P(Y\le k)\ge\mathbb P(Y=k)$, proving the lower-tail bound. [F4, F5, F9, F12, step 2.1, algebra] ∎
