---
id: ex-cm04-pendulum-small-angle-check
kind: example
title: "The pendulum angle chart: stability, linearized equation, finite-time bound and quadratic-energy check"
status: published
origin: session
domain: physics
dependency_level: 13
deps:
  - def-cm04-one-dimensional-models-and-equilibria
  - prop-cm-pendulum-small-angle-linearization-bound
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-mean-value-theorem
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-derivative-of-exponential
  - def-real-exponential-function-and-e
  - cor-two-less-than-e-less-than-three
  - thm-of-square-roots
  - def-euclidean-inner-product
  - def-metric-ball
  - def-cm01-units
  - def-derivative
  - def-interval
  - def-cm-mechanical-vector-field-and-energy-in-a-chart
  - lem-cm-energy-conservation-for-the-mechanical-system
  - thm-cm-energy-stability-of-a-strict-minimum
  - prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  prop-cm-pendulum-small-angle-linearization-bound: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  lem-cm-energy-conservation-for-the-mechanical-system: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the adopted ideal pendulum angle-chart equation
  m l^2 theta-ddot = -m g l sin(theta): its scalar potential and strict
  minimum, Lyapunov stability from the mathematical chart theorem, the
  linearized angular equation with frequency sqrt(g/l), the finite-time
  small-angle error bound at g=l=1, and the failure of the quadratic energy
  of the linearized angular equation to be conserved along exact motions. The
  item asserts no measured value, no period formula for finite amplitudes and
  no derivation of the effective equation from the constrained system."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Section 1.2, Eq. (1.18),
        chapter page 6 (PDF page 10): the point pendulum equation m R theta-ddot
        = -m g sin(theta); Section 3.1, Eqs. (3.1)-(3.6), chapter pages 1-2 (PDF
        pages 33-34): the effectively one-dimensional system with effective mass
        and effective potential; Section 3.2, Eqs. (3.10)-(3.18), chapter pages
        2-4 (PDF pages 34-36): the quadratic expansion about a fixed point, the
        effective spring constant and the frequency (kappa_ef/m_ef)^{1/2}"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014
        course text), Chapter 3, introduction, printed page 52 (PDF page 55):
        expansion of the potential about its minimum yields the linearised
        equations of motion about a stable equilibrium"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac3\
        3f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Adopt the **ideal planar pendulum angle-chart equation** as an effective
