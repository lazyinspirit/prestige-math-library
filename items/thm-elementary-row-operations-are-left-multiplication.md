---
id: thm-elementary-row-operations-are-left-multiplication
kind: theorem
title: "Applying an elementary row operation is left multiplication by its elementary matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-matrix, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

Let $A\in M_{n\times p}(F)$ and let $E\in M_n(F)$ be the elementary matrix of an elementary row operation. Then $EA$ is exactly the matrix obtained by applying that row operation to $A$.

## Facts & Assumptions

**Given:** A field $F$, a matrix $A\in M_{n\times p}(F)$ and an elementary matrix $E\in M_n(F)$.

[L1] An elementary matrix is obtained by applying one elementary row operation to $I_n$ ([[def-elementary-matrix]]).

[L2] Matrix multiplication is given by $(EA)_{ij}=\sum_{k<n}e_{ik}a_{kj}$, and $I_n$ has entries $1$ on the diagonal and $0$ elsewhere ([[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct.

1.1 If $E$ swaps rows $r,s$ of $I_n$, the displayed sum exchanges rows $r,s$ of $A$; if $E$ scales row $r$ of $I_n$ by $c$, it replaces row $r$ of $A$ by $cR_r$; and if $E$ adds $c$ times row $s$ to row $r$ of $I_n$, it replaces row $r$ of $A$ by $R_r+cR_s$, leaving every other row fixed. [L1, L2, algebra]

2.1 These are precisely the three corresponding row operations on $A$, so left multiplication by $E$ performs the operation. The assertion is vacuous when there is no row on which an elementary operation can be defined, and it remains valid when $p=0$. [step 1.1] ∎
