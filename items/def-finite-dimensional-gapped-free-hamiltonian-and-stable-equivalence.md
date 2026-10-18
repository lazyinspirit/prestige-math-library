---
id: def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence
kind: definition
title: "Finite-dimensional gapped free Hamiltonians and stable equivalence"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alexei Kitaev, Periodic table for topological insulators and superconductors (2009)"
      url: "https://arxiv.org/pdf/0901.2686"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Definition

A finite-dimensional free-fermion Hamiltonian is a self-adjoint matrix on a finite-dimensional complex Hilbert space. It is gapped at zero if 0 is not in its spectrum. A symmetry class is specified by named unitary and antiunitary operators and exact commutation, anticommutation and square relations with H. Stable equivalence means gap-preserving homotopy after direct sum with fixed reference trivial bands; phases are differences of stabilized systems, not absolute modules.

Class A has no additional antiunitary constraint. A symmetry is unitary or antiunitary and its relation is recorded as S H S^{-1}=σH, σ∈{+1,−1}; any additional square relation is part of the declared model data.
