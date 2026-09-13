---
id: prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed
kind: proposition
title: A vector field is symplectic iff $\iota_X\omega$ is closed
status: published
origin: pipeline
deps: ["def-symplectic-vector-field", "thm-cartans-magic-formula"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, p. 106
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

A vector field $X$ on $(M,\omega)$ is symplectic if and only if the one-form
$\iota_X\omega$ is closed.

## Facts & Assumptions

**Given:** A vector field $X$ on a symplectic manifold $(M,\omega)$.

[F1] Symplectic means $\mathcal L_X\omega=0$.
[[def-symplectic-vector-field]].

[F2] Cartan's formula is
$\mathcal L_X\omega=d(\iota_X\omega)+\iota_Xd\omega$.
[[thm-cartans-magic-formula]].

## Proof

**Proof technique:** direct.

1.1 Since $d\omega=0$, [F2] reduces to $\mathcal L_X\omega=d(\iota_X\omega)$. [F2, given]

2.1 Therefore the left side vanishes exactly when $\iota_X\omega$ is closed, which is precisely the equivalence in [F1]. [F1, step 1.1] ∎
