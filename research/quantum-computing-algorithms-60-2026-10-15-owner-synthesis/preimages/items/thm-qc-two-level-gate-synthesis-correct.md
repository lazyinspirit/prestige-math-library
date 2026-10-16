---
id: thm-qc-two-level-gate-synthesis-correct
kind: theorem
title: Correctness of Gray-Path Two-Level Synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qc-two-level-gate-to-elementary-gates
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

The algorithm of [[alg-qc-two-level-gate-to-elementary-gates]] realizes the exact two-level unitary on the selected pair and fixes every other computational-basis vector. It uses exactly $2(d-1)$ controlled-$X$ calls and one controlled-$V$ call before expanding those calls into the selected elementary construction.

## Facts & Assumptions

**Given:** The input and path from [[alg-qc-two-level-gate-to-elementary-gates]].

[F1] [[alg-qc-two-level-gate-to-elementary-gates]]: the path swaps send $x$ to $g_{d-1}$ while fixing $y$, the middle controlled block acts on $(g_{d-1},y)$, and the inverse swaps are applied afterward.

## Proof


1.1 By [F1], the first part of the circuit is a permutation $P$ of basis vectors with $P|x\rangle=|g_{d-1}\rangle$ and $P|y\rangle=|y\rangle$. The middle operation acts as $V$ on precisely the ordered pair $(|g_{d-1}\rangle,|y\rangle)$ and as identity elsewhere. [given, F1]

2.1 Conjugating that middle block by $P$ maps its active pair back to $(|x\rangle,|y\rangle)$, and maps every other basis vector to a vector outside the active pair, on which the middle block is identity. Hence the product is exactly the operator in [F1]. Counting the forward and reverse lists gives $2(d-1)$ swaps and one target block. [step 1.1, F1, algebra] ∎
