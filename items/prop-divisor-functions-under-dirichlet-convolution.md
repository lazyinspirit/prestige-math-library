---
id: prop-divisor-functions-under-dirichlet-convolution
kind: proposition
title: "The divisor functions arise by Dirichlet convolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completely-multiplicative-arithmetic-function, def-dirichlet-convolution, def-dirichlet-convolution-identity, def-divisor-counting-function, def-divisor-power-sum-functions, thm-dirichlet-convolution-preserves-multiplicativity]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.8"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercises 2.49 and 2.50"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

One has

$$
\tau=\mathbf 1*\mathbf 1,\qquad \sigma_k=\mathbf 1*\operatorname{id}_k.
$$

Consequently $\tau$ and every $\sigma_k$ are multiplicative. For a prime power
$p^a$,

$$
\tau(p^a)=a+1,\qquad \sigma_k(p^a)=1+p^k+\cdots+p^{ak}.
$$

## Facts & Assumptions

**Given:** An integer $k$, a positive integer $n$, and a prime power $p^a$ with $a\ge0$.

## Proof

**Proof technique:** direct.

1.1 By [[def-dirichlet-convolution]], one has $(\mathbf 1*\mathbf 1)(n)=\sum_{d\mid n} 1=\tau(n)$ from [[def-divisor-counting-function]], and also $(\mathbf 1*\operatorname{id}_k)(n)=\sum_{d\mid n} d^k=\sigma_k(n)$ from [[def-divisor-power-sum-functions]]. [given, algebra]

2.1 The functions $\mathbf 1$ and $\operatorname{id}_k$ are completely multiplicative in the sense of [[def-completely-multiplicative-arithmetic-function]], so [[thm-dirichlet-convolution-preserves-multiplicativity]] makes $\tau$ and $\sigma_k$ multiplicative. [step 1.1, given]

3.1 The positive divisors of $p^a$ are exactly $1,p,\ldots,p^a$. Therefore $\tau(p^a)=\sum_{j=0}^{a} 1=a+1$ and $\sigma_k(p^a)=\sum_{j=0}^{a} p^{jk}=1+p^k+\cdots+p^{ak}$. [given, algebra] ∎
