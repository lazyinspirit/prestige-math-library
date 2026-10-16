---
id: lem-qc-uniform-probabilistic-clocked-simulation
kind: lemma
title: "Uniform clocked simulation of encoded probabilistic machines"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - thm-clocked-universal-simulation-with-time-and-space-bounds
  - def-effective-binary-encoding-and-decoder
  - def-time-and-space-constructible-function
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, §2: probabilistic machine and LCH conventions"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

A single clocked probabilistic multitape simulator uniformly simulates descriptions $e$ of length $O(\log n)$ for a time-constructible bound $T(n)\ge n$, preserving each described machine's random-bit distribution and declared input-access profile with time $O(T(n)\,\mathrm{polylog}\,n)$. The fixed-description clocked-simulator bound does not itself state this uniform-in-description conclusion.


## Facts & Assumptions

**Given:** a valid binary description $e$ of length $O(\log n)$ of a fixed-format probabilistic multitape machine, input $x$ of length $n$, and a fixed time-constructible clock $T(n)\ge n$.

[F1] [[thm-clocked-universal-simulation-with-time-and-space-bounds]] fixes a clocked interpreter and proves an $O_M(T\log T)$ time bound for each fixed simulated machine $M$; its constant depends on $M$.

[F2] [[def-qc-unbounded-error-time-space-counting-model]] fixes the fair-bit acceptance convention and distinguishes the sequential and VMW random-access profiles.

[F3] [[def-effective-binary-encoding-and-decoder]] supplies a fixed total encoding/decoding convention; an explicit description of length $O(\log n)$ itself has only $O(\log n)$ encoded bits.

[F4] [[def-time-and-space-constructible-function]] fixes the unary-clock constructor and the size condition $n\le T(n)$.

## Proof

1.1 Under an explicit transition-table code, a valid description $e$ of length $O(\log n)$ can be read and parsed using $O(\log n)$ cells; its table bits and any fair-bit choices are part of that finite code. A simulated branch of length at most $T$ also uses at most $T$ transitions of the described machine. The clock can be produced under [F4]. [F2, F3, F4, given, algebra]

1.2 The fixed-machine theorem [F1] cannot be applied with a uniform constant to the varying machines $M_e$: its $O_M$ constant is allowed to depend on $e$. The earlier row-scan sketch is insufficient as well: a one-tape encoding of a length-$T$ virtual tape can require a scan of $\Theta(T)$ cells for one virtual head update, and repeating that scan can cost $\Theta(T^2)$. A valid proof of the claimed $O(T\,\mathrm{polylog}\,n)$ bound must specify a fixed-alphabet data structure for the variable number of tapes and prove its per-step or amortized cost, including random-access jumps and table lookup. [F1, F2, step 1.1, algebra]

1.3 No such uniform data-structure invariant or cost proof is supplied in this carrier, and the fixed-machine bound does not provide one. The probability-preservation claim would follow if a simulator consumed exactly the described fair bits and reproduced every described transition, but the required resource bound remains unproved. This lemma is escalated; the hierarchy proof that depends on it is conditional. [F1, F2, step 1.2] ∎
