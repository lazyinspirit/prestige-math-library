---
id: prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed
kind: proposition
title: A graph of a one-form is Lagrangian exactly when the form is closed
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-the-canonical-cotangent-two-form-is-symplectic", "def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds", "thm-equivalent-characterizations-of-lagrangian-subspaces", "thm-the-exterior-derivative-commutes-with-pullback"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.4, Proposition 3.24, pp. 39--40
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

Assume $\mathrm{AC}_\omega$. For $\alpha\in\Omega^1(Q)$, its graph
$s_\alpha(Q)\subset(T^*Q,-d\lambda)$ is Lagrangian if and only if
$d\alpha=0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth $n$-manifold $Q$, and
$\alpha\in\Omega^1(Q)$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] The canonical form on $T^*Q$ is $\omega_{\mathrm{can}}=-d\lambda$.
[[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F2] A submanifold is Lagrangian when its tangent spaces are Lagrangian.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

[F3] An isotropic half-dimensional subspace is Lagrangian.
[[thm-equivalent-characterizations-of-lagrangian-subspaces]].

[F4] Exterior differentiation commutes with pullback.
[[thm-the-exterior-derivative-commutes-with-pullback]].

## Proof

**Proof technique:** direct.

1.1 Since $\pi\circ s_\alpha=\operatorname{id}_Q$, the tautological formula gives $s_\alpha^*\lambda=\alpha$. Therefore [F1] and [F4] give $s_\alpha^*\omega_{\mathrm{can}}=-d\alpha$. [F1, F4, algebra]

2.1 The graph section is an embedding and its image has dimension $n$, half of $\dim T^*Q=2n$. By [F2]--[F3], it is Lagrangian exactly when the pulled-back symplectic form vanishes. Step 1.1 says this occurs exactly when $d\alpha=0$, proving both directions, including $n=0$. [A1, F2, F3, step 1.1] ∎
