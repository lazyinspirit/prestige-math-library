---
id: cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded
kind: counterexample
title: "A bounded sinusoidal drive with unbounded motions: the undamped driven oscillator at $\\Omega=\\omega_0$ refutes the unqualified boundedness claim"
status: published
origin: session
domain: physics
dependency_level: 20
deps: [post-cm04-sinusoidal-drive-model, post-cm04-linear-damping-model, def-cm04-one-dimensional-models-and-equilibria, pthm-cm04-resonance-and-boundedness, def-cm-oscillator-model-and-phase-system, thm-cm-forced-oscillator-sinusoidal-response, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule, thm-algebra-of-derivatives, def-cm01-units, def-limits-at-infinity, def-interval]
dependency_roles:
  post-cm04-sinusoidal-drive-model: physical-assumption
  post-cm04-linear-damping-model: formulation-prerequisite
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  pthm-cm04-resonance-and-boundedness: physical-result
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the driven oscillator model: with m=k=1, zero damping, nonzero drive amplitude 1 N and drive frequency equal to the natural frequency, the drive is bounded and yet every maximal motion is unbounded, so the unqualified claim that a bounded prescribed drive forces bounded motions is false. The contrast with the strictly damped parameter c=1/5 and the undamped off-resonant frequency Omega=2 shows the failure for this nonzero-drive example occurs at zero-damping resonance; at the resonant frequency with zero drive, the homogeneous harmonic motions remain bounded. The item asserts no measured value and no claim about any apparatus."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.13a)-(5.19), chapter pages 3-4 (PDF pages 89-90): the forced oscillator, the response and the divergence of the response at zero damping when the drive frequency approaches the natural frequency"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.16), printed page 148 (PDF page 151): the resonant behaviour of the driven linear oscillator when the driving frequency equals the natural frequency"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the sinusoidally driven oscillator model of
[[post-cm04-sinusoidal-drive-model]] with data $m>0$, $k>0$, $c\ge0$,
$f_{0}\in\mathbb R$, $\Omega>0$: **if the drive
$t\mapsto f_{0}\cos(\Omega t)$ is bounded, then every maximal motion of the model is
bounded on $[0,\infty)$.**

## Facts & Assumptions

**Given:** The driven model, its motions, and the constants $\omega_{0}=\sqrt{k/m}$ and $D=k-m\Omega^{2}+ic\Omega$ of [[pthm-cm04-resonance-and-boundedness]].

[L1] Model vocabulary ([[post-cm04-sinusoidal-drive-model]], [[def-cm04-one-dimensional-models-and-equilibria]] clause (f), [[def-cm-oscillator-model-and-phase-system]]): motions solve $m\,x''+cx'+kx=f_{0}\cos(\Omega t)$. For the declared data $m=k=1$, $c=0$, $f_{0}=1$, $\Omega=1$, let $T:=t_{\rm phys}/(1\,\mathrm s)$, $X:=x_{\rm phys}/(1\,\mathrm m)$, $V:=v_{\rm phys}/(1\,\mathrm{m/s})$ and $\widehat F:=F_{\rm phys}/(1\,\mathrm N)$. The numerical SI state-force map is $\widehat F(T,X,V)=\cos T-X$; it is globally Lipschitz in the normalized state coordinates $(X,V)$ with constant $1$, hence admissible.

[L2] [[pthm-cm04-resonance-and-boundedness]] clause 5 (with [[thm-cm-forced-oscillator-sinusoidal-response]] clause 2): for $c=0$, $\Omega=\omega_{0}$ and $f_{0}\neq0$ the function $x_{p}(t)=f_{0}t\sin(\omega_{0}t)/(2m\omega_{0})$ is a motion of the model on $\mathbb R$ and is unbounded on $[0,\infty)$; and every maximal motion of the model is the sum of $x_{p}$ and a harmonic motion, hence unbounded.

[L3] Clauses 3, 4 and 6 of [[pthm-cm04-resonance-and-boundedness]]: for $c>0$ every maximal motion is bounded; for $c=0$ and $\Omega\neq\omega_{0}$ every maximal motion is bounded; and at $c=0$, $\Omega=\omega_{0}$ with $f_{0}=0$ every maximal motion is also bounded.

[L4] Values ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]): $\sin(\pi/2)=1$, $\lvert\cos t\rvert\le1$ for every $t$, and $t_{k}:=(\pi/2+2\pi k)/\omega_{0}\to+\infty$ as $k\to\infty$ ([[def-limits-at-infinity]]).

## Counterexample

1.1 Take the model data $m=1\ \mathrm{kg}$, $k=1\ \mathrm{N/m}$, $c=0$, $f_{0}=1\ \mathrm{N}$, $\Omega=1\ \mathrm{s^{-1}}$, so that $\omega_{0}=1$ and the drive is $t\mapsto\cos t$; it is bounded: $\lvert\cos t\rvert\le1$ for all $t$ by [L4]. The hypothesis of the refuted statement therefore holds for this model. [given, L1, L4]

2.1 By [L2] the function $x_{p}(t)=t\sin t/2$ is a motion of this model on $\mathbb R$. At the times $t_{k}=\pi/2+2\pi k$, $k\in\mathbb N$, one has $\sin t_{k}=1$ and hence $x_{p}(t_{k})=t_{k}/2\to+\infty$ as $k\to\infty$ by [L4]; therefore $x_{p}$ is not bounded on $[0,\infty)$, and the conclusion of the refuted statement fails. [step 1.1, L2, L4, algebra]

3.1 In fact every maximal motion of this model is unbounded on $[0,\infty)$: by [L2] it equals $x_{p}+y$ on $\mathbb R$ with $y$ harmonic, and a bounded $y$ cannot compensate the unbounded $x_{p}$. Local motions are restrictions of these maximal motions; no unboundedness is claimed for a restriction to a bounded time interval. Hence the refuted statement fails at the level of a declared model of the framework, not merely through one exceptional solution. [step 2.1, L2]

4.1 The failure exhibited here is specific to the nonzero resonant drive. For the same $m,k,f_{0},\Omega$ but with $c=1/5>0$, [L3] gives that every maximal motion is bounded; and for $c=0$ but with $\Omega=2\neq\omega_{0}$, [L3] again gives that every maximal motion is bounded. Clause 6 also records the zero-drive resonant case: when $c=0$, $\Omega=\omega_{0}$ and $f_{0}=0$, the equation is homogeneous and every maximal motion is bounded. Thus this example refutes the implication for nonzero undamped resonant data, while the stated bounded cases remain bounded. [step 2.1, L3] ∎

## Remarks

- **What is refuted.** Only the unqualified implication "bounded drive implies bounded motions". The qualified statements of [[pthm-cm04-resonance-and-boundedness]] — boundedness for $c>0$, and for $c=0$ away from $\Omega=\omega_{0}$, together with the zero-drive resonant exception — are not affected; the same theorem supplies the unbounded nonzero-drive resonant motion used here.

- **No empirical claim.** The data $m=k=f_{0}=\Omega=1$, $c=0$ are declared model data; the counterexample is a statement about the model and carries no measured value, and the linear growth of $x_{p}$ is a property of the ideal undamped model, not a prediction asserted about any apparatus.

