---
id: thm-weighted-walks-are-entries-of-transfer-matrix-powers
kind: theorem
title: "The $(u,v)$ entry of $A^n$ is the total weight of length-$n$ walks from $u$ to $v$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-weighted-digraph-walk-and-transfer-matrix, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.7.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $A$ be the transfer matrix of a finite weighted directed multigraph over a commutative ring $R$. For every $n\in\mathbb N$ and vertices $u,v$,

$$ (A^n)_{uv}=\sum_{W:u\leadsto v,\ |W|=n}w(W). $$

The sum is over all length-$n$ walks from $u$ to $v$. Powers of a square matrix are the ones given by the recursion $A^0:=I_p$ and $A^{n+1}:=A^nA$, where $p$ is the number of vertices; the cited matrix laws supply the product and the identity but no power notation, so the recursion is fixed here. At $n=0$, both sides are $1_R$ when $u=v$ and $0_R$ otherwise.

## Facts & Assumptions

**Given:** A finite weighted directed multigraph over $R$, its transfer matrix $A$, vertices $u,v$, and a length $n\in\mathbb N$.

[L1] The transfer entry $A_{uv}$ is the sum of the weights of all edges from $u$ to $v$, and the unique empty walk at a vertex has weight $1_R$ ([[def-finite-weighted-digraph-walk-and-transfer-matrix]]).

[L2] Matrix multiplication is $(AB)_{uv}=\sum_zA_{uz}B_{zv}$ and the identity matrix has diagonal entries $1$ and off-diagonal entries $0$ ([[def-ring-matrix-product-identity-and-transpose]]).

[L3] For matrices over a commutative ring of compatible shapes, $A(BC)=(AB)C$ and $I_mA=A=AI_n$, and the entrywise additive and distributive laws hold, including all zero-sized shapes ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the recursion in the Statement gives $A^0=I_p$, so $(A^0)_{uv}=(I_p)_{uv}$, which is $1_R$ when $u=v$ and $0_R$ otherwise by [L2]; this agrees with the empty-walk convention in [L1], the empty walk being the unique walk of length $0$ from $u$ to $v$ and existing only when $u=v$. [base, L1, L2]

1.2 Assume the formula at length $n$. The recursion gives $A^{n+1}=A^nA$, so $(A^{n+1})_{uv}=\sum_{z<p}(A^n)_{uz}A_{zv}$ by the product formula of [L2]. [ih, L2]

2.1 Substitute the induction formula and the edge-sum definition [L1] into step 1.2. The distributive laws of [L3] expand the result into one product for each length-$n$ walk from $u$ to $z$ followed by one edge from $z$ to $v$. [step 1.2, L1, L3, algebra]

3.1 Every length-$(n+1)$ walk has a unique penultimate vertex and last edge, so the expansion in step 2.1 is exactly the total weight of all length-$(n+1)$ walks from $u$ to $v$. [step 2.1, L1]

4.1 The base case and induction step prove the formula for all $n\in\mathbb N$. [step 1.1, step 3.1, discharge-induction] ∎
