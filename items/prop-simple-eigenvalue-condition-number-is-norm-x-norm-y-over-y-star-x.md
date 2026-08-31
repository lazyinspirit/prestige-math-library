---
id: prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x
kind: proposition
title: "The normwise condition number of a simple eigenvalue is $\\|x\\|_2\\|y\\|_2/|y^*x|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-condition-number-of-a-simple-eigenvalue,
       thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]
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
    - title: "G. W. Stewart and Ji-guang Sun, Matrix Perturbation Theory"
      url: "https://djvu.online/file/j5uuUqxIKij6w"
---

## Statement

Let $\lambda$ be a simple eigenvalue of $A$, and let $x,y$ be compatible
nonzero right and left eigenvectors. Then

$$\kappa(\lambda;A)=\frac{\|x\|_2\|y\|_2}{|y^\ast x|}.$$

In particular, for the normalization $y^\ast x=1$ one has
$\kappa(\lambda;A)=\|x\|_2\|y\|_2$.

## Facts & Assumptions

**Given:** A simple eigenvalue $\lambda$ of $A$ and compatible nonzero vectors
$x,y$.

[F1] The condition number is
$\kappa(\lambda;A)=\sup_{\|H\|_2=1}|D\lambda(A)[H]|$
([[def-condition-number-of-a-simple-eigenvalue]]).

[L1] For any differentiable branch normalized by $y^\ast x=1$,
$D\lambda(A)[H]=y^\ast Hx$
([[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]]).

## Proof
**Proof technique:** direct.

1.1 Normalize first so that $y^\ast x=1$. Then [L1] gives $|D\lambda(A)[H]|=|y^\ast Hx|\le \|y\|_2\|H\|_2\|x\|_2$ by Cauchy-Schwarz. Taking the supremum over $\|H\|_2=1$ in [F1] yields $\kappa(\lambda;A)\le \|x\|_2\|y\|_2$. [F1, L1, algebra]

2.1 Let $u=y/\|y\|_2$ and $v=x/\|x\|_2$, and define $H=uv^\ast$. Then $\|H\|_2=1$ and $y^\ast Hx=\|y\|_2\|x\|_2$. Hence [F1] and [L1] give the reverse inequality, so $\kappa(\lambda;A)=\|x\|_2\|y\|_2$ under the normalization $y^\ast x=1$. Undoing the normalization inserts the factor $|y^\ast x|^{-1}$ and gives the general formula. [F1, L1, step 1.1, construct, algebra] ∎