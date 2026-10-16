---
id: def-qc-j-gate-and-equatorial-basis
kind: definition
title: "J gate and ordered equatorial measurement vectors"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-dirac-notation-conversion]
justified_by: []
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf and Hans J. Briegel, Quantum computing via measurements only, arXiv:quant-ph/0010033"
      url: https://arxiv.org/pdf/quant-ph/0010033
---

## Definition

For $\alpha\in\mathbb R$, let
$P_\alpha=\operatorname{diag}(1,e^{i\alpha})$ and
$J(\alpha)=H P_\alpha$, with $H$ and the exact one-qubit gate convention
from [[def-qc-one-qubit-gate-alphabet-and-rotations]]. Define the ordered
measurement vectors

$$ |b\rangle_\alpha:=J(\alpha)^\dagger|b\rangle,\qquad b\in\{0,1\}, $$

where $|0\rangle,|1\rangle$ are the ordered computational basis vectors.
The adjoint and complex inner product use the root convention translated by
[[def-qc-dirac-notation-conversion]]. The global phase in $J(\alpha)$
is fixed by the displayed matrix product; it is not suppressed.
