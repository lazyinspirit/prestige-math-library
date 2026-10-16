---
id: alg-qc-rz-clifford-t-approximation
kind: algorithm
title: Ancilla-free Clifford+T Rz approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-ancilla-free-rz-approximation-problem
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
---

## Definition

Input exact reals $\theta$, $0<\varepsilon<1/2$, an exact-real comparison
capability for the grid inequalities, and either an integer-factorization
oracle or a declared finite factor-attempt budget. No bit encoding for
arbitrary reals is implicit.

1. Enumerate $u$ from
   [[alg-qc-cyclotomic-scaled-grid-and-norm-solver]] in increasing denominator
   exponent. For each candidate, compute $\xi=1-|u|^2$ and invoke its norm
   subprocedure.
2. If it returns `FACTOR_TIMEOUT` or `NO_SOLUTION`, continue to the next
   candidate. For each returned $t$ with $t^*t=\xi$, form
   $U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}$ and
   $U'=TUT^\dagger$.
3. Run [[alg-qc-exact-single-qubit-clifford-t-synthesis]] on both matrices.
   Return the word with smaller exact T-count; break ties by lexicographic
   gate word. If a finite total candidate budget is supplied and is exhausted
   first, return `TIMEOUT`.

The exact grid-to-error equivalence is proved in
[[lem-qc-rz-epsilon-region-equivalence]]. The unbounded
factoring-oracle mode is the intended exact-source procedure. Its successful
termination and completeness depend on the local cyclotomic norm solver.

## Authoring status

The local determinant-one density argument proves that some candidate has a
solvable norm equation in
[[lem-qc-rz-scaled-grid-norm-solution-exists]]. The local norm-equation solver
and its completeness proof remain unresolved. A finite-budget call can
honestly return TIMEOUT; the unbounded branch is complete only after its norm
solver is locally established.
