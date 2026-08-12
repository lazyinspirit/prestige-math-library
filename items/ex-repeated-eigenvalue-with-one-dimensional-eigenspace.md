---
id: ex-repeated-eigenvalue-with-one-dimensional-eigenspace
kind: example
title: '$\begin{pmatrix}2&1\\0&2\end{pmatrix}$ has algebraic multiplicity two but geometric multiplicity one at $2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.2'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Example

For

$$A=\begin{pmatrix}2&1\\0&2\end{pmatrix}\in M_2(\mathbb R),$$

the eigenvalue $2$ has algebraic multiplicity $2$ and geometric multiplicity $1$.

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[L1] Algebraic multiplicity is the exponent of $x-\lambda$ in the characteristic polynomial, and geometric multiplicity is $\dim\ker(A-\lambda I)$ ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

## Verification

**Proof technique:** direct computation.

1.1 One has $\chi_A(x)=\det\begin{pmatrix}x-2&-1\\0&x-2\end{pmatrix}=(x-2)^2$, so [L1] gives algebraic multiplicity $2$. [L1, algebra]

1.2 Since $(A-2I)(u,v)=(v,0)$, its kernel is $\{(u,0):u\in\mathbb R\}$, a one-dimensional space. [L1, algebra]

2.1 Thus the geometric multiplicity is $1<2$, so the general multiplicity inequality can be strict. [step 1.1, step 1.2, L1] ∎
