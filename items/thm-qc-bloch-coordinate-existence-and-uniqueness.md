---
id: thm-qc-bloch-coordinate-existence-and-uniqueness
kind: theorem
title: "Existence and uniqueness of Bloch coordinates"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-bloch-coordinate-map
  - thm-qc-pauli-algebra
  - def-qc-pauli-matrices
  - def-qc-qubit-and-bloch-representation
  - thm-qc-computational-basis-orthonormal
  - def-qc-density-operator
  - def-non-negative-and-positive-operator
  - def-self-adjoint-and-normal-endomorphism
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by: []
dependency_level: 5
proof_strategy: direct
axiom_use: "None; only explicit two-dimensional coordinates are used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.3.2, PDF pp.21–22"
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

For every $\mathbf r\in\mathbb R^3$, the matrix $\rho(\mathbf r)$ of [[def-qc-bloch-coordinate-map]] is Hermitian with trace one. Conversely, every Hermitian trace-one matrix $\rho\in M_2(\mathbb C)$ has a unique vector $\mathbf r\in\mathbb R^3$ such that
$$\rho=\rho(\mathbf r)=\frac12\bigl(I+r_xX+r_yY+r_zZ\bigr).$$
For a qubit density operator this vector is exactly $(\operatorname{tr}(\rho X),\operatorname{tr}(\rho Y),\operatorname{tr}(\rho Z))$, the coordinate map of [[def-qc-bloch-coordinate-map]]. In particular all three trace coordinates of every density operator are real.

## Facts & Assumptions

**Given:** The ordered basis $(|0\rangle,|1\rangle)$ of $Q_2$, a vector $\mathbf r\in\mathbb R^3$, a Hermitian trace-one matrix $\rho$, and the definitions in [[def-qc-bloch-coordinate-map]].

[F1] [[def-qc-qubit-and-bloch-representation]]: $Q_2=\mathbb C^2$ with ordered computational basis $(e_0,e_1)$.

[F2] [[thm-qc-computational-basis-orthonormal]]: the computational basis $(e_0,e_1)$ is orthonormal.

[F3] [[def-self-adjoint-and-normal-endomorphism]]: Hermitian means self-adjoint, so $\rho^*=\rho$.

[F4] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in an orthonormal basis the matrix of the adjoint is the conjugate transpose.

[F5] [[def-qc-density-operator]] and [[def-non-negative-and-positive-operator]]: a density operator has trace one and is non-negative; non-negative means self-adjoint with nonnegative quadratic form.

[F6] [[def-qc-pauli-matrices]]: $X,Y,Z$ have the displayed $2\times2$ matrices in the ordered computational basis.

[F7] [[thm-qc-pauli-algebra]]: $\operatorname{tr}(\sigma_j\sigma_k)=2\delta_{jk}$ and $\operatorname{tr}(\sigma_j)=0$.

[F8] [[def-qc-bloch-coordinate-map]]: $r_j(\rho)=\operatorname{tr}(\rho\sigma_j)$ and $\rho(\mathbf r)=\tfrac12(I+\sum_jr_j\sigma_j)$.

[F9] [[def-trace-of-a-square-matrix]]: trace is the sum of the diagonal entries.

## Proof

1.1 For arbitrary real $\mathbf r$, the matrices in [F6] give $\rho(\mathbf r)=\frac12\begin{pmatrix}1+r_z&r_x-ir_y\\r_x+ir_y&1-r_z\end{pmatrix}$. Its diagonal entries are real, its lower-left entry is the conjugate of the upper-right, and its trace is $1$, so it is Hermitian trace one. [given, F1, F6, F8, F9, algebra]

1.2 Write the arbitrary Hermitian trace-one matrix $\rho=\begin{pmatrix}a&z\\\overline z&1-a\end{pmatrix}$ with $a\in\mathbb R$: [F2] makes the computational basis orthonormal, and [F3]–[F4] give the conjugate-transpose matrix criterion for $\rho^*=\rho$, so its diagonal entries are real and its lower-left entry is the conjugate of the upper-right; trace one fixes the second diagonal entry. Put $r_x=2\operatorname{Re}z$, $r_y=-2\operatorname{Im}z$, and $r_z=2a-1$, which are real. The matrices in [F6] and formula in [F8] give $\rho(\mathbf r)=\frac12\begin{pmatrix}1+r_z&r_x-ir_y\\r_x+ir_y&1-r_z\end{pmatrix}=\begin{pmatrix}a&z\\\overline z&1-a\end{pmatrix}=\rho$. This proves existence. [given, F1, F2, F3, F4, F6, F8, algebra]

2.1 For the entries $a,z$ of step 1.2, direct multiplication using [F6] and summing diagonal entries by [F9] gives $\operatorname{tr}(\rho X)=z+\overline z=2\operatorname{Re}z=r_x$, $\operatorname{tr}(\rho Y)=i(z-\overline z)=-2\operatorname{Im}z=r_y$, and $\operatorname{tr}(\rho Z)=a-(1-a)=2a-1=r_z$. If $\rho=\rho(\mathbf s)$ for another real vector $\mathbf s$, [F7] applied to [F8] gives $\operatorname{tr}(\rho\sigma_j)=s_j$ for each $j$, so $\mathbf s=\mathbf r$ and uniqueness follows. When $\rho$ is a density operator, [F5] makes it Hermitian and trace one, and [F8] identifies these same real trace coordinates with the map $\mathbf r(\rho)$. [F5, F6, F7, F8, F9, step 1.2, algebra] ∎

