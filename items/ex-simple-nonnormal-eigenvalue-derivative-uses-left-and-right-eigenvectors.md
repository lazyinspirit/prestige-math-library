---
id: ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors
kind: example
title: "For a nonnormal matrix, the simple eigenvalue derivative uses distinct left and right eigenvectors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Example

Let

$$A=\begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad H=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$

For the simple eigenvalue $\lambda=1$, a right eigenvector is $x=e_1$ and a
left eigenvector is $y=(1,-1)^\mathsf T$, with $y^\ast x=1$. Therefore

$$D\lambda(A)[H]=y^\ast Hx=-1,$$

whereas the Hermitian-style expression $x^\ast Hx$ would give $0$.

## Facts & Assumptions

**Given:** The matrices $A$ and $H$ above.

[L1] For a simple eigenvalue normalized by $y^\ast x=1$, the derivative is
$D\lambda(A)[H]=y^\ast Hx$
([[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]]).

## Verification
**Proof technique:** direct.

1.1 One checks directly that $Ae_1=e_1$, so $x=e_1$ is a right eigenvector for $\lambda=1$. Also $(1,-1)A=(1,-1)$, so $y=(1,-1)^\mathsf T$ is a compatible left eigenvector and $y^\ast x=1$. [algebra]

2.1 Therefore [L1] gives $D\lambda(A)[H]=y^\ast Hx=(1,-1)\begin{pmatrix}0\\1\end{pmatrix}=-1$. But $x^\ast Hx=e_1^\ast He_1=0$, so the nonnormal case genuinely uses distinct left and right eigenvectors. [L1, step 1.1, algebra] ∎