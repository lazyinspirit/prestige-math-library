---
id: ex-closed-walks-in-the-complete-graph
kind: example
title: "Closed walks of length $n$ in $K_p$ are counted by $(p-1)^n+(p-1)(-1)^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-weighted-digraph-walk-and-transfer-matrix, thm-weighted-walks-are-entries-of-transfer-matrix-powers, cor-eigenvalue-form-of-the-transfer-matrix-trace]
justified_by: []
aliases: []
landmark: false
proof_strategy: basis
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.5"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

For integers $p,n\ge1$, the number of rooted closed walks of length $n$ in the complete graph $K_p$ is

$$ (p-1)^n+(p-1)(-1)^n.$$

Here an undirected edge is represented by one directed edge in each direction, every edge has weight $1\in\mathbb Q$, and a starting vertex is part of a rooted closed walk.

## Facts & Assumptions

**Given:** Integers $p,n\ge1$ and the complete graph $K_p$ with transfer matrix $A=J-I$ over $\mathbb Q$.

[L1] A finite unit-weighted directed graph has a transfer matrix whose rows are sources and columns are targets ([[def-finite-weighted-digraph-walk-and-transfer-matrix]]).

[L2] The diagonal entry $(A^n)_{uu}$ counts length-$n$ walks from $u$ back to $u$, so their total number is $\operatorname{tr}(A^n)$ ([[thm-weighted-walks-are-entries-of-transfer-matrix-powers]]).

[L3] If $\chi_A(t)=\prod_{i<p}(t-\lambda_i)$ over the base field, then $\operatorname{tr}(A^n)=\sum_{i<p}\lambda_i^n$ ([[cor-eigenvalue-form-of-the-transfer-matrix-trace]]).

## Verification

**Proof technique:** explicit eigenbasis.

1.1 By [L1], $A=J-I$. The all-ones vector $\mathbf1$ satisfies $A\mathbf1=(p-1)\mathbf1$, while $A(e_i-e_0)=-(e_i-e_0)$ for $1\le i<p$. [given, L1, algebra]

1.2 The list $\mathbf1,e_1-e_0,\ldots,e_{p-1}-e_0$ is linearly independent over $\mathbb Q$: a relation has coordinates $\alpha+\beta_i=0$ for $i\ge1$ and $\alpha-\sum_i\beta_i=0$, hence $p\alpha=0$. Since $p\ne0$ in $\mathbb Q$, every coefficient is zero. It is therefore a basis of $\mathbb Q^p$. [given, algebra]

2.1 In the basis of step 1.2, $A$ is diagonal with entries $p-1,-1,\ldots,-1$, so $\chi_A(t)=(t-(p-1))(t+1)^{p-1}$ in $\mathbb Q[t]$. [step 1.1, step 1.2, algebra]

3.1 Apply [L3] to step 2.1 and then [L2] to obtain the displayed closed-walk count. When $p=1$, the difference-vector list is empty and the formula gives $0$ because $n\ge1$. [step 2.1, L2, L3] ∎
