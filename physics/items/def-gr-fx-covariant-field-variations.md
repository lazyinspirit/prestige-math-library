---
id: def-gr-fx-covariant-field-variations
kind: definition
title: Covariant field families and variations
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-smooth-fibre-bundle-and-local-trivialization
  - def-c-r-and-smooth-maps-between-smooth-manifolds
dependency_roles:
  def-smooth-fibre-bundle-and-local-trivialization: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1, Field fibration and symplectic structure"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §2.2"
      url: "https://arxiv.org/pdf/1906.08616"
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §§2–3"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $M$ be a smooth four-manifold and let $\pi:E\to M$ be a smooth fibre
bundle. A **field configuration** is a smooth section $\phi:M\to E$, so
$\pi\circ\phi=\operatorname{id}_M$. For a finite-dimensional smooth manifold
$P$, a **smooth field family** is a smooth map
$\Phi:P\times M\to E$ with $\pi(\Phi(p,x))=x$ for all $(p,x)$; it gives
configurations $\phi_p(x)=\Phi(p,x)$. For $u\in T_pP$, the **variation**
$\delta_u\phi_p$ at $x$ is the tangent vector
$d(r\mapsto\Phi(c(r),x))|_{r=0}$, where $c(0)=p$ and $c'(0)=u$. In a local
fibre chart this is the ordinary derivative of the field components with
respect to the parameter. For commuting parameter coordinates $s_1,s_2$,
$\delta_i\phi=\partial_{s_i}\phi$ and
$\delta_1\delta_2\phi=\delta_2\delta_1\phi$.

## Definition references

[Smooth fibre bundles and local trivializations](https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf)

[Smooth maps between manifolds](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf)

[[def-smooth-fibre-bundle-and-local-trivialization]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

## Remarks

The parameter manifold is finite-dimensional. This definition does not assume
that the full space of field configurations or its solution subset has a
global infinite-dimensional manifold structure.
