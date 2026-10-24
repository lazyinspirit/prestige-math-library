---
id: def-qa-11-marked-search-problem
kind: definition
title: Finite marked-item search and its bit oracle
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-input-encoding-and-size
  - def-qa-phase-query
  - def-qa-standard-bit-query
  - def-qa-task-and-promise-domain
  - def-qc-dirac-notation-conversion
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - thm-qa-bit-query-to-phase-query
  - thm-qc-bitstring-index-is-bijection
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

Fix an integer $n\ge0$, put $N=2^n$, and let $D_n=\{0,\ldots,N-1\}$. The big-endian encoding $\operatorname{enc}_n:\{0,1\}^n\to D_n$ is a bijection by [[thm-qc-bitstring-index-is-bijection]], so identify each address word $w$ with its slot $x=\operatorname{enc}_n(w)$. A search instance is a total Boolean function $f:D_n\to\{0,1\}$, equivalently the word-indexed function $w\mapsto f(\operatorname{enc}_n(w))$. Its marked set is $M=\{x\in D_n:f(x)=1\}$ and its marked count is $t=|M|$. The standard bit query is the coherent XOR action $U_f|x,b\rangle=|x,b\oplus f(x)\rangle$; the associated phase query is $O_M|x\rangle=(-1)^{f(x)}|x\rangle$. One standard bit query implements this phase action with a response qubit prepared in $|-\rangle$, by [[thm-qa-bit-query-to-phase-query]]. A measured candidate $x$ is verified by a separate standard bit query. Knowing $t$ is additional classical input; no count promise is made in the unknown-count version. A correct search output is a verified $x\in M$. The distinguished output none is used only by a procedure whose input includes the exact fact $t=0$; it is not a finite-time test for emptiness when $t$ is unknown.

The number $n$ may be zero, so $N=1$ and the address register then has its one-dimensional empty-word basis. The phase query is uncontrolled; no controlled-query capability is part of this definition.
