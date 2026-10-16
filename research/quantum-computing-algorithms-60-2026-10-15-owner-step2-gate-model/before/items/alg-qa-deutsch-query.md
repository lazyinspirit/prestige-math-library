---
id: alg-qa-deutsch-query
kind: algorithm
title: One-query Deutsch algorithm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-deutsch-promise
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

**Input.** A one-bit total Boolean oracle $f$ satisfying the Deutsch promise of [[def-qa-deutsch-promise]], with an address qubit $A$ and target qubit $T$ initialized to $|0\rangle_A|0\rangle_T$.

**Output.** One classical bit: output $0$ for constant and $1$ for balanced.

**Procedure.** Apply $X$ to $T$, then apply $H$ to $T$ and $H$ to $A$. Invoke the standard XOR oracle $U_f$ once on the ordered pair $(A,T)$. Apply $H$ to $A$, measure $A$ in its ordered computational basis, and output the measured bit. There are no intermediate measurements, loops, or failure branches.

The target preparation is $|0\rangle\mapsto X|0\rangle=|1\rangle\mapsto H|1\rangle=| -\rangle$; the address preparation is $H|0\rangle=|+\rangle$. The query costs one oracle call. The nonoracle gate count is one $X$ and three $H$ gates, exactly four one-qubit gates under [[def-qa-nonoracle-gate-cost]] and [[def-qc-one-qubit-gate-alphabet-and-rotations]]. The final measurement is specified by [[def-qa-finite-branch-output-law]]; it is not counted as a one-qubit gate. No circuit-uniformity or classical bit-time bound is asserted.

The standard bit query and its controlled-access conventions are those of [[def-qa-standard-bit-query]] and [[def-qa-quantum-query-algorithm]]. The one-query phase action used by this procedure is verified by [[thm-qa-bit-query-to-phase-query]].
