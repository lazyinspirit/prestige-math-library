---
id: post-cm04-linear-damping-model
kind: postulate
title: "The damped oscillator model: a harmonic restoring force with a phenomenological linear drag $-c\\dot x$, $c\\ge0$"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm04-one-dimensional-models-and-equilibria, post-cm04-harmonic-model, post-cm02-force-superposition, def-cm01-units, def-cm03-potential-and-mechanical-energy, def-locally-lipschitz-in-the-state-variable, def-cm-oscillator-model-and-phase-system]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  post-cm04-harmonic-model: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the damped oscillator as a restricted one-dimensional model: the harmonic restoring force with spring constant k>0 combined, through additive composition of force contributions, with a linear drag force -c x-dot of declared drag coefficient c>=0 (kilograms per second). The drag term is phenomenological: it represents the net effect of a medium that is not modelled, is adopted for a stated regime (viscous, velocity-proportional resistance at small speeds), neglects the random component of the environment's force, and is a different model from quadratic drag or Coulomb friction outside that regime. The item asserts no value of c, no derivation of the drag law, no fluctuation theory and no measured result."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.5)-(5.6b) with footnote 4, chapter page 2 (PDF page 88): the linear drag force F = -eta qdot and the damped equation m qddot + eta qdot + kappa q = 0, with the drag treated as a phenomenological model whose random component is neglected subject to an energy-scale condition"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 2 (the damped simple harmonic oscillator), printed page 5 (PDF page 11): the friction term F(x,xdot) = -k x - gamma xdot, with energy not conserved and the system losing energy until it comes to rest"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.4, printed pages 20-21 (PDF pages 23-24): fluid friction at low velocity F = -b v as the distinct low-speed friction model, alongside the separate static, sliding and rolling friction models"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

**(i) Setting.** Work in the one-dimensional model class of
[[def-cm04-one-dimensional-models-and-equilibria]] with time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R$, a fixed mass $m>0$,
the spring constant $k>0$ of [[post-cm04-harmonic-model]], and a **drag
coefficient** $c\ge0$ of dimension $\mu\tau^{-1}$, read in kilograms per
second ([[def-cm01-units]]). The model's force law is declared through the
additive composition of force contributions, in the sense of clause (v) of
[[post-cm02-force-superposition]], read in one coordinate:
$$F(x,v)=-k\,x-c\,v .$$

The **damped oscillator model** is the one-dimensional model with this force
law; its equation of motion is
$$m\,x''+c\,x'+k\,x=0,$$
and its data $(m,c,k,0)$ are oscillator-type data in the sense of clause (f)
of [[def-cm04-one-dimensional-models-and-equilibria]]. The model is
autonomous and depends on the velocity; it is **undamped** when $c=0$, in
which case it is exactly the harmonic model of [[post-cm04-harmonic-model]],
and **strictly damped** when $c>0$.

**(ii) Potential presentation with a residual force.** The model presents its
force law through the harmonic potential $U(x)=\tfrac12kx^{2}$ of
[[post-cm04-harmonic-model]] together with the **residual force**
$$d(t,x,v)=-c\,v,$$
in the sense of clause (d) of [[def-cm04-one-dimensional-models-and-equilibria]]:
$F(x,v)=-U'(x)+d(t,x,v)$. The mechanical energy of the model is therefore
the function $E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$ of clause (d), defined
along every motion; the drag force is not presented through a potential and
the model is not a global potential model when $c>0$.

**(iii) Regularity.** The force law is continuous and satisfies
$$\lvert F(x,v)-F(x',v')\rvert\le k\lvert x-x'\rvert+c\lvert v-v'\rvert\le(k+c)\,\lVert(x,v)-(x',v')\rVert_{2},$$
so it is locally Lipschitz in the state variable with the global constant
$k+c$, uniformly in time ([[def-locally-lipschitz-in-the-state-variable]]).
It is an admissible force law of the class of clause (a) of
[[def-cm04-one-dimensional-models-and-equilibria]], and its equation is
exactly the homogeneous model $m\,x''+cx'+kx=0$ of
[[def-cm-oscillator-model-and-phase-system]].

**(iv) Physical status and regime.** The drag term is a **phenomenological**
constitutive model, adopted rather than derived: it represents the net force
of a medium whose microscopic state is not part of the model. The linear
velocity-proportional form is a restricted regime — slow motion through a
viscous medium, of which the Stokes force $c=6\pi\eta a$ is the recorded
example in the framework's drag postulate [[post-cm02-drag]] — and the
coefficient $c$ is a model parameter depending on body and medium. Other
regimes are different models: drag growing quadratically with speed, or
Coulomb sliding friction, whose force contains the factor $v/\lvert v\rvert$
and is undefined at $v=0$ and is not of the standing regularity. The model
also neglects the random component of the environment's force; the recorded
source states that this neglect is admissible only in a stated energy regime,
in which the oscillator's energy greatly exceeds the energy scale of the
environment's fluctuations. No value of $c$, $m$ or $k$ is asserted, and a
measured value used in an application is an empirical premise with its own
conditions and uncertainty.

**(v) Status.** Adopted assumption of the framework when a model invokes it;
the damped oscillator selects no law of nature on its own, and no
fluctuation–dissipation relation is asserted. Its conditional consequences
are the subject of the damped-motion theorems of this page.

## Remarks

- **Why a postulate and not a theorem.** The equation of motion determines no
  force law; the drag contribution is additional model input, exactly as in
  [[post-cm02-drag]]. The linear form is the simplest velocity-proportional
  law of the standing regularity, and it is the form of the recorded
  viscous-regime treatments; neither reason makes it a derivation.

- **$c=0$ is a parameter value, not a change of model class.** The model is
  declared for all $c\ge0$; at $c=0$ the residual force vanishes and the
  model is a global potential model, while for $c>0$ the mechanical energy
  is not conserved and the page's dissipation theorem applies.

