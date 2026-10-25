---
id: ex-qc-one-edge-graph-state
kind: example
title: "One-edge graph state and two-wire CZ pattern"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, lem-qc-graph-state-amplitude-formula, lem-qc-graph-state-stabilizer-generators, lem-qc-measurement-pattern-for-cz]
justified_by: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II B–G"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Example

For the graph with vertices $1,2$ and one edge $\{1,2\}$,

$$|G\rangle=CZ|++\rangle=\tfrac12(|00\rangle+|01\rangle+|10\rangle-|11\rangle).$$

Its two graph-state generators are $K_1=X\otimes Z$ and
$K_2=Z\otimes X$. Separately, the four-vertex pattern with inputs $1,2$,
outputs $3,4$, and edges $\{1,2\},\{1,3\},\{2,4\}$ has branch
$\tfrac12(X^{b_1}H\otimes X^{b_2}H)CZ$ and terminal correction
$HX^{b_1}\otimes HX^{b_2}$. In particular, on input $|00\rangle$ all four
uncorrected outputs are $\tfrac12|++\rangle$, each with probability $1/4$,
and all corrected outputs are $\tfrac12|00\rangle$.

## Facts & Assumptions

**Given:** The one-edge simple graph and the specified four-vertex open
graph pattern.

[F1] Graph-state amplitudes are $2^{-n/2}$ times the edge-parity sign
([[lem-qc-graph-state-amplitude-formula]]).

[F2] For each vertex, $K_v=X_v\prod_{u\in N(v)}Z_u$ fixes the graph state
([[lem-qc-graph-state-stabilizer-generators]]).

[F3] The four-vertex CZ pattern has the stated branch and terminal-correction
formula ([[lem-qc-measurement-pattern-for-cz]]).

## Verification


1.1 In the one-edge graph, the edge-parity exponent is $x_1x_2$, so the four ordered bitstrings $00,01,10,11$ have signs $+1,+1,+1,-1$ in [F1]. This gives the displayed normalized vector. [F1, algebra]

1.2 The neighbors are $N(1)=\{2\}$ and $N(2)=\{1\}$, so [F2] gives $K_1=X\otimes Z$ and $K_2=Z\otimes X$. Directly, $X\otimes Z$ sends the four basis vectors to $|10\rangle,-|11\rangle,|00\rangle,-|01\rangle$, respectively; applied to the displayed coefficient vector this reproduces it. Likewise $Z\otimes X$ sends them to $|01\rangle,|00\rangle,-|11\rangle,-|10\rangle$, which also reproduces the vector. [F1, F2, algebra]

2.1 For input $|00\rangle$, $CZ|00\rangle=|00\rangle$ and $H|0\rangle=|+\rangle$. Thus [F3] gives each branch output $\tfrac12|++\rangle$, whose squared norm is $1/4$. Since $HX^{b_j}X^{b_j}H|0\rangle=|0\rangle$ for $b_j\in\{0,1\}$, each terminal correction gives $\tfrac12|00\rangle$. [F3, algebra] ∎

