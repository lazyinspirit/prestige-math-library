---
id: def-energy-and-hamiltonian-of-a-hyperregular-lagrangian
kind: definition
title: Energy and Hamiltonian of a hyperregular Lagrangian
status: draft
origin: pipeline
deps: ["def-regular-and-hyperregular-lagrangian"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, energy and Hamiltonian, pp. 114--116
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

The **energy** of a Lagrangian $L$ is

$$E_L(q,v)=\mathbb FL(q,v)(v)-L(q,v).$$

If $L$ is hyperregular, its associated **Hamiltonian** on $T^*Q$ is

$$H=E_L\circ(\mathbb FL)^{-1}.$$

Equivalently, if $p=\partial L/\partial v$ and $v=v(q,p)$ is the smooth
inverse Legendre relation, then $H(q,p)=p_i v^i-L(q,v)$. Hyperregularity is
what makes this a globally defined smooth function.
