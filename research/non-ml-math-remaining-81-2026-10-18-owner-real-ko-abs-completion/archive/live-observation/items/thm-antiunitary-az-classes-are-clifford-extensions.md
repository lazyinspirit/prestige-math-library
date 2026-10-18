---
id: thm-antiunitary-az-classes-are-clifford-extensions
kind: theorem
title: "Antiunitary AZ symmetry classes give Clifford extension problems"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 2
deps: [def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence, lem-spectral-flattening-preserves-gap-and-symmetries, def-orthogonal-clifford-families-and-centrioles, thm-real-complex-clifford-algebra-classification]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexei Kitaev, Periodic table for topological insulators and superconductors (2009)"
      url: "https://arxiv.org/pdf/0901.2686"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

In the finite-dimensional stable gapped free model, let T be antiunitary time reversal with THT⁻¹=H and T²=±1, and let C be antiunitary particle-hole symmetry with C H C⁻¹=−H and C²=±1. If both are present, Γ=TC is unitary and anticommutes with H; class A has neither antiunitary constraint and class AIII has Γ alone. After the spectral flattening of [[lem-spectral-flattening-preserves-gap-and-symmetries]], derive the real-linear Clifford generators and their squares for AI (+,+ absent C), BDI (+,+), D (C²=+), DIII (T²=−, C²=+), AII (T²=− absent C), CII (−,−), C (C²=−), CI (+,−), and the two complex classes A/AIII. The ordered eight real indices and mass-generator convention must follow from these explicit relations.

## Authoring status

The statement now fixes the antiunitary relations and names all ten symmetry classes. A complete local construction of the real-linear generators, their squares/commutators, and the mass-extension correspondence is still missing. Kitaev’s table is not used as that proof. The batch-35 classification body was read but its readiness is not established here.
