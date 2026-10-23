---
id: ex-fd-single-mode-pressure
kind: example
title: "Shear mode has zero periodic pressure"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fd-periodic-pressure-recovery
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fd-periodic-pressure-recovery: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
---

## Example

Assume Countable Choice and let $d\in\{2,3\}$, $A\in\mathbb R$, and $u(x)=A\sin(x_2)e_1$ on $Q_d$, where $e_1$ is the first coordinate vector. Then $u$ is smooth and divergence-free, $u\cdot\nabla u=0$, and its unique mean-zero pressure recovered by $Q(u\otimes u)$ is $\pi=0$. This is a verification of the pressure recovery map; it is not asserted to solve an unforced viscous Navier–Stokes equation.

## Example references

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-countable-choice]]: Countable Choice is assumed for the periodic Fourier coefficient and pressure recovery framework.

[F2] [[def-fd-periodic-fourier-sobolev-spaces]]: the torus coordinates have period $2\pi$ and the real Fourier convention is fixed by conjugate-symmetric coefficients.

[F3] [[thm-fd-periodic-pressure-recovery]]: for divergence-free $u\in H^s$, $s>d/2+1$, $Q(u\otimes u)$ is the unique mean-zero pressure satisfying the projected convection identity.

## Verification

**Given:** Countable Choice, $d\in\{2,3\}$, and $u=A\sin(x_2)e_1$.

1.1 The only nonzero component is $u_1=A\sin(x_2)$ and it is independent of $x_1$, so $\operatorname{div}u=\partial_1u_1=0$. Also $u\cdot\nabla u=u_1\partial_1u=0$. The field is a finite Fourier sum and hence belongs to every $H^s(Q_d)$. [given, F2, algebra]

2.1 Choose any $s>d/2+1$. By [F3], the recovered mean-zero pressure gives the decomposition with left side $P(0)=0$ and convection zero, so $\nabla\pi=0$. A periodic distribution with zero gradient has only its zero Fourier mode; mean zero forces that mode to vanish. Thus $\pi=0$. [given, F1, F3, step 1.1, algebra] ∎

