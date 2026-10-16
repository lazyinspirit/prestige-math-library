---
id: alg-qa-deutsch-jozsa-query
kind: algorithm
title: One-query Deutsch–Jozsa algorithm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-deutsch-jozsa-promise
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
  - def-qa-quantum-query-algorithm
  - def-qa-standard-bit-query
  - def-qc-coherent-function-oracle
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - lem-qa-hadamard-f2-kernel
  - thm-qa-bit-query-to-phase-query
  - thm-qc-computational-basis-orthonormal
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Definition

**Input.** An integer $n\ge1$ and a total Boolean oracle $f:\{0,1\}^n\to\{0,1\}$ satisfying the Deutsch–Jozsa promise of [[def-qa-deutsch-jozsa-promise]], with an ordered $n$-qubit address register $A$ and one target qubit $T$ initialized to $|0^n\rangle_A|0\rangle_T$.

**Output.** One classical bit: output $0$ (constant) exactly when the measured address is $0^n$; otherwise output $1$ (balanced).

**Procedure.** Apply $H^{\otimes n}$ to $A$. Apply $X$ and then $H$ to $T$. Invoke the standard XOR oracle $U_f$ once on $(A,T)$. Apply $H^{\otimes n}$ to $A$, measure $A$ in its ordered computational basis, and apply the output rule. There are no intermediate measurements, loops, or failure branches.

The target is prepared from zero by one $X$ and one $H$; the address uses $n$ Hadamards before and $n$ after the query. Thus the query count is one and the nonoracle gate count is one $X$ and $2n+1$ $H$ gates, totaling $2n+2$ one-qubit gates under [[def-qa-nonoracle-gate-cost]] and [[def-qc-one-qubit-gate-alphabet-and-rotations]]. The terminal measurement is specified by [[def-qa-finite-branch-output-law]] and is not counted as a one-qubit gate. No circuit-uniformity or classical bit-time bound is asserted.

The standard XOR query and quantum-query algorithm conventions are those of [[def-qa-standard-bit-query]] and [[def-qa-quantum-query-algorithm]]. The phase action used by the procedure is verified by [[thm-qa-bit-query-to-phase-query]].
