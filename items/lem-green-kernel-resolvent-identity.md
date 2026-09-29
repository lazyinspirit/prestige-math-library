---
id: lem-green-kernel-resolvent-identity
kind: lemma
title: "Green-kernel resolvent identity"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-green-kernel-of-a-transient-chain
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-nonnegative-discrete-drift-for-countable-chains
  - def-nonnegative-extended-series
  - def-countable
  - def-extended-reals
  - lem-matrix-chapman-kolmogorov-equations
  - thm-tonelli-for-nonnegative-double-series
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
      locator: "§5.3, Theorem 5.3.1 and equation (5.3.1), printed pp. 281–282: expected visits and recurrence criterion; source context only, resolvent identity derived here."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "§9.5, Lemma 9.6, printed p. 120: expected visits before a stopping time; source context only, general countable-state resolvent identity derived here."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $E$ be at most countable, let $p$ be a transition matrix on $E$, and let $G(x,y)=\sum_{n\ge0}p^{(n)}(x,y)\in[0,+\infty]$. Define the extended nonnegative matrix products by the support-restricted sums

$$(PG)(x,y):=\sum_{z\in E:\,p(x,z)>0}p(x,z)G(z,y),\qquad (GP)(x,y):=\sum_{z\in E:\,p(z,y)>0}G(x,z)p(z,y).$$

Zero-coefficient terms are omitted, so neither product forms the undefined $0\cdot(+\infty)$. Then, for every $x,y\in E$,

$$G(x,y)=\mathbf1_{\{x=y\}}+(PG)(x,y)=\mathbf1_{\{x=y\}}+(GP)(x,y),$$

with all sums and equalities in the nonnegative extended reals.

## Facts & Assumptions

**Given:** An at most countable state space $E$ and a transition matrix $p$ on $E$.

[F1] The Green kernel is $G(x,y):=\sum_{n\ge0}p^{(n)}(x,y)\in[0,+\infty]$. [[def-green-kernel-of-a-transient-chain]]

[F2] For $\phi:E\to[0,+\infty]$, the nonnegative kernel action is $P\phi(x):=\sum_{z\in E:\,p(x,z)>0}p(x,z)\phi(z)\in[0,+\infty]$. [[def-nonnegative-discrete-drift-for-countable-chains]]

[F3] For $m,n\ge0$, $p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$. [[lem-matrix-chapman-kolmogorov-equations]]

[F4] A nonnegative double series has the same value in either summation order: $\sum_i\sum_j a_{ij}=\sum_j\sum_i a_{ij}$, including when the common value is $+\infty$. [[thm-tonelli-for-nonnegative-double-series]]

[F5] In the library's extended-real arithmetic, every product with one factor $0$ and the other $+\infty$ is undefined. [[def-extended-reals]]

[F6] A countable set is finite or is in bijection with $\mathbb N$. [[def-countable]]

[F7] The zero-step transition probability is $p^{(0)}(x,y)=\mathbf1_{\{x=y\}}$. [[def-transition-matrix-and-n-step-transition-probabilities]]

[F8] A nonnegative extended series is the supremum of its finite partial sums. [[def-nonnegative-extended-series]]

## Proof

**Proof technique:** direct.

1.1 If $c$ is a finite positive real and $(a_n)_{n\ge0}$ is nonnegative, then $c\sum_{n\ge0}a_n=\sum_{n\ge0}ca_n$. For partial sums $s_N=\sum_{n<N}a_n$, if $\sup_Ns_N<\infty$, continuity of multiplication by $c$ gives $cs_N\uparrow c\sup_Ns_N$; if $\sup_Ns_N=+\infty$, the $s_N$ are unbounded and so are $cs_N$. By [F5], every product is defined because $c>0$. [F5, F8, given, algebra]

2.1 Fix $x,y\in E$. For each $z$ with $p(x,z)>0$, [F1, F2] and step 1.1 give $p(x,z)G(z,y)=\sum_{n\ge0}p(x,z)p^{(n)}(z,y)$. Terms with $p(x,z)=0$ are omitted in $(PG)(x,y)$; inserting corresponding zero terms in the nonnegative double series is valid because $p^{(n)}(z,y)\le1$. Apply [F4] to that double series. If $E$ is finite, use a finite listing and pad with zeros; if countably infinite, use a bijection with $\mathbb N$ from [F6]. Then [F3] with $m=1$ yields $$(PG)(x,y)=\sum_{z\in E}\sum_{n\ge0}p(x,z)p^{(n)}(z,y)=\sum_{n\ge0}\sum_{z\in E}p(x,z)p^{(n)}(z,y)=\sum_{n\ge0}p^{(n+1)}(x,y)=\sum_{n\ge1}p^{(n)}(x,y).$$ [F1, F3, F4, F5, F6, F8, step 1.1, given]

2.2 For each $z$ with $p(z,y)>0$, [F1] and step 1.1 give $G(x,z)p(z,y)=\sum_{n\ge0}p^{(n)}(x,z)p(z,y)$. Terms with $p(z,y)=0$ are omitted in $(GP)(x,y)$; inserting their zero finite products in the double series introduces no undefined extended-real product. Tonelli [F4], now summing first over $z$, and [F3] with $m=n$ and second time index $1$ give $$(GP)(x,y)=\sum_{z\in E}\sum_{n\ge0}p^{(n)}(x,z)p(z,y)=\sum_{n\ge0}\sum_{z\in E}p^{(n)}(x,z)p(z,y)=\sum_{n\ge0}p^{(n+1)}(x,y)=\sum_{n\ge1}p^{(n)}(x,y).$$ [F1, F3, F4, F5, F6, F8, step 1.1, given]

3.1 By [F1, F8], separating the $n=0$ term in the nonnegative series gives $G(x,y)=p^{(0)}(x,y)+\sum_{n\ge1}p^{(n)}(x,y)$. This is a split of nonnegative partial sums, not a subtraction. Using [F7] and steps 2.1 and 2.2 proves both identities. If $E=\varnothing$, there are no $x,y$ and the claim is vacuous. For a one-state absorbing chain, $G=+\infty$ and both support-restricted products equal $+\infty$, so $G=1+\infty$ is well defined. Zero transition coefficients are always omitted; positive coefficients may multiply $+\infty$ and produce $+\infty$. The argument includes deterministic rows and all zero-time endpoints. It uses no AC: the one enumeration of this fixed countable $E$ is part of [F6], and [F4] is proved using finite choice. The lemma states no biconditional. [F1, F4, F5, F6, F7, F8, step 2.1, step 2.2, given] ∎
