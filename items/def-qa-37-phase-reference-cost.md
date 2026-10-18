---
id: def-qa-37-phase-reference-cost
kind: definition
title: "Braid phase reference and correction ledger"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - lem-qc-tqc-determinant-character-phase
  - def-qc-tqc-projective-gate-and-metric
  - def-qc-tqc-physical-braid-interface
  - def-qc-circuit-cost-model
justified_by: []
axiom_use: "None; this is finite word bookkeeping and unit-modulus scalar algebra."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.17, global and controlled phase, PDF pp. 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§II.B and §IV.B.c, braid representation conventions, PDF pp. 7–11, 53–57."
---

## Definition

For the fixed Fibonacci convention, write $\rho(b)$ for the physical braid
matrix and $B(b)$ for the normalized word matrix obtained by removing the
common exchange scalar $R_1$ from each Artin generator, as in
[[lem-qc-tqc-determinant-character-phase]]. If $e(b)$ is exponent sum, then
$$\rho(b)=R_1^{e(b)}B(b).$$
On the three-anyon total-$\tau$ block the SK alphabet instead uses the
special-unitary lifts $zB_j$ with $z=e^{3\pi i/10}$, so a word of exponent sum
$k$ satisfies
$$\rho(b)=(R_1z^{-1})^k\widehat B(b),\qquad \widehat B(b)=z^kB(b).$$
A **phase reference record** stores the exact generator scalar, exponent sum,
which normalized convention was compiled, the resulting scalar on each
coherently used branch, and any correction operation and its declared cost
under [[def-qc-circuit-cost-model]]. A standalone fixed-sector computation
may report its output projectively using the metric of
[[def-qc-tqc-projective-gate-and-metric]]. In coherent control the active
branch scalar is relative to the inactive branch and must remain in the
record. No phase correction is assigned zero cost unless its interface says
so. This ledger distinguishes the common $R_1^{e(b)}$ phase from the
additional $z^{-e(b)}$ needed when the compiled alphabet is the SU(2) lift.
