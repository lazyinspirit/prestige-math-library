---
id: thm-qc-basic-rewrite-correct-and-terminating
kind: theorem
title: "Basic Rewrite Correct And Terminating"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - alg-qc-basic-clifford-t-rewrite
  - def-qc-clifford-t-gate-library
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Barenco et al., Elementary gates for quantum computation"
      url: https://arxiv.org/pdf/quant-ph/9503016
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
proof_strategy: direct
---

## Statement

Each registered rewrite preserves the exact matrix; the procedure terminates and returns a local normal form relative only to the declared finite rewrite set. It is not claimed globally minimal.


## Facts & Assumptions

**Given:** a gate word and the fixed finite rewrite list in the algorithm item.

[F1] [[alg-qc-basic-clifford-t-rewrite]] fixes the finite rewrite list and requires identical ordered supports for adjacent gate cancellations.

[F2] [[def-qc-clifford-t-gate-library]] gives $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $T=\operatorname{diag}(1,e^{i\pi/4})$, $T^\dagger=T^{-1}$, and $\operatorname{CNOT}|a,b\rangle=|a,b\mathbin\oplus a\rangle$ on ordered wires.

## Proof


1.1 By [F2], $H^2=I$ by direct matrix multiplication, $T^8=\operatorname{diag}(1,e^{2\pi i})=I$, and $TT^\dagger=T^\dagger T=I$. On ordered basis input $(a,b)$, two consecutive same-support CNOTs send the target bit to $b\oplus a\oplus a=b$, so $\operatorname{CNOT}^2=I$. Tensoring each identity with the identity on unaffected wires proves that every rule in [F1] preserves the whole circuit matrix. [F1, F2, given, algebra]

2.1 Each rewrite removes at least two gates and inserts none. Thus after at most half the input length many rewrites, the deterministic scan halts. At halt it has found no match, so the output is locally irreducible for the displayed rule list. This proves neither global minimality nor uniqueness of the local normal form. [F1, step 1.1, algebra] ∎

