---
id: ex-cm04-resonance-response-check
kind: example
title: "A driven oscillator on explicit data: the steady response, its amplitude maximum and a worked transient at $m=k=1$, $f_0=1$, $c=0.2$, $\\Omega=1$"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [post-cm04-sinusoidal-drive-model, post-cm04-linear-damping-model, def-cm04-one-dimensional-models-and-equilibria, pthm-cm04-resonance-and-boundedness, pthm-cm04-damped-decay-and-stability, def-cm-oscillator-model-and-phase-system, thm-cm-forced-oscillator-sinusoidal-response, prop-cm-oscillator-amplitude-maximum, thm-sine-and-cosine-derivatives, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-of-square-roots, lem-of-square-monotone, def-cm01-units, def-limits-at-infinity, def-interval, thm-cm-homogeneous-oscillator-solution-classification]
dependency_roles:
  post-cm04-sinusoidal-drive-model: physical-assumption
  post-cm04-linear-damping-model: formulation-prerequisite
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  pthm-cm04-resonance-and-boundedness: physical-result
  pthm-cm04-damped-decay-and-stability: physical-result
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  prop-cm-oscillator-amplitude-maximum: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the driven oscillator at the declared data m=k=1, f_0=1 N, c=0.2 kg/s, Omega=1 rad/s: the steady response 5 sin t and its verification by substitution, the amplitude 5 m at the drive frequency against the maximum value of the amplitude function and its location, the phase lag, the transient motion from rest and its exponential approach to the steady response, and the comparison with the undamped cases. The item asserts no measured value and no claim about a physical apparatus."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.14)-(5.22), chapter pages 3-5 (PDF pages 89-91): the response function, the forced amplitude, the resonance value and the width of the resonance peak"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eqs. (7.15)-(7.16), printed pages 147-148 (PDF pages 150-151): transient plus steady-state forced motion and resonance at the natural frequency"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Declare the sinusoidally driven oscillator model of
[[post-cm04-sinusoidal-drive-model]] with
$$m=1\ \mathrm{kg},\qquad k=1\ \mathrm{N/m},\qquad f_{0}=1\ \mathrm{N},\qquad c=\frac15\ \mathrm{kg/s},\qquad\Omega=1\ \mathrm{s^{-1}},$$
so that the physical natural frequency is $\sqrt{k/m}=1\ \mathrm{s^{-1}}$. In the displayed calculations, $t$ denotes the numerical SI
time $t_{\rm phys}/(1\,\mathrm s)$, and position formulas give numerical
values in metres. Unless a physical unit is explicitly attached, parameters
in those calculations also mean SI numerical values: $m,k,c,f_0$ are
normalized by $1\,\mathrm{kg}$, $1\,\mathrm{N/m}$, $1\,\mathrm{kg/s}$ and
$1\,\mathrm N$, respectively, and $\Omega,\omega_0,\omega_d,\gamma$ mean
physical rates divided by $1\,\mathrm{s^{-1}}$. Thus the numerical drive is
$f(t)=\cos t$, and derivatives of numerical position with respect to $t$
give numerical velocity in metres per second. The claims checked below are:

1. the **steady response** is $x_{p}(t)=5\sin t$ metres, a motion on
   $\mathbb R$ with amplitude $A(1)=5$ m and phase lag $\delta=\pi/2$;
2. the amplitude function $A(\Omega)=1/\sqrt{(1-\Omega^{2})^{2}+\Omega^{2}/25}$
   attains its maximum at
   $\Omega_{*}=\sqrt{0.98}=\sqrt{49/50}$ with the value
   $A(\Omega_{*})=10/\sqrt{3.96}$, larger than $A(1)=5$;
3. the motion with datum $(0,0,0)$ is
   $$x(t)=5\sin t-\frac{5}{\omega_{d}}\,e^{-t/10}\sin(\omega_{d}t),\qquad \omega_{d}=\sqrt{0.99}=\sqrt{99}/10,$$
   which is bounded on $[0,\infty)$ and satisfies $x(t)-x_{p}(t)\to0$ and
   $x'(t)-x_{p}'(t)\to0$ as $t\to+\infty$;
4. at $c=0$ the model with the same drive at $\Omega=1$ has the unbounded
   motion $t\sin t/2$, while at $\Omega=2$ every motion is bounded with
   amplitude $1/3$ m for the steady response.

## Verification

**Proof technique:** direct; substitute the displayed steady response into
the equation, evaluate the amplitude function and its maximum, and solve the
initial value problem explicitly.

**Given:** The driven model with $m=k=1$, $f_{0}=1$, $c=1/5$, $\Omega=1$,
the steady response $x_{p}=5\sin t$, and the amplitude function $A$.

