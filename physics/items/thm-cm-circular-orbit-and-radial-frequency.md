---
id: thm-cm-circular-orbit-and-radial-frequency
kind: theorem
title: "Circular orbits of a non-radial central-force trajectory: the critical-point condition and the squared frequency of the linearised radial equation"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, lem-cm-second-order-oscillator-form, lem-cm-oriented-orthonormal-triads, lem-cm-derivative-of-pairings-of-curves, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-derivative, def-limit-point-r, def-interval, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  lem-cm-second-order-oscillator-form: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-derivative: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4 and Figure 15, printed pp. 31-33: circular, elliptic and hyperbolic orbits as features of the effective potential $V_{\\rm eff}$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.52)-(3.58): the circular-orbit condition $\\mathrm dU_{\\rm eff}/\\mathrm dr=0$ and small radial oscillations about it"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\mu>0$, let $J_0\subseteq(0,\infty)$ be an open interval, let
$U:J_0\to\mathbb R$ be of class $C^2$, let $I$ be an interval with at least two
points, and let $r:I\to\mathbb R^3$ be a central-force trajectory for $(\mu,U)$
with constant nonzero angular momentum $j=Je_3$, $J>0$, and polar data
$(\rho,\theta)$ as in [[thm-cm-central-force-polar-reduction]], so that
$\rho^2\theta'=J/\mu$ and $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$ on
$I$. Fix $r_0\in J_0$. Then:

1. **(Necessity.)** If $\rho\equiv r_0$ is constant on $I$, then
   $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$ and $\theta'\equiv J/(\mu r_0^2)$
   is constant; the trajectory is the uniform rotation
   $r(t)=r_0(\cos\theta(t)\,e_1+\sin\theta(t)\,e_2)$.
2. **(Existence.)** Conversely, if $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$,
   then for every $\theta_0\in\mathbb R$ the curve
   $$r^\circ(t):=r_0\bigl(\cos(\theta_0+\omega t)\,e_1+\sin(\theta_0+\omega t)\,e_2\bigr), \qquad \omega:=\frac{J}{\mu r_0^2},$$
   is a central-force trajectory for $(\mu,U)$ defined on $\mathbb R$, with
   angular momentum $j=Je_3$ and constant energy
   $E=\frac12\mu r_0^2\omega^2+U(r_0)=U^{\mathrm{eff}}_J(r_0)$.
3. **(Linearised radial equation.)** Let $\rho$ be a solution of the reduced
   equation $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$ on $I$ with
   $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$, and put
   $\delta:=\rho-r_0$. Then
   $$\mu\delta''=-\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)\,\delta +g(\delta),\qquad g(x):=\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)x-\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0+x),$$
   where $g(x)/x\to0$ as $x\to0$; if moreover
   $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)>0$, then the associated linearised
   equation $\mu\delta''=-\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)\delta$ has
   exactly the solutions
   $\delta(t)=A\cos(\omega_{\rm lin}(t-t_0))+B\sin(\omega_{\rm lin}(t-t_0))$
   with $A,B\in\mathbb R$ and $\omega_{\rm lin}:=\sqrt{\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)/\mu}>0$,
   for any $t_0\in I$. This is a statement about the quadratic radial
   approximation; no nonlinear stability of the circular orbit is asserted.

## Facts & Assumptions

**Given:** The central-force data with constant nonzero angular momentum $j=Je_3$ and polar data $(\rho,\theta)$ from [[thm-cm-central-force-polar-reduction]], a radius $r_0\in J_0$, and the functions $n(\theta):=\cos\theta\,e_1+\sin\theta\,e_2$, $n_\perp(\theta):=-\sin\theta\,e_1+\cos\theta\,e_2$.

[L1] Polar reduction: $r=\rho\,n(\theta)$ with $\rho=|r|$, $\rho^2\theta'=J/\mu$, $\mu\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$, and the energy is constant ([[thm-cm-central-force-polar-reduction]]).

[L2] Derivative rules: the chain rule, the product rule and the trigonometric derivatives $(\cos)'=-\sin$, $(\sin)'=\cos$; the cross product differentiates by the product rule; $e_1\times e_2=e_3$ and $e_2\times e_1=-e_3$ and the cross product is bilinear ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[lem-cm-derivative-of-pairings-of-curves]], [[lem-cm-oriented-orthonormal-triads]]).

[L3] $\sin^2+\cos^2=1$; and for the linearised equation: the solutions of $v''+\omega^2v=0$ on an interval with $\omega>0$ are exactly $A\cos(\omega(t-t_0))+B\sin(\omega(t-t_0))$ ([[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-cm-second-order-oscillator-form]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] The derivative of $\bigl(U^{\mathrm{eff}}_J\bigr)'$ at $r_0$ is $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)$: for every $\varepsilon>0$ there is $\eta>0$ with $\bigl|\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0+x)-\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)-\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)x\bigr|\le\varepsilon|x|$ for $|x|<\eta$ ([[def-derivative]], [[def-limit-point-r]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1: if $\rho\equiv r_0$ then $\rho''=0$, so the reduced equation of [L1] gives $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$; and $\theta'=J/(\mu\rho^2)=J/(\mu r_0^2)$ is constant by [L1]. [given, L1, algebra]

1.2 Clause 2, the kinematics: for $r^\circ(t)=r_0\,n(\theta_0+\omega t)$ with $\omega=J/(\mu r_0^2)$, [L2] gives $(r^\circ)'=r_0\omega\,n_\perp(\theta_0+\omega t)$ and $(r^\circ)''=-r_0\omega^2\,n(\theta_0+\omega t)$; hence $j=\mu\,r^\circ\times(r^\circ)'=\mu r_0^2\omega\,e_3=J e_3$ and $\lVert(r^\circ)'\rVert_2^2=r_0^2\omega^2$, using [L2] and [L3]. [given, L2, L3, algebra, construct]

1.3 Clause 3, the remainder: by [L4] applied to $\bigl(U^{\mathrm{eff}}_J\bigr)'$ at $r_0$, for every $\varepsilon>0$ there is $\eta>0$ with $|g(x)|\le\varepsilon|x|$ for $|x|<\eta$, where $g(x)=\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)x-\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0+x)$ and $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$; that is, $g(x)/x\to0$. Substituting $\rho=r_0+\delta$ into the reduced equation of [L1] and expanding gives $\mu\delta''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0+\delta)=-\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)\delta+g(\delta)$. [given, L1, L4, algebra]

2.1 Clause 2, the equation of motion: from step 1.2 and $\omega^2=J^2/(\mu^2r_0^4)$, $$\mu(r^\circ)''=-\mu r_0\omega^2n=-\frac{J^2}{\mu r_0^3}\,n,$$ while $-\bigl(U'(r_0)/r_0\bigr)r^\circ=-U'(r_0)\,n$; the two agree because $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$ means $U'(r_0)=J^2/(\mu r_0^3)$. The energy is $\frac12\mu r_0^2\omega^2+U(r_0)=\frac{J^2}{2\mu r_0^2}+U(r_0)=U^{\mathrm{eff}}_J(r_0)$, and it is constant because the equation is satisfied and the trajectory is periodic; more directly it equals the constant right-hand side of clause 4 of [L1] along this motion. [given, step 1.2, L1, algebra]

3.1 Clause 3, the linearised solutions: if $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)>0$ then $\omega_{\rm lin}^2=\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)/\mu>0$ and the linearised equation reads $\delta''+\omega_{\rm lin}^2\delta=0$; by [L3] its solutions on $I$ are exactly the displayed trigonometric functions for any $t_0\in I$. [step 1.3, L3, algebra] ∎
