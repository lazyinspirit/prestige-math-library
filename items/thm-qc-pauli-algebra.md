---
id: thm-qc-pauli-algebra
kind: theorem
title: "Pauli matrix algebra and trace identities"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-pauli-matrices
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-trace-of-a-square-matrix
  - thm-finite-dimensional-isometry-characterisations
justified_by: []
dependency_level: 4
proof_strategy: direct
axiom_use: "None; all calculations are finite matrix products."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.2.1, PDF pp.10–11"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: "https://arxiv.org/pdf/1907.09415v6"
      locator: "Appendix A.9, PDF p.198"
    - title: "Aram Harrow, 6.443/8.371/18.436 Quantum Information Science II, Lecture 1: Quantum states and operations (2018)"
      url: "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
      locator: "§1.2.1, PDF pp.2–3"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For the matrices $X,Y,Z$ of [[def-qc-pauli-matrices]], each is self-adjoint and unitary, and $X^2=Y^2=Z^2=I$. Distinct Pauli matrices anticommute. For $j,k\in\{x,y,z\}$,
$$\sigma_j\sigma_k=\delta_{jk}I+i\sum_{\ell\in\{x,y,z\}}\epsilon_{jk\ell}\sigma_\ell,\qquad \operatorname{tr}(\sigma_j\sigma_k)=2\delta_{jk}.$$
Here $\sigma_x=X,\sigma_y=Y,\sigma_z=Z$, $\delta_{jk}=1$ when $j=k$ and $0$ otherwise, and $\epsilon$ is the alternating symbol with $\epsilon_{xyz}=1$. Also $\operatorname{tr}(I)=2$ and $\operatorname{tr}(\sigma_j)=0$.

## Facts & Assumptions

**Given:** The ordered computational basis of $Q_2$ and the four matrices $I,X,Y,Z$ displayed in [[def-qc-pauli-matrices]].

[F1] [[def-qc-pauli-matrices]]: $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F2] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in an orthonormal basis, the adjoint matrix is the conjugate transpose.

[F3] [[def-trace-of-a-square-matrix]]: the trace of a square matrix is the sum of its diagonal entries.

[F4] [[thm-finite-dimensional-isometry-characterisations]]: on a finite-dimensional inner-product space, $T^*T=I$ implies that $T$ is unitary and $TT^*=I$.

[F5] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator on a complex inner-product space is an invertible linear isometry from the space to itself.

## Proof

**Proof technique:** direct.

1.1 Multiplying the entries of the matrices in [F1] gives the nine row-by-column products $X^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I$, $XY=\begin{pmatrix}i&0\\0&-i\end{pmatrix}=iZ$, $XZ=\begin{pmatrix}0&-1\\1&0\end{pmatrix}=-iY$, $YX=\begin{pmatrix}-i&0\\0&i\end{pmatrix}=-iZ$, $Y^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I$, $YZ=\begin{pmatrix}0&i\\i&0\end{pmatrix}=iX$, $ZX=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=iY$, $ZY=\begin{pmatrix}0&-i\\-i&0\end{pmatrix}=-iX$, and $Z^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I$. [F1, algebra]

2.1 By [F1] and [F2], $X^*=X$, $Y^*=Y$, and $Z^*=Z$; the diagonal entries of each product $X^*X,Y^*Y,Z^*Z$ are $1$ and its off-diagonal entries are $0$, so each product is $I$. By [F4] each is a unitary operator, in the sense of [F5]. [F1, F2, F4, F5, step 1.1, algebra]

3.1 The six off-diagonal products in step 1.1 have opposite signs when their order is reversed, so the matrices anticommute pairwise and the table is exactly the $\delta,\epsilon$ product formula in the Statement. The same matrices have $\operatorname{tr}(X)=\operatorname{tr}(Y)=\operatorname{tr}(Z)=0$ and $\operatorname{tr}(I)=2$ by [F3]. Taking traces in step 1.1 gives $\operatorname{tr}(\sigma_j\sigma_k)=2$ when $j=k$ and $0$ otherwise. [F1, F3, step 1.1] ∎

## Remarks

The sign $XY=iZ$ is fixed by the displayed $Y$ matrix; changing the sign of $Y$ would change every orientation formula that follows.

