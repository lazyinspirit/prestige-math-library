---
id: def-gr-fx-scalar-wave-stress
kind: definition
title: "Scalar test-wave stress and multiplier current"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "A mathematical stress tensor and multiplier current for a real test scalar on a fixed Lorentzian background; it is not coupled matter stress-energy and does not evolve the metric."
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-curvature-tensor-and-derived-tensors
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §3.2.2, PDF pp. 29–30"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3–7.4 and 9.1, PDF pp. 94–96 and 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the axiom of countable choice $\mathrm{AC}_\omega$ for the smooth
tangent-bundle conventions. Let $(M,g,N)$ be a time-oriented smooth
Lorentzian four-manifold of signature $(-,+,+,+)$ with metric-selected
connection $\nabla$ and inverse metric $g^{ab}$. Let $U\subseteq M$ be open,
let $\psi\in C^\infty(U,\mathbb R)$ be a real scalar field, and let $X$ be a
smooth vector field on $U$. Define the wave operator
$\Box_g\psi:=g^{ab}\nabla_a\nabla_b\psi$ and the symmetric covariant tensor

$$Q_{ab}[\psi]:=(\nabla_a\psi)(\nabla_b\psi)-\frac12 g_{ab}g^{cd}(\nabla_c\psi)(\nabla_d\psi).$$

Define the multiplier covector by $J^X_a[\psi]:=Q_{ab}[\psi]X^b$. The
associated energy-current vector is $j_X^a[\psi]:=-g^{ab}J^X_b[\psi]$; this
sign convention makes its flux through a future spacelike slice equal to the
density $Q_{ab}n^aX^b$ when $n$ is the future unit normal. The test-wave
equation is $\Box_g\psi=0$ on $U$. These objects are defined on the fixed
background $g$; $Q$ is not automatically an SI matter stress-energy tensor,
is not inserted into an Einstein equation here, and does not evolve $g$.

If $\psi$ is dimensionless and the coordinates have length units, the
components of $Q$ have units of inverse length squared. This dimensional fact
does not identify $Q$ with a physical stress tensor without an independently
specified field normalization and coupling.

## Definition references

[[def-countable-choice]]

[[def-gr-curvature-tensor-and-derived-tensors]]

## Remarks

This $Q_{ab}$ is the stress tensor of a mathematical test scalar on a fixed
background. It is not identified with the physical Einstein-matter tensor.
The page supplies no gauge-invariant Regge–Wheeler, Zerilli, or Teukolsky
master variables, no reconstruction theorem, and no mode exclusions or
gravitational boundary conditions. Those definitions and reductions remain
prerequisites for any theorem about linear gravitational perturbations. A
scalar-wave estimate here is not a gravitational or nonlinear Kerr stability
result.
