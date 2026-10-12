---
id: pthm-cm04-resonance-and-boundedness
kind: physics-theorem
title: "The driven oscillator: the sinusoidal steady response, its amplitude and maximum, bounded motions for $c>0$ and at $c=0$ off resonance, and the unbounded resonant motions at $c=0$"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [post-cm04-sinusoidal-drive-model, post-cm04-linear-damping-model, post-cm04-harmonic-model, def-cm04-one-dimensional-models-and-equilibria, def-cm-oscillator-model-and-phase-system, thm-cm-forced-oscillator-variation-of-constants, thm-cm-forced-oscillator-sinusoidal-response, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-amplitude-maximum, pthm-cm04-damped-motion, pthm-cm04-damped-decay-and-stability, pthm-cm04-harmonic-motion, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, cor-trigonometric-parity-and-pythagorean-identity, def-limits-at-infinity, def-interval, thm-sine-cosine-zero-sets-and-fundamental-period]
dependency_roles:
  post-cm04-sinusoidal-drive-model: physical-assumption
  post-cm04-linear-damping-model: formulation-prerequisite
  post-cm04-harmonic-model: formulation-prerequisite
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-amplitude-maximum: mathematical-premise
  pthm-cm04-damped-motion: physical-result
  pthm-cm04-damped-decay-and-stability: physical-result
  pthm-cm04-harmonic-motion: physical-result
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
physical_scope: "The response of the driven oscillator model with m>0, k>0, c>=0, drive amplitude f_0 and angular frequency Omega>0: the explicit steady sinusoidal response and its amplitude |f_0|/sqrt((k-m Omega^2)^2+c^2 Omega^2) whenever the denominator does not vanish; the reduction of every motion to the steady response plus a homogeneous motion; boundedness of every motion in the strictly damped case, with exponential convergence of the transient to the steady response; boundedness for c=0 away from Omega=sqrt(k/m); unbounded motions at c=0 and Omega=sqrt(k/m) with nonzero amplitude, so boundedness fails exactly in the off-singular-case sense; and the amplitude maximum of the steady response for c>0. The result is a conditional deduction from the declared drive and damping models; it asserts no measured resonance curve, no value of any parameter and no behaviour of an apparatus."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.13a)-(5.22), chapter pages 3-5 (PDF pages 89-91): the forced-oscillator response function, the forced amplitude (5.18), the resonance value (5.19), the quality factor ratio and the width of the resonance peak"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eqs. (7.15)-(7.16), printed pages 147-148 (PDF pages 150-151): the driven damped linear oscillator and its resonant behaviour when the driving frequency equals the natural frequency"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the sinusoidally driven oscillator model of
[[post-cm04-sinusoidal-drive-model]] with data $m>0$, $k>0$, $c\ge0$,
$f_{0}\in\mathbb R$ and $\Omega>0$, force law
$F(t,x,v)=f_{0}\cos(\Omega t)-kx-cv$ and equation
$m\,x''+cx'+kx=f_{0}\cos(\Omega t)$. Put
$$\omega_{0}:=\sqrt{\frac{k}{m}},\qquad D:=k-m\Omega^{2}+i\,c\,\Omega\in\mathbb C,$$
and define the **steady response**
$$x_{p}(t):=\operatorname{Re}\Bigl(\frac{f_{0}e^{i\Omega t}}{D}\Bigr) =\frac{f_{0}\bigl[(k-m\Omega^{2})\cos(\Omega t)+c\,\Omega\sin(\Omega t)\bigr]} {(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}\qquad(D\neq0),$$
with **amplitude** $A(\Omega):=\lvert f_{0}\rvert/\sqrt{(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}$,
and in the exceptional case $c=0$, $\Omega=\omega_{0}$ define
$x_{p}(t):=f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$. Then:

1. **Steady response.** If $D\neq0$ — that is $c>0$, or $c=0$ and
   $\Omega\neq\omega_{0}$ — then $x_{p}$ is a motion of the model on
   $\mathbb R$, of period $2\pi/\Omega$, with amplitude $A(\Omega)$ in the
   sense $\lvert x_{p}(t)\rvert\le A(\Omega)$ for all $t$ and equality at
   suitable times.
2. **Reduction to the homogeneous model.** Every datum has exactly one
   maximal motion, it is defined on all of $\mathbb R$, and every motion
   $x$ of the model on an interval with nonempty interior can be written
   $x=x_{p}+y$, where $x_{p}$ is the particular motion of clause 1, or the
   resonant motion in the exceptional case, and $y$ is a motion of the damped
   homogeneous model with the same $m$, $c$, $k$ (and is a harmonic motion
   of [[post-cm04-harmonic-model]] when $c=0$).
3. **Strictly damped case $c>0$.** For every $\Omega>0$ the following hold:
   every motion is bounded on $[0,\infty)$; and
   $x(t)-x_{p}(t)\to0$ and $x'(t)-x_{p}'(t)\to0$ as $t\to+\infty$. Moreover
   $x_{p}$ is the unique motion with datum
   $(t_{0},x_{p}(t_{0}),x_{p}'(t_{0}))$ for any $t_{0}\in\mathbb R$. The
   amplitude function $\Omega\mapsto A(\Omega)$ has the following shape: if
   $c^{2}<2mk$ it is strictly increasing on $(0,\Omega_{*})$ and strictly
   decreasing on $(\Omega_{*},\infty)$ with
   $$\Omega_{*}=\sqrt{\frac{k}{m}-\frac{c^{2}}{2m^{2}}},\qquad A(\Omega_{*})=\frac{2m\lvert f_{0}\rvert}{c\sqrt{4mk-c^{2}}};$$
   if $c^{2}\ge2mk$ it is strictly decreasing on $(0,\infty)$.
4. **Undamped case away from resonance.** For $c=0$ and
   $\Omega\neq\omega_{0}$ every motion is bounded on $\mathbb R$.
5. **Undamped resonance.** For $c=0$, $\Omega=\omega_{0}$ and $f_{0}\neq0$
   the motion $x_{p}(t)=f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$ is unbounded
   on $[0,\infty)$, and every motion of the model is unbounded on
   $[0,\infty)$, although the drive $t\mapsto f_{0}\cos(\omega_{0}t)$ is
   bounded.
6. **Off the singular cases.** For $c>0$ the denominator never vanishes and
   every $\Omega>0$ is admissible; for $c=0$ the exceptional frequency is
   exactly $\Omega=\omega_{0}$. Consequently the boundedness assertions of
   clauses 3 and 4 hold exactly for $c>0$, and for $c=0$ away from $\Omega=\omega_{0}$,
   with the failure of clause 5 in the exceptional case.

The statement is read for the declared model data; no value of any parameter
and no measured response is asserted.

## Facts & Assumptions

**Given:** The driven model with data $(m,c,k,f_{0},\Omega)$, its motions on
intervals with nonempty interior, the constants $\omega_{0},D$, the functions
$x_{p}$ of clause 1, and the homogeneous damped model with the same $m,c,k$.

[L1] Model vocabulary ([[post-cm04-sinusoidal-drive-model]],
[[def-cm04-one-dimensional-models-and-equilibria]] clauses (b), (f),
[[def-cm-oscillator-model-and-phase-system]]): motions of the driven model
are the solutions of $m\,x''+cx'+kx=f_{0}\cos(\Omega t)$, which is the
forced oscillator model of [[def-cm-oscillator-model-and-phase-system]] with
the continuous function $f(t)=f_{0}\cos(\Omega t)$ and $k>0$; motions of
the homogeneous damped model are the solutions with $f\equiv0$, and for
$c=0$ these are the motions of the harmonic model by clause 1 of
[[pthm-cm04-damped-motion]].

[L2] [[thm-cm-forced-oscillator-sinusoidal-response]]: if $D\neq0$ then
$x_{p}=\operatorname{Re}(f_{0}e^{i\Omega t}/D)$ is a solution of the forced
equation on $\mathbb R$, with the displayed real form and amplitude
$\lvert f_{0}\rvert/\sqrt{(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}$; if $c=0$
and $\Omega=\omega_{0}$ then $x_{p}(t)=f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$
is a solution on $\mathbb R$ and is unbounded on $[0,\infty)$ when
$f_{0}\neq0$; if $c>0$ then every solution $x:[0,\infty)\to\mathbb R$ equals
$x_{p}+x_{h}$ with $x_{h}$ homogeneous, and $x(t)-x_{p}(t)\to0$, with $x$
bounded.

[L3] [[thm-cm-forced-oscillator-variation-of-constants]]: for $m>0$,
$c\ge0$, $k>0$ and continuous $f$ on an interval $I$, the forced model has
exactly one solution on $I$ for every datum; and
[[thm-cm-homogeneous-oscillator-solution-classification]] classifies the
homogeneous solutions.

[L4] [[pthm-cm04-damped-decay-and-stability]] clauses 2 and 3: a strictly
damped homogeneous motion and its derivative tend to $0$ and are bounded;
[[pthm-cm04-damped-motion]] clause 1: the maximal motion of the homogeneous
model with a given datum is unique.

[L5] [[pthm-cm04-harmonic-motion]] clauses 2 and 3: a harmonic motion is
bounded by its amplitude $R$, and $\lvert y'(t)\rvert\le\omega_{0}R$ for
the motion of amplitude $R$ because $y'=-R\omega_{0}\sin(\theta-\varphi)$.

[L6] [[prop-cm-oscillator-amplitude-maximum]]: for $c>0$ the function
$A(\Omega)=\lvert f_{0}\rvert/\sqrt{(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}$ is
strictly increasing then strictly decreasing with the maximum
$\Omega_{*}=\sqrt{k/m-c^{2}/(2m^{2})}$ and value
$2m\lvert f_{0}\rvert/(c\sqrt{4mk-c^{2}})$ when $c^{2}<2mk$, and strictly
decreasing on $(0,\infty)$ when $c^{2}\ge2mk$.

[L7] Derivatives ([[thm-sine-and-cosine-derivatives]],
[[thm-algebra-of-derivatives]], [[thm-chain-rule]]): the real form of
$x_{p}$ is a sum of $\cos(\Omega t)$ and $\sin(\Omega t)$ with constant
coefficients, so
$$x_{p}'(t)=\frac{f_{0}\Omega\bigl[-{(k-m\Omega^{2})}\sin(\Omega t)+c\,\Omega\cos(\Omega t)\bigr]} {(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}},$$
which is bounded in absolute value by
$\Omega\lvert f_{0}\rvert\bigl(\lvert k-m\Omega^{2}\rvert+c\Omega\bigr)/
\bigl((k-m\Omega^{2})^{2}+c^{2}\Omega^{2}\bigr)$.

## Proof

**Proof technique:** cases; verify the explicit particular motions, reduce an
arbitrary motion to the particular one plus a homogeneous motion by
linearity, and use the decay, boundedness and amplitude results of the
suppliers.

1.1 Clause 1. Assume $D\neq0$. By [L2] the function $x_{p}$ is a solution of the forced equation on $\mathbb R$, hence a motion of the model by [L1], with the displayed real form and amplitude $\lvert x_{p}(t)\rvert\le A(\Omega)$. Its periodicity: the real form is a constant linear combination of $\cos(\Omega\cdot)$ and $\sin(\Omega\cdot)$, and for every real $u$ one has $\cos(u+2\pi)=\cos u$ and $\sin(u+2\pi)=\sin u$ by [[thm-sine-cosine-zero-sets-and-fundamental-period]]; taking $u=\Omega t$ and $u=\Omega(t+2\pi/\Omega)$ gives $x_{p}(t+2\pi/\Omega)=x_{p}(t)$. [assume-case 1, given, L1, L2, L7]

1.2 Clause 2. The forced model has $k>0\ge0$ and the continuous drive $f_{0}\cos(\Omega t)$ on $I=\mathbb R$, so [L3] gives exactly one solution on $\mathbb R$ for every datum; hence every maximal motion is defined on $\mathbb R$. Let $x$ be a motion on an interval $J$ with nonempty interior and let $x_{p}$ be the particular motion of clause 1 or the resonant motion of [L2]. The function $y:=x-x_{p}$ is of class $C^{2}$ on $J$ and $$m\,y''+c\,y'+k\,y=\bigl(m\,x''+cx'+kx\bigr)-\bigl(m\,x_{p}''+cx_{p}'+kx_{p}\bigr) =f_{0}\cos(\Omega t)-f_{0}\cos(\Omega t)=0$$ by the linearity of the differential expression ([[thm-algebra-of-derivatives]]; the two equations hold on $J$). Hence $y$ is a motion of the homogeneous damped model on $J$, and for $c=0$ it is a harmonic motion by [L1]. This is clause 2. [given, L1, L3, algebra]

1.3 Clause 3, amplitude shape. By [L6] applied to the amplitude function $A$ of clause 1. [given, L6]

2.1 Clause 3, transient and boundedness. Let $c>0$; then $D\neq0$ because $D=0$ would force $c\Omega=0$ and hence $\Omega=0$, contrary to $\Omega>0$. Let $x$ be a motion; by clause 2, $y=x-x_{p}$ is a strictly damped homogeneous motion, so by [L4] $y(t)\to0$ and $y'(t)\to0$, and $x_{p}$, $x_{p}'$ are bounded by clause 1 and [L7]; hence $x(t)\to x_{p}(t)$ in the sense $x(t)-x_{p}(t)\to0$ and $x'(t)-x_{p}'(t)\to0$, and $x$ is bounded on $[0,\infty)$. If $x$ has datum $(t_{0},x_{p}(t_{0}),x_{p}'(t_{0}))$, then $y$ is a homogeneous motion with $y(t_{0})=y'(t_{0})=0$; by the uniqueness of [L4] (with the datum $(t_{0},0,0)$) $y\equiv0$, so $x=x_{p}$. [given, step 1.2, L2, L4, L7]

2.2 Clause 4. Let $c=0$ and $\Omega\neq\omega_{0}$. Then $D=k-m\Omega^{2}=m(\omega_{0}^{2}-\Omega^{2})\neq0$, so $x_{p}$ is a motion with $\lvert x_{p}(t)\rvert\le A(\Omega)$ by clause 1. Let $x$ be a motion on an interval with nonempty interior; by clause 2, $y=x-x_{p}$ is a harmonic motion, so by [L5] there is $R_{y}\ge0$ with $\lvert y(t)\rvert\le R_{y}$ for all $t$; hence $\lvert x(t)\rvert\le A(\Omega)+R_{y}$ on the interval, and since clause 2 extends the motion to $\mathbb R$, the motion is bounded on $\mathbb R$. [assume-case 2, given, step 1.1, step 1.2, L1, L5]

2.3 Clause 5. Let $c=0$, $\Omega=\omega_{0}$ and $f_{0}\neq0$. By [L2] the function $x_{p}(t)=f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$ is a motion on $\mathbb R$ and is unbounded on $[0,\infty)$. Let $x$ be any motion; by clause 2, $y=x-x_{p}$ is a harmonic motion, bounded by some $R_{y}$ by [L5]. Choose $t_{k}\to+\infty$ with $\lvert x_{p}(t_{k})\rvert\to+\infty$; then $\lvert x(t_{k})\rvert\ge\lvert x_{p}(t_{k})\rvert-\lvert y(t_{k})\rvert\ge\lvert x_{p}(t_{k})\rvert-R_{y}\to+\infty$, so $x$ is unbounded on $[0,\infty)$ as well, although $\lvert f_{0}\cos(\omega_{0}t)\rvert\le \lvert f_{0}\rvert$ is bounded by [[cor-trigonometric-parity-and-pythagorean-identity]]. This is clause 5. [assume-case 3, given, step 1.2, L2, L5]

3.1 Clause 6. For $c>0$ the computation of step 2.1 gives $D\neq0$ for every $\Omega>0$, and clause 3 supplies the boundedness. For $c=0$, $D=0\iff k=m\Omega^{2}\iff\Omega=\omega_{0}$ since $\Omega>0$ and $\omega_{0}>0$; clauses 4 and 5 then give boundedness away from $\Omega=\omega_{0}$ and unboundedness at it. [cases-exhaustive, given, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

- **What resonance is here.** The exceptional case is a property of the
  declared model: with zero damping and a drive at the undamped frequency,
  the particular solution grows linearly and every motion is unbounded.
  Clause 5 states no physical resonance phenomenon; an apparatus comparison
  would be a separate, empirically qualified step.

- **The quality factor.** The source reads the ratio
  $A(\omega_{0})/A(0)=m\omega_{0}/c=1/(2\gamma)$ (with $\gamma=c/(2m)$) as
  the quality factor and the peak's half width as its reciprocal in the
  small-damping regime; these are ratios of the explicit amplitude formula
  for $c>0$ and readouts of clause 3, not additional claims.

