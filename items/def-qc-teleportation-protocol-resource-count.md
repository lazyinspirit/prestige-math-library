---
id: def-qc-teleportation-protocol-resource-count
kind: definition
title: Teleportation protocol resource record
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-elementary-circuit-resources
  - alg-qc-teleportation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Scenario 6.46 and Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.2–10.3, PDF pp.81–85."
---

## Definition

For the procedure [[alg-qc-teleportation]], define a protocol-specific resource
record with separate coordinates as follows. A **shared-pair use** is one
initial Bell pair supplied as an input resource; its preparation is excluded.
A **classical communication bit** is one bit sent from Alice to Bob; the record
contains two. A **transmitted qubit** is a qubit sent during the protocol after
the shared pair is available; the record contains zero. A **measurement-record
bit** is one of the two ordered computational-basis outcomes measured by Alice;
the record contains two such bits. A **local gate occurrence** is counted by
the size convention of [[def-qc-elementary-circuit-resources]], namely as one
gate occurrence in the declared circuit: Alice uses one CNOT and one Hadamard,
and Bob uses at most two conditional Pauli gate occurrences, $X^b$ and $Z^a$.
The pair preparation is not included among those gate occurrences. This record
counts the stated procedure only; it asserts no optimality or physical
realization.

