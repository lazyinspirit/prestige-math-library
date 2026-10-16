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
dependency_level: 21
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

Fix an integer $q\ge1$, a recursively replaced gadget family with disjoint child rectangles, and a fault path $F\subseteq L(C)$ in its finite physical schedule $C$, as in [[def-qc-fault-location-path-and-rectangle]]. Goodness and badness below are relative to this same $q$ and $F$. A level-zero rectangle at location $\lambda$ is good exactly when $\lambda\notin F$, and is bad otherwise. Recursively, a level-$(r+1)$ rectangle is $q$-good exactly when at most $q$ of its level-$r$ child rectangles are $q$-bad; it is $q$-bad otherwise. Thus the status of a rectangle depends only on the restriction of $F$ to its elementary-location set. For a random fault path these predicates define the corresponding good and bad events.

The implication from $q$-goodness to the ideal reference-preserving logical action is a property that must be proved from the gadget contracts in [[def-qc-ft-gadget-and-proper-code-contract]]. The definition of good and bad rectangles alone does not prove that implication. For each parent, the number of children is at most $a$, and their underlying elementary-location sets are pairwise disjoint.

