---
id: ex-k-four-has-sixteen-spanning-trees-by-kirchhoff
kind: example
title: "Kirchhoff's formula gives $\\tau(K_4)=16$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-kirchhoff-eigenvalue-product-formula, thm-spectrum-of-the-complete-graph]
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

## Example

The complete graph $K_4$ has exactly $16$ spanning trees.

## Facts & Assumptions

**Given:** The complete graph $K_4$.

[L1] For a regular graph, $\tau(G)=\frac1{|V(G)|}\prod_{j=2}^{|V(G)|}(d-\lambda_j)$ ([[cor-kirchhoff-eigenvalue-product-formula]]).

[L2] The adjacency eigenvalues of $K_4$ are $3,-1,-1,-1$ ([[thm-spectrum-of-the-complete-graph]]).

## Verification

**Proof technique:** direct.

1.1 The graph $K_4$ is $3$-regular and has four vertices, so [L1] and [L2] give $\tau(K_4)=\frac14(3-(-1))^3=\frac14\cdot4^3=16$. [L1, L2, algebra]

2.1 Therefore Kirchhoff's product formula recovers the count $\tau(K_4)=16$. [step 1.1] ∎
