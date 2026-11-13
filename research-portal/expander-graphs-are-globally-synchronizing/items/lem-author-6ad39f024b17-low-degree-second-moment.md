---
id: lem-author-6ad39f024b17-low-degree-second-moment
title: A second-moment bound for the absence of low-degree vertices
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-erdos-renyi-random-graph
  - math:def-product-of-finite-probability-spaces
  - math:def-expectation-on-a-finite-probability-space
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-variance-and-covariance
  - math:def-finite-probability-space-and-event
  - math:def-indicator-random-variable
dependency_roles:
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-product-of-finite-probability-spaces: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-variance-and-covariance: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-indicator-random-variable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

In $G(n,p)$ with $n\ge2$ and $0<p<1$, let $k$ be an integer, let $X$ count vertices of degree at most $k$, and set $a=\mathbb P(\operatorname{Bin}(n-2,p)\le k)$ and $r=\mathbb P(d(u)\le k)$. If $a>0$, then $r\ge(1-p)a>0$ and
$$\mathbb P(X=0)\le\frac1{nr}+\frac{2p}{(1-p)^2}.$$
This does not assume that the full vertex degrees are independent.

## Facts & Assumptions

[F1] Distinct unordered edge indicators are independent ([[math:def-erdos-renyi-random-graph]]).

[F2] Joint probabilities factor over disjoint coordinate blocks in a finite product ([[math:def-product-of-finite-probability-spaces]]).

[F3] Event probabilities are finite sums of outcome weights ([[math:def-finite-probability-space-and-event]]), and expectations are finite weighted sums ([[math:def-expectation-on-a-finite-probability-space]]).

[F4] Vertex degree is the number of incident edges ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F5] A binomial variable is a sum of independent Bernoulli trials; for zero trials it is the constant zero variable ([[math:def-bernoulli-and-binomial-random-variables]]).

[F6] Variance is $\operatorname{Var}X=\mathbb E[(X-\mathbb EX)^2]$ ([[math:def-variance-and-covariance]]).

[F7] For an event $A$, its indicator $\mathbf 1_A$ is $1$ on $A$ and $0$ outside $A$ ([[math:def-indicator-random-variable]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 For two distinct vertices $u,v$, condition on their shared edge. All their other incident edge-coordinate blocks are disjoint. Put $b=\mathbb P(\operatorname{Bin}(n-2,p)\le k-1)$, so $0\le b\le a$. Factoring and summing the two shared-edge outcomes gives $r=(1-p)a+pb$ and $\mathbb P(d(u)\le k,d(v)\le k)=(1-p)a^2+pb^2\le a^2$. In particular $r\ge(1-p)a$. [F1, F2, F3, F4, F5, given, algebra]

2.1 Let $I_u$ be the indicator of degree at most $k$, so $X=\sum_u I_u$. Expand the finite sums for $\mathbb EX$ and $\mathbb EX^2$ to obtain $\mathbb EX=nr$ and $\operatorname{Var}X\le nr+n(n-1)(a^2-r^2)\le nr+2pn^2a^2$, since $a^2-r^2\le[1-(1-p)^2]a^2\le2pa^2$. On $X=0$, $(X-\mathbb EX)^2=(nr)^2$, so the nonnegative expectation sum gives $\mathbb P(X=0)\le\operatorname{Var}X/(nr)^2$. Insert the variance estimate and $r\ge(1-p)a$ to get the displayed bound. [F3, F4, F6, F7, step 1.1, algebra] ∎
