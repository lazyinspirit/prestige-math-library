---
id: thm-qc-rz-clifford-t-tcount
kind: theorem
title: T-count guarantees for Clifford+T Rz synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-rz-clifford-t-approximation
  - thm-qc-rz-approximation-correct-on-termination
  - lem-qc-rz-scaled-grid-norm-solution-exists
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
---

## Statement

For the ancilla-free, on-the-nose $R_z(\theta)$ problem with
$0<\varepsilon<1/2$, the Ross–Selinger grid/norm procedure has the following
source guarantees, with its exact-real comparison and norm-solver assumptions.

1. With a factoring oracle and a complete factorization-based solver for
   $t^*t=\xi$, the first successful candidate yields a circuit of minimum
   T-count among all one-qubit Clifford+T circuits satisfying the operator
   norm bound.
2. In the bounded-factorization mode, under Ross–Selinger Hypothesis 8.3
   (candidate primality probabilities are asymptotically those of comparable
   random odd integers and are independent), if $m$ is the returned T-count
   and $m''$ is the second-smallest T-count among non-equivalent feasible
   solutions, then the expected number of lower-count non-equivalent
   solutions examined is $O(\log(1/\varepsilon))$ and
   $\mathbb E[m]=m''+O(\log\log(1/\varepsilon))$.
3. Under the same source hypotheses, the arithmetic-operation time is
   expected $O(\operatorname{polylog}(1/\varepsilon))$. This is not a
   bit-time bound for arbitrary unencoded real inputs.

## Authoring status

No complete local proof is supplied for the source optimality, conditional
near-optimality, or expected arithmetic-time claims. The local
determinant-one density argument now supplies a candidate with a solvable
norm equation, but the constructive cyclotomic norm solver in Theorem 6.2
remains an authoring obligation. The claims retain their full source
hypotheses and are escalated; they are not marked ready.

## Source notes

Ross–Selinger arXiv:1403.2975, §§7–8, especially Theorem 6.2,
Propositions 8.2, 8.8, 8.11, and Hypothesis 8.3. The source hypotheses are
kept distinct between the factoring-oracle and capped-factorization branches.
