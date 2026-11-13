---
id: prop-expander-prereq-independent-copy-norm-symmetrization
kind: proposition
title: Norm symmetrization at the actual matrix mean
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-independence-of-finite-random-variables
  - math:def-expectation-on-a-finite-probability-space
  - math:thm-linearity-of-expectation
  - math:def-norm-and-normed-space
  - math:def-erdos-renyi-random-graph
  - math:def-matrix-space
  - math:def-matrix-product-and-identity-matrix
  - math:def-adjacency-matrix-of-a-finite-simple-graph
  - math:def-finite-probability-space-and-event
  - math:def-bernoulli-and-binomial-random-variables
dependency_roles:
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:thm-linearity-of-expectation: mathematical-premise
  math:def-norm-and-normed-space: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-matrix-space: mathematical-premise
  math:def-matrix-product-and-identity-matrix: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $(\Omega,w)$ be a finite probability space, and let $A,A':\Omega\to M_{m\times k}(\mathbb R)$ be matrix-valued functions, where $m,k$ are nonnegative integers. A matrix-valued random variable on this space means such a function. For any such function $B$, its distribution assigns to each matrix value $M$ the probability $q_B(M):=\mathbb P(B=M)=\sum_{\omega:B(\omega)=M}w(\omega)$, with the empty sum equal to zero. Having the same distribution means $q_A(M)=q_{A'}(M)$ for every $M$; independence of the two matrices means $\mathbb P(A=M,A'=N)=q_A(M)q_{A'}(N)$ for every pair $M,N$. Its matrix mean is $\mathbb EB:=\sum_{\omega\in\Omega}w(\omega)B(\omega)$, using entrywise matrix operations. Suppose they are independent and have the same distribution, and equip their matrix vector space with any norm $\|\cdot\|$. Matrix expectation is taken entrywise. Then $\mathbb E\|A-\mathbb EA\|\leq\mathbb E\|A-A'\|$.

For the adjacency matrix $A$ of the simple graph $G(n,p)$, with $n\geq 1$ and $0\leq p\leq 1$, let $J$ be the all-ones matrix and $I$ the identity matrix. Then $\mathbb EA=p(J-I)$ and $A-pJ=(A-\mathbb EA)-pI$. Consequently $\mathbb E\|A-pJ\|\leq\mathbb E\|A-A'\|+p\|I\|$ for an independent copy $A'$ under the same norm. The graph model has independent indicators for distinct unordered edges; independence of $A$ and $A'$ concerns the two whole matrices.

## Statement references

[[math:def-independence-of-finite-random-variables]]

[[math:def-expectation-on-a-finite-probability-space]]

[[math:def-norm-and-normed-space]]

[[math:def-erdos-renyi-random-graph]]

[[math:def-matrix-space]]

[[math:def-matrix-product-and-identity-matrix]]

[[math:def-adjacency-matrix-of-a-finite-simple-graph]]

[[math:def-finite-probability-space-and-event]]

## Facts & Assumptions

[F1] For finite-valued variables, independence means that each joint value probability is the product of its marginal value probabilities; finite expectation is the weighted sum over outcomes ([[math:def-independence-of-finite-random-variables]], [[math:def-expectation-on-a-finite-probability-space]]).

[F2] A norm is absolutely homogeneous and satisfies the triangle inequality ([[math:def-norm-and-normed-space]]). Expectation is linear for finite families of real random variables, without an independence hypothesis ([[math:thm-linearity-of-expectation]]).

[F3] In $G(n,p)$, the indicators of distinct unordered pairs of vertices are mutually independent Bernoulli variables with success probability $p$; the graph is simple ([[math:def-erdos-renyi-random-graph]], [[math:def-bernoulli-and-binomial-random-variables]]).

[F4] Real matrices form a vector space under entrywise addition and scalar multiplication. Equality can be checked entrywise, and the identity matrix has entries one on the diagonal and zero elsewhere ([[math:def-matrix-space]], [[math:def-matrix-product-and-identity-matrix]]).

[F5] In a chosen vertex order, the adjacency matrix of a finite simple graph has entry one exactly for an edge, zero otherwise; it is symmetric and has zero diagonal ([[math:def-adjacency-matrix-of-a-finite-simple-graph]]).

[F6] A finite probability space has nonnegative outcome weights summing to one; an event has probability equal to the sum of its outcome weights ([[math:def-finite-probability-space-and-event]]). The matrix-valued distribution in the Statement applies this event formula to the sets of outcomes with a fixed matrix value.


## Proof

**Given:** Independent identically distributed finite-valued matrices $A,A'$ and a norm on their real matrix space; for the graph application, the specified simple $G(n,p)$ model.

**Goal:** Prove the norm inequality and the stated graph centering identities and bound.

1.1 List the possible matrix values as $M_1,\ldots,M_r$ with probabilities $q_1,\ldots,q_r$, including all values of either copy. The sets $\{\omega:A(\omega)=M_j\}$ are pairwise disjoint and their union is $\Omega$, and $q_j=\sum_{\omega:A(\omega)=M_j}w(\omega)$. Thus the $q_j$ are nonnegative and sum to one; grouping the outcome sums entrywise gives $\mu=\mathbb EA=\sum_j q_jM_j$. For each $i$, $M_i-\mu=\sum_jq_j(M_i-M_j)$; repeated application of the triangle inequality and absolute homogeneity gives $\|M_i-\mu\|\leq\sum_jq_j\|M_i-M_j\|$. [F1, F2, F4, F6, algebra]

2.1 Multiply this inequality by $q_i$ and sum over $i$. Independence gives $\mathbb P(A=M_i,A'=M_j)=q_iq_j$, so the resulting inequality is $\mathbb E\|A-\mathbb EA\|\leq\sum_{i,j}q_iq_j\|M_i-M_j\|=\mathbb E\|A-A'\|$. [F1, F6, step 1.1]

3.1 For the simple graph, $A_{ii}=0$, while for $i\ne j$ the entry $A_{ij}$ is the indicator of the unordered edge $\{i,j\}$ and has expectation $p$. Thus entrywise $\mathbb EA=p(J-I)$, and subtraction gives $A-pJ=(A-\mathbb EA)-pI$. This uses the graph's edge-coordinate independence as part of its model, whereas step 2.1 uses independence of the whole matrices. [F1, F2, F3, F4, F5, algebra]

4.1 The triangle inequality and homogeneity yield $\|A-pJ\|\leq\|A-\mathbb EA\|+p\|I\|$ pointwise. Taking finite expectations and applying step 2.1 proves the asserted bound. [F1, F2, step 2.1, step 3.1] ∎
