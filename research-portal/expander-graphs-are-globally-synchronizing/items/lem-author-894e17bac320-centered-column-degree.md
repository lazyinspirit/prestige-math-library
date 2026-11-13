---
id: lem-author-894e17bac320-centered-column-degree
title: A centered adjacency column retains a high-degree lower bound
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-expander-sync-centered-matrices
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

For a simple undirected graph without self-loops on $n\ge1$ vertices with adjacency matrix $A$, a vertex $u$ of degree $D$, and $0\le p\le1$, let $J$ be the all-ones matrix and $\Delta=A-pJ$. With Euclidean operator norms,
$$\|\Delta\|\ge(1-p)\sqrt D.$$
Unlike a bound obtained by subtracting $\|pJ\|$, this lower bound remains useful when $np$ grows.

## Facts & Assumptions

[F1] The operator norm satisfies $\|B\|\ge\|Be_u\|_2$ for a coordinate unit vector $e_u$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] For the undirected loop-free simple graph, adjacency entries are symmetric edge indicators and the degree of $u$ is $D=\sum_x A_{ux}=\sum_x A_{xu}$ ([[def-expander-sync-graph-notation]]). The centered adjacency matrix with reference parameter $d^*=pn$ is $A-(d^*/n)J=A-pJ$ ([[def-expander-sync-centered-matrices]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the asserted conclusions.

1.1 The column $Ae_u$ has exactly $D$ entries equal to one; the other $n-D$ entries equal zero. The corresponding entries of $\Delta e_u$ are $1-p$ and $-p$. Therefore $\|\Delta e_u\|_2^2=D(1-p)^2+(n-D)p^2\ge D(1-p)^2$. [F2, given, algebra]

2.1 Apply [F1] and take nonnegative square roots in step 1.1. Since $1-p\ge0$, this gives precisely the claimed inequality. [F1, step 1.1, algebra] ∎
