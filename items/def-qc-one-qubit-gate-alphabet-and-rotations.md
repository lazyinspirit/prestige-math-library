---
id: def-qc-one-qubit-gate-alphabet-and-rotations
kind: definition
title: "Exact one-qubit gates and rotations"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-pauli-matrices
  - def-qc-bloch-coordinate-map
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-finite-dimensional-isometry-characterisations
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - lem-exponential-series-of-a-bounded-operator
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by:
  - thm-qc-axis-rotation-pauli-formula
dependency_level: 5
proof_strategy: direct
axiom_use: "None; finite-dimensional boundedness and convergent power series are choice-free."
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
      locator: "§1.4 and Appendix A.9, PDF pp.9 and 198"
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

## Definition

In the computational basis $(|0\rangle,|1\rangle)$, use $X,Y,Z$ from [[def-qc-pauli-matrices]] and define
$$H:=\frac{X+Z}{\sqrt2}=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad S:=\begin{pmatrix}1&0\\0&i\end{pmatrix},\qquad T:=\begin{pmatrix}1&0\\0&e^{i\pi/4}\end{pmatrix}.$$
The phases displayed in these matrices are exact; they are not identified modulo a scalar when the matrices are later placed under a control.

For real $\theta$ and a real unit vector $\mathbf n=(n_x,n_y,n_z)$, define the axis rotation
$$R_{\mathbf n}(\theta):=\exp\!\left(-\frac{i\theta}{2}\mathbf n\cdot\boldsymbol{\sigma}\right),\qquad R_z(\theta):=R_{(0,0,1)}(\theta).$$
Here $\mathbf n\cdot\boldsymbol{\sigma}$ and $\|\mathbf n\|_2$ have the meanings fixed in [[def-qc-bloch-coordinate-map]]. For a bounded endomorphism $B$ of $Q_2$, the notation $\exp(B)$ means the operator-norm series $\sum_{k=0}^{\infty}B^k/k!$ of [[lem-exponential-series-of-a-bounded-operator]] at scalar parameter $1$. Its convergence applies here because $Q_2$ is finite-dimensional and complete and every linear endomorphism of $Q_2$ is bounded ([[cor-finite-dimensional-normed-spaces-are-banach]], [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]).

The unitary identities for the fixed matrices are verified below. The following theorem proves the closed form and unitarity of each $R_{\mathbf n}(\theta)$.

## Facts & Assumptions

**Given:** The ordered qubit basis, the Pauli matrices, real $\theta$, and real $\mathbf n$ with $\|\mathbf n\|_2=1$.

[F1] [[def-qc-pauli-matrices]]: $X,Y,Z$ are the explicit matrices in the ordered basis $(|0\rangle,|1\rangle)$.

[F2] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: the matrix of an adjoint in an orthonormal basis is the conjugate transpose.

[F3] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator on a complex inner-product space is an invertible linear isometry from the space to itself.

[F4] [[thm-finite-dimensional-isometry-characterisations]]: in finite dimension, $U^*U=I$ implies that $U$ is an invertible isometry and hence unitary.

[F5] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $|\exp(it)|=1$.

[F6] [[cor-finite-dimensional-normed-spaces-are-banach]] and [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]: $Q_2$ is Banach and every endomorphism of $Q_2$ is bounded.

[F7] [[lem-exponential-series-of-a-bounded-operator]]: for a bounded endomorphism $B$ on a Banach space, $\sum_{k=0}^{\infty}B^k/k!$ converges absolutely in operator norm and is the value of its exponential at parameter $1$.

[L1] The Definition above fixes $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $S=\operatorname{diag}(1,i)$, and $T=\operatorname{diag}(1,e^{i\pi/4})$.

## Verification

1.1 By [F1] and [F2], $X^*=X$, $Y^*=Y$, and $Z^*=Z$. Multiplying the displayed matrices gives $X^*X=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}=I$, $Y^*Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}\begin{pmatrix}0&-i\\i&0\end{pmatrix}=I$, and $Z^*Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}=I$. By [F4] each fixed Pauli matrix is unitary in the sense of [F3]. [F1, F2, F3, F4, algebra]

1.2 By [L1] and [F2], the displayed matrix for $H$ is self-adjoint, and direct multiplication gives $H^*H=H^2=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=I$. Thus $H$ is unitary by [F4] and [F3]. [L1, F2, F3, F4, algebra]

1.3 From [L1], $S^*=\operatorname{diag}(1,-i)$, so $S^*S=\operatorname{diag}(1,1)=I$. Also $T^*T=\operatorname{diag}(1,|e^{i\pi/4}|^2)=I$ by [F5]. Hence $S,T$ are unitary by [F4] and [F3]. [L1, F3, F4, F5, algebra]

2.1 For $\mathbf n$ and $\theta$ as in the Given clause, $B=-i\theta(\mathbf n\cdot\boldsymbol{\sigma})/2$ is a linear endomorphism of $Q_2$. By [F6], $Q_2$ is Banach and $B$ is bounded, so [F7] makes the series defining $\exp(B)$ converge absolutely in operator norm. Thus $R_{\mathbf n}(\theta)$ is well-defined as a matrix. [given, F6, F7, construct] ∎

## Remarks

The proof of $R_{\mathbf n}(\theta)$ unitarity is separate from this definition's series-convergence verification and appears in [[thm-qc-axis-rotation-pauli-formula]]. No choice principle or physical spin model is used.

