---
id: lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction
kind: lemma
title: "An irreducible row-substochastic matrix with a strict row has a weighted contraction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.3"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 119–122: Definition 4.5 and Theorem 4.9 for irreducibly diagonally dominant matrices, with at least one strict row."
---

## Statement

Let $n\ge1$ and let $C=(c_{ij})\in M_n(\mathbb R)$ have nonnegative entries
and row sums at most $1$. Form the directed graph with vertices
$\{1,\ldots,n\}$ and an edge $i\to j$ exactly when $c_{ij}>0$; assume this
graph is strongly connected, with paths of length $0$ allowed. Assume one row
$r$ has sum strictly less than $1$. Then, with $\mathbf1=(1,\ldots,1)^T$,

$$C^n\mathbf1<\mathbf1$$

coordinatewise, and the series $v=\sum_{k=0}^{\infty}C^k\mathbf1$ converges
coordinatewise to a vector satisfying $v>0$ and $Cv<v$ coordinatewise.

## Facts & Assumptions

**Given:** A nonnegative $n\times n$ matrix $C$ with row sums at most $1$, strongly connected directed support graph, and at least one strict row $r$.

[A1] $C\mathbf1\le\mathbf1$ and $d:=\mathbf1-C\mathbf1\ge0$ coordinatewise, with $d_r>0$ for a strict row $r$.

[A2] For every vertex $i$, strong connectivity supplies a directed path from $i$ to $r$; a shortest path has length at most $n-1$.

## Proof


1.1 Put $d=\mathbf1-C\mathbf1$. Telescoping gives $\mathbf1-C^n\mathbf1=\sum_{k=0}^{n-1}C^k d$, since $(I-C)\sum_{k=0}^{n-1}C^k=I-C^n$. Each summand is coordinatewise nonnegative by [A1]. [given, A1, algebra]

2.1 For each $i$, choose by [A2] a path of length $s_i\le n-1$ from $i$ to $r$. The product of the positive edge weights along it is a positive term of $(C^{s_i})_{ir}$; for $s_i=0$ this entry is $1$. Hence $(C^{s_i}d)_i\ge(C^{s_i})_{ir}d_r>0$. Step 1.1 then gives $(C^n\mathbf1)_i<1$ for every $i$. [A1, A2, step 1.1, algebra]

3.1 Let $q:=\max_i(C^n\mathbf1)_i<1$. Since $C^s\mathbf1\le\mathbf1$ for $0\le s<n$, nonnegativity gives $C^{kn+s}\mathbf1\le q^k\mathbf1$ for all $k\ge0$ and $0\le s<n$. Therefore $\sum_{j=0}^{\infty}C^j\mathbf1$ converges coordinatewise and its sum $v$ satisfies $v\ge\mathbf1>0$. [A1, step 2.1, algebra]

4.1 Multiplying the convergent series by $C$ shifts its terms, so $Cv=v-\mathbf1<v$ coordinatewise. [step 3.1, algebra] ∎
