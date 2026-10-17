---
id: ex-emg-observer-static-field
kind: example
title: "Prescribed constant observer fields"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps: [def-emg-geometry-units, def-emg-lorentzian-forms, lem-emg-observer-field-decomposition, lem-emg-lorentz-hodge-calculus, post-emg-covariant-maxwell]
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  post-emg-covariant-maxwell: physical-assumption
physical_scope: "An exact source-free constant electromagnetic two-form on a prescribed flat Minkowski background, with its electric and magnetic components in one observer tetrad. It verifies only the Maxwell subsystem and makes no claim that the nonzero field and flat metric solve the coupled Einstein equation or represent an observation."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §2.4.2, The Electromagnetic Field"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "§2.4.2, equation (2.87), the flat-frame two-form convention used here, with c=1 in the source and SI normalization supplied locally."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, 12 October 2022 revision, full 125-page lecture notes (Internet Archive copy of the author-hosted PDF)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, flat inertial Maxwell equations and curved-spacetime scope; the example's SI constants and component signs are computed under local conventions."
---

## Example

Let $E_0\in\mathbb R$ and $B_0\in\mathbb R$ be constant parameters with units $\mathrm{V\,m^{-1}}$ and tesla, respectively. On $M=\mathbb R^4$ use the flat Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, the time orientation in which $\partial_0$ is future-directed, and the orientation for which $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ is positive. Use coordinates $x^0=ct,x^1,x^2,x^3$ in metres and the future unit observer $n=\partial_0$. Set

$$F:=-\frac{E_0}{c}\,dx^0\wedge dx^1+B_0\,dx^2\wedge dx^3,\qquad j:=0.$$

The covariant components are constant, with $F_{01}=-E_0/c$, $F_{23}=B_0$, and all other independent components zero. The observer electric and magnetic covectors have spatial components $(E_0,0,0)$ and $(B_0,0,0)$, respectively. This is a prescribed-background example of the source-free Maxwell subsystem. It does not assert that the pair $(\eta,F)$ solves the coupled Einstein equation.

## Facts & Assumptions

**Given:** The chosen flat oriented Minkowski four-manifold, its future unit observer $n=\partial_0$, the constant parameters $E_0,B_0$, the smooth two-form $F=-E_0dx^0\wedge dx^1/c+B_0dx^2\wedge dx^3$, the zero current, and the adopted smooth curved-vacuum Maxwell postulate specialized to this flat metric.

[F1] In an oriented orthonormal frame with signature $(-,+,+,+)$, a smooth observer has unit timelike vector $n$, and the observer fields are $E_a=cF_{ab}n^b$ and $B_a=-({\star_\eta F})_{ab}n^b$; the local component convention is $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$. ([[def-emg-geometry-units]], [[lem-emg-observer-field-decomposition]])

[F2] The exterior derivative of a smooth form has the coordinate formula, and the flat metric's Levi-Civita connection has zero Christoffel symbols in these coordinates. ([[lem-emg-lorentz-hodge-calculus]], [[def-emg-lorentzian-forms]])

[F3] In the positively oriented orthonormal coframe, $\star_\eta(dx^0\wedge dx^1)=-dx^2\wedge dx^3$ and $\star_\eta(dx^2\wedge dx^3)=dx^0\wedge dx^1$. ([[lem-emg-lorentz-hodge-calculus]])

[A1] The smooth vacuum model postulates $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ for a smooth field and source. ([[post-emg-covariant-maxwell]])

## Verification

1.1 The vector $n=\partial_0$ has $\eta(n,n)=-1$ and is future-directed, so it is an observer. From $F_{10}=E_0/c$, $F_{20}=F_{30}=0$, the definition in [F1] gives $E=(E_0,0,0)$. By [F3], $\star_\eta F=(E_0/c)dx^2\wedge dx^3+B_0dx^0\wedge dx^1$, so $-({\star_\eta F})_{i0}$ has components $(B_0,0,0)$; hence $B=(B_0,0,0)$. [given, F1, F3, algebra]

2.1 Both coefficients are constant and each coordinate one-form is closed, so the coordinate exterior derivative formula in [F2] gives $dF=0$. Every component $F^{ab}$ is constant, and the flat connection vanishes; therefore $\nabla_aF^{ab}=\partial_aF^{ab}=0=-\mu_0j^b$ for each $b$, since $j=0$. Both adopted Maxwell equations in [A1] hold everywhere on this prescribed background. [given, A1, F2, step 1.1, algebra] ∎
