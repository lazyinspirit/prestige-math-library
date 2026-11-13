---
id: lem-author-b785a1269d40-degree-forces-centered-norm
title: A high-degree vertex forces a large centered adjacency norm
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - def-expander-sync-centered-matrices
  - def-expander-sync-graph-notation
dependency_roles:
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Let $A$ be the adjacency matrix of a simple graph on $n\ge1$ vertices, $J$ the all-ones matrix, and $D$ the largest vertex degree. With Euclidean operator norms,
$$\|A-J/n\|\ge\sqrt D-1.$$
For the article's centering $\Delta_A=A-pJ$ this applies when $p=1/n$.

## Facts & Assumptions

[F1] The Euclidean operator norm is $\|B\|=\sup_{\|x\|_2=1}\|Bx\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] Cauchy–Schwarz bounds a Euclidean inner product by the product of the two norms, and the Euclidean norm satisfies the triangle inequality ([[math:thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] The adjacency matrix is symmetric, its entries are edge indicators, and the degree of a vertex is its row sum ([[def-expander-sync-graph-notation]]). The centering for $G(n,p)$ is $\Delta_A=A-pJ$ ([[def-expander-sync-centered-matrices]]).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 At a vertex $u$ of degree $D$, the column $Ae_u$ has exactly $D$ entries equal to one and all other entries zero. Since $e_u$ is a unit vector, [F1] gives $\|A\|\ge\|Ae_u\|_2=\sqrt D$. For every unit vector $x$, [F2] gives $|\sum_i x_i|\le\sqrt n$, so $\|Jx\|_2=\sqrt n|\sum_i x_i|\le n$. Equality holds at the unit constant vector. Thus $\|J/n\|=1$. [F1, F2, F3, given]

2.1 The Euclidean triangle inequality applied to $(A-J/n)x+(J/n)x$ and then the supremum formula give $\|A\|\le\|A-J/n\|+\|J/n\|$. Insert step 1.1 and rearrange. At $p=1/n$, [F3] identifies $A-J/n$ with $\Delta_A$. [F1, F2, F3, step 1.1, algebra] ∎
