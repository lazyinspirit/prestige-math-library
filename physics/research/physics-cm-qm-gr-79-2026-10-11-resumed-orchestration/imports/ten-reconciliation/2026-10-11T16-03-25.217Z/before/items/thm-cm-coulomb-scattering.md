---
id: thm-cm-coulomb-scattering
kind: theorem
title: "Repulsive Coulomb scattering: the unique outer turning point, global non-colliding motion, the asymptotic impact distance and $\\Delta=\\pi/2-\\arctan(\\kappa/(2Eb))$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-central-force-trajectory, def-cm-scattering-data, thm-cm-central-force-polar-reduction, thm-cm-scattering-turning-point-and-global-branches, thm-picard-lindelof-local-existence-and-uniqueness, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, thm-substitution, thm-derivative-of-an-inverse, thm-chain-rule, thm-algebra-of-derivatives, thm-intermediate-value, cor-primitives-of-a-continuous-function, thm-monotonicity-from-the-derivative, def-principal-inverse-tangent, def-principal-inverse-sine-and-cosine, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, def-tangent-cotangent-secant-cosecant, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, thm-norm-inequality-for-the-vector-valued-integral, cor-vector-valued-ftc-and-lipschitz-bound, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-cm-scattering-angle-advance]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  def-cm-scattering-data: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-cm-scattering-turning-point-and-global-branches: mathematical-premise
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
  thm-cm-scattering-angle-advance: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (358)-(366): the inverse-square scattering integral, the Rutherford angle relation and the asymptotic distance"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.5, Eqs. (3.68)-(3.69): the scattering integral for the Coulomb potential, $\\tan(\\theta/2)=\\alpha/(2Eb)$"
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
3. For the polar angle, with $u_*:=1/r_*$,
   $$\Delta:=\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\,(E-V(r))}} =\int_0^{u_*}\frac{b\,\mathrm du}{\sqrt{1-\dfrac{\kappa}{E}u-b^2u^2}} =\frac{\pi}{2}-\arctan\frac{\kappa}{2Eb}.$$

## Facts & Assumptions

**Given:** The repulsive Coulomb data $\mu,\kappa,E,J$, the effective potential $V$, the outer turning point $r_*$, and a scattering trajectory with apsis time $t_*$.

[L1] Polar reduction and energy: $r=\rho\,n(\theta)$, $\rho=|r|$, $\rho^2\theta'=J/\mu$, $\mu\rho''=-V'(\rho)$, $E=\frac12\mu(\rho')^2+V(\rho)$ ([[thm-cm-central-force-polar-reduction]]); here $V=U^{\mathrm{eff}}_J$ ([[def-cm-scattering-data]]).

[L2] A continuous real function on an interval with everywhere negative derivative is strictly decreasing; a strictly monotone continuous function assumes each intermediate value exactly once, and its inverse is differentiable with reciprocal derivative ([[thm-monotonicity-from-the-derivative]], [[thm-intermediate-value]], [[thm-derivative-of-an-inverse]], [[def-interval]]).

[L3] Compact continuation and uniqueness for the state $(\rho,\rho',\theta)$ with right-hand side $\bigl(x_2,-\mu^{-1}V'(x_1),J/(\mu x_1^2)\bigr)$, continuous and locally Lipschitz on $(0,\infty)\times\mathbb R\times\mathbb R$ because $V'$ is $C^1$ there ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] Substitution on strictly monotone branches converts time into radial level and vice versa ([[thm-substitution]], [[thm-chain-rule]], [[cor-primitives-of-a-continuous-function]]).

[L5] Trigonometry: $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is the inverse of $\tan$; $\arcsin$, $\arccos$ are the principal inverses; the addition and subtraction formulas hold; $\sin^2+\cos^2=1$; $\cos$ is strictly decreasing on $[0,\pi]$ and $\sin$ is strictly increasing on $[-\pi/2,\pi/2]$ ([[def-principal-inverse-tangent]], [[def-principal-inverse-sine-and-cosine]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-tangent-cotangent-secant-cosecant]]).


## Proof

**Proof technique:** direct.

