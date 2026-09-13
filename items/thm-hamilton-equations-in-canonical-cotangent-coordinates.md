---
id: thm-hamilton-equations-in-canonical-cotangent-coordinates
kind: theorem
title: Hamilton equations in canonical cotangent coordinates
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-the-canonical-cotangent-two-form-is-symplectic", "def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.2, p. 107
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

Assume $\mathrm{AC}_\omega$. In canonical coordinates on $T^*Q$, an integral
curve $(q(t),p(t))$ of $X_H$ satisfies

$$\dot q^i=\frac{\partial H}{\partial p_i},\qquad \dot p_i=-\frac{\partial H}{\partial q^i}.$$

## Facts & Assumptions

**Given:** The cotangent convention
$\omega=\sum_i dq^i\wedge dp_i$ and $\iota_{X_H}\omega=dH$.

[F1] The canonical cotangent form has the displayed coordinate expression.
[[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F2] The Hamiltonian vector field satisfies $\iota_{X_H}\omega=dH$.
[[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 Write $X_H=\sum_i(a^i\partial_{q^i}+b_i\partial_{p_i})$. Then [F1] gives $\iota_{X_H}\omega=\sum_i(a^i dp_i-b_i dq^i)$. [F1, given, algebra]

2.1 Comparing with $dH=\sum_i(H_{q^i}dq^i+H_{p_i}dp_i)$ in [F2] gives $a^i=H_{p_i}$ and $b_i=-H_{q^i}$. Since an integral curve has velocity $X_H$, these are Hamilton's equations. [F2, step 1.1] ∎
