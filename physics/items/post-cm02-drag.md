---
id: post-cm02-drag
kind: postulate
title: "The linear drag model: a phenomenological velocity-proportional resistance with a declared coefficient"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, def-locally-lipschitz-in-the-state-variable, def-euclidean-inner-product]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of a constitutive force model for the interaction of a labeled particle with a medium: a linear drag force $-c\\dot x$ with a declared coefficient $c\\ge0$, optionally combined with a constant applied force. The model is phenomenological and restricted: it is adopted for a stated regime (slow motion in a viscous medium, the range in which the linear/Stokes form is used), its coefficient is a model parameter depending on body and medium, and the model neglects the random component of the environment's force. The item asserts no measured value, no derivation of the coefficient from the equation of motion, and no claim that the model applies to a given real motion."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, chapter pages 1-3 (PDF pages 87-89), Eqs. (5.1)-(5.9) and footnote 4: linear drag in a damped one-dimensional harmonic oscillator; the random-force omission condition is stated for that oscillator, whose energy and natural frequency are defined in the section"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.4, printed pages 20-21 (PDF pages 23-24): friction as a nonconservative force example, with fluid friction at low velocity F = -b v, the distinct static/sliding/rolling friction models, and the worked Stokes-sphere equation m' yddot + m' g' = -6 pi eta a ydot"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 6.8, printed pages 134-138 (PDF pages 137-141): Stokes drag on a sphere in steady, incompressible viscous flow at small Reynolds number, with the inertial flow term neglected and drag magnitude 6 pi eta a u"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): force as a function of position and velocity in the equation of motion, with velocity-dependent forces treated as model input"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Postulate

**(i) Setting.** Work in the force branch of
[[post-cm02-force-superposition]] with one labeled particle of fixed mass
$m>0$ ([[post-cm01-worldlines]] clause (v)) in a fixed inertial frame, with
time window $\mathbb R$ and configuration domain $Q=\mathbb R^{3}$, and with
the particle's coordinate position $x$ and coordinate velocity
$v=\dot x$ ([[def-cm01-velocity-acceleration]]). The particle moves through a
**medium** that fills the region of the motion and is at rest in the chosen
frame. The medium is not one of the model's particle labels, so its effect on
the label is an **external force** of the model in the sense of clause (i) of
[[post-cm02-interactions]]: the decomposition into the label's own dynamics
and the medium's effect is part of the model's declaration.

**(ii) The model.** Adopt as a **constitutive model** of the medium's net
force the **linear drag model** with a declared coefficient
$c\ge0$ of dimension $\mu\tau^{-1}$, read in kilograms per second
([[def-cm01-units]]):

$$F^{\mathrm{drag}}(v):=-c\,v,$$

optionally combined, through the additive composition of clause (v) of
[[post-cm02-force-superposition]], with a declared constant applied force
$m\mathbf g$, where $\mathbf g\in\mathbb R^{3}$ is a constant parameter of
dimension $\ell\tau^{-2}$ ([[def-cm01-units]]). The resulting force map of the
model is

$$F(t,x,v)=m\mathbf g-c\,v,\qquad\text{that is,}\qquad m\,\ddot x=m\mathbf g-c\,\dot x,$$

the equation of a label whose only interactions are the constant applied field
and the linear resistance of the medium. The model is defined for all
$(t,x,v)\in\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}$.

