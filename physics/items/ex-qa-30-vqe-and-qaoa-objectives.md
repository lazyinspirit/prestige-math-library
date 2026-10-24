---
id: ex-qa-30-vqe-and-qaoa-objectives
kind: example
title: "VQE and MaxCut-QAOA objective calculation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - thm-qa-30-vqe-rayleigh-ritz-guarantee
  - def-qa-30-qaoa-circuit-and-objective
  - thm-qa-30-qaoa-expectation-bound
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-projective-measurement-outcome-law
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
    - title: "Edward Farhi, Jeffrey Goldstone, and Sam Gutmann, A Quantum Approximate Optimization Algorithm (arXiv:1411.4028v1)"
      url: "https://arxiv.org/pdf/1411.4028"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Example

For VQE, take $H=Z_1+2Z_2$ and the two-qubit ansatz $|\psi(\theta,\phi)\rangle=R_y(\theta)|0\rangle\otimes R_y(\phi)|0\rangle$, where $R_y(t)|0\rangle=\cos(t/2)|0\rangle+\sin(t/2)|1\rangle$. Its energy is $E(\theta,\phi)=\cos\theta+2\cos\phi$. At $(\theta,\phi)=(\pi/2,0)$ the energy is $2$, while at $(\pi,\pi)$ the ansatz is $|11\rangle$ and reaches the ground energy $-3$.

For QAOA take the one-edge graph $V=\{1,2\}$, $E=\{(1,2)\}$, depth $p=1$, $\gamma=\pi/2$, $\beta=\pi/8$. Starting from $|++\rangle$, the cost phase is $\operatorname{diag}(1,-i,-i,1)$ in the order $00,01,10,11$; the mixer $R_x(2\beta)\otimes R_x(2\beta)$ produces $-i(|01\rangle+|10\rangle)/\sqrt2$. Thus the output distribution gives probability $1/2$ to each cut string $01,10$, zero to $00,11$, and expected cut value $1$.

## Facts & Assumptions

**Given:** The Pauli matrices, the declared QAOA product order, and the finite projective measurement law.

[F1] [[thm-qa-30-vqe-rayleigh-ritz-guarantee]]: a normalized ansatz has energy at least the least eigenvalue.

[F2] [[def-qa-30-qaoa-circuit-and-objective]]: the one-edge cost operator is $(I-Z_1Z_2)/2$ and the depth-one circuit order is $e^{-i\beta(X_1+X_2)}e^{-i\gamma(I-Z_1Z_2)/2}$.

[F3] [[thm-qa-30-qaoa-expectation-bound]]: measured bitstrings are feasible cuts and expected cut lies between feasible extrema.

[F4] [[thm-qc-projective-measurement-outcome-law]]: finite projective measurement probabilities are squared basis amplitudes.

## Verification

**Proof technique:** direct.

1.1 The eigenvalues of $Z_1+2Z_2$ on $|00\rangle,|01\rangle,|10\rangle,|11\rangle$ are $3,-1,1,-3$, so the ground energy is $-3$. The product ansatz has energy $\cos\theta+2\cos\phi$: at $(\pi/2,0)$ this is $2$, and at $(\pi,\pi)$ the state is $|11\rangle$ with energy $-3$. Thus both the displayed trial value and attainment claim are verified. [given, F1, algebra]

2.1 For QAOA, the initial state is $(|00\rangle+|01\rangle+|10\rangle+|11\rangle)/2$. The cost unitary multiplies only $|01\rangle,|10\rangle$ by $e^{-i\pi/2}=-i$. With $R_x(\pi/4)=\begin{pmatrix}\cos(\pi/8)&-i\sin(\pi/8)\\-i\sin(\pi/8)&\cos(\pi/8)\end{pmatrix}$ on each wire, direct multiplication gives zero amplitudes for $00,11$ and amplitude $-i/\sqrt2$ for each of $01,10$. By [F4], the probabilities are $0,1/2,1/2,0$ in the stated order, so the expected cut value is $1$, in agreement with [F2]–[F3]. [given, F2, F3, F4, algebra] ∎
