---
id: def-coordinate-endomorphism-over-a-commutative-ring
kind: definition
title: "For A in M_n(R), the coordinate endomorphism T_A:R^n to R^n, with det(T_A):=det(A) and adj(T_A):=T_adj(A)"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring,
       def-ring-matrix-product-identity-and-transpose,
       def-determinant-of-a-square-matrix,
       def-matrix-minors-cofactors-and-adjugate]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and $n\geq1$. Write
$R^n:=M_{n\times1}(R)$, with entrywise addition and scalar multiplication
([[def-matrices-over-a-commutative-ring]]). For $A\in M_n(R)$, define the
**coordinate endomorphism**

$$T_A:R^n\to R^n,\qquad T_A(x):=Ax,$$

using matrix multiplication
([[def-ring-matrix-product-identity-and-transpose]]). It preserves addition
and scalar multiplication. Define

$$\det(T_A):=\det(A),\qquad \operatorname{adj}(T_A):=T_{\operatorname{adj}(A)},$$

where the right sides use the matrix determinant
([[def-determinant-of-a-square-matrix]]) and the matrix adjugate
([[def-matrix-minors-cofactors-and-adjugate]]). These definitions concern the
specified coordinate self-map; no choice of basis is involved.
