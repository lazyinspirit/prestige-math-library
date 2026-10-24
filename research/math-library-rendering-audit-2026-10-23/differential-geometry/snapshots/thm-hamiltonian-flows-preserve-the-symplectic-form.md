---
id: thm-hamiltonian-flows-preserve-the-symplectic-form
kind: theorem
title: Hamiltonian flows preserve the symplectic form
status: published
origin: pipeline
deps: ["prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed", "prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, p. 105
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Wherever the local flow $\phi_t$ of a Hamiltonian vector field $X_H$ is
defined, it preserves the symplectic form: $\phi_t^*\omega=\omega$. No
completeness assertion is made.

## Facts & Assumptions

**Given:** A Hamiltonian vector field and its local flow.

[F1] A Hamiltonian field is symplectic, so $\mathcal L_{X_H}\omega=0$. [[prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed]].

[F2] A tensor is invariant under a local flow exactly when its Lie derivative along the generator vanishes. [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]].

## Proof

**Proof technique:** direct.

1.1 Since $\iota_{X_H}\omega=dH$ is closed, [F1] gives $\mathcal L_{X_H}\omega=0$. [F1, given]

2.1 Apply [F2] on the domain of the local flow to obtain $\phi_t^*\omega=\omega$. Neither step extends the flow beyond its maximal domain. [F2, step 1.1] ∎
