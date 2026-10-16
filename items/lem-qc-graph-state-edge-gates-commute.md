---
id: lem-qc-graph-state-edge-gates-commute
kind: lemma
title: "Controlled-Z edge gates commute"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, def-qc-controlled-phase-rotation]
justified_by: []
dependency_level: 9
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
    - title: "M. Hein et al., Entanglement in graph states and its applications, arXiv:quant-ph/0602096, §2.1 and Definition Graph States I, pp. 10–14"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, pp. 178–180"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For any two edges $e,f$ of a finite simple graph on an ordered qubit register,
the embedded operators $CZ_e$ and $CZ_f$ commute. Consequently the finite
graph-state edge product is independent of the ordering of its edges.

## Facts & Assumptions

**Given:** A finite ordered vertex set and the diagonal gate
$CZ|x_ux_v\rangle=(-1)^{x_ux_v}|x_ux_v\rangle$ on each edge pair.

[F1] The controlled-phase definition gives the angle-$\pi$ diagonal gate
$CZ|x_ux_v\rangle=(-1)^{x_ux_v}|x_ux_v\rangle$, and the graph-state
definition embeds one such gate per finite edge
([[def-qc-controlled-phase-rotation]], [[def-qc-graph-state]]).

## Proof


1.1 Fix any computational-basis string $x\in\mathbb F_2^V$. By [F1], $CZ_{\{u,v\}}$ multiplies $|x\rangle$ by the scalar $(-1)^{x_ux_v}$ and does not change $x$. [F1, given]

2.1 For edges $e=\{u,v\}$ and $f=\{r,s\}$, the two compositions $CZ_eCZ_f$ and $CZ_fCZ_e$ therefore both multiply each $|x\rangle$ by $(-1)^{x_ux_v+x_rx_s}$. The computational-basis vectors span the finite register, so the operators are equal. This covers disjoint edges and edges sharing one endpoint. [step 1.1, given, algebra]

3.1 Any two orderings of a finite edge set differ by finitely many adjacent transpositions. Each adjacent transposition preserves the product by step 2.1, so all edge orders give the same graph-state vector; the empty edge set is the identity product. [step 2.1, F1, algebra] ∎

