---
id: thm-fd-shallow-water-smooth-energy
kind: theorem
title: Smooth rotating shallow-water energy balance
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-rotating-stratified-shallow-equations
dependency_roles:
  def-fd-rotating-stratified-shallow-equations: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §2.4.2, equations (2.55)–(2.59)"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Darryl D. Holm, Ideal shallow water dynamics in a rotating frame, Imperial College London MPE CDT PDE lecture notes, Autumn 2016, §§1.1 and 1.4, equations (1.1) and (1.14)"
      url: "https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf"
    - title: "Paola Rizzoli, Wave Motion in the Ocean and the Atmosphere, MIT OpenCourseWare 12.802, Lecture 12: Shallow water equations with rotation — Poincaré waves, Spring 2008"
      url: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf"
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open time interval and use $\mathbb T^2=\mathbb R^2/(2\pi\mathbb Z)^2$ with Lebesgue measure on $Q_2=[0,2\pi]^2$. Let $h:I\times\mathbb T^2\to(0,\infty)$ and $v:I\times\mathbb T^2\to\mathbb R^2$ be continuously differentiable in time and space with continuous second spatial derivatives and $2\pi$-periodic lifts. Suppose they satisfy the one-layer rotating shallow-water equations with constant $f\in\mathbb R$, constant $g>0$, fixed flat bottom, and no friction:

$$h_t+\nabla\cdot(hv)=0,\qquad (hv)_t+\nabla\cdot(hv\otimes v)+\nabla\!\left(\frac{g h^2}{2}\right)+f h Jv=0,$$

where $J(v_1,v_2)=(-v_2,v_1)$. Define the normalized energy density per horizontal area by $E:=h|v|^2/2+gh^2/2$; it is per unit reference density, so a specified constant density converts its area integral to joules. Then the pointwise energy flux identity is

$$\partial_t E+\nabla\cdot\left(\left(E+\frac{gh^2}{2}\right)v\right)=0.$$

Consequently, for every $t_0<t_1$ in $I$,

$$\int_{Q_2}E(t_1,x)\,dx=\int_{Q_2}E(t_0,x)\,dx.$$

This is an exact smooth identity for the stated adopted equation system, not an aspect-ratio or hydrostatic-error estimate and not a positivity guarantee for an arbitrary discretization. Bottom topography, wetting/drying, bottom friction, or multiple layers require separately defined systems and their corresponding energy terms.

## Statement references

Equation family and conventions: [[def-fd-rotating-stratified-shallow-equations]].

Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, §2.4.2, pp. 38–39: [full lecture notes, PDF](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).

Darryl D. Holm, *Ideal shallow water dynamics in a rotating frame*, §§1.1 and 1.4, pp. 3–6: [full lecture notes, PDF](https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf).

Paola Rizzoli, MIT OpenCourseWare 12.802, Lecture 12, pp. 1–4: [full lecture notes, PDF](https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf).

## Facts & Assumptions

**Given:** $h>0$ and $h,v$ are classical and $2\pi$-periodic in space; $f\in\mathbb R$ and $g>0$ are constant; the flat-bottom, inviscid equations in the statement hold pointwise.

[F1] [[def-fd-rotating-stratified-shallow-equations]]: the shallow-water branch is $h_t+\nabla\cdot(hv)=0$ and $(hv)_t+\nabla\cdot(hv\otimes v)+\nabla(gh^2/2)+fhJv=0$, with $h>0$, $g>0$, and $f\in\mathbb R$ constant.

[F2] [[def-fd-rotating-stratified-shallow-equations]]: for scalar $q$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q)$; for vector $w$, $\nabla\cdot w=\sum_j\partial_{x_j}w_j$; for a matrix $A$, $(\nabla\cdot A)_i=\sum_j\partial_{x_j}A_{ij}$; and $J(v_1,v_2)=(-v_2,v_1)$.

[A1] The fields have continuous derivatives through the orders appearing below; division by $h$ is valid because $h>0$.

## Proof

1.1 Write $D_t:=\partial_t+v\cdot\nabla$. By the product rule and the component conventions in [F2], the mass equation is $D_t h=-h\nabla\cdot v$, while $(hv)_t+\nabla\cdot(hv\otimes v)=hD_tv+v(h_t+\nabla\cdot(hv))=hD_tv$. Thus the momentum equation and $\nabla(gh^2/2)=gh\nabla h$ give $D_tv=-fJv-g\nabla h$. [given, F1, F2, A1, algebra]

2.1 Taking the dot product with $v$ and using $v\cdot Jv=0$ yields $D_t(|v|^2/2)=-g v\cdot\nabla h$. The product-rule identity $\partial_t(hq)+\nabla\cdot(hqv)=hD_tq+q(h_t+\nabla\cdot(hv))$ and continuity with $q=|v|^2/2$ give $\partial_t(h|v|^2/2)+\nabla\cdot((h|v|^2/2)v)=-ghv\cdot\nabla h$. Similarly, applying $D_t$ to $gh^2/2$ and using $D_t h=-h\nabla\cdot v$ gives $\partial_t(gh^2/2)+\nabla\cdot((gh^2/2)v)=-(gh^2/2)\nabla\cdot v$. Adding these balances and using $\nabla\cdot((gh^2/2)v)=ghv\cdot\nabla h+(gh^2/2)\nabla\cdot v$ proves the stated local flux identity. [given, F1, F2, A1, step 1.1, algebra]

3.1 Integrate the local flux identity over $Q_2\times[t_0,t_1]$. Each spatial flux component is periodic, so its derivative integrates to the zero endpoint difference on $[0,2\pi]$ by the one-dimensional fundamental theorem of calculus. Applying the same theorem in time to $E$ and then integrating over $Q_2$ gives equality of the two endpoint energy integrals. [given, F1, F2, A1, step 2.1, algebra] ∎
