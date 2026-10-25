---
id: ex-non-negative-square-root-as-a-polynomial-in-a-matrix
kind: example
title: "The non-negative square root of an explicit matrix is exhibited as a polynomial in the matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-non-negative-square-root-is-a-polynomial-in-the-operator, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For

$$A=\begin{pmatrix}\frac52&\frac32\\[2pt]\frac32&\frac52\end{pmatrix},$$

the non-negative square root is

$$R=\begin{pmatrix}\frac32&\frac12\\[2pt]\frac12&\frac32\end{pmatrix}=\frac13A+\frac23I.$$

## Facts & Assumptions

**Given:** The real symmetric matrix $A$ above.

[L1] A self-adjoint real operator has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L2] The non-negative square root of a non-negative operator is a polynomial in the operator ([[prop-non-negative-square-root-is-a-polynomial-in-the-operator]]).

## Verification

**Proof technique:** direct.

1.1 One has $A(1,1)^{\mathsf T}=4(1,1)^{\mathsf T}$ and $A(1,-1)^{\mathsf T}=(1,-1)^{\mathsf T}$, so after normalising these vectors, [L1] gives an orthonormal eigenbasis with eigenvalues $4$ and $1$. Therefore $A$ is non-negative. [L1, algebra]

2.1 In the same eigenbasis, the non-negative square root has eigenvalues $2$ and $1$, which corresponds in the standard basis to $R=\begin{pmatrix}3/2&1/2\\1/2&3/2\end{pmatrix}$. Direct multiplication gives $R^2=A$, and direct algebra gives $R=\frac13A+\frac23I$, exactly as [L2] predicts. [L2, step 1.1, algebra] ∎
