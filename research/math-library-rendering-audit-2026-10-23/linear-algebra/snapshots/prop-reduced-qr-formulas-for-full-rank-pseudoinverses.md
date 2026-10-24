---
id: prop-reduced-qr-formulas-for-full-rank-pseudoinverses
kind: proposition
title: "Reduced QR gives the full-column and full-row-rank pseudoinverse formulas without forming normal equations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations,
       prop-full-column-rank-pseudoinverse-formula,
       prop-full-row-rank-pseudoinverse-formula]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

1. If $A\in M_{m\times n}(\mathbb F)$ has full column rank and
   $A=\widehat Q\widehat R$ is a reduced QR factorisation, then
   $A^+=\widehat R^{-1}\widehat Q^*$.
2. If $A$ has full row rank and $A^*=\widehat Q\widehat R$ is a reduced QR
   factorisation of $A^*$, then $A^+=\widehat Q\widehat R^{-*}$.

## Facts & Assumptions

**Given:** A compatible reduced QR factorisation.

[L1] A reduced QR factorisation is $A=\widehat Q\widehat R$ with $\widehat Q^*\widehat Q=I$ and $\widehat R$ square upper triangular ([[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]).

[L2] In the full-column-rank case, $A^+=(A^*A)^{-1}A^*$ ([[prop-full-column-rank-pseudoinverse-formula]]).

[L3] In the full-row-rank case, $A^+=A^*(AA^*)^{-1}$ ([[prop-full-row-rank-pseudoinverse-formula]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A$ has full column rank and $A=\widehat Q\widehat R$. By [L1], $$ A^*A=\widehat R^*\widehat Q^*\widehat Q\widehat R=\widehat R^*\widehat R. $$ Using [L2], $$ A^+=(A^*A)^{-1}A^* =(\widehat R^*\widehat R)^{-1}\widehat R^*\widehat Q^* =\widehat R^{-1}\widehat Q^*. $$ [L1, L2, algebra]

2.1 Suppose now that $A$ has full row rank and $A^*=\widehat Q\widehat R$ is a reduced QR factorisation of $A^*$. Applying step 1.1 to $A^*$ gives $$ (A^*)^+=\widehat R^{-1}\widehat Q^*. $$ Taking adjoints yields $$ A^+=((A^*)^+)^*=\widehat Q\widehat R^{-*}. $$ [L1, L3, step 1.1, algebra]

3.1 These are exactly the reduced-QR pseudoinverse formulas. [step 1.1, step 2.1] ∎