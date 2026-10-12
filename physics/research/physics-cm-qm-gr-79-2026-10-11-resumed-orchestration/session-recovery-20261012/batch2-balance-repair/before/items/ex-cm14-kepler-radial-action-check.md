---
id: ex-cm14-kepler-radial-action-check
kind: example
title: "The gravitational two-body model on an elliptic orbit: two simple turning points of the effective potential and $J_{\\mathrm a}'(E)=T/(2\\pi)=\\sqrt{\\mu/\\kappa}\\,a^{3/2}$"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps: [post-cm05-gravity, post-cm05-central-model, pthm-cm05-relative-reduction, pthm-cm05-effective-potential, pthm-cm05-kepler-period, thm-cm-kepler-conic-and-eccentricity, thm-cm-kepler-orbit-period, thm-cm-central-force-polar-reduction, def-cm-central-force-trajectory, def-cm-one-dimensional-action-variable, thm-cm-action-variable-derivative, def-cm02-newtonian-flow, def-cm01-units, def-continuity-real, def-ck-euclidean-maps-and-diffeomorphisms, def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-chain-rule, cor-mean-value-theorem, thm-intermediate-value, thm-derivative-of-an-inverse, thm-substitution, cor-vector-valued-ftc-and-lipschitz-bound, def-darboux-integral, def-interval, pthm-cm14-action-angle]
dependency_roles:
  pthm-cm14-action-angle: physical-result
  post-cm05-gravity: physical-assumption
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-effective-potential: physical-result
  pthm-cm05-kepler-period: physical-result
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  thm-cm-kepler-orbit-period: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  def-cm-central-force-trajectory: mathematical-premise
  def-cm-one-dimensional-action-variable: mathematical-premise
  thm-cm-action-variable-derivative: mathematical-premise
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-continuity-real: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-substitution: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance inside the two-label gravitational model of the framework's force branch: for an elliptic relative orbit ($j=Je_3$, $J>0$, $E<0$, eccentricity $0\\le e<1$), the Kepler effective potential has exactly two simple turning points on the energy window between its minimum and $0$; the one-dimensional action variable of the radial problem is $C^1$ there with derivative $T/(2\\pi)$; and the radial quadrature is the orbital period, so $J_{\\mathrm a}'(E)=T/(2\\pi)=\\sqrt{\\mu/\\kappa}\\,a^{3/2}$ with $T^2=4\\pi^2\\mu a^3/\\kappa$. The example uses only the model's declared couplings $\\kappa=G_{\\mathrm N}m_1^{g}m_2^{g}$ and masses; no measured value of $G_{\\mathrm N}$ and no empirical premise is used, and no real orbit is claimed to obey the model."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.5.3 and 4.5.4, printed pages 108-113 (PDF pages 114-119): the one-dimensional frequency identity and the Kepler action variables of the bound orbits"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 3.4 and 10.2, chapter pages 7-15 and 5-8 (PDF pages 39-47 and 241-244): the effective potential of the central motion with its minimum, and the action variable of a periodic motion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 4, Sections 4.4-4.6, printed pages 74-91 (PDF pages 77-94): the Hamilton-Jacobi equation, the Kepler problem and action-angle variables in the course's local treatment"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Example

Adopt the two-label gravitational model of [[post-cm05-gravity]] clause (i)
inside the central-force model of [[post-cm05-central-model]]: inertial
masses $m_{1},m_{2}>0$, $M=m_{1}+m_{2}$, reduced mass
$\mu=m_{1}m_{2}/M$, gravitational couplings $m_{1}^{g},m_{2}^{g}>0$,
$\kappa=G_{\mathrm N}m_{1}^{g}m_{2}^{g}>0$ and the pair potential of
[[pthm-cm05-relative-reduction]]. Let $x:J\to Q$ be a motion whose
relative coordinate $r$ has constant angular momentum $j=Je_{3}$ with
$J>0$ and constant energy $E<0$, and let $0\le e<1$, $\theta_{0}$,

$$p=\frac{J^{2}}{\mu\kappa},\qquad a=\frac{p}{1-e^{2}},\qquad b=a\sqrt{1-e^{2}},\qquad T=2\pi\sqrt{\frac{\mu}{\kappa}}\,a^{3/2}$$
be its conic data ([[thm-cm-kepler-conic-and-eccentricity]],
[[pthm-cm05-kepler-period]]). Write

