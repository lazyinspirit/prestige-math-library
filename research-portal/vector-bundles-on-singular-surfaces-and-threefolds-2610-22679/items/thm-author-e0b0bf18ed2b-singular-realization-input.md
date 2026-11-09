---
id: thm-author-e0b0bf18ed2b-singular-realization-input
kind: theorem
title: External singular realization comparison
status: published
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 16, §§2–4, printed pp. 124–127, especially the second theorem
        of §2 and the realization–singular adjunction in §4
      statement: The evaluation from the geometric realization of the singular complex
        of a space to that space is a natural weak homotopy equivalence;
        realization and singular complex are adjoint.
      hypotheses: A topological space; for the pointed version, a chosen basepoint and
        based maps.
      reading_limits: The current author inspected the construction and theorem
        statement in §2 and the beginning of the proof in §3. The supplied
        authoring assistance reports reading §§2–4 and notes that May sketches
        the weak-equivalence proof. The pointed adjunction and remaining
        foundational details are imported, not reconstructed here.
dependency_level: 0
---

## Statement
For a based space X, the evaluation ε:|Sing X|→X is a natural weak homotopy equivalence, and realization is left adjoint to the singular complex in the pointed categories. The basepoint of Sing X is the constant singular simplex at the basepoint in each degree. A weak homotopy equivalence induces a bijection on path components and isomorphisms on all homotopy groups at every basepoint.

## Source contract
**Given:** A based topological space X.

**Goal:** Supply the realization and singular-complex comparison used for sequential prespectra.

[F1] May, Chapter 16, §§2–4, gives the evaluation theorem and realization–singular adjunction at the cited locator.

## External input
Import [F1], including its pointed specialization. This is an external theorem; no local reconstruction of the comparison is claimed.