[L1] General theory ([[pthm-cm04-resonance-and-boundedness]],
[[thm-cm-forced-oscillator-sinusoidal-response]],
[[prop-cm-oscillator-amplitude-maximum]],
[[thm-cm-homogeneous-oscillator-solution-classification]]): for this model
$D=k-m\Omega^{2}+ic\Omega$, $x_{p}=\operatorname{Re}(f_{0}e^{i\Omega t}/D)$
when $D\neq0$, the amplitude is
$A(\Omega)=\lvert f_{0}\rvert/\sqrt{(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}$,
every motion is $x_{p}+$ homogeneous, the transient decays for $c>0$, every
maximal motion is bounded on $[0,\infty)$ for $c>0$, and for $c=0$ the exceptional frequency is
$\Omega=\omega_{0}$ with the unbounded response
$f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$ and bounded motions otherwise. For $c^2<4mk$, the homogeneous
family is $e^{-\gamma t}(A\cos(\omega_dt)+B\sin(\omega_dt))$,
with $\gamma=c/(2m)$ and $\omega_d=\sqrt{k/m-\gamma^2}$.

[L2] Derivatives and values: $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$
([[thm-sine-and-cosine-derivatives]]), $(e^{\mu t})'=\mu e^{\mu t}$
([[thm-derivative-of-exponential]]), products by the algebra of derivatives
and composites by the chain rule; $\sin(\pi/2)=1$, $\cos(\pi/2)=0$
([[thm-quarter-turn-values-and-shift-formulas]]);
$\sin^{2}+\cos^{2}=1$ and $\lvert\cos\rvert\le1$
([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Dimensions of the underlying physical quantities ([[def-cm01-units]]): $[m]=\mu$, $[k]=\mu\tau^{-2}$,
$[c]=\mu\tau^{-1}$, $[f_{0}]=\mu\ell\tau^{-2}$, $[\Omega]=\tau^{-1}$; the
denominator $D$ has the dimension of $k$, so $f_{0}/D$ carries length.

1.1 Parameters: $\omega_{0}=1$, $c\Omega=1/5$, $k-m\Omega^{2}=0$, so $D=i/5\neq0$, $\lvert D\rvert=1/5$ and $A(1)=\lvert f_{0}\rvert/\lvert D\rvert=5$ m. The general real form gives $x_{p}(t)=\cos t\cdot0+\sin t\cdot(1\cdot(1/5))/(1/25)=5\sin t$, and the substitution check is direct: $x_{p}''+cx_{p}'+kx_{p}=-5\sin t+\cos t+5\sin t=\cos t$ by [L2], so $x_{p}$ is a motion on $\mathbb R$. Taking $\delta=\pi/2$ gives $x_{p}(t)=5\cos(t-\pi/2)$ with $\cos\delta=0$ and $\sin\delta=1$: the phase lag is $\pi/2$. [given, L1, L2, L3, algebra]

2.1 Amplitude maximum: $A(\Omega)=1/\sqrt{(1-\Omega^{2})^{2}+\Omega^{2}/25}$, so its continuous extension has $A(0)=1$ and $A(1)=5$. By [L1] and $c^{2}=1/25<2mk=2$, the maximum occurs at $\Omega_{*}=\sqrt{k/m-c^{2}/(2m^{2})}=\sqrt{1-1/50}=\sqrt{49/50}$ and equals $2m\lvert f_{0}\rvert/(c\sqrt{4mk-c^{2}})=10/\sqrt{99/25}=50/(3\sqrt{11})>5$, since $3\sqrt{11}<10$ because $99<100$; hence the drive at the natural frequency is below the peak of the amplitude curve. [given, step 1.1, L1, algebra]

2.2 Transient from rest. By [L1] every motion equals $x_{p}+y$ with $y$ homogeneous; with numerical rates $\gamma=c/(2m)=1/10$ and $\omega_{d}=\sqrt{k/m-\gamma^{2}}=\sqrt{99}/10$, the homogeneous motions in numerical time are $y=e^{-t/10}(A\cos(\omega_{d}t)+B\sin(\omega_{d}t))$. The datum $(0,0,0)$ forces $A=0$ and $5+\omega_{d}B=0$ by [L2], that is $x(t)=5\sin t-(5/\omega_{d})e^{-t/10}\sin(\omega_{d}t)$, the displayed motion; it is the unique maximal motion with that datum by clause 2 of [[pthm-cm04-resonance-and-boundedness]]. [given, step 1.1, L1, L2, algebra]

3.1 Boundedness and convergence: for $t\ge0$, $\lvert x(t)\rvert\le5+(5/\omega_{d}) e^{-t/10}\le5+50/\sqrt{99}<11$, since $\sqrt{99}>9$ by [L2], and $x(t)-x_{p}(t)=-(5/\omega_{d})e^{-t/10}\sin(\omega_{d}t)\to0$ as $t\to+\infty$; differentiating the transient term with [L2] shows that it and its derivative both vanish at infinity, so $x'(t)-x_{p}'(t)\to0$; this is the convergence clause 3 of [[pthm-cm04-resonance-and-boundedness]], with the explicit decay rate $1/10$. [step 2.2, L1, L2]

4.1 Undamped comparison. With $c=0$ the drive at $\Omega=\omega_{0}=1$ is the exceptional case, and clause 5 of [[pthm-cm04-resonance-and-boundedness]] gives the unbounded motion $t\sin t/2$; with $\Omega=2$ one has $D=1-4=-3$ and the steady amplitude $A(2)=1/\lvert D\rvert=1/3$ m, with every motion bounded by clause 4 of the same theorem. [given, step 1.1, L1, L2, algebra] ∎

## Remarks

- **What the check exhibits.** At the drive frequency equal to the natural
  frequency of the undamped model, the damped model's steady amplitude is
  $5$ m, and the peak of the amplitude curve is at
  $\Omega_{*}=\sqrt{0.98}$ with value $10/\sqrt{3.96}\approx5.025$ m; the
  transient from rest dies with rate $1/10$ s$^{-1}$. The dimensionless ratio
  $A(\omega_{0})/A(0)=5$ is $\omega_{0}/(2\gamma)$ in the notation of the
  source's quality factor. All decimal numbers here are approximations of the exact
  expressions displayed.

- **Scope.** The data $m=k=f_{0}=1$, $c=1/5$, $\Omega=1$ are declared model
  data of this check; no measured value is asserted and no apparatus is
  claimed to be described by the model.

