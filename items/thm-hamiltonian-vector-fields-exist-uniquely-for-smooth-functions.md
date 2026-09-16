---
id: thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions
kind: theorem
title: Hamiltonian vector fields exist uniquely for smooth functions
status: published
origin: pipeline
deps: ["def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, opening of §18.1, p. 105
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

For every $H\in C^\infty(M)$ on a symplectic manifold $(M,\omega)$, there is
a unique smooth vector field $X_H$ satisfying $\iota_{X_H}\omega=dH$.

## Facts & Assumptions

**Given:** A smooth function $H$ on $(M,\omega)$.

[F1] The defining equation for $X_H$ is $\omega^\flat(X_H)=dH$. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 Nondegeneracy says that $\omega^\flat:TM\to T^*M$ is a fibrewise linear isomorphism, and its local matrix and inverse are smooth. [given]

2.1 Thus $X_H=(\omega^\flat)^{-1}(dH)$ is smooth, satisfies [F1], and is the only possible solution because $\omega^\flat$ is injective. [F1, step 1.1] ∎
