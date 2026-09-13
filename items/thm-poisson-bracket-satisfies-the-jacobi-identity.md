---
id: thm-poisson-bracket-satisfies-the-jacobi-identity
kind: theorem
title: The Poisson bracket satisfies the Jacobi identity
status: draft
origin: pipeline
deps: ["prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry", "thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Theorem 18.6, p. 109
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For all $F,G,H\in C^\infty(M)$,

$$\{F,\{G,H\}\}+\{G,\{H,F\}\}+\{H,\{F,G\}\}=0.$$

## Facts & Assumptions

**Given:** Three smooth functions on a symplectic manifold.

[F1] The bracket is skew and
$[X_F,X_G]=-X_{\{F,G\}}$.
[[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]],
[[thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism]].

## Proof

**Proof technique:** direct.

1.1 Expand $0=d\omega(X_F,X_G,X_H)$. Replacing derivatives by $X_A(B)=\{B,A\}$ and commutators by [F1], the six terms combine in equal pairs to $$0=2\bigl(\{\{G,H\},F\}+\{\{H,F\},G\}+\{\{F,G\},H\}\bigr).$$ This is a pointwise identity, not merely a statement that its differential vanishes. [F1, given, algebra]

2.1 Divide by two and use skew-symmetry on each outer bracket. The result is the displayed Jacobi identity. [F1, step 1.1, algebra] ∎
