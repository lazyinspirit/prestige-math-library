---
id: ex-qc-two-level-unitary-synthesis
kind: example
title: A Two-Level Rotation on Two Qubits
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - thm-qc-one-qubit-euler-decomposition
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-two-level-unitary
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Example

Use the ordered computational basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$. Select $x=00$, $y=01$, and
$$V=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$
This is the QC7 rotation $R_y(\pi/2)$, with its exact sign convention recorded in [[def-qc-one-qubit-gate-alphabet-and-rotations]].

## Facts & Assumptions

**Given:** The ordered basis above and the two-level definition.

[F1] [[def-qc-two-level-unitary]]: the matrix $V$ acts on the ordered pair $(|00\rangle,|01\rangle)$ and the operator is identity on the orthogonal complement.

[F2] [[thm-qc-one-qubit-euler-decomposition]]: $R_y(t)=\left(\begin{smallmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{smallmatrix}\right)$.

## Verification



1.1 Substituting $t=\pi/2$ into [F2] gives the displayed $V$. Its columns each have squared norm $(1+1)/2=1$ and inner product $(-1+1)/2=0$. Hence $V^*V=I_2$, so the selected block is unitary. [given, F2, algebra]

2.1 Inserting this block at basis positions $|00\rangle,|01\rangle$ and fixing $|10\rangle,|11\rangle$ gives $T_{00,01}(V)=\begin{pmatrix}1/\sqrt2&-1/\sqrt2&0&0\\1/\sqrt2&1/\sqrt2&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}.$ Its exact entries show the identity action on the orthogonal complement and retain no hidden phase quotient. The matrix is exact, not merely equal up to scalar phase. [F1, step 1.1, algebra] ∎
