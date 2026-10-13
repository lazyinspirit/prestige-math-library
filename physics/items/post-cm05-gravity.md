---
id: post-cm05-gravity
kind: postulate
title: "Adopted two-label gravitational model: the inverse-square pair potential with coupling parameters, the empirical mass identification, and the measured value and uncertainty of the Newtonian constant"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm05-central-model, def-cm01-units]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  post-cm05-central-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the two-label gravitational model inside the page's central-force class: the inverse-square static pair potential with the Newtonian constant and positive gravitational coupling parameters; the empirical identification of the coupling parameters with the inertial masses, adopted as an assumption of the page's applications; the measured value of the Newtonian constant with its uncertainty and the mutual inconsistency of its measurements; and the non-relativistic weak-field two-point-label applicability regime, specified by the source-potential and individual-speed inequalities in a specified comparison frame in clause (iv), with its exclusions. The item adopts model data and empirical premises; it asserts no law of nature, no proof of the identification, and no numerical prediction by itself."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, Eq. (1.15) and footnote 11, chapter page 4 (PDF page 8): Newton's gravity law with the gravitational constant and the weak-equivalence footnote recording the empirical support for identifying gravitational and inertial mass"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Sections 1.2.4 and 2.5.4, printed pages 4 and 31-33 (PDF pages 10 and 37-39): the gravitational force $F=-(GMm/r^2)\\hat r$ from the potential $V=-GMm/r$, and two bodies interacting gravitationally with $V(r)=-Gm_1m_2/r$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "P. J. Mohr, D. B. Newell, B. N. Taylor, E. Tiesinga et al., CODATA Recommended Values of the Fundamental Physical Constants: 2022, arXiv:2409.03787 [physics.atom-ph], Section XIV and Table XXX: the recommended value $G=6.674\\,30(15)\\times10^{-11}\\,\\mathrm{m^3\\,kg^{-1}\\,s^{-2}}$ with relative standard uncertainty $2.2\\times10^{-5}$, unchanged from 2018, based on the 16 measurements of Table XXX with an expansion factor of 3.9"
      url: "https://arxiv.org/pdf/2409.03787"
    - title: "Max Tegmark, General Relativity, MIT Course 8.033 lecture notes, Fall 2005 (revised 2006), pp. 3-4: the Newtonian potential of a point source, the dimensionless ratio $\\Phi/c^2$, and the small-potential and slow-motion Newtonian regime"
      url: "https://ocw.mit.edu/courses/8-033-relativity-fall-2006/247a558883de99bc79212077c6c6d5d5_gr.pdf"
    - title: "P. J. Mohr, D. B. Newell, B. N. Taylor, E. Tiesinga et al., CODATA Recommended Values of the Fundamental Physical Constants: 2022, Table XXXIII: the speed of light in vacuum $c=299792458\\,\\mathrm{m\\,s^{-1}}$ is exact in SI"
      url: "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958143"
---

## Postulate

Adopt the following gravitational model and empirical premises for the
two-body part of this page, inside the force and interaction branches of
[[post-cm02-force-superposition]] and [[post-cm02-interactions]] and the
central-force class of [[post-cm05-central-model]] clause (i).

**(i) The two-label gravitational model.** A model of the gravitational
branch is a model of class (i) of [[post-cm05-central-model]] with
$J_0=(0,\infty)$, $Q=\{x=(x_1,x_2):x_1\ne x_2\}$, masses $m_1,m_2>0$ in the
equation of motion, and the **gravitational pair potential**
$$U(x_1,x_2)=-\frac{G_{\mathrm N}\,m_1^{g}m_2^{g}}{\lvert x_1-x_2\rvert},$$
where $G_{\mathrm N}>0$ is the **Newtonian constant of gravitation**, a
constant of dimension $\ell^{3}\mu^{-1}\tau^{-2}$ read in
$\mathrm{m^3\,kg^{-1}\,s^{-2}}$, and $m_1^{g},m_2^{g}>0$ are the
**gravitational coupling parameters** of the labels, primitive model data
distinct from the inertial masses $m_1,m_2$ ([[post-cm02-interactions]]
clause (v), [[def-cm01-units]]). The corresponding central pair potential of
class (i) is $u(\rho)=-\kappa/\rho$ with
$$\kappa:=G_{\mathrm N}\,m_1^{g}m_2^{g}>0,\qquad\text{dimension } \mu\ell^{3}\tau^{-2};$$
it is of class $C^\infty$ on $(0,\infty)$, the model has no external forces,
and coincident configurations are excluded. The force is attractive, and its
inverse-square form is an **adopted law** of this branch, not a consequence
of the equation of motion.

**(ii) The empirical mass identification.** For the quantitative
applications of this page, adopt in addition the identification
$$m_i^{g}=m_i\qquad(i=1,2)$$
of the gravitational coupling parameters with the inertial masses. This is an
**empirical assumption**, not part of clause (i) and not a consequence of the
equation of motion ([[post-cm02-interactions]] clause (vi)); it is the
content of the weak equivalence principle for these labels, and it is
adopted here only where a statement explicitly says so. When it is adopted,
$\kappa=G_{\mathrm N}m_1m_2$, and every conclusion that uses it inherits its
empirical status; statements that never invoke clause (ii) remain conditional
on clause (i) alone, with $\kappa$ expressed through $m_1^{g},m_2^{g}$.

