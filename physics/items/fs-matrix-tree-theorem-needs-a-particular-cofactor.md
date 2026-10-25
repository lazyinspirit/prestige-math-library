---
id: fs-matrix-tree-theorem-needs-a-particular-cofactor
kind: false-statement
title: "FALSE: the matrix-tree theorem works only for one distinguished cofactor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-matrix-tree-theorem]
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
    - title: "Richard P. Stanley, MIT 18.314 handout, Theorem 1.8"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

**False claim.** The matrix-tree theorem computes the spanning-tree count from
only one special cofactor of the Laplacian; deleting a different row and column
can change the answer.

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[L1] Every principal cofactor of the Laplacian equals $\tau(G)$ ([[thm-matrix-tree-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], for every vertex index $i$ the principal cofactor obtained by deleting row $i$ and column $i$ has determinant $\tau(G)$. So the value does not depend on a distinguished choice of index. [L1]

2.1 This is exactly the negation of the false claim, so the claim is refuted. [step 1.1] ∎
