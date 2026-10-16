---
id: alg-qa-11-bbht-unknown-count-search
kind: algorithm
title: BBHT search when the marked count is unknown
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-11-grover-iterate
  - def-qa-11-marked-search-problem
  - def-qa-phase-query
  - def-qa-quantum-query-algorithm
  - def-qa-standard-bit-query
  - def-qc-dirac-notation-conversion
  - def-qc-elementary-circuit-resources
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-reflection
  - lem-ceiling-and-least-positive-integer-threshold
  - thm-qa-bit-query-to-phase-query
  - thm-qc-reflection-unitary-involution
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: No proof phase is supplied; the definition is finite operational data and uses only the declared input operations.
---

## Definition

**Gate model.** Use the nonoracle model of [[alg-qa-11-grover-iterate]], with exact callable $H$ and $X$ charged per occurrence and an explicitly supplied, costed exact reflection implementation. Each invoked Grover iterate retains its separate standard-bit-query and nonoracle costs.

Input $N=2^n$ and standard bit-query access to $f=1_M$, with no input giving $t=|M|$. Fix $c=3/2$ and initialize $\ell=0$. In each round increment $\ell$ and put $M_\ell=\lceil c^\ell\rceil$. First draw one uniform address $x\in D_n$ and verify it by one standard bit query; if $f(x)=1$, return $x$. Otherwise choose $j$ uniformly from $\{1,\ldots,M_\ell\}$, prepare a fresh address register as $|s\rangle=H^{\otimes n}|0^n\rangle$ and a fresh response qubit as $|-\rangle$ using $X$ then $H$, apply the Grover iterate exactly $j$ times, measure the address register, and verify the candidate by a separate standard bit query. Return a verified marked item and otherwise begin the next round. Every random choice and quantum register is fresh in each round. The algorithm has no false positive; when $t=0$ it continues forever and does not produce a finite-time emptiness decision. The gate and state-preparation costs are charged separately from the bit-query count.
