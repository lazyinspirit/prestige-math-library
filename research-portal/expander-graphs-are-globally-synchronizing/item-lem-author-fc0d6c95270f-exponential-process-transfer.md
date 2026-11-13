---
title: Exponential clocks and the uniform edge-order process
status: published
research_item: lem-author-fc0d6c95270f-exponential-process-transfer
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-threshold-characterisations-of-real-and-extended-real-measurability](https://alphabetamath.cc/item/thm-threshold-characterisations-of-real-and-extended-real-measurability)


## Statement

Assume countable choice and use independent uniform edge labels $U_e\in[0,1)$ for the possible edges of a graph on $n\ge2$ vertices. Set $T_e=-\log(1-U_e)$ and $p(t)=1-e^{-t}$ for $t\ge0$. The clocks are independent and satisfy $\mathbb P(T_e\le t)=p(t)$; a rate-one exponential clock means precisely this distribution. The graph $H_t$ containing edges with $T_e\le t$ equals $G_{p(t)}$. Almost surely all clocks are finite and distinct, and their edge ordering is uniform. If $s_m$ is the time the $m$th edge appears, then $H_{s_m}=G(n,m)$ for $1\le m\le N=\binom n2$. Hence an assertion holding for every real $t\ge s_\tau$ holds for every indexed graph $G(n,m)$ with $m\ge\tau$, where $\tau$ is the connectivity index.

## Facts & Assumptions

[F1] Independent uniform labels give the threshold graphs and almost surely a uniform strict ordering of all edges; the first-connected index is bounded and connectivity persists under edge addition ([def-expander-prereq-edge-order-process-coupling](item-def-expander-prereq-edge-order-process-coupling)).

[F2] The natural logarithm is the inverse of the exponential by [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm); it is strictly increasing and satisfies $\log1=0$ by [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws).

[F3] A real-valued function on a measurable space is measurable if and only if every lower threshold set $\{x:f(x)\le a\}$, for real $a$, is measurable ([math:thm-threshold-characterisations-of-real-and-extended-real-measurability](https://alphabetamath.cc/item/thm-threshold-characterisations-of-real-and-extended-real-measurability)).

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Write $g(u)=-\log(1-u)$ for $0\le u<1$. Since $0<1-u\le1$, $g(u)$ is finite and nonnegative. It is strictly increasing: if $u<v$, then $1-u>1-v>0$, so $-\log(1-u)<-\log(1-v)$. For $t\ge0$, logarithm inversion and monotonicity give $g(u)\le t$ exactly when $u\le1-e^{-t}$, with $0\le1-e^{-t}<1$. [given, F2, algebra]

2.1 Give $[0,1)$ its Borel sigma-algebra. For any real $a<0$, $\{u:g(u)\le a\}=\varnothing$; for $a\ge0$, this set is $[0,1-e^{-a}]$, a Borel subset of $[0,1)$. Hence [F3] makes $g$ Borel measurable. For every Borel set $B\subseteq\mathbb R$, the event $\{T_e\in B\}=\{U_e\in g^{-1}(B)\}$ is measurable because $U_e$ is a random label and $g^{-1}(B)$ is Borel. Thus each $T_e$ is a random variable. For distinct edges $e_1,\ldots,e_k$ and arbitrary Borel sets $B_1,\ldots,B_k$, independence of the labels gives $\mathbb P(\bigcap_{j=1}^k\{T_{e_j}\in B_j\})=\mathbb P(\bigcap_{j=1}^k\{U_{e_j}\in g^{-1}(B_j)\})=\prod_{j=1}^k\mathbb P(U_{e_j}\in g^{-1}(B_j))=\prod_{j=1}^k\mathbb P(T_{e_j}\in B_j)$. This proves independence for all Borel clock events. [F1, F3, step 1.1]

3.1 For $t\ge0$, the threshold equivalence gives $\mathbb P(T_e\le t)=\mathbb P(U_e\le p(t))=p(t)$ by the uniform threshold law in [F1]. Edge by edge it also gives $H_t=G_{p(t)}$ for every $t\ge0$. [F1, step 1.1, step 2.1]

4.1 The transformation from labels to clocks is strictly increasing, so it preserves their strict order outside the label-tie event of probability zero. At the $m$th arrival, precisely the first $m$ edges have appeared. Connectedness is preserved thereafter, so $s_\tau$ is the first connected clock time, and substituting $t=s_m\ge s_\tau$ proves every indexed assertion. This argument evaluates a single pathwise assertion and uses no union bound at random times. [step 1.1, step 3.1, F1] ∎
