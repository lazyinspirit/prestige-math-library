---
id: thm-product-probability-has-independent-coordinate-events
kind: theorem
title: "Product weights normalize, and coordinate events are mutually independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-of-finite-probability-spaces, lem-finite-sum-laws, lem-finite-sum-reindexing-and-fubini, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

The weights in every finite product of finite probability spaces are nonnegative and sum to $1$. For events $A_i\subseteq\Omega_i$, the coordinate events
$$C_i:=\{\omega\in\prod_{j\in I}\Omega_j:\omega_i\in A_i\}$$
are mutually independent, and for every $J\subseteq I$,
$$\mathbb P\!\left(\bigcap_{j\in J}C_j\right)=\prod_{j\in J}\mathbb P_j(A_j).$$

## Facts & Assumptions

**Given:** A finite family $((\Omega_i,w_i))_{i\in I}$ of finite probability spaces and coordinate events $C_i$.

[L1] Product outcomes and their weights are defined coordinatewise, with the empty product equal to $1$ ([[def-product-of-finite-probability-spaces]]).

[L2] Finite Fubini interchanges and factors iterated finite sums, while finite products of nonnegative reals are nonnegative ([[lem-finite-sum-laws]], [[lem-finite-sum-reindexing-and-fubini]]).

[L3] Mutual independence is the intersection product identity for every nonempty subfamily ([[def-pairwise-and-mutual-independence-of-events]]).

## Proof

**Proof technique:** induction.

1.1 For $I=\varnothing$, the unique product outcome has weight $1$, so normalization holds. [L1, base]

1.2 If normalization holds for $I$ and another factor $(\Omega_k,w_k)$ is appended, finite Fubini gives $\sum_{(\omega,u)}w(\omega)w_k(u)=(\sum_\omega w(\omega))(\sum_u w_k(u))=1$. [L1, L2, ih]

1.3 For $J\subseteq I$, summing the product weights over $\bigcap_{j\in J}C_j$ factors coordinatewise: a coordinate in $J$ contributes $\mathbb P_j(A_j)$ and a coordinate outside $J$ contributes $1$. [L1, L2]

2.1 Induction proves normalization for every finite product; nonnegativity follows from nonnegativity of all factor weights. [step 1.1, step 1.2, L2, discharge-induction]

3.1 Thus $\mathbb P(\bigcap_{j\in J}C_j)=\prod_{j\in J}\mathbb P_j(A_j)$. The empty $J$ gives $1=1$, so [L3] proves mutual independence in all cases. [step 2.1, step 1.3, L3, discharge-induction] ∎
