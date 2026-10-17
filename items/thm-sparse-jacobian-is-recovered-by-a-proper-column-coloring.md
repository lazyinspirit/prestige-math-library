---
id: thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring
kind: theorem
title: "A collision-free column coloring recovers every structurally sparse Jacobian entry"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-structural-column-coloring-for-sparse-jacobian-recovery, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-finite-sum-in-a-commutative-monoid, def-semigroup-and-monoid]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thomas F. Coleman and Jorge J. Moré, Estimation of Sparse Jacobian Matrices and Graph Coloring Problems, Argonne National Laboratory Report ANL-81-39"
      url: "https://digital.library.unt.edu/ark:/67531/metadc283504/"
    - title: "Bradley M. Bell and Kasper Kristensen, Computing Sparse Jacobians and Hessians Using Algorithmic Differentiation"
      url: "https://arxiv.org/pdf/2111.05207"
dependency_level: 1
---

## Statement

Let the objects and notation be those of [[def-structural-column-coloring-for-sparse-jacobian-recovery]], and suppose $\chi$ is a proper coloring of the graph of a safe structural row pattern. For every row $0\le i<m$, every color $c$, and every column $j\in S_i$ with $\chi(j)=c$,

$$J_{ij}=(Js^c)_i.$$

Entries with $j\notin S_i$ are zero by the safe-pattern hypothesis. Thus all entries are recovered from one compressed product per color. A color collision in a row does not give a general recovery guarantee: two distinct Jacobians supported on that colliding row can have the same compressed product.

## Facts & Assumptions

**Given:** A differentiable map, its Jacobian, a safe row pattern and a proper coloring as in the statement.

[F1] [[def-structural-column-coloring-for-sparse-jacobian-recovery]]: $J_{ij}=0$ outside $S_i$; an edge joins columns that share some $S_i$; a proper coloring assigns different colors to adjacent columns; and $s^c$ is the indicator of color $c$.

[F2] [[def-jacobian-matrix-and-gradient]]: the Jacobian entries are the partial derivatives $J_{ij}=\partial_jF_i(x)$.

[F3] [[def-matrix-product-and-identity-matrix]]: for an $m\times n$ matrix $A$ and a vector $v\in\mathbb R^n$, $(Av)_i=\sum_{j<n}A_{ij}v_j$.

[F4] [[def-finite-sum-in-a-commutative-monoid]] and [[def-semigroup-and-monoid]]: a finite sum is independent of its enumeration, the empty sum is $0$, and addition is associative with identity $0$.

## Proof

**Given:** The hypotheses listed above.

1.1 For a fixed row $i$ and color $c$, [F3] gives $(Js^c)_i=\sum_{j<n}J_{ij}s^c_j$. By [F1], a summand can be nonzero only when $j\in S_i$ and $\chi(j)=c$. [F4] makes this an order-independent finite sum with zero terms off that set. [given, F1, F3, F4, algebra]

2.1 If two distinct columns of $S_i$ had color $c$, the graph definition in [F1] would make them adjacent, contradicting proper coloring. Thus at most one summand in step 1.1 is nonzero. If the specified $j\in S_i$ has color $c$, it is that sole summand and equals $J_{ij}$ because $s^c_j=1$; if no such column exists, every summand is zero and the row product is $0$ by [F4]. Entries outside the safe pattern are zero by [F1]. [given, F1, F4, step 1.1, algebra]

3.1 To verify the collision caveat, let $F(z_0,z_1)=z_0+2z_1$ and $G(z_0,z_1)=3z_0$, and evaluate both Jacobians at $(0,0)$. By [F2], their one-row Jacobians are $(1,2)$ and $(3,0)$, both supported in $S_0=\{0,1\}$. Assign columns $0$ and $1$ the same color, whose seed is $(1,1)^T$ by [F1]. Both compressed products equal $3$ by [F3], so this color collision cannot determine the entries. [F1, F2, F3, construct, algebra] ∎