$$I_{0}:=\left(-\frac{\mu\kappa^{2}}{2J^{2}},\,0\right),\qquad r_{*}:=\frac{J^{2}}{\mu\kappa}=p,\qquad U^{\mathrm{eff}}(\rho):=-\frac{\kappa}{\rho}+\frac{J^{2}}{2\mu\rho^{2}}\quad(\rho>0)$$
for the effective potential of [[pthm-cm05-effective-potential]] (its
effective potential $U^{\mathrm{eff}}_{J}$). The example verifies:

1. **(two simple turning points)** $U^{\mathrm{eff}}$ is of class
   $C^{\infty}$ on $(0,\infty)$, has the unique critical point $r_{*}$
   with $U^{\mathrm{eff}}(r_{*})=-\mu\kappa^{2}/(2J^{2})$, is strictly
   decreasing on $(0,r_{*})$ and strictly increasing on $(r_{*},\infty)$;
   hence for every $E\in I_{0}$ there are exactly two solutions
   $0<r_{-}(E)<r_{*}<r_{+}(E)$ of $U^{\mathrm{eff}}(\rho)=E$, with
   $(U^{\mathrm{eff}})'(r_{-}(E))<0<(U^{\mathrm{eff}})'(r_{+}(E))$ and
   $U^{\mathrm{eff}}<E$ between them, and the datum
   $(J_{0},U^{\mathrm{eff}},\mu)$ with $J_{0}=(0,\infty)$ satisfies the
   hypotheses of [[thm-cm-action-variable-derivative]] on the energy
   window $I_{0}$.
2. **(action derivative)** consequently the action variable
   $J_{\mathrm a}$ of [[def-cm-one-dimensional-action-variable]] is of
   class $C^{1}$ on $I_{0}$ with
$$J_{\mathrm a}'(E)=\frac{T_{\mathrm{rad}}(E)}{2\pi},\qquad T_{\mathrm{rad}}(E)=\sqrt{2\mu}\int_{r_{-}(E)}^{r_{+}(E)}\frac{\mathrm d\rho}{\sqrt{E-U^{\mathrm{eff}}(\rho)}}\in(0,\infty).$$

3. **(quadrature equals the orbital period)** the radial coordinate of
   the motion solves the one-dimensional problem of clause 1 of
   [[pthm-cm05-effective-potential]] with the same energy, and its least
   positive period is the orbital period $T$ of the conic data; the time
   quadrature of that problem is $T_{\mathrm{rad}}(E)=T$, so that
$$J_{\mathrm a}'(E)=\frac{T}{2\pi}=\sqrt{\frac{\mu}{\kappa}}\,a^{3/2},\qquad T^{2}=\frac{4\pi^{2}\mu a^{3}}{\kappa}.$$

4. **(sharpness of the hypotheses)** for $e=0$ the two turning points
   coalesce at the critical point $r_{*}=a$ and the simple-turning-point
   hypothesis of the action-variable theorem fails; the value $J=0$ is
   outside this example (no two-sided bound radial motion), so both
   hypotheses of the construction are genuinely used.

The couplings $\kappa$ and the masses are declared model parameters; no
measured value of $G_{\mathrm N}$ and no empirical premise enters.

## Facts & Assumptions

**Given:** The gravitational model data $m_{1},m_{2},\kappa>0$, the
motion with $j=Je_{3}$, $J>0$, $E<0$, the conic data
$p,e,a,b,T$, the effective potential $U^{\mathrm{eff}}$ and the energy
window $I_{0}$.

