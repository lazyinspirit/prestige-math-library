---
id: lem-author-6ad39f024b17-small-minimum-degree
title: The gamma-two graph has a vertex of degree at most log n with high probability
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-6ad39f024b17-logarithmic-low-degree-atom
  - lem-author-6ad39f024b17-low-degree-second-moment
  - math:thm-logarithm-slower-than-every-positive-power
  - math:def-erdos-renyi-random-graph
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:lem-integer-part
  - math:lem-finite-probability-basic-laws
  - math:def-bernoulli-and-binomial-random-variables
dependency_roles:
  lem-author-6ad39f024b17-logarithmic-low-degree-atom: mathematical-premise
  lem-author-6ad39f024b17-low-degree-second-moment: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:lem-integer-part: mathematical-premise
  math:lem-finite-probability-basic-laws: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $n\ge3$ be an integer, let $L=\log n$ (the natural logarithm), $p=2L/n$, and let $G\sim G(n,p)$ on $[n]$. Write $d(u)=\deg_G(u)$ and $d_{\min}=\delta(G)=\min_{u\in[n]}d(u)$. For all sufficiently large such $n$,
$$\mathbb P(d_{\min}>\lfloor L\rfloor)\le\eta_n:=\frac{2e^4L}{\sqrt n}+\frac{2p}{(1-p)^2},\qquad\eta_n\to0.$$
Thus a vertex of degree at most $\log n$ occurs with probability tending to one.

## Facts & Assumptions

[F1] Set $k=\lfloor L\rfloor$ and $a=\mathbb P(Y\le k)$ for $Y\sim\operatorname{Bin}(n-2,p)$, a sum of $n-2$ independent Bernoulli-$p$ variables ([[math:def-bernoulli-and-binomial-random-variables]]). For all sufficiently large integers $n$, $a\ge e^{-4}n^{-1/2}/L>0$ ([[lem-author-6ad39f024b17-logarithmic-low-degree-atom]]).

[F2] Let $X$ count the vertices of degree at most $k$ and set $r=\mathbb P(d(1)\le k)$. For $n\ge2$, $0<p<1$ and $a>0$, the same $a,k,p$ satisfy $r\ge(1-p)a>0$ and $\mathbb P(X=0)\le1/(nr)+2p/(1-p)^2$ ([[lem-author-6ad39f024b17-low-degree-second-moment]]).

[F3] For every fixed $b>0$, $\log n/n^b\to0$ ([[math:thm-logarithm-slower-than-every-positive-power]]).

[F4] The model $G(n,p)$ is the finite simple graph on $[n]$ whose distinct edge indicators are independent Bernoulli-$p$ variables, for $p\in[0,1]$ ([[math:def-erdos-renyi-random-graph]]).

[F5] Vertex degree counts incident edges; on a nonempty finite vertex set, $\delta(G)$ is the minimum vertex degree ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F6] The integer $k=\lfloor L\rfloor$ satisfies $k\le L<k+1$ ([[math:lem-integer-part]]).

[F7] In a finite probability space, $\mathbb P(A^c)=1-\mathbb P(A)$, probabilities are nonnegative and at most one, and $A\subseteq B$ implies $\mathbb P(A)\le\mathbb P(B)$ ([[math:lem-finite-probability-basic-laws]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Take $n$ sufficiently large that [F1] applies and $0<p<1/2$; the latter is possible because $L>0$ for $n\ge3$ and $p=2L/n\to0$ by [F3]. Thus [F4] defines the graph model, and the hypotheses of [F2] hold for the $a,k,r,X$ fixed in [F1] and [F2]. Since $[n]$ is nonempty, [F5] gives $\{X=0\}=\{d_{\min}>k\}$. Moreover $nr\ge n(1-p)a\ge e^{-4}\sqrt n/(2L)$. Substitution in [F2] therefore proves $\mathbb P(d_{\min}>k)\le2e^4L/\sqrt n+2p/(1-p)^2=\eta_n$. [F1, F2, F3, F4, F5, given, algebra]

2.1 By [F3] with $b=1/2$ and $b=1$, $L/\sqrt n\to0$ and $p\to0$, so $\eta_n\to0$. Set $A=\{d_{\min}>k\}$ and let $B$ be the event that some vertex has degree at most $L$. By [F5] and [F6], $A^c=\{d_{\min}\le k\}\subseteq B$. Applying [F7] and step 1.1 gives $1\ge\mathbb P(B)\ge\mathbb P(A^c)=1-\mathbb P(A)\ge1-\eta_n\to1$, proving the final assertion. [F3, F5, F6, F7, step 1.1, algebra] ∎
