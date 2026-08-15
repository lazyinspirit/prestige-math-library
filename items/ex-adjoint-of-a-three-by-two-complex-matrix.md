---
id: ex-adjoint-of-a-three-by-two-complex-matrix
kind: example
title: "The adjoint of an explicit map $\\mathbb C^2\\to\\mathbb C^3$ is its conjugate-transpose matrix"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-matrix-of-the-adjoint-is-the-conjugate-transpose, prop-standard-coordinate-inner-products]
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

For the map $T:\mathbb C^2\to\mathbb C^3$ with standard matrix

$$A=\begin{pmatrix}1&i\\2-i&0\\-i&3\end{pmatrix},$$

the adjoint $T^*:\mathbb C^3\to\mathbb C^2$ has matrix

$$A^*=\begin{pmatrix}1&2+i&i\\-i&0&3\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed complex matrix $A$ in standard orthonormal bases.

[L1] In orthonormal bases, the matrix of the adjoint is the conjugate transpose ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

[L2] The standard complex coordinate pairing is $\langle x,y\rangle=\sum_kx_k\overline{y_k}$ ([[prop-standard-coordinate-inner-products]]).

## Verification

**Proof technique:** computation.

1.1 Transpose $A$ and conjugate each entry. This gives the displayed $2\times3$ matrix $A^*$, exactly as [L1] prescribes. [L1, algebra]

2.1 For generic $x\in\mathbb C^2$ and $y\in\mathbb C^3$, expansion with [L2] gives $\langle Ax,y\rangle=x^{\mathsf T}A^{\mathsf T}\overline y=\langle x,A^*y\rangle$. Thus the displayed matrix also verifies the adjoint identity directly. [step 1.1, L2, algebra] ∎