[L1] Model and reduction ([[post-cm05-gravity]],
[[post-cm05-central-model]], [[pthm-cm05-relative-reduction]],
[[pthm-cm05-effective-potential]]): the relative coordinate $r$ of the
motion is a central-force trajectory for $(\mu,u)$ with
$u(\rho)=-\kappa/\rho$, and its $\rho=|r|$ solves the one-dimensional
problem of mass $\mu$ in the potential $U^{\mathrm{eff}}$:
$\mu\rho''=-(U^{\mathrm{eff}})'(\rho)$, with
$E=\tfrac12\mu(\rho')^{2}+U^{\mathrm{eff}}(\rho)$ constant; moreover
$\rho^{2}\theta'=J/\mu>0$ for the polar angle $\theta$.

[L2] Conic geometry ([[thm-cm-kepler-conic-and-eccentricity]],
[[thm-cm-kepler-orbit-period]], [[pthm-cm05-kepler-period]],
[[thm-cm-central-force-polar-reduction]]): with
$e\ge0$ and $\theta_{0}$ as in the cited conic theorem,
$\rho(t)=p/(1+e\cos(\theta(t)-\theta_{0}))$ and
$E=\frac{\mu\kappa^{2}}{2J^{2}}(e^{2}-1)$; consequently $e<1$ is
equivalent to $E<0$, and for $0<e<1$ the radial coordinate is
$T$-periodic, $\rho(t+T)=\rho(t)$ and $\rho'(t+T)=\rho'(t)$, with
$T=2\pi\sqrt{\mu/\kappa}\,a^{3/2}=2\pi\mu ab/J$, and the polar angle is a
strictly increasing bijection $\theta:\mathbb R\to\mathbb R$ with
$\theta(t+T)=\theta(t)+2\pi$.

[L3] Calculus and integrals ([[def-derivative]],
[[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]],
[[thm-chain-rule]], [[cor-mean-value-theorem]],
[[thm-intermediate-value]], [[def-continuity-real]],
[[def-ck-euclidean-maps-and-diffeomorphisms]],
[[thm-derivative-of-an-inverse]], [[thm-substitution]],
[[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-darboux-integral]],
[[def-interval]]): sums, quotients with nonzero denominator and powers
of class $C^{\infty}$ are $C^{\infty}$; the derivative of
$\rho\mapsto\kappa/\rho$ is $-\kappa/\rho^{2}$ and that of
$\rho\mapsto J^{2}/(2\mu\rho^{2})$ is $-J^{2}/(\mu\rho^{3})$; the
mean-value theorem, the intermediate value theorem and the one-variable
inverse-function rule hold on intervals; a continuous integrand on a
compact interval is Riemann integrable, substitution is available for
strictly monotone $C^{1}$ changes of variables, and
$\int_{c}^{d}u'=u(d)-u(c)$ for a $C^{1}$ function $u$ on $[c,d]$.

[L4] Action-variable theorems ([[def-cm-one-dimensional-action-variable]],
[[thm-cm-action-variable-derivative]]): for the datum
$(J_{0},U^{\mathrm{eff}},\mu)$ with the two simple turning points
$a(E)<b(E)$ on an energy interval $(E_{0},E_{1})$ and
$(U^{\mathrm{eff}})'(a)<0<(U^{\mathrm{eff}})'(b)$, the action variable
$J_{\mathrm a}$ is $C^{1}$ and
$J_{\mathrm a}'(E)=T(E)/(2\pi)$ with the displayed quadrature $T(E)$.

## Verification

**Proof technique:** direct; compute the effective potential's derivative
and signs, produce the two simple roots by the intermediate-value and
mean-value theorems, apply the one-dimensional action-variable theorem,
and identify the time quadrature with the orbital period.

1.1 Derivative and critical point: by [L3], $(U^{\mathrm{eff}})'(\rho)=\frac{\kappa}{\rho^{2}} -\frac{J^{2}}{\mu\rho^{3}} =\frac{\kappa\rho-J^{2}/\mu}{\rho^{3}} =\frac{\kappa(\rho-r_{*})}{\rho^{3}},$ which vanishes exactly at $\rho=r_{*}=J^{2}/(\mu\kappa)$ and has the sign of $\rho-r_{*}$; and $U^{\mathrm{eff}}(r_{*})=-\kappa\mu\kappa/J^{2}+J^{2}\mu^{2}\kappa^{2} /(2\mu J^{4})=-\mu\kappa^{2}/(2J^{2})$. Also $U^{\mathrm{eff}}(r_{*}/2)=-\kappa\mu\kappa/(2J^{2})+\mu\kappa^{2}/(2J^{2}) =0$, and for any $E\in I_{0}$ and $R:=r_{*}+\kappa/|E|$ one has $U^{\mathrm{eff}}(R)>-\kappa/R>-|E|=E$. [L3, algebra]

2.1 Monotonicity and the two simple roots: if $0<\rho_{1}<\rho_{2}\le r_{*}$, then by [L3] the mean-value theorem applied to $U^{\mathrm{eff}}$ on $[\rho_{1},\rho_{2}]$ gives $U^{\mathrm{eff}}(\rho_{2})-U^{\mathrm{eff}}(\rho_{1}) =(U^{\mathrm{eff}})'(\xi)(\rho_{2}-\rho_{1})<0$; hence $U^{\mathrm{eff}}$ is strictly decreasing on $(0,r_{*}]$. Similarly, on $r_{*}\le\rho_{1}<\rho_{2}$, the increment is positive, so $U^{\mathrm{eff}}$ is strictly increasing on $[r_{*},\infty)$. Now fix $E\in I_{0}$. By step 1.1, $U^{\mathrm{eff}}(r_{*})<E<0=U^{\mathrm{eff}}(r_{*}/2)$; since $U^{\mathrm{eff}}$ is continuous, the intermediate-value theorem gives $r_{-}(E)\in(r_{*}/2,r_{*})$ with $U^{\mathrm{eff}}(r_{-}(E))=E$, and strict monotonicity makes it unique on $(0,r_{*}]$. Likewise $U^{\mathrm{eff}}(r_{*})<E<U^{\mathrm{eff}}(R)$ gives a unique $r_{+}(E)\in(r_{*},R)$ with $U^{\mathrm{eff}}(r_{+}(E))=E$, and monotonicity makes the root unique on $[r_{*},\infty)$. The intermediate values on $(r_{-}(E),r_{+}(E))$ lie below $E$ because the only point where $U^{\mathrm{eff}}$ could reach $E$ again would be a third root. The roots are simple: $(U^{\mathrm{eff}})'(r_{-}(E))<0<(U^{\mathrm{eff}})'(r_{+}(E))$ because $r_{-}(E)<r_{*}<r_{+}(E)$ and the sign computation of step 1.1. The assignments $E\mapsto r_{\pm}(E)$ therefore have the properties required in [L4] on the energy interval $I_{0}$. [L3, step 1.1, algebra]

3.1 Applying the action-variable theorem: by step 2.1 the datum $(J_{0},U^{\mathrm{eff}},\mu)$ satisfies the hypotheses of [L4] on $I_{0}=(E_{0},E_{1})$; hence $J_{\mathrm a}$ is $C^{1}$ on $I_{0}$ and $J_{\mathrm a}'(E)=T_{\mathrm{rad}}(E)/(2\pi)$ with the quadrature $T_{\mathrm{rad}}(E)=\sqrt{2\mu}\int_{r_{-}(E)}^{r_{+}(E)} \mathrm d\rho/\sqrt{E-U^{\mathrm{eff}}(\rho)}>0$, which is claim 2. [L4, step 2.1, algebra]

3.2 The quadrature is the radial period: by [L1] the radial coordinate $\rho$ of the motion solves $\mu\rho''=-(U^{\mathrm{eff}})'(\rho)$ with $\tfrac12\mu(\rho')^{2}+U^{\mathrm{eff}}(\rho)=E$, so on every stretch on which $\rho$ is strictly monotone one has $\rho'\neq0$ and $(\rho')^{2}=2(E-U^{\mathrm{eff}}(\rho))/\mu$, i.e. $\rho'=\pm\sqrt{2(E-U^{\mathrm{eff}}(\rho))/\mu}$. On the stretch from $r_{-}(E)$ to $r_{+}(E)$ the coordinate $\rho$ is strictly increasing, so its inverse $\rho\mapsto t(\rho)$ is defined; by the one-variable inverse rule of [L3] it satisfies $t'(\rho)=1/\rho'(t(\rho))$, and the time elapsed is $\Delta t=t\bigl(r_{+}(E)\bigr)-t\bigl(r_{-}(E)\bigr) =\int_{r_{-}(E)}^{r_{+}(E)}\frac{\mathrm d\rho}{\rho'(t(\rho))} =\int_{r_{-}(E)}^{r_{+}(E)}\frac{\sqrt{\mu}\,\mathrm d\rho} {\sqrt{2(E-U^{\mathrm{eff}}(\rho))}},$ where the last equality substitutes the positive branch $\rho'=\sqrt{2(E-U^{\mathrm{eff}}(\rho))/\mu}$ along the increasing stretch. The decreasing stretch contributes the same amount by symmetry of the same substitution with the negative branch, and the radial oscillation has two turning points per period; hence its period is $2\Delta t=\sqrt{2\mu}\int_{r_{-}(E)}^{r_{+}(E)} \frac{\mathrm d\rho}{\sqrt{E-U^{\mathrm{eff}}(\rho)}}=T_{\mathrm{rad}}(E).$ [L1, L3, step 2.1, algebra]

