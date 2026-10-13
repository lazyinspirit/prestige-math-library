---
id: pthm-cm05-circular-orbit
kind: physics-theorem
title: "Circular relative orbits of the central model: the critical-point criterion $u'(r_0)=J^2/(\\mu r_0^3)$, uniform rotation of both labels about the centre of mass, and the linearised radial frequency"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm05-central-model, pthm-cm05-relative-reduction, thm-cm-circular-orbit-and-radial-frequency, def-cm-central-force-trajectory, lem-cm-oriented-orthonormal-triads, lem-cm-second-order-oscillator-form, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, thm-chain-rule, thm-algebra-of-derivatives]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  thm-cm-circular-orbit-and-radial-frequency: mathematical-premise
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  lem-cm-second-order-oscillator-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Circular relative motion in the adopted central model: the critical-point condition of the effective potential, stated equivalently as the balance $\\mu r_0\\omega^2=u'(r_0)$ between the central force and the circular motion; the explicit uniform rotation of the relative coordinate and of both labels about the centre of mass; the necessity of the condition for a constant separation; and the frequency of the linearised radial equation at a critical point satisfying the nondegeneracy condition $(U^{\\mathrm{eff}}_J)''(r_0)>0$. The linearised clause is a statement about the quadratic approximation only; no nonlinear stability, no existence of circular orbits at arbitrary radii and no empirical claim is made."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.51)-(3.54), chapter page 12 (PDF page 45): the circular orbit at the minimum of the effective potential with $\\mathrm dU_{\\rm ef}/\\mathrm dr=0$, the identification with the radial force balance, and the angular velocity $\\omega=v/r_0$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-33 (PDF pp. 37-39) and Figure 15: circular orbits as the minimum of the effective potential $V_{\\rm eff}(r)=V(r)+J^2/(2\\mu r^2)$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed pp. 79-81 (PDF pp. 82-84), Eqs. (4.151)-(4.156): the effective potential and the circular orbit $\\varepsilon=0$ of the gravity-like potential with the minimum of $V_{\\rm eff}$"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Adopt the central-force model of [[post-cm05-central-model]] clause (i) with
masses $m_1,m_2>0$, $M=m_1+m_2$, reduced mass $\mu=m_1m_2/M$, and static
central pair potential $u\in C^2(J_0)$, and time window $I_0$. Fix $J>0$, an oriented orthonormal
triad $(e_1,e_2,e_3)$, and a radius $r_0\in J_0$, and put
$$U^{\mathrm{eff}}_J(\rho):=u(\rho)+\frac{J^{2}}{2\mu\rho^{2}},\qquad \omega:=\frac{J}{\mu r_0^{2}}.$$
Then:

1. **(Criterion.)** The following are equivalent:
   $$\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0;\qquad u'(r_0)=\frac{J^{2}}{\mu r_0^{3}};\qquad \mu\,r_0\,\omega^{2}=u'(r_0).$$
2. **(Existence and the two labels.)** If the condition of clause 1 holds,
   then for every $\theta_0\in\mathbb R$ the curve
   $$r^{\circ}(t):=r_0\bigl(\cos(\theta_0+\omega t)\,e_1 +\sin(\theta_0+\omega t)\,e_2\bigr)\qquad(t\in\mathbb R)$$
   is a central-force trajectory for $(\mu,u)$ defined on all of $\mathbb R$,
   with $\lvert r^{\circ}\rvert\equiv r_0$, angular momentum
   $j=\mu\,r^{\circ}\times(r^{\circ})'=Je_3$ and constant energy
   $E=U^{\mathrm{eff}}_J(r_0)$; and for every interval $I\subseteq I_0$ with nonempty interior and
   affine centre-of-mass curve $X^{\circ}:I\to\mathbb R^3$ with
   $(X^{\circ})''=0$, the restrictions to $I$ reconstruct a motion of the
   two-label model ([[pthm-cm05-relative-reduction]] clause 4) has both
   labels moving uniformly on circles about the centre of mass:
   $$\lvert x_1(t)-X^{\circ}(t)\rvert=\frac{m_2}{M}r_0,\qquad \lvert x_2(t)-X^{\circ}(t)\rvert=\frac{m_1}{M}r_0,$$
   with angular velocity $\omega$ about $X^{\circ}$.
