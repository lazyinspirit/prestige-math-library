---
id: post-cm04-harmonic-model
kind: postulate
title: "The harmonic (linear restoring) model: a declared linear force law with parameter $k>0$"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm04-one-dimensional-models-and-equilibria, post-cm02-force-superposition, def-cm01-units, def-cm03-potential-and-mechanical-energy, def-locally-lipschitz-in-the-state-variable, lem-derivative-of-a-power, def-derivative]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the harmonic oscillator as a restricted one-dimensional model: configuration domain the whole line, fixed mass m>0, force law F(x)=-k x with declared spring constant k>0 of dimension mass per time squared, and potential U(x)=k x^2/2. The model is a linear idealization of a restoring force, adopted for a stated regime (small displacements from a stable equilibrium, in which the quadratic term of the potential is the adequate approximation, as in the sources' linearization procedure); the spring constant is model data whose value, if taken from measurement, is an empirical premise with its own conditions and uncertainty. The item asserts no value of k, no claim that the model applies to a given spring or oscillation, and no measured result."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.1)-(5.2), chapter pages 1-2 (PDF pages 87-88): the harmonic oscillator Lagrangian L = m qdot^2/2 - kappa q^2/2 and its equation m qddot + kappa q = 0 with omega_0 = (kappa/m)^{1/2}; Section 3.2, Eqs. (3.10)-(3.12), chapter pages 2-3 (PDF pages 34-35): the quadratic Taylor expansion of the effective potential about a fixed point and the linearised equation with effective spring constant d^2 U_ef/dq^2"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 1 (the simple harmonic oscillator), printed page 5 (PDF page 11): the force F(x) = -k x arising from the potential V = k x^2/2, with energy conserved"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Section 3.1, Eqs. (3.1)-(3.4), printed pages 52-53 (PDF pages 55-56): expansion of the potential about its minimum, the quadratic Lagrangian and the linearised equations of motion with the stiffness constants V_ij"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

**(i) Setting.** Work in the one-dimensional model class of
[[def-cm04-one-dimensional-models-and-equilibria]] with time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R$, a fixed mass $m>0$
and a **spring constant** $k>0$ of dimension $\mu\tau^{-2}$, read in newtons
per metre ([[def-cm01-units]]). The **harmonic model** is the model whose
force law is the **linear restoring force**
$$F(x,v):=-k\,x .$$
Its equation of motion is $m\,x''=-k\,x$, equivalently $m\,x''+k\,x=0$; the
model is autonomous and velocity-independent, and its potential is
$$U(x):=\tfrac12 k\,x^{2},$$
of dimension $\mu\ell^{2}\tau^{-2}$ (joules), which presents the force law in
the sense of clause (d) of [[def-cm04-one-dimensional-models-and-equilibria]]:
$U$ is of class $C^{2}$ and $-U'(x)=-k\,x=F(x)$ ([[lem-derivative-of-a-power]],
[[def-derivative]]). The harmonic model is therefore a **conservative**
model of the class, with the potential representative $U$ declared above and
no residual force.

**(ii) Regularity and framework status.** The force law is affine in the
state; it is continuous, and $\lvert F(x)-F(x')\rvert=k\lvert x-x'\rvert\le
k\,\lVert(x,v)-(x',v')\rVert_{2}$, so it is locally Lipschitz in the state
variable with the global constant $k$, uniformly in time
([[def-locally-lipschitz-in-the-state-variable]]). The harmonic model is
thus an admissible model of the class of clause (a) of
[[def-cm04-one-dimensional-models-and-equilibria]], and the existence,
uniqueness and conservation statements of this page apply to it. It is
adopted as a restricted model class of the framework, at the same primitive
level as the force maps of [[post-cm02-force-superposition]]: the force law
is model input.

**(iii) Physical reading and regime.** The model idealizes a **restoring
force linear in the displacement**: an ideal spring, or the quadratic
approximation of a potential $U$ near a strict local minimum $x_{*}$ with $U''(x_*)>0$, where
the Taylor expansion of the effective potential begins with the quadratic
term $\tfrac12 U''(x_{*})(x-x_{*})^{2}$ and the linearized equation carries
the **effective spring constant** $U''(x_{*})$ (the sources' linearization
procedure). The model is adopted for a stated regime — displacements so
small that the neglected remainder of the potential is adequate for the
purpose at hand — and it is **not** claimed to describe large-amplitude
oscillations, nonlinear springs, plasticity, or any given real system. The
coefficient $k$ is a model parameter, not a constant of the framework; when
its value is taken from a calibration experiment, that value is an empirical
premise carrying the apparatus conditions and the measurement uncertainty,
and the framework asserts none of it here. The linear form is the simplest
restoring law satisfying the standing regularity; that is a modelling
convenience, not a derivation.

**(iv) Status.** Adopted assumption of the framework when a model invokes
it; it selects no law of nature on its own. Every consequence below is a
conditional statement about the declared equation of motion.

## Remarks

- **Zero, negative and nonlinear alternatives are different models.** For
  $k=0$ the model is the free model $m\,x''=0$; for $k<0$ the force is
  repulsive near the origin; a force law with a cubic term, or the exact
  pendulum force $-m_{\mathrm{ef}}(g/l)\sin\theta$, is a different model
  whose motions the linear theory does not describe. The companion
  page's small-angle check quantifies the difference for the pendulum.

- **The potential is declared, not measured.** Only the value of $k$ enters
  the physics; the additive constant of $U$ is fixed by the convention
  $U(0)=0$ recorded above, which is part of the model's declaration, exactly
  as [[def-cm03-potential-and-mechanical-energy]] clause (c) requires.