1.1 The derivative $V'(r)=-\kappa/r^2-J^2/(\mu r^3)$ is negative on $(0,\infty)$, so $V$ is strictly decreasing by [L2]; $\kappa/r\to\infty$ and $J^2/(2\mu r^2)\to0$ as $r\downarrow0$, while both terms tend to $0$ as $r\to\infty$. Hence $V$ is a continuous strictly decreasing bijection $(0,\infty)\to(0,\infty)$; since $E>0$ lies in the range, $r_*=V^{-1}(E)$ is the unique solution of $V=E$, it is simple because $V'<0$ everywhere, and $V(r)<E$ for $r>r_*$. This is clause 1. [given, L2, algebra]

2.1 Branch shape and global extension: the connected-component argument used in the proof of [[thm-cm-scattering-turning-point-and-global-branches]] applies verbatim to the present $V$ (only the range of $U$ differs): from $\rho'^2=(2/\mu)(E-V(\rho))$ and the strict minimum $\rho''(t_*)=-V'(r_*)/\mu>0$ one gets $\rho>r_*$ exactly for $t\ne t_*$, with $\rho'<0$ on $(-\infty,t_*)$ and $\rho'>0$ on $(t_*,\infty)$. Along the increasing branch the substitution $\rho=\rho(t)$ gives $t-t_*=\int_{r_*}^{\rho(t)}\mathrm ds/\sqrt{(2/\mu)(E-V(s))}$; as $\rho(t)\to\infty$ the integrand tends to $\sqrt{\mu/(2E)}>0$, so this time diverges: the forward endpoint is $+\infty$, and symmetrically the backward endpoint is $-\infty$. Hence the unique extension of $r$ has domain $\mathbb R$ and never collides with the origin. [step 1.1, L1, L3, L4, algebra]

