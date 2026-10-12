---
id: post-cm15-impulse
kind: postulate
title: "Adopted impact and open-mass extensions of the force branch: the isolated reciprocal impulse model, the collinear restitution contact law and the open-body material accounting"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [post-cm02-force-superposition,
       post-cm02-interactions,
       def-cm02-newtonian-flow,
       post-cm01-worldlines,
       def-cm01-units,
       def-cm01-configuration,
       def-cm03-centre-of-mass-and-momenta,
       def-vector-valued-derivative-and-integral,
       def-vector-valued-functions-limits-and-continuity,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-euclidean-inner-product,
       def-cross-product-in-r3,
       thm-cm-impulse-restitution-and-energy-loss,
       thm-cm-variable-mass-momentum-balance]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cm-impulse-restitution-and-energy-loss: mathematical-premise
  thm-cm-variable-mass-momentum-balance: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the page's impact and open-mass extensions of the framework's force branch: an isolated reciprocal impulse at one time (a finite momentum jump of opposite sign for the two labels, with the regular dynamics retained away from that time), a collinear restitution contact law with coefficient $0\\le e\\le1$ fixing only the relative velocity, and an open-body material accounting for matter entering and leaving a body at given rates with given inertial velocities. The item adopts model extensions and names their mathematical renderings; it derives nothing from the smooth-force postulates, asserts no law of nature, no measured value for $e$, the impulse or the mass rates, and excludes simultaneous contacts, friction, deformation modes and coefficients outside $[0,1]$."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, Chapter 11 'Impulse and Momentum in Particles', §§11.2-11.5: the impulse-momentum principle $\\mathbf J=m\\mathbf v_f-m\\mathbf v_i$, conservation of momentum for a system with no external impulse, the coefficient of restitution $0\\le\\epsilon\\le1$ along the contact normal, and one-dimensional particle collisions"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall 2008/2009), Lecture L14 'Variable Mass Systems: The Rocket Equation': the capture/expulsion momentum accounting, the warning that $\\mathrm d(m\\mathbf v)/\\mathrm dt=\\mathbf F$ holds only when the transferred matter carries no momentum relative to the body, and the thrust $T=-c\\dot m$"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed p. 2: the momentum balance $\\mathbf F=\\dot{\\mathbf p}$ as the primitive statement and the caution that an open variable-mass body is not described by the closed-system form alone"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Postulate

Adopt, as this page's **impact and open-mass extensions** of the force
branch of [[post-cm02-force-superposition]] and [[post-cm02-interactions]],
the following three model extensions. Each is an adopted model, not a
consequence of the smooth-force postulates; each applies only where a
statement explicitly invokes it.

**(i) The isolated reciprocal impulse model.** A two-label force model with
masses $m_1,m_2>0$ ([[post-cm01-worldlines]] clause (v)), time window $I_0$,
configuration domain $Q$ ([[def-cm01-configuration]]) and continuous
external-plus-pair force maps $F_1,F_2$ is **run in the isolated reciprocal
impulse model at $t_*\in I_0$** when there is a motion
$x=(x_1,x_2):I\to Q$ of the associated first-order system
([[def-cm02-newtonian-flow]]) such that:

