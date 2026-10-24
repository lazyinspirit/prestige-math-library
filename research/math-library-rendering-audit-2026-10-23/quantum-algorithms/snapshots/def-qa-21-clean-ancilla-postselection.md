---
id: def-qa-21-clean-ancilla-postselection
kind: definition
title: Clean-ancilla zero-branch postselection
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - thm-qc-isometric-encoding-projector
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-dirac-notation-conversion
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - lem-qc-linear-isometry-adjoint-identities
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
justified_by: []
axiom_use: None; this is a finite-dimensional mathematical branch rule.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.17)–(28.22), printed pp.141–142: the projected ancilla-zero branch and its squared norm."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eq. (9.3), printed p.74: the zero-index branch, branch weight, and conditional state."
---

## Definition

Let $A$ be a finite register with distinguished unit computational-basis vector $|0_A\rangle$ (unit by [[thm-qc-computational-basis-orthonormal]]), let $S$ be a finite-dimensional complex-inner-product space, and define the isometry $J:S\to A\otimes S$ by $Jx=|0_A\rangle\otimes x$. The product inner product makes $J$ an isometry; [[lem-qc-linear-isometry-adjoint-identities]] gives $J^\dagger J=I_S$, and [[thm-qc-isometric-encoding-projector]] makes $\Pi_0:=JJ^\dagger$ the orthogonal projection onto its image. On elementary tensors this is $|0_A\rangle\langle0_A|\otimes I_S$ by the convention of [[def-qc-tensor-map]]. For a unit vector $\phi\in A\otimes S$, define its zero-branch vector $q:=J^\dagger\phi$, zero-branch weight $p_0:=\|q\|^2$, and complementary-branch weight $p_\perp:=\|(I-\Pi_0)\phi\|^2$. When $p_0>0$, the conditional system vector is $q/\sqrt{p_0}$; when $p_0=0$, no conditional vector is assigned. This definition fixes only the clean-ancilla two-outcome branch rule used on this page; it makes no physical realization claim.
