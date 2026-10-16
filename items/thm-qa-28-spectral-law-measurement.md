---
id: thm-qa-28-spectral-law-measurement
kind: theorem
title: QPE output law and conditional state for a spectral input
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-28-state-spectral-distribution
  - alg-qa-28-phase-spectral-estimation
  - alg-qa-quantum-phase-estimation
  - lem-qa-phase-estimation-outcome-kernel
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-dirac-notation-conversion
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-spectral-resolution-and-polynomial-spectral-projections
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
axiom_use: "None; all decompositions and measurement outcomes are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $V$ be a finite-dimensional complex inner-product space, let $H:V\to V$ be Hermitian with distinct eigenvalues $\lambda$ and spectral projections $P_\lambda$, and let $\psi\in V$ be a unit vector. Run the ideal phase-estimation sampler on $\psi$, with unitary $U$ whose declared phase class on $P_\lambda V$ is $\theta(\lambda)\in\mathbb R/\mathbb Z$. Write $\bar\theta(\lambda)\in[0,1)$ for its unique representative, so $Uv=e^{2\pi i\bar\theta(\lambda)}v$ for $v\in P_\lambda V$. Write $a_y(\lambda)$ for the phase-register amplitude at output $y$ when the input is in that eigenspace, so $|a_y(\lambda)|^2=P_{\bar\theta(\lambda)}(y)$ as in [[lem-qa-phase-estimation-outcome-kernel]]. Then the output law is
$$\Pr(Y=y)=\sum_{\lambda\in\sigma(H)}\mu_\psi(\{\lambda\})P_{\bar\theta(\lambda)}(y).$$
For every outcome with positive probability, the normalized conditional system vector is
$$\psi_y=\frac{\sum_\lambda a_y(\lambda)P_\lambda\psi}{\sqrt{\Pr(Y=y)}}.$$
Moreover, $\mu_\psi$ is a probability distribution and, for every $g:\sigma(H)\to\mathbb C$,
$$\langle\psi|g(H)|\psi\rangle=\sum_\lambda\mu_\psi(\{\lambda\})g(\lambda).$$
The conditional system is generally a coherent sum across eigenspaces, not an exact eigenspace projection.

## Facts & Assumptions

**Given:** A finite-dimensional Hermitian $H$, its spectral resolution, a unit vector $\psi$, the ideal sampler, and its phase encoding on every eigenspace.

[F1] [[thm-spectral-resolution-and-polynomial-spectral-projections]]: $I=\sum_\lambda P_\lambda$, $P_\lambda P_\nu=0$ for distinct eigenvalues, and the projections are self-adjoint.

[F2] [[def-qa-28-state-spectral-distribution]]: $\mu_\psi(\{\lambda\})=\|P_\lambda\psi\|^2$.

[F3] [[alg-qa-28-phase-spectral-estimation]] and [[lem-qa-phase-estimation-outcome-kernel]]: on an eigenvector of phase representative $\bar\theta(\lambda)\in[0,1)$, the phase register has amplitudes $a_y(\lambda)$ with squared magnitudes $P_{\bar\theta(\lambda)}(y)$.

[F4] [[def-qc-projective-measurement]] and [[thm-qc-projective-measurement-outcome-law]] give the computational-basis outcome probability as the squared norm of the projected vector. The readout in [[alg-qa-quantum-phase-estimation]] specifies the Lüders branch $Z\mapsto P_y ZP_y$; on a pure input, its positive-probability branch is therefore the projected vector normalized.

[F5] [[def-functional-calculus-for-a-normal-endomorphism]]: $g(H)=\sum_\lambda g(\lambda)P_\lambda$.

[F6] [[def-qc-dirac-notation-conversion]]: $\langle\psi|P_\lambda|\psi\rangle=\|P_\lambda\psi\|^2$ for an orthogonal projection.

## Proof

1.1 The orthogonality in [F1] gives $\psi=\sum_\lambda P_\lambda\psi$ and $\|\psi\|^2=\sum_\lambda\|P_\lambda\psi\|^2=1$. Thus the weights in [F2] are nonnegative and sum to one. By [F5]–[F6], $\langle\psi|g(H)|\psi\rangle=\sum_\lambda g(\lambda)\langle\psi|P_\lambda|\psi\rangle=\sum_\lambda\mu_\psi(\{\lambda\})g(\lambda)$. [F1, F2, F5, F6, given]

2.1 By linearity, the QPE unitary sends the initial phase state and $\psi$ to $\sum_\lambda\sum_y a_y(\lambda)|y\rangle\otimes P_\lambda\psi$, using [F3] on each eigenspace. Projecting the phase register onto $|y\rangle$ gives the system vector $v_y=\sum_\lambda a_y(\lambda)P_\lambda\psi$. Since the summands for distinct $\lambda$ are orthogonal by [F1], [F4] yields $\Pr(Y=y)=\|v_y\|^2=\sum_\lambda |a_y(\lambda)|^2\|P_\lambda\psi\|^2=\sum_\lambda\mu_\psi(\{\lambda\})P_{\bar\theta(\lambda)}(y)$. Summing these probabilities over the finite output set gives one, as each eigenphase kernel is a measurement law. [F1, F2, F3, F4, step 1.1, algebra]

3.1 When $\Pr(Y=y)>0$, [F4] normalizes the projected branch to $v_y/\|v_y\|$, which is the displayed formula. Its coefficients $a_y(\lambda)$ need not vanish outside one eigenvalue, so no exact eigenspace-collapse claim follows; the formula itself gives the precise conditional state. [F1, F3, F4, step 2.1, algebra] ∎
