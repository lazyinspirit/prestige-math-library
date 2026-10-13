---
id: post-cm04-sinusoidal-drive-model
kind: postulate
title: "The sinusoidally driven oscillator model: a prescribed external force $f_0\\cos(\\Omega t)$ added to the damped oscillator"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm04-one-dimensional-models-and-equilibria, post-cm04-harmonic-model, post-cm04-linear-damping-model, post-cm02-force-superposition, post-cm02-interactions, def-cm01-units, def-cm03-potential-and-mechanical-energy, def-locally-lipschitz-in-the-state-variable, def-cm-oscillator-model-and-phase-system]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  post-cm04-harmonic-model: formulation-prerequisite
  post-cm04-linear-damping-model: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the driven oscillator as a restricted one-dimensional model: the damped oscillator with parameters m>0, k>0, c>=0 together with an external driving force f(t)=f_0 cos(Omega t) of declared amplitude f_0 and angular frequency Omega>0, prescribed as a function of time and independent of the motion. The drive is an idealization of an apparatus or background that maintains a fixed sinusoidal force; it is adopted for a stated regime, its amplitude and frequency are model parameters, and no measured value, no back-reaction model, no non-sinusoidal waveform and no claim that a given apparatus realizes the model is asserted."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.13a)-(5.19), chapter pages 3-4 (PDF pages 89-90): the forced oscillator m qddot + eta qdot + kappa q = F(t) with a sinusoidal component, the response function, the forced amplitude and the resonance discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.15), printed pages 147-148 (PDF pages 150-151): the driven damped linear oscillator with a harmonic driving term and the transient plus steady-state decomposition"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

**(i) Setting.** Work in the one-dimensional model class of
[[def-cm04-one-dimensional-models-and-equilibria]] with time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R$, mass $m>0$, spring
constant $k>0$ ([[post-cm04-harmonic-model]]) and drag coefficient $c\ge0$
([[post-cm04-linear-damping-model]]). Let a real **drive amplitude**
$f_{0}\in\mathbb R$ of dimension $\mu\ell\tau^{-2}$ (newtons) and an
**angular drive frequency** $\Omega>0$ of dimension $\tau^{-1}$ (radians per
second; the radian is dimensionless in the framework's angle convention,
[[def-cm01-units]]) be declared. Adopt, through the additive composition of
force contributions of clause (v) of [[post-cm02-force-superposition]] and
the external-contribution reading of [[post-cm02-interactions]], the force
law
$$F(t,x,v):=f_{0}\cos(\Omega t)-k\,x-c\,v .$$
The **sinusoidally driven oscillator model** is the one-dimensional model
with this force law; its equation of motion is
$$m\,x''+c\,x'+k\,x=f_{0}\cos(\Omega t),$$
and its data $(m,c,k,f)$ with $f(t)=f_{0}\cos(\Omega t)$ are oscillator-type
data in the sense of clause (f) of
[[def-cm04-one-dimensional-models-and-equilibria]]. The term
$f_{0}\cos(\Omega t)$ is the **drive** or **driving force**; the model is
undamped when $c=0$ and strictly damped when $c>0$.

**(ii) The drive is prescribed external data.** The driving force is a
prescribed function of time alone: it does not depend on $x$ or on $x'$, and
the object producing it is not one of the model's labels and is not modelled
dynamically. This is the same modelling status as the medium of
[[post-cm02-drag]]: the drive is an external contribution declared as part
of the model. A real apparatus, background or force generator that reacts to
the motion is **not** represented by this model; representing such a
back-reaction requires a larger model with additional states.

**(iii) Potential presentation with residual force.** The model presents its
force law through the harmonic potential $U(x)=\tfrac12kx^{2}$ with residual
force $d(t,x,v)=f_{0}\cos(\Omega t)-c\,v$, in the sense of clause (d) of
[[def-cm04-one-dimensional-models-and-equilibria]]:
$F(t,x,v)=-U'(x)+d(t,x,v)$. The mechanical energy of the model is
$E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$ of that clause, defined along every
motion; the model is driven and not a global potential model whenever
$f_{0}\neq0$.

**(iv) Regularity.** Let $X:=x_{\rm phys}/(1\,\mathrm m)$,
$V:=v_{\rm phys}/(1\,\mathrm{m/s})$, and $T:=t_{\rm phys}/(1\,\mathrm s)$
be the dimensionless numerical SI coordinates (the real inputs of the force
map). Write
$K:=k_{\rm phys}/(1\,\mathrm{N/m})$,
$C:=c_{\rm phys}/(1\,\mathrm{kg/s})$,
$\widehat f_{0}:=f_{0}/(1\,\mathrm N)$, and
$\widehat\Omega:=\Omega(1\,\mathrm s)$. The numerical force map is
$$\widehat F(T,X,V)=\widehat f_{0}\cos(\widehat\Omega T)-KX-CV,$$
so it is continuous and globally Lipschitz in the state variable with
numerical-coordinate constant $K+C$, uniformly in time. This is a bound on
dimensionless SI coordinates and force values, not a sum of the dimensionful
$k$ and $c$ ([[def-locally-lipschitz-in-the-state-variable]]). It is an
admissible force law of clause (a) of [[def-cm04-one-dimensional-models-and-equilibria]],
and its equation is the forced model $m\,x''+cx'+kx=f$ of
[[def-cm-oscillator-model-and-phase-system]] with the continuous function
$f(t)=f_{0}\cos(\Omega t)$.

**(v) Physical status and regime.** The model is a **restricted idealization**
adopted rather than derived: exactly sinusoidal, with constant amplitude and
frequency and no dependence on the motion. The drive amplitude and frequency
are model parameters; when their values come from an apparatus calibration,
that use is an empirical premise carrying the apparatus conditions and the
measurement uncertainty, and this item asserts no such value. The sinusoidal
form is the elementary component used by the recorded treatments; the
response to a non-sinusoidal periodic drive is a superposition statement
belonging to the mathematical theory, not an additional claim here. The
model's undamped case $c=0$ is included as a parameter value, and it is where
the resonant unboundedness of the following theorem occurs.

**(vi) Status.** Adopted assumption of the framework when a model invokes
it; it selects no law of nature on its own, and no measured response, no
resonance curve of any apparatus and no empirical resonance phenomenon is
asserted by the postulate.

## Remarks

- **Why a postulate and not a theorem.** The equation of motion determines no
  force law; the drive is additional model input, exactly as the drag of
  [[post-cm04-linear-damping-model]]. The linearity of the resulting
  equation, which makes the explicit response formulas available, is a
  property of the model's declaration, not a derivation from mechanics.

- **Two readings of $\Omega$.** $\Omega>0$ is an angular frequency in radians
  per second; the frequency in cycles per second is $\Omega/(2\pi)$, and the
  period of the drive is $2\pi/\Omega$. The framework's angle convention
  makes the radian dimensionless, so $[\Omega]=\tau^{-1}$.

