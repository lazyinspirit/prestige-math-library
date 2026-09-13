---
id: fs-every-symplectic-vector-field-has-a-global-hamiltonian-function
kind: false-statement
title: Every symplectic vector field has a global Hamiltonian function
status: published
origin: pipeline
deps: ["thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, torus example, p. 106
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

Every symplectic vector field has a global Hamiltonian function.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] The obstruction quotient is $H^1_{\mathrm{dR}}(M)$.
[[thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology]].

## Refutation

**Proof technique:** direct.

1.1 On $T^2=(\mathbb R/\mathbb Z)^2$ with $\omega=d\theta_1\wedge d\theta_2$, the field $X=\partial_{\theta_1}$ satisfies $\iota_X\omega=d\theta_2$, a closed form, so it is symplectic. [F1, algebra]

2.1 The form $d\theta_2$ integrates to one around the second coordinate circle, so it is not exact. Hence [F1] says $X$ is not Hamiltonian, refuting the claim. [F1, step 1.1] ∎
