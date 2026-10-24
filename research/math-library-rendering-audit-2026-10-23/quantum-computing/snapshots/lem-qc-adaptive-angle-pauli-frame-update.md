---
id: lem-qc-adaptive-angle-pauli-frame-update
kind: lemma
title: "Adaptive J angle and Pauli-frame update"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [lem-qc-one-bit-teleportation, lem-qc-hadamard-pauli-action, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities]
justified_by: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, p. 179"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, §§II B and II E, pp. 5–13"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let a one-qubit input carry the Pauli frame $X^xZ^z$, where $x,z\in\{0,1\}$,
and let $\beta\in\mathbb R$. Choose the next equatorial measurement angle
$(-1)^x\beta$. For outcome $b\in\{0,1\}$, the one-bit teleportation branch is

$$ 2^{-1/2}\gamma(x,z,\beta)X^{b\oplus z}Z^xJ(\beta),\qquad \gamma(x,z,\beta)=\begin{cases}1,&x=0,\\(-1)^ze^{-i\beta},&x=1.\end{cases} $$

Thus the updated Pauli frame is $(x',z')=(b\oplus z,x)$, and the exact
branch scalar has unit modulus.

## Facts & Assumptions

**Given:** A real angle $\beta$, frame bits $x,z\in\{0,1\}$, and an outcome
$b\in\{0,1\}$.

[F1] The one-bit branch operator is $2^{-1/2}X^bJ(\alpha)$ for measurement angle $\alpha$ ([[lem-qc-one-bit-teleportation]]).

[F2] The exact phase identity is
$J(-\beta)X=e^{-i\beta}ZJ(\beta)$
([[lem-qc-j-basis-and-phase-identities]]).

[F3] The current matrix definitions and Hadamard action give
$J(\beta)Z=XJ(\beta)$ and $ZX=-XZ$
([[def-qc-j-gate-and-equatorial-basis]],
[[def-qc-one-qubit-gate-alphabet-and-rotations]],
[[def-qc-pauli-matrices]], [[lem-qc-hadamard-pauli-action]]).

## Proof


1.1 When $x=0$, the chosen angle is $\beta$. By [F3], $J(\beta)Z^z=X^zJ(\beta)$, so the branch in [F1] is $2^{-1/2}X^bX^zJ(\beta)=2^{-1/2}X^{b\oplus z}Z^0J(\beta)$. This has the asserted phase and frame. [F1, F3, algebra]

1.2 When $x=1$, the chosen angle is $-\beta$. By [F2] and [F3], $J(-\beta)XZ^z=e^{-i\beta}ZJ(\beta)Z^z =(-1)^ze^{-i\beta}X^zZJ(\beta)$. Multiplying by the outcome factor $X^b$ gives $2^{-1/2}(-1)^ze^{-i\beta}X^{b\oplus z}ZJ(\beta)$, as claimed. [F1, F2, F3, algebra]

2.1 The two cases give $x'=b\oplus z$ and $z'=x$, while $|\gamma|=1$ because $\beta$ is real. Thus the angle adaptation changes only the known Pauli frame and a branch-global phase. [step 1.1, step 1.2, algebra] ∎

