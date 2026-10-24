---
id: def-qa-nonoracle-gate-cost
kind: definition
title: "Nonoracle quantum gate cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-quantum-query-algorithm
  - def-qc-circuit-cost-model
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Given the circuit-family model and cost record in [[def-qc-circuit-cost-model]] and elementary gate alphabet in [[def-qc-elementary-circuit-resources]], a query circuit [[def-qa-quantum-query-algorithm]] has **nonoracle gate cost** equal to the maximum number of elementary gates outside designated black-box query calls on any branch. It counts preparation gates, ancilla operations, inverse gates, and every other stated nonoracle gate, including identity operations if the declared syntax counts them. It does not count a black-box query as an elementary gate; if the oracle is implemented from a supplied circuit, that implementation's gates are charged under the declared resource model.

Non-input registers start in $|0\rangle$. Any nonzero initial state or data-access resource must name its preparation/access model and charge that cost. Measurements, classical feed-forward, circuit-description length, and classical bit operations are reported in the selected QC resource convention rather than silently assigned zero cost. Query count and gate count are separate coordinates.
