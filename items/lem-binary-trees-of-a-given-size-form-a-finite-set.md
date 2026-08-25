---
id: lem-binary-trees-of-a-given-size-form-a-finite-set
kind: lemma
title: "Each $\\mathcal{T}_n$ is finite"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-binary-tree-and-its-size, thm-sum-rule, thm-product-rule, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, the set

$$\mathcal{T}_n := \{\, T\in\mathcal{T} : \operatorname{size}(T)=n \,\}$$

of binary trees of size $n$ is finite ([[def-binary-tree-and-its-size]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] The recursion of [[def-binary-tree-and-its-size]] gives $$\mathcal{T}_{n+1}\cong\coprod_{i=0}^{n}\mathcal{T}_i\times\mathcal{T}_{n-i}.$$

[F2] If $A$ and $B$ are finite and disjoint, then $A\cup B$ is finite; and a finite disjoint union of finite sets is finite ([[thm-sum-rule]]).

[F3] If $A$ and $B$ are finite, then $A\times B$ is finite ([[thm-product-rule]]).

## Proof

**Proof technique:** induction.

1.1 [base] The set $\mathcal{T}_0$ has the single element $\{\varepsilon\}$ by [[def-binary-tree-and-its-size]], so $\mathcal{T}_0$ is finite. [F1]

1.2 [ih] Assume that every $\mathcal{T}_j$ with $j\le n$ is finite. [given]

2.1 For each index $i$ with $0\le i\le n$, the sets $\mathcal{T}_i$ and $\mathcal{T}_{n-i}$ are finite by the induction hypothesis, so $\mathcal{T}_i\times\mathcal{T}_{n-i}$ is finite by [F3]. [F3, step 1.2]

3.1 The disjoint union $\coprod_{i=0}^{n}\mathcal{T}_i\times\mathcal{T}_{n-i}$ is finite by [F2]. [F2, step 2.1]

4.1 Since $\mathcal{T}_{n+1}$ is in bijection with that finite disjoint union by [F1], the set $\mathcal{T}_{n+1}$ is finite. Therefore every $\mathcal{T}_n$ is finite. [F1, step 3.1, discharge-induction] ∎

## Remarks

- This is the well-definedness step for the next corollaries. The Catalan count of binary trees is a statement about the natural number $\lvert\mathcal{T}_n\rvert$, and that symbol is honest only because this lemma makes the set finite first.
