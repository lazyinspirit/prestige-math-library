---
id: def-fd-incompressible-euler-system
kind: definition
title: "Formal constant-density incompressible Euler system"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "A classical pointwise mathematical definition of the three-dimensional constant-density inviscid incompressible Euler equations and their pressure-only formal stress; it asserts neither physical applicability nor existence of solutions."
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.4, printed pp. 120–123, ideal incompressible potential flow and Euler pressure; notation and regularity are aligned with the formal system in def-fd-x00."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 1: Introduction and Inviscid Flows"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
      locator: "§§2.3.2–2.3.3, printed pp. 35–42, irrotational incompressible flow and ideal pressure; this item states only the formal mathematical system."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open time interval, let $\Omega\subseteq\mathbb R^3$ be a nonempty open set of Cartesian coordinates, and fix a constant density $\rho_0>0$. Let $u:I\times\Omega\to\mathbb R^3$ have continuous first time derivatives, first spatial derivatives, and second spatial derivatives, and let $p:I\times\Omega\to\mathbb R$ have continuous first spatial derivatives. The formal constant-density incompressible Euler system is the pointwise system

$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p=0,\qquad \operatorname{div}u=0.$$

Use the Cartesian derivative conventions $\nabla f=(\partial_i f)_{i=1}^3$, $\operatorname{div}u=\sum_i\partial_i u_i$, and $(u\cdot\nabla)u=\sum_j u_j\partial_j u$. The velocity has continuous first time, first spatial, and second spatial derivatives, and pressure has continuous first spatial derivatives. For this inviscid branch define the formal pressure stress by $\sigma_E=-pI_3$. For each fixed $t\in I$, set $p^{[t]}(x)=p(t,x)$ and $\sigma_E^{[t]}(x)=-p^{[t]}(x)I_3$. On a compact oriented regular surface patch $S\subset\Omega$ with unit normal $n_S$, define its formal stress resultant at time $t$ to be $\int_S\sigma_E^{[t]}n_S\,dS=-\int_Sp^{[t]} n_S\,dS$. For time-independent fields the resultant is independent of $t$, and the section superscripts may be omitted. A steady solution has $\partial_tu=0$. These definitions impose no boundary condition, assert no solution existence, and do not claim that the system describes an observed fluid.

## Definition references

Formal fluid derivative conventions and regularity: [[def-fd-x00]].

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.4](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 1, §§2.3.2–2.3.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)
