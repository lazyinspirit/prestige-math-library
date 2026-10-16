---
id: def-qc-stabilizer-state
kind: definition
title: Stabilizer state
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-stabilizer-subgroup
  - def-qc-pure-state-and-ray
  - thm-qc-stabilizer-projector-rank-and-code-dimension
justified_by: []
dependency_level: 14
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson
        14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Definition

Let $S$ be a rank-$n$ stabilizer subgroup on an ordered $n$-qubit register
$H_n=(\mathbb C^2)^{\otimes n}$. A **pure stabilizer state** is the unique ray
in the common $+1$ fixed space

$$\mathcal C(S):=\{\psi\in H_n:g\psi=\psi\text{ for every }g\in S\}.$$

The cited projector-rank theorem proves that this common space is nonzero and
one-dimensional, so the ray is well defined. A normalized representative may
be used for probabilities, but the state itself is the ray, not a chosen
vector.

## Sources

De Wolf §20.1, PDF p. 185, and Watrous Lesson 14 §14.3, printed pp. 415–416
(PDF pp. 421–422), define a stabilizer state from a full-rank commuting Pauli
subgroup and its common $+1$ eigenspace:
https://arxiv.org/pdf/1907.09415;
https://jhwatrous.github.io/UQIC.pdf.
