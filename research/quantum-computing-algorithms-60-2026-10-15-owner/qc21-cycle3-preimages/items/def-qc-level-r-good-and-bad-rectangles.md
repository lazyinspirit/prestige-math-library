---
id: def-qc-level-r-good-and-bad-rectangles
kind: definition
title: "Good and Bad Concatenated Rectangles"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-fault-location-path-and-rectangle
  - def-qc-ft-gadget-and-proper-code-contract
dependency_level: 19
verification:
  precheck: n/a
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Definition

Fix an integer $q\ge1$ and a recursively replaced gadget family with disjoint child rectangles as in [[def-qc-fault-location-path-and-rectangle]]. A level-zero rectangle is good exactly when its elementary location is fault-free, and is bad otherwise. Recursively, a level-$(r+1)$ rectangle is $q$-good exactly when at most $q$ of its level-$r$ child rectangles are bad; it is $q$-bad otherwise.

The implication from $q$-goodness to the ideal reference-preserving logical action is a property that must be proved from the gadget contracts in [[def-qc-ft-gadget-and-proper-code-contract]]. The definition of good and bad rectangles alone does not prove that implication. For each parent, the number of children is at most $a$, and their underlying elementary-location sets are pairwise disjoint.

