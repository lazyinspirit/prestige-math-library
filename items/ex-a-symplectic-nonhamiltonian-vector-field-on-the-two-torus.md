---
id: ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus
kind: example
title: A symplectic non-Hamiltonian vector field on the two-torus
status: published
origin: pipeline
deps: ["prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed", "thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, example on p. 106
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

On $T^2=\mathbb R^2/\mathbb Z^2$ with
$\omega=dx\wedge dy$, the vector field $X=\partial_x$ is symplectic but is
not Hamiltonian.

## Facts & Assumptions

**Given:** The standard quotient coordinates, so $dx$ and $dy$ descend to global one-forms.

[F1] A vector field is symplectic exactly when its contraction with $\omega$ is closed. [[prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed]].

[F2] A symplectic field is Hamiltonian exactly when the cohomology class of its contraction with $\omega$ vanishes. [[thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology]].

## Verification

**Proof technique:** direct.

1.1 Contraction gives $\iota_X\omega=dy$, which is closed; hence [F1] shows that $X$ is symplectic. [F1, given, algebra]

2.1 On the closed loop $\gamma(t)=[(0,t)]$, $0\le t\le1$, one has $\int_\gamma dy=1$. Every exact one-form has zero integral around a closed curve by the fundamental theorem of calculus, so $dy$ is not exact. Its class is nonzero, and [F2] proves that $X$ is not Hamiltonian. [F2, step 1.1, algebra] ∎
