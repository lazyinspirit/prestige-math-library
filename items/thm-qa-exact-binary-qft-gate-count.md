---
id: thm-qa-exact-binary-qft-gate-count
kind: theorem
title: Exact binary QFT ideal gate count
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: [alg-qa-exact-binary-qft-circuit, def-qa-qft-gate-cost-model, lem-qa-swap-is-three-cnot-circuit]
axiom_use: "No choice axiom is used; all gate loops and sums are finite."
justified_by: []
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For $n\ge0$, the exact circuit uses $n$ Hadamards, $n(n-1)/2$ controlled phase rotations, $\lfloor n/2\rfloor$ SWAP gates, no ancillas, and

$$n+\frac{n(n-1)}2+\lfloor n/2\rfloor=O(n^2)$$

ideal gates in the model of [[def-qa-qft-gate-cost-model]]. If every SWAP is expanded into three exact CNOTs, the circuit instead has $3\lfloor n/2\rfloor$ CNOTs in place of the SWAPs.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the exact circuit of [[alg-qa-exact-binary-qft-circuit]], and the ideal gate model of [[def-qa-qft-gate-cost-model]].

[F1] The exact circuit applies one $H$ on each wire, one controlled phase for each pair $0\le i<j<n$, then $\lfloor n/2\rfloor$ reversal swaps ([[alg-qa-exact-binary-qft-circuit]]).

[F2] Each $H$, controlled phase and named SWAP counts as one ideal gate; an expanded SWAP uses three CNOTs ([[def-qa-qft-gate-cost-model]]).

[F3] The two-wire SWAP equals the exact three-CNOT sequence ([[lem-qa-swap-is-three-cnot-circuit]]).

## Proof

**Proof technique:** direct.

**Given:** The circuit and gate-count convention above.

1.1 The loop has one Hadamard for each of the $n$ wires. Its controlled phases are indexed by pairs $(i,j)$ with $0\le i<j<n$; summing the $j$ possible lower controls for each target gives $\sum_{j=0}^{n-1}j=n(n-1)/2$. The final reversal consists of exactly one swap for each pair $(j,n-1-j)$ with $j<\lfloor n/2\rfloor$, hence $\lfloor n/2\rfloor$ swaps. [F1, algebra]

2.1 By [F2], the ideal count is the displayed sum and there are no other gates or ancillas. For $n\ge1$, the sum is at most $n+n(n-1)/2+n/2\le 3n^2/2$, so it is $O(n^2)$; at $n=0$ all counts vanish. Replacing each counted SWAP by the exact identity [F3] gives exactly $3\lfloor n/2\rfloor$ CNOTs. [given, F2, F3, step 1.1, algebra] ∎
