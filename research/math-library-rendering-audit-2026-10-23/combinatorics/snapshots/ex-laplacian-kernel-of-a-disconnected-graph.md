---
id: ex-laplacian-kernel-of-a-disconnected-graph
kind: example
title: "A disconnected graph has a Laplacian kernel spanned by its component indicators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-laplacian-kernel-dimension-counts-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, The Matrix-Tree Theorem"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Example

Let $G$ have vertex set $\{1,2,3,4\}$ and edge set
$\{\{1,2\},\{3,4\}\}$. Then

$$\ker L(G)=\operatorname{span}\{(1,1,0,0)^{\mathsf T},(0,0,1,1)^{\mathsf T}\}.$$

## Facts & Assumptions

**Given:** The graph $G$ with components $\{1,2\}$ and $\{3,4\}$.

[L1] The Laplacian kernel is spanned by the indicator vectors of the connected components ([[thm-laplacian-kernel-dimension-counts-components]]).

## Verification

**Proof technique:** direct.

1.1 The graph $G$ has exactly two connected components, namely $\{1,2\}$ and $\{3,4\}$. Their indicator vectors are $(1,1,0,0)^{\mathsf T}$ and $(0,0,1,1)^{\mathsf T}$. [given]

2.1 By [L1], those two indicator vectors span the Laplacian kernel. They are linearly independent, so this displayed span is exactly $\ker L(G)$. [step 1.1, L1] ∎