physical model, using the mathematical constant-metric chart of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. This angular chart
model is not an instance of the one-dimensional translational model class of
[[def-cm04-one-dimensional-models-and-equilibria]]:
$\theta$ is a dimensionless angle and its generalized inertia has dimension
mass times length squared. The chart data are
configuration domain $\mathbb R$, coordinate $\theta$ (the angle from the
downward vertical, in radians), effective mass parameter
$$m_{\mathrm{ef}}:=m\,l^{2}>0,\qquad\text{force law}\qquad F(\theta):=-m\,g\,l\,\sin\theta,$$
and constants $m,l,g>0$ of dimensions mass, length and length per time
squared ([[def-cm01-units]]). The force $F$ is a generalized torque. Its
equation of motion is
$$m\,l^{2}\,\theta''=-m\,g\,l\,\sin\theta,\qquad\text{equivalently}\qquad \theta''=-\frac{g}{l}\sin\theta,$$
the recorded source's point-pendulum equation (Eq. (1.18) there) expressed
with the effective inertia $m_{\mathrm{ef}}=ml^2$ and generalized torque
$F=-mgl\sin\theta$. The potential $U=-mgl\cos\theta$ is an energy-valued
scalar function of the dimensionless angle. The stability and linearization
calculations use the autonomous scalar equation as a mathematical chart
system with constant coefficient $M=m_{\mathrm{ef}}$. All phase norms mean
the Euclidean norm of the numerical pair $(\theta,(1\,\mathrm s)\theta')$;
the normalized time variable used in the finite-time estimate is
$s=t_{\rm phys}/(1\,\mathrm s)$. The claims checked below are:

1. the generalized torque is $-U'(\theta)$ for
   $U(\theta)=-mgl\cos\theta$, and $\theta=0$ is a strict local minimum;
2. the hanging rest point $(\theta,\theta')=(0,0)$ is Lyapunov stable, and
   the linearised angular equation is
   $m_{\mathrm{ef}}\theta''+mgl\theta=0$ with frequency $\omega=\sqrt{g/l}$;
3. at $g=1\,\mathrm{m/s^2}$, $l=1\,\mathrm m$, use $s=t_{\mathrm{phys}}/(1\,\mathrm s)$ and $z=(\theta,d\theta/ds)$. For every initial phase vector $z_0$ with $\|z_0\|_2=\delta=1/100$, radius $r=1/2$ and normalized horizon $T=1$, write $t$ for the numerical time $s$ in the bound. Then the difference between the exact motion and the harmonic motion with the same
   datum obeys
   $$\lVert z(t)-y(t)\rVert_{2}\le\frac{t\,e^{3t}}{12\cdot10^{4}}\qquad(0\le t\le1),\qquad\lVert z(1)-y(1)\rVert_{2}\le\frac{e^{3}}{12\cdot10^{4}} \approx1.67\cdot10^{-4},$$
   the source-supported bound of
   [[prop-cm-pendulum-small-angle-linearization-bound]];
4. the quadratic energy of the linearised angular equation,
   $E_{\rm quad}:=\tfrac12m_{\mathrm{ef}}\theta'^{2}+\tfrac12mgl\theta^{2}$,
   is not conserved along exact motions, with
   $$\frac{d}{dt}\Bigl[\tfrac12m_{\mathrm{ef}}\theta'^{2} +\tfrac12mgl\theta^{2}\Bigr]=mgl\,\theta'\,(\theta-\sin\theta),$$
   which is positive at the phase point $(\theta,\theta')=(\pi/2,1\,\mathrm{s^{-1}})$.

## Verification

**Proof technique:** direct; verify the angular potential and strict minimum,
apply the mathematical chart stability and linearisation results, transport
the source-supported small-angle bound with its numbers, and differentiate
the quadratic energy of the linearised angular equation along an exact motion.

**Given:** The effective pendulum model with $m_{\mathrm{ef}}=ml^{2}$,
$F=-mgl\sin\theta$, potential $U=-mgl\cos\theta$; the constants
$m,l,g>0$; the phase point $(\pi/2,1)$ for the last claim.

[L1] Applicable mathematical chart results ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]], [[lem-cm-energy-conservation-for-the-mechanical-system]], [[thm-cm-energy-stability-of-a-strict-minimum]], [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]): with the constant positive kinetic coefficient $M=ml^2$ and $U=-mgl\cos\theta$, the chart equation is $M\theta''=-U'$ and its conserved chart energy is $\tfrac12M\theta'^2+U$. A strict local minimum gives a Lyapunov-stable rest point. At a critical point the derivative linearization is $M\xi''+U''(\theta_*)\xi=0$. These mathematical results apply to the declared angular chart system, whose coordinate and inertia are not a translational position and mass in kilograms.

[L2] Derivatives, continuity and values ([[thm-sine-and-cosine-derivatives]],
[[cor-differentiable-implies-continuous]],
[[thm-quarter-turn-values-and-shift-formulas]],
[[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]],
[[cor-mean-value-theorem]], [[thm-chain-rule]],
[[thm-algebra-of-derivatives]], [[def-derivative]]):
$(\sin\theta)'=\cos\theta$, $(\cos\theta)'=-\sin\theta$, so
$U'(\theta)=mgl\sin\theta$ and $U''(\theta)=mgl\cos\theta$; since sine and
cosine are differentiable on $\mathbb R$, they are continuous there by
[[cor-differentiable-implies-continuous]], and therefore the displayed first
and second derivatives are continuous. Thus $U$ is $C^2$ in the one-variable
sense that its derivatives through order two exist and are continuous.
Also $\cos0=1$,
$\sin(\pi/2)=1$, cosine is strictly decreasing on $[0,\pi]$ and strictly
increasing on $[-\pi,0]$, and the mean value theorem applies to continuous
functions differentiable on the open interval; $\sin\theta=0$ exactly when
$\theta=n\pi$ for an integer $n$.

[L3] [[prop-cm-pendulum-small-angle-linearization-bound]]: for $g,l>0$,
$\omega^{2}=g/l$ and the field $F_{p}(\theta,v)=(v,-\omega^{2}\sin\theta)$
of the pendulum ODE $\theta''=-\omega^{2}\sin\theta$, one has
$DF_{p}(0)=\begin{pmatrix}0&1\\-\omega^{2}&0\end{pmatrix}$,
$\lVert F_{p}(z)-DF_{p}(0)z\rVert_{2}=\omega^{2}\lvert\sin\theta-\theta\rvert
\le(\omega^{2}/6)\lvert\theta\rvert^{3}$ and
$\lVert F_{p}(z)\rVert_{2}\le L\lVert z\rVert_{2}$ with
$L=\max\{1,\omega^{2}\}$; and if $\delta e^{LT}<r$, the maximal exact
solution with $\lVert z(0)\rVert_{2}=\delta$ and the linearised solution
$y$ obey
$$\lVert z(t)-y(t)\rVert_{2}\le\frac{\omega^{2}r}{6}\delta^{2}\, t\,e^{(\lVert DF_{p}(0)\rVert+2L)t}\qquad(0\le t\le T).$$

[L4] Exponentials ([[thm-derivative-of-exponential]],
[[def-real-exponential-function-and-e]],
[[cor-two-less-than-e-less-than-three]]): $e^{0}=1$, $2<e<3$, so
$e^{3}<27$; and $e^{s}$ is strictly increasing.

1.1 Angular potential. By [L2], $U'(\theta)=mgl\sin\theta=-F(\theta)$; the generalized torque is therefore the negative derivative of the declared energy-valued scalar potential $U(\theta)=-mgl\cos\theta$. The equilibria are the zeros of $\sin\theta$, namely $\theta=n\pi$, $n\in\mathbb Z$; and $\theta=0$ is a strict local minimum because $U(0)=-mgl$ and $U(\theta)=-mgl\cos\theta>-mgl$ for $0<|\theta|<\pi$ by [L2]. This is claim 1. [given, L1, L2, algebra]

2.1 Stability. By [L1] and step 1.1 the hanging rest point $(0,0)$ is Lyapunov stable for the model's phase system, with the Euclidean phase norm of [[def-euclidean-inner-product]] and the balls of [[def-metric-ball]]. [step 1.1, L1]

2.2 Linearisation and frequency: $U''(\theta)=mgl\cos\theta$, so $U''(0)=mgl>0$; by the linearisation clause of [L1] the linearised angular equation at $\theta=0$ is $m_{\mathrm{ef}}\xi''+mgl\xi=0$. Its angular frequency is $\omega=\sqrt{U''(0)/m_{\mathrm{ef}}}=\sqrt{mgl/(ml^{2})}=\sqrt{g/l}$ by [[thm-of-square-roots]]. In the source's reading this is the small-oscillation frequency of the ideal pendulum model. This is claim 2. [step 1.1, L1, L4, algebra]

3.1 Small-angle bound at $g=l=1$. Here $\omega^{2}=1$, $L=\max\{1,1\}=1$, $\lVert DF_{p}(0)\rVert=1$, and every explicitly quantified datum $z_0$ in claim 3 has $\omega^{2}r/6=1/12$, $\delta^{2}=10^{-4}$. The hypothesis $\delta e^{LT}<r$ reads $10^{-2}e<1/2$, which holds since $e<3<50$ by [L4]. By [L3] the exact solution and the linearised solution (which solves $\theta''=-\theta$, the numerical linearized chart equation with coefficient $\omega^2=1$) obey $$\lVert z(t)-y(t)\rVert_{2}\le\frac{1}{12}\cdot\frac{1}{10^{4}}\cdot t\,e^{3t}=\frac{t\,e^{3t}}{12\cdot10^{4}}\qquad(0\le t\le1),$$ and at $t=1$ this is at most $e^{3}/(12\cdot10^{4})$, which is less than $27/(12\cdot10^{4})=\tfrac94\cdot10^{-4}$ by [L4]. This is claim 3. [given, step 2.2, L3, L4, algebra]

4.1 The quadratic energy of the linearised angular equation is not conserved. Along a motion of the exact model, $$\frac{d}{dt}E_{\rm quad}=\frac{d}{dt}\Bigl[\tfrac12m_{\mathrm{ef}}\theta'^{2}+\tfrac12mgl\theta^{2}\Bigr]=m_{\mathrm{ef}}\theta'\theta''+mgl\,\theta\theta'=mgl\,\theta'\bigl(\theta-\sin\theta\bigr)$$ by [L2] and the equation of motion $m_{\mathrm{ef}}\theta''=-mgl\sin\theta$. At the phase point $(\theta,\theta')=(\pi/2,1\,\mathrm{s^{-1}})$ the right side equals $mgl(1\,\mathrm{s^{-1}})(\pi/2-\sin(\pi/2))>0$. Indeed $\sin(\pi/2)=1<\pi/2$: the mean value theorem applied to sine on $[0,\pi/2]$ gives $1=\cos\xi\cdot(\pi/2)$ for some $\xi\in(0,\pi/2)$, with $\cos\xi<1$. Thus the quadratic energy changes along the exact pendulum motion, so the exact angular equation is not its linearised equation. This is claim 4. [given, step 1.1, L2, algebra] ∎

## Remarks

- **What the check exhibits.** The exact pendulum angle-chart model has a stable
  hanging rest point and linearises to an angular oscillator equation at it.
  The difference between the exact and linearized angular motions is bounded
  only in the finite-time,
  small-amplitude sense of [L3], with the explicit numbers above. This is
  the page's instance of "exact versus small-angle model".

- **Scope and deferred modelling.** The effective equation
  $\theta''=-(g/l)\sin\theta$ is **adopted** here as the model's equation,
  with the recorded source support; its derivation from the constrained
  three-dimensional pendulum (ideal rod or string, constraint reactions,
  tangential balance) is a modelling step belonging to the constraints
  page, and no such derivation is claimed here. The finite-amplitude
  pendulum's period depends on its amplitude (through elliptic quadratures)
  and is outside this page's scope.

