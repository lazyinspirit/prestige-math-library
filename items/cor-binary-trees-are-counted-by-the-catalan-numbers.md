---
id: cor-binary-trees-are-counted-by-the-catalan-numbers
kind: corollary
title: "$\\lvert\\mathcal{T}_n\\rvert=C_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-binary-trees-correspond-to-dyck-paths, def-catalan-number, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, the set $\mathcal{T}_n$ of binary trees of size
$n$ is finite and has cardinality

$$\lvert\mathcal{T}_n\rvert=C_n,$$

the $n$th Catalan number.

## Facts & Assumptions

**Given:** a natural number $n$.

[L1] There is a bijection $\mathcal{T}_n\to\mathcal{D}_n$ ([[thm-binary-trees-correspond-to-dyck-paths]]).

[F1] If $A$ is finite and $f:A\to B$ is a bijection, then $B$ is finite and $\lvert A\rvert=\lvert B\rvert$ ([[def-finite-cardinality]]).

[L2] $C_n=\lvert\mathcal{D}_n\rvert$ ([[def-catalan-number]]).

## Proof

**Proof technique:** direct.

1.1 The bijection of [L1] identifies $\mathcal{T}_n$ with $\mathcal{D}_n$. [L1]

2.1 Since $\mathcal{D}_n$ has cardinality $C_n$ by [L2], [F1] transports that cardinality along the bijection of step 1.1 and gives $\lvert\mathcal{T}_n\rvert=C_n$. [L2, F1, step 1.1] ∎

## Remarks

- This is the binary-tree form of the Catalan count. Later examples use it in the forward direction, by listing trees of a fixed size, and in the backward direction, by importing a Catalan identity into the tree family.
