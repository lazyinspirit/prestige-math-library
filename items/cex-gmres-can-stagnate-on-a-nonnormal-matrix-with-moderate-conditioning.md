---
id: cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning
kind: counterexample
title: "A nonnormal matrix can make GMRES stagnate even when ordinary conditioning is not extreme"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement refuted

Moderate ordinary conditioning by itself prevents GMRES stagnation.

The counterexample below shows a nonnormal $2\times2$ matrix with
$\kappa_2(A)=(3+\sqrt5)/2$ for which the first GMRES step does not reduce the
residual at all.

## Facts & Assumptions

**Given:** The matrix $A=\begin{pmatrix}0&2\\1&1\end{pmatrix}$, the right-hand side $b=e_1$, and the initial guess $x_0=0$.

[L1] The diagonalizable GMRES bound keeps the eigenvector-conditioning factor, not just the ordinary conditioning of $A$ ([[prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor]]).

## Counterexample
**Proof technique:** direct.

1.1 The initial residual is $r_0=e_1$, and the one-step GMRES search space is $x=\alpha e_1$. The corresponding residual is $r(\alpha)=e_1-\alpha Ae_1=e_1-\alpha e_2$, so $\|r(\alpha)\|_2^2=1+\alpha^2$, minimized at $\alpha=0$. Thus the first GMRES step leaves the residual norm equal to $1$. [algebra]

2.1 The matrix is invertible with $\det A=-2$, and $A^\mathsf TA=\begin{pmatrix}1&1\\1&5\end{pmatrix}$ has eigenvalues $3\pm\sqrt5$. Hence the singular values are $\sqrt{3+\sqrt5}$ and $\sqrt{3-\sqrt5}$, so $$\kappa_2(A)=\frac{3+\sqrt5}{2}.$$ Therefore exact stagnation can occur even when ordinary conditioning is only moderate. This is consistent with [L1], which warns that nonnormal behavior depends on eigenvector geometry, not eigenvalues or $\kappa_2(A)$ alone. [L1, step 1.1, algebra] ∎
