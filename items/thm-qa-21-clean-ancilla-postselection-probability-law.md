---
id: thm-qa-21-clean-ancilla-postselection-probability-law
kind: theorem
title: Clean-ancilla postselection has normalized branch weights
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qa-21-clean-ancilla-postselection
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - thm-qc-isometric-encoding-projector
  - def-qc-tensor-register-and-permutation
  - def-qc-dirac-notation-conversion
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - lem-qc-linear-isometry-adjoint-identities
  - def-inner-product-norm
justified_by: []
proof_strategy: direct
axiom_use: None; finite-dimensional inner-product identities suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.17)–(28.22), printed pp.141–142."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eq. (9.3), printed p.74."
---

## Statement

With the notation of [[def-qa-21-clean-ancilla-postselection]], every unit vector $\phi$ has $p_0,p_\perp\in[0,1]$ and $p_0+p_\perp=1$. If $p_0>0$, the assigned conditional vector $q/\sqrt{p_0}$ is a unit vector; if $p_0=0$, then $q=0$ and no conditional vector exists.

## Facts & Assumptions

**Given:** Finite registers $A,S$, the injection $Jx=|0_A\rangle\otimes x$, the projector $\Pi_0=JJ^\dagger$, and a unit vector $\phi\in A\otimes S$.

[F1] [[def-qa-21-clean-ancilla-postselection]]: $q=J^\dagger\phi$, $p_0=\|q\|^2$, and $p_\perp=\|(I-\Pi_0)\phi\|^2$.

[F2] [[def-qc-tensor-register-and-permutation]]: the tensor-product inner product is the product inner product on elementary tensors.

[F3] [[def-qc-dirac-notation-conversion]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], and [[lem-qc-linear-isometry-adjoint-identities]]: the bra is the adjoint functional for the root-linear-first pairing, and a norm-preserving linear map satisfies $J^\dagger J=I_S$.

[F4] [[def-inner-product-norm]]: the squared norm is the self-pairing.

[F5] [[thm-qc-computational-basis-orthonormal]]: the distinguished computational-basis vector $|0_A\rangle$ has norm $1$.

## Proof

**Given:** As in Facts & Assumptions.

1.1 From the product inner product [F2] and unit norm [F5], $\|Jx\|^2=\langle |0_A\rangle\otimes x,|0_A\rangle\otimes x\rangle=\|x\|^2$ for every $x$, so $J$ is an isometry by its definition in [F3]. Therefore $J^\dagger J=I_S$ by [F3]. It follows that $\Pi_0=JJ^\dagger$ is self-adjoint and idempotent, $\Pi_0\phi=Jq$, and $\phi=\Pi_0\phi+(I-\Pi_0)\phi$. [given, F2, F3, F5, algebra]

2.1 The two summands are orthogonal because $\Pi_0(I-\Pi_0)=0$ and $\Pi_0^\dagger=\Pi_0$. Expanding their squared norm by [F4] gives $1=\|\phi\|^2=\|\Pi_0\phi\|^2+\|(I-\Pi_0)\phi\|^2=\|q\|^2+p_\perp=p_0+p_\perp$. Both summands are nonnegative, so each lies in $[0,1]$. [F1, F4, step 1.1, algebra]

3.1 If $p_0>0$, then $\|q/\sqrt{p_0}\|^2=p_0/p_0=1$. If $p_0=0$, definiteness of the inner-product norm gives $q=0$, so normalization is undefined and the definition correctly assigns no conditional vector. [F1, F4, step 2.1, cases] ∎
