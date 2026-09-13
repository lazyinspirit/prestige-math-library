---
id: thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket
kind: theorem
title: Hamiltonian flows commute iff their Hamiltonians Poisson commute up to locally constant bracket
status: draft
origin: pipeline
deps: ["thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism", "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute", "prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Proposition 18.3 and §18.4, pp. 108--110
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

The local flows of $X_F$ and $X_G$ commute wherever both composites are
defined if and only if $\{F,G\}$ is locally constant. In particular,
$\{F,G\}=0$ is sufficient.

## Facts & Assumptions

**Given:** Smooth functions $F,G$ on a symplectic manifold.

[F1] $[X_F,X_G]=-X_{\{F,G\}}$.
[[thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism]].

[F2] Two vector fields have commuting local flows exactly when their Lie
bracket vanishes.
[[thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute]].

[F3] The zero field has precisely the locally constant Hamiltonians.
[[prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function]].

## Proof

**Proof technique:** direct.

1.1 By [F2], the flows commute exactly when $[X_F,X_G]=0$. By [F1], this is equivalent to $X_{\{F,G\}}=0$. [F1, F2, given]

2.1 By [F3], the latter condition holds exactly when $\{F,G\}$ is locally constant. The zero bracket is one such function. [F3, step 1.1] ∎
