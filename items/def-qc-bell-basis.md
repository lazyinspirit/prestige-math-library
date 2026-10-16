---
id: def-qc-bell-basis
kind: definition
title: The Bell vectors
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-one-qubit-gate-alphabet-and-rotations
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Example 6.50 and the Bell-basis discussion."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§7.2, equations (81)–(82), PDF pp.61–62."
---

## Definition

Let $Q_2=\mathbb C^2$ be the ordered qubit register with computational basis
$(|0\rangle,|1\rangle)$, and use the ordered two-factor register
$Q_2\otimes Q_2$ from [[def-qc-tensor-register-and-permutation]]. Define the
four **Bell vectors** by

$$|\Phi^+\rangle:=\frac{|00\rangle+|11\rangle}{\sqrt2},\qquad |\Phi^-\rangle:=\frac{|00\rangle-|11\rangle}{\sqrt2},\qquad |\Psi^+\rangle:=\frac{|01\rangle+|10\rangle}{\sqrt2},\qquad |\Psi^-\rangle:=\frac{|01\rangle-|10\rangle}{\sqrt2}.$$

The ordered label convention is
$|00\rangle\mapsto|\Phi^+\rangle$,
$|01\rangle\mapsto|\Psi^+\rangle$,
$|10\rangle\mapsto|\Phi^-\rangle$, and
$|11\rangle\mapsto|\Psi^-\rangle$. Thus the first label is the phase/sign
bit and the second is the bit-flip bit. The next theorem verifies that these
vectors form an orthonormal basis and gives the corresponding preparation and
decoding maps.

