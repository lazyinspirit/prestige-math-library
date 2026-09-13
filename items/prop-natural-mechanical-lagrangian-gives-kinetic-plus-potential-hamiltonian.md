---
id: prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian
kind: proposition
title: A natural mechanical Lagrangian gives the kinetic-plus-potential Hamiltonian
status: draft
origin: pipeline
deps: ["def-energy-and-hamiltonian-of-a-hyperregular-lagrangian"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lectures 18--19, mechanical Hamiltonians and Legendre transform, pp. 107 and 114--116
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For a Riemannian metric $g$ and potential $V$, the natural Lagrangian

$$L(q,v)=\tfrac12g_q(v,v)-V(q)$$

is hyperregular, with $\mathbb FL=g^\flat$, and its Hamiltonian is

$$H(q,p)=\tfrac12g_q^{-1}(p,p)+V(q).$$

## Facts & Assumptions

**Given:** A smooth Riemannian metric $g$ and smooth potential $V$.

[F1] For hyperregular $L$, $E_L=p(v)-L$ and
$H=E_L\circ(\mathbb FL)^{-1}$.
[[def-energy-and-hamiltonian-of-a-hyperregular-lagrangian]].

## Proof

**Proof technique:** direct.

1.1 Fibre differentiation gives $\mathbb FL(q,v)=g_q(v,\cdot)=g^\flat_q(v)$. Positive definiteness makes $g^\flat$ a smooth bundle isomorphism with inverse $g^\sharp$, so $L$ is hyperregular. [given, algebra]

2.1 With $p=g^\flat v$, [F1] gives $E_L=g(v,v)-\frac12g(v,v)+V=\frac12g(v,v)+V$. Substituting $v=g^\sharp p$ yields $H(q,p)=\frac12g^{-1}(p,p)+V(q)$. [F1, step 1.1, algebra] ∎
