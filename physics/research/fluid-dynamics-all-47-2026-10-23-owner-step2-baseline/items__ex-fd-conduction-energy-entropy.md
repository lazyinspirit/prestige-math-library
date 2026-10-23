---
id: ex-fd-conduction-energy-entropy
kind: example
title: "Conduction preserves energy while entropy increases"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-energy-decomposition
  - post-fd-boundary-data
  - post-fd-continuum-balances
dependency_roles:
  pthm-fd-energy-decomposition: physical-result
  post-fd-boundary-data: operational-prerequisite
  post-fd-continuum-balances: physical-assumption
physical_scope: "Exact balance-law example with Fourier conduction on a periodic
  cell; no empirical measurement or claim about a named real fluid."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.4–4.5, printed pp. 141–152."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-envir\
        onment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf"
      locator: "§4.1, complete 3-page PDF."
generation:
  role: example
---

## Example

Let $L_1,L_2,L_3>0$ be side lengths in metres and let $Q:=\prod_{j=1}^3[0,L_j]$ be a periodic cell, with opposite faces identified as in the periodic boundary-data model. Let $\rho>0$ be constant mass density in kilograms per cubic metre, $c>0$ constant specific heat in joules per kilogram kelvin, $\kappa>0$ constant thermal conductivity in watts per metre kelvin, $T_*>|a|>0$ a reference temperature and amplitude in kelvins, and $m\in\mathbb Z^3\setminus\{0\}$. Put $k_j:=2\pi m_j/L_j$ in inverse metres, $\lambda:=\kappa|k|^2/(\rho c)$ in inverse seconds, and, for $t\ge0$, define

$$T(t,x):=T_*+a e^{-\lambda t}\cos(k\cdot x),\qquad u:=0,\quad \sigma:=0,\quad b:=0,\quad r:=0,\quad q:=-\kappa\nabla T,$$

$$e:=cT,\qquad s:=c\log(T/T_*).$$

Then $T>0$, these fields satisfy the smooth balance equations on the periodic cell, and total internal energy $\int_Q\rho e\,dx$ is constant. The physical entropy density satisfies

$$\partial_t(\rho s)+\operatorname{div}(q/T)=\kappa\frac{|\nabla T|^2}{T^2}\ge0,$$

and the total entropy $\int_Q\rho s\,dx$ is strictly increasing for every finite $t\ge0$. This is an exact conditional calculation for the stated balance-law and caloric model; it is not an experimental observation or a constitutive claim about a particular substance.

## Example references

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.4–4.5](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Heat and Energy Conservation*, §4.1](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf)

## Facts & Assumptions

**Given:** The constants, periodic cell and smooth fields in the Example; the adopted periodic data; and the energy and entropy balance model.

[A1] The model parameters satisfy $\rho,c,\kappa>0$, $T_*>|a|>0$, and $m\ne0$; the caloric laws are $e=cT$ and $s=c\log(T/T_*)$.

[A2] [[post-fd-boundary-data]]: opposite faces of the cell are identified by translations and the fields and required traces are periodic, so paired fluxes cancel.

[A3] [[post-fd-continuum-balances]]: the adopted material entropy inequality has outward entropy flux $q/T$ and supply $\rho r/T$.

[F1] [[pthm-fd-energy-decomposition]]: in the smooth positive-density balance branch, $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$ and total energy is conserved on compatible periodic domains when $r=0$ and there is no nonconservative body work.

## Proof

1.1 Since $|a e^{-\lambda t}|\le |a|<T_*$ for $t\ge0$, the formula gives $T(t,x)>0$. Direct differentiation gives $\partial_tT=-\lambda a e^{-\lambda t}\cos(k\cdot x)$ and $\Delta T=-|k|^2a e^{-\lambda t}\cos(k\cdot x)$. The definition of $\lambda$ therefore yields $\rho c\,\partial_tT=\kappa\Delta T$. [given, A1, algebra]

1.2 The integral of $\cos(k\cdot x)$ over $Q$ is zero because $m\in\mathbb Z^3\setminus\{0\}$, so $\int_Q\rho e\,dx=\rho c T_* L_1L_2L_3$ for all $t\ge0$. Equivalently, the periodic boundary flux has zero net integral. [given, A1, A2, F1, algebra]

2.1 The constant density and zero velocity satisfy mass balance; $\sigma=b=0$ satisfy momentum balance. Since $D=0$, $e=cT$, $q=-\kappa\nabla T$, and $r=0$, the internal-energy equation in [F1] reduces to $\rho c\,\partial_tT=\kappa\Delta T$, which holds by step 1.1. Periodicity is the boundary-data assumption [A2]. [given, A1, A2, F1, step 1.1]

2.2 Using $s=c\log(T/T_*)$ and step 1.1, $\partial_t(\rho s)=\rho c\,\partial_tT/T=\kappa\Delta T/T$. Also, $\operatorname{div}(q/T)=-\kappa\Delta T/T+\kappa|\nabla T|^2/T^2$. Their sum is the stated nonnegative entropy-production density; since $r=0$, this verifies the local entropy inequality corresponding to [A3]. [given, A1, A3, step 1.1, algebra]

3.1 Integrate the local entropy relation in step 2.2 over $Q$. Periodicity cancels the boundary integral of $q/T$, as required by [A2], so $\frac{d}{dt}\int_Q\rho s\,dx=\int_Q\kappa|\nabla T|^2/T^2\,dx$. Because $a\ne0$ and $k\ne0$, $\nabla T=-a e^{-\lambda t}\sin(k\cdot x)k$ is nonzero on an open subset of each cell; the integrand is positive there and nonnegative everywhere. The integral is strictly positive for every finite $t\ge0$. [given, A2, step 2.2, algebra] ∎

