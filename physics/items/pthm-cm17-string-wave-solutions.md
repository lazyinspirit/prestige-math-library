---
id: pthm-cm17-string-wave-solutions
kind: physics-theorem
title: "The string model: d'Alembert solutions, fixed-end modes and uniqueness for the adopted one-dimensional continuum"
status: published
origin: session
domain: physics
dependency_level: 10
deps: [pthm-cm17-chain-limit-of-the-string-model, thm-cm-dalembert-formula-and-string-solutions, thm-cm-smooth-string-fourier-series-solution, def-cm-sine-coefficients-of-periodic-functions, def-ck-euclidean-maps-and-diffeomorphisms, def-cm17-continuum-body-and-units, def-cm01-units]
dependency_roles:
  pthm-cm17-chain-limit-of-the-string-model: physical-result
  thm-cm-dalembert-formula-and-string-solutions: mathematical-premise
  thm-cm-smooth-string-fourier-series-solution: mathematical-premise
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted one-dimensional string model with tension and linear density (wave speed c = square root of tension over linear density, justified by the chain limit) and on the small transverse displacement idealization: the d'Alembert formula gives the unique C^2 solution of the Cauchy problem on the line for C^2 initial displacement and C^1 initial velocity, and for smooth odd periodic data the fixed-end sine-series solution exists, is unique among C^2 solutions and carries an explicit tail bound. The theorem asserts no measured tension or density, no nonlinear or bending corrections and no validity of the string model for any particular material."
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (standing waves of a fixed-end string and the wave equation)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 6.1 (continuum limit of the chain and the wave equation)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the one-dimensional string model: a uniform string of length $L>0$
(fixed ends) or of infinite extent, with linear mass density $\rho_\ell>0$
and tension $\tau_s>0$, whose small transverse displacement
$u:I\times J\to\mathbb R$ (where $I\subseteq\mathbb R$ is a nonempty time
interval and $J=\mathbb R$ or $J=[0,L]$) satisfies

$$u_{tt}=c^2u_{xx},\qquad c:=\sqrt{\tau_s/\rho_\ell},$$

where $[L]=[x]=\ell$, $[t]=\tau$, $[\rho_\ell]=\mu\ell^{-1}$,
$[\tau_s]=\mu\ell\tau^{-2}$, and $[u]=\ell$. The initial displacement data
$f$ and $F$ have dimension $\ell$, while the initial velocity data $g$ and $G$
have dimension $\ell\tau^{-1}$. Thus $[c]=\sqrt{[\tau_s]/[\rho_\ell]}=
\ell\tau^{-1}$, and $[\omega_n]=\tau^{-1}$. These are the dimensions of
[[def-cm17-continuum-body-and-units]], [[def-cm01-units]]. The identification
of $c$ with the chain limit is that of
[[pthm-cm17-chain-limit-of-the-string-model]]. Then:

**(i) Cauchy problem on the line.** For $f\in C^2(\mathbb R)$ and
$g\in C^1(\mathbb R)$ the function

$$u(t,x):=\frac{f(x-ct)+f(x+ct)}{2}+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds$$

is of class $C^2$ on $\mathbb R^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), satisfies $u_{tt}=c^2u_{xx}$
with $u(0,\cdot)=f$ and $u_t(0,\cdot)=g$, and is the unique $C^2$ field on
$\mathbb R^2$ with those data.

**(ii) Fixed ends.** Let $F$ be odd and $2L$-periodic of class $C^5$ and let
$G$ be odd and $2L$-periodic of class $C^4$
([[def-cm-sine-coefficients-of-periodic-functions]]) with finite
$M_5=\sup|F^{(5)}|$, $M_4=\sup|G^{(4)}|$. Then the sine series $u$ of the
smooth string theorem exists with absolutely and uniformly convergent
termwise derivatives up to second order, satisfies $u_{tt}=c^2u_{xx}$,
$u(t,0)=u(t,L)=0$, $u(0,\cdot)=F|_{[0,L]}$, $u_t(0,\cdot)=G|_{[0,L]}$, is the
unique $C^2$ solution on $[0,T]\times[0,L]$ of that boundary-value problem,
and for every $N\ge1$ satisfies the tail bound
$|u-S_Nu|\le C(N+1)^{-4}$ with $C=2\bigl(2L^5M_5/\pi^5+2L^5M_4/(c\pi^5)\bigr)$
on $[-T,T]\times[0,L]$, where $S_Nu$ is the $N$-th partial sum of the series.

