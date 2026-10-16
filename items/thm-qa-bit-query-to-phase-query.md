---
id: thm-qa-bit-query-to-phase-query
kind: theorem
title: "One standard query implements one phase query"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-standard-bit-query
  - def-qa-phase-query
  - thm-qa-phase-kickback
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
  - def-qa-nonoracle-gate-cost
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §2.4, PDF pp. 25–33: standard-to-phase query conversion."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 21, §21.2, PDF pp. 105–106: bit-flip query and phase query."
---

## Statement

Let $f:\{0,1\}^{a}\to\{0,1\}$ be total. Starting a target qubit in $|0\rangle$, apply $X$ and then $H$, and make one standard bit query. Since $HX|0\rangle=|-\rangle$, phase kickback implements $P_f$ on the address and returns the target to $|-\rangle$. This conversion uses one query plus exactly two nonoracle one-qubit gates; the target preparation is explicit and assumes no preprepared state or generic amplitude loading.

## Facts & Assumptions

**Given:** The zero-initialized target, the standard bit query, and the exact one-qubit gate matrices in the ordered computational basis.

[F1] [[def-qa-standard-bit-query]]: one query applies $|x\rangle|y\rangle\mapsto|x\rangle|y\oplus f(x)\rangle$.

[F2] [[def-qa-phase-query]]: $P_f|x\rangle=(-1)^{f(x)}|x\rangle$.

[F3] [[thm-qa-phase-kickback]]: a target in $|-\rangle$ converts one standard query to the phase query and returns unchanged.

[F4] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $X|0\rangle=|1\rangle$ and $H|1\rangle=(|0\rangle-|1\rangle)/\sqrt2$.

[F5] [[def-qc-elementary-circuit-resources]]: the declared gate count counts each $X$ and $H$ occurrence once, separately from black-box calls.

[F6] [[def-qa-nonoracle-gate-cost]]: query calls and gates outside those calls are separate resource coordinates, and the latter count preparation gates.

[A1] For the explicit preparation from $|0\rangle$ and its two-gate count, the selected nonoracle operation model has a finite gate alphabet containing and permitting $X$ and $H$ as callable gates, each occurrence is counted once, and the standard query is charged separately as one oracle call.

The phase identity in [F3] for an already prepared $| -\rangle$ target does not require [A1]; [A1] is needed only for the displayed preparation from $|0\rangle$ and its gate count.

## Proof

1.1 From [F4], after the first gate the target is $X|0\rangle=|1\rangle$, and after the second it is $H|1\rangle=|-\rangle$. The chronological order is therefore $H X|0\rangle$, not $XH|0\rangle$. [given, F4, A1, algebra]

2.1 Apply the standard query once. The phase-kickback theorem [F3], using the query action [F1] and the target established in step 1.1, gives $P_f$ on the address and returns the target to $|-\rangle$. By [F2] this address action is exactly the defined phase query. [step 1.1, F1, F2, F3]

3.1 The preparation has one $X$ and one $H$, hence two nonoracle gates by [F5]–[F6], and the oracle is invoked once by [F1]. These counts are separate; the construction makes no generic state-preparation call. [step 1.1, F1, F5, F6, A1] ∎