3.1 Asymptotic velocities and their speed: since $V(\rho(t))\to0$ along each branch (as $\rho(t)\to\infty$), $|\rho'|\to\sqrt{2E/\mu}$ and, for large $|t|$, $|\rho'|\ge c>0$ and $\rho(t)\ge c|t|$ up to an additive constant. The acceleration of the Cartesian curve is $\mu r''=-\bigl(U'(\rho)/\rho\bigr)r$, so $\lVert r''\rVert_2=|U'(\rho)|/\mu=\kappa/(\mu\rho^2)\le C/(1+|t|)^2$ for large $|t|$, an integrable bound along each half-line; the Cauchy criterion for the vector integral (the integral of $r''$ over $[s,t]$ is bounded by $\int_s^t\lVert r''\rVert_2$) therefore gives existence of $v_\pm=\lim_{t\to\pm\infty}r'(t)$. Passing to the limit in the energy identity $E=\frac12\mu\lVert r'\rVert_2^2+U(\rho(t))$ with $U(\rho(t))\to0$ gives $|v_\pm|=\sqrt{2E/\mu}$. [step 2.1, L1, L4, algebra]

3.2 The half-angle integral: by clause 2 and the argument of clause 1 of [[thm-cm-scattering-angle-advance]] (which uses only the branch structure and the identity $\rho^2\theta'=J/\mu$), $$\Delta=\theta(\infty)-\theta(t_*)=\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\bigl(E-V(r)\bigr)}} .$$ Substituting $u=1/r$ (of class $C^1$ and strictly monotone on $(r_*,\infty)$) [L4] gives, with $V(1/u)=\kappa u+J^2u^2/(2\mu)$ and $J^2/(2\mu E)=b^2$, $$\Delta=\int_0^{u_*}\frac{J\,\mathrm du}{\sqrt{2\mu E}\sqrt{1-\frac{\kappa}{E}u-b^2u^2}}=\int_0^{u_*}\frac{b\,\mathrm du}{\sqrt{1-\frac{\kappa}{E}u-b^2u^2}} .$$ [step 2.1, L1, L4, algebra]

4.1 Evaluation: put $\alpha:=\kappa/(Eb)>0$, so $\kappa/E=\alpha b$, and note that $u_*$ is the positive root of $b^2u^2+\alpha b\,u-1=0$, i.e. of $b^2u^2+(\kappa/E)u-1=0$: indeed $V(r_*)=E$ is exactly this equation in $u_*=1/r_*$. Dividing by $b^2$ and writing $w:=bu$, $\beta:=u_*/(u_*+c)$ where $-c<0$ is the other root, the substitution $w=u_*-(u_*+c)\sin^2\vartheta$ (a strictly monotone $C^1$ change of variable) turns the integral into $\Delta=2\vartheta_0$ with $\sin^2\vartheta_0=u_*/(u_*+c)$; the roots of $z^2+\alpha z-1=0$ are $z=(-\alpha\pm\sqrt{\alpha^2+4})/2$, so with $w=bu$, $u_*=(\sqrt{\alpha^2+4}-\alpha)/(2b)$ and $u_*+c=\sqrt{\alpha^2+4}/b$, giving $$\cos(2\vartheta_0)=1-2\sin^2\vartheta_0=1-2\cdot\frac{\sqrt{\alpha^2+4}-\alpha}{2\sqrt{\alpha^2+4}}=\frac{\alpha}{\sqrt{\alpha^2+4}},\qquad \sin(2\vartheta_0)=\frac{2}{\sqrt{\alpha^2+4}} .$$ [step 3.2, L4, L5, algebra]

4.2 Asymptotic perpendicular distance: on the outgoing branch, for $t\ge t_*$ the remaining polar angle is $\Psi(t):=\theta(\infty)-\theta(t)=\int_t^\infty J/(\mu\rho(s)^2)\,\mathrm ds$, finite because the integral converges; the direction $r(t)/\rho(t)=n(\theta(t))$ makes the angle $\Psi(t)$ with the limiting direction $n(\theta(\infty))=v_+/|v_+|$, so the distance from $r(t)$ to the line through the origin with direction $v_+/|v_+|$ is $\rho(t)\sin\Psi(t)$. Substituting $s=\rho(\tau)$ in the last integral gives $\Psi(t)=\int_{\rho(t)}^{\infty}J\,\mathrm ds/(\mu s^2\rho'(s))$; substituting $s=\rho(t)u$ gives $$\rho(t)\Psi(t)=\frac{J}{\mu}\int_1^\infty\frac{\mathrm du}{u^2\,\rho'(\rho(t)u)} .$$ Let $c:=\sqrt{2E/\mu}$ and $S$ be such that $|\rho'(s)-c|\le c/2$ and $|\rho'(s)|\ge c/2$ for $s\ge S$ (possible by step 3.1). For $\rho(t)\ge S$ split the integrand: on $u\ge S/\rho(t)$ one has $|1/\rho'-1/c|\le(2/c^2)|\rho'-c|\le\varepsilon$ whenever $\rho(t)$ is large enough; on $1\le u\le S/\rho(t)$ the bracket is bounded by $2/c$ while $\int_1^{S/\rho(t)}u^{-2}\,\mathrm du\le S/\rho(t)\to0$. Hence the integral tends to $(1/c)\int_1^\infty u^{-2}\,\mathrm du=1/c$, so $\rho(t)\Psi(t)\to J/(\mu c)=J/\sqrt{2\mu E}=b$. Since $\Psi(t)\to0$ and $\sin\Psi/\Psi\to1$, also $\rho(t)\sin\Psi(t)\to b$. The incoming branch gives the same computation with $|v_-|=\sqrt{2E/\mu}$, so $J=\mu b|v_\pm|$; this is clause 2. [step 2.1, step 3.1, L1, L4, L5, algebra]

5.1 Thus $\cos\Delta=\alpha/\sqrt{\alpha^2+4}$ and $\sin\Delta=2/\sqrt{\alpha^2+4}$ with $\Delta=2\vartheta_0\in(0,\pi/2)$. Let $\beta_0:=\arctan(\alpha/2)\in(0,\pi/2)$. Then $\tan\beta_0=\alpha/2$, so by [L5] $\cos\beta_0=1/\sqrt{1+\tan^2\beta_0}=2/\sqrt{\alpha^2+4}=\sin\Delta$ and $\sin\beta_0=\tan\beta_0\cos\beta_0=\alpha/\sqrt{\alpha^2+4}=\cos\Delta$. Hence $\cos(\pi/2-\beta_0)=\sin\beta_0=\cos\Delta$ by the subtraction formula [L5] with $\cos(\pi/2)=0$, $\sin(\pi/2)=1$; both $\Delta$ and $\pi/2-\beta_0$ lie in $[0,\pi]$ and $\cos$ is strictly decreasing there, so $\Delta=\pi/2-\beta_0=\pi/2-\arctan(\kappa/(2Eb))$, which is clause 3. [step 4.1, L5, algebra] ∎
