---
id: lem-author-6ad39f024b17-maximum-degree-mgf
title: A maximum-degree tail with an explicit logarithmic exponent
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-erdos-renyi-random-graph
  - math:def-product-of-finite-probability-spaces
  - math:def-expectation-on-a-finite-probability-space
  - math:def-real-exponential-function-and-e
  - math:thm-exponential-addition-formula
  - math:lem-exponential-dominates-one-plus-x
  - math:def-real-power
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:def-finite-probability-space-and-event
  - math:def-natural-logarithm
  - math:thm-exponential-is-strictly-increasing
  - math:def-bernoulli-and-binomial-random-variables
  - math:thm-geometric-series
dependency_roles:
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-product-of-finite-probability-spaces: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:lem-exponential-dominates-one-plus-x: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:thm-geometric-series: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

For $G(n,p)$ with $0<p<1$, put $\mu=np>0$. Its maximum degree satisfies
$$\mathbb P(d_{\max}\ge8\mu)\le n\exp(-6\mu).$$
If $\mu=\gamma\log n$ and $\gamma>1$, this is at most $n^{-\gamma}$.

## Facts & Assumptions

[F1] Since $\mu=np>0$ and $0<p<1$, $n\ge1$, so the vertex set $[n]$ is nonempty. Vertex degree counts incident edges and $d_{\max}$ is the maximum of those degrees ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]). Thus a vertex degree is the sum of its $n-1$ independent Bernoulli edge indicators ([[math:def-erdos-renyi-random-graph]]). Each Bernoulli indicator is $1$ with probability $p$ and $0$ with probability $1-p$ ([[math:def-bernoulli-and-binomial-random-variables]]).

[F2] Finite product weights factor over independent edge coordinates ([[math:def-product-of-finite-probability-spaces]]).

[F3] For outcome weights $w(\omega)\ge0$, expectation is $\mathbb E X=\sum_{\omega\in\Omega}X(\omega)w(\omega)$ ([[math:def-expectation-on-a-finite-probability-space]]), while an event $E\subseteq\Omega$ has probability $\mathbb P(E)=\sum_{\omega\in E}w(\omega)$ ([[math:def-finite-probability-space-and-event]]).

[F4] The exponential has series $\exp(x)=\sum_{j\ge0}x^j/j!$, and $e=\exp(1)$ ([[math:def-real-exponential-function-and-e]]).

[F5] The exponential satisfies its addition formula ([[math:thm-exponential-addition-formula]]).

[F6] The bound $1+x\le\exp(x)$ holds for every real $x$ ([[math:lem-exponential-dominates-one-plus-x]]).

[F7] Real powers obey $n^a=\exp(a\log n)$ ([[math:def-real-power]]).

[F8] For $x>0$, $\log x$ is the unique real number with $\exp(\log x)=x$ ([[math:def-natural-logarithm]]).

[F9] The exponential is strictly increasing on the real line ([[math:thm-exponential-is-strictly-increasing]]).

[F10] For real $r$ with $|r|<1$, the geometric series satisfies $\sum_{k=0}^{\infty}r^k=1/(1-r)$. At $r=1/2$ this gives $\sum_{k=1}^{\infty}2^{-k}=1$ ([[math:thm-geometric-series]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 By [F10] at $r=1/2$, the series gives $e<3$: for $j\ge2$, $j!\ge2^{j-1}$, with strict inequality for $j\ge3$, so $e<2+\sum_{j\ge2}2^{-(j-1)}=3$. For any vertex degree $D$, independence gives $\mathbb E\exp(D)=(1-p+pe)^{n-1}\le\exp((e-1)(n-1)p)\le\exp(2\mu)$. By [F9], on $D\ge8\mu$ the random variable $\exp(D)$ is at least $\exp(8\mu)$, and $\exp(8\mu)>0$ by [F4]. Hence the nonnegative finite expectation sum gives $\mathbb P(D\ge8\mu)\le\exp(-6\mu)$. [F1, F2, F3, F4, F5, F6, F9, F10, given, algebra]

2.1 The indicator of a union of the $n$ vertex events is at most the sum of their indicators. Sum their probabilities to get the displayed maximum-degree bound. For $\mu=\gamma\log n$, [F5], [F7] and [F8] give $n\exp(-6\mu)=\exp((1-6\gamma)\log n)=n^{1-6\gamma}$. Since $n\ge1=\exp(0)$, [F8] and [F9] imply $\log n\ge0$. Now $\gamma>1$ gives $1-6\gamma<-\gamma$, so [F9] yields $n^{1-6\gamma}\le n^{-\gamma}$. [F1, F3, F4, F5, F7, F8, F9, step 1.1, algebra] ∎
