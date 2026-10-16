---
id: thm-qc-bloch-positivity-ball
kind: theorem
title: "The Bloch ball is exactly the qubit density-state space"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-bloch-coordinate-map
  - thm-qc-bloch-coordinate-existence-and-uniqueness
  - thm-qc-pauli-algebra
  - def-qc-pauli-matrices
  - def-qc-density-operator
  - def-non-negative-and-positive-operator
  - thm-non-negative-operator-characterisations
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; the only spectral input is the finite-dimensional Hermitian spectral theorem."
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
      locator: "§1.2.1, PDF pp.2–3, Eq. (1.3)"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For every $\mathbf r\in\mathbb R^3$, $\rho(\mathbf r)$ from [[def-qc-bloch-coordinate-map]] is a qubit density operator if and only if $\|\mathbf r\|_2\le1$. Its eigenvalues, counted with multiplicity, are
$$\lambda_\pm=\frac{1\pm\|\mathbf r\|_2}{2}.$$
The **Bloch ball** is $\{\mathbf r\in\mathbb R^3:\|\mathbf r\|_2\le1\}$; its boundary $\{\|\mathbf r\|_2=1\}$ is the **Bloch sphere**.

## Facts & Assumptions

**Given:** $\mathbf r=(r_x,r_y,r_z)\in\mathbb R^3$, $\rho(\mathbf r)=\tfrac12(I+\mathbf r\cdot\boldsymbol\sigma)$, and the ordered qubit basis.

[F1] [[def-qc-bloch-coordinate-map]]: $\mathbf r\cdot\boldsymbol\sigma=r_xX+r_yY+r_zZ$, $\|\mathbf r\|_2^2=r_x^2+r_y^2+r_z^2$, and $\rho(\mathbf r)=\tfrac12(I+\mathbf r\cdot\boldsymbol\sigma)$.

[F2] [[thm-qc-bloch-coordinate-existence-and-uniqueness]]: every $\rho(\mathbf r)$ is Hermitian with trace one.

[F3] [[thm-qc-pauli-algebra]]: each Pauli matrix is Hermitian, $\operatorname{tr}(\sigma_j)=0$, and $\sigma_j\sigma_k+\sigma_k\sigma_j=2\delta_{jk}I$.

[F4] [[def-qc-pauli-matrices]]: $X,Y,Z$ have the displayed $2\times2$ matrices in the ordered computational basis.

[F5] [[def-qc-density-operator]]: a density operator is a non-negative endomorphism with trace one.

[F6] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form on every vector.

[F7] [[thm-non-negative-operator-characterisations]]: a self-adjoint operator is non-negative exactly when every eigenvalue is a nonnegative real number.

## Proof

1.1 Put $t=\|\mathbf r\|_2$ and $\Sigma=\mathbf r\cdot\boldsymbol\sigma$. By [F3], $\Sigma^*=\Sigma$ and $\Sigma^2=\sum_jr_j^2\sigma_j^2+\sum_{j<k}r_jr_k(\sigma_j\sigma_k+\sigma_k\sigma_j)=t^2I$. Using the displayed matrices in [F4], $\Sigma=\begin{pmatrix}r_z&r_x-ir_y\\r_x+ir_y&-r_z\end{pmatrix}$, so $\operatorname{tr}(\Sigma)=0$ and $\det(\Sigma)=-t^2$. Thus its characteristic polynomial is $\lambda^2-t^2$. If $t>0$, its two eigenvalues are $t$ and $-t$; if $t=0$, $\Sigma=0$. Therefore $\rho(\mathbf r)=\tfrac12(I+\Sigma)$ has eigenvalues $(1+t)/2$ and $(1-t)/2$, both $1/2$ at the zero vector. [given, F1, F3, F4, algebra]

2.1 Since [F2] gives trace one, [F5]–[F7] show that $\rho(\mathbf r)$ is a density operator exactly when both eigenvalues are nonnegative. The eigenvalue $(1+t)/2$ is always positive; $(1-t)/2\ge0$ exactly when $t\le1$. At $t=1$ the zero eigenvalue is allowed by non-negativity; at $t=0$ both eigenvalues are $1/2$. Hence the condition is precisely $\|\mathbf r\|_2\le1$. [F2, F5, F6, F7, step 1.1, algebra] ∎

