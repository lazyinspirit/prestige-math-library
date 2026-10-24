---
id: def-qa-22-block-encoding-access-model
kind: definition
title: Block-encoding oracle and implementation cost model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
verification:
  precheck: n/a
deps:
  - def-qa-22-block-encoding
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapters 28–29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Section 4
      url: https://arxiv.org/pdf/1806.01838
---

## Definition

An **access instance** for a finite family of block-encoding unitaries $U_j$ records, as separate supplied operations, each of $U_j$, $U_j^{\dagger}$, controlled-$U_j$, and controlled-$U_j^{\dagger}$ that an algorithm may call. A call to one operation does not imply access to another.

Whenever a family SELECT is used, the instance specifies extensions $\widetilde U_j$ acting on one common ordered target register. For a nonempty family on the same system $\mathbb C^d$ with ancilla widths $a_j$, set $a_*:=\max_j a_j$ and use $\widetilde U_j:=I_{2^{a_*-a_j}}\otimes U_j$, with the unused ancillas preceding the original ancillas and the system. This identity extension preserves the all-zero block. If system registers also differ, the common system register, its identifications, and unitary extensions preserving the declared encoded blocks must be supplied explicitly before forming SELECT. For a family indexed by $0\le j<m$ and a selector register of dimension $D\ge\max\{m,1\}$, the family SELECT is

$$\mathrm{SELECT}:=\sum_{j=0}^{m-1}|j\rangle\langle j|\otimes\widetilde U_j+\sum_{j=m}^{D-1}|j\rangle\langle j|\otimes I,$$

where $I$ acts on the common target register and empty sums are zero. The instance records whether this complete unitary is supplied as one oracle or must be assembled from separately controlled calls; any required extensions and register routing have declared implementation costs.

For every supplied circuit operation $O$, the instance records the applicable circuit-description length, gate count and gate set, depth, total width, and clean and dirty work-ancilla counts; for a uniform family it records the full-description generator time. It separately records each named oracle-query count, classical postprocessing time and space, matrix-data and coefficient-table reading or storage, state-preparation cost, and target precision and its bit encoding when the task is approximate. These coordinates follow [[def-qc-circuit-cost-model]] and [[def-qc-uniform-circuit-family]]; an inapplicable coordinate is marked not applicable, not silently zero. A bare matrix $A$ supplies none of these circuits or access rights. If an operation is compiled from matrix entries or a coefficient table, its data access, synthesis, precision, and classical costs are recorded separately. The cost of a SELECT implementation includes its controls and relative phases unless those are listed as separate supplied primitives. These block-encoding constructions include no measurement or classical-output step; a consumer's measurement and output costs are accounted separately.
