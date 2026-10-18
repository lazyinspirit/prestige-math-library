---
id: lem-finite-iid-log-likelihood-concentrates
kind: lemma
title: Finite iid log-likelihood averages concentrate
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-probability-vector
  - def-finite-kullback-leibler-divergence
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-exponential-reciprocal-and-positivity
  - def-expectation-on-a-finite-probability-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 14, §14.5, proof of Theorem 14.13"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
---

## Statement

Let $P=(p_x)$ and $Q=(q_x)$ be probability vectors on a finite nonempty
alphabet with $P\ll Q$. For $n\ge1$, write
$P^n(x_1,\ldots,x_n)=\prod_i p_{x_i}$ and
$Q^n(x_1,\ldots,x_n)=\prod_i q_{x_i}$. Let $X_1,\ldots,X_n$ be independent
with common law $P$, define $\ell(x)=\log(p_x/q_x)$ when $p_x>0$ and
$\ell(x)=0$ when $p_x=0$, and put $L_n=\sum_{i=1}^n\ell(X_i)$. Then
$L_n/n\to D(P\|Q)$ in probability as $n\to\infty$. For every
$x^n\in\operatorname{supp}(P)^n$, one also has
$Q^n(x^n)=P^n(x^n)\exp(-L_n(x^n))$.

## Facts & Assumptions

**Given:** $P,Q$ with $P\ll Q$, and an independent identically distributed
sample $X_1,\ldots,X_n$ with law $P$.

[F1] [[def-finite-probability-vector]]: $\operatorname{supp}P$ is finite
and all its coordinates have positive mass; $P\ll Q$ gives $q_x>0$ whenever
$p_x>0$.

[F2] [[def-finite-kullback-leibler-divergence]]: the finite mean of
$\ell(X)=\log(p_X/q_X)$ under $P$ is
$\sum_{x:p_x>0}p_x\log(p_x/q_x)=D(P\|Q)$.

[F3] [[thm-natural-logarithm-laws]]: the logarithm of a finite product of
positive ratios is the sum of their logarithms.

[F4] [[def-natural-logarithm]]: $\exp(\log r)=r$ for $r>0$.

[F5] [[cor-exponential-reciprocal-and-positivity]]:
$\exp(-u)=1/\exp(u)$ for every real $u$.

[F6] [[def-expectation-on-a-finite-probability-space]]: on a finite
probability space, expectation is the finite probability-weighted sum.

## Proof

1.1 For $x^n\in\operatorname{supp}(P)^n$, every ratio $p_{x_i}/q_{x_i}$
is positive. By [F3], $L_n(x^n)=\log\prod_i(p_{x_i}/q_{x_i})$. Applying
[F4] and [F5] gives $\exp(L_n(x^n))=P^n(x^n)/Q^n(x^n)$ and hence
$Q^n(x^n)=P^n(x^n)\exp(-L_n(x^n))$. [F1, F3, F4, F5, given, algebra]

2.1 The values $\ell(x)$ on the finite set $\operatorname{supp}P$ form a
bounded finite-valued random variable. Put $Y_i:=\ell(X_i)-D(P\|Q)$;
[F2] and the finite-sum expectation formula [F6] give $E[Y_i]=0$. Let
$\sigma^2=E[Y_i^2]<\infty$, which is independent of $i$ since all $X_i$
have law $P$. For $i\ne j$, expanding the expectation on the product law
$P^n$ using [F6] gives
$$E[Y_iY_j]=\left(\sum_xp_x(\ell(x)-D(P\|Q))\right)^2\prod_{k\ne i,j}\left(\sum_xp_x\right)=0,$$
where the square is zero by
[F2] and the remaining factors equal one by [F1]. Expanding
$E[(n^{-1}\sum_iY_i)^2]$ therefore gives $\sigma^2/n$.
For every $\delta>0$, the pointwise inequality
$\delta^2\mathbf 1_{\{|n^{-1}\sum_iY_i|\ge\delta\}}
\le(n^{-1}\sum_iY_i)^2$ and [F6] imply
$P^n(|L_n/n-D(P\|Q)|\ge\delta)\le\sigma^2/(n\delta^2)\to0$, since the
expectation of an indicator is the probability of its event. [F1, F2, F6,
given, algebra] ∎
