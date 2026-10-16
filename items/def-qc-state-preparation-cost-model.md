---
id: def-qc-state-preparation-cost-model
kind: definition
title: QC24 State Preparation Cost Model
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-pure-state-and-ray
  - def-qc-elementary-circuit-resources
  - def-qc-projective-chord-distance
  - def-qc-ordered-bitstring-encoding
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Definition

Fix an integer $n\ge0$ and $D=2^n$. An explicit amplitude-table input is a list of $D$ exact complex numbers $(a_x)_{x\in\{0,1\}^n}$ in the ordered basis convention of [[def-qc-ordered-bitstring-encoding]]; it is valid when $\sum_x|a_x|^2=1$. Its target is the pure-state ray $[a]$ under [[def-qc-pure-state-and-ray]]: nonzero scalar multiples represent the same ray, and $a$ is a unit representative when the table is normalized. A claim must state whether its output error is projective chord distance [[def-qc-projective-chord-distance]] or a representative-level vector error.

The cost record keeps these quantities separate: (1) the classical encoding length and table-reading/preprocessing work; (2) continuous-angle gate occurrences, or finite-alphabet gate occurrences when that model is specified; (3) width, clean-workspace and serial-depth usage; and (4) the declared output-error metric. If an encoding assigns exactly $b$ bits to each real coordinate and $b$ bits to each imaginary coordinate, with basis order implicit, the dense table contains exactly $2Db$ input bits. Those bits must decode to the input table in an exact-table claim; finite-precision approximations are separate inputs with separate error hypotheses. An explicit table is classical input: this definition grants no coherent table oracle, QRAM, or free loading operation. Ideal exact complex arithmetic and finite-precision bit cost are distinct models.
