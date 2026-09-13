---
id: ex-legendre-transform-of-a-natural-mechanical-lagrangian
kind: example
title: Legendre transform of a natural mechanical Lagrangian
status: published
origin: pipeline
deps: ["prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, Legendre transform, pp. 114--116
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

For a supplied Riemannian metric $g$ and smooth potential $V$,

$$L(q,v)=\frac12g_q(v,v)-V(q)$$

has $p=g_q^\flat(v)$, inverse velocity $v=g_q^\sharp(p)$, and Hamiltonian
$H(q,p)=\frac12g_q^{-1}(p,p)+V(q)$.

## Facts & Assumptions

**Given:** The displayed natural Lagrangian.

[F1] The general natural-mechanical calculation gives hyperregularity,
the Legendre map, and the kinetic-plus-potential Hamiltonian.
[[prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian]].

## Verification

**Proof technique:** direct.

1.1 Differentiating $L(q,v+sw)$ at $s=0$ gives $g_q(v,w)$, so its fibre derivative is $p=g_q^\flat(v)$. Positive definiteness makes $g_q^\flat$ invertible, with inverse $g_q^\sharp$, and [F1] gives hyperregularity. [F1, given, algebra]

2.1 The energy is $p(v)-L=g(v,v)-\frac12g(v,v)+V=\frac12g(v,v)+V$. Substituting $v=g^\sharp p$ gives $H(q,p)=\frac12g^{-1}(p,p)+V(q)$, as asserted. [F1, step 1.1, algebra] ∎
