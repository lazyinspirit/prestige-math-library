---
id: thm-qa-25-small-time-aware-simulator-correctness
kind: theorem
title: Correctness of the small-time-aware simulator
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-25-small-time-aware-simulator
  - thm-qa-25-qubitized-simulation-correctness
  - def-qa-25-qubitization-access-model
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-qa-25-isometry-error-implies-trace-distance
proof_strategy: direct
axiom_use: "None; the small-time branch follows from finite matrix evolution and the triangle inequality."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Theorem 58 and Lemma 59"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

For every promised input of [[alg-qa-25-small-time-aware-simulator]], a successful output satisfies the clean-input isometry error bound $\|V_{\rm impl}J_{\rm clean}-J_{\rm out}e^{-itH}\|_{\rm op}\le\epsilon$. It also satisfies the corresponding reference-system trace-distance bound after tracing the work registers.

## Facts & Assumptions

**Given:** The exact normalized block encoding, a rational $t$, and $0<\epsilon<1$.

[F1] [[alg-qa-25-small-time-aware-simulator]]: the small branch returns identity when $\alpha|t|\le\epsilon$; otherwise it invokes OP4.

[F2] [[thm-qa-25-qubitized-simulation-correctness]]: on a successful OP4 output, the clean-input isometry error is at most $\epsilon$, and the traced output has the same trace-distance bound.

[F3] [[def-qa-19-finite-matrix-dynamics]]: $U_H(t)=e^{-itH}$ is defined by the finite spectral functional calculus.

[F4] [[thm-qa-19-matrix-exponential-unitary-properties]]: $U_H'(s)=-iHU_H(s)$ and $U_H(s)$ is unitary.

[F5] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_{\rm op}\le\|S\|_{\rm op}\|T\|_{\rm op}$.

[F6] [[lem-qa-25-isometry-error-implies-trace-distance]]: clean-input isometry error $\delta$ bounds the reference-system trace distance after tracing work by $\delta$.

[F7] [[def-qa-25-qubitization-access-model]]: the block-encoding normalization satisfies $\|H\|_{\rm op}\le\alpha$.

## Proof

**Given:** As in Facts & Assumptions.

1.1 If $\alpha|t|>\epsilon$, the algorithm invokes OP4, and [F2] gives the clean-input isometry bound. [F1, F2, cases]

1.2 Suppose $\alpha|t|\le\epsilon$. For a unit vector $\psi$, the differential identity [F4] and the fundamental theorem of calculus give $U_H(t)\psi-\psi=\int_0^t -iHU_H(s)\psi\,ds$. Each integrand has norm at most $\|H\|_{\rm op}$, because $U_H(s)$ preserves norm. The triangle inequality for Riemann sums and continuity yield $\|(U_H(t)-I)\psi\|\le |t|\|H\|_{\rm op}\le\alpha|t|\le\epsilon$, using [F7]. Taking the maximum over unit $\psi$ proves the clean-input operator bound for the identity circuit. The work registers are exactly zero, so the same isometry bound holds. [F3, F4, F5, F7, given, algebra]

2.1 In either branch, the implementation on clean inputs and the target $J_{\rm out}e^{-itH}$ are isometries whose operator-norm difference is at most $\epsilon$, by steps 1.1 and 1.2. Apply [F6] with $\delta=\epsilon$ to obtain the reference-system trace-distance conclusion after tracing work. [F1, F2, F6, F7, step 1.1, step 1.2, algebra] ∎
