---
id: ex-nrqm-oscillator-coherent-trajectory
aliases: [ nrqm-oscillator-example-coherent-trajectory ]
kind: example
domain: physics
title: "A coherent-state trajectory: period, phase-space ellipse and constant spreads"
status: published
origin: pipeline
dependency_level: 14
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-oscillator-coherent-states,
    def-nrqm-uncertainty-preparation-spread,
    pthm-nrqm-oscillator-coherent-state-evolution,
    pthm-nrqm-oscillator-coherent-state-fluctuations,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-quarter-turn-values-and-shift-formulas,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    def-countable-choice
  ]
dependency_roles:
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  pthm-nrqm-oscillator-coherent-state-evolution: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The trajectory of a coherent preparation of the one-dimensional
  oscillator model with nonzero label: the exact period 2 pi/omega of the
  preparation, the quarter-period phase-space values, the invariant ellipse of
  the preparation means, and the constancy of the position and momentum spreads
  and their product hbar/2. The example is a conditional computation inside the
  adopted model; the mean values are preparation means and are not the
  coordinates of a measured particle trajectory."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §§4.3-4.5 printed pages 30-41: the harmonic motion of the
        coherent-state mean position and the time-independent uncertainties"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.2 printed
        pages 41-44 (PDF pages 49-52): the sinusoidal motion of the position
        expectation value at the classical frequency omega"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Adopt the state and composition postulate P1, the observable and probability postulate P2, the autonomous-dynamics postulate P4 and the kinematics and massive-particle model postulate P5, read through the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), and the coherent-state family of [[def-nrqm-oscillator-coherent-states]]; assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix a label $z=z_1+iz_2$ with $|z|>0$, let $x_0:=\sqrt2\,\ell z_1$, $p_0:=\frac{\sqrt2\,\hbar}{\ell}z_2$, let $\Psi_z(t):=U(t)\Psi_z$ be the evolved coherent state, and write $x(t):=\langle Q\Psi_z(t),\Psi_z(t)\rangle$, $p(t):=\langle P\Psi_z(t),\Psi_z(t)\rangle$. Then:

(a) the preparation is periodic with period $\frac{2\pi}{\omega}$ in the sense that the prepared state is the same pure preparation at times $t$ and $t+\frac{2\pi}{\omega}$:
$$[U(2\pi/\omega)\Psi_z]=[\Psi_z],\qquad [\Psi_z(t+2\pi/\omega)]=[\Psi_z(t)]\quad(t\in\mathbb R);$$

(b) the mean pair is
$$x(t)=x_0\cos\omega t+\frac{p_0}{m\omega}\sin\omega t,\qquad p(t)=p_0\cos\omega t-m\omega x_0\sin\omega t,$$
so that $x(0)=x_0$, $p(0)=p_0$, and at the quarter period $x\bigl(\frac{\pi}{2\omega}\bigr)=\frac{p_0}{m\omega}$, $p\bigl(\frac{\pi}{2\omega}\bigr)=-m\omega x_0$; the phase-space ellipse
$$\frac{x(t)^{2}}{2\ell^{2}}+\frac{\ell^{2}p(t)^{2}}{2\hbar^{2}}=|z|^{2}$$
is invariant along the motion;

(c) the position and momentum spreads and their product are constant along the motion:
$$\Delta_{\Psi_z(t)}Q=\frac{\ell}{\sqrt2},\qquad \Delta_{\Psi_z(t)}P=\frac{\hbar}{\ell\sqrt2},\qquad \Delta_{\Psi_z(t)}Q\,\Delta_{\Psi_z(t)}P=\frac{\hbar}{2}\quad(t\in\mathbb R);$$

(d) the displayed $x(t)$ and $p(t)$ are preparation means of the model's position and momentum observables in the evolving coherent preparation; they are not the coordinates of a measured particle trajectory, and no measurement record, apparatus or empirical value is asserted.

## Facts & Assumptions

**Given:** the one-dimensional oscillator model with parameters $m,\omega,\hbar>0$ and length $\ell$; the coherent states $\Psi_z$ and their evolution $\Psi_z(t)=U(t)\Psi_z$; the label $z=z_1+iz_2\ne0$ and the numbers $x_0=\sqrt2\ell z_1$, $p_0=\frac{\sqrt2\hbar}{\ell}z_2$; a real time $t$.

[F1] **Coherent evolution and its statistics.** For every $w\in\mathbb C$ and $s\in\mathbb R$, $U(s)\Psi_w=e^{-i\omega s/2}\Psi_{we^{-i\omega s}}$; the preparation means of the evolved coherent preparation are $\langle Q\rangle_{w(s)}=\sqrt2\ell\operatorname{Re}w(s)$, $\langle P\rangle_{w(s)}=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}w(s)$ with $w(s)=we^{-i\omega s}$; and $\Delta_{\Psi_{w(s)}}Q=\ell/\sqrt2$, $\Delta_{\Psi_{w(s)}}P=\hbar/(\ell\sqrt2)$ with product $\hbar/2$ ([[pthm-nrqm-oscillator-coherent-state-evolution]] clauses (a), (b), (c); [[pthm-nrqm-oscillator-coherent-state-fluctuations]] clauses (a), (b)).

