---
id: def-qc-tqc-ribbon-modular-data
kind: definition
title: Unitary ribbon data
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-qc-tqc-unitary-fusion-category, def-twist-and-ribbon-structure, def-braiding]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10, Definition 8.10.1, printed p. 217: balancing and ribbon dual-compatibility."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.3.10, PDF p. 8: unitary monoidal structure and unitary associator/unitors."
---

## Definition

A **unitary ribbon fusion category** is a unitary fusion category with a
unitary braiding and a ribbon structure in the sense of
[[def-twist-and-ribbon-structure]]. Thus the twist $\theta$ is a natural
automorphism of the identity satisfying the balancing identity and the
dual-compatibility condition of that root definition, and each component is
unitary: $\theta_X^\dagger=\theta_X^{-1}$. A ribbon structure is additional
data; it is not supplied by fusion rules or by a braid-group representation
alone.