**(iii) Reading and scope.** The initial functions $f,g$ or $F,G$ are the
model's initial transverse displacement and velocity; the solutions are exact
for the model and are not approximations within it. The model is the linear
small-transverse-displacement idealization of the string: bending stiffness,
longitudinal motion, external forcing and large-amplitude geometric
nonlinearity are excluded, and no measured tension, density or displacement
is asserted.

## Facts & Assumptions

**Given:** the string data $L,\rho_\ell,\tau_s$ and speed $c$; the initial data $f,g$ or $F,G$.

[F1] d'Alembert theorem ([[thm-cm-dalembert-formula-and-string-solutions]]): for $c>0$ the formula of part (i) is $C^2$, solves the wave equation with the stated data, and is the unique $C^2$ solution on $\mathbb R^2$; its part (c) exhibits the fixed-end modes $\sin(n\pi x/L)\cos(n\pi ct/L)$ and their finite sums.

[F2] Smooth fixed-end theorem ([[thm-cm-smooth-string-fourier-series-solution]], [[def-cm-sine-coefficients-of-periodic-functions]]): for odd $2L$-periodic $C^5$ data $F$ and odd $2L$-periodic $C^4$ data $G$ with finite $M_5,M_4$, the sine series converges with its termwise derivatives up to second order, defines a $C^2$ solution satisfying the wave equation, the fixed-end conditions and the initial data, is unique among $C^2$ solutions, and admits the stated tail bound.

[F3] Chain limit and identification ([[pthm-cm17-chain-limit-of-the-string-model]]): the mass-spring chain with node mass $\rho_\ell a$ and spring constant $\tau_s/a$ has the continuum limit governed by the wave equation with speed $c=\sqrt{\tau_s/\rho_\ell}$, with explicit nodal and interpolation error; the string model is the corresponding continuum idealization.

## Proof

**Proof technique:** direct; instantiate the two mathematical string theorems at the model's data and read the identification of the speed from the chain-limit item.

1.1 Clause (i): the data $f\in C^2(\mathbb R)$, $g\in C^1(\mathbb R)$ and $c>0$ satisfy the hypotheses of [F1], whose parts (a) and (b) give that the displayed d'Alembert function is $C^2$, solves $u_{tt}=c^2u_{xx}$ with $u(0,\cdot)=f$, $u_t(0,\cdot)=g$, and is the unique such $C^2$ field. [given, F1]

1.2 Clause (ii): $F$ and $G$ satisfy the hypotheses of [F2] ($F$ odd, $2L$-periodic, $C^5$; $G$ odd, $2L$-periodic, $C^4$; $M_5,M_4<\infty$), so [F2] gives the series solution, its uniform and termwise convergence, the boundary and initial conditions, uniqueness among $C^2$ solutions, and the displayed tail bound. [given, F2]

2.1 Clause (iii): by [F3] the speed $c$ in the model equation is the limit speed of the discrete mechanical chain with the stated mass and stiffness scaling, and the dimensions $[c]=\ell\tau^{-1}$ follow from $[\tau_s]=\mu\ell\tau^{-2}$ (force) and $[\rho_\ell]=\mu\ell^{-1}$ under the rules of [[def-cm01-units]]; the excluded features (bending stiffness, forcing, nonlinearity) are exactly the ones not present in the linear model whose solutions are computed in steps 1.1 and 1.2. [given, step 1.1, step 1.2, F3, algebra]

3.1 Conclusion: steps 1.1 and 1.2 prove clauses (i) and (ii) as exact statements about the model, and step 2.1 records the reading, the dimensional consistency and the exclusions; no measured data and no nonlinear or bending correction are asserted. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Energy reading.** For the fixed-end model the uniqueness argument of [F2] uses the conserved energy $\tfrac12\int_0^L(u_t^2+c^2u_x^2)\,dx$: a difference of two solutions with zero data has zero energy and therefore vanishes. Multiplication by the constant linear density $\rho_\ell$ gives the model's mechanical energy for the string under the linear idealization; it is not a measured quantity on this page.

- **Fixed-end data and the odd extension.** The fixed-end problem is treated through odd $2L$-periodic extensions of the data ([[def-cm-sine-coefficients-of-periodic-functions]]); the $C^5$ and $C^4$ smoothness of the extensions is what makes the coefficient tails and the termwise differentiated series converge, and it is a genuine restriction on the initial data of the theorem. Rough or merely continuous data require a weak formulation, which this linear model does not supply.