[F2] **Trigonometric identities.** For real $\theta$, $e^{-i\theta}=\cos\theta-i\sin\theta$, $\cos^{2}\theta+\sin^{2}\theta=1$, $\cos 0=1$, $\sin 0=0$, $\cos\frac{\pi}{2}=0$, $\sin\frac{\pi}{2}=1$, and $e^{-2\pi i}=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F3] **Spread reading.** The preparation spreads in [F1] are the outcome-law spreads of the assigned observables $(Q,\mathrm m)$ and $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ in the reading of [[def-nrqm-uncertainty-preparation-spread]] clauses (b), (c), and the means are the outcome-law means of [[pthm-nrqm-oscillator-coherent-state-evolution]] clause (b).

## Verification

**Given:** the data of the Example and [F1]-[F3].

1.1 [The evolved family] By [F1] applied with $w=z$ and $s=t$, $\Psi_z(t)=U(t)\Psi_z=e^{-i\omega t/2}\Psi_{z(t)}$ with $z(t)=ze^{-i\omega t}$, and the means and spreads of the evolved preparation are those of the coherent label $z(t)$. [given, F1]

1.2 [The complex label in real form] By [F2], $e^{-i\omega t}=\cos\omega t-i\sin\omega t$, so $z(t)=z(\cos\omega t-i\sin\omega t)$ has real part $z_1\cos\omega t+z_2\sin\omega t$ and imaginary part $z_2\cos\omega t-z_1\sin\omega t$, and $\cos^{2}\omega t+\sin^{2}\omega t=1$; also $e^{-2\pi i}=1$. [given, F2]

2.1 [Clause (a)] By step 1.1 and [F2], $z(t+2\pi/\omega)=ze^{-i\omega t}e^{-2\pi i}=z(t)$ and $e^{-i\omega(t+2\pi/\omega)/2}=e^{-i\omega t/2}e^{-i\pi}=-e^{-i\omega t/2}$, so $U(2\pi/\omega)\Psi_z=-\Psi_z$; a global phase does not change the pure preparation, hence $[U(2\pi/\omega)\Psi_z]=[\Psi_z]$ and $[\Psi_z(t+2\pi/\omega)]=[\Psi_z(t)]$ for every $t$. [step 1.1, step 1.2, F2]

2.2 [Clause (b)] By step 1.1 and [F1], $x(t)=\sqrt2\ell\operatorname{Re}z(t)$ and $p(t)=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z(t)$; substituting the real and imaginary parts of step 1.2 and using $x_0=\sqrt2\ell z_1$, $\frac{p_0}{m\omega}=\frac{\sqrt2\hbar z_2}{\ell m\omega}=\sqrt2\ell z_2$, $m\omega x_0=\sqrt2 m\omega\ell z_1=\frac{\sqrt2\hbar z_1}{\ell}$ by $\ell^{2}=\hbar/(m\omega)$ gives the two displayed closed forms; at $t=0$ they read $x_0,p_0$, and at $t=\frac{\pi}{2\omega}$ they read $\frac{p_0}{m\omega}$ and $-m\omega x_0$ by the values in [F2]. For the ellipse, the closed forms give $\frac{x(t)^{2}}{2\ell^{2}}=(z_1\cos\omega t+z_2\sin\omega t)^{2}$ and $\frac{\ell^{2}p(t)^{2}}{2\hbar^{2}}=(z_2\cos\omega t-z_1\sin\omega t)^{2}$; adding, the cross terms cancel and $\cos^{2}\omega t+\sin^{2}\omega t=1$ gives the sum $z_1^{2}+z_2^{2}=|z|^{2}$ for every $t$. [step 1.1, step 1.2, F1, F2, algebra]

2.3 [Clause (c)] By step 1.1 the evolved preparation is the coherent preparation of label $z(t)$, so [F1] gives $\Delta_{\Psi_z(t)}Q=\ell/\sqrt2$, $\Delta_{\Psi_z(t)}P=\hbar/(\ell\sqrt2)$ and product $\hbar/2$ for every $t$. [step 1.1, F1]

3.1 [Clause (d)] By [F3] the quantities $x(t)$, $p(t)$ are outcome-law means of the model's position and momentum observables in the evolving preparation, and the spreads are outcome-law spreads; no measurement record, apparatus model or empirical value entered the computation. [step 2.1, step 2.2, step 2.3, F3] ∎
