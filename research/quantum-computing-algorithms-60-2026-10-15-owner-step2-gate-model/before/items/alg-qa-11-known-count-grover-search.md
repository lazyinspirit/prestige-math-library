---
id: alg-qa-11-known-count-grover-search
kind: algorithm
title: Known-count Grover search by exact integer maximization
status: draft
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
  - thm-of-square-roots
  - thm-qa-bit-query-to-phase-query
  - thm-qc-reflection-unitary-involution
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §§7.1–7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: No proof phase is supplied; the definition is finite operational data and uses only the declared input operations.
---

## Definition

Input $N=2^n$, standard bit-query access to $f=1_M$, and the exact integer $t=|M|$. If $t=0$, return none without a query. If $t>0$, find $K$ as the least positive integer with $tK^2\ge N$: start with $\mathrm{lo}=0,\mathrm{hi}=1$, repeatedly set $\mathrm{lo}=\mathrm{hi},\mathrm{hi}=2\mathrm{hi}$ while $t\mathrm{hi}^2<N$, then use upper-midpoint binary search on the false/true interval until $\mathrm{hi}-\mathrm{lo}=1$. Thus $K=\mathrm{hi}=\lceil\sqrt{N/t}\rceil$. Prepare $|s\rangle=H^{\otimes n}|0^n\rangle$, set $q=1-2t/N$, and compute exactly the rational recurrence
$$T_0(q)=1,\qquad T_1(q)=q,\qquad T_{m+1}(q)=2qT_m(q)-T_{m-1}(q)\quad(1\le m\le2K).$$
Compute the recurrence through index $m=2K+1$. For each integer $k=0,\ldots,K$, compute $p_k=(1-T_{2k+1}(q))/2$. Choose the least $k$ attaining the maximum of this finite rational list, apply [[alg-qa-11-grover-iterate]] exactly $k$ times, measure the address register, and make one separate standard bit query to verify the candidate. Return the candidate if marked and the failure symbol otherwise. The state preparation, all-zero reflection, classical recurrence and comparison work, and oracle queries are distinct costs; this definition makes no polynomial-time preprocessing claim.
