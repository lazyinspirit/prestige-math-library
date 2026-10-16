---
id: ex-qc-zero-plus-bloch-and-hadamard
kind: example
title: "Bloch coordinates of |0> and H|0>"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-qubit-and-bloch-representation
  - def-qc-pure-state-and-ray
  - def-qc-density-operator
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-bloch-coordinate-map
  - thm-qc-bloch-coordinate-existence-and-uniqueness
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-bloch-purity-sphere
  - def-qc-dirac-notation-conversion
  - thm-qc-computational-basis-orthonormal
  - thm-qc-ray-projector-well-defined-and-bijective
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by: []
dependency_level: 8
proof_strategy: direct
axiom_use: "None; both checks are exact two-dimensional matrix calculations."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.3.2, PDF pp.21–22"
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

## Example

Let $\rho_0=|0\rangle\langle0|$. Apply $H$ to obtain $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $\rho_+=|+\rangle\langle+|$. The Bloch vectors are $(0,0,1)$ and $(1,0,0)$, respectively, and both states lie on the Bloch sphere.

## Facts & Assumptions

**Given:** The ordered qubit basis $(|0\rangle,|1\rangle)$ and the matrices $X,Y,Z,H$ of the preceding definitions.

[F1] [[def-qc-qubit-and-bloch-representation]]: $|0\rangle=e_0$ and $|1\rangle=e_1$ are the ordered orthonormal basis vectors of $Q_2$.

[F2] [[def-qc-pure-state-and-ray]]: for a unit representative $u$, the pure-state projector is $|u\rangle\langle u|$.

[F3] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ sends $z$ to $\langle z,v\rangle_{\mathrm{root}}u$; in the standard coordinate basis its matrix is $[u][v]^\dagger$.

[F4] [[def-qc-pauli-matrices]]: $X,Y,Z$ are the displayed $2\times2$ matrices.

[F5] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F6] [[def-qc-bloch-coordinate-map]]: $r_j(\rho)=\operatorname{tr}(\rho\sigma_j)$ and $\rho(\mathbf r)=\tfrac12(I+\sum_jr_j\sigma_j)$.

[F7] [[thm-qc-bloch-coordinate-existence-and-uniqueness]]: every Hermitian trace-one $2\times2$ matrix has a unique Bloch vector.

[F8] [[thm-qc-bloch-purity-sphere]]: a qubit density operator is pure exactly when its Bloch vector has Euclidean norm one.

[F9] [[thm-qc-computational-basis-orthonormal]]: $|0\rangle,|1\rangle$ are orthonormal.

[F10] [[thm-qc-ray-projector-well-defined-and-bijective]]: every unit-vector ray projector is non-negative with trace one, hence is a density operator.

## Verification

1.1 By [F1] and [F9], $|0\rangle=(1,0)^{\mathsf T}$ is a unit vector; [F2]–[F3] give the rank-one projector convention, so direct coordinates give $\rho_0=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. Multiplication by [F4] gives $\operatorname{tr}(\rho_0X)=0$, $\operatorname{tr}(\rho_0Y)=0$, and $\operatorname{tr}(\rho_0Z)=1$, so [F6] gives $\mathbf r(\rho_0)=(0,0,1)$. The matrix satisfies $\rho_0^2=\rho_0$ and $\operatorname{tr}(\rho_0)=1$; by [F2] it is the projector of the pure ray $[|0\rangle]$, and [F10] makes it a density operator. Thus also $\operatorname{tr}(\rho_0^2)=1$. [F1, F2, F3, F4, F6, F9, F10, algebra]

1.2 By [F1] and [F5], $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2=|+\rangle$. From [F9], $\|+\|^2=\tfrac12(\langle0,0\rangle_{\rm root}+\langle0,1\rangle_{\rm root}+\langle1,0\rangle_{\rm root}+\langle1,1\rangle_{\rm root})=1$, so [F2]–[F3] give $\rho_+=|+\rangle\langle+|=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Multiplying by [F4] gives $\operatorname{tr}(\rho_+X)=1$, $\operatorname{tr}(\rho_+Y)=0$, and $\operatorname{tr}(\rho_+Z)=0$, so [F6] gives $\mathbf r(\rho_+)=(1,0,0)$. Direct multiplication gives $\rho_+^2=\rho_+$ and $\operatorname{tr}(\rho_+)=1$; by [F2], $\rho_+$ is a pure-ray projector, so [F10] makes it a density operator and $\operatorname{tr}(\rho_+^2)=1$. [F1, F2, F3, F4, F5, F6, F9, F10, algebra]

2.1 The computed vectors have norms $\|(0,0,1)\|_2=\sqrt{0^2+0^2+1^2}=1$ and $\|(1,0,0)\|_2=\sqrt{1^2+0^2+0^2}=1$. Steps 1.1 and 1.2 prove both matrices are density operators. By [F7] these are the unique Bloch vectors, and [F8] confirms both states are pure and lie on the Bloch sphere. [F7, F8, F10, step 1.1, step 1.2, algebra] ∎

