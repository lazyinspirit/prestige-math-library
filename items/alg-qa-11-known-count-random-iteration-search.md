---
id: alg-qa-11-known-count-random-iteration-search
kind: algorithm
title: Known-count search by randomized Grover iteration
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-11-grover-iterate
  - def-qa-11-marked-search-problem
  - def-qa-classical-bit-cost
  - def-qa-quantum-query-algorithm
  - def-qa-standard-bit-query
  - def-qc-elementary-circuit-resources
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-reflection
  - lem-ceiling-and-least-positive-integer-threshold
  - thm-of-square-roots
  - thm-qc-reflection-unitary-involution
justified_by: [prop-qa-11-known-count-random-selection-bit-cost]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
axiom_use: No proof phase is supplied; the definition is finite operational data and uses only the declared input operations.
---

## Definition

**Gate model.** Use the nonoracle model of [[alg-qa-11-grover-iterate]], with exact callable $H$ and $X$ charged per occurrence and an explicitly supplied, costed exact reflection implementation. Each invoked Grover iterate retains its separate standard-bit-query and nonoracle costs.

Input $N=2^n$, exact count $t$, and standard bit-query access to $f=1_M$. If $t=0$, return none without a query. If $t>N/2$, perform at most nine independent rounds: prepare a fresh address register by $H^{\otimes n}|0^n\rangle$, measure an address, make one standard bit query to verify it, and return it if marked; after nine failures return the failure symbol.

If $0<t\le N/2$, find the least positive integer $K$ satisfying $tK^2\ge N$ by binary search. Initialize $\mathrm{lo}=0$ and $\mathrm{hi}=2^{\lceil n/2\rceil}$; while $\mathrm{hi}-\mathrm{lo}>1$, put $\mathrm{mid}=\mathrm{lo}+\lceil(\mathrm{hi}-\mathrm{lo})/2\rceil$, replace $\mathrm{hi}$ by $\mathrm{mid}$ if $t\,\mathrm{mid}^2\ge N$, and otherwise replace $\mathrm{lo}$ by $\mathrm{mid}$. Set $b$ to the least nonnegative integer with $2^b\ge K$. In each of nine independent rounds, draw $b$ fair bits to obtain $j\in\{0,\ldots,2^b-1\}$. Reject the round without a query if $j\ge K$. Otherwise prepare a fresh $|s\rangle=H^{\otimes n}|0^n\rangle$ and a fresh response qubit $|-\rangle$ using $X$ then $H$, apply [[alg-qa-11-grover-iterate]] exactly $j$ times, measure the address register, and make one separate bit query to verify the measured candidate. Return it if marked. After nine unsuccessful rounds, return the failure symbol. Uniform-state preparation uses exactly $n$ Hadamards; each iterate uses one query and a separately charged reflection. No query, state-preparation, reflection-gate, or classical-bit cost is conflated.
