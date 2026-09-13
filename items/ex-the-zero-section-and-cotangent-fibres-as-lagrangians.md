---
id: ex-the-zero-section-and-cotangent-fibres-as-lagrangians
kind: example
title: The zero section and cotangent fibres as Lagrangians
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-the-canonical-cotangent-two-form-is-symplectic", "thm-equivalent-characterizations-of-lagrangian-subspaces", "def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 2, cotangent examples, pp. 16--18
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. In $(T^*Q,\omega_{\mathrm{can}})$, both the
zero section and every cotangent fibre $T_q^*Q$ are Lagrangian.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $Q$ and its canonical cotangent form.

[F1] In cotangent coordinates,
$\omega_{\mathrm{can}}=\sum_i dq^i\wedge dp_i$.
[[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F2] In a $2n$-dimensional symplectic vector space a subspace is Lagrangian
exactly when it is isotropic and of dimension $n$, and a submanifold is
Lagrangian exactly when its tangent spaces are Lagrangian subspaces.
[[thm-equivalent-characterizations-of-lagrangian-subspaces]],
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

## Verification

**Proof technique:** direct.

1.1 On the zero section every $p_i$ is constant zero, so the pullback of [F1] vanishes. On the fibre over fixed $q$, every $q^i$ is constant, so the restriction again vanishes. Both submanifolds are therefore isotropic. [F1, given]

2.1 Each has dimension $n$, while $T^*Q$ has dimension $2n$. By [F2], both are Lagrangian, including the rank-zero case. [F2, step 1.1] ∎
