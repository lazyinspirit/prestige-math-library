---
id: cor-cayley-formula-from-the-matrix-tree-theorem
kind: corollary
title: "Cayley's formula follows again from the matrix-tree theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-kirchhoff-eigenvalue-product-formula, thm-cayley-formula, thm-spectrum-of-the-complete-graph]
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
    - title: "Richard P. Stanley, MIT 18.314 handout, Example 1.11"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

For every integer $n\ge2$, the complete graph $K_n$ has exactly $n^{n-2}$
spanning trees.

## Facts & Assumptions

**Given:** An integer $n\ge2$.

[L1] The complete graph $K_n$ has adjacency eigenvalues $n-1$ and $-1$ with multiplicity $n-1$ ([[thm-spectrum-of-the-complete-graph]]).

[L2] For a regular graph, the matrix-tree theorem gives the product formula $\tau(G)=\frac1{|V(G)|}\prod_{j=2}^{|V(G)|}(d-\lambda_j)$ ([[cor-kirchhoff-eigenvalue-product-formula]]).

[L3] Cayley's formula already states that $K_n$ has $n^{n-2}$ spanning trees ([[thm-cayley-formula]]).

## Proof

**Proof technique:** direct.

1.1 The graph $K_n$ is $(n-1)$-regular, so [L2] applies with $d=n-1$. By [L1], its nontrivial adjacency eigenvalues are all $-1$, hence $\tau(K_n)=\frac1n\prod_{j=2}^n\bigl((n-1)-(-1)\bigr)=\frac1n\prod_{j=2}^n n=n^{n-2}$. [L1, L2, algebra]

2.1 This matches the earlier Prüfer-code count in [L3], so the matrix-tree theorem gives a second proof of Cayley's formula. [step 1.1, L3] ∎
