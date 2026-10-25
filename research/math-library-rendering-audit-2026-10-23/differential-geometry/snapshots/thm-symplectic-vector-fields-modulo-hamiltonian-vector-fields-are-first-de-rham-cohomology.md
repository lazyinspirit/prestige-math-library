---
id: thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology
kind: theorem
title: Symplectic vector fields modulo Hamiltonian vector fields are first de Rham cohomology
status: published
origin: pipeline
deps: ["prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed", "def-hamiltonian-vector-field-and-hamiltonian-function"]
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

There is a natural vector-space isomorphism

$$\mathfrak X_{\mathrm{symp}}(M)/\mathfrak X_{\mathrm{ham}}(M)\cong H^1_{\mathrm{dR}}(M),\qquad [X]\longmapsto[\iota_X\omega].$$

## Facts & Assumptions

**Given:** A symplectic manifold $(M,\omega)$.

[F1] Symplectic fields correspond under $\omega^\flat$ to closed one-forms. [[prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed]].

[F2] Hamiltonian fields correspond under the same map to exact one-forms. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 The linear bundle isomorphism $\omega^\flat$ gives a linear bijection between all vector fields and all one-forms. By [F1] it restricts to a bijection from symplectic fields to closed one-forms. [F1, given]

2.1 By [F2], the inverse image of the exact one-forms is precisely the Hamiltonian fields. Passing to quotients in step 1.1 therefore gives $Z^1/dC^\infty=H^1_{\mathrm{dR}}(M)$ and the displayed natural isomorphism. [F2, step 1.1] ∎
