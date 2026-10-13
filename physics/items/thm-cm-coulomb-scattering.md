---
id: thm-cm-coulomb-scattering
kind: theorem
title: "Repulsive Coulomb scattering: the unique outer turning point, global
  non-colliding motion, the asymptotic impact distance and
  $\\Delta=\\pi/2-\\arctan(\\kappa/(2Eb))$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  [
    def-cm-central-force-trajectory,
    thm-cm-central-force-polar-reduction,
    thm-picard-lindelof-local-existence-and-uniqueness,
    def-first-order-ode-initial-value-problem-and-solution,
    def-locally-lipschitz-in-the-state-variable,
    thm-substitution,
    thm-derivative-of-an-inverse,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    thm-intermediate-value,
    cor-primitives-of-a-continuous-function,
    thm-monotonicity-from-the-derivative,
    def-principal-inverse-tangent,
    def-principal-inverse-sine-and-cosine,
    thm-sine-and-cosine-addition-formulas,
    thm-sine-and-cosine-subtraction-formulas,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    def-tangent-cotangent-secant-cosecant,
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    thm-norm-inequality-for-the-vector-valued-integral,
    cor-vector-valued-ftc-and-lipschitz-bound,
    thm-monotonicity-of-the-integral,
    lem-integral-elementary-bounds,
    thm-cm-compact-continuation-for-locally-lipschitz-odes,
    thm-cross-product-norm-is-the-two-vector-gram-determinant,
    thm-euclidean-space-complete,
    thm-sine-and-cosine-derivatives
  ]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-substitution: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-intermediate-value: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-subtraction-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (358)-(366): the inverse-square scattering integral, the
        Rutherford angle relation and the asymptotic distance"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics,
        §3.5, Eqs. (3.68)-(3.69): the scattering integral for the Coulomb
        potential, $\\tan(\\theta/2)=\\alpha/(2Eb)$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $\mu>0$, let $\kappa>0$ and $U(r)=\kappa/r$ on $(0,\infty)$ (the repulsive
Coulomb potential, of class $C^2$), let $E>0$ and $J>0$, and put
$$V(r):=\frac{\kappa}{r}+\frac{J^2}{2\mu r^2},\qquad b:=\frac{J}{\sqrt{2\mu E}}>0,\qquad \alpha:=\frac{\kappa}{Eb}>0.$$
Then:

1. $V$ is strictly decreasing on $(0,\infty)$, with $V(r)\to\infty$ as $r\downarrow0$
   and $V(r)\to0$ as $r\to\infty$; hence there is exactly one $r_*>0$ with
   $V(r_*)=E$, it is simple ($V'(r_*)<0$), and $V(r)<E$ for all $r>r_*$.
2. Let $r:I\to\mathbb R^3$ be a central-force trajectory for $(\mu,U)$ with
   constant angular momentum $j=Je_3$, $J>0$, energy $E$, with $|r(t)|\ge r_*$
   for all $t\in I$ and with $|r(t_*)|=r_*$ for some $t_*\in I$. Then $r$
   extends uniquely to all of $\mathbb R$; along the extension $\rho=|r|\ge r_*>0$
   (no collision), $\rho$ is strictly decreasing on $(-\infty,t_*]$ and
   strictly increasing on $[t_*,\infty)$, and the asymptotic velocities
   $v_\pm=\lim_{t\to\pm\infty}r'(t)$ exist with $|v_+|=|v_-|=\sqrt{2E/\mu}$.
   Moreover the asymptotic perpendicular distance of each branch to its
   limiting direction exists and equals
   $$b=\frac{J}{\sqrt{2\mu E}}=\frac{J}{\mu|v_\pm|}, \qquad\text{so that}\qquad J=\mu b|v_\pm| .$$
The distance in clause 2 means the limit of $|r(t)\times v_\pm|/|v_\pm|$ as $t\to\pm\infty$, the distance to the line through the origin in the limiting velocity direction; it does not assert a free tail or a finite longitudinal intercept.

3. For the polar angle, with $u_*:=1/r_*$,
   $$\Delta:=\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\,(E-V(r))}} =\int_0^{u_*}\frac{b\,\mathrm du}{\sqrt{1-\dfrac{\kappa}{E}u-b^2u^2}} =\frac{\pi}{2}-\arctan\frac{\kappa}{2Eb}.$$