4.1 Least period and the value of the derivative: by [L2] the radial coordinate satisfies $\rho(t+T)=\rho(t)$ with $T$ the orbital period of the conic data. Since $\theta:\mathbb{R}\to\mathbb{R}$ is a strictly increasing bijection with $\theta(t+T)=\theta(t)+2\pi$ and $\rho(t)=p/(1+e\cos(\theta(t)-\theta_{0}))$ with $0<e<1$, the periastron value $r_{-}(E)=p/(1+e)$ and the apastron value $r_{+}(E)=p/(1-e)$ are attained exactly once in every half-open interval of the form $[t_{0},t_{0}+T)$. Let $T_{0}>0$ be the least positive period of $\rho$; successive periastron times are then spaced exactly $T_{0}$ (if two consecutive ones were closer than $T_{0}$, reflecting the graph at its minimum would exhibit a shorter period), and the periastron count in $[t_{0},t_{0}+T)$ is therefore $T/T_{0}$; since that count is $1$, the least positive period of $\rho$ is $T$. Therefore $T_{\mathrm{rad}}(E)=T$ by step 3.2, and $J_{\mathrm a}'(E)=\frac{T}{2\pi}=\frac{\mu ab}{J} =\sqrt{\frac{\mu}{\kappa}}\,a^{3/2},$ where the last identity uses $J=\sqrt{\mu\kappa a(1-e^{2})}$ and $b=a\sqrt{1-e^{2}}$: explicitly $\mu ab/J=\mu a^{2}\sqrt{1-e^{2}}/\sqrt{\mu\kappa a(1-e^{2})} =\sqrt{\mu/\kappa}\,a^{3/2}$. Squaring $T=2\pi\sqrt{\mu/\kappa}a^{3/2}$ returns $T^{2}=4\pi^{2}\mu a^{3}/\kappa$. This is claim 3. [L2, step 3.1, step 3.2, algebra]

