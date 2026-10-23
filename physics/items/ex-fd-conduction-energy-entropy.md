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
  - def-axiom-of-choice
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
dependency_roles:
  pthm-fd-energy-decomposition: physical-result
  post-fd-boundary-data: operational-prerequisite
  post-fd-continuum-balances: physical-assumption
  def-axiom-of-choice: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
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

Assume the Axiom of Choice: every set-indexed family of nonempty sets has a choice function. Let $L_1,L_2,L_3>0$ be side lengths in metres and let $Q:=\prod_{j=1}^3[0,L_j]$ be a periodic cell, with opposite faces identified as in the periodic boundary-data model. Let $\rho>0$ be constant mass density in kilograms per cubic metre, $c>0$ constant specific heat in joules per kilogram kelvin, $\kappa>0$ constant thermal conductivity in watts per metre kelvin, $T_*>|a|>0$ a reference temperature and amplitude in kelvins, and $m\in\mathbb Z^3\setminus\{0\}$. Put $k_j:=2\pi m_j/L_j$ in inverse metres, define $k:=(k_1,k_2,k_3)\in\mathbb R^3$, and put $\lambda:=\kappa|k|^2/(\rho c)$ in inverse seconds. Choose $0<\delta<\lambda^{-1}\log(T_*/|a|)$, put $I:=(-\delta,\infty)$, and, for $(t,x)\in I\times\mathbb R^3$, define

$$T(t,x):=T_*+a e^{-\lambda t}\cos(k\cdot x),\qquad u:=0,\quad \sigma:=0,\quad b:=0,\quad r:=0,\quad q:=-\kappa\nabla T,$$

$$e:=cT,\qquad s:=c\log(T/T_*).$$

Then $T>0$, these fields satisfy the smooth balance equations on the periodic cell, and total internal energy $\int_Q\rho e\,dx$ is constant. The physical entropy density satisfies

$$\partial_t(\rho s)+\operatorname{div}(q/T)=\kappa\frac{|\nabla T|^2}{T^2}\ge0,$$

and the total entropy $\int_Q\rho s\,dx$ is strictly increasing for every finite $t\ge0$. This is an exact conditional calculation for the stated balance-law and caloric model; it is not an experimental observation or a constitutive claim about a particular substance.

## Example references

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.4–4.5](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Heat and Energy Conservation*, §4.1](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf)

## Facts & Assumptions

**Given:** The constants, periodic cell and smooth fields in the Example; the adopted periodic data; and the energy and entropy balance model; the Axiom of Choice.

[A1] The model parameters satisfy $\rho,c,\kappa>0$, $T_*>|a|>0$, and $m\ne0$; the caloric laws are $e=cT$ and $s=c\log(T/T_*)$.

[A4] [[def-axiom-of-choice]]: the adopted Axiom of Choice implies countable choice by applying its choice function to the set of values of a sequence of nonempty sets.

[A2] [[post-fd-boundary-data]]: opposite faces of the cell are identified by translations and the fields and required traces are periodic, so paired fluxes cancel.

[A3] [[post-fd-continuum-balances]]: the adopted material entropy inequality has outward entropy flux $q/T$ and supply $\rho r/T$.

[F1] [[pthm-fd-energy-decomposition]]: in the smooth positive-density balance branch, $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$ and total energy is conserved on compatible periodic domains when $r=0$ and there is no nonconservative body work.

[F2] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, a $C^1$ vector field on the closure of a bounded $C^1$ region has volume divergence integral equal to its outward surface flux.

## Proof

1.1 Since $|a e^{-\lambda t}|<|a|e^{\lambda\delta}<T_*$ for $t\in I$, the formula gives $T(t,x)>0$. Direct differentiation gives $\partial_tT=-\lambda a e^{-\lambda t}\cos(k\cdot x)$ and $\Delta T=-|k|^2a e^{-\lambda t}\cos(k\cdot x)$. The definition of $\lambda$ therefore yields $\rho c\,\partial_tT=\kappa\Delta T$. [given, A1, algebra]

1.2 The integral of $\cos(k\cdot x)$ over $Q$ is zero because $m\in\mathbb Z^3\setminus\{0\}$, so $\int_Q\rho e\,dx=\rho c T_* L_1L_2L_3$ for all $t\ge0$. Equivalently, the periodic boundary flux has zero net integral. [given, A1, A2, algebra]

2.1 The constant density and zero velocity satisfy mass balance; $\sigma=b=0$ satisfy momentum balance. Since $D=0$, $e=cT$, $q=-\kappa\nabla T$, and $r=0$, the internal-energy equation in [F1] reduces to $\rho c\,\partial_tT=\kappa\Delta T$, which holds by step 1.1. For the material formulation, choose a bounded $C^1$ ball $B$ containing $Q$ in its interior, take $U=\mathbb R^3$, $\chi(t,a)=a$ and $\rho_0=\rho$. Every admissible material subregion $V\Subset B$ is stationary. Constant mass, zero momentum and zero stress give its mass, linear and angular balances. Integrating $\rho c\,\partial_tT+\operatorname{div}q=0$ over $V$, with differentiation permitted by smoothness on compact closures and the divergence theorem [F2] under [A4], gives the adopted material total-energy balance. Thus the hypotheses of [F1], including $Q\subset B$ for all $t\in I$, are met. Periodicity is [A2]. [given, A1, A2, A4, F1, F2, step 1.1]

3.1 Using $s=c\log(T/T_*)$ and step 1.1, $\partial_t(\rho s)=\rho c\,\partial_tT/T=\kappa\Delta T/T$. Also, $\operatorname{div}(q/T)=-\kappa\Delta T/T+\kappa|\nabla T|^2/T^2$. Their sum is the stated nonnegative entropy-production density; since $r=0$, this verifies the local entropy inequality. On each stationary $V$ from step 2.1, integration and [F2] give $\frac{d}{dt}\int_V\rho s\,dx+\int_{\partial V}(q/T)\cdot n\,dS=\int_V\kappa|\nabla T|^2/T^2\,dx\ge0$, which is exactly the adopted material inequality [A3]. Positivity of $T$ and compactness make all these fields and derivatives bounded on each integration region. [given, A1, A3, A4, F2, step 1.1, step 2.1, algebra]

4.1 Integrate the local entropy relation in step 3.1 over $Q$. Periodicity cancels the boundary integral of $q/T$, as required by [A2], so $\frac{d}{dt}\int_Q\rho s\,dx=\int_Q\kappa|\nabla T|^2/T^2\,dx$. Because $a\ne0$ and $k\ne0$, $\nabla T=-a e^{-\lambda t}\sin(k\cdot x)k$ is nonzero on an open subset of each cell; the integrand is positive there and nonnegative everywhere. The integral is strictly positive for every finite $t\ge0$. [given, A2, step 3.1, algebra] ∎