3. **(Necessity.)** Conversely, if a motion of the model has constant
   separation $\lvert r\rvert\equiv r_0$ on a time interval $I$ with nonempty
   interior and nonzero constant angular momentum $j=Je_3$, then
   $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$ and its polar angular coordinate
   satisfies $\theta'\equiv\omega$; the relative motion is the uniform
   rotation of clause 2 up to the initial value of $\theta$, and both labels
   move uniformly on the circles of clause 2 about the affine centre of mass.
4. **(Linearised radial frequency.)** If
   $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$ and
   $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)>0$, then
   $\omega_{\mathrm{lin}}:=\sqrt{\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)/\mu}>0$,
   and a twice differentiable $\delta:I\to\mathbb R$ on an interval $I$ with
   at least two points solves the linearised radial equation
   $$\mu\,\delta''=-\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)\,\delta \qquad\text{on }I$$
   if and only if $\delta(t)=A\cos\bigl(\omega_{\mathrm{lin}}(t-t_0)\bigr)
   +B\sin\bigl(\omega_{\mathrm{lin}}(t-t_0)\bigr)$ for some $A,B\in\mathbb R$
   and $t_0\in I$. This is a statement about the quadratic radial
   approximation at $r_0$; it does not assert nonlinear stability of the
   circular orbit.

## Facts & Assumptions

**Given:** The central-force model of class (i) with the $C^2$ potential $u$ on the open interval $J_0\subseteq(0,\infty)$, the data $J>0$, the oriented orthonormal triad $(e_1,e_2,e_3)$, the radius $r_0\in J_0$, and the functions $U^{\mathrm{eff}}_J$ and constant $\omega$ of the statement.

[L1] Reduction and attached objects ([[pthm-cm05-relative-reduction]] clauses 3-4, [[def-cm-central-force-trajectory]], [[post-cm05-central-model]] clause (ii)): the relative coordinate of every motion is a central-force trajectory for $(\mu,u)$; conversely every central-force trajectory for $(\mu,u)$ together with an affine centre-of-mass curve reconstructs a motion of the model, with $x_1-X^{\circ}=\frac{m_2}{M}r$ and $x_2-X^{\circ}=-\frac{m_1}{M}r$.

[L2] Mathematical supplier ([[thm-cm-circular-orbit-and-radial-frequency]] clauses 1-3, [[lem-cm-oriented-orthonormal-triads]], [[lem-cm-second-order-oscillator-form]], [[def-cm-central-force-trajectory]]): for a central-force trajectory for $(\mu,u)$ with constant $j=Je_3$, $J>0$, and $r_0\in J_0$, (i) if $\rho\equiv r_0$ then $(U^{\mathrm{eff}}_J)'(r_0)=0$ and $\theta'\equiv J/(\mu r_0^2)$, the trajectory being $r_0(\cos\theta\,e_1+\sin\theta\,e_2)$ with $\theta(t)=\theta_0+\omega t$; (ii) if $(U^{\mathrm{eff}}_J)'(r_0)=0$ then for every $\theta_0$ the displayed $r^{\circ}$ is a central-force trajectory on $\mathbb R$ with $j=Je_3$ and $E=U^{\mathrm{eff}}_J(r_0)$; (iii) if $(U^{\mathrm{eff}}_J)'(r_0)=0$ and $(U^{\mathrm{eff}}_J)''(r_0)>0$, the solutions of the linearised equation $\mu\delta''=-(U^{\mathrm{eff}}_J)''(r_0)\delta$ on an interval with at least two points are exactly $A\cos(\omega_{\mathrm{lin}}(t-t_0))+B\sin(\omega_{\mathrm{lin}}(t-t_0))$ with $\omega_{\mathrm{lin}}=\sqrt{(U^{\mathrm{eff}}_J)''(r_0)/\mu}$.

