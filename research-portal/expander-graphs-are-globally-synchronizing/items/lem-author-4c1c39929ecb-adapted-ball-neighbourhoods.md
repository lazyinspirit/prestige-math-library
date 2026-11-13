---
id: lem-author-4c1c39929ecb-adapted-ball-neighbourhoods
kind: lemma
title: Adapted norm balls are ordinary Euclidean neighbourhoods
domain: mathematics
status: published
origin: pipeline
deps:
  - math:thm-all-norms-on-rn-are-equivalent
  - math:def-norm-and-normed-space
  - math:def-metric-ball
  - math:def-metric-topology
  - math:lem-reverse-triangle-inequality-in-a-normed-space
  - math:def-p-norms-on-rn
  - math:lem-p-norms-are-norms-and-induce-the-published-metrics
dependency_roles:
  math:thm-all-norms-on-rn-are-equivalent: mathematical-premise
  math:def-norm-and-normed-space: mathematical-premise
  math:def-metric-ball: mathematical-premise
  math:def-metric-topology: mathematical-premise
  math:lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  math:def-p-norms-on-rn: mathematical-premise
  math:lem-p-norms-are-norms-and-induce-the-published-metrics: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $m$ be a nonnegative integer, let $p\in\mathbb R^m$, let $N$ be any norm on $\mathbb R^m$, and let $\rho>0$. Write $|\cdot|_2$ for the Euclidean norm and $d_2(y,z)=|y-z|_2$ for its metric. The set $B_N(0,\rho)=\{y\in\mathbb R^m:N(y)<\rho\}$ is an open Euclidean neighbourhood of zero. Its translate $p+B_N(0,\rho)=\{p+y:y\in B_N(0,\rho)\}$ is an open Euclidean neighbourhood of $p$.

The following specifies the shrinking assertion for orbit trapping. Let $B$ be either of these two neighbourhoods, let $B'\subseteq B$, let $X$ be a set, let $\Phi_n:X\to\mathbb R^m$ be maps for every integer $n\ge0$, and let $W\subseteq X$. If, for every $x\in X$, the condition $\Phi_n(x)\in B$ for every $n\ge0$ implies $x\in W$, then the condition $\Phi_n(x)\in B'$ for every $n\ge0$ also implies $x\in W$. In particular, $B$ may be replaced by any smaller open neighbourhood of its centre in such an implication.

## Facts & Assumptions

[F1] For $m\ge1$, norm equivalence gives constants $c,C>0$ with $c|y|_2\le N(y)\le C|y|_2$ for every $y\in\mathbb R^m$ [[math:thm-all-norms-on-rn-are-equivalent]].

[F2] The norm axioms give $N(0)=0$ and the induced metric $d_N(y,z)=N(y-z)$ [[math:def-norm-and-normed-space]]. The reverse triangle inequality gives $|N(y)-N(z)|\le N(y-z)$ [[math:lem-reverse-triangle-inequality-in-a-normed-space]].

[F3] The Euclidean norm is $|y|_2=(\sum_{k<m}y_k^2)^{1/2}$, also when $m=0$, in which case its value is zero [[math:def-p-norms-on-rn]]. It is a norm for every $m\ge0$; for $m\ge1$ its induced metric is the usual Euclidean metric [[math:lem-p-norms-are-norms-and-induce-the-published-metrics]].

[F4] A metric ball is $B_d(a,r)=\{z:d(a,z)<r\}$ for $r>0$ [[math:def-metric-ball]]. A set is open when every point has a positive-radius metric ball inside it; an open neighbourhood of $a$ is an open set containing $a$ [[math:def-metric-topology]].

## Proof

**Given:** The dimension, norm, radius, point, sets and family of maps specified in the Statement.

**Goal:** Prove both neighbourhood assertions and the quantified shrinking implication.

1.1 Suppose $m\ge1$. By the reverse triangle inequality and the upper estimate in [F1], $|N(y)-N(z)|\le N(y-z)\le C|y-z|_2$. For each $y\in B_N(0,\rho)$ set $\varepsilon=(\rho-N(y))/C>0$. If $d_2(z,y)<\varepsilon$, then $N(z)\le N(y)+C|z-y|_2<\rho$. Thus $B_{d_2}(y,\varepsilon)\subseteq B_N(0,\rho)$, proving openness by [F4]. Also $N(0)=0<\rho$, and $|z|_2<\rho/C$ implies $N(z)<\rho$, so this is an open neighbourhood of zero containing $B_{d_2}(0,\rho/C)$. [given, F1, F2, F3, F4]

2.1 For $m\ge1$, translation satisfies $d_2(p+z,p+y)=|(p+z)-(p+y)|_2=|z-y|_2=d_2(z,y)$. Hence the ball about $y$ constructed in step 1.1 translates to a Euclidean ball about $p+y$ inside $p+B_N(0,\rho)$; that set is open and contains $p$. For $m=0$, $\mathbb R^0=\{0\}$, $p=0$, and $N(0)=0<\rho$, so both sets are the whole singleton space, which is open: each positive-radius metric ball about its only point is the singleton. Both neighbourhood assertions therefore also hold in dimension zero. [given, F2, F3, F4, step 1.1]

3.1 Fix $x\in X$ such that $\Phi_n(x)\in B'$ for every integer $n\ge0$. For each such $n$, the inclusion $B'\subseteq B$ gives $\Phi_n(x)\in B$. The assumed implication for $B$ therefore gives $x\in W$. This holds for every $x\in X$ and every subset $B'\subseteq B$, including every smaller open neighbourhood of the centre. For an orbit-trapping application, take $\Phi_n(x)$ to be the $n$th forward iterate on a set $X$ where all these iterates are defined. [given] ∎