5.1 Sharpness: if $e=0$ then $r_{-}(E)=r_{+}(E)=a=r_{*}$ and $E=U^{\mathrm{eff}}(r_{*})$, the lower endpoint of $I_{0}$; there is no energy interval on which two distinct simple turning points exist, so the hypothesis of [L4] fails, in agreement with the circular orbit having a constant radial coordinate and no radial oscillation. The case $J=0$ has no term $J^{2}/(2\mu\rho^{2})$ and no critical point with the stated two-sided conservation, so it is outside the example by hypothesis. This is claim 4. [L2, step 2.1, step 4.1]

6.1 Claims 1-4 are verified by steps 1.1 and 2.1, by step 3.1, by steps 3.2 and 4.1, and by step 5.1 respectively; the example is verified. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎

## Remarks

- **What is checked and what is cited.** The elementary computations
  (the critical point of the effective potential, the two simple roots,
  the period quadrature) are verified here; the orbit theory that
  supplies $\rho(t)=p/(1+e\cos(\theta(t)-\theta_{0}))$, the energy
  relation $E=\mu\kappa^{2}(e^{2}-1)/(2J^{2})$ and the period
  $T=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$ is cited from the mathematical
  central-force development collected on the page `cm-math-central`. The
  example uses only the model's declared couplings and no measured
  constant.

- **Conventions.** $J_{\mathrm a}$ here is the radian action
  $J_{\mathrm a}=\frac1{2\pi}\oint p\,\mathrm dq$ of
  [[def-cm-one-dimensional-action-variable]]; the corresponding
  period-one action of [[pthm-cm14-action-angle]] is its $2\pi$-multiple.
  The identity $J_{\mathrm a}'(E)=T/(2\pi)$ is the one-dimensional
  case of the action-period relation used by the action-angle items of
  this page.