[L3] Differentiation and trigonometry ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): derivatives of the displayed trigonometric curves and of the potential expressions are computed by the chain rule and the algebra of derivatives; the barrier term $\rho\mapsto J^2/(2\mu\rho^2)$ has derivative $-J^2/(\mu\rho^3)$ on $(0,\infty)$.

[L4] Intervals and dimensions: $J_0\subseteq(0,\infty)$ is open, $r_0>0$, and $J>0$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1: differentiating the definition of $U^{\mathrm{eff}}_J$ with [L3] gives $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=u'(r_0)-J^{2}/(\mu r_0^{3})$, so the first two conditions are equivalent; and $\mu r_0\omega^{2}=\mu r_0\cdot J^{2}/(\mu^{2}r_0^{4})=J^{2}/(\mu r_0^{3})$ by the definition of $\omega$, so $u'(r_0)=J^{2}/(\mu r_0^{3})$ is equivalent to $\mu r_0\omega^{2}=u'(r_0)$. [given, L3, L4, algebra]

2.1 Clause 2: assume $(U^{\mathrm{eff}}_J)'(r_0)=0$. By [L2] clause (ii) the displayed curve $r^{\circ}$ is a central-force trajectory for $(\mu,u)$ on $\mathbb R$ with $\lvert r^{\circ}\rvert\equiv r_0$, $j=Je_3$ and $E=U^{\mathrm{eff}}_J(r_0)$; restricted to any interval $I\subseteq I_0$ with nonempty interior and combined with an affine $X^{\circ}:I\to\mathbb R^3$, [L1] clause 4 reconstructs a motion on $I$ of the two-label model with $x_1-X^{\circ}=\frac{m_2}{M}r^{\circ}$ and $x_2-X^{\circ}=-\frac{m_1}{M}r^{\circ}$. Taking norms gives the displayed constant radii; and since $(r^{\circ})'$ is tangent to the circle $\lvert y\rvert=r_0$ and $\lvert(r^{\circ})'\rvert=r_0\omega$, each label traverses its circle with angular velocity $\omega$. [step 1.1, L1, L2, algebra]

2.2 Clause 3: assume $\lvert r\rvert\equiv r_0$ on $I$ with $j=Je_3$, $J>0$. By [L1] and [L2] clause (i), $(U^{\mathrm{eff}}_J)'(r_0)=0$, the polar angular coordinate satisfies $\theta'\equiv J/(\mu r_0^{2})=\omega$, so $\theta(t)=\theta_0+\omega t$ on $I$ up to the additive constant, and $r=r_0(\cos\theta\,e_1+\sin\theta\,e_2)$ is the uniform rotation of clause 2; the reconstruction of [L1] clause 4 gives the two labels on the circles of clause 2 about the affine centre of mass. [step 1.1, L1, L2, algebra]

3.1 Clause 4: under the two derivatives hypotheses, [L2] clause (iii) gives exactly the stated solutions of the linearised equation with the stated positive frequency $\omega_{\mathrm{lin}}=\sqrt{(U^{\mathrm{eff}}_J)''(r_0)/\mu}$, as an identity on any interval with at least two points containing $t_0$. [step 1.1, step 2.1, L2, L4, algebra] ∎

## Remarks

- **The criterion is a force balance.** The condition $\mu r_0\omega^{2}=u'(r_0)$ says that the effective central force at $r_0$ provides exactly the centripetal acceleration of uniform circular motion with angular velocity $\omega$; no circular orbit exists at a radius where the effective potential has no critical point.

- **Linearisation only.** Clause 4 is a statement about the quadratic approximation of the radial equation. Nothing here proves that small radial perturbations of the circular orbit stay small for all future times; only a nonlinear argument could, and none is made on this page.

- **Model status.** $J$, $r_0$, $u$ and the masses are model data. The statement is conditional on the adopted central model and reports no observation.
