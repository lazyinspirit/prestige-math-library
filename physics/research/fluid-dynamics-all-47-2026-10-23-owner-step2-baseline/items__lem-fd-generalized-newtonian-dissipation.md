---
id: lem-fd-generalized-newtonian-dissipation
kind: lemma
title: "Objective generalized-Newtonian dissipation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-fd-nonnewtonian-laws
  - lem-fd-observer-calculus
dependency_roles:
  def-fd-nonnewtonian-laws: mathematical-premise
  lem-fd-observer-calculus: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.5.15 and 6.6.1–6.6.2.3"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
    - title: "MIT OpenCourseWare, Lecture Notes on Fluid Dynamics (1.63J/2.21J), §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
verification:
  precheck: pending
---

## Statement

Let $u$ be the $C^1$ Eulerian velocity induced by a $C^2$ incompressible motion in Euclidean three-space, and set $L=\nabla u$, $D=(L+L^{\mathsf T})/2$, and $\dot\gamma=(2D:D)^{1/2}$. Here incompressibility means $\operatorname{div}u=\operatorname{tr}L=0$. For any finite continuous viscosity $\eta:[0,\infty)\to[0,\infty)$ and the stress law $\tau=2\eta(\dot\gamma)D$, one has $\tau:D\ge0$. Under a $C^2$ rigid change of observer $x^*=Q(t)x+c(t)$, where $Q(t)\in SO(3)$, the transformed rate of strain is $D^*=QDQ^{\mathsf T}$, so the transformed stress is $\tau^*=Q\tau Q^{\mathsf T}$.

For the Carreau formula $\eta_C=\eta_\infty+(\eta_0-\eta_\infty)(1+(\lambda\dot\gamma)^2)^{(n-1)/2}$, assume $\eta_0\ge\eta_\infty\ge0$, $\lambda\ge0$, and $n>0$. It is finite and nonnegative for every finite $\dot\gamma$. If $\lambda>0$ and $\eta_0>\eta_\infty$, it decreases to $\eta_\infty$ for $0<n<1$, is the constant $\eta_0$ for $n=1$, and increases without bound for $n>1$; if $\lambda=0$ or $\eta_0=\eta_\infty$, it is constant. For the regularized power formula $\eta_R=m(\varepsilon^2+\dot\gamma^2)^{(n-1)/2}$, assume $m>0$, $\varepsilon>0$, and $n>0$; it is finite and strictly positive for every finite $\dot\gamma$. For the unregularized power stress $\tau=2m\dot\gamma^{n-1}D$ at $\dot\gamma>0$, with $m>0,n>0$, the extension $\tau=0$ at $D=0$ is continuous, even though the viscosity diverges there when $0<n<1$.

The dimensions are $[D]=[\dot\gamma]=[\varepsilon]=\mathrm{s}^{-1}$, $[\eta]=[\eta_0]=[\eta_\infty]=[\eta_R]=[\eta_U]=\mathrm{Pa\,s}$, $[\lambda]=\mathrm{s}$, $[m]=\mathrm{Pa\,s^n}$, and $[\tau]=\mathrm{Pa}$; $n$ is dimensionless.

## Statement references

[[def-fd-nonnewtonian-laws|constitutive formulas and units]].

[[lem-fd-observer-calculus|rigid-observer transformation of the velocity gradient and rate of strain]].

[Reddy, An Introduction to Continuum Mechanics, Chapter 6](https://courses.washington.edu/mengr503/Chapter_6.pdf).

[MIT OpenCourseWare, Lecture Notes on Fluid Dynamics, §1.6.2](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf).

## Facts & Assumptions

**Given:** The incompressible smooth-motion kinematics, the finite nonnegative continuous viscosity, and the constitutive formulas and parameter ranges in the Statement.

[A1] [[def-fd-nonnewtonian-laws]]: $D=(L+L^{\mathsf T})/2$, $\dot\gamma=(2D:D)^{1/2}$, $\tau=2\eta(\dot\gamma)D$, and the displayed Carreau and regularized or unregularized power parameter conventions.

[F1] [[lem-fd-observer-calculus]]: for $Q,c\in C^2$, $Q(t)\in SO(3)$, and corresponding points under $x^*=Qx+c$, the transformed fields satisfy $L^*=QLQ^{\mathsf T}+Q'Q^{\mathsf T}$ and $D^*=QDQ^{\mathsf T}$.

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 If $D\ne0$, then $\tau:D=2\eta(\dot\gamma)(D:D)=\eta(\dot\gamma)\dot\gamma^2\ge0$; if $D=0$, then $\tau=0$ and the contraction is $0$. [given, A1, algebra]

1.2 For finite $\dot\gamma$, the Carreau base $1+(\lambda\dot\gamma)^2$ is at least $1$, hence every real power appearing in $\eta_C$ is finite and positive; the parameter inequalities make both summands nonnegative. [given, A1, algebra]

1.3 Since $\varepsilon^2+\dot\gamma^2>0$ and is finite, its real power is finite and positive; multiplication by $m>0$ proves the regularized viscosity claim. For $\dot\gamma>0$, the unregularized law has $|\tau|=2m\dot\gamma^{n-1}|D|=\sqrt2m\dot\gamma^n\to0$ as $\dot\gamma\downarrow0$, proving continuity of its zero extension, while $\dot\gamma^{n-1}\to+\infty$ when $0<n<1$. [given, A1, algebra]

2.1 If $\lambda>0$, the base $1+(\lambda\dot\gamma)^2$ increases from $1$ to $+\infty$ as $\dot\gamma$ runs from $0$ to $+\infty$; its exponent $(n-1)/2$ is negative for $0<n<1$, zero for $n=1$, and positive for $n>1$. Thus the factor decreases to $0$, is constantly $1$, or increases without bound, respectively. Since $\eta_0-\eta_\infty>0$, adding $\eta_\infty$ gives the three stated limits and monotonicities. If $\lambda=0$ or $\eta_0=\eta_\infty$, direct substitution gives a constant. [given, A1, step 1.2, algebra]

3.1 By [F1], $D^*=QDQ^{\mathsf T}$. Orthogonality gives $(QDQ^{\mathsf T})^{\mathsf T}(QDQ^{\mathsf T})=QD^{\mathsf T}DQ^{\mathsf T}$, so cyclicity of the finite matrix trace yields $D^*:D^*=\operatorname{tr}(QD^{\mathsf T}DQ^{\mathsf T})=\operatorname{tr}(D^{\mathsf T}DQ^{\mathsf T}Q)=D:D$. Thus $\dot\gamma^*=\dot\gamma$. Consequently $\tau^*=2\eta(\dot\gamma^*)D^*=Q(2\eta(\dot\gamma)D)Q^{\mathsf T}=Q\tau Q^{\mathsf T}$; the zero-rate extension obeys the same identity. [F1, A1, algebra] ∎

