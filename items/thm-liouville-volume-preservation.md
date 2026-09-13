---
id: thm-liouville-volume-preservation
kind: theorem
title: Liouville volume preservation
status: draft
origin: pipeline
deps: ["cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form", "thm-hamiltonian-flows-preserve-the-symplectic-form"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Hamiltonian-flow invariance, p. 105
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

On a $2n$-dimensional symplectic manifold, every Hamiltonian local flow
preserves the Liouville volume form $\Omega=\omega^n/n!$.

## Facts & Assumptions

**Given:** A Hamiltonian vector field and its local flow $\phi_t$.

[F1] The symplectic volume is $\Omega=\omega^n/n!$.
[[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]].

[F2] Hamiltonian local flows satisfy $\phi_t^*\omega=\omega$.
[[thm-hamiltonian-flows-preserve-the-symplectic-form]].

## Proof

**Proof technique:** direct.

1.1 Pullback respects wedges and scalar multiplication, so [F2] gives $\phi_t^*\Omega=(\phi_t^*\omega)^n/n!=\omega^n/n!$. [F1, F2, given]

2.1 Thus $\phi_t^*\Omega=\Omega$ wherever the local flow exists. This is volume preservation, with no completeness conclusion. [F1, step 1.1] ∎
