---
id: prop-cotangent-lift-of-a-vector-field-is-hamiltonian
kind: proposition
title: The cotangent lift of a vector field is Hamiltonian
status: draft
origin: pipeline
deps: ["def-countable-choice", "prop-cotangent-lifts-are-symplectomorphisms", "def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, cotangent-lift exercise, p. 106
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $Y$ be a vector field on $Q$ and let $Y^\#$
be the infinitesimal generator of the inverse-transpose cotangent lifts of its
local flow. Then $Y^\#$ is Hamiltonian for

$$H_Y(q,p)=p(Y_q).$$

## Facts & Assumptions

**Given:** The cotangent lift convention and the canonical form
$\omega_{\mathrm{can}}=-d\lambda$.

[F1] Cotangent lifts preserve $\lambda$ and the canonical symplectic form.
[[prop-cotangent-lifts-are-symplectomorphisms]].

[F2] The library Hamiltonian equation is $\iota_X\omega=dH$.
[[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 In coordinates $Y=Y^i(q)\partial_{q^i}$, differentiation of the inverse-transpose lift gives $Y^\#=Y^i\partial_{q^i}-p_j(\partial_{q^i}Y^j)\partial_{p_i}$. Also $H_Y=p_jY^j$. [F1, given, algebra]

2.1 Contracting with $\omega_{\mathrm{can}}=\sum_i dq^i\wedge dp_i$ gives $\iota_{Y^\#}\omega_{\mathrm{can}}=Y^i dp_i+p_j(\partial_{q^i}Y^j)dq^i=d(p_jY^j)=dH_Y$. By [F2], $Y^\#=X_{H_Y}$. [F2, step 1.1, algebra] ∎