1. $x_1,x_2$ are continuous on $I$ and twice continuously differentiable on
   each of $I\cap(-\infty,t_*)$ and $I\cap(t_*,\infty)$
   ([[def-vector-valued-derivative-and-integral]],
   [[def-ck-euclidean-maps-and-diffeomorphisms]]), and
   $m_ix_i''(t)=F_i(t,x(t),x'(t))$ for every $t\in I\setminus\{t_*\}$;
2. the one-sided limits
   $v_i^{\pm}:=\lim_{t\to t_*\pm}x_i'(t)$ exist in $\mathbb R^3$
   ([[def-vector-valued-functions-limits-and-continuity]]);
3. there is a vector $J\in\mathbb R^3$, the **impulse**, with
   $$m_1\bigl(v_1^+-v_1^-\bigr)=J,\qquad m_2\bigl(v_2^+-v_2^-\bigr)=-J .$$

The two equations of clause 3 are the **reciprocal finite-jump form** of the
isolated impulse: the two labels receive equal and opposite momentum changes.
The model places no bound on the force maps across $t_*$; its distributional
rendering by test-function pairings is proved in
[[thm-cm-impulse-restitution-and-energy-loss]]. The dimension of the impulse
is $[J]=\mathsf M\ell\tau^{-1}$ ([[def-cm01-units]]).

**(ii) The collinear restitution contact law.** A model run in the isolated
reciprocal impulse model at $t_*$ is **collinear** when there is a unit vector
$n\in\mathbb R^3$ (the **contact direction**) with $v_i^{\pm}\parallel n$ for
$i=1,2$ and $\langle v_2^--v_1^-,n\rangle<0$ (the labels approach along $n$).
For a collinear contact, adopt a **coefficient of restitution** $e\in[0,1]$ —
a dimensionless model datum of the pair and the contact — and the **restitution
law**
$$v_2^+-v_1^+=-e\,\bigl(v_2^--v_1^-\bigr).$$
For $e=1$ the contact is called **elastic**, for $e=0$ **perfectly inelastic**
and otherwise **semi-elastic**; the law is a constitutive assumption, not a
consequence of the impulse equations of clause (i), and $e$ is not derived
from the masses or the approach speed. The law is stated only for a single
collinear contact; simultaneous contacts, repeated contacts and tangential
(friction) impulses are outside the model.

**(iii) The open-body material accounting.** Adopt for a body whose mass,
velocity, external force and exchanged matter are described by maps
$m:I\to(0,\infty)$, $v:I\to\mathbb R^3$, $F:I\to\mathbb R^3$,
$r_{\mathrm{in}},r_{\mathrm{out}}:I\to[0,\infty)$ and
$w_{\mathrm{in}},w_{\mathrm{out}}:I\to\mathbb R^3$ (mass rates and *inertial*
velocities of the matter entering and leaving, measured in the same inertial
frame as $v$) the **material balance identities**
$$m'=r_{\mathrm{in}}-r_{\mathrm{out}},\qquad (mv)'=F+r_{\mathrm{in}}\,w_{\mathrm{in}}-r_{\mathrm{out}}\,w_{\mathrm{out}} .$$
They are the mathematical rendering of "gains $r_{\mathrm{in}}\,\mathrm dt$ of
matter with velocity $w_{\mathrm{in}}$, loses $r_{\mathrm{out}}\,\mathrm dt$
with velocity $w_{\mathrm{out}}$, and feels the external force $F$", and they
are adopted rather than derived from a closed-system law. Their product-rule
consequence $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$
is proved in [[thm-cm-variable-mass-momentum-balance]]; in particular the
closed-system law $(mv)'=F$ is recovered only when
$r_{\mathrm{in}}w_{\mathrm{in}}=r_{\mathrm{out}}w_{\mathrm{out}}$.
The model parameters $r_{\mathrm{in}},r_{\mathrm{out}},w_{\mathrm{in}},w_{\mathrm{out}}$
are model data with $[r_{\mathrm{in}}]=[r_{\mathrm{out}}]=\mathsf M\tau^{-1}$
and $[w_{\mathrm{in}}]=[w_{\mathrm{out}}]=\ell\tau^{-1}$.

## Status and scope

- **Why the extensions are adopted rather than derived.** A motion of the
  smooth-force branch with a continuous force map has a $C^1$ momentum curve
  and no jumps; hence no choice of smooth force maps produces the momentum
  jump of clause 3 with $J\ne0$ at an isolated time, and no choice of a
  constant total mass produces the matter exchange of clause (iii). The
  extensions enlarge the model class; they are not consequences of
  [[post-cm02-force-superposition]] or [[post-cm02-interactions]], and the
  exact statement that a smooth-force motion cannot jump is proved on this
  page as part of [[pthm-cm15-impact-balance]].

- **What the data are.** $m_i$, $J$, $e$, $r_{\mathrm{in}}$,
  $r_{\mathrm{out}}$, $w_{\mathrm{in}}$, $w_{\mathrm{out}}$ and the contact
  direction $n$ are model data, not measurements. The empirically informed
  reading of $e$ (a pair property inferred from bounce or collision
  experiments) requires a separately specified experiment and statistical
  analysis; this page asserts no measured value and no law of nature, exactly
  as for the potentials of [[post-cm05-central-model]].

- **Exclusions.** Coefficient values outside $[0,1]$; more than one contact
  in a motion; contact intervals rather than isolated times; tangential and
  rolling contacts; deformable contact geometry; rotational degrees of
  freedom; and any identification of the impulse with the time integral of a
  bounded smooth force are outside the adopted models. Clause (iii) excludes
  internal structure of the leaving mass, pressure forces on the open
  boundary and non-inertial frames; its spatially distributed refinement is
  the smooth open-flow model of [[pthm-cm15-control-volume-balance]].