4. Write $n_\pm=\lim_{t\to\pm\infty}r(t)/|r(t)|$. Then
   $n_+=v_+/|v_+|$, $n_-=-v_-/|v_-|$, and in an oriented polar plane
   the outgoing velocity direction is the incoming direction rotated by
   $2\Delta-\pi\in(-\pi,0)$. In particular
   $$\frac{\langle v_-,v_+\rangle}{|v_-||v_+|}=\cos(\pi-2\Delta),\qquad \theta_{\mathrm s}=\pi-2\Delta=2\arctan\frac{\kappa}{2Eb}.$$
   For fixed $\mu,\kappa,E$ this gives an actual family for every $b>0$,
   with angular momentum $J(b)=\sqrt{2\mu E}\,b$: choose its unique turning
   radius and initial data $r(0)=r_*e_1$, $r'(0)=J(b)e_2/(\mu r_*)$.
   Local existence and the extension in clause 2 give a member of the family
   for every $b$, unique up to apsis time and oriented plane placement.

## Facts & Assumptions

**Given:** The repulsive Coulomb data $\mu,\kappa,E,J$, the effective potential $V$, the outer turning point $r_*$, and a scattering trajectory with apsis time $t_*$.

[L1] Polar reduction and energy: $r=\rho\,n(\theta)$, $\rho=|r|$, $\rho^2\theta'=J/\mu$, $\mu\rho''=-V'(\rho)$, $E=\frac12\mu(\rho')^2+V(\rho)$ ([[thm-cm-central-force-polar-reduction]]); here $V=U^{\mathrm{eff}}_J$ ([[def-cm-central-force-trajectory]]).

[L2] A continuous real function on an interval with everywhere negative derivative is strictly decreasing; a strictly monotone continuous function assumes each intermediate value exactly once, and its inverse is differentiable at $f(c)$ with derivative $1/f\prime(c)$ whenever $f$ is differentiable at $c$ with $f\prime(c)\ne0$ ([[thm-monotonicity-from-the-derivative]], [[thm-intermediate-value]], [[thm-derivative-of-an-inverse]], [[def-interval]]).

[L3] The Cartesian field $G(x,v):=(v,\kappa x/(\mu|x|^3))$ is defined on the open set $D:=\{(x,v):|x|>0\}$ and is $C^1$ there. Its acceleration derivative is $D_x(\kappa x/(\mu|x|^3))[h]=\frac{\kappa}{\mu}\bigl(|x|^{-3}h-3|x|^{-5}x\langle x,h\rangle\bigr)$. Thus $DG$ is bounded on a sufficiently small convex ball about each point of $D$; along a segment in such a ball, the chain rule and the vector-valued fundamental theorem of calculus give $G(z)-G(w)=\int_0^1DG(w+s(z-w))(z-w)\,ds$, and the norm inequality for vector integrals gives a finite Lipschitz bound. Hence $G$ is locally Lipschitz, so Picard–Lindelöf uniqueness and compact continuation apply on $D$ ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]], [[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] Substitution on strictly monotone branches converts time into radial level and vice versa ([[thm-substitution]], [[thm-chain-rule]], [[cor-primitives-of-a-continuous-function]]).

[L5] Trigonometry ([[thm-sine-and-cosine-derivatives]] gives $\sin x/x\to1$ from the derivative at zero): $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is the inverse of $\tan$; $\arcsin$, $\arccos$ are the principal inverses; the addition and subtraction formulas hold; $\sin^2+\cos^2=1$; $\cos$ is strictly decreasing on $[0,\pi]$ and $\sin$ is strictly increasing on $[-\pi/2,\pi/2]$ ([[def-principal-inverse-tangent]], [[def-principal-inverse-sine-and-cosine]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-tangent-cotangent-secant-cosecant]]).