**(iii) Regularity.** The force map is affine in the state: it is continuous;
and for two states $z=(x,v)$, $z'=(x,v')$ sharing a position,
$\lVert F(t,z)-F(t,z')\rVert_{2}=c\,\lVert v-v'\rVert_{2}\le c\,\lVert z-z'\rVert_{2}$,
so it is locally Lipschitz in the state variable with the global constant $c$,
uniformly in time ([[def-locally-lipschitz-in-the-state-variable]]). It is
therefore a force map of the branch [[post-cm02-force-superposition]] clause
(iii), and the existence, uniqueness and continuation theorems of this page
apply to it; the regularity check is recorded with the model checks on the
companion page.

**(iv) Physical status and regime.** This is a **phenomenological**
constitutive model, adopted rather than derived: it represents the net effect
of a medium whose microscopic state is not modelled, and the coefficient $c$
is a model parameter that depends on the body and the medium. The linear form
is a restricted regime — slow motion through a viscous medium, of which the
Stokes force on a sphere, $c=6\pi\eta a$ for dynamic viscosity $\eta$ and
radius $a$, is the recorded example — and other regimes are **different
models**: a force growing quadratically in the speed at higher speeds, or
Coulomb sliding friction, whose expression contains the factor
$v/\lvert v\rvert$ and is undefined at $v=0$, and which is outside clause
(iii) of [[post-cm02-force-superposition]] altogether. The model also neglects
the random component of the environment's force. The cited fluctuation
qualification is specifically Likharev's damped harmonic oscillator model
$m\ddot q+\gamma\dot q+\kappa q=0$, with $m,\kappa>0$ and damping coefficient
$\gamma>0$ (denoted $\eta$ in the source), oscillator energy
$E:=\tfrac12m\dot q^{2}+\tfrac12\kappa q^{2}$, and natural angular frequency
$\omega_{0}:=\sqrt{\kappa/m}$: footnote 4 says
that neglecting its random-force component is admissible only when, at thermal
equilibrium, $E$ is much greater than $\max(k_{\mathrm B}T,\hbar\omega_{0}/2)$,
where $T$ is temperature, $k_{\mathrm B}$ is Boltzmann's constant and $\hbar$
is the reduced Planck constant. The free-particle model stated here has no
restoring term and defines no corresponding $E$, $T$ or $\omega_{0}$, so the
oscillator condition is not an additional admissibility condition on this
model. Applying the idealization to a concrete medium requires a separate
model of its fluctuations.
No value of $c$, of $m$, or of $\mathbf g$ is asserted by this item, and using
measured values for them is an empirical premise with its own conditions and
uncertainty.

**(v) Status.** Adopted assumption of the framework when a model invokes it;
it selects no law of nature on its own and proves nothing about the actual
motion of any body in any medium. Its consequences within the model are the
subject of the companion example on terminal-velocity approach.

## Remarks

- **Why a postulate and not a theorem.** Nothing in the equation of motion
  $m\ddot x=F$ determines the function $F$; a drag law is additional model
  input. The linear form is convenient because it is the simplest
  velocity-proportional law satisfying the standing regularity, and because it
  is the form used by the recorded viscous-regime treatments; neither reason
  makes it a derivation.

- **Zero coefficient.** For $c=0$ the model reduces to a uniform-force model
  with the declared constant vector $\mathbf g$; the parameter range is part
  of the model's declaration.

- **No friction claim.** Setting $v=0$ does not model static friction: the
  linear drag force vanishes with the velocity and cannot hold a body at rest
  against a tangential load. Static and sliding friction require the separate
  inequality or set-valued models excluded in clause (vii) of
  [[post-cm02-force-superposition]].

- **Dimensions and scope of the Stokes example.** Here $a>0$ denotes the
  sphere radius, with $[a]=\ell$, and $\eta$ denotes dynamic viscosity, with
  $[\eta]=\mu\ell^{-1}\tau^{-1}$, so $[6\pi\eta a]=\mu\tau^{-1}$ as required
  for $c$. Stewart's Section 6.8 treats a steady fluid velocity field
  $u_{\!f}:\Omega\to\mathbb R^{3}$ on the exterior domain
  $\Omega:=\mathbb R^{3}\setminus\overline B_{a}(0)$, where
  $B_{a}(0):=\{x\in\mathbb R^{3}:|x|<a\}$. The field is independent of time
  and satisfies $\nabla\cdot u_{\!f}=0$, its boundary trace is zero on
  $|x|=a$, and $u_{\!f}(x)\to u_{\infty}$ at spatial infinity. If
  $u:=|u_{\infty}|$ has dimension $\ell\tau^{-1}$, the fluid mass density is
  $\rho$ with $[\rho]=\mu\ell^{-3}$, and
  $\mathrm{Re}:=\rho u a/\eta\ll1$ is dimensionless, Stewart's
  calculation gives drag magnitude $6\pi\eta a u$. Thus $c=6\pi\eta a$
  is the coefficient in this restricted Stokes-flow limit, not a general
  derivation of linear drag for every slow motion in a viscous medium.