**(iii) The measured value of the constant.** When a model of this page is
used quantitatively, $G_{\mathrm N}$ may be **assigned** the CODATA 2022
recommended value
$$G_{\mathrm N}=6.674\,30(15)\times10^{-11}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}},$$
with standard uncertainty $0.000\,15\times10^{-11}$ in the same unit and
relative standard uncertainty $2.2\times10^{-5}$: a qualified empirical
premise, not a definition and not an exact value. The recommendation is a
least-squares value from 16 measurements whose mutual inconsistency led the
CODATA Task Group to expand its uncertainty by a factor of $3.9$, and the
2022 value agrees with the 2018 value because the input data were unchanged.
Any numerical conclusion that uses this assignment inherits the uncertainty
of $G_{\mathrm N}$ together with the uncertainties and conditions of the
other model data actually used; no such numerical conclusion is drawn by
this postulate itself.

**(iv) Scope and exclusions.** The force equations in clause (i) define the
formal Newtonian point-particle model. The words **weak-field** and
**non-relativistic** specify when it is intended as an approximation to a
relativistic gravitational description. Let $c:=299792458\,\mathrm{m\,s^{-1}}$
be the speed of light in vacuum, used here only as an external comparison
constant, not as a parameter in the Newtonian equations. For a configuration
$x=(x_1,x_2)\in Q$ with $\rho(x):=\lvert x_1-x_2\rvert>0$, define the
source potentials per unit gravitational coupling as scalar functions
$\Phi_1,\Phi_2:Q\to\mathbb R$ by
$$\Phi_1(x):=-\frac{G_{\mathrm N}m_2^{g}}{\rho(x)},\qquad \Phi_2(x):=-\frac{G_{\mathrm N}m_1^{g}}{\rho(x)},$$
each of dimension $\ell^2\tau^{-2}$. Fix the inertial frame of
[[post-cm02-force-superposition]] clause (i), with its time and spatial
coordinates, as the comparison frame for the intended relativistic
approximation. For a state velocity $v=(v_1,v_2)\in(\mathbb R^3)^2$,
where $v_i$ is the coordinate velocity of label $i$ in that frame, define
the dimensionless parameters
$$\epsilon_{\Phi}(x):=\frac{\max\{\lvert\Phi_1(x)\rvert,\lvert\Phi_2(x)\rvert\}}{c^2},\qquad \epsilon_v(v):=\frac{\max\{\lvert v_1\rvert^2,\lvert v_2\rvert^2\}}{c^2}.$$
For a motion $x:J\to Q$, a trajectory interval $\mathcal I\subseteq J$ and a dimensionless tolerance
$\eta\in(0,1)$ chosen small enough for the intended approximation, the
weak-field, slow-motion regime in this comparison frame on that segment means
$$\epsilon_{\Phi}(x(t))\le\eta\quad\text{and}\quad\epsilon_v(x'(t))\le\eta\qquad\text{for every }t\in\mathcal I.$$
Small relative speed alone does not meet the speed condition: adding a
common large velocity leaves $v_1-v_2$ unchanged. The formal Newtonian
equations retain their frame transformation rule, but this approximation
criterion is assessed in the specified comparison coordinates, as in the
cited Newtonian-limit discussion; it is not asserted in every boosted frame.
The choice of $\eta$ is application-specific; these conditions are applicability
criteria, not a proved sufficient condition for a relativistic error bound.
This model supplies no
relativistic correction estimate or error bound. When $G_{\mathrm N}$ is
assigned the value in clause (iii), these inequalities inherit its standard
uncertainty and any uncertainty in the other inputs; no regime assessment is
made here. The model treats the two
labels as point particles with fixed masses, ignores external bodies,
rotation, deformation, mass loss, radiation and any non-gravitational force,
and excludes coincident configurations. It is not asserted that any physical
system is exactly of this form; in particular, the identification of clause
(ii) is not a framework-wide identification, and the inverse-square law is
not derived from the balance laws of the framework.

**(v) Status.** Clauses (i), (ii) and (iii) are adopted assumptions of the
model and its empirical inputs; this item contains no proof and no
measurement of its own. The theorems of this page that invoke the model are
conditional on these clauses, and agreement of their predictions with
observations would test the combined model and apparatus assumptions rather
than prove them.

## Status and scope

- **What is primitive and what is derived.** The inertial masses, the
  gravitational couplings, the constant $G_{\mathrm N}$ and the pair form are
  model data; the reduced mass $\mu=m_1m_2/(m_1+m_2)$ is derived from the
  inertial masses, and $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}$ (or
  $G_{\mathrm N}m_1m_2$ under clause (ii)) is the parameter that enters the
  central-force statements.

- **Why the identification is separated.** Momentum, angular momentum and
  energy balances and the relative reduction use only the inertial masses and
  the potential; the equality of gravitational and inertial parameters enters
  only through clause (ii), so its empirical content is not silently
  absorbed into the mechanical theorems.

- **Why the constant is separated.** $G_{\mathrm N}$ is measured, not exact;
  a page that replaces it by a number must say so and must carry the
  uncertainty. The symbolic theorems of this page use the symbol; only
  explicitly numerical applications would use clause (iii).
