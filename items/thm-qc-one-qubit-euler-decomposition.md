---
id: thm-qc-one-qubit-euler-decomposition
kind: theorem
title: One-Qubit Euler Decomposition
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps:
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-polar-form-with-unique-principal-argument
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Use the rotation convention of [[def-qc-one-qubit-gate-alphabet-and-rotations]] and define $R_y(\theta):=R_{(0,1,0)}(\theta)$:
$$R_z(\alpha)=\begin{pmatrix}e^{-i\alpha/2}&0\\0&e^{i\alpha/2}\end{pmatrix},\qquad R_y(\theta)=\begin{pmatrix}\cos(\theta/2)&-\sin(\theta/2)\\\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}.$$
For every $U\in U(2)$ there are real $\delta,\alpha,\theta,\beta$ with
$$U=e^{i\delta}R_z(\alpha)R_y(\theta)R_z(\beta).$$
If $\det U=1$, the scalar factor is unnecessary and $U=R_z(\alpha)R_y(\theta)R_z(\beta)$.

## Facts & Assumptions

**Given:** A unitary matrix $U\in M_2(\mathbb C)$ and the rotation conventions in the Statement.

[F1] [[thm-polar-form-with-unique-principal-argument]]: every nonzero complex number has polar form $r(\cos t+i\sin t)$ with $r>0$.

[F2] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: every point of the real unit circle is $(\cos t,\sin t)$ for some $t\in[0,2\pi)$.

[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]] gives the monotonicity intervals of sine and cosine and their range $[-1,1]$. [[thm-quarter-turn-values-and-shift-formulas]] gives the quarter-turn values and the identities $\sin(t+\pi)=-\sin t$ and $\cos(t+\pi/2)=-\sin t$.

[F4] [[def-determinant-of-a-square-matrix]]: determinant is the Leibniz sum over permutations, and conjugating every entry conjugates that sum.

[F5] [[thm-determinant-of-transpose]]: $\det(A^{\mathsf T})=\det(A)$ for every square matrix over a commutative ring.

[F6] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$ for same-sized square matrices over a commutative ring.

[F7] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $R_{\mathbf n}(t)=\exp(-it\,\mathbf n\cdot\boldsymbol\sigma/2)$ and $R_z=R_{(0,0,1)}$.

[F8] [[def-qc-pauli-matrices]]: $Y=\left(\begin{smallmatrix}0&-i\\i&0\end{smallmatrix}\right)$ and $Z=\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$ in the ordered computational basis.

## Proof




1.1 Direct multiplication of the matrices in [F8] gives $Y^2=Z^2=I_2$. Grouping the even and odd terms of the exponential series in [F7] then gives $R_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2})$ and $R_y(t)=\left(\begin{smallmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{smallmatrix}\right)$. Thus the matrices used in the Statement match the QC7 convention exactly. [F7, F8, algebra]

1.2 The Leibniz formula [F4] gives $\det(\overline U)=\overline{\det U}$; by [F5], $\det(U^*)=\det(\overline U^{\mathsf T})=\overline{\det U}$. Thus [F6] and $U^*U=I$ give $|\det U|^2=\det(U^*U)=1$. [given, F4, F5, F6, algebra]

2.1 By [F1], choose $\delta\in\mathbb R$ with $\det U=e^{2i\delta}$ and put $W=e^{-i\delta}U$. The scalar has modulus one and [F4],[F6] give $\det W=e^{-2i\delta}\det U=1$, so $W$ is unitary with determinant one. [step 1.2, F1, F4, F6, choose, algebra]

3.1 Write the first column of $W$ as $(a,c)^T$. Its norm is one, so $(|a|,|c|)$ is on the unit circle in the closed first quadrant. By [F2], choose $t\in[0,2\pi)$ with $|a|=\cos t$ and $|c|=\sin t$. By [F3], sine is positive on $(0,\pi)$: it increases from $0$ to $1$ on $[0,\pi/2]$ and decreases to $0$ on $[\pi/2,\pi]$. Its $\pi$-shift makes it negative on $(\pi,2\pi)$, so $\sin t\ge0$ forces $t\in[0,\pi]$. Cosine decreases strictly on $[0,\pi]$ and vanishes at $\pi/2$, so $\cos t\ge0$ then forces $t\in[0,\pi/2]$. Set $\theta=2t$. This also covers either zero coordinate. [step 2.1, F2, F3, choose]

4.1 The unit vector orthogonal to $(a,c)^T$ is a unit scalar multiple of $(-\overline c,\overline a)^T$. If its scalar is $s$, the determinant of the matrix with these columns is $s(|a|^2+|c|^2)=s$; since $\det W=1$, the second column is exactly $(-\overline c,\overline a)^T$. Choose phases $\gamma,\eta$ so $a=e^{-i\gamma}\cos t$ and $c=e^{i\eta}\sin t$; when one modulus is zero choose its phase arbitrarily. [step 2.1, step 3.1, F1, choose, algebra]

5.1 Put $\alpha=\gamma+\eta$ and $\beta=\gamma-\eta$. Direct multiplication of the matrices obtained in step 1.1 gives $R_z(\alpha)R_y(\theta)R_z(\beta)=\begin{pmatrix}e^{-i\gamma}\cos t&-e^{-i\eta}\sin t\\e^{i\eta}\sin t&e^{i\gamma}\cos t\end{pmatrix}=W.$ The phase choices in step 4.1 make this exactly the two columns of $W$, including the cases $t=0$ and $t=\pi/2$. [step 4.1, algebra, step 1.1]

6.1 Restoring the scalar from step 2.1 proves the formula for arbitrary $U$. If $\det U=1$, choose $\delta=0$ in step 2.1, so $W=U$, and apply steps 3.1–5.1. [step 2.1, step 3.1, step 5.1, given, algebra] ∎
