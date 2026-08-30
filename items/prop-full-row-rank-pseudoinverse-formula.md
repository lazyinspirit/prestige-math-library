---
id: prop-full-row-rank-pseudoinverse-formula
kind: proposition
title: "If $A$ has full row rank, then $A^+=A^*(AA^*)^{-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-full-column-rank-pseudoinverse-formula,
       prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let
$A\in M_{m\times n}(\mathbb F)$ have full row rank $m$. Then $AA^*$ is
invertible and

$$A^+=A^*(AA^*)^{-1}.$$

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ of full row rank, where
$\mathbb F\in\{\mathbb R,\mathbb C\}$.

[L1] If a matrix has full column rank, then its pseudoinverse is $(A^*A)^{-1}A^*$ ([[prop-full-column-rank-pseudoinverse-formula]]).

[L2] Pseudoinversion commutes with adjoints: $(A^*)^+=(A^+)^*$ ([[prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant]]).

## Proof

**Proof technique:** direct.

1.1 Because $A$ has full row rank, the adjoint $A^*$ has full column rank. Applying [L1] to $A^*$ gives $$ (A^*)^+=((A^*)^*A^*)^{-1}(A^*)^* =(AA^*)^{-1}A. $$ [L1, algebra]
2.1 Taking adjoints and using [L2], $$ A^+=((A^*)^+)^* =((AA^*)^{-1}A)^* =A^*(AA^*)^{-1}. $$ [L2, step 1.1, algebra]
3.1 In particular $AA^*$ is invertible and the displayed formula holds. [step 2.1] ∎
