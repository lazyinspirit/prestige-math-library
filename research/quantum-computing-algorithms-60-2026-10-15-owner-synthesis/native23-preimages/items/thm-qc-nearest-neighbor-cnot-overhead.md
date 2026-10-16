---
id: thm-qc-nearest-neighbor-cnot-overhead
kind: theorem
title: "Nearest Neighbor CNOT Overhead"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - lem-qc-ninefold-nearest-neighbor-multiplexor-routing
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Shende, Bullock, and Markov, Synthesis of Quantum Logic Circuits, §6"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
proof_strategy: direct
---

## Statement

For the unoptimized recursive QSD circuit in the contiguous interval layout—each multiplexor target is an endpoint, recursive children use the remaining contiguous interval, and terminal two-qubit blocks act on adjacent wires—with both directed orientations of adjacent CNOT allowed, the explicit line routing uses at most nine times the original CNOT count. This is an architecture-specific gate-count bound, not a depth bound or a guarantee for other layouts.

## Facts & Assumptions

**Given:** the unoptimized recursive QSD block decomposition, the contiguous interval layout stated above, and both directed orientations of adjacent CNOT.

[F1] [[lem-qc-ninefold-nearest-neighbor-multiplexor-routing]] proves the factor-nine count for each multiplexed rotation and its sum over the recursive construction, conditional on the actual QC09 circuit interfaces.

## Proof

1.1 Apply the local routing construction in [F1] to every multiplexed rotation in the recursively emitted QSD circuit and leave its terminal adjacent two-qubit blocks unchanged. Since gate count is additive over this explicit sequential list, the total routed count is at most nine times the original count. [F1, given, algebra]

1.2 The construction specifies only CNOT occurrences on an ordered line. It gives no schedule or parallelization argument, so it implies no depth bound; it also says nothing about layouts without the stated line order. [F1, step 1.1, given] ∎
