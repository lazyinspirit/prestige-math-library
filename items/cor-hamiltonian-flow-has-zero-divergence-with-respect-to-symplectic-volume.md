---
id: cor-hamiltonian-flow-has-zero-divergence-with-respect-to-symplectic-volume
kind: corollary
title: Hamiltonian flow has zero divergence with respect to symplectic volume
status: published
origin: pipeline
deps: ["thm-liouville-volume-preservation", "def-divergence-relative-to-a-volume-form"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Hamiltonian-flow invariance, p. 105
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

Every Hamiltonian vector field $X_H$ has zero divergence with respect to the
symplectic volume $\Omega=\omega^n/n!$.

## Facts & Assumptions

**Given:** A Hamiltonian vector field on a symplectic manifold.

[F1] Its local flow preserves $\Omega$.
[[thm-liouville-volume-preservation]].

[F2] Divergence relative to $\Omega$ is defined by
$\mathcal L_X\Omega=(\operatorname{div}_\Omega X)\Omega$.
[[def-divergence-relative-to-a-volume-form]].

## Proof

**Proof technique:** direct.

1.1 Differentiate the identity $\phi_t^*\Omega=\Omega$ from [F1] at $t=0$ to obtain $\mathcal L_{X_H}\Omega=0$. [F1, given]

2.1 By [F2], $(\operatorname{div}_\Omega X_H)\Omega=0$. Since $\Omega$ is nowhere zero, the divergence function vanishes. [F2, step 1.1] ∎
