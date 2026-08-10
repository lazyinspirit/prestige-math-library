---
id: thm-invertible-matrices-factor-into-elementary-matrices
kind: theorem
title: "Every invertible finite square real matrix is a finite product of elementary matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invertible-matrix-theorem, cor-a-row-reduction-is-a-product-of-elementary-matrices, cor-elementary-matrices-are-invertible, thm-reals-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.3"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Every invertible matrix $A\in M_n(\mathbb R)$ is a finite product of elementary matrices. The identity matrix is represented by the empty product.

## Facts & Assumptions

**Given:** An invertible real matrix $A\in M_n(\mathbb R)$.

[L1] An invertible matrix has RREF $I_n$ ([[thm-invertible-matrix-theorem]]).

[L2] A row reduction is left multiplication by a product of its elementary matrices ([[cor-a-row-reduction-is-a-product-of-elementary-matrices]]).

[L3] The inverse of an elementary matrix is elementary ([[cor-elementary-matrices-are-invertible]]).

[L4] The real numbers form a field ([[thm-reals-field]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] row reduction takes $A$ to $I_n$; by [L2] there are elementary real matrices with $E_r\cdots E_1A=I_n$. [L1, L2, L4, construct]

2.1 Multiply by the explicit inverses in reverse order to obtain $A=E_1^{-1}\cdots E_r^{-1}$, and each factor is elementary by [L3]. [step 1.1, L3, algebra]

3.1 If $A=I_n$, take $r=0$ and the empty product. No determinant is used. [step 2.1, discharge-construct] ∎

