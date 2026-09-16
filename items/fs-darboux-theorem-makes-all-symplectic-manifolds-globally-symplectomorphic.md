---
id: fs-darboux-theorem-makes-all-symplectic-manifolds-globally-symplectomorphic
kind: false-statement
title: Darboux theorem makes all symplectic manifolds globally symplectomorphic
status: published
origin: pipeline
deps: ["thm-darboux-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 8, Theorem 8.1 and its local consequence, p. 47
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Darboux's theorem makes all equidimensional symplectic manifolds globally
symplectomorphic.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the proposed consequence of Darboux's theorem.

[F1] Darboux's theorem supplies coordinates only on a neighbourhood of each chosen point. [[thm-darboux-theorem]].

## Refutation

**Proof technique:** direct.

1.1 The standard area forms make both $S^2$ and $\mathbb R^2$ two-dimensional symplectic manifolds, so [F1] does identify small neighbourhoods of their points. [F1]

2.1 A global symplectomorphism would in particular be a diffeomorphism, but $S^2$ is compact and $\mathbb R^2$ is not; homeomorphisms preserve compactness. Hence no global symplectomorphism exists, and the local conclusion cannot be globalized. [step 1.1] ∎
