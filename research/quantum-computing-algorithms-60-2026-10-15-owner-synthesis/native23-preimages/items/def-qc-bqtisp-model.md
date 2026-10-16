---
id: def-qc-bqtisp-model
kind: definition
title: "BQTISP Model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-effective-binary-encoding-and-decoder
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computation"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Definition

Use the Van Melkebeek–Watson quantum Turing-machine model. It has a read-only input tape containing $x\in\{0,1\}^n$ followed by blanks, a classical work tape and a quantum work tape, both initialized to zero, and a fixed finite number of heads. Input cells are not charged. Work-tape space is the maximum address visited by any classical or quantum work head on any branch; this is the source's tape convention, not circuit width. Classical heads may move locally or jump to an address computed on the classical work tape. Quantum operations act on the cells under the quantum heads and are either unitary gates or single-qubit computational-basis measurements. A classical finite control chooses the operations and operands from its state, classical/input symbols and previous measurement outcomes; choices do not depend on the quantum basis path.

The model has coherent quantum random access to the input: for a binary address $i$, a query applies $Q_x|i,b\rangle=|i,b\mathbin\oplus x_i\rangle$ to the address register and one answer qubit; under the source indexing, $x_i=0$ whenever $i>n$. The address register is part of the quantum work tape, and each query is one step. Each step's transition table and gate label are finite. For each unitary-matrix entry, its first $k$ bits in real and imaginary parts are deterministically computable in time polynomial in $k$. This amplitude condition is part of the input-access model, not a free arbitrary-real gate assumption.

For a promise problem $(Y,N)$, $\mathrm{BQTISP}(t,s)$ means there is such a machine using at most $O(t)$ steps and $O(s)$ maximum work-head address on every branch, accepting each $x\in Y$ with probability at least $2/3$ and each $x\in N$ with probability at most $1/3$. There is no requirement off the promise. Bounds maximize over all branches, including branches of probability zero. The time coordinate counts ordinary transitions, measurements and coherent input queries. It is a machine-transition model, with its classical comparison class $\mathrm{PrTISP}_{\rm VMW}$ defined using the matching VMW random-access profile in [[def-qc-unbounded-error-time-space-counting-model]].

## Interface boundary

The fixed machine description and binary addresses use [[def-effective-binary-encoding-and-decoder]]. The VMW source specifies that a work-tape operation is omitted if a head collision makes it undefined; this definition adopts that convention. The coherent input query uses the source's blank-symbol convention for out-of-range addresses.
