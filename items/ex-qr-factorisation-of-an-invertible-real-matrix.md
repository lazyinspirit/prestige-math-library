---
id: ex-qr-factorisation-of-an-invertible-real-matrix
kind: example
title: "A worked QR factorisation of an invertible real matrix"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-qr-factorisation-over-r-or-c, prop-standard-coordinate-inner-products, thm-gram-schmidt-orthonormalisation]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The invertible matrix

$$A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$$

has the QR factorisation

$$A=QR,\qquad Q=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad R=\begin{pmatrix}\sqrt2&1/\sqrt2\\0&1/\sqrt2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[L1] QR factorisation applies Gram–Schmidt to the columns and requires an upper-triangular factor with positive diagonal ([[thm-qr-factorisation-over-r-or-c]]).

[L2] The standard real inner product is the dot product ([[prop-standard-coordinate-inner-products]]).

[L3] Gram–Schmidt preserves successive spans while normalising orthogonal residuals ([[thm-gram-schmidt-orthonormalisation]]).

## Verification

**Proof technique:** computation.

1.1 The columns are $a_0=(1,1)$ and $a_1=(1,0)$. By [L2]–[L3], $q_0=(1,1)/\sqrt2$, while $a_1-\langle a_1,q_0\rangle q_0=(1/2,-1/2)$ normalises to $q_1=(1,-1)/\sqrt2$. [L2, L3, algebra]

2.1 The coefficients are $R_{00}=\sqrt2$, $R_{01}=1/\sqrt2$, and $R_{11}=1/\sqrt2$, with $R_{10}=0$. Thus $R$ is upper triangular with positive diagonal. [step 1.1, L1]

3.1 Direct multiplication gives $QR=A$, and $Q^{\mathsf T}Q=I$. This verifies the displayed QR factorisation. [step 1.1, step 2.1, algebra] ∎
