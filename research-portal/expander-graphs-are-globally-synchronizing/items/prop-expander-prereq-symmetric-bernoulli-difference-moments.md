---
id: prop-expander-prereq-symmetric-bernoulli-difference-moments
kind: proposition
title: Finite Bernoulli difference laws and parity of moments
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:def-product-of-finite-probability-spaces
  - math:def-expectation-on-a-finite-probability-space
  - math:def-finite-probability-space-and-event
  - math:def-finite-real-random-variable-and-distribution
dependency_roles:
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:def-product-of-finite-probability-spaces: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-finite-real-random-variable-and-distribution: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $0\le p\le1$ and let $B,B'$ be independent Bernoulli$(p)$ random variables on a finite probability space. Put $W=B-B'$. Then $\mathbb P(W=1)=\mathbb P(W=-1)=p(1-p)$ and $\mathbb P(W=0)=p^2+(1-p)^2$. For every positive integer $k$, $\mathbb E[W^k]$ is zero if $k$ is odd and $2p(1-p)$ if $k$ is even; $\mathbb E[W^0]=1$, with $W^0$ the constant one.

More generally, let $E$ be a finite set of unordered edges, meaning two-element subsets of a finite vertex set, and suppose that the family $(B_e,B'_e)_{e\in E}$ of all its Bernoulli$(p)$ coordinates is mutually independent. Then the differences $W_e=B_e-B'_e$ are mutually independent. This hypothesis holds for the coordinate variables on the finite product of two Bernoulli spaces per edge. Defining $W_{ij}=W_{\{i,j\}}$ for distinct vertices makes $W_{ij}=W_{ji}$: reflection is the same random variable, not another independent copy.

## Statement references

[[math:def-bernoulli-and-binomial-random-variables|Bernoulli random variables]]

[[math:def-independence-of-finite-random-variables|Mutual independence of finite-valued random variables]]

[[math:def-product-of-finite-probability-spaces|Finite product probability spaces]]

[[math:def-expectation-on-a-finite-probability-space|Finite expectation]]

[[math:def-finite-probability-space-and-event|Finite probability spaces and event probabilities]]

[[math:def-finite-real-random-variable-and-distribution|Finite real random variables and their distributions]]

## Facts & Assumptions

[F1] By [[math:def-bernoulli-and-binomial-random-variables]], a Bernoulli$(p)$ variable has probabilities $p$ and $1-p$ at $1$ and $0$, respectively.

[F2] By [[math:def-independence-of-finite-random-variables]], mutual independence means that every simultaneous assignment to any nonempty subfamily has probability equal to the product of its coordinate probabilities.

[F3] By [[math:def-product-of-finite-probability-spaces]], a product outcome has weight equal to the product of its coordinate weights; the empty product has weight one.

[F4] By [[math:def-expectation-on-a-finite-probability-space]], expectation is the sum of a random variable's values weighted by outcome probabilities.

[F5] By [[math:def-finite-probability-space-and-event]], a finite probability space $(\Omega,w)$ has nonnegative outcome weights summing to one, and $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$ for each event $A\subseteq\Omega$. Summing over disjoint events therefore sums their probabilities.

[F6] By [[math:def-finite-real-random-variable-and-distribution]], a finite real random variable is a function $\Omega\to\mathbb R$, and its law assigns each value the probability of its fibre. Differences and nonnegative integer powers here are formed pointwise as functions on the same finite outcome set, with zeroth powers defined as the constant one.

## Proof

**Given:** The finite probability spaces and variables in the statement.

**Goal:** Establish the difference law, its moments, and independence across edge blocks.

1.1 By independence, the four assignments $(B,B')=(1,0),(0,1),(1,1),(0,0)$ have respective probabilities $p(1-p),p(1-p),p^2,(1-p)^2$. Their differences are respectively $1,-1,0,0$, giving the asserted law, including at $p=0$ and $p=1$. [F1, F2, F5, F6]

2.1 For $k>0$, the weighted sum over these values is $\mathbb E[W^k]=p(1-p)(1+(-1)^k)$, since the zero term vanishes. This gives the two parity cases. The zeroth power is the constant one, whose expectation is one by normalization. [F4, F5, F6, step 1.1]

2.2 For a nonempty $J\subseteq E$ and prescribed values $a_e\in\{-1,0,1\}$, sum the joint coordinate-assignment probabilities over the disjoint assignments satisfying $b_e-b'_e=a_e$ for each $e\in J$. Mutual independence factors every summand into its edge-block factors, and finite distributivity factors the sum into $\prod_{e\in J}\mathbb P(W_e=a_e)$. Thus the differences are mutually independent; impossible values have probability zero, and the empty family is independent by convention. [F2, F5, F6, step 1.1]

3.1 On the stated finite product, summing product weights over all unprescribed coordinates gives one for each such coordinate, so every prescribed coordinate assignment has the product of its marginal weights. The coordinates are therefore mutually independent. Finally, $\{i,j\}=\{j,i\}$, so the two reflected entries are literally the same difference variable. [F1, F2, F3, F5, F6, step 2.2] ∎
