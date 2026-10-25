---
id: lem-qc-j-basis-and-phase-identities
kind: lemma
title: "J-gate basis and exact phase identities"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-j-gate-and-equatorial-basis, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, def-qc-dirac-notation-conversion]
justified_by: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, §§II B and II E"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

For every $\alpha,\beta\in\mathbb R$, $J(\alpha)$ is unitary and
$\{|0\rangle_\alpha,|1\rangle_\alpha\}$ is an orthonormal basis. The exact
identities

$$ J(0)=H,\qquad J(0)^2=I,\qquad J(-\beta)X=e^{-i\beta}ZJ(\beta),\qquad J(\pi/2)^3=e^{i\pi/4}I $$

hold in the fixed phase convention.

## Facts & Assumptions

**Given:** $P_\alpha=\operatorname{diag}(1,e^{i\alpha})$,
$J(\alpha)=HP_\alpha$, and $|b\rangle_\alpha=J(\alpha)^\dagger|b\rangle$.

[F1] The current QC07 draft defines
$H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the ordered computational
basis ([[def-qc-one-qubit-gate-alphabet-and-rotations]]). Its complete
definition and verification were inspected.

[F2] The J-gate definition fixes
$P_\alpha=\operatorname{diag}(1,e^{i\alpha})$,
$J(\alpha)=HP_\alpha$, and $|b\rangle_\alpha=J(\alpha)^\dagger|b\rangle$
([[def-qc-j-gate-and-equatorial-basis]]).

## Proof


1.1 Since $|e^{i\alpha}|=1$, $P_\alpha^\dagger P_\alpha=I$. Direct multiplication from [F1] gives $H^\dagger=H$ and $H^2=I$, so [F2] gives $J(\alpha)^\dagger J(\alpha)=P_\alpha^\dagger H^\dagger H P_\alpha=I$. Hence $J(\alpha)^\dagger$ maps the orthonormal computational basis to an orthonormal basis. [given, F1, F2, algebra]

1.2 Substituting $\alpha=0$ in [F2] gives $J(0)=H$, and therefore $J(0)^2=H^2=I$. Matrix multiplication using [F1] and [F2] gives $J(-\beta)X=\frac1{\sqrt2}\begin{pmatrix}e^{-i\beta}&1\\-e^{-i\beta}&1\end{pmatrix}$ and $e^{-i\beta}ZJ(\beta)=\frac1{\sqrt2}\begin{pmatrix}e^{-i\beta}&1\\-e^{-i\beta}&1\end{pmatrix}$, proving the exact phase identity. [F1, F2, algebra]

2.1 From [F1] and [F2], $J(\pi/2)=\frac1{\sqrt2}\begin{pmatrix}1&i\\1&-i\end{pmatrix}$. Multiplying this matrix three times gives $J(\pi/2)^3=\frac{1+i}{\sqrt2}I=e^{i\pi/4}I$. This phase will be retained in the transport normalization. [F1, F2, algebra] ∎

