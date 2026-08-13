---
id: ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix
kind: example
title: 'The matrix $\begin{pmatrix}2&1\\0&3\end{pmatrix}$ has characteristic polynomial $(x-2)(x-3)$ and two explicitly computed eigenspaces'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-characteristic-polynomial-of-a-matrix]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Example

Over $\mathbb R$, let

$$A=\begin{pmatrix}2&1\\0&3\end{pmatrix}.$$

Then $\chi_A(x)=(x-2)(x-3)$, $E_2(A)=\operatorname{span}\{(1,0)\}$, and $E_3(A)=\operatorname{span}\{(1,1)\}$.

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[L1] The characteristic polynomial is $\det(xI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).

[L2] The eigenspace is $E_\lambda(A)=\ker(A-\lambda I)$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

## Verification

**Proof technique:** direct computation.

1.1 By [L1], $\chi_A(x)=\det\begin{pmatrix}x-2&-1\\0&x-3\end{pmatrix}=(x-2)(x-3)$. [L1, algebra]

1.2 The equation $(A-2I)(u,v)=(v,v)=(0,0)$ gives $v=0$, hence $E_2(A)=\{(u,0):u\in\mathbb R\}=\operatorname{span}\{(1,0)\}$. [L2, algebra]

1.3 The equation $(A-3I)(u,v)=(-u+v,0)=(0,0)$ gives $v=u$, hence $E_3(A)=\operatorname{span}\{(1,1)\}$. [L2, algebra]

2.1 The two nonzero spanning vectors also directly exhibit both roots as eigenvalues. [step 1.1, step 1.2, step 1.3, L2] ∎