[L6] The norm bound for the vector integral and componentwise Euclidean completeness justify the velocity Cauchy criterion; the Gram identity gives $|x\times v|/|v|=|x|\sin\psi$ when $\psi$ is the angle to the limiting direction ([[thm-norm-inequality-for-the-vector-valued-integral]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-euclidean-space-complete]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

## Proof

**Proof technique:** direct.

1.1 The derivative $V'(r)=-\kappa/r^2-J^2/(\mu r^3)$ is negative on $(0,\infty)$, so $V$ is strictly decreasing by [L2]; $\kappa/r\to\infty$ and $J^2/(2\mu r^2)\to\infty$ as $r\downarrow0$, while both terms tend to $0$ as $r\to\infty$. Hence $V$ is a continuous strictly decreasing bijection $(0,\infty)\to(0,\infty)$; since $E>0$ lies in the range, $r_*=V^{-1}(E)$ is the unique solution of $V=E$, it is simple because $V'<0$ everywhere, and $V(r)<E$ for $r>r_*$. This is clause 1. [given, L2, algebra]

2.1 Global continuation: energy and angular momentum are conserved by [L1], and $V(\rho)\le E$ forces $\rho\ge r_*$ since $V$ is strictly decreasing. Also $|r'|\le c:=\sqrt{2E/\mu}$ because $U>0$. At any finite endpoint, $|r|$ is bounded above by its value at a fixed time plus $c$ times the elapsed time, and $r$ stays at least $r_*$ from the origin. Thus the Cartesian state $(r,r')$ stays in a compact subset of $\{(x,v):|x|>0\}$ near that endpoint. The Cartesian field $(v,\kappa x/(\mu|x|^3))$ is smooth there; compact continuation [L3] extends the solution past every finite right endpoint. For a finite left endpoint apply the same argument to the time-reversed state $(r(-s),-r'(-s))$, which solves the same autonomous Cartesian system; uniqueness [L3] then makes the global extension unique. The maximal extension therefore has domain $\mathbb R$. [step 1.1, L1, L3, algebra]

3.1 Branch shape: $\rho''=-V'(\rho)/\mu>0$ for all times by step 1.1. Hence $\rho'$ is strictly increasing, vanishes at $t_*$ by the energy identity, is negative before $t_*$ and positive after it. Consequently the apsis is unique and $\rho>r_*$ elsewhere. Fixing any $t_1>t_*$ gives $\rho'(t)\ge\rho'(t_1)>0$ for $t\ge t_1$, so $\rho\to\infty$ forward; the same argument backward gives $\rho\to\infty$ there. On either open branch, compact substitution [L4] and then limits give $|t-t_*|=\int_{r_*}^{\rho(t)}ds/\sqrt{(2/\mu)(E-V(s))}$. Its lower endpoint is integrable since $E-V(s)$ is comparable to $s-r_*$ by $V'(r_*)<0$; its upper endpoint diverges since the integrand tends to $1/c>0$. This proves the branch and quadrature claims without a finite-range hypothesis. [step 1.1, step 2.1, L1, L2, L4, algebra]

4.1 Asymptotic velocities and their speed: since $V(\rho(t))\to0$ along each branch (as $\rho(t)\to\infty$), $|\rho'|\to\sqrt{2E/\mu}$. Put $c:=\sqrt{2E/\mu}$ and $c_0:=c/2>0$. The radial-speed limit implies $|\rho'(t)|\ge c_0$ for sufficiently large $|t|$; integrating on each monotone branch gives $\rho(t)\ge c_0|t|-C_0$ for a finite constant $C_0$. In particular $\rho(t)\ge(c_0/2)|t|$ after increasing the tail cutoff. The acceleration of the Cartesian curve is $\mu r''=-\bigl(U'(\rho)/\rho\bigr)r$, so $\lVert r''\rVert_2=|U'(\rho)|/\mu=\kappa/(\mu\rho^2)\le C/(1+|t|)^2$ for large $|t|$, an integrable bound along each half-line; the Cauchy criterion for the vector integral (the integral of $r''$ over $[s,t]$ is bounded by $\int_s^t\lVert r''\rVert_2$) therefore gives existence of $v_\pm=\lim_{t\to\pm\infty}r'(t)$. Passing to the limit in the energy identity $E=\frac12\mu\lVert r'\rVert_2^2+U(\rho(t))$ with $U(\rho(t))\to0$ gives $|v_\pm|=\sqrt{2E/\mu}$. [step 3.1, L1, L4, L6, algebra]

4.2 Half-angle quadrature: on compact subintervals of either open branch use $\theta'=J/(\mu\rho^2)$ and $|\rho'|=\sqrt{(2/\mu)(E-V)}$ in [L4]. Taking limits gives the same positive half-angle on both sides of the apsis, $$\Delta=\int_{r_*}^{\infty}\frac{J\,ds}{s^2\sqrt{2\mu(E-V(s))}}=\int_0^{u_*}\frac{b\,du}{\sqrt{1-(\kappa/E)u-b^2u^2}}.$$ Each substitution is first on an interior compact interval. The integral converges at $r_*$ by the square-root bound of step 3.1 and at infinity by the bound $C/s^2$, so it gives finite limits $\theta_\pm$ with $\theta_+-\theta_*=\theta_*-\theta_-=\Delta$. [step 3.1, L1, L4, algebra]

5.1 Evaluation with scaled roots: put $w=bu$, $A=\sqrt{1+\alpha^2/4}$ and $w_*=(\sqrt{\alpha^2+4}-\alpha)/2=bu_*$, where $\alpha=\kappa/(Eb)$. Then $1-\alpha w-w^2=A^2-(w+\alpha/2)^2$. Substitute $w+\alpha/2=A\sin\psi$ on interior compact intervals, where $\psi\in(\psi_0,\pi/2)$ and $\psi_0=\arcsin(\alpha/(2A))\in(0,\pi/2)$. The derivative is $A\cos\psi>0$ and the positive denominator is $A\cos\psi$, so the integral equals $\pi/2-\psi_0$ after taking limits. Since $\sin\psi_0=\alpha/\sqrt{\alpha^2+4}$ and $\cos\psi_0=2/\sqrt{\alpha^2+4}$, $\tan\psi_0=\alpha/2$, giving $\psi_0=\arctan(\alpha/2)$ by [L5]. Hence $\Delta=\pi/2-\arctan(\kappa/(2Eb))\in(0,\pi/2)$. This proves clause 3. [step 4.2, L4, L5, algebra]

6.1 Direction limits: differentiating $r=\rho n(\theta)$ gives $r'=\rho'n(\theta)+(J/(\mu\rho))\,n_\perp(\theta)$, where $n_\perp(\theta)=-\sin\theta\,e_1+\cos\theta\,e_2$. By step 4.1, $\rho'\to c$ forward and $\rho'\to-c$ backward, while the tangential term tends to zero. Step 4.2 therefore gives $v_+=c\,n(\theta_+)$ and $v_-=-c\,n(\theta_-)$. The addition formulas [L5] and $\theta_+-\theta_-=2\Delta$ show the velocity rotation $2\Delta-\pi$ and the displayed cosine. There is no hidden extra winding: the radial coefficient $\rho'$ changes sign only once, the tangential coefficient is always positive, so the velocity direction relative to $n(\theta)$ varies continuously from $\pi$ to $0$ through the upper half-plane; its net change is $2\Delta-\pi$. [step 4.1, step 4.2, step 5.1, L1, L5, algebra]

7.1 Impact limit: put $q(s)=\sqrt{(2/\mu)(E-V(s))}$ for $s>r_*$. On the outgoing branch the remaining angle is $\Psi(t)=\int_{\rho(t)}^\infty J/(\mu s^2q(s))\,ds$, so $$\rho(t)\Psi(t)=\frac{J}{\mu}\int_1^\infty\frac{du}{u^2q(\rho(t)u)}.$$ As $q(s)\to c>0$, for any $\varepsilon>0$ one has $|1/q(s)-1/c|<\varepsilon$ for every $s\ge S$ for some $S$. Once $\rho(t)\ge S$, the difference between the integral above and $1/c$ is at most $\varepsilon\int_1^\infty u^{-2}\,du=\varepsilon$. Thus $\rho\Psi\to J/(\mu c)$ and $\Psi\to0$; the elementary limit $\sin\Psi/\Psi\to1$ gives $\rho\sin\Psi\to J/(\mu c)=b$. By step 6.1 this is exactly $|r(t)\times v_+|/|v_+|$. The incoming computation uses $q=|\rho'|$ and the remaining angle $\theta(t)-\theta_-$ and gives $|r(t)\times v_-|/|v_-|\to b$ as well. [step 3.1, step 4.1, step 4.2, step 6.1, L1, L4, L5, L6, algebra]

8.1 For every $b>0$ set $J(b)=\sqrt{2\mu E}\,b$ and take the turning radius of clause 1. The initial data stated in clause 4 have angular momentum $J(b)e_3$ and energy $V(r_*)=E$, radial derivative zero and positive radial second derivative. Local existence [L3] supplies a trajectory and conservation [L1] forces $\rho\ge r_*$; the preceding continuation, angle and impact-limit steps apply to it. Uniqueness [L3] determines it from its apsis state. Thus this actual family realises the deflection formula for all $b>0$, and all clauses are proved. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1, step 7.1, L1, L3, algebra] ∎
