---
id: def-gts-lagrangian-chord-cappings-and-action
kind: definition
title: Capped Lagrangian Hamiltonian chords and action
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-lagrangian-intersection-and-hamiltonian-chord-data
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-lagrangian-intersection-and-hamiltonian-chord-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: Section 1.1, printed p. 3, periodic-loop Hamiltonian sign and action context only; the source uses iota_X omega = dH. The local convention iota_X omega = -dH is the opposite convention, translated by H to -H. No Lagrangian path-space theorem is attributed to Section 1.2, which concerns monotonicity.
    - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary conditions
      url: https://arxiv.org/pdf/1403.6139v2
      locator: §1.1, printed p. 2, symplectic area and boundary convention
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(X,\omega)$ be symplectic and let $L_0,L_1\subset X$ be compact Lagrangians. Fix a connected component $\mathcal P$ of the smooth path space of paths $x:[0,1]\to X$ with $x(0)\in L_0$ and $x(1)\in L_1$, together with one reference path $x_*$. A capping of $x\in\mathcal P$ is a smooth homotopy $w:[0,1]_s\times[0,1]_t\to X$ from $x_*$ to $x$ such that $w(s,0)\in L_0$ and $w(s,1)\in L_1$. Capping classes retain the relative homotopy class of this homotopy; gluing two caps with opposite orientations gives the corresponding relative two-cycle. A capped chord is a Hamiltonian chord together with such a capping class.

For a smooth Hamiltonian $H:[0,1]\times X\to\mathbb R$ use $\iota_{X_{H_t}}\omega=-dH_t$. On the capping cover define
$$\mathcal A_H([x,w])=\int_0^1 H_t(x(t))\,dt-\int_{[0,1]^2}w^*\omega.$$
Changing the reference path changes this action by a constant on the component, and changing the capping changes it by the negative symplectic area of the glued relative two-cycle. The action differential on path space is
$$d\mathcal A_H(x)[\xi]=-\int_0^1\omega\bigl(\xi(t),\dot x(t)-X_{H_t}(x(t))\bigr)\,dt,$$
for variations with $\xi(0)\in T_{x(0)}L_0$ and $\xi(1)\in T_{x(1)}L_1$. To obtain this formula, vary the cap with boundary variation $\xi$ at $s=1$. Stokes' formula gives the area variation $\int_0^1\omega(\xi,\dot x)\,dt$: the reference-path edge is fixed, and each remaining boundary term pairs two tangent vectors to one of the Lagrangians, so vanishes. The Hamiltonian term varies by $\int_0^1dH_t(\xi)\,dt=\int_0^1\omega(\xi,X_{H_t})\,dt$ under $\iota_{X_{H_t}}\omega=-dH_t$. Subtracting the area variation gives the displayed differential. This is an action and capping interface; it asserts no compactness theorem or existence of a Floer differential.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-lagrangian-intersection-and-hamiltonian-chord-data]]
