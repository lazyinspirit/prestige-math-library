---
id: ex-elementary-factorisation-of-an-invertible-matrix
kind: example
title: 'An invertible $3\times3$ real matrix factored explicitly into elementary matrices'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-invertible-matrices-factor-into-elementary-matrices, cor-a-row-reduction-is-a-product-of-elementary-matrices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.3"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Example

The matrix
$$A=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$$
has the elementary factorisation
$$A=\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[L1] Every invertible real square matrix is a finite product of elementary matrices ([[thm-invertible-matrices-factor-into-elementary-matrices]]).

[L2] A reduction $E_r\cdots E_1A=I$ reverses to an elementary factorisation ([[cor-a-row-reduction-is-a-product-of-elementary-matrices]]).

## Verification

**Proof technique:** direct.

1.1 Subtract row $2$ from row $1$, then subtract the new row $1$ from row $0$; these elementary operations reduce $A$ to $I_3$, so their matrices satisfy $E_2E_1A=I_3$. [L1, L2, algebra]

2.1 Reversing the operations gives the two displayed row-addition matrices. Their direct product is $A$, verifying the factorisation entry by entry. [step 1.1, algebra] ∎
