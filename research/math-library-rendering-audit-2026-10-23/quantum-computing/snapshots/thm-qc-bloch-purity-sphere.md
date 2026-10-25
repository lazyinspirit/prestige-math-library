---
id: thm-qc-bloch-purity-sphere
kind: theorem
title: "Purity is the boundary of the Bloch ball"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-bloch-coordinate-map
  - thm-qc-bloch-coordinate-existence-and-uniqueness
  - thm-qc-pauli-algebra
  - def-qc-density-operator
  - def-qc-pure-state-and-ray
  - thm-qc-ray-projector-well-defined-and-bijective
  - thm-qc-bloch-positivity-ball
  - thm-non-negative-operator-characterisations
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by: []
dependency_level: 7
proof_strategy: direct
axiom_use: "None; the spectral statement is finite-dimensional and choice-free."
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

If $\rho$ is a qubit density operator and $\mathbf r$ is its unique Bloch vector, then
$$\operatorname{tr}(\rho^2)=\frac{1+\|\mathbf r\|_2^2}{2}.$$
The state $\rho$ is pure, meaning it is the projector of a pure-state ray, if and only if $\|\mathbf r\|_2=1$.

## Facts & Assumptions

**Given:** A density operator $\rho$ on $Q_2$ and its Bloch vector $\mathbf r\in\mathbb R^3$.

[F1] [[def-qc-density-operator]]: $\rho$ is non-negative and has trace one.

[F2] [[thm-non-negative-operator-characterisations]]: a non-negative operator has an orthonormal eigenbasis with nonnegative real eigenvalues.

[F3] [[def-qc-bloch-coordinate-map]] and [[thm-qc-bloch-coordinate-existence-and-uniqueness]]: $\rho=\tfrac12(I+\mathbf r\cdot\boldsymbol\sigma)$ and $r_j=\operatorname{tr}(\rho\sigma_j)$.

[F4] [[thm-qc-pauli-algebra]]: $\sigma_j\sigma_k+\sigma_k\sigma_j=2\delta_{jk}I$, $\operatorname{tr}(I)=2$, $\operatorname{tr}(\sigma_j)=0$, and $\operatorname{tr}(\sigma_j\sigma_k)=2\delta_{jk}$.

[F5] [[thm-qc-bloch-positivity-ball]]: the eigenvalues of $\rho(\mathbf r)$ are $(1\pm\|\mathbf r\|_2)/2$ and are nonnegative.

[F6] [[thm-qc-ray-projector-well-defined-and-bijective]]: pure-state rays correspond bijectively to rank-one orthogonal projections, and every ray projector is non-negative with trace one.

[F7] [[def-qc-pure-state-and-ray]]: a pure state is a ray represented by its unit vector's rank-one projector.

## Proof

1.1 Let $\Sigma=\mathbf r\cdot\boldsymbol\sigma$. From [F3] and [F4], $\operatorname{tr}(\rho^2)=\tfrac14\operatorname{tr}(I+2\Sigma+\Sigma^2)=\tfrac14(2+2\|\mathbf r\|_2^2)=\tfrac12(1+\|\mathbf r\|_2^2)$, because $\Sigma^2=\|\mathbf r\|_2^2I$ by the Pauli anticommutation relation in [F4]. [F3, F4, algebra]

2.1 Let $\lambda_+,\lambda_-$ be the eigenvalues from [F5]. They are nonnegative and sum to one by [F1]. Then $\operatorname{tr}(\rho^2)=\lambda_+^2+\lambda_-^2=1$ exactly when $2\lambda_+\lambda_-=0$, equivalently the eigenvalue pair is $(1,0)$. By [F2], $\rho$ has an orthonormal eigenbasis; in this case it is the orthogonal projection onto its one-dimensional $1$-eigenspace, so surjectivity in [F6] makes it the projector of a pure-state ray. Conversely, if $\rho$ is pure, [F7] gives a unit representative $u$ with $\rho=P_u$, and [F6] makes $P_u$ an orthogonal projection, so $\rho^2=\rho$. By [F1], $\operatorname{tr}(\rho)=1$, hence $\operatorname{tr}(\rho^2)=1$. Thus purity is equivalent to $\operatorname{tr}(\rho^2)=1$; step 1.1 makes this equivalent to $\|\mathbf r\|_2=1$. [F1, F2, F5, F6, F7, step 1.1, algebra] ∎

